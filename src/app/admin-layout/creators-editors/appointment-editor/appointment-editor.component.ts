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

@Component({
  selector: 'app-appointment-editor',
  templateUrl: './appointment-editor.component.html',
  styleUrls: ['./appointment-editor.component.css']
})
export class AppointmentEditorComponent implements OnInit, OnDestroy {
// @ts-ignore
  appointmentEditorForm: FormGroup;
  // @ts-ignore
  filteredOptions: Observable<string[]>;
  // @ts-ignore
  countryFilteredOptions: Observable<string[]>;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  // @ts-ignore
  townFilteredOptions: Observable<string[]>;
  // @ts-ignore
  sportHallFilteredOptions: Observable<string[]>;
  sportKinds: Array<SportKind> = [];
  countries: Array<Country> = [];
  regionsName: Array<string> = [];
  townsName: Array<string> = [];
  sportHallsName: Array<string> = [];
  minDate = new Date();
  // @ts-ignore
  minFinishDate$: Observable<Date>;
  appointmentId = 0;
  // @ts-ignore
  appointment: Appointment;

  constructor(
    private appointmentService: AppointmentService,
    private dateProvider: DateProviderService,
    private appointmentFinancingService: AppointmentFinancingService,
    private route: ActivatedRoute,
    private router: Router
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
          startDate: new FormControl(appointment.startDate, [Validators.required]),
          finishDate: new FormControl(appointment.finishDate, [Validators.required]),
          place: new FormGroup({
            country: new FormControl(appointment.place.country, [Validators.required]),
            region: new FormControl(appointment.place.region),
            town: new FormControl(appointment.place.town, [Validators.required]),
            sportHall: new FormControl(appointment.place.sportHall)
          }),

          organizationsParticipants: new FormControl(appointment.organizationsparticipants, [Validators.required]),
          kpkv: new FormControl(2201310),
          character: new FormControl(appointment.haracter, [Validators.required]),
          participants: new FormControl(appointment.participants, [Validators.required]),
          sportKind: new FormControl(appointment.name, [Validators.required]),
          direction: new FormControl(appointment.direction, [Validators.required]),
          status: new FormControl(appointment.status, [Validators.required]),
          organiser: new FormControl(appointment.organiser, [Validators.required])
        });
        // @ts-ignore
        this.minFinishDate$ = this.appointmentEditorForm.get('startDate').valueChanges;
      }
    );
    // @ts-ignore
    this.filteredOptions = this.appointmentEditorForm.get('sportKind').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filter(value))
      );
    // @ts-ignore
    this.countryFilteredOptions = this.appointmentEditorForm.get('place').get('country').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterCountry(value))
      );
    // @ts-ignore
    this.regionFilteredOptions = this.appointmentEditorForm.get('place').get('region').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterRegion(value))
      );
    // @ts-ignore
    this.townFilteredOptions = this.appointmentEditorForm.get('place').get('town').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterTown(value))
      );
    // @ts-ignore
    this.sportHallFilteredOptions = this.appointmentEditorForm.get('place').get('sportHall').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterSportHall(value))
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
      // @ts-ignore
      .filter(region => region.country_name === this.appointmentEditorForm.get('place').get('country').value)
      .map(region => this.regionsName.push(region.region_name));
    this.regionsName = this.regionsName.filter((v, i, a) => a.indexOf(v) === i);
    return this.regionsName.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterTown(value: string): string[] {
    const filterValue = value.toLowerCase();
    AutoUpdateArrays.towns
      // @ts-ignore
      .filter(town => town.region_name === this.appointmentEditorForm.get('place').get('region').value)
      // @ts-ignore
      .map(town => this.townsName.push(town.town_name));
    this.townsName = this.townsName.filter((v, i, a) => a.indexOf(v) === i);
    return this.townsName.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterSportHall(value: string): string[] {
    const filterValue = value.toLowerCase();
    AutoUpdateArrays.sportHalls
      // @ts-ignore
      .filter(sportHall => sportHall.town_name === this.appointmentEditorForm.get('place').get('town').value)
      .map(sportHall => this.sportHallsName.push(sportHall.sporthall_name));
    this.sportHallsName = this.sportHallsName.filter((v, i, a) => a.indexOf(v) === i);
    return this.sportHallsName.filter(option => option.toLowerCase().includes(filterValue));
  }

  onEdit(value: any): void {
    value.duration = this.dateProvider.provideDuration(value.startDate, value.finishDate);
    value.appointment_id = this.appointmentId;
    this.appointmentService.updateAppointment(value)
      .subscribe(
        (a) => {
          // @ts-ignore
          this.appointmentEditorForm.reset();
          this.router.navigate(['admin', 'schedule']);
          alert('Ваші зміни збережено!');
        }
      );
  }

  ngOnDestroy(): void {
    this.sportKinds.splice(0);
    this.countries.splice(0);
    this.regionsName.splice(0);
    this.townsName.splice(0);
    this.sportHallsName.splice(0);
  }
}


/* TODO:
* 1. Всі маніпуляції з подією повинні автоматично синхронізуватися в базі даних з відповідними статистикою і фінансуванням.*/
