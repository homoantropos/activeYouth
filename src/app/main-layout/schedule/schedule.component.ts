import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {MatTableDataSource} from '@angular/material/table';
import {Appointment} from '../../shared/interfases';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-main-page',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements AfterViewInit {
  displayedColumns: string[] = ['title', 'termsOfHolding', 'placeOfHolding'];
  dataSource: MatTableDataSource<Appointment> = new MatTableDataSource<Appointment>(MockDataBase.schedule);

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  constructor( ) {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
