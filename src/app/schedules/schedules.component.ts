import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Schedule } from '../schedule';
import { ScheduleService } from '../schedule.service';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { DateUtilService } from '../date-util.service';
import {Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-schedules',
	templateUrl: './schedules.component.html',
	styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
	schedules: Schedule[] = [];
	value = "";
	dataSource = new MatTableDataSource<Schedule>();
	displayedColumns = ['time', 'route', 'van_id', 'location'];
	message = "";

	private manualDate: Date = new Date();

	constructor(private scheduleService: ScheduleService,
		private route: ActivatedRoute,
		private location: Location,
		private router: Router,
		private dateUtilService: DateUtilService
		) { }

	ngOnInit() {
		const direction = this.route.snapshot.paramMap.get('dir');
		let dirParam: string;
		if(direction == "incoming"){
			dirParam = "IN";
		} else if (direction == "outgoing") {
			dirParam = "OUT";
		} else if (direction == "all"){
			dirParam = "ALL";
		} else {
			this.router.navigateByUrl("/home");
		}

		this.scheduleService.getScheduleByDirection(dirParam).subscribe(
			schedules => {
				console.log("FINALLLY recieved " + schedules.length)
				this.schedules = schedules;
				this.getSchedulesForTheHour();
			});
	}

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim();
		filterValue = filterValue.toLowerCase();
		this.dataSource.filter = filterValue;
	}


	getSchedules(): void {
		this.value = "";
		this.dataSource.filter = "";
		this.scheduleService.getSchedules().subscribe(
			schedules => {
				this.dataSource.data = schedules;
			}
			);
	}


	getSchedulesForTheHour(): void {
		this.manualDate = new Date();
		console.log("FILTERING " + this.schedules.length)
		this.dataSource.data = this.schedules.filter(schedule =>
			this.dateUtilService.sameHour(schedule.time, this.manualDate)
		);

		console.log(this.dataSource.data.length + " == " + "table list")
	}


	getSchedulesForTheNextHour(): void {
		let newHour: number = this.manualDate.getHours() + 1;
		newHour = newHour == 24? 0: newHour;
		this.manualDate.setHours(newHour);
		this.dataSource.data = this.schedules.filter(schedule =>
			this.dateUtilService.sameHour(schedule.time, this.manualDate)
		);
	}

	getSchedulesForThePrevHour(): void {
		let newHour: number = this.manualDate.getHours() - 1;
		newHour = newHour < 0? 23: newHour;
		this.manualDate.setHours(newHour);
		this.dataSource.data = this.schedules.filter(schedule =>
			this.dateUtilService.sameHour(schedule.time, this.manualDate)
		);
	}



	delete(schedule: Schedule): void {
		this.schedules = this.schedules.filter(h => h !== schedule);
		this.scheduleService.deleteSchedule(schedule).subscribe();
	}

}


export interface Element {
	time: number;
	route: string;
	van_id: string;
	loc: string;
}