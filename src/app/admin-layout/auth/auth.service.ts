import { Injectable } from '@angular/core';
import { User } from '../../shared/interfases';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  login(user: User): void {
    const candidate = MockDataBase.authenticatedUsers.find((e) => e.email === user.email);
    if (candidate) {
      if (user.password === candidate.password) {
        user.idToken = candidate.idToken;
        localStorage.setItem('idToken', `${candidate.idToken}`);
        this.router.navigate(['admin', 'activities']);
      } else {
        alert('password is incorrect');
      }
    } else {
      alert('user with such email didnt exist');
    }
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['admin', 'login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('idToken');
  }

}
