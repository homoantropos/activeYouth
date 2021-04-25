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

  updateStatistic(report: Report): Observable<Report> {
    return this.http.patch<Report>(`${environment.postgresDbUrl}/report`, report);
  }

  getAllStatistics(): Observable<Array<Report>> {
    const stats: Array<Report> =
      (MockDataBase.statistics) as Array<Report>;
    return of(stats);
  }

  getAllReports(): Observable<Array<Report>> {
    return this.http.get<Array<Report>>(`${environment.postgresDbUrl}/report`);
  }
  getStatisticByID(id: number): Observable<any> {
    return this.http.get<any>(`${environment.postgresDbUrl}/report/${id}`);
  }
}
