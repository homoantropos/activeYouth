import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {MockDataBase} from '../../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {Appointment} from '../../interfases';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.route.params.subscribe((params: Params) => {
        // @ts-ignore
        this.appointment = MockDataBase.schedule.find(a => a.id === params.id);
      });
  }

}
