import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from '../interfases';
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

}
