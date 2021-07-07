import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Country, User} from '../../../shared/interfases';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {CountryService} from '../../services/country.service';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-countries-admin-page',
  templateUrl: './countries-admin-page.component.html',
  styleUrls: ['./countries-admin-page.component.css']
})

export class CountriesAdminPageComponent implements OnInit {
  // @ts-ignore
  dataSource: MatTableDataSource<User>;
  // @ts-ignore
  countries$: Observable<Array<Country>>;
  displayedColumns = ['_id', 'name', 'delete'];
  paginatorStartPageNumber = 0;

  constructor(
    private router: Router,
    private countryService: CountryService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.countries$ = this.countryService.getAllCountries();
  }

  onDelete(id: number): void {
    this.countryService.removeCountry(id).subscribe(
      res => {
        this.alert.success(res.message);
        this.ngOnInit();
      }
    );
  }

  goToCountryCreator(): void {
    this.router.navigate(['/superadmin', 'places', 'countries', 'create']);
  }

  goToCountryEditor(country: Country): void {
    const id = Number(country.id);
    this.router.navigate(['superadmin', 'places', 'countries', 'edit', `${id}`]);
  }
}

