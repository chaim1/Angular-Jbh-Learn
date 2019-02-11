import { Component, OnInit } from '@angular/core';
import { MenusModul } from '../moduls/menu.modul';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems: MenusModul[];
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
