import { Injectable } from '@angular/core';
import {RatingBrick, Result} from '../interfases';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingManagerService {
  rating: Array<RatingBrick> = [];
  // @ts-ignore
  totalRating = 0;
  constructor() { }

  createRating(results: Array<Result>): void {
    results.map( r => {
      const onePerson = results.filter(result => result.participant.id === r.participant.id);
      onePerson.map( resOne => +(this.totalRating + resOne.ratingPoints) );
      results = results.filter(result => result.participant.id !== r.participant.id);
      this.rating.push({
        results: onePerson,
        totalRating: this.totalRating
      });
      this.totalRating = 0;
    });
    console.log(this.rating);
    this.rating.filter(rtng => rtng.results.length !== 0);
    console.log(this.rating);
  }
}
