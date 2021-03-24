import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Result} from '../../shared/interfases';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ResultService} from '../../shared/services/result.service';
import {RatingFilterService} from '../../shared/services/rating-filter.service';

@Component({
  selector: 'app-raiting-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.css']
})
export class RatingPageComponent implements OnInit, AfterViewInit {

  // @ts-ignore
  results: Array<Result>;
  schoolchildOrStudent = 'schoolchild';
  direction = 'physical culture';
  gender = 'female';
  displayedColumns = ['participantName', 'eduEntity', 'appointmentName', 'kindOfActivity', 'discipline', 'place'];

  // @ts-ignore
  dataSource: MatTableDataSource<Result>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private resultService: ResultService,
    private ratingFilterService: RatingFilterService
  ) { }

  ngOnInit(): void {
    this.resultService.getAllResults().subscribe(
      r => {
        this.ratingFilterService.filterRating(
          r,
          this.schoolchildOrStudent,
          this.direction).subscribe(
          rf => {
            this.results = rf;
            this.dataSource = new MatTableDataSource<Result>(this.results);
          });
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  changeViewOption(): void {
    if (this.schoolchildOrStudent === 'schoolchild') {
      this.schoolchildOrStudent = 'students';
    } else {
      this.schoolchildOrStudent = 'schoolchild';
    }
    this.ngOnInit();
    this.ngAfterViewInit();
  }
}
