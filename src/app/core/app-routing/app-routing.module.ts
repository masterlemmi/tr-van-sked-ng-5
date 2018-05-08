import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from '../../dashboard/dashboard.component';
import { ScheduleDetailComponent } from '../../schedule-detail/schedule-detail.component';
import { SchedulesComponent } from '../../schedules/schedules.component';
import { LoginComponent } from '../../login/login.component';


const routes: Routes = [

{ path: '', redirectTo: '/schedules', pathMatch: 'full' },
{ path: 'schedule/:id', component: ScheduleDetailComponent },
{ path: 'schedules', component: SchedulesComponent },
{ path: 'dashboard', component: DashboardComponent },
//{ path: 'user', component: UserComponent },
{ path: 'login', component: LoginComponent },
{path : '', component : LoginComponent}
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {

	

}

