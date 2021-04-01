import { Injectable } from '@angular/core';
import {Appointment, AppointmentFinancing, Statistic} from '../interfases';
import { Observable, of } from 'rxjs';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {SynchronizationOfSavingService} from './synchronization-of-saving.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {PlacesService} from './places.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(
    private http: HttpClient,
    private placesService: PlacesService,
    private synchronizationService: SynchronizationOfSavingService
  ) { }

  getAllAppointment(): Observable<Array<Appointment>> {
    return this.http.get<Array<Appointment>>(`${environment.mongoDbUrl}/schedule`)
      .pipe(
        map((response: Array<Appointment>) => {
          for (const appointment of response) {
            this.placesService.getPlaceById((appointment.place) as unknown as string)
            .subscribe(place => {
              appointment.place = place;
            });
          }
          return response;
        })
        );
  }

  saveAppointmentToDb(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${environment.mongoDbUrl}/schedule`, appointment);
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    appointment.id = `${Date.now()}`;
    MockDataBase.schedule.unshift(appointment);
    this.synchronizationService.onAppointmentCreeation(appointment);
    return of(appointment);
  }

  deleteAppointment(id: string): Observable<any> {
    console.log(id);
    return this.http.delete<Appointment>(`${environment.mongoDbUrl}/schedule/${id}`);
  }

  updateAppointment(appointment: Appointment): Observable<Appointment> {
    return of(appointment);
  }

  getAllAppointments(): Observable<Array<Appointment>> {
    return of(MockDataBase.schedule);
  }

  getAppointmentByID(id: string): Observable<Appointment> {
    return of((MockDataBase.schedule.find(a => a.id === id)) as Appointment);
  }
}
