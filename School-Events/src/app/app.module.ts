import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEventComponent,
    ListEventsComponent,
    AddEventComponent,
    EventComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
