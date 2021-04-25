import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Appointment} from '../../shared/interfases';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AppointmentService} from '../../shared/services/appointment.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  displayedColumns: string[] = [
    'title',
    'termsOfHolding',
    'duration',
    'place',
    'organizationsparticipants',
    'sportsmen',
    'coaches',
    'referees',
    'others',
    'total',
    'character',
    'kpkv',
    'personPerDay',
    'costPlan',
    'sportKind'
  ];

  // @ts-ignore
  dataSource: MatTableDataSource<Appointment>;
  paginatorStartPageNumber = 1;
  // @ts-ignore
  schedule$: Observable<Array<Appointment>>;

  constructor(
    private router: Router,
    private appointmentService: AppointmentService
  ) {
  }

  ngOnInit(): void {
    this.schedule$ = this.appointmentService.getCalendar();
  }

}
