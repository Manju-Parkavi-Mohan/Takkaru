import { Component, OnInit } from '@angular/core';

import { NavItem } from '../shared/model/nav-item';
import { NAVITEMS } from '../shared/static-json/nav-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItems: NavItem[];

  constructor() { }

  ngOnInit() {
    this.navItems = NAVITEMS;
  }

}
