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
      title: new FormControl (null, [
        Validators.required
      ])
    });
  }

  onCreate(): void {
    const appointment: Appointment = (this.appointmentCreatorForm.value) as Appointment;
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
