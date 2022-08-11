import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 

  registerUserData : { email?: string, password?: string; } = {}

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }


  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      (res:any) => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate([`/`])     
       },
      err => console.log(err)
    )
}

}
