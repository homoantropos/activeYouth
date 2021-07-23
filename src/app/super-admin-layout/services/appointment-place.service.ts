import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {AppointmentPlace} from '../../shared/interfases';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentPlaceService {

  error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {
  }

  createAppointmentPlace(appointmentPlace: AppointmentPlace):
    Observable<{ appointmentPlace: AppointmentPlace, message: string }> {
    return this.http.post<{ appointmentPlace: AppointmentPlace, message: string }>
    (`${environment.postgresDbUrl}/place`, appointmentPlace);
  }

  updateAppointmentPlace(appointmentPlace: AppointmentPlace): Observable<{ appointmentPlace: AppointmentPlace, message: string }> {
    return this.http.patch<{ appointmentPlace: AppointmentPlace, message: string }>(`${environment.postgresDbUrl}/place/${appointmentPlace.id}`, appointmentPlace);
  }

  deleteAppointmentPlace(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${environment.postgresDbUrl}/place/${id}`);
  }

  getOneAppointmentPlaceById(id: number): Observable<AppointmentPlace> {
    return this.http.get<AppointmentPlace>(`${environment.postgresDbUrl}/place/${id}`);
  }

  getAllAppointmentPlaces(): Observable<Array<AppointmentPlace>> {
    return this.http.get<Array<AppointmentPlace>>(`${environment.postgresDbUrl}/place`);
  }

  static get initAppointmentPlace(): AppointmentPlace {
    return {
      appointmentPlaceName: '',
      address: '',
      country: {
        countryName: '',
      },
      region: {
        regionName: '',
        regionGroup: 0
      },
      town: {
        townName: '',
      }
    };
  }

  public errorHandle(error: HttpErrorResponse): any {
    const message = error.error.message;
    if (message) {
      switch (message) {
        case('' +
          'повторювані значення ключа порушують обмеження унікальності \"appointmentPlace_appointmentPlaceName_countryId_regionId_to_key\"'):
          this.error$.next('така споруда вже зареєстрована.');
          break;
        case('update або delete в таблиці ' +
          '\"appointmentPlace\" порушує обмеження зовнішнього ключа ' +
          '\"appointment_appointmentPlaceId_fkey1\" таблиці \"appointment\"'):
          this.error$.next('Споруда не може бути видалена - в базі даних є захід, до якого вона привязана.');
          break;
      }
    }
    return throwError(error);
  }
}

