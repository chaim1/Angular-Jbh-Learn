import { Component, OnInit, Input } from '@angular/core';
import { EventModul } from '../moduls/event.modul';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event: EventModul[];
  constructor() { }

  ngOnInit() {
  }

}
