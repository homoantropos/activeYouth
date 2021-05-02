import {Injectable, OnDestroy} from '@angular/core';
import {SportKindService} from '../../super-admin-layout/services/sport-kind.service';
import {CountryService} from '../../super-admin-layout/services/country.service';
import {RegionService} from '../../super-admin-layout/services/region.service';
import {AutoUpdateArrays} from '../utils/autoUpdateArrays';
import {Subscription} from 'rxjs';
import {TownService} from '../../super-admin-layout/services/town.service';
import {SportHallService} from '../../super-admin-layout/services/sport-hall.service';

@Injectable({
  providedIn: 'root'
})

export class AutoUpdateArraysCreateService implements OnDestroy {

  sub: Subscription = new Subscription();

  constructor(
    private sportKindService: SportKindService,
    private countryService: CountryService,
    private regionService: RegionService,
    private townService: TownService,
    private sportHallService: SportHallService
  ) {
  }

  createAutoUpdateArrays(): void {

    this.sub = this.sportKindService.getAllSportKinds().subscribe(
      sportKinds => {
        AutoUpdateArrays.sportKinds.splice(0);
        AutoUpdateArrays.sportKindsNames.splice(0);
        AutoUpdateArrays.sportKinds = sportKinds.slice();
        AutoUpdateArrays.sportKinds.map(sportKind => AutoUpdateArrays.sportKindsNames.push(sportKind.sport_kind));
      }
    );

    this.sub = this.countryService.getAllCountries().subscribe(
      countries => {
        AutoUpdateArrays.countries.splice(0);
        AutoUpdateArrays.countryNames.splice(0);
        AutoUpdateArrays.countries = countries.slice();
        AutoUpdateArrays.countries.map(country => AutoUpdateArrays.countryNames.push(country.country_name));
      }
    );

    this.sub = this.regionService.getAllRegions().subscribe(
      regions => {
        AutoUpdateArrays.regions.splice(0);
        AutoUpdateArrays.regionsNames.splice(0);
        AutoUpdateArrays.regions = regions.slice();
        AutoUpdateArrays.regions.map(reg => AutoUpdateArrays.regionsNames.push(reg.region_name));
      });

    this.sub = this.townService.getAllTowns().subscribe(
      towns => {
        AutoUpdateArrays.towns.splice(0);
        AutoUpdateArrays.townsNames.splice(0);
        AutoUpdateArrays.towns = towns.slice();
        AutoUpdateArrays.towns.map(town => AutoUpdateArrays.townsNames.push(town.town_name));
      }
    );

    this.sub = this.sportHallService.getAllSportHalls().subscribe(
      sportHalls => {
        AutoUpdateArrays.sportHalls.splice(0);
        AutoUpdateArrays.sportHallsNames.splice(0);
        AutoUpdateArrays.sportHalls = sportHalls.slice();
        AutoUpdateArrays.sportHalls.map(sportHall => AutoUpdateArrays.sportHallsNames.push(sportHall.sporthall_name));
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
