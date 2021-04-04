// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Environment} from './interfaces';
import {AppointmentFinancing, Expenses, Members} from '../app/shared/interfases';

export const environment: Environment = {
  production: false,
  mongoDbUrl: 'http://localhost:5000/api'
};

export const basicExpensesPlan: Expenses = {kekv2210: 0, kekv2220: 0, kekv2240: 0, total: 0};
export const basicExpensesFact: Expenses = {kekv2210: 0, kekv2220: 0, kekv2240: 0, total: 0};

export const basicNumberOfParticipantsPlan: Members = {
  countries: 0,
    regions: 0,
    educationEntity: 0,
    sportsmen: 0,
    coaches: 0,
    referees: 0,
    others: 0,
    total: 0
};

export const basicNumberOfParticipantsFact: Members = {
  countries: 0,
  regions: 0,
  educationEntity: 0,
  sportsmen: 0,
  coaches: 0,
  referees: 0,
  others: 0,
  total: 0
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
