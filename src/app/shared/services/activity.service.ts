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
    activity._id = `${Date.now()}`;
    MockDataBase.mockActivitiesDataBase.push(activity);
    return of(activity);
  }

  deleteActivity(activity: Activity): Observable<string> {
    return of((activity._id) as string);
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
    return of((MockDataBase.mockActivitiesDataBase.find(a => a._id === id)) as Activity);
  }
}
