import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
@Component({
  selector: 'app-dashboard-navigation',
  templateUrl: './dashboard-navigation.component.html',
  styleUrls: ['./dashboard-navigation.component.scss']
})
export class DashboardNavigationComponent implements OnInit {
  links = [
    {
      id: 1,
      name: 'Categories',
      href: '#'
    },
    {
      id: 2,
      name: 'Courses',
      href: '#',
    },
    {
      id: 3,
      name: 'Users',
      href: '#'
    }
  ];
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

}
