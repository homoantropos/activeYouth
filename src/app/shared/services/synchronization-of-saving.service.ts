import { Injectable } from '@angular/core';
import {Appointment, AppointmentFinancing, Statistic} from '../interfases';
import {
  basicExpensesFact,
  basicExpensesPlan,
  basicNumberOfParticipantsFact,
  basicNumberOfParticipantsPlan
} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AppointmentFinancingService} from './appointment-financing.service';
import {StatisticService} from './statistic.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SynchronizationOfSavingService {
  // @ts-ignore
  apf: AppointmentFinancing;
  constructor(
    private http: HttpClient,
    private appointmentFinancingService: AppointmentFinancingService,
    private statisticService: StatisticService
  ) { }

  onAppointmentCreation(appointment: Appointment): any {
    const appointmentFinancing: AppointmentFinancing = {
      appointment,
      expensesPlan: basicExpensesPlan,
      expensesFact: basicExpensesFact
    };
    this.appointmentFinancingService.createAppointmentFinancing(appointmentFinancing).subscribe(
     af => {
       this.apf = af;
       console.log(this.apf);
     }
    );

    const statistic: Statistic = {
      appointment,
      numberOfParticipantsPlan: basicNumberOfParticipantsPlan,
      personPerDayTotalPlan: 0,
      numberOfParticipantsFact: basicNumberOfParticipantsFact,
      personPerDayTotalFact: 0
    };
    this.statisticService.createStatistic(statistic).subscribe(
      ststc => console.log(ststc)
    );
  }
}
