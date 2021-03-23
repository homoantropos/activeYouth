import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {MatTableDataSource} from '@angular/material/table';
import {Activity} from '../../shared/interfases';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.css']
})
export class ActivitiesPageComponent implements AfterViewInit {
  displayedColumns: string[] = ['title', 'author', 'date'];
  dataSource: MatTableDataSource<Activity> =
    new MatTableDataSource<Activity>(
      MockDataBase.mockActivitiesDataBase.filter(a => a.kindOfActivity === 'physical culture')
    );
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

  goToActivityDetails(a: Activity): void {
    this.router.navigateByUrl(`/activities/${a.id}`);
  }
}
