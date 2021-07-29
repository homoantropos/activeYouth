import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Country} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';
import {CountryService} from '../../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  // @ts-ignore
  static countries: Array<Country>;

  get countriesList(): Array<Country> {
    return CountryListComponent.countries;
  }

  displayedColumns = ['_id', 'name', 'edit', 'delete'];
  paginatorStartPageNumber = 0;

  // @ts-ignore
  countryId: number;

  showDeleteConfirmation = false;
  options = 'країна';
  @Output() showButton: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private countryService: CountryService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): any {
    this.countryService.getAllCountries().subscribe(
      countries => {
        CountryListComponent.countries = countries.slice();
      }
    );
  }

  goToCountryEditor(id: number): void {
    this.showButton.emit(false);
    this.router.navigateByUrl(`superadmin/places/countries/edit/${id}`);
  }

  callDeletion(id: number): void {
    this.showDeleteConfirmation = true;
    this.countryId = id;
    this.router.navigateByUrl(`superadmin/places/countries`);
    this.showButton.emit(true);
  }

  onDelete(confirm: boolean): void {
    if (confirm) {
      this.countryService.removeCountry(this.countryId)
        .subscribe(
          response => {
            this.alert.success(response.message);
            this.showButton.emit(true);
            CountryListComponent.countries = CountryListComponent.countries.filter(c => c.id !== this.countryId);
          },
          error => {
            this.countryService.errorHandle(error);
          }
        );
      if (this.countryService.error$) {
        this.countryService.error$.subscribe(
          message => this.alert.danger(message)
        );
      }
    } else {
      this.alert.warning('Видалення скасовано.');
    }
    this.showDeleteConfirmation = false;
  }
}
