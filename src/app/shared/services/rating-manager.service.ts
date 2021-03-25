import { Injectable } from '@angular/core';
import {RatingBrick, Result} from '../interfases';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingManagerService {

  constructor() { }

  createRating(results: Array<Result>): Array<RatingBrick> {
    const rating: Array<RatingBrick> = [];
    let totalRating = 0;
    let cloneResults = results.slice();
    results.map( r => {
      const onePerson = cloneResults.filter(result => result.participant.id === r.participant.id);
      onePerson.map( resOne => totalRating = +(totalRating + resOne.ratingPoints) );
      if (onePerson.length === 0) {
        return;
      }
      rating.push({
        results: onePerson,
        totalRating
      });
      totalRating = 0;
      cloneResults = cloneResults.filter(result => result.participant.id !== r.participant.id);
    });
    return rating;
  }
}
