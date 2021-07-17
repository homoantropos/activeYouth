import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {AppointmentPlace, Country, SportKind} from '../../../shared/interfases';
import {AppointmentPlaceService} from '../../services/appointment-place.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {map, startWith, switchMap} from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-appointment-place-editor',
  templateUrl: './appointment-place-editor.component.html',
  styleUrls: ['./appointment-place-editor.component.css']
})

export class AppointmentPlaceEditorComponent implements OnInit, OnDestroy {
  appointmentPlaceId = 0;
  apSub: Subscription = new Subscription();
  // @ts-ignore
  appointmentPlaceEditorForm: FormGroup;
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
    private route: ActivatedRoute,
    private appointmentPlaceService: AppointmentPlaceService,
    private router: Router,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(
        (params: Params) => {
          this.appointmentPlaceId = params.get('id');
          return this.appointmentPlaceService.getOneAppointmentPlaceById(params.get('id'));
        }
      )
    ).subscribe(
      appointmentPlace =>
    {
      this.appointmentPlaceEditorForm = new FormGroup({
        country: new FormControl(appointmentPlace.country.country_name, [Validators.required]),
        region: new FormControl(appointmentPlace.region.regionName, [Validators.required]),
        townName: new FormControl(appointmentPlace.town.townName, [Validators.required]),
        address: new FormControl(appointmentPlace.address, [Validators.required]),
        appointment_place_name: new FormControl(appointmentPlace.appointment_place_name, [Validators.required])
      });
    });

    // @ts-ignore
    this.countryFilteredOptions = this.appointmentPlaceEditorForm.get('country').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterCountry(value))
      );
    // @ts-ignore
    this.regionFilteredOptions = this.appointmentPlaceEditorForm.get('region').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterRegion(value))
      );
    // @ts-ignore
    this.townFilteredOptions = this.appointmentPlaceEditorForm.get('town_name').valueChanges
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
      .filter(region => region.country.country_name === this.appointmentPlaceEditorForm.get('country').value)
      .map(region => this.regionsName.push(region.regionName));
    this.regionsName = this.regionsName.filter((v, i, a) => a.indexOf(v) === i);
    return this.regionsName.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterTown(value: string): string[] {
    const filterValue = value.toLowerCase();
    AutoUpdateArrays.towns
      // @ts-ignore
      .filter(town => town.region.regionName === this.appointmentPlaceEditorForm.get('region').value)
      // @ts-ignore
      .map(town => this.townsName.push(town.regionName));
    this.townsName = this.townsName.filter((v, i, a) => a.indexOf(v) === i);
    return this.townsName.filter(option => option.toLowerCase().includes(filterValue));
  }

  onCreate(appointmentPlace: AppointmentPlace): void {
    appointmentPlace.id = this.appointmentPlaceId;
    this.apSub = this.appointmentPlaceService.updateAppointmentPlace(appointmentPlace)
      .subscribe(
        res => {
          this.router.navigate(['superadmin', 'appointmentPlaces']);
          this.alert.success(res.message);
        }
      );
  }

  ngOnDestroy(): void {
    this.sportKinds.splice(0);
    this.countries.splice(0);
    this.regionsName.splice(0);
    this.townsName.splice(0);
    if (this.apSub) {
      this.apSub.unsubscribe();
    }
  }

}

