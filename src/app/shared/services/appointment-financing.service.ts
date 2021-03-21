import { Injectable } from '@angular/core';
import {Appointment, AppointmentFinancing} from '../interfases';
import { Observable, of } from 'rxjs';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';

@Injectable({
  providedIn: 'root'
})
export class AppointmentFinancingService {

  constructor() { }

  // all those methods will be changed with the http-client after DB creating

  createAppointmentFinancing(appointment: Appointment): Observable<AppointmentFinancing> {
    const appointmentFinancing: AppointmentFinancing = {
      appointment,
      expensesPlan: {kekv2210: 0, kekv2220: 0, kekv2240: 0, total: 0},
      expensesFact: {kekv2210: 0, kekv2220: 0, kekv2240: 0, total: 0},
      id: ''
    };
    MockDataBase.balance.unshift(appointmentFinancing);
    return of(appointmentFinancing);
  }

  deleteAppointment(appointment: AppointmentFinancing): void {

  }

  updateAppointment(appointmentFinancing: AppointmentFinancing): Observable<AppointmentFinancing> {
    return of(appointmentFinancing);
  }

  getAllAppointmentFinancings(): Observable<Array<AppointmentFinancing>> {
    return of(MockDataBase.balance);
  }

  getAppointmentFinancingByID(id: string): Observable<AppointmentFinancing> {
    return of((MockDataBase.balance.find(a => a.id === id)) as AppointmentFinancing);
  }
}
