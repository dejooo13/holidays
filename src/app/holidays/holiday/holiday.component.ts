import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {
  appService: AppService;
  @Input() holiday;

  constructor(appService: AppService) {
    this.appService = appService;
   }

  ngOnInit() {
  }


}
