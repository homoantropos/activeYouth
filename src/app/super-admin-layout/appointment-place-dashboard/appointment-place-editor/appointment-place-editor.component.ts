import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';
import {map, startWith, switchMap} from 'rxjs/operators';
import {AppointmentPlace} from '../../../shared/interfases';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {AppointmentPlaceService} from '../../services/appointment-place.service';
import {AppointmentPlaceListComponent} from '../appointment-place-list/appointment-place-list.component';

@Component({
  selector: 'app-appointment-place-editor',
  templateUrl: './appointment-place-editor.component.html',
  styleUrls: ['./appointment-place-editor.component.css']
})
export class AppointmentPlaceEditorComponent implements OnInit, OnDestroy {

  // @ts-ignore
  appointmentPlaceForm: FormGroup;
  showAppointmentPlaceForm = false;
  submitted = false;
  // @ts-ignore
  countryFilteredOptions: Observable<string[]>;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  regionsNames: Array<string> = [];
  // @ts-ignore
  townFilteredOptions: Observable<string[]>;
  townsNames: Array<string> = [];

  // @ts-ignore
  appointmentPlaceId: number;
  // @ts-ignore
  countryId: number;

  // @ts-ignore
  aSub: Subscription;

  // @ts-ignore
  createOrEditLabelName: string;
  private creatOrEditor = true;

  setCreatOrEditor(condition: boolean): void {
    this.creatOrEditor = condition;
  }

  get creatorOrEditor(): boolean {
    return this.creatOrEditor;
  }

  @ViewChild('appointmentPlaceNameInput')
  set appointmentPlaceName(appointmentPlaceNameInput: ElementRef<HTMLInputElement>) {
    if (appointmentPlaceNameInput) {
      setTimeout(() => {
        appointmentPlaceNameInput.nativeElement.focus();
      });
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentPlaceService: AppointmentPlaceService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    if (this.route.toString().includes('edit')) {
      this.setCreatOrEditor(false);
      this.createOrEditLabelName = 'Змінити';
      this.route.paramMap
        .pipe(
          switchMap(
            (params: Params) => {
              this.appointmentPlaceId = params.get('id');
              return this.appointmentPlaceService.getOneAppointmentPlaceById(params.get('id'));
            }
          )
        )
        .subscribe(
          appointmentPlace => {
            // @ts-ignore
            this.countryId = appointmentPlace.country.id;
            this.appointmentPlaceForm = this.createAppointmentPlaceForm(appointmentPlace);
          },
          error => this.alert.danger(error.message)
        );
    } else {
      this.appointmentPlaceForm = this.createAppointmentPlaceForm(AppointmentPlaceService.initAppointmentPlace);
      this.createOrEditLabelName = 'Додати';
    }
    if (this.appointmentPlaceForm) {
      try {
        // @ts-ignore
        this.countryFilteredOptions = this.appointmentPlaceForm.get('countryName').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterCountry(value))
          );
      } catch (e) {
        this.alert.danger(e.message);
      }
    }

    try {
      // @ts-ignore
      this.regionFilteredOptions = this.appointmentPlaceForm.get('regionName').valueChanges
        .pipe(
          startWith(''),
          map((value: string) => this._filterRegion(value))
        );
    } catch (e) {
      this.alert.danger(e.message);
    }

    try {
      // @ts-ignore
      this.townFilteredOptions = this.appointmentPlaceForm.get('townName').valueChanges
        .pipe(
          startWith(''),
          map((value: string) => this._filterTown(value))
        );
    } catch (e) {
      this.alert.danger(e.message);
    }
  }

  createAppointmentPlaceForm(appointmentPlace: AppointmentPlace): FormGroup {
    return new FormGroup({
      countryName: new FormControl(appointmentPlace.country.countryName.trim(), [Validators.required]),
      regionName: new FormControl(appointmentPlace.region.regionName.trim(), [Validators.required]),
      townName: new FormControl(appointmentPlace.town.townName.trim(), [Validators.required]),
      address: new FormControl(appointmentPlace.address, [Validators.required]),
      appointmentPlaceName: new FormControl(appointmentPlace.appointmentPlaceName, [Validators.required])
    });
  }

  private _filterCountry(value: string): string[] {
    try {
      const filterValue = value.toLowerCase();
      return AutoUpdateArrays.countryNames.filter(option => option.toLowerCase().includes(filterValue));
    } catch (e) {
      this.alert.danger(e.message);
      return e.message;
    }
  }

  private _filterRegion(value: string): string[] {
    try {
      const filterValue = value.toLowerCase();
      AutoUpdateArrays.regions
        // @ts-ignore
        .filter(region => region.country.countryName === this.appointmentPlaceForm.get('countryName').value)
        .map(region => this.regionsNames.push(region.regionName));
      this.regionsNames = this.regionsNames.filter((v, i, a) => a.indexOf(v) === i);
      return this.regionsNames.filter(option => option.toLowerCase().includes(filterValue));
    } catch (e) {
      this.alert.danger(e.message);
      return e.message;
    }
  }

  private _filterTown(value: string): string[] {
    try {
      const filterValue = value.toLowerCase();
      AutoUpdateArrays.towns
        // @ts-ignore
        .filter(town => town.region.regionName === this.appointmentPlaceForm.get('regionName').value)
        .map(town => this.townsNames.push(town.townName));
      this.townsNames = this.townsNames.filter((v, i, a) => a.indexOf(v) === i);
      return this.townsNames.filter(option => option.toLowerCase().includes(filterValue));
    } catch (e) {
      this.alert.danger(e.message);
      return e.message;
    }
  }

  onSubmit(formValue: any): void {
    this.appointmentPlaceForm.disable();
    this.submitted = true;
    const createdAppointmentPlace: AppointmentPlace = {
      appointmentPlaceName: formValue.appointmentPlaceName.trim(),
      address: formValue.address.trim(),
      country: {
        countryName: formValue.countryName.trim(),
      },
      region: {
        regionName: formValue.regionName.trim(),
        regionGroup: 0
      },
      town: {
        townName: formValue.townName.trim(),
      }
    };
    let appointmentPlaceServiceMethod;
    if (this.creatorOrEditor) {
      appointmentPlaceServiceMethod = this.appointmentPlaceService.createAppointmentPlace(createdAppointmentPlace);
    } else {
      createdAppointmentPlace.id = this.appointmentPlaceId;
      appointmentPlaceServiceMethod = this.appointmentPlaceService.updateAppointmentPlace(createdAppointmentPlace);
    }
    this.aSub = appointmentPlaceServiceMethod
      .subscribe(
        dbAppointmentPlaceAndMessage => {
          AppointmentPlaceListComponent.appointmentPlaces =
            AppointmentPlaceListComponent.appointmentPlaces.filter(ap => ap.id !== dbAppointmentPlaceAndMessage.appointmentPlace.id);
          AppointmentPlaceListComponent.appointmentPlaces.unshift(dbAppointmentPlaceAndMessage.appointmentPlace);
          this.alert.success(dbAppointmentPlaceAndMessage.message);
          this.resetAppointmentPlaceForm();
        }, error => {
          this.appointmentPlaceService.errorHandle(error);
          this.appointmentPlaceForm.enable();
          this.submitted = false;
        }
      );
    if (this.appointmentPlaceService.error$) {
      this.appointmentPlaceService.error$.subscribe(
        message =>
          this.alert.danger(message)
      );
    }
  }

  resetAppointmentPlaceForm(): void {
    this.router.navigate(['superadmin', 'places', 'appointmentplaces'], {
      queryParams: {
        showButton: false
      }
    });
    this.appointmentPlaceForm.enable();
    this.submitted = false;
    this.showAppointmentPlaceForm = false;
    this.createOrEditLabelName = 'Додати';
    this.setCreatOrEditor(true);
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}
