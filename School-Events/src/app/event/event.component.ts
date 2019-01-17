import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventModul } from '../models/event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event: EventModul[];
  @Output() deleteEvent: EventEmitter<number> = new  EventEmitter<number>();
  constructor(private eventService: EventService) { }

  ngOnInit() {
  }
  deleteE(event): void{
    const eventId = event.id;
    this.deleteEvent.emit(eventId);
  }
}
