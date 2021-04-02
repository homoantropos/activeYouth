import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Activity, Appointment } from '../interfases';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';


@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor( ) { }

  saveAppointmentToDatabase(appointment: Appointment): Observable<Appointment> {
    appointment._id = MockDataBase.schedule.length.toString();
    MockDataBase.schedule.push(appointment);
    return of(appointment);
  }

  saveActivityToDataBase(activity: Activity): Observable<Activity> {
    activity.kindOfActivity = 'physical culture';
    activity._id = 'MockActivitiesDataBase.mockActivitiesDataBase.length + 1';
    MockDataBase.mockActivitiesDataBase.push(activity);
    return of(activity);
  }

  saveSportToDataBase(activity: Activity): Observable<Activity> {
    activity.kindOfActivity = 'sport';
    activity._id = 'MockActivitiesDataBase.mockActivitiesDataBase.length + 1';
    MockDataBase.mockActivitiesDataBase.push(activity);
    return of(activity);
  }

}
