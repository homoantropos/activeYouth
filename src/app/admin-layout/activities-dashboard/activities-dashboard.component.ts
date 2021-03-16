import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MockActivitiesDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Activity} from '../../shared/interfases';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-activities-dashboard',
  templateUrl: './activities-dashboard.component.html',
  styleUrls: ['./activities-dashboard.component.css']
})
export class ActivitiesDashboardComponent implements AfterViewInit {

  displayedColumns: string[] = ['title', 'author', 'date', 'edit', 'delete'];
  dataSource: MatTableDataSource<Activity> =
    new MatTableDataSource<Activity>(
      MockActivitiesDataBase.mockActivitiesDataBase.filter(a => a.kindOfActivity === 'physical culture')
    );

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  goToActivityCreator(): void {
    this.router.navigate(['admin', 'activities', 'create']);
  }
}
