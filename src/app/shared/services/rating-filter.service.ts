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
    direction: string
  ): Observable<Array<Result>> {
      return of(rating.filter(
        r => r.participant.schoolchildOrStudent === schoolchildOrStudent &&
          r.appointment.direction === direction));
  }
}
