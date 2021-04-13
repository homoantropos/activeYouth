import { Injectable } from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {SportKind, User} from '../../shared/interfases';

@Injectable({
  providedIn: 'root'
})

export class SportKindService {

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {
  }

  getAllSportKinds(): Observable<any> {
    return this.http.get<any>(`${environment.postgresDbUrl}/sportKind`);
  }

  createSportKind(sportKind: SportKind): Observable<SportKind> {
    return this.http.post<SportKind>(`${environment.postgresDbUrl}/sportKind`, sportKind);
  }

  removeSportKind(id: number): Observable<any> {
    return this.http.delete(`${environment.postgresDbUrl}/sportKind/${id}`);
  }

  getOneSportKindById(id: number): Observable<SportKind> {
    return this.http.get<SportKind>(`${environment.postgresDbUrl}/sportKind/${id}`);
  }

  updateSportKind(sportKind: SportKind): Observable<any>{
    return this.http.patch<any>(`${environment.postgresDbUrl}/sportKind`, sportKind);
  }

  public errorHandle(error: HttpErrorResponse): any {
    const message = error.error.message;
    if (message) {
      switch (message) {
        case('повторювані значення ключа порушують обмеження унікальності "sportkind_name_key"'):
          this.error$.next('такий вид спорту вже зареєстровано.');
          break;
      }
    }
    return throwError(error);
  }

}
