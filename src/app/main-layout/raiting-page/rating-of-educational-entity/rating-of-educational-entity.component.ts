import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {RatingBrick, Result} from '../../../shared/interfases';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ResultService} from '../../../shared/services/result.service';
import {RatingFilterService} from '../../../shared/services/rating-filter.service';
import {RatingProviderService} from '../../../shared/services/rating-provider.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-rating-of-educational-entity',
  templateUrl: './rating-of-educational-entity.component.html',
  styleUrls: ['./rating-of-educational-entity.component.css']
})
export class RatingOfEducationalEntityComponent implements OnInit, AfterViewInit {
  // @ts-ignore
  results: Array<Result>;
  schoolchildOrStudent = 'schoolchild';
  direction = '';
  gender = '';
  titleEduEntity = '';
  titleParticipant = '';
  titleDirection = '';
  eduEntityType = 'ЗВО';
  eduEntityCategory = 0;
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
    private ratingProvider: RatingProviderService
  ) {
  }

  ngOnInit(): void {
    this.resultService.getAllResults().subscribe(
      rslts => {
        this.results = rslts;
        const cloneResults = this.ratingFilterService.filterByEduEntity(this.results, this.eduEntityType, this.eduEntityCategory );
        this.fetchRating(cloneResults);
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.titlesDefine();
  }

  fetchRating(results: Array<Result>): void {
    this.rating = this.ratingProvider.fetchEducationEntityRating(results);
    this.dataSource = new MatTableDataSource<RatingBrick>(this.rating);
    this.ngAfterViewInit();
  }

  showRatingByDirection(): void {
    if (this.direction === 'physical culture') {
      this.direction = 'sport';
    } else {
      this.direction = 'physical culture';
    }
    this.gender = 'female';
    let cloneResults = this.ratingFilterService.filterByEduEntity(this.results, this.eduEntityType, this.eduEntityCategory );
    cloneResults = this.ratingFilterService.filterByGender(cloneResults, this.gender);
    cloneResults = this.ratingFilterService.filterByDirection(cloneResults, this.direction);
    this.fetchRating(cloneResults);
  }

  showRatingByGender(): void {
    if (this.gender === 'female') {
      this.gender = 'male';
    } else {
      this.gender = 'female';
    }
    let cloneResults = this.ratingFilterService.filterByEduEntity(this.results, this.eduEntityType, this.eduEntityCategory );
    cloneResults = this.ratingFilterService.filterByGender(cloneResults, this.gender);
    this.fetchRating(cloneResults);
  }

  changeEduEntityType(): void {
    switch (this.eduEntityType) {
      case('ЗЗСО') : this.eduEntityType = 'ЗП(ПТ)О';
                     break;
      case('ЗП(ПТ)О') : this.eduEntityType = 'ЗФПВО';
                        break;
      case('ЗФПВО') : this.eduEntityType = 'ЗВО';
                      break;
      case('ЗВО') : this.eduEntityType = 'ЗЗСО';
                    break;
    }
    this.gender = '';
    const cloneResults = this.ratingFilterService.filterByEduEntity(this.results, this.eduEntityType, this.eduEntityCategory );
    this.fetchRating(cloneResults);
  }

  changeEduEntityCategory(): void {
    switch (this.eduEntityCategory) {
      case(0) : this.eduEntityCategory = 1;
                break;
      case(1) : this.eduEntityCategory = 2;
                break;
      case(2) : this.eduEntityCategory = 3;
                break;
      case(3) : this.eduEntityCategory = 4;
                break;
      case(4) : this.eduEntityCategory = 5;
                break;
      case(5) : this.eduEntityCategory = 6;
                break;
      case(6) : this.eduEntityCategory = 0;
                break;
    }
    const cloneResults = this.ratingFilterService.filterByEduEntity(this.results, this.eduEntityType, this.eduEntityCategory );
    this.fetchRating(cloneResults);
  }

  showRatingWithoutDirection(): void {
    this.direction = '';
    this.gender = 'female';
    let cloneResults = this.ratingFilterService.filterByEduEntity(this.results, this.eduEntityType, this.eduEntityCategory );
    cloneResults = this.ratingFilterService.filterByGender(cloneResults, this.gender);
    this.fetchRating(cloneResults);
  }

  titlesDefine(): void {
    switch (this.direction) {
      case('physical culture') : this.titleDirection = 'фізична культура';
                                 break;
      case('sport') : this.titleDirection = 'спорт';
                      break;
      case ('') : this.titleDirection = 'фізична культура і спорт загалом';
    }
    switch (this.gender) {
      case('male') : this.titleParticipant = 'хлопців';
                     break;
      case('female') : this.titleParticipant = 'дівчат';
                       break;
      case('') : this.titleParticipant = 'дівчат і хлопців разом';
    }
    switch (this.eduEntityType) {
      case('ЗВО') : this.titleEduEntity = 'заклади вищої освіти';
                    break;
      case('ЗФПВО') : this.titleEduEntity = 'заклади фахової передвищої освіти';
                      break;
      case('ЗП(ПТ)О') : this.titleEduEntity = 'заклади професійної (професійно-тенічної) освіти';
                        break;
      case ('ЗЗСО') : this.titleEduEntity = 'заклади загальної середної освіти';
                      break;
    }
  }
}
