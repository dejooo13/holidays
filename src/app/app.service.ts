import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  http: Http;
  holiday: Holiday = {};

  constructor(http: Http) {
    this.http = http;
   }

  getHolidays(count, y, m) {
    this.http.get(`https://holidayapi.com/v1/holidays?
    key=8d45b0ca-8dee-4818-94f9-79c392f526d7&country=${count}&year=${y}&month=${m}`)
    .map((res: Response) => {
      const data = res.json(),
            holidays = data.holidays,
            holiday = holidays.map( (day) => {
              return {name: day.name, date: day.date};
            });
     return holiday;
    })
    .subscribe((data) => {
      console.log(this.holiday);
      return this.holiday = data[0];
    });
  }

}
interface Holiday {
  name ?: string;
  date ?: string;
}
