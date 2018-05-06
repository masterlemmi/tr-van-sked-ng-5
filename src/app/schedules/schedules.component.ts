import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Schedule } from '../schedule';
import { ScheduleService } from '../schedule.service';
import {MatTableDataSource} from '@angular/material';

@Component({
	selector: 'app-schedules',
	templateUrl: './schedules.component.html',
	styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
	schedules: Schedule[];

	dataSource = new MatTableDataSource<Schedule>();
	displayedColumns = ['time', 'route', 'van_id', 'location'];

	constructor(private scheduleService: ScheduleService) { }

	getSchedules(): void {
		/*this.scheduleService.getSchedules()
		.subscribe(schedules => this.schedules = schedules);*/

		this.scheduleService.getSchedules().subscribe(
			schedules => {
				this.dataSource.data = schedules;
			}
			);
	}

	ngOnInit() {
		this.getSchedules()
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