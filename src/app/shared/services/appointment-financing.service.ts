import { Injectable } from '@angular/core';
import { AppointmentFinancing } from '../interfases';
import { Observable, of } from 'rxjs';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';

@Injectable({
  providedIn: 'root'
})
export class AppointmentFinancingService {

  constructor() { }

  createAppointmentFinancing(appointmentFinancing: AppointmentFinancing): Observable<AppointmentFinancing> {
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
