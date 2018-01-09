import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  http: Http;
  holiday: {name: string, date: string};

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
      // data.holidays.forEach(day => {
      //   const date = new Date(day.date),
      //     formatedDate = ('0' + date.getDate()).slice(-2) + '.' +
      //       ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear();
      //       console.log(formatedDate);
      // });
      return this.holiday = data;
    });
  }

}
