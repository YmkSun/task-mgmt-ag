import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Login } from './login';
import { LoginService } from './login.service';
@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'login';
  login: Login;

  constructor(private loginService: LoginService, private _router: Router) {
    this.login = new Login();
  }

  userLogin() {
    console.log('login', this.login);
    let self = this;
    this.loginService.login(self.login).subscribe(data => {
      console.log(data);
      this._router.navigate(['/dashboard']);
    },
      error => {});
  }
}