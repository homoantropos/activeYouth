import { Injectable } from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Country, Region} from '../../shared/interfases';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {
  }

  createRegion(region: Region): Observable<{ region: Region, message: string }> {
    return this.http.post<{ region: Region, message: string }>(`${environment.postgresDbUrl}/region`, region);
  }

  removeRegion(id: number): Observable<any> {
    return this.http.delete(`${environment.postgresDbUrl}/region/${id}`);
  }

  updateRegion(region: Region): Observable<{ region: Region, message: string }>{
    return this.http.patch<{ region: Region, message: string }>(`${environment.postgresDbUrl}/region`, region);
  }

  getAllRegions(): Observable<Array<Region>> {
    return this.http.get<Array<Region>>(`${environment.postgresDbUrl}/region`);
  }

  getOneRegionById(id: number): Observable<Region> {
    return this.http.get<Region>(`${environment.postgresDbUrl}/region/${id}`);
  }

  getOneRegionByGroup(group: number): Observable<Region> {
    return this.http.get<Region>(`${environment.postgresDbUrl}/region/${group}`);
  }

  public errorHandle(error: HttpErrorResponse): any {
    const message = error.error.message;
    if (message) {
      switch (message) {
        case('повторювані значення ключа порушують обмеження унікальності "region_region_name_key"'):
          this.error$.next('така назва регіону для цієї країни вже зареєстрована.');
          break;
      }
    }
    return throwError(error);
  }

  static get initRegion(): Region {
    return {
      regionName: '',
      regionGroup: 0,
      country: {
        country_name: ''
      }
    };
  }
}
