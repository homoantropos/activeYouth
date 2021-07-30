import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppointmentPlace} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';
import {AppointmentPlaceService} from '../../services/appointment-place.service';
import {AppointmentPlaceAdminPageComponent} from '../appointment-place-admin-page/appointment-place-admin-page.component';
import {TableSortService} from '../../../shared/utils/table-sort.service';

@Component({
  selector: 'app-appointment-place-list',
  templateUrl: './appointment-place-list.component.html',
  styleUrls: ['./appointment-place-list.component.css']
})

export class AppointmentPlaceListComponent implements OnInit {

  // @ts-ignore
  @Input() appointmentPlaces: Array<AppointmentPlace>;

  displayedColumns = ['_id', 'name', 'country', 'region', 'town', 'address', 'edit', 'delete'];
  paginatorStartPageNumber = 0;

  // @ts-ignore
  appointmentPlaceId: number;

  sortDirection = true;
  showDeleteConfirmation = false;
  options = 'місце проведення';

  @Output() showButton: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private appointmentPlaceService: AppointmentPlaceService,
    private alert: AlertService,
    private sortService: TableSortService
  ) {
  }

  ngOnInit(): void {}

  goToAppointmentPlaceEditor(id: number): void {
    this.showButton.emit(false);
    this.router.navigateByUrl(`superadmin/places/appointmentplaces/edit/${id}`);
  }

  callDeletion(id: number): void {
    this.showDeleteConfirmation = true;
    this.appointmentPlaceId = id;
    this.router.navigateByUrl(`superadmin/places/appointmentplaces`);
    this.showButton.emit(true);
  }

  onDelete(confirm: boolean): void {
    if (confirm) {
      this.appointmentPlaceService.deleteAppointmentPlace(this.appointmentPlaceId)
        .subscribe(
          response => {
            this.alert.success(response.message);
            this.showButton.emit(true);
            AppointmentPlaceAdminPageComponent.appointmentPlaces =
              AppointmentPlaceAdminPageComponent.appointmentPlaces.filter(ap => ap.id !== this.appointmentPlaceId);
          },
          error => {
            this.appointmentPlaceService.errorHandle(error);
          }
        );
      if (this.appointmentPlaceService.error$) {
        this.appointmentPlaceService.error$.subscribe(
          message => this.alert.danger(message)
        );
      }
    } else {
      this.alert.warning('Видалення скасовано.');
    }
    this.showDeleteConfirmation = false;
  }

  sortTable(sortOption: any): void {
    this.sortDirection = this.sortService.sortTableByStringValues(sortOption, this.appointmentPlaces, this.sortDirection);
  }
}

