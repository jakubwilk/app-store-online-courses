import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Register } from '../../interfaces/register';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isHidden = true;
  validationMessage: string;
  errorMessage: string;
  success = true;




  constructor(private register: RegisterService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [null, [
        Validators.required
      ]],
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      password: [null, [
        Validators.required,
        Validators.pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/))
      ]],
      repassword: [null, [
        Validators.required,
        Validators.pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/))
      ]],
      type: [false, [
        Validators.required
      ]]

    });
    // this.registerForm.valueChanges.subscribe(console.log);
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this.register.registerUser(this.registerForm.value)
        .subscribe(
          response => {
            if (response.statusCode === 400) {
              this.errorMessage = response.message[0].constraints.value;
              this.isHidden = false;
              console.log(response);
            } else {
              this.success = false;
              this.isHidden = true;
              console.log(response);
            }
          },
          error => {
            console.log(error);
          }
        );
    } else {
      this.isHidden = false;
      this.validationMessage = 'First fill out the fields correctly';
    }
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get repassword() {
    return this.registerForm.get('repassword');
  }

  get type() {
    return this.registerForm.get('type');
  }


}




