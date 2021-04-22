import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Appointment} from '../../interfases';
import {AppointmentService} from '../../services/appointment.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit, OnDestroy {
  // @ts-ignore
  appointment$: Observable<Appointment>;
  // @ts-ignore
  rSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit(): Subscription {
    return this.rSub = this.route.params.subscribe((params: Params) => {
     this.appointment$ = this.appointmentService.getAppointmentById(params.id);
    });
  }

  ngOnDestroy(): void {
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }

}
