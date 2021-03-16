import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MockActivitiesDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Activity} from '../../shared/interfases';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-sports-dashboard',
  templateUrl: './sports-dashboard.component.html',
  styleUrls: ['./sports-dashboard.component.css']
})

export class SportsDashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['title', 'author', 'date', 'edit', 'delete'];
  dataSource: MatTableDataSource<Activity> =
    new MatTableDataSource<Activity>(
      MockActivitiesDataBase.mockActivitiesDataBase.filter(a => a.kindOfActivity === 'sport')
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
    this.router.navigate(['admin', 'sports', 'create']);
  }
}
