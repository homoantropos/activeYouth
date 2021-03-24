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
    direction: string,
    gender?: string
  ): Observable<Array<Result>> {
    if (!gender) {
      return of(rating.filter(
        r => r.participant.schoolchildOrStudent === schoolchildOrStudent &&
          r.appointment.direction === direction));
    } else {
      const filteredRating = rating.filter(
        r => r.participant.schoolchildOrStudent === schoolchildOrStudent &&
          r.participant.gender === gender
      );
      console.log(filteredRating);
      return of(filteredRating);
    }
  }
}
