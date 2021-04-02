import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Appointment} from '../../shared/interfases';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Observable} from 'rxjs';
import {AppointmentService} from '../../shared/services/appointment.service';

@Component({
  selector: 'app-schedule-dashboard',
  templateUrl: './schedule-dashboard.component.html',
  styleUrls: ['./schedule-dashboard.component.css']
})
export class ScheduleDashboardComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['title', 'termsOfHolding', 'place', 'edit', 'delete'];

  // @ts-ignore
  dataSource: MatTableDataSource<Appointment>;
  schedule1: Array<Appointment> = [];

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {
    this.appointmentService.getAllAppointment()
      .subscribe((response: Array<Appointment>) => {
          this.schedule1 = response.slice();
          this.dataSource = new MatTableDataSource<Appointment>(this.schedule1);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          return this.schedule1;
        }
      );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteAppointmentFromDb(id: string): void {
    this.appointmentService.deleteAppointment(id)
      .subscribe(
      (message) => {
        console.log(message);
        this.ngOnInit();
      }
    );
  }
}
