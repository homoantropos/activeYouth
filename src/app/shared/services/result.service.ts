import { Injectable } from '@angular/core';
import { Result } from '../interfases';
import { Observable, of } from 'rxjs';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(
    private http: HttpClient
  ) {
  }

  createResult(result: Result): Observable<Result> {
    return this.http.post<Result>(`${environment.postgresDbUrl}/result`, result);
  }

  deleteResult(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${environment.postgresDbUrl}/result/${id}`);
  }

  updateResult(result: Result): Observable<Result> {
    // http-client patch will be here later
    return of(result);
  }

  getAllResultsFromDb(): Observable<Array<Result>> {
    return this.http.get<Array<Result>>(`${environment.postgresDbUrl}/result`);
  }

  getResultByAppointment(id: number): Observable<Array<Result>> {
    return this.http.get<Array<Result>>(`${environment.postgresDbUrl}/result/appointment/${id}`);
  }

  getAllResults(): Observable<Array<Result>> {
    // http-client get will be here later
    const results: Array<Result> =
      (MockDataBase.mockResultsDataBase) as Array<Result>;
    return of(results);
  }

  getResultByID(id: string): Observable<Result> {
    // http-client get will be here later
    return of((MockDataBase.mockResultsDataBase.find(r => r.result_id === id)) as Result);
  }
}
