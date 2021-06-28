import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Appointment, Result} from '../../../shared/interfases';
import {switchMap} from 'rxjs/operators';
import {AppointmentService} from '../../../shared/services/appointment.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  // @ts-ignore
  appointment: Appointment;
  // @ts-ignore
  applicationForm: FormGroup;
  listOfParticipants: Array<Result> = [];
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(
          (params: Params) => {
            return this.appointmentService.getAppointmentById(params.get('id'));
          }
        )
      )
      .subscribe(appointment => {
        this.appointment = appointment;
        this.applicationForm = new FormGroup({
          participant_name: new FormControl('', Validators.required),
          participant_surname: new FormControl('', Validators.required),
          participant_fathersName: new FormControl('', Validators.required),
          participant_DoB: new FormControl('', Validators.required),
          participant_gender: new FormControl('', Validators.required),
          coach_name: new FormControl('', Validators.required),
          coach_surname: new FormControl('', Validators.required),
          coach_fathersName: new FormControl('', Validators.required),
          eduentityName: new FormControl('', Validators.required),
          region: new FormControl('', Validators.required),
          discipline: new FormControl('', Validators.required)
        });
      });
  }

  onApply(value: any): void {
    this.applicationForm.reset();
    console.log(value);
  }

}
