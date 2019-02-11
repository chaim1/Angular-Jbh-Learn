import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/service/events.service';
import { EventModule } from 'src/app/moduls/events.modul';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: EventModule[];
  constructor(private eventsService: EventsService) { 
    this.events = this.eventsService.getEvents();
  }
  ngOnInit() {
  }
}
