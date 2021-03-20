import { Injectable } from '@angular/core';
import { User } from '../../shared/interfases';
import { Router } from '@angular/router';
import { MockDbResponse } from '../../../environments/interfaces';
import {MockLoginService} from '../../thoseWillBeDeletedAfterDBCreating/mock-login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthFinService {

  constructor(
    private router: Router,
    private mockLoginService: MockLoginService
  ) { }

  get token(): string | null {
      // @ts-ignore
      const expDate = new Date(localStorage.getItem('expIn'));
    if (new Date() < expDate) {
      return localStorage.getItem('token');
    } else {
      return null;
    }
  }

  login(user: User): void {
    this.mockLoginService.mockLogin(user).subscribe(
      dbres => {
        if (!dbres.token){
          localStorage.clear();
          switch (dbres.status) {
            case 401 : alert('password is incorrect');
                       break;
            case 403 : alert('you dont have access to this area of the site');
                       break;
            case 404 : alert('user with such email didnt exist');
                       break;
          }
        } else {
            this.setToken(dbres);
            this.router.navigate(['expenses', 'dashboard']);
        }
      }
    );
  }

  logOut(): void {
    this.setToken(null);
    this.router.navigate(['expenses', 'login']);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(dBres: MockDbResponse | null): void {
    if (dBres) {
      localStorage.setItem('token', (dBres.token) as string);
      // @ts-ignore
      localStorage.setItem('expIn', dBres.expireIn.toString());
    } else {
      localStorage.clear();
    }
  }

}
