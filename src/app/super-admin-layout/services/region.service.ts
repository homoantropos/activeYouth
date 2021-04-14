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

  createRegion(region: Region): Observable<Region> {
    return this.http.post<Region>(`${environment.postgresDbUrl}/region`, region);
  }

  removeRegion(id: number): Observable<any> {
    return this.http.delete(`${environment.postgresDbUrl}/region/${id}`);
  }

  updateREgion(region: Region): Observable<any>{
    return this.http.patch<any>(`${environment.postgresDbUrl}/region`, region);
  }

  getAllRegions(): Observable<Array<Region>> {
    return this.http.get<Array<Region>>(`${environment.postgresDbUrl}/region`);
  }

  getOneREgionById(id: number): Observable<Region> {
    return this.http.get<Region>(`${environment.postgresDbUrl}/region/${id}`);
  }

  getOneRegionByGroup(group: number): Observable<Region> {
    return this.http.get<Region>(`${environment.postgresDbUrl}/region/${group}`);
  }

  public errorHandle(error: HttpErrorResponse): any {
    const message = error.error.message;
    if (message) {
      switch (message) {
        case('повторювані значення ключа порушують обмеження унікальності "region_name_key"'):
          this.error$.next('така назва країни вже зареєстрована.');
          break;
      }
    }
    return throwError(error);
  }

}
