import { Injectable } from '@angular/core';
import {Result} from '../interfases';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingFilterService {

  constructor() { }

  filterRating(
    rating: Array<Result>,
    schoolchildOrStudent: string,
    direction?: string,
    gender?: string
  ): Observable<Array<Result>> {
    if (direction && direction.length > 1) {
      if (gender && gender.length > 1) {
        return of(
          rating.filter(
            r => r.participant.schoolchildOrStudent === schoolchildOrStudent &&
              r.appointment.direction === direction &&
              r.participant.gender === gender)
          );
      } else {
        return of(rating.filter(
          r => r.participant.schoolchildOrStudent === schoolchildOrStudent &&
            r.appointment.direction === direction));
      }
    } else {
      return of(rating.filter(
        r => r.participant.schoolchildOrStudent === schoolchildOrStudent));
    }
  }

  filterByEduEntity(results: Array<Result>, eduEntityType: string, eduEntityCategory?: number): Array<Result> {
    let cloneResults = results.slice();
    cloneResults = cloneResults.filter(r => r.eduentity.type === eduEntityType);
    if (eduEntityType === 'ЗВО' && eduEntityCategory !== 0) {
      cloneResults = cloneResults.filter(r => r.eduentity.category === eduEntityCategory);
    }
    return cloneResults;
  }

  filterByGender(results: Array<Result>, gender: string): Array<Result> {
    let cloneResults = results.slice();
    cloneResults = cloneResults.filter(r => r.participant.gender === gender);
    return cloneResults;
  }

  filterByDirection(results: Array<Result>, direction: string): Array<Result> {
    let cloneResults = results.slice();
    cloneResults = cloneResults.filter(r => r.appointment.direction === direction);
    return cloneResults;
  }
}
