import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {EducationEntity} from '../../shared/interfases';
import {Observable, Subject, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationalEntityService {

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) { }

  createEduEntity(eduEntity: EducationEntity): Observable<EducationEntity>{
    return this.http.post<EducationEntity>(`${environment.postgresDbUrl}/eduEntity`, eduEntity);
  }

  getEduEntities(eduEntityType: string): Observable<Array<EducationEntity>> {
    return this.http.get<Array<EducationEntity>>(`${environment.postgresDbUrl}/eduEntity?eduEntityType=${eduEntityType}`);
  }

  deleteEduEntity(id: number): Observable<string> {
    return this.http.delete<string>(`${environment.postgresDbUrl}/eduEntity/${id}`);
  }

  public errorHandle(error: HttpErrorResponse): any {
    const message = error.error.message;
    if (message) {
      switch (message) {
        case('повторювані значення ключа порушують обмеження унікальності "country_country_name_key"'):
          this.error$.next('така назва країни вже зареєстрована.');
          break;
      }
    }
    return throwError(error);
  }

}
