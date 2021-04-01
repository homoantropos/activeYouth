import { Injectable } from '@angular/core';
import {Appointment, AppointmentFinancing} from '../interfases';
import { Observable, of } from 'rxjs';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentFinancingService {

  constructor(
    private http: HttpClient
  ) { }

  // all those methods will be changed with the http-client after DB creating

  createAppointmentFinancing(appointmentFinancing: AppointmentFinancing): Observable<AppointmentFinancing> {
    return this.http.post<AppointmentFinancing>(`${environment.mongoDbUrl}/expenses`, appointmentFinancing);
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
