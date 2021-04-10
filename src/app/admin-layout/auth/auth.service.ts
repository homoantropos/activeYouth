import {Injectable} from '@angular/core';
import {User} from '../../shared/interfases';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public error$: Subject<string> = new Subject<string>();
  token = null;

  constructor(
    private http: HttpClient,
    private router: Router) {
  }

  getToken(): string | null {
    // @ts-ignore
    const expDate = new Date(localStorage.getItem('auth-token-exp'));
    if (new Date() > expDate) {
      this.logOut();
      return null;
    }
    return localStorage.getItem('auth-token');
  }

  login(user: User): Observable<any> {
    return this.http.post<{ token: string }>(`${environment.postgresDbUrl}/user/login`, user)
      .pipe(
        tap(
          ({token}) => {
            const authExpTime = new Date(new Date().getTime() + 60 * 60 * 1000 );
            localStorage.setItem('auth-token-exp', authExpTime.toString());
            localStorage.setItem('auth-token', token);
            this.setToken(token);
          }
        ),
        catchError(this.errorHandle.bind(this))
      );
  }

  logOut(): void {
    this.setToken(null);
    localStorage.clear();
    this.router.navigate(['/admin', 'login']);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  setToken(token: string | null): void {
    // @ts-ignore
    this.token = token;
  }

  private errorHandle(error: HttpErrorResponse): any {
    const message = error.error.message;
    if (message) {
      switch (message) {
        case('INVALID_PASSWORD'):
          this.error$.next('невірний пароль');
          break;
        case('EMAIL_NOT_FOUND'):
          this.error$.next('емейл не знайдено');
          break;
      }
    }
    return throwError(error);
  }

}
