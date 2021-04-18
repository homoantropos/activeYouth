import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../admin-layout/auth/auth.service';
import {SportHallService} from '../../services/sport-hall.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {map, startWith } from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {SportHall} from '../../../shared/interfases';

@Component({
  selector: 'app-sport-hall-creator',
  templateUrl: './sport-hall-creator.component.html',
  styleUrls: ['./sport-hall-creator.component.css']
})
export class SportHallCreatorComponent implements OnInit, OnDestroy {
// @ts-ignore
  sportHallCreatorForm: FormGroup;
  // @ts-ignore
  sSub: Subscription;
  // @ts-ignore
  message: string;
  // @ts-ignore
  countryFilteredOptions: Observable<string[]>;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  // @ts-ignore
  townFilteredOptions: Observable<string[]>;
  // @ts-ignore
  towns: Array<Town>;

  constructor(
    public auth: AuthService,
    public sportHallService: SportHallService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.sportHallCreatorForm = new FormGroup({
      sportHall_name: new FormControl('', [
        Validators.required
      ]),
      address: new FormControl(''),
      country_name: new FormControl(''),
      region_name: new FormControl(''),
      town_name: new FormControl('', [
        Validators.required
      ])
    });
    // @ts-ignore
    this.countryFilteredOptions = this.sportHallCreatorForm.get('country_name').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterCountry(value))
      );
    // @ts-ignore
    this.regionFilteredOptions = this.sportHallCreatorForm.get('region_name').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterRegion(value))
      );
    // @ts-ignore
    this.townFilteredOptions = this.sportHallCreatorForm.get('town_name').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterTown(value))
      );
  }

  private _filterCountry(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.countries.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterRegion(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.regions.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterTown(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.towns.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit(sportHall: SportHall): void {
    if (this.sportHallCreatorForm.invalid) {
      return;
    }
    this.sportHallCreatorForm.disable();
    console.log(sportHall);
    this.sSub = this.sportHallService.createSportHall(sportHall)
      .subscribe(
        () => {
          alert(`Нове місто успішно додано до бази даних.`);
          this.router.navigate(['superadmin', 'places', 'sportHalls']);
        },
        error => {
          this.sportHallService.errorHandle(error);
          this.sportHallCreatorForm.enable();
        }
      );
    this.sportHallCreatorForm.enable();
  }

  ngOnDestroy(): void {
    if (this.sSub) {
      this.sSub.unsubscribe();
    }
  }
}


