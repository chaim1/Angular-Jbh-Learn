import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email:string, password:string): Observable<string>{
    if(email == "aaa.com" && password =="aaa"){
      return of("okfdgfdsfg55grtey34trey").pipe(
        map(res=>{
          this.setToken(res);
          return res;
        })
      );
    }else{
      return throwError('user or password incorrect')
    }
  }
  setToken(t:string){
    window.localStorage.setItem(environment.tokenKey, t)
  }

  getToken(){
    return localStorage.getItem(environment.tokenKey)
  }
  isLogged(){
    return this.getToken() != null; 
  }
}
