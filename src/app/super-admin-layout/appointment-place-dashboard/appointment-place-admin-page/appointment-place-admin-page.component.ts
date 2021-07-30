import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AppointmentPlace} from '../../../shared/interfases';
import {AppointmentPlaceService} from '../../services/appointment-place.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-appointment-place-admin-page',
  templateUrl: './appointment-place-admin-page.component.html',
  styleUrls: ['./appointment-place-admin-page.component.css']
})
export class AppointmentPlaceAdminPageComponent implements OnInit {

  static appointmentPlaces: Array<AppointmentPlace> = [];
  get appointmentPlaces(): Array<AppointmentPlace> {
    return AppointmentPlaceAdminPageComponent.appointmentPlaces;
  }

  showButton = true;

  searchOption = true;
  searchValue = '';
  searchField = ['appointmentPlaceName'];

  // @ts-ignore
  @ViewChild('nameInput') nameInputRef: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appointmentPlaceService: AppointmentPlaceService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        switchMap((params: Params) => {
          if (params.showButton) {
            this.showButton = params.showButton;
          }
          return this.appointmentPlaceService.getAllAppointmentPlaces();
        })
      )
      .subscribe(
        appointmentPlaces =>
          AppointmentPlaceAdminPageComponent.appointmentPlaces = appointmentPlaces.slice()
      );
  }

  setShowButton(condition: boolean): void {
    this.showButton = condition;
  }

  goToAppointmentPlaceEditor(): void {
    this.showButton = false;
    this.router.navigateByUrl(`superadmin/places/appointmentplaces/create`);
    this.searchValue = '';
  }

  changeSearchOption(): void {
    this.searchOption = !this.searchOption;
    this.nameInputRef.nativeElement.focus();
    this.searchField = this.searchOption ? ['appointmentPlaceName'] : ['town', 'townName'];
  }
}
