import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AppointmentFinancing, Country, SportKind} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {AppointmentService} from '../../../shared/services/appointment.service';
import {DateProviderService} from '../../../shared/services/date-provider.service';
import {basicExpensesFact, basicExpensesPlan} from '../../../../environments/environment';
import {AppointmentFinancingService} from '../../../shared/services/appointment-financing.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-appointment-creator',
  templateUrl: './appointment-creator.component.html',
  styleUrls: ['./appointment-creator.component.css']
})

export class AppointmentCreatorComponent implements OnInit, OnDestroy {
  appointmentCreatorForm: FormGroup;
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
  image: File;
  @ViewChild('input') inputRef: ElementRef;

  constructor(
    private appointmentService: AppointmentService,
    private dateProvider: DateProviderService,
    private appointmentFinancingService: AppointmentFinancingService,
    private router: Router,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.appointmentCreatorForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      start: new FormControl(new Date(), [Validators.required]),
      finish: new FormControl(new Date(), [Validators.required]),
      place: new FormGroup({
        country: new FormControl('', [Validators.required]),
        region: new FormControl(''),
        town: new FormControl('', [Validators.required]),
        appointmentPlaceName: new FormControl('', [Validators.required])
      }),
      members: new FormGroup({
        countries: new FormControl('', [Validators.required]),
        regions: new FormControl('', [Validators.required]),
        educationEntity: new FormControl('', [Validators.required]),
        sportsmen: new FormControl('', [Validators.required]),
        coaches: new FormControl('', [Validators.required]),
        referees: new FormControl('', [Validators.required]),
        others: new FormControl('', [Validators.required]),
      }),
      organizationsParticipants: new FormControl('', [Validators.required]),
      kpkv: new FormControl(2201310),
      character: new FormControl('', [Validators.required]),
      participants: new FormControl('', [Validators.required]),
      sportKind: new FormControl('', [Validators.required]),
      direction: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      organiser: new FormControl('', [Validators.required])
    });
    this.minFinishDate$ = this.appointmentCreatorForm.get('start').valueChanges;
    this.filteredOptions = this.appointmentCreatorForm.get('sportKind').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filter(value))
      );
    this.countryFilteredOptions = this.appointmentCreatorForm.get('place').get('country').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterCountry(value))
      );
    this.regionFilteredOptions = this.appointmentCreatorForm.get('place').get('region').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterRegion(value))
      );
    this.townFilteredOptions = this.appointmentCreatorForm.get('place').get('town').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterTown(value))
      );
    this.placeNamesFilteredOptions = this.appointmentCreatorForm.get('place').get('appointmentPlaceName').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterPlaceNames(value))
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
    AutoUpdateArrays.regions
      .filter(region => region.country.countryName === this.appointmentCreatorForm.get('place').get('country').value)
      .map(region => this.regionsName.push(region.regionName));
    this.regionsName = this.regionsName.filter((v, i, a) => a.indexOf(v) === i);
    return this.regionsName.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterTown(value: string): string[] {
    const filterValue = value.toLowerCase();
    AutoUpdateArrays.towns
      .filter(town => town.region.regionName === this.appointmentCreatorForm.get('place').get('region').value)

      .map(town => this.townsName.push(town.townName));
    this.townsName = this.townsName.filter((v, i, a) => a.indexOf(v) === i);
    return this.townsName.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterPlaceNames(value: string): string[] {
    const filterValue = value.toLowerCase();
    AutoUpdateArrays.appointmentPlaces
      .filter(appointmentPlace => appointmentPlace.town.townName === this.appointmentCreatorForm.get('place').get('town').value)
      .map(appointmentPlace => this.appointmentPlaceNames.push(appointmentPlace.appointmentPlaceName));
    this.appointmentPlaceNames = this.appointmentPlaceNames.filter((v, i, a) => a.indexOf(v) === i);
    return this.appointmentPlaceNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  onDownload(): void {
    this.inputRef.nativeElement.click();
  }

  onCreate(value: any): void {
    value.duration = this.dateProvider.provideDuration(value.start, value.finish);
    this.appointmentService.saveAppointmentToPSQL(value)
      .subscribe(
        (a) => {
          const appointmentFinancing: AppointmentFinancing = {
            appointment: a,
            expensesPlan: basicExpensesPlan,
            expensesFact: basicExpensesFact
          };
          this.appointmentFinancingService.createAppointmentFinancing(appointmentFinancing).subscribe(
            apf => console.log(apf)
          );
          this.router.navigate(['admin', 'schedule']);
          this.alert.success('??????????????! ?????? ?????????? ????????????!');
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

/* TODO:
* 1. ???????????? ???????????????????? ??????????'?????????????????? ???????? ?????????????? ?????? ?????? ???????????????? ?????????? ????????????????????,
*    ???????? ???????????? ???? ?????????????????? ?? ??????????????????.
* 2. ???????????? ?????????????????? ?????????????????? ???????????????????? ?????????? ?????????? ?? ?????????????????????? ?? ??????????????????????????.
* 3. ???????????? ?????????????????? ?????????? ???????? - ?????? ?????? ???????????????? ???????????????????? ???? ?????????????? ?????????????? ????????.
*/
