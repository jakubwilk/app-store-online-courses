import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(): Observable<any> {
    return this.verifyUser();
  }
  verifyUser() {
    return this.loginService.verifyUser()
      .pipe(map(response => {
        if (this.loginService.loggedIn() && response.userId === 1) {
          return true;
        } else {
          this.router.navigate(['/home']);
          return false;
        }
      }));

  }

}
