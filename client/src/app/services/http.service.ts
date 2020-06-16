import { Injectable } from '@angular/core';
import { Categories } from '../interfaces/categories';
import { Courses } from '../interfaces/courses';
import { Testimonials } from '../interfaces/testimonials';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Array<Categories>> {
    return this.http.get<Array<Categories>>('http://localhost:44125/categories/popular');
  }

  public getAllCategories(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:44125/categories');
  }

  public postCategories(data): Observable<any> {
    return this.http.post<any>('http://localhost:44125/categories/create', { data });
  }

  public deleteCategories(id: number): Observable<any> {

    return this.http.post<any>(`http://localhost:44125/categories/delete`, { id });
  }

  public updateCategories(data): Observable<any> {
    console.log(data);

    return this.http.post<any>('http://localhost:44125/categories/edit', data);
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

  public getAllCourses(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:44125/courses');
  }
}
