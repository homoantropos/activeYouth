import { Injectable } from '@angular/core';
import { User } from '../../shared/interfases';
import { Router } from '@angular/router';
import {MockLoginService} from '../../thoseWillBeDeletedAfterDBCreating/mock-login.service';
import {MockDbResponse} from '../../../environments/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private dbServise: MockLoginService
  ) { }

  get token(): string | null {
    // @ts-ignore
    const expireDate = new Date(localStorage.getItem('expIn'));
    if (new Date() > expireDate) {
      localStorage.clear();
      return null;
    } else {
      return localStorage.getItem('token');
    }
  }

  login(user: User): void {
    this.dbServise.mocLogin(user).subscribe(
      dbRes => {
        if (!dbRes.token) {
          localStorage.clear();
          switch (dbRes.status) {
            case 401 : alert('password is incorrect');
                       break;
            case 404 : alert('user with such email doesnt exist');
                       break;
          }
        } else {
          this.setToken(dbRes);
          this.router.navigate(['admin', 'activities']);
        }
      }
    );
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['admin', 'login']);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(dbres: MockDbResponse | null): void {
    if (dbres?.token) {
      localStorage.setItem('token', dbres.token);
      // @ts-ignore
      localStorage.setItem('expIn', dbres.expireIn.toString());
    } else {
      localStorage.clear();
    }
  }

}
