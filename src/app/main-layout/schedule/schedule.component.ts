import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';

import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';

import {Appointment} from '../../shared/interfases';
import {AppointmentService} from '../../shared/services/appointment.service';
import {map} from 'rxjs/operators';



@Component({
  selector: 'app-main-page',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['title', 'termsOfHolding', 'place'];
  // @ts-ignore
  dataSource: MatTableDataSource<Appointment>;
  // @ts-ignore
  schedule1: Array<Appointment>;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private router: Router,
    private appointmentService: AppointmentService
  ) {
  }

  ngOnInit(): void {
    this.appointmentService.getAllAppointment()
      .subscribe((response: Array<Appointment>) => {
        console.log(response);
        this.schedule1 = response;
        this.dataSource = new MatTableDataSource<Appointment>(this.schedule1);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.schedule1);
        return this.schedule1;
        }
      );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToAppointmentDetails(a: Appointment): void {
    this.router.navigateByUrl(`/schedule/${a.id}`);
  }
}
