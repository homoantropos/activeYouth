import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Appointment} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {AppointmentService} from '../../../shared/services/appointment.service';

@Component({
  selector: 'app-appointment-creator',
  templateUrl: './appointment-creator.component.html',
  styleUrls: ['./appointment-creator.component.css']
})
export class AppointmentCreatorComponent implements OnInit {
  // @ts-ignore
  appointmentCreatorForm: FormGroup;

  constructor(
    private appointmentServise: AppointmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.appointmentCreatorForm = new FormGroup({
      title: new FormControl ('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      finishDate: new FormControl('', [Validators.required]),
      placeOfHolding: new FormGroup({
        country: new FormControl('', [Validators.required]),
        region: new FormControl(''),
        town: new FormControl('', [Validators.required]),
        sportHallName: new FormControl(''),
        address: new FormControl('')
      }),
      participants: new FormControl('', [Validators.required]),
      sportKind: new FormControl('', [Validators.required]),
      direction: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      organiser: new FormControl('', [Validators.required])
    });
  }

onCreate(): void {
    const appointment: Appointment = (this.appointmentCreatorForm.value) as Appointment;
    console.log(this.appointmentCreatorForm.value.startDate);
    this.appointmentServise.createAppointment(appointment).subscribe(
      (a) => {
        appointment.id = a.id;
        this.appointmentCreatorForm.reset();
        this.router.navigate(['admin', 'schedule']);
        alert('ваш захід додано!');
      }
    );
  }
}
