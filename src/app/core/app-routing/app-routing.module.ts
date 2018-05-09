import { NgModule }             from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { DashboardComponent }   from '../../dashboard/dashboard.component';
import { ScheduleDetailComponent } from '../../schedule-detail/schedule-detail.component';
import { SchedulesComponent } from '../../schedules/schedules.component';
import { LoginComponent } from '../../login/login.component';
import { MaterialTestComponent } from '../../material-test/material-test.component';
import { HomeComponent } from '../../home/home.component';
import { AdminComponent } from '../../admin/admin.component';
import {AuthGuard} from '../auth.guard';

const routes: Routes = [

{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'schedules/:dir', component: SchedulesComponent  },
{ path: 'schedule/:id', component: ScheduleDetailComponent },
{ path: 'schedules', component: SchedulesComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'materialtest', component: MaterialTestComponent },
//{ path: 'admin', component: AdminComponent,  canActivate: [AuthGuard] },
{ path: 'admin', component: AdminComponent},
//{ path: 'user', component: UserComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },

{path : '', component : LoginComponent}
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {

	

}

