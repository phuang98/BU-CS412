import { Component } from '@angular/core';

import {WX} from './data/wxMOCK';
import {DATA} from './data/wx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BU-CS412';

  wx: DATA[] = WX;
  selectedDATA: DATA;

  showLastName(hour: string) {
    this.selectedDATA = this.wx.find(name => name.hour === hour);
  }

}
