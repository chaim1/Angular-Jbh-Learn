import { Component } from "@angular/core";
import { OopService } from "./oop.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nums;
  constructor(private oopServices: OopService) {
    this.oopServices.subscribe((res)=>{
      this.nums = res;
    })
  }

  addNumber(event: HTMLInputElement) {
    this.oopServices._nums.push(Number(event.value));
  }
}
