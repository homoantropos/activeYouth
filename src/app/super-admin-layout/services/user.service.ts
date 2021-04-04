import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../shared/interfases';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  registrateUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.mongoDbUrl}/auth/register`, user);
  }
}
