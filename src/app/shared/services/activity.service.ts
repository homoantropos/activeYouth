import {Injectable} from '@angular/core';
import {Activity} from '../interfases';
import {Observable, of} from 'rxjs';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private http: HttpClient
  ) {
  }

  createActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(`${environment.mongoDbUrl}/activities`, activity);
  }

  deleteActivity(activity: Activity): Observable<string> {
    return of((activity._id) as string);
  }

  updateActivity(activity: Activity): Observable<Activity> {
    return of(activity);
  }

  getAllActivity(): Observable<Array<Activity>> {
    return this.http.get<Array<Activity>>(`${environment.mongoDbUrl}/activities`);
  }

  getActivityByID(id: string): Observable<Activity> {
    return of((MockDataBase.mockActivitiesDataBase.find(a => a._id === id)) as Activity);
  }
}
