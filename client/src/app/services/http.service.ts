import { Injectable } from '@angular/core';
import { Categories } from '../interfaces/categories';
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
  public getCourses(): Observable<Array<Categories>> {
    return this.http.get<Array<Categories>>('http://localhost:44125/courses/popular');
  }
  public getTestimonials(): Observable<Array<Categories>> {
    return this.http.get<Array<Categories>>('http://localhost:44125/testimonials/homepage');
  }
}
