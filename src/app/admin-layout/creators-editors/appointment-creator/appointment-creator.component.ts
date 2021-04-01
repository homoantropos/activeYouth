import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Appointment} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {AppointmentService} from '../../../shared/services/appointment.service';
import {DateProviderService} from '../../../shared/services/date-provider.service';

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
    appointment.id = 'sdadasd';
    console.log(appointment);
    this.appointmentService.saveAppointmentToDb(appointment).subscribe(
      (a) => {
        console.log(a.id);
        this.appointmentCreatorForm.reset();
        this.router.navigate(['admin', 'schedule']);
        alert('ваш захід додано!');
      }
    );
  }
}
