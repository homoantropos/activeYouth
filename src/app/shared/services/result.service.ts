import {Injectable} from '@angular/core';
import {Appointment, Result} from '../interfases';
import {Observable, of, Subject, throwError} from 'rxjs';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {
  }

  createResult(result: Result): Observable<Result> {
    return this.http.post<Result>(`${environment.postgresDbUrl}/result`, result);
  }

  updateResult(result: Result): Observable<Result> {
    return this.http.patch<Result>(`${environment.postgresDbUrl}/result`, result);
  }

  deleteResult(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${environment.postgresDbUrl}/result/${id}`);
  }

  getAllResultsFromDb(): Observable<Array<Result>> {
    return this.http.get<Array<Result>>(`${environment.postgresDbUrl}/result`);
  }

  getResultByAppointment(id: number): Observable<Array<Result>> {
    return this.http.get<Array<Result>>(`${environment.postgresDbUrl}/result/appointment/${id}`);
  }

  getAllResults(): Observable<Array<Result>> {
    // http-client get will be here later
    const results: Array<Result> =
      (MockDataBase.mockResultsDataBase) as Array<Result>;
    return of(results);
  }

  getResult(appointment: Appointment, value: any, initResult?: Result): Result {
    return {
      appointment,
      participant: {
        name: value.participant_name.trim(),
        surname: value.participant_surname.trim(),
        fathersName: value.participant_fathersName.trim(),
        DoB: value.participant_DoB,
        gender: value.participant_gender,
        schoolchildOrStudent: appointment.participants,
        id: initResult?.participant.id
      },
      coach: {
        name: value.coach_name.trim(),
        surname: value.coach_surname.trim(),
        fathersName: value.coach_fathersName.trim(),
        id: initResult?.coach.id
      },
      region: {
        region_name: value.region.trim()
      },
      educational_entity: {
        name: value.eduentityName.trim()
      },
      discipline: value.discipline.trim(),
      completed: false,
      id: initResult?.id
    };
  }

  getEmptyResult(appointment: Appointment): Result {
    return {
      appointment,
      participant: {
        name: '',
        surname: '',
        fathersName: '',
        DoB: new Date(),
        gender: '',
        schoolchildOrStudent: ''
      },
      coach: {
        name: '',
        surname: '',
        fathersName: ''
      },
      region: {
        region_name: ''
      },
      educational_entity: {
        name: ''
      },
      discipline: '',
      completed: false
    };
  }

  errorHandle(error: HttpErrorResponse): any {
    const message = error.error.message;
    if (message) {
      switch (message) {
        case('повторювані значення ключа порушують обмеження унікальності \"result_discipline_participantId_key\"'):
          this.error$.next('Такий учасник вже зареєстрований в цій дисципліні змагань.');
          break;
        case('повторювані значення ключа порушують обмеження унікальності \"participant_name_surname_fathersName_DoB_gender_schoolchild_key\"'):
          this.error$.next('Такий учасник вже зареєстрований в цій дисципліні змагань.');
          break;
      }
    }
    return throwError(error);
  }
}
