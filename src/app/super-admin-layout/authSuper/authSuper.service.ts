import {Injectable} from '@angular/core';
import {User} from '../../shared/interfases';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthSuperService {
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
    return this.http.post<{ token: string }>(`${environment.mongoDbUrl}/auth/login`, user)
      .pipe(
        tap(
          ({token}) => {
            const authExpTime = new Date(new Date().getTime() + 60 * 60 * 1000);
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
    this.router.navigate(['/superadmin', 'login']);
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
        case('INVALID_EMAIL'):
      }
    }
    console.log(message);
    return throwError(error);
  }

}
