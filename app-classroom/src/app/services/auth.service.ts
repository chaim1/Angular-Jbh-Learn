import { Injectable } from '@angular/core';
import { of, throwError, Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private _isLogged : BehaviorSubject<boolean>;

  constructor() { 
    this._isLogged = new BehaviorSubject<boolean>(false);
  }

  login(email:string, password:string): Observable<string>{
    if(email == "aaa.com" && password =="aaa"){
      return of("okfdgfdsfg55grtey34trey").pipe(
        map(res=>{
          this.setToken(res);
          this._isLogged.next(true)
          return res;
        })
      );
    }else{
      return throwError('user or password incorrect')
    }
  }
  private setToken(t:string){
    window.localStorage.setItem(environment.tokenKey, t)
  }
  private deletoken(){
    window.localStorage.removeItem(environment.tokenKey)
    return this._isLogged
  }

  private getToken(){
    return localStorage.getItem(environment.tokenKey)
  }
  isLogged(): Observable<boolean>{
    return this._isLogged;
    // return of(this.getToken() != null); 
  }
  logout(){
    this._isLogged.next(false)
    this.deletoken();
    return this._isLogged
  }
}
