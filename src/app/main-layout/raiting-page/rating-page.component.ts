import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Result} from '../../shared/interfases';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-raiting-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.css']
})
export class RatingPageComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<Result> = new MatTableDataSource<Result>(MockDataBase.mockResultsDataBase);
  displayedColumns = ['participantName', 'eduEntity', 'appointmentName', 'kindOfActivity', 'discipline', 'place'];

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
