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
}
