    import { Injectable } from '@angular/core';
    import { HttpClient, HttpHeaders } from '@angular/common/http';
    
    import { Observable, of } from 'rxjs';
    import { catchError, map, tap } from 'rxjs/operators';
    
    import { Schedule } from './schedule';
    import { MessageService } from './message.service';


    const httpOptions = {
    	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    @Injectable({ providedIn: 'root' })
    export class ScheduleService {
    	
      private schedulesUrl = 'api/schedules';  // URL to web api
      
      constructor(
      	private http: HttpClient,
      	private messageService: MessageService) { }
      
      /** GET schedules from the server */
      getSchedules (): Observable<Schedule[]> {
      	return this.http.get<Schedule[]>(this.schedulesUrl)
      	.pipe(
      		tap(schedules => this.log(`fetched schedules`)),
      		catchError(this.handleError('getSchedules', []))
      		);
      }
      
      /** GET schedule by id. Return `undefined` when id not found */
      getScheduleNo404<Data>(id: number): Observable<Schedule> {
      	const url = `${this.schedulesUrl}/?id=${id}`;
      	return this.http.get<Schedule[]>(url)
      	.pipe(
            map(schedules => schedules[0]), // returns a {0|1} element array
            tap(h => {
            	const outcome = h ? `fetched` : `did not find`;
            	this.log(`${outcome} schedule id=${id}`);
            }),
            catchError(this.handleError<Schedule>(`getSchedule id=${id}`))
            );
      }
      
      /** GET schedule by id. Will 404 if id not found */
      getSchedule(id: number): Observable<Schedule> {
      	const url = `${this.schedulesUrl}/${id}`;
      	return this.http.get<Schedule>(url).pipe(
      		tap(_ => this.log(`fetched schedule id=${id}`)),
      		catchError(this.handleError<Schedule>(`getSchedule id=${id}`))
      		);
      }
      
      /* GET schedules whose name contains search term */
      searchSchedules(term: string): Observable<Schedule[]> {
      	if (!term.trim()) {
          // if not search term, return empty schedule array.
          return of([]);
      }
      return this.http.get<Schedule[]>(`api/schedules/?name=${term}`).pipe(
      	tap(_ => this.log(`found schedules matching "${term}"`)),
      	catchError(this.handleError<Schedule[]>('searchSchedules', []))
      	);
  }
  
      //////// Save methods //////////
      
      /** POST: add a new schedule to the server */
      addSchedule (schedule: Schedule): Observable<Schedule> {
      	return this.http.post<Schedule>(this.schedulesUrl, schedule, httpOptions).pipe(
      		tap((schedule: Schedule) => this.log(`added schedule w/ id=${schedule.id}`)),
      		catchError(this.handleError<Schedule>('addSchedule'))
      		);
      }
      
      /** DELETE: delete the schedule from the server */
      deleteSchedule (schedule: Schedule | number): Observable<Schedule> {
      	const id = typeof schedule === 'number' ? schedule : schedule.id;
      	const url = `${this.schedulesUrl}/${id}`;
      	
      	return this.http.delete<Schedule>(url, httpOptions).pipe(
      		tap(_ => this.log(`deleted schedule id=${id}`)),
      		catchError(this.handleError<Schedule>('deleteSchedule'))
      		);
      }
      
      /** PUT: update the schedule on the server */
      updateSchedule (schedule: Schedule): Observable<any> {
      	return this.http.put(this.schedulesUrl, schedule, httpOptions).pipe(
      		tap(_ => this.log(`updated schedule id=${schedule.id}`)),
      		catchError(this.handleError<any>('updateSchedule'))
      		);
      }
      
      /**
       * Handle Http operation that failed.
       * Let the app continue.
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */
       private handleError<T> (operation = 'operation', result?: T) {
       	return (error: any): Observable<T> => {
       		
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
          
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
          
          // Let the app keep running by returning an empty result.
          return of(result as T);
      };
  }
  
  /** Log a ScheduleService message with the MessageService */
  private log(message: string) {
  	this.messageService.add('ScheduleService: ' + message);
  }
}
