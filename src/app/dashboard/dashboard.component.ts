import { Component, OnInit } from '@angular/core';

import { Carousel } from '../shared/model/carousel';
import { CAROUSELS } from '../shared/static-json/carousels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  carousels: Carousel[]; 
  constructor() { }

  ngOnInit() {
    this.carousels = CAROUSELS;
  }

}
