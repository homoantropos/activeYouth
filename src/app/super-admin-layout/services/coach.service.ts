import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of, Subject, throwError} from 'rxjs';
import {Coach} from '../../shared/interfases';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  error$: Subject<string> = new Subject<string>();
  constructor(
    private http: HttpClient
  ) { }

  saveCoachToDB(coach: Coach): Observable< {coach: Coach, message: string} > {
    return this.http.post<{coach: Coach, message: string}>(`${environment.postgresDbUrl}/coach`, coach);
  }

  updateCoach(coach: Coach): Observable<{ coach: Coach, message: string }> {
    return this.http.patch<{ coach: Coach, message: string }>(`${environment.postgresDbUrl}/coach`, coach);
  }

  deleteCoach(id: number): Observable<{ coaches: Array<Coach>, message: string }> {
      return this.http.delete<{ coaches: Array<Coach>, message: string }>(`${environment.postgresDbUrl}/coach/${id}`);
  }

  getAllCoaches(): Observable<Array<Coach>> {
    return this.http.get<Array<Coach>>(`${environment.postgresDbUrl}/coach`);
  }

  getCoachById(id: number): Observable<Coach> {
    return this.http.get<Coach>(`${environment.postgresDbUrl}/coach/${id}`);
  }

  errorHandle(error: HttpErrorResponse): any {
    const message = error.error.message;
    switch (message) {
      case('повторювані значення ключа порушують обмеження унікальності \"coach_name_surname_fathersName_key\"'):
        this.error$.next('Такий тренер вже існує в базі даних, зміни не можуть бути збережені');
        break;
      case('Тренер звязаний з базою результатів і не може бути видалений з бази даних.'):
        this.error$.next('Тренер звязаний з базою результатів і не може бути видалений з бази даних.');
        break;
    }
    return throwError(error);
  }

  get initCoach(): Coach {
    return {
      name: '',
      surname: '',
      fathersName: ''
    };
  }
}
