import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registeredUrl = "http://localhost:3000/api/register"
  private

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(this._registeredUrl, user)
  }
}
