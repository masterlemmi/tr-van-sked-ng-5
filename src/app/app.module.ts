import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './core/app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { SchedulesComponent } from './schedules/schedules.component';
import {MaterialModule} from "./core/material/material.module";
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
  AppComponent,
  MessagesComponent,
  DashboardComponent,
  SchedulesComponent,
  ScheduleDetailComponent,
  LoginComponent

  ],
  imports: [  BrowserModule,  FormsModule,  AppRoutingModule,  HttpClientModule,  
       MaterialModule,
      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false }
  )
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
