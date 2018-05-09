import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DateUtilService {

	constructor() { }

	formatAMPM(date: Date) {
		let hours: number = date.getHours();
		let minutes: number = date.getMinutes();
		let ampm: string = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		let minuteString = minutes < 10 ? '0'+minutes : minutes;
		var strTime = hours + ':' + minuteString + ' ' + ampm;
		return strTime;
	}

	toDateFormat(time: string): Date {
		let splitTime: string[] = time.split(":");
		let hours: number = +splitTime[0];
		let splitTwo = splitTime[1].split(" ");
		let minutes: string = splitTwo[0];
		let ampm: string = splitTwo[1];

		if(ampm == "AM" && hours == 12){
			hours = 0;
		}
		
		if (ampm == "PM") {
			hours = hours == 12? 12: hours + 12;
			hours = hours == 24? 0: hours;
		}

		let hour: string = hours.toString();
		if (hours < 10) {
			hour = "0"+ hour;
		}

		let timeString = hour + ":" + minutes + ":00";
		
		return  new Date('1970-01-01T' + timeString );
	}

	sameHour(time: string, date: Date): boolean {
		let genDate: Date = this.toDateFormat(time);
		let tHours: number = genDate.getHours();
		let dHours: number = date.getHours();
		let result: boolean =  tHours == dHours;
		console.log(result)
		return result;
	}
}
