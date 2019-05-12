import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OopService extends BehaviorSubject<any>{
  _nums =[];
  constructor() {
    super(1)
    this._nums.push(Number(this.value));
    this.next(this._nums)
  }
}
