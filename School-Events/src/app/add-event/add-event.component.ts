import { Component, OnInit } from '@angular/core';
import { EventModul } from '../models/event.model';
import { Classroom } from '../classroom.enum';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  classes: Classroom[];
  constructor() {
    this.classes=[1,2,3,4,5];
   }
  arraynum: number;
  event: EventModul[] ;
  ngOnInit() {
  }
  addevent(name: string, date: Date, duration: number, classes: number) {
    // var element = <HTMLInputElement> document.getElementById("is3dCheckBox");
    // console.log(element);

    // if (!name || !date || !duration) return;
    // if (Number.isNaN(Number(duration))) return;
    // let arrayEvents = [];
    // var array = JSON.parse(window.localStorage.getItem('events'));
    // if (array!== null) {
    //   for (let i = 0; i < array.length; i++) {
    //     arrayEvents.push(array[i])
    //   }
    //    this.arraynum = array.length+1;
    // }else{
    //   this.arraynum = 1
    // }
    
    // const event = <EventModul>{
    //   id: this.arraynum,
    //   name: name,
    //   date: date,
    //   duration: Number(duration),
    //   classes: [Classroom.A, Classroom.B,Classroom.C]
    // }
    // arrayEvents.push(event)
    // let eventi = JSON.stringify(arrayEvents)
    // localStorage.setItem('events', eventi);
  }
}
