import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {AuthService} from '../../../admin-layout/auth/auth.service';
import {Router} from '@angular/router';
import {Country, Region} from '../../../shared/interfases';
import {RegionService} from '../../services/region.service';
import {map, startWith} from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';

@Component({
  selector: 'app-regions-creator',
  templateUrl: './region-creator.component.html',
  styleUrls: ['./region-creator.component.css']
})

export class RegionCreatorComponent implements OnInit, OnDestroy {
  // @ts-ignore
  regionCreatorForm: FormGroup;
  // @ts-ignore
  rSub: Subscription;
  // @ts-ignore
  message: string;
  // @ts-ignore
  countryFilteredOptions: Observable<string[]>;
  // @ts-ignore
  countries: Array<Country>;

  constructor(
    public auth: AuthService,
    public regionService: RegionService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.regionCreatorForm = new FormGroup({
      region_name: new FormControl('', [
        Validators.required
      ]),
      region_group: new FormControl('', [
        Validators.required
      ]),
      country: new FormControl('', [
        Validators.required
      ])
    });
    // @ts-ignore
    this.countryFilteredOptions = this.regionCreatorForm.get('country').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterCountry(value))
      );
  }

  private _filterCountry(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.countryNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit(region: Region): void {
    if (this.regionCreatorForm.invalid) {
      return;
    }
    this.regionCreatorForm.disable();
    this.rSub = this.regionService.createRegion(region)
      .subscribe(
        () => {
          alert(`Новий регіон успішно додано до бази даних.`);
          this.router.navigate(['superadmin', 'places', 'regions']);
        },
        error => {
          this.regionService.errorHandle(error);
          this.regionCreatorForm.enable();
        }
      );
    this.regionCreatorForm.enable();
  }

  ngOnDestroy(): void {
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }
}

