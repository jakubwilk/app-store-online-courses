import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-card-courses',
  templateUrl: './card-courses.component.html',
  styleUrls: ['./card-courses.component.scss']
})
export class CardCoursesComponent implements OnInit {
  courses = [];

  constructor(private httpCourses: HttpService) { }

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses() {
    this.httpCourses.getCourses().subscribe(categories => this.courses = categories);

  }

}
