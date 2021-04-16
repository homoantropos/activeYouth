import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {Region, Town} from '../../../shared/interfases';
import {AuthService} from '../../../admin-layout/auth/auth.service';
import {RegionService} from '../../services/region.service';
import {Router} from '@angular/router';
import {map, startWith} from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {TownService} from '../../services/town.service';

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
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.townCreatorForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      country: new FormControl('', [
        Validators.required
      ]),
      region: new FormControl('', [
        Validators.required
      ])
    });
    // @ts-ignore
    this.countryFilteredOptions = this.townCreatorForm.get('country').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterCountry(value))
      );
    // @ts-ignore
    this.regionFilteredOptions = this.townCreatorForm.get('region').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterRegion(value))
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

  onSubmit(town: Town): void {
    if (this.townCreatorForm.invalid) {
      return;
    }
    this.townCreatorForm.disable();
    console.log(town);
    this.tSub = this.townService.createTown(town)
      .subscribe(
        () => {
          alert(`Нове місто успішно додано до бази даних.`);
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


