import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { WeatherComponent } from './weather/weather.component';
import { AppService } from './app.service';
import { HolidayComponent } from './holidays/holiday/holiday.component';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  { path: 'holidays', component: HolidaysComponent},
  { path: 'weather', component: WeatherComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HolidaysComponent,
    WeatherComponent,
    HolidayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB1pTWbRIwzh9m5ZSVk-FL9CZwfXd1QaPI'
    })
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
