import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Coach} from '../../shared/interfases';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(
    private http: HttpClient
  ) { }

  saveCoachToDB(coach: Coach): Observable<Coach> {
    return this.http.post<Coach>(`${environment.postgresDbUrl}/coach`, coach);
  }
  getAllCoaches(): Observable<Array<Coach>> {
    return this.http.get<Array<Coach>>(`${environment.postgresDbUrl}/coach`);
  }
}
