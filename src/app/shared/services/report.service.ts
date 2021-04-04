import { Injectable } from '@angular/core';
import { Report } from '../interfases';
import { Observable, of } from 'rxjs';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private http: HttpClient
  ) {
  }
  createStatistic(stats: Report): Observable<Report> {
    return this.http.post<Report>(`${environment.mongoDbUrl}/reports`, stats);
  }

  deleteStatistic(stats: Report): void {

  }

  updateStatistic(stats: Report): Observable<Report> {
    return of(stats);
  }

  getAllStatistics(): Observable<Array<Report>> {
    const stats: Array<Report> =
      (MockDataBase.statistics) as Array<Report>;
    return of(stats);
  }

  getStatisticByID(id: string): Observable<Report> {
    return of((MockDataBase.statistics.find(s => s._id === id)) as Report);
  }
}
