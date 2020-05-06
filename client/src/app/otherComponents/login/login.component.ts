import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Login } from '../../interfaces/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isHidden = true;
  validationMessage = 'First fill out the fields correctly';
  errorMessage: string;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: [null, [
        Validators.required,
      ]],
      password: [null, [
        Validators.required,
      ]]

    });
    // this.loginForm.valueChanges.subscribe(console.log);
  }
  onSubmit() {
    this.loginUser();


  }
  loginUser() {
    if (this.loginForm.valid) {
      this.loginService.loginUser(this.loginForm.value)
        .subscribe(
          response => {
            if (response.statusCode === 400) {
              this.errorMessage = response.message[0].constraints.value;
              this.isHidden = false;
            } else {
              this.isHidden = true;
              console.log('Success');
              console.log(response);
              localStorage.setItem('token', response.authToken);

              this.router.navigate(['/home']);
            }
          },
          error => {
            console.log(error);

          }
        );

    } else {
      this.isHidden = false;
    }

  }
  get login() {
    return this.loginForm.get('login');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
