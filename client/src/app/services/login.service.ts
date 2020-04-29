import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'localhost:44125/users/login';

  constructor(private http: HttpClient) { }
  loginUser(user): Observable<any> {
    return this.http.post<any>(this.loginUrl, user);
  }
}
