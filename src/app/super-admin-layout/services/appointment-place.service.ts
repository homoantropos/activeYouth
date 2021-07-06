import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppointmentPlace} from '../../shared/interfases';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentPlaceService {

  constructor(
    private http: HttpClient
  ) { }

  createAppointmentPlace(appointmentPlace: AppointmentPlace): Observable<AppointmentPlace> {
    return this.http.post<AppointmentPlace>(`${environment.postgresDbUrl}/place`, appointmentPlace);
  }

  updateAppointmentPlace(appointmentPlace: AppointmentPlace): Observable<{message: string}> {
    return this.http.patch<{message: string}>(`${environment.postgresDbUrl}/place/${appointmentPlace.id}`, appointmentPlace);
  }

  deleteAppointmentPlace(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.postgresDbUrl}/place/${id}`);
  }

  getOneAppointmentPlaceById(id: number): Observable<AppointmentPlace> {
    return this.http.get<AppointmentPlace>(`${environment.postgresDbUrl}/place/${id}`);
  }

  getAllAppointmentPlaces(): Observable<Array<AppointmentPlace>> {
    return this.http.get<Array<AppointmentPlace>>(`${environment.postgresDbUrl}/place`);
  }
}
