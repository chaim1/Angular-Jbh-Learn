import { Injectable } from '@angular/core';
import { EventModul } from "../models/EventModul";

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
  
  delete(id: number) {
     
    debugger;
    const idx = this.events.findIndex(e => e.id == id);
    this.events.splice(idx, 1);
   }
}
