import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Country} from '../../../shared/interfases';
import {CountryService} from '../../services/country.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-country-admin-page',
  templateUrl: './country-admin-page.component.html',
  styleUrls: ['./country-admin-page.component.css']
})

export class CountryAdminPageComponent implements OnInit {

  static countries: Array<Country> = [];
  get countries(): Array<Country> {
    return CountryAdminPageComponent.countries;
  }

  showButton = true;

  searchValue = '';
  searchField = ['countryName'];

  // @ts-ignore
  @ViewChild('nameInput') nameInputRef: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        switchMap(
          (params: Params) => {
            if (params.showButton) {
              this.showButton = params.showButton;
            }
            return this.countryService.getAllCountries();
          }
        )
      )
      .subscribe(
      countries => CountryAdminPageComponent.countries = countries.slice()
    );
  }

  setShowButton(condition: boolean): void {
    this.showButton = condition;
  }

  goToCountryEditor(): void {
    this.showButton = false;
    this.router.navigateByUrl(`superadmin/places/countries/create`);
    this.searchValue = '';
  }

}
