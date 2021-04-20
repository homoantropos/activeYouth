import {Injectable, OnDestroy} from '@angular/core';
import {SportKindService} from '../../super-admin-layout/services/sport-kind.service';
import {CountryService} from '../../super-admin-layout/services/country.service';
import {RegionService} from '../../super-admin-layout/services/region.service';
import {Country, Region, SportHall, SportKind, Town} from '../interfases';
import {AutoUpdateArrays} from '../utils/autoUpdateArrays';
import {Subscription} from 'rxjs';
import {TownService} from '../../super-admin-layout/services/town.service';
import {SportHallService} from '../../super-admin-layout/services/sport-hall.service';

@Injectable({
  providedIn: 'root'
})
export class AutoApdateArraysCreateService implements OnDestroy {

  sub: Subscription = new Subscription();

  constructor(
    private sportKindService: SportKindService,
    private countryService: CountryService,
    private regionService: RegionService,
    private townService: TownService,
    private sportHallService: SportHallService
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
    this.sub = this.townService.getAllTowns().subscribe(
      towns => {
        towns.map((town: Town) => AutoUpdateArrays.towns.push(town.town_name));
      }
    );
    this.sub = this.sportHallService.getAllSportHalls().subscribe(

      sportHalls => {
        console.log(sportHalls);
        AutoUpdateArrays.sportHalls = sportHalls.slice();
        sportHalls.map((sportHall: SportHall) => AutoUpdateArrays.sportHall.push(sportHall.sporthall_name));
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
