import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'localhost:44125/users/login';

  constructor(private http: HttpClient) { }
  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }
}
