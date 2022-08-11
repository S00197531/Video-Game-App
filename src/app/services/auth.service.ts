import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registeredUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(this._registeredUrl, user)
  }

  loginUser(user: any) {
    return this.http.post(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
}
