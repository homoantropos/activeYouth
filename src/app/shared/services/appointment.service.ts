import { Injectable } from '@angular/core';
import {Appointment, AppointmentFinancing, Statistic} from '../interfases';
import { Observable, of } from 'rxjs';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {SynchronizationOfSavingService} from './synchronization-of-saving.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(
    private http: HttpClient,
    private synchronizationService: SynchronizationOfSavingService
  ) { }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    this.http.post('http://localhost:5000/api/schedule', appointment).subscribe(a => console.log(a));
    appointment.id = `${Date.now()}`;
    MockDataBase.schedule.unshift(appointment);
    this.synchronizationService.onAppointmentCreeation(appointment);
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
