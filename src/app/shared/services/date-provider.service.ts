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
    console.log(startDay);
    const startTime: number = startDay.getTime();
    console.log(startTime);
    const finishTime: number = finishDay.getTime();
    return Math.round((1 + (finishTime - startTime) / (1000 * 24 * 60 * 60)));
  }
}
