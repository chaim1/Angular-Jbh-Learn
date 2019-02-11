import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems;
  constructor() { 
    this.menuItems = [
      {
        target: 'home',
        anchor: 'Home'
      },
      {
        target: 'about',
        anchor: 'About'
      }
    ]
  }

  ngOnInit() {
  }

}
