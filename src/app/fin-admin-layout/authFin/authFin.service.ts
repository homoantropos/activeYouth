import { Injectable } from '@angular/core';
import { User } from '../../shared/interfases';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthFinService {

  private token = null;

  constructor(
    private http: HttpClient,
    private router: Router) {
  }

  getToken(): string | null {
    return this.token;
  }

  login(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${environment.mongoDbUrl}/auth/login`, user)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth-token', token);
            this.setToken(token);
          }
        )
      );
  }

  logOut(): void {
    this.setToken(null);
    localStorage.clear();
    this.router.navigate(['expenses', 'login']);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(token: string | null): void {
    // @ts-ignore
    this.token = token;
  }

}
