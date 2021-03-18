import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {MockDataBase} from '../../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {Appointment} from '../../interfases';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {DataBaseService} from '../../services/data-base.service';
import {AppointmentService} from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  // @ts-ignore
  appointment: Appointment;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.route.params.subscribe((params: Params) => {
        // @ts-ignore
        this.appointmentService.getAppointmentByID(params.id).
        subscribe(appointment => this.appointment = appointment);
      });
  }

}
