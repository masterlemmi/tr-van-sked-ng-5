import { Component, ViewChild, OnInit   } from '@angular/core';
import { SchedulesComponent } from './schedules/schedules.component';
import { Router } from '@angular/router';
import {AuthService} from './core/auth.service';
import { Observable} from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

	title = 'TR Shuttle Schedules';
	isLoggedIn$: Observable<boolean>; 

	constructor(private router: Router,
		private authService: AuthService) { }

	goHome (): void  {
		this.router.navigateByUrl('/home');
	};

	login() {
		this.router.navigateByUrl('/login');	
	}

	logout() {
		this.authService.logout();	
	}

	ngOnInit() {
		this.isLoggedIn$ = this.authService.isLoggedIn;
	}


}


