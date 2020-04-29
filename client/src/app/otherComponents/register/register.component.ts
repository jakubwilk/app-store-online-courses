import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerUserData = {};

  constructor(private register: RegisterService) { }

  ngOnInit(): void {
  }
  registerUser() {
    // console.log(this, this.registerUserData);
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
