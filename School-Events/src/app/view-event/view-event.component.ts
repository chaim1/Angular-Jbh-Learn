import { Component, OnInit } from '@angular/core';
import { EventModul } from '../moduls/event.modul';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  events: EventModul[];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.get();
    // console.log(this.events );
    

  }

}
