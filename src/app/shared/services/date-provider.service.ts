import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateProviderService {

  constructor() { }

  dateProvide(value: any): Date {
    return new Date(value.year, value.month, value.day);
  }

  provideDuration(startDay: Date, finishDay: Date): number {
    // @ts-ignore
    return (1 + (finishDay - startDay) / (1000 * 24 * 60 * 60));
  }
}
