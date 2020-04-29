import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Login } from '../../interfaces/login';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData: Login = {};
  loginForm: FormGroup;

  constructor(private login: LoginService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: '',
      password: ''

    });

    //this.loginForm.valueChanges.subscribe(console.log);
  }
  onSubmit() {
    this.login.loginUser(this.loginForm.value)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
}
