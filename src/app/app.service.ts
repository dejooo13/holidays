import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
  http: Http;
  lat = 51.678418;
  long = 7.809007;
  holiday: Holiday[] = [];
 weather: Weather[] = [];

  constructor(http: Http) {
    this.http = http;
   }

  getHolidays(count, y, m) {
   return this.http.get(`https://holidayapi.com/v1/holidays?
    key=8d45b0ca-8dee-4818-94f9-79c392f526d7&country=${count}&year=${y}&month=${m}`)
    .map((res: Response) => {
      const data = res.json(),
            holidays = data.holidays,
            holiday = holidays.map( (day) => {
              return {name: day.name, date: day.date};
            });
     return holiday;
    });
  }

  getWeather(c) {
    this.http.get(`https://api.darksky.net/forecast/2a9be1bce05107a78636317c85e6484f/${c}?units=si`)
    .map((res: Response) => {
      const data = res.json(),
            weathers = data.currently;
      return weathers;
    }).subscribe((data) => {
      console.log(data);
       return this.weather = data;
    });
  }

}
interface Holiday {
  name ?: string;
  date ?: string;
}
interface Weather {
  temperature ?: number;
  humidity ?: number;
  pressure ?: number;
  windSpeed ?: number;
  precipType ?: string;
  summary ?: string;
  icon: string;
}

