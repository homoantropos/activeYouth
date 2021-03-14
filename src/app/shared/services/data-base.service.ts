import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Activity, Appointment} from '../interfases';
import {MockActivitiesDataBase, MockSchedule} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';


@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor() { }

  saveAppointmentToDatabase(appointment: Appointment): Observable<Appointment> {
    appointment.id = MockSchedule.schedule.length.toString();
    MockSchedule.schedule.push(appointment);
    return of(appointment);
  }

  saveActivityToDataBase(activity: Activity): Observable<Activity> {
    activity.kindOfActivity = 'physical culture';
    activity.id = 'MockActivitiesDataBase.mockActivitiesDataBase.length + 1';
    MockActivitiesDataBase.mockActivitiesDataBase.push(activity);
    return of(activity);
  }

  saveSportToDataBase(activity: Activity): Observable<Activity> {
    activity.kindOfActivity = 'sport';
    activity.id = 'MockActivitiesDataBase.mockActivitiesDataBase.length + 1';
    MockActivitiesDataBase.mockActivitiesDataBase.push(activity);
    return of(activity);
  }
}
