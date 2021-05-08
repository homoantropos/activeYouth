import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppointmentPlaceService} from '../services/appointment-place.service';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appointment-place-admin-page',
  templateUrl: './appointment-place-admin-page.component.html',
  styleUrls: ['./appointment-place-admin-page.component.css']
})
export class AppointmentPlaceAdminPageComponent implements OnInit, OnDestroy {

  // @ts-ignore
  appointmentPlace$: Observable<Array<AppointmentPlace>>;
  paginatorStartPageNumber = 0;
  displayedColumns = ['id', 'appointmentPlaceName', 'appointmentPlaceAddress', 'edit', 'delete'];
  apSub: Subscription = new Subscription();

  constructor(
    private appointmentPlaceService: AppointmentPlaceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.appointmentPlace$ = this.appointmentPlaceService.getAllAppointmentPlaces();
  }

  goToAppointmentPlaceCreator(): void {
    this.router.navigateByUrl(`superadmin/appointmentPlaces/create`);
  }

  goToAppointmentPlaceEditor(id: number): void {
    this.router.navigateByUrl(`superadmin/appointmentPlaces/edit/${id}`);
  }

  deleteAppointmentPlace(id: number): void {
    this.apSub = this.appointmentPlaceService.deleteAppointmentPlace(id).subscribe(
      res => {
        alert(res.message);
        this.ngOnInit();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.apSub) {
      this.apSub.unsubscribe();
    }
  }

}
