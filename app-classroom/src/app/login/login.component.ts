import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authServece: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login(emailHtmlElemnt, passwordHtmlElement) {
    this.authServece.login(emailHtmlElemnt.value, passwordHtmlElement.value)
      .subscribe((successRes) => {
        console.log(successRes);
        this.router.navigate(['member']);
      }, (errorRes) => {
        console.log(errorRes);
        emailHtmlElemnt.value = passwordHtmlElement.value ='';
      })
  }

}
