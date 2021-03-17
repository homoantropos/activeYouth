import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Appointment} from '../../shared/interfases';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-fin-dashboard',
  templateUrl: './fin-dashboard.component.html',
  styleUrls: ['./fin-dashboard.component.css']
})
export class FinDashboardComponent implements AfterViewInit {
  displayedColumns: string [] = ['title', 'termsOfHolding', 'placeOfHolding'];
  dataSource: MatTableDataSource<Appointment> = new MatTableDataSource<Appointment>(MockDataBase.schedule);

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
