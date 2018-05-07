import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Schedule } from '../schedule';
import { ScheduleService } from '../schedule.service';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { DateUtilService } from '../date-util.service';

@Component({
	selector: 'app-schedules',
	templateUrl: './schedules.component.html',
	styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
	schedules: Schedule[];
	value = "";
	dataSource = new MatTableDataSource<Schedule>();
	displayedColumns = ['time', 'route', 'van_id', 'location'];

	private manualDate: Date = new Date();

	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(private scheduleService: ScheduleService) { }

	ngOnInit() {
		this.getSchedulesForTheHour()
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
				console.log("Found "+ schedules.length)
			}
			);
	}


	getSchedulesForTheHour(): void {
		this.manualDate = new Date();
		this.scheduleService.getSchedulesForTheHour(this.manualDate).subscribe(
			schedules => {
				this.dataSource.data = schedules;
				console.log("Found "+ schedules.length)
			}
			);
	}


	getSchedulesForTheNextHour(): void {
		let newHour: number = this.manualDate.getHours() + 1;
		newHour = newHour == 24? 0: newHour;
		this.manualDate.setHours(newHour);
		this.scheduleService.getSchedulesForTheHour(this.manualDate).subscribe(
			schedules => {
				this.dataSource.data = schedules;
			}
			);
	}

	getSchedulesForThePrevHour(): void {
		let newHour: number = this.manualDate.getHours() - 1;
		newHour = newHour < 0? 23: newHour;
		this.manualDate.setHours(newHour);
		this.scheduleService.getSchedulesForTheHour(this.manualDate).subscribe(
			schedules => {
				this.dataSource.data = schedules;
			}
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