import { Injectable } from '@angular/core';
import {Appointment, NumbersOfParticipants, Statistic} from '../shared/interfases';
import {MockDataBase} from './mockDB';

@Injectable({
  providedIn: 'root'
})
export class MockDBAdministratorService {

  constructor() { }

  createResult(appointment: Appointment): Statistic {

    const countries = Math.floor(Math.random() * 25);
    const regions = Math.floor(Math.random() * 25);
    const educationEntity = Math.floor(Math.random() * 400);
    const sportsmen = Math.floor(Math.random() * 1000);
    const coaches = Math.floor(Math.random() * 50);
    const referees = Math.floor(Math.random() * 15);
    const others = Math.floor(Math.random() * 10);
    const total = countries + regions + educationEntity + sportsmen + coaches + referees + others;

    const numberOfParticipants: NumbersOfParticipants = {
      countries,
      regions,
      educationEntity,
      sportsmen,
      coaches,
      referees,
      others,
      total
    };

    const appointmentStatistic: Statistic = {
      appointment,
      numberOfParticipants
    };
    return appointmentStatistic;
  }

  createStatistics(): void {
    MockDataBase.schedule.map(
      a => {
        const result = this.createResult(a);
        return MockDataBase.statistics.push(result);
      }
    );
  }
}
