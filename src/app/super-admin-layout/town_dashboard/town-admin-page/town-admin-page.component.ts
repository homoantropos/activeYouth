import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
export class TownAdminPageComponent implements OnInit, OnDestroy{

  showEditor = false;
  // @ts-ignore
  @ViewChild('townNameInput') inputRef: ElementRef;
  // @ts-ignore
  @Input() initTown: Town;
  // @ts-ignore
  townForm: FormGroup;
  // @ts-ignore
  tSub: Subscription;
  // @ts-ignore
  countryFilteredOptions: Observable<string[]>;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  // @ts-ignore
  towns: Array<Town>;
  submitted = false;
  creatOrEditor = true;
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
      this.showEditor = true;
    } else {
      this.initTown = TownService.initTown;
    }
    this.townForm = new FormGroup({
      town_name: new FormControl(this.initTown.town_name, [
        Validators.required
      ]),
      country_name: new FormControl(this.initTown.region?.country?.country_name, [
        Validators.required
      ]),
      region_name: new FormControl(this.initTown.region?.region_name, [
        Validators.required
      ])
    });
    // @ts-ignore
    this.countryFilteredOptions = this.townForm.get('country_name').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterCountry(value))
      );
    // @ts-ignore
    this.regionFilteredOptions = this.townForm.get('region_name').valueChanges
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
    if (this.townForm.invalid) {
      return;
    }
    const town: Town = {
      town_name: this.townForm.value.town_name,
      region: {
        region_name: this.townForm.value.region_name
      }
    };
    this.townForm.disable();
    this.tSub = this.townService.createTown(town)
      .subscribe(
        townAndTowns => {
          this.alert.success(`Нове місто успішно додано до бази даних.`);
          this.towns = townAndTowns.towns;
          this.router.navigate(['superadmin', 'places', 'towns']);
          this.resetForm();
        },
        error => {
          this.townService.errorHandle(error);
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
      town_name: this.townForm.value.town_name,
      region: {
        region_name: this.townForm.value.region_name
      },
      id: this.initTown.id
    };
    this.townForm.disable();
    this.tSub = this.townService.updateTown(town)
      .subscribe(
        messageAndTowns => {
          this.alert.success(messageAndTowns.message);
          this.towns = messageAndTowns.towns;
          this.router.navigate(['superadmin', 'places', 'towns']);
          this.resetForm();
        },
        error => {
          this.townService.errorHandle(error);
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

  resetForm(): void {
    this.townForm.reset();
    this.townForm.enable();
    this.inputRef.nativeElement.focus();
    this.submitted = false;
    this.showEditor = false;
    this.creatOrEditor = true;
  }
}









