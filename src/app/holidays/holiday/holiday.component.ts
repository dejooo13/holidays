import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {
  appService: AppService;

  constructor(appService: AppService) {
    this.appService = appService;
   }

  ngOnInit() {
  }


}
