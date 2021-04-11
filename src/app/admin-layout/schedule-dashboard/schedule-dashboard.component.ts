import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

import {MatTableDataSource} from '@angular/material/table';
import {Appointment} from '../../shared/interfases';
import {AppointmentService} from '../../shared/services/appointment.service';


@Component({
  selector: 'app-schedule-dashboard',
  templateUrl: './schedule-dashboard.component.html',
  styleUrls: ['./schedule-dashboard.component.css']
})

export class ScheduleDashboardComponent implements OnInit {

  displayedColumns: string[] = ['title', 'termsOfHolding', 'place', 'edit', 'delete'];

  // @ts-ignore
  dataSource: MatTableDataSource<Appointment>;
  schedule1: Array<Appointment> = [];
  paginatorStartPageNumber = 1;
  // @ts-ignore
  schedule$: Observable<Array<Appointment>>;

  constructor(
    private router: Router,
    private appointmentService: AppointmentService
  ) {
  }

  ngOnInit(): void {
    this.schedule$ = this.appointmentService.getAllAppointment();
  }

  deleteAppointmentFromDb(id: string): void {
    this.appointmentService.deleteAppointment(id)
      .subscribe(
        (message) => {
          alert(message.message);
          this.ngOnInit();
        }
      );
  }
}
