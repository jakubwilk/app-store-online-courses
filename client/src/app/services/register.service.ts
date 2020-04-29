import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerUrl = 'http://localhost:44125/users/create';


  constructor(private http: HttpClient) { }

  registerUser(user): Observable<any> {

    return this.http.post<any>(this.registerUrl, user);
  }
}

