import { Injectable } from '@angular/core';
import {User} from '../../shared/interfases';
import {MockAuthenticatedUsers} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;
  constructor(
    private router: Router
  ) { }

  login(user: User): void {
    const candidate = MockAuthenticatedUsers.authenticatedUsers.find((e) => e.email === user.email);
    if (candidate) {
      if (user.password === candidate.password) {
        user.idToken = candidate.idToken;
        this.isAuthenticated = true;
        this.router.navigate(['admin', 'activities']);
      } else {
        alert('password is incorrect');
        this.isAuthenticated = false;
      }
    } else {
      alert('user with such email didnt exist');
      this.isAuthenticated = false;
    }
  }

  logOut(): void {
    this.isAuthenticated = false;
    this.router.navigate(['admin', 'login']);
  }

}
