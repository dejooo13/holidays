import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  appService: AppService;
  lat: number;
  long: number;
  locationChoosen = false;
  weather = [];

  constructor(appservice: AppService) {
    this.appService = appservice;
    this.lat = this.appService.lat;
    this.long = this.appService.long;
   }

  ngOnInit() {
  }

  onChoosenLocation(e) {
    this.lat = e.coords.lat;
    this.long = e.coords.lng;
    this.locationChoosen = true;
    const coords = this.lat + ',' + this.long;
    this.appService.getWeather(coords);
    this.weather = this.appService.weather;
    console.log(this.weather);
  }

}
