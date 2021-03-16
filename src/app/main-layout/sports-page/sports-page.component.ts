import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MockActivitiesDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {MatTableDataSource} from '@angular/material/table';
import {Activity} from '../../shared/interfases';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-sports-page',
  templateUrl: './sports-page.component.html',
  styleUrls: ['./sports-page.component.css']
})
export class SportsPageComponent implements AfterViewInit {

  displayedColumns: string[] = ['title', 'author', 'date'];
  dataSource: MatTableDataSource<Activity> =
    new MatTableDataSource<Activity>(
      MockActivitiesDataBase.mockActivitiesDataBase.filter(a => a.kindOfActivity === 'sport')
    );

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
