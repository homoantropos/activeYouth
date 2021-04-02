import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';

import {Appointment} from '../../shared/interfases';
import {AppointmentService} from '../../shared/services/appointment.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-main-page',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit, AfterViewInit {

  // @ts-ignore
  schedule$: Observable<Array<Appointment>>;

  displayedColumns: string[] = ['title', 'termsOfHolding', 'place'];
  // @ts-ignore
  dataSource: MatTableDataSource<Appointment>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private appointmentService: AppointmentService
  ) {
  }

  ngOnInit(): void {
    this.schedule$ = this.appointmentService.getAllAppointment();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
