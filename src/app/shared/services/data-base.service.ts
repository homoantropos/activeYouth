import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Appointment} from '../interfases';
import {MockSchedule} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';


@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor() { }

  saveToDatabase(appointment: Appointment): Observable<Appointment> {
    MockSchedule.schedule.push(appointment);
    return of(appointment);
  }
}
