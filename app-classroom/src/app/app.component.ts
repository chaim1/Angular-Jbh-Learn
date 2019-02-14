import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

islooged: boolean;

  constructor(private authService: AuthService, private router: Router){}
  title = 'app-classroom';
  ngOnInit(){
    this.authService.isLogged().subscribe(res => {
      this.islooged = res;
    });
  }
  logout(){
    this.authService.logout().subscribe(r=>{
      console.log(r);
    });
    this.router.navigate(['home']);
  }
}
