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
  createResult(result: Result): Observable<Result> {
    // http-client post will be here later
    return of(result);
  }

  deleteResult(result: Result): void {
    // http-client delete will be here later
  }

  updateResult(result: Result): Observable<Result> {
    // http-client patch will be here later
    return of(result);
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
