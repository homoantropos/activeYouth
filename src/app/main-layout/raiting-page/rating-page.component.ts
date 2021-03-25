import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {RatingBrick, Result} from '../../shared/interfases';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ResultService} from '../../shared/services/result.service';
import {RatingFilterService} from '../../shared/services/rating-filter.service';
import {RatingManagerService} from '../../shared/services/rating-manager.service';

@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.css']
})
export class RatingPageComponent implements OnInit, AfterViewInit {

  // @ts-ignore
  results: Array<Result>;
  schoolchildOrStudent = 'schoolchild';
  direction = 'physical culture';
  gender = 'female';
  displayedColumns = ['participantName', 'participantGender', 'eduEntity', 'appointmentName', 'kindOfActivity', 'discipline', 'place'];

  // @ts-ignore
  rating: Array<RatingBrick>;
  // @ts-ignore
  dataSource: MatTableDataSource<Result>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private resultService: ResultService,
    private ratingFilterService: RatingFilterService,
    private ratingManager: RatingManagerService
  ) { }

  ngOnInit(): void {
    this.getRatingFromDB();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getRatingFromDB(): void {
    this.resultService.getAllResults()
      .subscribe( r => {
        this.ratingFilterService
          .filterRating(r, this.schoolchildOrStudent, this.direction)
          .subscribe( rf => {
            this.results = rf.filter(rt => rt.participant.gender === this.gender);
            this.rating = this.ratingManager.createRating(this.results);
            console.log(this.rating);
            this.dataSource = new MatTableDataSource<Result>(this.results);
          });
      });
  }

  showRatingBySchoolchildOrStudents(): void {
    if (this.schoolchildOrStudent === 'schoolchild') {
      this.schoolchildOrStudent = 'students';
    } else {
      this.schoolchildOrStudent = 'schoolchild';
    }
    this.getRatingFromDB();
    this.ngAfterViewInit();
  }

  showRatingByDirection(): void {
    if (this.direction === 'physical culture') {
      this.direction = 'sport';
    } else {
      this.direction = 'physical culture';
    }
    this.getRatingFromDB();
    this.ngAfterViewInit();
  }

  showRatingByGender(): void {
    if (this.gender === 'female') {
      this.gender = 'male';
    } else {
      this.gender = 'female';
    }
    this.getRatingFromDB();
    this.results = this.results.filter(r => r.participant.gender === this.gender);
    this.dataSource = new MatTableDataSource<Result>(this.results);
    this.ngAfterViewInit();
  }

  showRatingWithoutDirection(): void {
    this.direction = '';
    this.getRatingFromDB();
    this.ngAfterViewInit();
  }
}
