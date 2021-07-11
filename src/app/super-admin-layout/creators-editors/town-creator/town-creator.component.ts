import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {Town} from '../../../shared/interfases';
import {AuthService} from '../../../admin-layout/auth/auth.service';
import {Router} from '@angular/router';
import {map, startWith} from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {TownService} from '../../services/town.service';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-town-creator',
  templateUrl: './town-creator.component.html',
  styleUrls: ['./town-creator.component.css']
})

export class TownCreatorComponent implements OnInit, OnDestroy {
// @ts-ignore
  townCreatorForm: FormGroup;
  // @ts-ignore
  tSub: Subscription;
  // @ts-ignore
  message: string;
  // @ts-ignore
  countryFilteredOptions: Observable<string[]>;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  // @ts-ignore
  towns: Array<Town>;

  constructor(
    public auth: AuthService,
    public townService: TownService,
    private router: Router,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.townCreatorForm = new FormGroup({
      town_name: new FormControl('', [
        Validators.required
      ]),
      country_name: new FormControl('', [
        Validators.required
      ]),
      region_name: new FormControl('', [
        Validators.required
      ])
    });
    // @ts-ignore
    this.countryFilteredOptions = this.townCreatorForm.get('country_name').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterCountry(value))
      );
    // @ts-ignore
    this.regionFilteredOptions = this.townCreatorForm.get('region_name').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterRegion(value))
      );
  }

  private _filterCountry(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.countryNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterRegion(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.regionsNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit(): void {
    if (this.townCreatorForm.invalid) {
      return;
    }
    const town: Town = {
      town_name: this.townCreatorForm.value.town_name,
      region: {
        region_name: this.townCreatorForm.value.region_name
      }
    };
    this.townCreatorForm.disable();
    this.tSub = this.townService.createTown(town)
      .subscribe(
        townAndTowns => {
          this.alert.success(`Нове місто успішно додано до бази даних.`);
          this.towns = townAndTowns.towns;
          this.router.navigate(['superadmin', 'places', 'towns']);
        },
        error => {
          this.townService.errorHandle(error);
          this.townCreatorForm.enable();
        }
      );
    this.townCreatorForm.enable();
  }

  ngOnDestroy(): void {
    if (this.tSub) {
      this.tSub.unsubscribe();
    }
  }
}


