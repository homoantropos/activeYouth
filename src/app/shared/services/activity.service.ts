import {Injectable} from '@angular/core';
import {Activity, Appointment} from '../interfases';
import {Observable, of} from 'rxjs';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

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

  deleteActivity(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.mongoDbUrl}/activities/${id}`);
  }

  updateActivity(activity: Activity): Observable<Activity> {
    return of(activity);
  }

  getAllActivity(kindOfActivity: string): Observable<Array<Activity>> {
    return this.http.get<Array<Activity>>(`${environment.mongoDbUrl}/activities`)
      .pipe(
        map(
          activities => activities.filter(activity => activity.kindOfActivity === kindOfActivity)
        )
      );
  }

  getActivityByID(id: string): Observable<Activity> {
    return this.http.get<Activity>(`${environment.mongoDbUrl}/activities/${id}`);
  }
}
