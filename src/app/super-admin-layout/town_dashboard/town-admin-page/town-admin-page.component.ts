import {Component, OnDestroy, OnInit} from '@angular/core';
import {Town} from '../../../shared/interfases';
import {TownService} from '../../services/town.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {AuthService} from '../../../admin-layout/auth/auth.service';
import {Router} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';
import {map, startWith} from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';

@Component({
  selector: 'app-town-admin-page',
  templateUrl: './town-admin-page.component.html',
  styleUrls: ['./town-admin-page.component.css']
})
export class TownAdminPageComponent implements OnInit, OnDestroy {

  // @ts-ignore
  townForm: FormGroup;
  submitted = false;
  towns: Array<Town> = [];
  showTownForm = false;
  // @ts-ignore
  initTown: Town = TownService.initTown;
  creatOrEditor = true;
  // @ts-ignore
  tSub: Subscription;
  // @ts-ignore
  countryFilteredOptions: Observable<string[]>;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  createOrEditOption = 'Додати';
  options = 'місто';

  constructor(
    public auth: AuthService,
    public townService: TownService,
    private router: Router,
    private alert: AlertService
  ) {
  }

  ngOnInit(town?: Town): void {
    if (town) {
      this.initTown = town;
      this.creatOrEditor = false;
      this.createOrEditOption = 'Змінити';
      this.showTownForm = true;
    }
    this.townForm = new FormGroup({
      town_name: new FormControl(this.initTown.town_name.trim(), [
        Validators.required
      ]),
      country_name: new FormControl(this.initTown.region?.country?.country_name.trim(), [
        Validators.required
      ]),
      region_name: new FormControl(this.initTown.region?.region_name.trim(), [
        Validators.required
      ])
    });
    try {
      // @ts-ignore
      this.countryFilteredOptions = this.townForm.get('country_name').valueChanges
        .pipe(
          startWith(''),
          map((value: string) => this._filterCountry(value))
        );
    } catch (e) {
    }
    try {
      // @ts-ignore
      this.regionFilteredOptions = this.townForm.get('region_name').valueChanges
        .pipe(
          startWith(''),
          map((value: string) => this._filterRegion(value))
        );
    } catch (e) {
    }
  }

  private _filterCountry(value: string): string[] {
    try {
      const filterValue = value.toLowerCase();
      return AutoUpdateArrays.countryNames.filter(option => option.toLowerCase().includes(filterValue));
    } catch (e) {
      return e.message;
    }
  }

  private _filterRegion(value: string): string[] {
    try {
      const filterValue = value.toLowerCase();
      return AutoUpdateArrays.regionsNames.filter(option => option.toLowerCase().includes(filterValue));
    } catch (e) {
      return e.message;
    }
  }

  onSubmit(): void {
    if (this.townForm.invalid) {
      return;
    }
    const town: Town = {
      town_name: this.townForm.value.town_name.trim(),
      region: {
        region_name: this.townForm.value.region_name.trim()
      }
    };
    this.townForm.disable();
    this.tSub = this.townService.createTown(town)
      .subscribe(
        townAndTowns => {
          this.alert.success(`Нове місто успішно додано до бази даних.`);
          this.towns = townAndTowns.towns;
          this.resetForm();
        },
        err => {
          this.townService.errorHandle(err);
          this.townForm.enable();
        }
      );
    this.townForm.enable();
  }

  onUpdate(): void {
    if (this.townForm.invalid) {
      return;
    }
    const town: Town = {
      town_name: this.townForm.value.town_name.trim(),
      region: {
        region_name: this.townForm.value.region_name.trim()
      },
      id: this.initTown.id
    };
    this.townForm.disable();
    this.tSub = this.townService.updateTown(town)
      .subscribe(
        messageAndTowns => {
          this.alert.success(messageAndTowns.message);
          this.towns = messageAndTowns.towns;
          this.resetForm();
        },
        err => {
          this.townService.errorHandle(err);
          this.townForm.enable();
        }
      );
    this.townForm.enable();
  }

  ngOnDestroy(): void {
    if (this.tSub) {
      this.tSub.unsubscribe();
    }
  }

  showForm(): void {
    this.showTownForm = true;
  }

  resetForm(): void {
    this.townForm.reset();
    this.townForm.enable();
    this.submitted = false;
    this.showTownForm = false;
    this.creatOrEditor = true;
  }
}








