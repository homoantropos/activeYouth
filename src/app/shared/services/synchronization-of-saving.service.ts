import { Injectable } from '@angular/core';
import {Appointment, AppointmentFinancing, Statistic} from '../interfases';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';

@Injectable({
  providedIn: 'root'
})
export class SynchronizationOfSavingService {

  constructor() { }

  onAppointmentCreeation(appointment: Appointment): void {
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
  }
}
