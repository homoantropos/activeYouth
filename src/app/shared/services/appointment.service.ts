import { Injectable } from '@angular/core';
import { Appointment } from '../interfases';
import { Observable, of } from 'rxjs';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    appointment.id = `${Date.now()}`;
    return of(appointment);
  }

  deleteAppointment(appointment: Appointment): void {

  }

  updateAppointment(appointment: Appointment): Observable<Appointment> {
    return of(appointment);
  }

  getAllAppointments(): Observable<Array<Appointment>> {
    return of(MockDataBase.schedule);
  }

  getAppointmentByID(id: string): Observable<Appointment> {
    return of((MockDataBase.schedule.find(a => a.id === id)) as Appointment);
  }
}
