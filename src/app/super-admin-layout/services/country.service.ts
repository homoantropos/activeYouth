import { Injectable } from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Country} from '../../shared/interfases';
import {AutoUpdateArrays} from '../../shared/utils/autoUpdateArrays';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {
  }

  getAllCountries(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(`${environment.postgresDbUrl}/country`);
  }

  createCountry(country: Country): Observable<Country> {
    AutoUpdateArrays.countryNames.push(country.countryName);
    return this.http.post<Country>(`${environment.postgresDbUrl}/country`, country);
  }

  removeCountry(id: number): Observable<any> {
    return this.http.delete(`${environment.postgresDbUrl}/country/${id}`);
  }

  getOneCountryById(id: number): Observable<Country> {
    return this.http.get<Country>(`${environment.postgresDbUrl}/country/${id}`);
  }

  updateCountry(country: Country): Observable<any>{
    AutoUpdateArrays.countryNames.push(country.countryName);
    return this.http.patch<any>(`${environment.postgresDbUrl}/country`, country);
  }

  static get initCountry(): Country {
    return {
      countryName: ''
    };
  }

  public errorHandle(error: HttpErrorResponse): any {
    const message = error.error.message;
    if (message) {
      switch (message) {
        case('повторювані значення ключа порушують обмеження унікальності \"country_countryName_key25\"'):
          this.error$.next('така назва країни вже зареєстрована.');
          break;
      }
    }
    return throwError(error);
  }

}
