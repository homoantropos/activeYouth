import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Activity} from '../interfases';
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
    return this.http.post<Activity>(`${environment.postgresDbUrl}/activity`, activity);
  }

  deleteActivity(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.postgresDbUrl}/activity/${id}`);
  }

  updateActivity(activity: Activity): Observable<Activity> {
    return this.http.patch<Activity>(`${environment.postgresDbUrl}/activity/${activity._id}`, activity);
  }

  getAllActivities(kindOfActivity: string): Observable<Array<Activity>> {
    return this.http.get<Array<Activity>>(`${environment.postgresDbUrl}/activity?kindOfActivity=${kindOfActivity}`);
    // .pipe(
    //   map(
    //     response => response.filter(act => act.kindOfActivity === kindOfActivity)
    //   )
    // );
  }

  getActivityByID(id: number): Observable<Activity> {
    return this.http.get<Activity>(`${environment.postgresDbUrl}/activity/${id}`);
  }
}
