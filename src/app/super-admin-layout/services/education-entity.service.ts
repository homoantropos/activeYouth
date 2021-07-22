import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {EducationEntity} from '../../shared/interfases';
import {Observable, Subject, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationEntityService {

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {
  }

  createEduEntity(eduEntity: EducationEntity): Observable<EducationEntity> {
    return this.http.post<EducationEntity>(`${environment.postgresDbUrl}/eduEntity`, eduEntity);
  }

  getAllEducationEntities(): Observable<Array<EducationEntity>> {
    return this.http.get<Array<EducationEntity>>(`${environment.postgresDbUrl}/eduEntity`);
  }

  getEduEntities(eduEntityType: string):
    Observable<{
      eduEntities: Array<EducationEntity>,
      eduEntityNames: Array<string>,
      message: string
    }> {
    return this.http.get<{
      eduEntities: Array<EducationEntity>,
      eduEntityNames: Array<string>,
      message: string
    }>(`${environment.postgresDbUrl}/eduEntity?eduEntityType=${eduEntityType}`);
  }

  getEduEntitiesNamesByRegion(regionName: string):
    Observable<Array<string>> {
    return this.http.get<Array<string>>(`${environment.postgresDbUrl}/eduEntity/regionName?regionName=${regionName}`);
  }

  getOneEduEntityById(id: number): Observable<EducationEntity> {
    return this.http.get<EducationEntity>(`${environment.postgresDbUrl}/eduEntity/${id}`);
  }

  deleteEduEntity(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${environment.postgresDbUrl}/eduEntity/${id}`);
  }

  updateEduEntity(eduEntity: EducationEntity): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(`${environment.postgresDbUrl}/eduEntity/${eduEntity.id}`, eduEntity);
  }

  public errorHandle(error: HttpErrorResponse): any {
    const message = error.error.message;
    if (message) {
      switch (message) {
        case('повторювані значення ключа порушують обмеження унікальності "educational_entity_name_eduEntityType_regionId_key"'):
          this.error$.next('такий навчальний заклад вже зареєстровано.');
          break;
      }
    }
    return throwError(error);
  }

}
