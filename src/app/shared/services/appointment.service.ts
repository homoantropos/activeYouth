import {Injectable} from '@angular/core';
import {Appointment, AppointmentFinancing, Report} from '../interfases';
import {Observable, of} from 'rxjs';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
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
  ) {
  }

  getAllAppointmentPSQL(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${environment.postgresDbUrl}/appointment`)
      .pipe(
        map((response: Array<any>) => {
          for (const appointment of response) {
            appointment.startDate = new Date(appointment.startdate.toString());
            appointment.finishDate = new Date(appointment.finishdate.toString());
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
          response.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
          for (const appointment of response) {
            const id: string = (appointment.place) as unknown as string;
            this.placesService.getPlaceById(id)
              .subscribe(place => {
                place.place_id = id;
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

  saveAppointmentToPSQL(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${environment.postgresDbUrl}/appointment`, appointment);
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    appointment.appointment_id = `${Date.now()}`;
    MockDataBase.schedule.unshift(appointment);
    this.synchronizationService.onAppointmentCreation(appointment);
    return of(appointment);
  }

  deleteAppointment(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.mongoDbUrl}/schedule/${id}`);
  }

  updateAppointment(appointment: Appointment): Observable<Appointment> {
    return of(appointment);
  }

  getAllAppointments(): Observable<Array<Appointment>> {
    return of(MockDataBase.schedule);
  }

  getAppointmentByID(id: string): Observable<Appointment> {
    return this.http.get<Appointment>(`${environment.mongoDbUrl}/schedule/${id}`)
      .pipe(
        map((appointment: Appointment) => {
            const appId: string = (appointment.place) as unknown as string;
            this.placesService.getPlaceById(appId)
              .subscribe(place => {
                place.place_id = appId;
                appointment.place = place;
              });
            return appointment;
          }
        )
      );
  }
}
