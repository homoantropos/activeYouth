import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';

import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';

import {Appointment} from '../../shared/interfases';



@Component({
  selector: 'app-main-page',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements AfterViewInit {
  displayedColumns: string[] = ['title', 'termsOfHolding', 'place'];
  dataSource: MatTableDataSource<Appointment> = new MatTableDataSource<Appointment>(MockDataBase.schedule);

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private router: Router
  ) {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToAppointmentDetails(a: Appointment): void {
    this.router.navigateByUrl(`/schedule/${a.id}`);
  }
}
