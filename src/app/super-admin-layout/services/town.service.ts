import { Injectable } from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Town} from '../../shared/interfases';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TownService {

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {
  }

  createTown(town: Town): Observable<Town> {
    return this.http.post<Town>(`${environment.postgresDbUrl}/town`, town);
  }

  removeTown(id: number): Observable<any> {
    return this.http.delete(`${environment.postgresDbUrl}/town/${id}`);
  }

  updateTown(town: Town): Observable<any>{
    return this.http.patch<any>(`${environment.postgresDbUrl}/town`, town);
  }

  getAllTowns(): Observable<Array<Town>> {
    return this.http.get<Array<Town>>(`${environment.postgresDbUrl}/town`);
  }

  getOneTownById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.postgresDbUrl}/town/${id}`);
  }

  getTownsByOptions(option: string): Observable<Array<Town>> {
    return this.http.get<Array<Town>>(`${environment.postgresDbUrl}/region/${option}`);
  }

  public errorHandle(error: HttpErrorResponse): any {
    const message = error.error.message;
    if (message) {
      switch (message) {
        case('повторювані значення ключа порушують обмеження унікальності "town_town_name_countryid_key"'):
          this.error$.next('така назва міста для цієї країни вже зареєстрована.');
          break;
      }
    }
    return throwError(error);
  }

}
