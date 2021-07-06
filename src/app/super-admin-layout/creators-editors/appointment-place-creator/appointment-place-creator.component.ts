import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {AppointmentPlace, Country, SportKind} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {map, startWith} from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {AppointmentPlaceService} from '../../services/appointment-place.service';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-appointment-place-creator',
  templateUrl: './appointment-place-creator.component.html',
  styleUrls: ['./appointment-place-creator.component.css']
})

export class AppointmentPlaceCreatorComponent implements OnInit, OnDestroy {
// @ts-ignore
  appointmentPlaceCreatorForm: FormGroup;
  // @ts-ignore
  countryFilteredOptions: Observable<string[]>;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  // @ts-ignore
  townFilteredOptions: Observable<string[]>;
  sportKinds: Array<SportKind> = [];
  countries: Array<Country> = [];
  regionsName: Array<string> = [];
  townsName: Array<string> = [];

  constructor(
    private appointmentPlaceService: AppointmentPlaceService,
    private router: Router,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.appointmentPlaceCreatorForm = new FormGroup({
      country: new FormControl('', [Validators.required]),
      region: new FormControl('', [Validators.required]),
      town_name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      appointment_place_name: new FormControl('')
    });

    // @ts-ignore
    this.countryFilteredOptions = this.appointmentPlaceCreatorForm.get('country').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterCountry(value))
      );
    // @ts-ignore
    this.regionFilteredOptions = this.appointmentPlaceCreatorForm.get('region').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterRegion(value))
      );
    // @ts-ignore
    this.townFilteredOptions = this.appointmentPlaceCreatorForm.get('town_name').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterTown(value))
      );
  }

  private _filterCountry(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.countryNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterRegion(value: string): string[] {
    const filterValue = value.toLowerCase();
    AutoUpdateArrays.regions
      // @ts-ignore
      .filter(region => region.country.country_name === this.appointmentPlaceCreatorForm.get('country').value)
      .map(region => this.regionsName.push(region.region_name));
    this.regionsName = this.regionsName.filter((v, i, a) => a.indexOf(v) === i);
    return this.regionsName.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterTown(value: string): string[] {
    const filterValue = value.toLowerCase();
    AutoUpdateArrays.towns
      // @ts-ignore
      .filter(town => town.region.region_name === this.appointmentPlaceCreatorForm.get('region').value)
      // @ts-ignore
      .map(town => this.townsName.push(town.town_name));
    this.townsName = this.townsName.filter((v, i, a) => a.indexOf(v) === i);
    return this.townsName.filter(option => option.toLowerCase().includes(filterValue));
  }

  onCreate(appointmentPlace: AppointmentPlace): void {
    this.appointmentPlaceService.createAppointmentPlace(appointmentPlace)
      .subscribe(
          appointmentPlc => {
            this.router.navigate(['superadmin', 'appointmentPlaces']);
            this.alert.success('Місце проведення додано!');
          }
      );
  }

  ngOnDestroy(): void {
    this.sportKinds.splice(0);
    this.countries.splice(0);
    this.regionsName.splice(0);
    this.townsName.splice(0);
  }
}
