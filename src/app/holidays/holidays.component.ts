import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  countries: any[] = [
    {val: 'AR', country: 'Argentina'},
    {val: 'AO', country: 'Angole'},
    {val: 'AT', country: 'Austria'},
    {val: 'AU', country: 'Australia'},
    {val: 'AW', country: 'Aruba'},
    {val: 'AX', country: 'Aland Islands'},
    {val: 'BA', country: 'Bosnia and Herzegovina'},
    {val: 'BE', country: 'Belgium'},
    {val: 'BO', country: 'Bolivia'},
    {val: 'BR', country: 'Brazil'},
    {val: 'BS', country: 'The Bahamas'},
    {val: 'CA', country: 'Canada'},
    {val: 'CH', country: 'Switzerland'},
    {val: 'CN', country: 'China'},
    {val: 'CO', country: 'Colombia'},
    {val: 'CR', country: 'Costa Rica'},
    {val: 'CU', country: 'Cuba'},
    {val: 'CZ', country: 'Czech republic'},
    {val: 'DE', country: 'Germany'},
    {val: 'DK', country: 'Denmark'},
    {val: 'DO', country: 'Dominican Republic'},
    {val: 'EC', country: 'Ecuador'},
    {val: 'ES', country: 'Spain'},
    {val: 'FI', country: 'Finland'},
    {val: 'GR', country: 'Greece'},
    {val: 'HR', country: 'Croatia'},
    {val: 'HU', country: 'Hungary'},
    {val: 'ID', country: 'Indonesia'},
    {val: 'IE', country: 'Ireland'},
    {val: 'IN', country: 'India'},
    {val: 'IL', country: 'Israel'},
    {val: 'IS', country: 'Iceland'},
    {val: 'IT', country: 'Italy'},
    {val: 'JP', country: 'Japan'},
    {val: 'KZ', country: 'Kazakhstan'},
    {val: 'LS', country: 'Lesotho'},
    {val: 'LU', country: 'Luxembourg'},
    {val: 'MG', country: 'Madagaskar'},
    {val: 'MQ', country: 'Martinique'},
    {val: 'MT', country: 'Malta'},
    {val: 'MU', country: 'Mauritius'},
    {val: 'MX', country: 'Mexico'},
    {val: 'MZ', country: 'Mozambique'},
    {val: 'NG', country: 'Nigeria'},
    {val: 'NL', country: 'Netherlands'},
    {val: 'NO', country: 'Norway'},
    {val: 'PE', country: 'Peru'},
    {val: 'PK', country: 'Pakistan'},
    {val: 'PH', country: 'Philippines'},
    {val: 'PL', country: 'Poland'},
    {val: 'PR', country: 'Puerto Rico'},
    {val: 'PT', country: 'Portugal'},
    {val: 'PY', country: 'Paraguay'},
    {val: 'RO', country: 'Romania'},
    {val: 'RU', country: 'Russia'},
    {val: 'SE', country: 'Sweden'},
    {val: 'SG', country: 'Singapore'},
    {val: 'SI', country: 'Slovenia'},
    {val: 'SK', country: 'Slovakia'},
    {val: 'TN', country: 'Tunisia'},
    {val: 'TR', country: 'Turkey'},
    {val: 'UA', country: 'Ukraine'},
    {val: 'US', country: 'United States'},
    {val: 'UY', country: 'Uruguay'},
    {val: 'VE', country: 'Venezuela'},
    {val: 'ZA', country: 'South Africa'},
    {val: 'ZW', country: 'Zimbabwe'}
  ];

  appService: AppService;
  holiday: {name: string, date: string};

  constructor(appService: AppService) {
    this.appService = appService;
  }

  ngOnInit() {
  }

  onSubmit(subForm) {
    const count = subForm.value.country,
     y = subForm.value.year,
     m = subForm.value.month;
    this.appService.getHolidays(count, y, m);
    this.holiday = this.appService.holiday;
  }

}



