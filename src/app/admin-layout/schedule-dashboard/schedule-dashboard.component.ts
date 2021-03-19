import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Appointment} from '../../shared/interfases';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-schedule-dashboard',
  templateUrl: './schedule-dashboard.component.html',
  styleUrls: ['./schedule-dashboard.component.css']
})
export class ScheduleDashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['title', 'termsOfHolding', 'placeOfHolding', 'edit', 'delete'];
  dataSource: MatTableDataSource<Appointment> = new MatTableDataSource<Appointment>(MockDataBase.schedule);
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  goToAppointmentCreator(): void {
    this.router.navigate(['admin', 'schedule', 'create']);
  }

  goToAppointmentDetails(a: Appointment): void {
    this.router.navigateByUrl(`admin/schedule/${a.id}`);
  }
}
