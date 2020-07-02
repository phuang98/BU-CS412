import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WxServiceService {

  baseURL = "http://localhost:3000/current"
  constructor(private http: HttpClient){ }

  getWeatherByFormGroup(form: FormGroup) {
    console.log(`in getWeatherByCity `)
    let lat = form.value.latControl;
    let lon = form.value.lonControl;
    let units = form.value.unitsControl;
    return this.http.post<any>(this.baseURL, {response: form});
  }
  // baseURL: string = "https://api.openweathermap.org/data/2.5/onecall?"
  // constructor(private http: HttpClient) { }

//   getWeatherByFormGroup(form: FormGroup) {
//     console.log(`in getWeatherByCity `)
//     let lat = form.value.latControl;
//     let lon = form.value.lonControl;
//     let units = form.value.unitsControl;
//     return this.http.get(this.baseURL + 'lat=' + lat + '&lon=' + lon + '&units=' + units + '&appid=f2565aa2d81246bed253bafcc04695da');
//
//   }
}
