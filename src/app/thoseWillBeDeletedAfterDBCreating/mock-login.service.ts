import { Injectable } from '@angular/core';
import {User} from '../shared/interfases';
import {Observable, of} from 'rxjs';
import {MockDbResponse} from '../../environments/interfaces';
import {MockDataBase} from './mockDB';

@Injectable({
  providedIn: 'root'
})
export class MockLoginService {

  constructor() { }

  mockFinLogin(user: User): Observable<MockDbResponse> {
    const candidate = MockDataBase.authenticatedUsers.find((u) => u.email === user.email);
    let dbResponce: MockDbResponse;
    if (candidate) {
      if (!(user.password === candidate.password)) {
        dbResponce = { user, status: 401};
      } else {
        if (candidate.accessLevel === 1) {
          const token = 'token';
          const expireIn = new Date(new Date().getTime() + 60 * 1000);
          dbResponce = {token, user, expireIn, status: 200};
        } else {
          dbResponce = { user, status: 403};
        }
      }
    } else {
      dbResponce = { user, status: 404};
    }
    return of(dbResponce);
  }

  mocLogin(user: User): Observable<MockDbResponse> {
    const candidate = MockDataBase.authenticatedUsers.find((u) => u.email === user.email);
    let dbResponce: MockDbResponse;
    if (candidate) {
      if (!(user.password === candidate.password)) {
        dbResponce = { user, status: 401};
      } else {
          const token = 'token';
          const expireIn = new Date(new Date().getTime() + 60 * 1000);
          dbResponce = {token, user, expireIn, status: 200};
      }
    }
    else {
      dbResponce = { user, status: 404};
    }
    return of(dbResponce);
  }
}

