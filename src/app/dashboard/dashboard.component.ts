import { Component, OnInit } from '@angular/core';

import { Image } from '../shared/model/image';
import { IMAGES } from '../shared/static-json/images';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  images: Image[]; 
  constructor() { }

  ngOnInit() {
    this.images = IMAGES;
  }

}
