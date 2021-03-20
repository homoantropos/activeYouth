import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthFinService} from './authFin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardFinService implements CanActivate {

  constructor(
    private auth: AuthFinService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['expenses', 'login'], {
        queryParams: {
          loginFailed: true
        }
      });
      return false;
    }
  }
}
