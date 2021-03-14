import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Appointment} from '../../../shared/interfases';
import {DataBaseService} from '../../../shared/services/data-base.service';

@Component({
  selector: 'app-appointment-creator',
  templateUrl: './appointment-creator.component.html',
  styleUrls: ['./appointment-creator.component.css']
})
export class AppointmentCreatorComponent implements OnInit {
  // @ts-ignore
  appointmentCreatorForm: FormGroup;

  constructor(
    private dbservise: DataBaseService
  ) { }

  ngOnInit(): void {
    this.appointmentCreatorForm = new FormGroup({
      title: new FormControl (null, [
        Validators.required
      ])
    });
  }

  onCreate(): void {
    const appointment: Appointment = {
      title: this.appointmentCreatorForm.value.title
    };
    this.dbservise.saveToDatabase(appointment).subscribe(
      (a) => {
        appointment.id = a.id;
        this.appointmentCreatorForm.reset();
      }
    );
  }

}
