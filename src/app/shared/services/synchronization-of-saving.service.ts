import { Injectable } from '@angular/core';
import {Appointment, AppointmentFinancing, Report} from '../interfases';
import {
  basicExpensesFact,
  basicExpensesPlan,
  basicNumberOfParticipantsFact,
  basicNumberOfParticipantsPlan
} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AppointmentFinancingService} from './appointment-financing.service';
import {ReportService} from './report.service';
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
    private statisticService: ReportService
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

    const statistic: Report = {
      appointment,
      membersPlan: basicNumberOfParticipantsPlan,
      personPerDayTotalPlan: 0,
      membersFact: basicNumberOfParticipantsFact,
      personPerDayTotalFact: 0
    };
    this.statisticService.createStatistic(statistic).subscribe(
      ststc => console.log(ststc)
    );
  }
}
