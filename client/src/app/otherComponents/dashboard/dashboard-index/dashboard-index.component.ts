import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';


@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.scss']
})
export class DashboardIndexComponent implements OnInit {
  users: number;
  courses: number;
  categories: number;

  constructor(private httpCourses: HttpService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getCourses();
    this.getUsers();
  }
  getCourses() {
    this.httpCourses.getCourses().subscribe(courses => this.courses = courses.length);
  }
  getCategories() {
    this.httpCourses.getCategories().subscribe(categories => this.categories = categories.length);
  }
  getUsers() {
    this.httpCourses.getUsers().subscribe(users => this.users = users.length);
  }
}
