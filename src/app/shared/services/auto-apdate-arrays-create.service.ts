import {Injectable, OnDestroy} from '@angular/core';
import {SportKindService} from '../../super-admin-layout/services/sport-kind.service';
import {CountryService} from '../../super-admin-layout/services/country.service';
import {RegionService} from '../../super-admin-layout/services/region.service';
import {Country, Region, SportKind} from '../interfases';
import {AutoUpdateArrays} from '../utils/autoUpdateArrays';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoApdateArraysCreateService implements OnDestroy {

  sub: Subscription = new Subscription();

  constructor(
    private sportKindService: SportKindService,
    private countryService: CountryService,
    private regionService: RegionService
  ) {
  }

  createAutoApdateArrays(): void {
    this.sub = this.sportKindService.getAllSportKinds().subscribe(
      sportKinds => {
        sportKinds.map((sportKind: SportKind) => AutoUpdateArrays.sportKinds.push(sportKind.name));
      }
    );
    this.sub = this.countryService.getAllCountries().subscribe(
      countries => {
        countries.map((country: Country) => AutoUpdateArrays.countries.push(country.country_name));
      }
    );
    this.sub = this.regionService.getAllRegions().subscribe(
      regions => {
        regions.map((region: Region) => AutoUpdateArrays.regions.push(region.region_name));
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
