import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {WxServiceService as WxService} from '../wx-service.service';

@Component({
  selector: 'app-parent',
  template: '<h3>Parent: </h3>' +
    'Lat and lon defaults to Boston, and units to imperial.' +
    '<Label><p>Open <a href="https://www.latlong.net/" class="btn btn-primary" role="button">https://www.latlong.net/</a> in a new tab to find the lat and lon of a location you\'d like to enter.</p>\n' +
    '</Label>\n' +
    '<br/>\n' +
    '<form [formGroup]="weatherFormGroup" (ngSubmit)="getWeatherByLatLon()">\n' +
    '  Lat: <input  formControlName="latControl"> : {{lat}}<br/>\n' +
    '  Lon: <input  formControlName="lonControl"> : {{lon}}<br/>\n' +
    '  Units: <input  formControlName="unitsControl" ><br/>\n' +
    '  <button type="submit">Submit</button>\n' +
    '</form>\n' +
    '<app-child [currentWeather]="currentWeather"></app-child>',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  currentWeather = {
    first: 0,
    second: 0,
    third: 0
  };

  lat: string;
  lon: string;
  units: string;

  weatherFormGroup = this.form.group({
    latControl: ['42.36', Validators.minLength(1)],
    lonControl: ['-71.06', Validators.minLength(1)],
    unitsControl: ['imperial', Validators.minLength(1)],
    subform: this.form.group({
      detail: ['']
    })
  })

  constructor(private wxService: WxService, private form: FormBuilder) {}

  getWeatherByLatLon() {
    this.wxService.getWeatherByFormGroup(this.weatherFormGroup).subscribe(
      response => {
        this.currentWeather = response['hourly'];
        this.currentWeather = {
          first: response['hourly'][0]['temp'],
          second: response['hourly'][1]['temp'],
          third: response['hourly'][2]['temp'],
        }
        console.log(`hourly looks like this: ${response['hourly']}`)
      }
    );
  }

  ngOnInit(): void {
  }

}
