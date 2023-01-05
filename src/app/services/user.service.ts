import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'
import { newRegister } from '../models/register.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Url = "http://3.17.216.66:3000";

public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
 

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  
  constructor(private http: HttpClient, private router: Router) { }

  postNewUserData(user: newRegister): Observable<newRegister> {
    return this.http.post<newRegister>(`${this.Url} + 'users/register`, user);
  }

  loginUser(user: any) {
    this.loggedIn.next(true);
    return this.http.post<any>(`${this.Url} + 'users/authenticate`, user);
   
  }

  
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
