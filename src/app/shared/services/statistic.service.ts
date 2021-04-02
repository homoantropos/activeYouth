import { Injectable } from '@angular/core';
import { Statistic } from '../interfases';
import { Observable, of } from 'rxjs';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(
    private http: HttpClient
  ) {
  }
  createStatistic(stats: Statistic): Observable<Statistic> {
    return this.http.post<Statistic>(`${environment.mongoDbUrl}/statistic`, stats);
  }

  deleteStatistic(stats: Statistic): void {

  }

  updateStatistic(stats: Statistic): Observable<Statistic> {
    return of(stats);
  }

  getAllStatistics(): Observable<Array<Statistic>> {
    const stats: Array<Statistic> =
      (MockDataBase.statistics) as Array<Statistic>;
    return of(stats);
  }

  getStatisticByID(id: string): Observable<Statistic> {
    return of((MockDataBase.statistics.find(s => s._id === id)) as Statistic);
  }
}
