import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Register } from '../../interfaces/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData: Register = {};


  constructor(private register: RegisterService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.registerUser();

  }
  registerUser() {
    console.log(this.registerUserData);
    console.log(this.registerUserData.type);
    this.register.registerUser(this.registerUserData)
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
