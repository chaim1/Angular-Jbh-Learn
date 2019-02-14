import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel: UserModel;


  constructor() { 
    this.userModel = <UserModel>{};
  }

  ngOnInit() {
  
  }
  register(form){
    // this.userModel = 
    // this.userModel = <UserModel>{};
    // this.userModel.name = form.name;
    // this.userModel.age = form.age;
    // this.userModel.gender = form.gender;
    // this.userModel.cellphone = form.cellphone;
    // console.log(this.userModel);
  }
}
