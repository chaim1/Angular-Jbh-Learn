import { Injectable } from '@angular/core';
import { EventModule } from '../moduls/events.modul';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events: EventModule[];
  constructor() {
    this.events= [
      {
        id: 1,
        dateStart: new Date,
        duration: 1.30,
        participants: [{
          id: 1, 
          name: "event1"
          // classroom: [{
          //   a=1
          // }]
      }]
      },{
        id: 1,
        dateStart: new Date,
        duration: 1.30,
        participants: [{
          id: 1, 
          name: "event1"
          // classroom: [{
          //   a=1
          // }]
      }]
      }
    ]
   }
   getEvents(){
     return this.events;
   }
}
