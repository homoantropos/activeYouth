import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MockActivitiesDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {MatTableDataSource} from '@angular/material/table';
import {Activity} from '../../shared/interfases';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.css']
})
export class ActivitiesPageComponent implements AfterViewInit {
  displayedColumns: string[] = ['title', 'author', 'date'];
  dataSource: MatTableDataSource<Activity> =
    new MatTableDataSource<Activity>(
      MockActivitiesDataBase.mockActivitiesDataBase.filter(a => a.kindOfActivity === 'physical culture')
    );
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
