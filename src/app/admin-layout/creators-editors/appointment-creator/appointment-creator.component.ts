import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Appointment, AppointmentFinancing} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {AppointmentService} from '../../../shared/services/appointment.service';
import {DateProviderService} from '../../../shared/services/date-provider.service';
import {basicExpensesFact, basicExpensesPlan} from '../../../../environments/environment';
import {AppointmentFinancingService} from '../../../shared/services/appointment-financing.service';

@Component({
  selector: 'app-appointment-creator',
  templateUrl: './appointment-creator.component.html',
  styleUrls: ['./appointment-creator.component.css']
})
export class AppointmentCreatorComponent implements OnInit {
  // @ts-ignore
  appointmentCreatorForm: FormGroup;

  constructor(
    private appointmentService: AppointmentService,
    private dateProvider: DateProviderService,
    private appointmentFinancingService: AppointmentFinancingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.appointmentCreatorForm = new FormGroup({
      title: new FormControl ('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      finishDate: new FormControl('', [Validators.required]),
      place: new FormGroup({
        country: new FormControl('', [Validators.required]),
        region: new FormControl(''),
        town: new FormControl('', [Validators.required]),
        sportHallName: new FormControl(''),
        address: new FormControl('')
      }),
      organizationsParticipants: new FormControl('', [Validators.required]),
      KPKV: new FormControl('2201310'),
      character: new FormControl('', [Validators.required]),
      participants: new FormControl('', [Validators.required]),
      sportKind: new FormControl('', [Validators.required]),
      direction: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      organiser: new FormControl('', [Validators.required])
    });
  }

 onCreate(value: any): void {
    value.duration = this.dateProvider.provideDuration(value.startDate, value.finishDate);
    const appointment: Appointment = (value) as Appointment;
    console.log(appointment);
    this.appointmentService.saveAppointmentToDb(appointment).pipe()
      .subscribe(
       (a) => {
        // @ts-ignore
        console.log(a);
        const appointmentFinancing: AppointmentFinancing = {
          appointment: a,
          expensesPlan: basicExpensesPlan,
          expensesFact: basicExpensesFact
        };
        this.appointmentFinancingService.createAppointmentFinancing(appointmentFinancing).subscribe(
          apf => console.log(apf)
        );
        this.appointmentCreatorForm.reset();
        this.router.navigate(['admin', 'schedule']);
        alert('ваш захід додано!');
      }
    );
  }
}
