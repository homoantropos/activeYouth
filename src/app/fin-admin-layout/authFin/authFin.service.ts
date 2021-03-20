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
      const expDate = new Date(localStorage.getItem('expInFin'));
      if (new Date() > expDate) {
        localStorage.clear();
        return null;
      } else {
        return localStorage.getItem('finToken');
      }
  }

  login(user: User): void {
    this.mockLoginService.mockFinLogin(user).subscribe(
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
    if (dBres?.token) {
      localStorage.setItem('finToken', dBres.token);
      // @ts-ignore
      localStorage.setItem('expInFin', dBres.expireIn.toString());
    } else {
      localStorage.delete('finToken');
      localStorage.delete('expInFin');
    }
  }

}
