import { Injectable } from '@angular/core';
import { EventModul } from '../moduls/event.modul';

@Injectable({
  providedIn: 'root'
})
export class EventService  {
 events: EventModul[];
  constructor() { }
  get(): EventModul[] {
    this.events = JSON.parse(window.localStorage.getItem('events'));
    console.log(this.events);
    
    return this.events;
  }
}
