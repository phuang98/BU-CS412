import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<h3>Child: </h3>' +
    'The temperature for the next 3 hours:'+
    '<div name="outerList">\n' +
    '  <ul *ngFor="let data of [currentWeather.first, currentWeather.second, currentWeather.third]">' +
    '<li (click)="display(data)">{{data}} </li></ul>\n' +
    '</div>' +
    '<div name="details" *ngIf="currentWeather"></div>',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() currentWeather: any;
  display(data: number) {
  }

  constructor() { }

  ngOnInit(): void {
  }

}
