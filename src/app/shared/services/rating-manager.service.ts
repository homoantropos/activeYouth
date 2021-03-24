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
    let cloneResults = results.slice();
    results.map( r => {
      const onePerson = cloneResults.filter(result => result.participant.id === r.participant.id);
      onePerson.map( resOne => this.totalRating = +(this.totalRating + resOne.ratingPoints) );
      if (onePerson.length === 0) {
        return;
      }
      this.rating.push({
        results: onePerson,
        totalRating: this.totalRating
      });
      cloneResults = cloneResults.filter(result => result.participant.id !== r.participant.id);
    });
    console.log(this.rating);
  }
}
