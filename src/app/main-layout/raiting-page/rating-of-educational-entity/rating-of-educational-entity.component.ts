import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RatingBrick, Result} from '../../../shared/interfases';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ResultService} from '../../../shared/services/result.service';
import {RatingFilterService} from '../../../shared/services/rating-filter.service';
import {RatingManagerService} from '../../../shared/services/rating-manager.service';

@Component({
  selector: 'app-rating-of-educational-entity',
  templateUrl: './rating-of-educational-entity.component.html',
  styleUrls: ['./rating-of-educational-entity.component.css']
})
export class RatingOfEducationalEntityComponent implements OnInit, AfterViewInit {

  // @ts-ignore
  results: Array<Result>;
  schoolchildOrStudent = 'schoolchild';
  direction = 'physical culture';
  gender = 'female';
  titleParticipant = 'заклади середньої освіти';
  titleDirection = 'фізична культура';
  displayedColumns = ['participantName', 'participantGender', 'totalRating'];

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
    private ratingManager: RatingManagerService
  ) {
  }

  ngOnInit(): void {
    this.getRatingFromDB();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getRatingFromDB(): void {
    this.resultService.getAllResults()
      .subscribe(r => {
        this.ratingFilterService
          .filterRating(r, this.schoolchildOrStudent, this.direction, this.gender)
          .subscribe(rf => {
            this.results = rf.filter(rt => rt.participant.gender === this.gender);
            this.titlesDefine(this.results);
            this.rating = this.ratingManager.createEducationalEntityRating(this.results);
            this.rating.sort((a, b) => b.totalRating - a.totalRating);
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
    this.rating.sort((a, b) => b.totalRating - a.totalRating);
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

  showRatingWithoutGender(): void {
    this.gender = '';
    this.getRatingFromDB();
    this.titleDirection = 'дівчата і хлопці разом';
    this.ngAfterViewInit();
  }

  titlesDefine(results: Array<Result>): void {
    const appointment = results[0].appointment;
    const participant = results[0].participant;
    switch (appointment.direction) {
      case ('physical culture'):
        this.titleDirection = 'фізична культура';
        break;
      case ('sport'):
        this.titleDirection = 'спорт';
        break;
    }
    switch (participant.schoolchildOrStudent) {
      case('students'): this.titleParticipant = 'заклади вищої освіти';
                        break;
      case('schoolchild'): this.titleParticipant = 'заклади середньої освіти';
                           break;
    }
  }
}
