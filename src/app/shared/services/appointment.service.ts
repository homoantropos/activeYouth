import { Injectable } from '@angular/core';
import {Appointment, AppointmentFinancing, Statistic} from '../interfases';
import { Observable, of } from 'rxjs';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    appointment.id = `${Date.now()}`;
    MockDataBase.schedule.unshift(appointment);
    const appointmentFinancing: AppointmentFinancing = {
      appointment,
      expensesPlan: {kekv2210: 0, kekv2220: 0, kekv2240: 0, total: 0},
      expensesFact: {kekv2210: 0, kekv2220: 0, kekv2240: 0, total: 0},
      id: ''
    };
    MockDataBase.balance.unshift(appointmentFinancing);

    const statistic: Statistic = {
      appointment,
      numberOfParticipantsPlan: {
        countries: 0,
        regions: 0,
        educationEntity: 0,
        sportsmen: 0,
        coaches: 0,
        referees: 0,
        others: 0,
        total: 0},
      personPerDayTotalPlan: 0,
      numberOfParticipantsFact: {
        countries: 0,
        regions: 0,
        educationEntity: 0,
        sportsmen: 0,
        coaches: 0,
        referees: 0,
        others: 0,
        total: 0},
      personPerDayTotalFact: 0,
      id: ' '
    };
    MockDataBase.statistics.unshift(statistic);
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
