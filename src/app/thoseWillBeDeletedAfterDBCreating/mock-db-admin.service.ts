import {Injectable} from '@angular/core';
import {
  Appointment,
  Expenses,
  AppointmentFinancing,
  NumbersOfParticipants,
  Statistic,
  Result,
  Participant,
  EducationEntity
} from '../shared/interfases';
import {MockDataBase} from './mockDB';

@Injectable({
  providedIn: 'root'
})
export class MockDBAdministratorService {

  constructor() {
  }

  createResult(appointment: Appointment, discipline: string, place: number): Result {

    // mockParticipant creating
    const variants = Math.round(Math.random() * 100);
    const gender: string = variants % 2 === 0 ? `female` : `male`;
    const schoolchildOrStudent: string = appointment.participants;
    // @ts-ignore
    let type: string;
    if (schoolchildOrStudent === 'schoolchild') {
      type = variants % 3 === 0 ? 'ЗП(ПТ)О' : 'ЗЗСО';
    } else {
      type = variants % 3 === 0 ? 'ЗФПВО' : 'ЗВО';
    }
    const EduEntName = `${type} ${variants}`;
    const category = type === 'ЗВО' ? Math.round(Math.random() * 6) : 0;
    const name = `ім'я ${variants}`;
    const surname = `прізвище ${variants}`;
    const DoB = new Date();
    const id = name + surname + DoB.toString() + gender;

    // @ts-ignore
    let ratingPoints = 0;

    const mockParticipant: Participant = {
      name, surname, DoB, gender, schoolchildOrStudent, id
    };

    // mockEduEntity creating
    const mockEducationalEntity: EducationEntity = { name: EduEntName, category, type };

    switch (place) {
      case 1 : ratingPoints = 5;
               break;
      case 2 : ratingPoints = 4;
               break;
      case 3 : ratingPoints = 3;
               break;
      case 4 : ratingPoints = 2;
               break;
      case 5 : ratingPoints = 1;
               break;
    }

    const result: Result = {
      appointment,
      participant: mockParticipant,
      eduEntity: mockEducationalEntity,
      discipline,
      place,
      ratingPoints,
      id: `${Date}`
    };
    return result;
  }

  createResults(): void {
    MockDataBase.schedule.map(
      a => {
        for (let i = 1; i <= 10; i++) {
          for (let j = 1; j <= 5; j++) {
            const result: Result = this.createResult(a, `discipline ${i}`, j );
            MockDataBase.mockResultsDataBase.push(result);
          }
        }
      }
    );
  }

  createStatistic(appointment: Appointment): Statistic {

    const countries = Math.floor(Math.random() * 25);
    const regions = Math.floor(Math.random() * 25);
    const educationEntity = Math.floor(Math.random() * 400);
    const sportsmen = Math.floor(Math.random() * 1000);
    const coaches = Math.floor(Math.random() * 50);
    const referees = Math.floor(Math.random() * 15);
    const others = Math.floor(Math.random() * 10);
    const total = countries + regions + educationEntity + sportsmen + coaches + referees + others;
    const personPerDayTotalPlan = appointment.duration * total;
    const personPerDayTotalFact = personPerDayTotalPlan;

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
      personPerDayTotalPlan,
      numberOfParticipantsFact,
      personPerDayTotalFact,
      id: `${numberOfParticipantsFact.total + numberOfParticipantsPlan.total}`
    };
  }

  createStatistics(): void {
    MockDataBase.schedule.map(
      a => {
        const result = this.createStatistic(a);
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
      id: `${totalFact + totalPlan}`
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
