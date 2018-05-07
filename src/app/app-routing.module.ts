import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import { SchedulesComponent } from './schedules/schedules.component';

const routes: Routes = [

{ path: '', redirectTo: '/schedules', pathMatch: 'full' },
{ path: 'schedule/:id', component: ScheduleDetailComponent },
{ path: 'schedules', component: SchedulesComponent },
{ path: 'dashboard', component: DashboardComponent }
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {

	

}

