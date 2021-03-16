import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MockSchedule} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {MatTableDataSource} from '@angular/material/table';
import {Appointment} from '../../shared/interfases';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-main-page',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements AfterViewInit {
  displayedColumns: string[] = ['title', 'termsOfHolding', 'placeOfHolding'];
  dataSource: MatTableDataSource<Appointment> = new MatTableDataSource<Appointment>(MockSchedule.schedule);

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor( ) {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
