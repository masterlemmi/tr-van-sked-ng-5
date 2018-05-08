import { Component, ViewChild, AfterViewInit  } from '@angular/core';
import { SchedulesComponent } from './schedules/schedules.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent  {

	title = 'TR Shuttle Schedules';

	constructor(private router: Router) { }

	goHome (): void  {
		this.router.navigateByUrl('/home');
	};



}
