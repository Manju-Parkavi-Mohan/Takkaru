import { Component, OnInit } from '@angular/core';

import { NavItem } from '../shared/navitem';
import { NAVITEMS } from '../shared/navitems';

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
