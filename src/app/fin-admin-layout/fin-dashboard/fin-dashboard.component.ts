import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {AppointmentFinancing} from '../../shared/interfases';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-fin-dashboard',
  templateUrl: './fin-dashboard.component.html',
  styleUrls: ['./fin-dashboard.component.css']
})
export class FinDashboardComponent implements AfterViewInit {
  displayedColumns: string [] = [
    'title',
    'termsOfHolding',
    'place',
    '2210plan',
    '2220plan',
    '2240plan',
    'totalplan',
    '2210fact',
    '2220fact',
    '2240fact',
    'totalfact'
  ];
  dataSource: MatTableDataSource<AppointmentFinancing> = new MatTableDataSource<AppointmentFinancing>(MockDataBase.balance);

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToAppointmentFinancingDetails(af: AppointmentFinancing): void {
    this.router.navigateByUrl(`/expenses/${af.id}`);
  }
}
