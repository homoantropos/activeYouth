import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RatingBrick, Result} from '../../../shared/interfases';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ResultService} from '../../../shared/services/result.service';
import {RatingFilterService} from '../../../shared/services/rating-filter.service';
import {RatingProviderService} from '../../../shared/services/rating-provider.service';

@Component({
  selector: 'app-rating-of-students',
  templateUrl: './rating-of-students.component.html',
  styleUrls: ['./rating-of-students.component.css']
})
export class RatingOfStudentsComponent implements OnInit, AfterViewInit {

  // @ts-ignore
  results: Array<Result>;
  schoolchildOrStudent = 'schoolchild';
  direction = 'physical culture';
  gender = 'female';
  titleParticipant = 'учениці';
  titleDirection = 'фізична культура';
  displayedColumns = [ 'participantName', 'eduEntity', 'participantGender', 'totalRating'];

  // @ts-ignore
  rating: Array<RatingBrick>;
  // @ts-ignore
  dataSource: MatTableDataSource<RatingBrick>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private resultService: ResultService,
    private ratingFilterService: RatingFilterService,
    private ratingProvider: RatingProviderService
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
            this.titlesDefine(this.results);
            this.rating = this.ratingProvider.createStudentsRating(this.results);
            this.dataSource = new MatTableDataSource<RatingBrick>(this.rating);
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
    this.titlesDefine(this.results);
    this.dataSource = new MatTableDataSource<RatingBrick>(this.rating);
    this.ngAfterViewInit();
  }

  showRatingWithoutDirection(): void {
    this.direction = '';
    this.getRatingFromDB();
    this.titleDirection = 'фізична культура і спорт разом';
    this.ngAfterViewInit();
  }

  titlesDefine(results: Array<Result>): void {
    const appointment = results[0].appointment;
    const participant = results[0].participant;
    switch (appointment.direction) {
      case ('physical culture'): this.titleDirection = 'фізична культура';
                                 break;
      case ('sport'): this.titleDirection = 'спорт';
                      break;
    }
    switch (participant.gender) {
      case('female'): participant.schoolchildOrStudent === 'students' ?
        this.titleParticipant = 'студентки' :
        this.titleParticipant = 'учениці';
                      break;
      case('male'): participant.schoolchildOrStudent === 'students' ?
        this.titleParticipant = 'студенти' :
        this.titleParticipant = 'учні';
                    break;
    }
  }
}

