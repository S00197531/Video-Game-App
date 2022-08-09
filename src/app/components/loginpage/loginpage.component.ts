import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  loginUserData : { email?: string, password?: string; } = {}
  constructor() { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log(this.loginUserData)
  }

}
