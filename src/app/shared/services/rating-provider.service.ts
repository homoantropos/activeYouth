import { Injectable } from '@angular/core';
import {Participant, RatingBrick, Result} from '../interfases';

@Injectable({
  providedIn: 'root'
})
export class RatingProviderService {

  constructor(
  ) { }

  createStudentsRating(results: Array<Result>): Array<RatingBrick> {
    const rating: Array<RatingBrick> = [];
    let totalRating = 0;
    let cloneResults = results.slice();
    results.map( r => {
      const onePersonResults = cloneResults.filter(result => result.participant.id === r.participant.id);
      if (onePersonResults.length === 0) {
        return;
      }
      // @ts-ignore
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

  fetchEducationEntityRating(results: Array<Result>): Array<RatingBrick> {
    let cloneResults = results.slice();
    const ratingEduEntities: Array<RatingBrick> = [];
    let totalRating = 0;
    cloneResults.map(
      r => {
        const oneEduEntityRatingBrick = cloneResults.filter(result => result.educational_entity.name === r.educational_entity.name);
        if (oneEduEntityRatingBrick.length === 0) { return; }
        const resultsOwnerEduEntity = oneEduEntityRatingBrick[0].educational_entity;
        // @ts-ignore
        oneEduEntityRatingBrick.map( rOne => totalRating = totalRating + rOne.ratingPoints );
        ratingEduEntities.push({
          resultsOwnerEduEntity,
          results: oneEduEntityRatingBrick,
          totalRating
        });
        cloneResults = cloneResults.filter(rafter => rafter.educational_entity.name !== r.educational_entity.name);
        totalRating = 0;
      }
    );
    ratingEduEntities.sort((a, b) => b.totalRating - a.totalRating);
    return ratingEduEntities;
  }
}
