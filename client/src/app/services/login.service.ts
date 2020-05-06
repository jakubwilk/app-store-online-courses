import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from '../interfaces/login';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:44125/users/login';

  constructor(private http: HttpClient, private router: Router) { }

  public loginUser(user): Observable<any> {
    return this.http.post<any>(this.loginUrl, user)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  getToken() {
    localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);

  }

}
