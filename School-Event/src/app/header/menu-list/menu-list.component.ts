import { Component, OnInit, Input } from '@angular/core';
import { MenusModul } from 'src/app/moduls/menu.modul';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  @Input() menuItem: MenusModul;
  constructor() { }

  ngOnInit() {
  }

}
