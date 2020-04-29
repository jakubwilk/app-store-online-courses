import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Register } from '../../interfaces/register';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;




  constructor(private register: RegisterService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: '',
      email: '',
      password: '',
      repassword: '',
      type: ''

    });
    this.registerForm.valueChanges.subscribe(console.log);
  }
  onSubmit() {
    this.register.registerUser(this.registerForm.value)
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




