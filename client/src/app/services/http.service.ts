import { Injectable } from '@angular/core';
import { Categories } from '../interfaces/categories';
import { Courses } from '../interfaces/courses';
import { Testimonials } from '../interfaces/testimonials';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  public getCategories(): Observable<Array<Categories>> {
    return this.http.get<Array<Categories>>('http://localhost:44125/categories/popular');
  }
  public getCourses(): Observable<Array<Courses>> {
    return this.http.get<Array<Courses>>('http://localhost:44125/courses/popular');
  }
  public getTestimonials(): Observable<Array<Testimonials>> {
    return this.http.get<Array<Testimonials>>('http://localhost:44125/testimonials/homepage');
  }
  public getAllUsers(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:44125/users');
  }
  public getAllCategories(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:44125/categories');
  }
  public getAllCourses(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:44125/courses');
  }
}
