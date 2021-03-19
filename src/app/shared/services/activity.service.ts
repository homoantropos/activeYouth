import { Injectable } from '@angular/core';
import { Activity } from '../interfases';
import { Observable, of } from 'rxjs';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }

  createActivity(activity: Activity): Observable<Activity> {
    activity.id = `${Date.now()}`;
    MockDataBase.mockActivitiesDataBase.push(activity);
    return of(activity);
  }

  deleteActivity(activity: Activity): Array<Activity> {
    return MockDataBase.mockActivitiesDataBase.filter(a => a.id !== activity.id);
  }

  updateActivity(activity: Activity): Observable<Activity> {
    return of(activity);
  }

  getAllActivity(kindOfActivity: string): Observable<Array<Activity>> {
    const activities: Array<Activity> =
      (MockDataBase.mockActivitiesDataBase.filter(a => a.kindOfActivity === kindOfActivity)) as Array<Activity>;
    return of(activities);
  }

  getActivityByID(id: string): Observable<Activity> {
    return of((MockDataBase.mockActivitiesDataBase.find(a => a.id === id)) as Activity);
  }
}
