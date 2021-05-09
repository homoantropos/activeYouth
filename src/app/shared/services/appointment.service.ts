import {Injectable} from '@angular/core';
import {Appointment} from '../interfases';
import {Observable, of} from 'rxjs';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {SynchronizationOfSavingService} from './synchronization-of-saving.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {AppointmentPlaceService} from '../../super-admin-layout/services/appointment-place.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(
    private http: HttpClient,
    private placesService: AppointmentPlaceService,
    private synchronizationService: SynchronizationOfSavingService
  ) {
  }

  getAllAppointmentPSQL(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${environment.postgresDbUrl}/appointment`)
      .pipe(
        map((response: Array<any>) => {
          for (const appointment of response) {
            appointment.startDate = new Date(appointment.start.toString());
            appointment.finishDate = new Date(appointment.finish.toString());
          }
          return response;
        })
      );
  }

  getAllAppointment(): Observable<Array<Appointment>> {
    return this.http.get<Array<Appointment>>(`${environment.mongoDbUrl}/schedule`)
      .pipe(
        map((response: Array<Appointment>) => {
          // @ts-ignore
          response.sort((a, b) => new Date(a.start) - new Date(b.start));
          for (const appointment of response) {
            const id: number = (appointment.appointment_place) as unknown as number;
            this.placesService.getOneAppointmentPlaceById(id)
              .subscribe(place => {
                place.id = id;
                appointment.appointment_place = place;
              });
          }
          return response;
        })
      );
  }

  saveAppointmentToDb(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${environment.mongoDbUrl}/schedule`, appointment);
  }

  saveAppointmentToPSQL(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${environment.postgresDbUrl}/appointment`, appointment);
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    appointment.appointment_id = `${Date.now()}`;
    MockDataBase.schedule.unshift(appointment);
    this.synchronizationService.onAppointmentCreation(appointment);
    return of(appointment);
  }

  deleteAppointment(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.postgresDbUrl}/appointment/${id}`);
  }

  updateAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.patch<Appointment>(`${environment.postgresDbUrl}/appointment`, appointment);
  }

  getAllAppointments(): Observable<Array<Appointment>> {
    return of(MockDataBase.schedule);
  }

  getCalendar(): Observable<any> {
    return this.http.get<any>(`${environment.postgresDbUrl}/appointment/calendar`);
  }

  getAppointmentById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.postgresDbUrl}/appointment/${id}`)
      .pipe(
        map(appointment => {
          appointment.start = new Date(appointment.start.toString());
          appointment.finish = new Date(appointment.finish.toString());
          return appointment;
        })
      );
  }

  getAppointmentByID(id: string): Observable<Appointment> {
    return this.http.get<Appointment>(`${environment.mongoDbUrl}/schedule/${id}`)
      .pipe(
        map((appointment: Appointment) => {
            const appId: number = (appointment.appointment_place) as unknown as number;
            this.placesService.getOneAppointmentPlaceById(appId)
              .subscribe(place => {
                place.id = appId;
                appointment.appointment_place = place;
              });
            return appointment;
          }
        )
      );
  }
}
