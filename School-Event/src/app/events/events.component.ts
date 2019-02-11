import { Component, OnInit, Input } from '@angular/core';
import { EventModule } from '../moduls/events.modul';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @Input() event: EventModule[];
  constructor() { }

  ngOnInit() {
  }

}
