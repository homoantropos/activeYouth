import { Injectable } from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SportHall, Town} from '../../shared/interfases';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SportHallService {

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {
  }

  createSportHall(sportHall: SportHall): Observable<SportHall> {
    return this.http.post<SportHall>(`${environment.postgresDbUrl}/sportHall`, sportHall);
  }

  removeSportHall(id: number): Observable<any> {
    return this.http.delete(`${environment.postgresDbUrl}/sportHall/${id}`);
  }

  updateSportHall(sportHall: SportHall): Observable<any>{
    return this.http.patch<any>(`${environment.postgresDbUrl}/sportHall`, sportHall);
  }

  getAllSportHalls(): Observable<Array<SportHall>> {
    return this.http.get<Array<SportHall>>(`${environment.postgresDbUrl}/sportHall`);
  }

  getOneSportHallById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.postgresDbUrl}/sportHall/${id}`)
      .pipe(
        map(res => {
          const town = {town_name: res.town_name};
          const sportHall = {
            sportHall_name: res.sporthall_name,
            address: res.address,
            sportHall_id: res.sporthall_id,
            town
          };
          return sportHall;
        })
      );
  }

  getSportHallByOptions(option: string): Observable<Array<SportHall>> {
    return this.http.get<Array<SportHall>>(`${environment.postgresDbUrl}/sportHall/${option}`);
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
