import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Town} from '../../shared/interfases';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TownService {

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {
  }

  createTown(town: Town): Observable<{ town: Town, message: string }> {
    return this.http.post<{ town: Town, message: string }>(`${environment.postgresDbUrl}/town`, town);
  }

  deleteTown(id: number): Observable<{ message: string, towns: Array<Town> }> {
    return this.http.delete<{message: string, towns: Array<Town>}>(`${environment.postgresDbUrl}/town/${id}`);
  }

  updateTown(town: Town): Observable<{ town: Town, message: string }> {
    return this.http.patch<{ town: Town, message: string }>(`${environment.postgresDbUrl}/town`, town);
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

  static get initTown(): Town {
    return {
        townName: '',
        country: {
          country_name: ''
        },
        region: {
          region_name: '',
          region_group: 0
        }
    };
  }

  public errorHandle(error: HttpErrorResponse): any {
    const message = error.error.message;
    if (message) {
      switch (message) {
        case('повторювані значення ключа порушують обмеження унікальності "town_town_name_countryid_key"'):
          this.error$.next('така назва міста для цієї країни вже зареєстрована.');
          break;
        case('update або delete в таблиці "appointment_place" порушує обмеження зовнішнього ключа "appointment_appointmentPlaceId_fkey" таблиці "appointment"'):
          this.error$.next('Видалення міста неможливе - спочатку видаліть всі місця проведення, пов"язані з цим містом');
          break;
      }
    }
    return throwError(error);
  }

}
