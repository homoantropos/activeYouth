import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Result} from '../../shared/interfases';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-raiting-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.css']
})
export class RatingPageComponent implements OnInit, AfterViewInit {

  schoolchildOrStudent = 'schoolchild';
  buttonName = 'показати студентів';
  gender = 'дівчата';
  // @ts-ignore
  dataSource: MatTableDataSource<Result> = new MatTableDataSource<Result>(
    MockDataBase.mockResultsDataBase.filter(
      r => r.participant.schoolchildOrStudent === `schoolchild` && r.participant.gender === 'хлопці'
    ));
  displayedColumns = ['participantName', 'eduEntity', 'appointmentName', 'kindOfActivity', 'discipline', 'place'];

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  changeViewOption(): void {
    if (this.schoolchildOrStudent === 'schoolchild') {
      this.schoolchildOrStudent = 'students';
      this.buttonName = 'показати учнів';
    } else {
      this.schoolchildOrStudent = 'schoolchild';
      this.buttonName = 'показати студентів';
    }
    this.dataSource = new MatTableDataSource<Result>(
      MockDataBase.mockResultsDataBase.filter(
        r => r.participant.schoolchildOrStudent === `${this.schoolchildOrStudent}`
      ));
    this.ngAfterViewInit();
  }
}
