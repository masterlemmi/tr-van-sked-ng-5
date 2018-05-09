 import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';

 import { Observable, of } from 'rxjs';
 import { catchError, map, tap, filter } from 'rxjs/operators';

 import { Schedule } from './schedule';
 import { MessageService } from './message.service';
 import { DateUtilService } from './date-util.service';


 const httpOptions = {
 	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };


 @Injectable({
 	providedIn: 'root'
 })
 export class UploadService {

 private uploadUrl = 'api/schedules/upload';  // URL to web api

 constructor(
 	private http: HttpClient,
 	private messageService: MessageService,
 	private dateUtilService: DateUtilService) { }


 uploadNewSchedule(uploadData: FormData){
 	return this.http.post(this.uploadUrl, uploadData, {responseType: 'text'})
 	.pipe(
 		  tap(response => console.log("RESPONSE", response)),
 		  catchError(this.handleError('uploadNewSchedule', []))
 		) 
 }


   /**
       * Handle Http operation that failed.
       * Let the app continue.
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */
 private handleError<T> (operation = 'operation', result?: T) {
 	return (error: any): Observable<T> => {
          console.error("error", error);
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
          // Let the app keep running by returning an empty result.
          return of(result as T);
      };
  }

  /** Log a ScheduleService message with the MessageService */
  private log(message: string) {
  	this.messageService.add('UploadService: ' + message);
  }
}
