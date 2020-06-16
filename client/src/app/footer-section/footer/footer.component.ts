import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  idOfUser: number;


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.verifyUser();
  }
  verifyUser() {
    this.loginService.verifyUser()
      .subscribe(response => {
        this.idOfUser = response.userId;
      });
  }
}

