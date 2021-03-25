import { Injectable } from '@angular/core';
import {Participant, RatingBrick, Result} from '../interfases';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingManagerService {

  constructor() { }

  createStudentsRating(results: Array<Result>): Array<RatingBrick> {
    const rating: Array<RatingBrick> = [];
    let totalRating = 0;
    let cloneResults = results.slice();
    results.map( r => {
      const onePersonResults = cloneResults.filter(result => result.participant.id === r.participant.id);
      if (onePersonResults.length === 0) {
        return;
      }
      onePersonResults.map( resOne => totalRating = +(totalRating + resOne.ratingPoints) );
      const resultsOwnerStudent: Participant = onePersonResults[0].participant;
      rating.push({
        resultsOwnerStudent,
        results: onePersonResults,
        totalRating
      });
      totalRating = 0;
      cloneResults = cloneResults.filter(result => result.participant.id !== r.participant.id);
    });
    rating.sort((a, b) => b.totalRating - a.totalRating);
    return rating;
  }

  createEducationalEntityRating(results: Array<Result>): Array<RatingBrick> {
    const cloneResults = results.slice();
    const ratingEduEntities: Array<RatingBrick> = [];
    let totalRating = 0;
    results.map(
      r => {
        const oneEduEntityRatingBrick = cloneResults.filter(result => result.eduEntity.name === r.eduEntity.name);
        if (oneEduEntityRatingBrick.length === 0) {
          return;
        }
        const resultsOwnerEduEntity = oneEduEntityRatingBrick[0].eduEntity;
        oneEduEntityRatingBrick.map(
          rOne => totalRating = totalRating + rOne.ratingPoints
        );
        ratingEduEntities.push(
          {
            resultsOwnerEduEntity,
            results: oneEduEntityRatingBrick,
            totalRating
          }
        );
        totalRating = 0;
      }
    );
    return ratingEduEntities;
  }
}
