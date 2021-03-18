import { Injectable } from '@angular/core';
import { Result } from '../interfases';
import { Observable, of } from 'rxjs';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor() {
  }
  createActivity(result: Result): Observable<Result> {
    return of(result);
  }

  deleteActivity(result: Result): void {

  }

  updateActivity(result: Result): Observable<Result> {
    return of(result);
  }

  getAllActivity(): Observable<Array<Result>> {
    const results: Array<Result> =
      (MockDataBase.mockResultsDataBase) as Array<Result>;
    return of(results);
  }

  getAppointmentByID(id: string): Observable<Result> {
    return of((MockDataBase.mockResultsDataBase.find(r => r.id === id)) as Result);
  }
}
