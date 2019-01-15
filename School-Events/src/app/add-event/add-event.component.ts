import { Component, OnInit } from '@angular/core';
import { EventModul } from '../moduls/event.modul';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addevent(name: string, date: Date, duration: number, classes: string){
    if(!name || !date || !duration)return;
    if(Number.isNaN(Number(duration)))return;
    let arrayEvents = [];
    var array = JSON.parse(window.localStorage.getItem('events'));
    for(let i = 0; i< array.length; i++){
      arrayEvents.push(array[i])
    }
    const event = <EventModul>{
      name: name,
      date: date,
      duration: Number(duration),
      classes: classes
    }
    arrayEvents.push(event)
    let eventi =  JSON.stringify(arrayEvents)
    localStorage.setItem('events', eventi);
  }
}
