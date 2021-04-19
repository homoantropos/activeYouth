import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../../shared/interfases';
import {Observable, Subject, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${environment.postgresDbUrl}/user`);
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.postgresDbUrl}/user`, user);
  }

  removeUser(id: string): Observable<any> {
    return this.http.delete(`${environment.postgresDbUrl}/user/${id}`);
  }

  getOneUserById(id: number): Observable<User> {
    return this.http.get<User>(`${environment.postgresDbUrl}/user/${id}`);
  }

  updateUser(user: User): Observable<any>{
    return this.http.patch<any>(`${environment.postgresDbUrl}/user/${user.person_id}`, user);
  }

  public errorHandle(error: HttpErrorResponse): any {
    const message = error.error.message;
    if (message) {
      switch (message) {
        case('повторювані значення ключа порушують обмеження унікальності "person_email_key"'):
          this.error$.next('емейл вже занято. спробуйте інший.');
          break;
      }
    }
    return throwError(error);
  }

}
