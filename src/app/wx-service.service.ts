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

  getWeatherByFormGroup(wx: FormGroup) {
    console.log(`in getWeatherByFormGroup `)
    console.log(this.http.post<any>(this.baseURL, {response: wx}))
    return this.http.post<any>(this.baseURL, {response: wx});
  }
}
