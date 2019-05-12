import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  MatNativeDateModule,
} from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddComponent } from "./tasks/add/add.component";
import { ListComponent } from './tasks/list/list.component';
import { TaskComponent } from './tasks/task/task.component';


@NgModule({
  declarations: [AppComponent, AddComponent, ListComponent, TaskComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule

  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
