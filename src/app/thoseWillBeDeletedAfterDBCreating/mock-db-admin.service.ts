import {Injectable} from '@angular/core';
import {Appointment, Expenses, AppointmentFinancing, NumbersOfParticipants, Statistic} from '../shared/interfases';
import {MockDataBase} from './mockDB';

@Injectable({
  providedIn: 'root'
})
export class MockDBAdministratorService {

  constructor() {
  }

  createResult(appointment: Appointment): Statistic {

    const countries = Math.floor(Math.random() * 25);
    const regions = Math.floor(Math.random() * 25);
    const educationEntity = Math.floor(Math.random() * 400);
    const sportsmen = Math.floor(Math.random() * 1000);
    const coaches = Math.floor(Math.random() * 50);
    const referees = Math.floor(Math.random() * 15);
    const others = Math.floor(Math.random() * 10);
    const total = countries + regions + educationEntity + sportsmen + coaches + referees + others;

    const numberOfParticipantsPlan: NumbersOfParticipants = {
      countries,
      regions,
      educationEntity,
      sportsmen,
      coaches,
      referees,
      others,
      total
    };

    const numberOfParticipantsFact: NumbersOfParticipants = {
      countries,
      regions,
      educationEntity,
      sportsmen,
      coaches,
      referees,
      others,
      total
    };

    return {
      appointment,
      numberOfParticipantsPlan,
      numberOfParticipantsFact,
      id: `${Date.now()}`
    };
  }

  createStatistics(): void {
    MockDataBase.schedule.map(
      a => {
        const result = this.createResult(a);
        return MockDataBase.statistics.push(result);
      }
    );
  }

  createMockAppointmentFinancing(appointment: Appointment): AppointmentFinancing {
    const kekv2210plan = Math.random() * 2;
    const kekv2220plan = Math.random();
    const kekv2240plan = Math.random() * 5;

    const totalPlan = kekv2210plan + kekv2220plan + kekv2240plan;

    const expensesPlan: Expenses = {
      kekv2210: kekv2210plan,
      kekv2220: kekv2220plan,
      kekv2240: kekv2240plan,
      total: totalPlan
    };

    const kekv2210fact = Math.random() * 2;
    const kekv2220fact = Math.random();
    const kekv2240fact = Math.random() * 5;

    const totalFact = kekv2210fact + kekv2220fact + kekv2240fact;

    const expensesFact: Expenses = {
      kekv2210: kekv2210fact,
      kekv2220: kekv2220fact,
      kekv2240: kekv2240fact,
      total: totalFact
    };
    return {
      appointment,
      expensesPlan,
      expensesFact,
      id: `${Date.now()}`
    };
  }

  createBalance(): void {
    MockDataBase.schedule.map(
      a => {
        const finBal = this.createMockAppointmentFinancing(a);
        return MockDataBase.balance.push(finBal);
      }
    );
  }
}
