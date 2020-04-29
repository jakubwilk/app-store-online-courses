import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Login } from '../../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData: Login = {};

  constructor(private login: LoginService) { }

  ngOnInit(): void {
  }
  loginUser() {
    //console.log(this.loginUserData);
    this.login.loginUser(this.loginUserData)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }



}
