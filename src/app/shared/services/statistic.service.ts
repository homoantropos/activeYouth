import { Injectable } from '@angular/core';
import { Statistic } from '../interfases';
import { Observable, of } from 'rxjs';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor() {
  }
  createActivity(stats: Statistic): Observable<Statistic> {
    return of(stats);
  }

  deleteActivity(stats: Statistic): void {

  }

  updateActivity(stats: Statistic): Observable<Statistic> {
    return of(stats);
  }

  getAllActivity(): Observable<Array<Statistic>> {
    const stats: Array<Statistic> =
      (MockDataBase.statistics) as Array<Statistic>;
    return of(stats);
  }

  getStatisticByID(id: string): Observable<Statistic> {
    return of((MockDataBase.statistics.find(s => s.id === id)) as Statistic);
  }
}
