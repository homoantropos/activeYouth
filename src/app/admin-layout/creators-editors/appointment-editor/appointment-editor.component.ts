import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Appointment, Country, SportKind} from '../../../shared/interfases';
import {AppointmentService} from '../../../shared/services/appointment.service';
import {DateProviderService} from '../../../shared/services/date-provider.service';
import {AppointmentFinancingService} from '../../../shared/services/appointment-financing.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {map, startWith} from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-appointment-editor',
  templateUrl: './appointment-editor.component.html',
  styleUrls: ['./appointment-editor.component.css']
})
export class AppointmentEditorComponent implements OnInit, OnDestroy {
  appointmentEditorForm: FormGroup;
  filteredOptions: Observable<string[]>;
  countryFilteredOptions: Observable<string[]>;
  regionFilteredOptions: Observable<string[]>;
  townFilteredOptions: Observable<string[]>;
  placeNamesFilteredOptions: Observable<string[]>;
  sportKinds: Array<SportKind> = [];
  countries: Array<Country> = [];
  regionsName: Array<string> = [];
  townsName: Array<string> = [];
  appointmentPlaceNames: Array<string> = [];
  minDate = new Date();
  minFinishDate$: Observable<Date>;
  appointmentId = 0;
  appointment: Appointment;

  constructor(
    private appointmentService: AppointmentService,
    private dateProvider: DateProviderService,
    private appointmentFinancingService: AppointmentFinancingService,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => this.appointmentId = params.id
    );
    this.appointmentService.getAppointmentById(this.appointmentId).subscribe(
      appointment => {
        this.appointmentEditorForm = new FormGroup({
          title: new FormControl(appointment.title, [Validators.required]),
          start: new FormControl(appointment.start, [Validators.required]),
          finish: new FormControl(appointment.finish, [Validators.required]),
          place: new FormGroup({
            country: new FormControl(appointment.appointmentPlace.country.countryName, [Validators.required]),
            region: new FormControl(appointment.appointmentPlace.region.regionName, [Validators.required]),
            town: new FormControl(appointment.appointmentPlace.town.townName, [Validators.required]),
            appointmentPlaceName: new FormControl(appointment.appointmentPlace.appointmentPlaceName)
          }),

          organizationsParticipants: new FormControl(appointment.organizationsParticipants, [Validators.required]),
          kpkv: new FormControl(2201310),
          character: new FormControl(appointment.haracter, [Validators.required]),
          participants: new FormControl(appointment.participants, [Validators.required]),
          sportKind: new FormControl(appointment.sportKind.sportKind, [Validators.required]),
          direction: new FormControl(appointment.direction, [Validators.required]),
          status: new FormControl(appointment.status, [Validators.required]),
          organiser: new FormControl(appointment.organiser, [Validators.required])
        });
        this.minFinishDate$ = this.appointmentEditorForm.get('start').valueChanges;
        this.filteredOptions = this.appointmentEditorForm.get('sportKind').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filter(value))
          );
        this.countryFilteredOptions = this.appointmentEditorForm.get('place').get('country').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterCountry(value))
          );
        this.regionFilteredOptions = this.appointmentEditorForm.get('place').get('region').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterRegion(value))
          );
        this.townFilteredOptions = this.appointmentEditorForm.get('place').get('town').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterTown(value))
          );
        this.placeNamesFilteredOptions = this.appointmentEditorForm.get('place').get('appointmentPlaceName').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterPlaceNames(value))
          );
      }
    );

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.sportKindsNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterCountry(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.countryNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterRegion(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.regionsName.splice(0);
    AutoUpdateArrays.regions
      .filter(region => region.country.countryName === this.appointmentEditorForm.get('place').get('country').value)
      .map(region => {
        this.regionsName.push(region.regionName);
      });
    this.regionsName = this.regionsName.filter((v, i, a) => a.indexOf(v) === i);
    return this.regionsName.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterTown(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.townsName.splice(0);
    AutoUpdateArrays.towns
      .filter(town => town.region.regionName === this.appointmentEditorForm.get('place').get('region').value)
      .map(town => {
        this.townsName.push(town.townName);
      });
    this.townsName = this.townsName.filter((v, i, a) => a.indexOf(v) === i);
    return this.townsName.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterPlaceNames(value: string): string[] {
    const filterValue = value.toLowerCase();
    AutoUpdateArrays.appointmentPlaces
      .filter(appointmentPlace =>
        appointmentPlace.town.townName === this.appointmentEditorForm.get('place').get('town').value)
      .map(appointmentPlace => this.appointmentPlaceNames.push(appointmentPlace.appointmentPlaceName));
    this.appointmentPlaceNames = this.appointmentPlaceNames.filter((v, i, a) => a.indexOf(v) === i);
    return this.appointmentPlaceNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  onEdit(value: any): void {
    value.duration = this.dateProvider.provideDuration(new Date(value.start), new Date(value.finish));
    value.appointment_id = this.appointmentId;
    this.appointmentService.updateAppointment(value)
      .subscribe(
        (a) => {
          this.router.navigate(['admin', 'schedule']);
          this.alert.success('Ваші зміни збережено!');
        }
      );
  }

  ngOnDestroy(): void {
    this.sportKinds.splice(0);
    this.countries.splice(0);
    this.regionsName.splice(0);
    this.townsName.splice(0);
    this.appointmentPlaceNames.splice(0);
  }
}
