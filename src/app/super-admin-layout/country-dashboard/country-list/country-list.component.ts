import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {Country} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';
import {CountryService} from '../../services/country.service';
import {CountryAdminPageComponent} from '../country-admin-page/country-admin-page.component';
import {TableSortService} from '../../../shared/utils/table-sort.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  // @ts-ignore
  @Input() countries: Array<Country>;

  displayedColumns = ['_id', 'name', 'edit', 'delete'];
  paginatorStartPageNumber = 0;

  // @ts-ignore
  countryId: number;

  sortDirection = true;
  showDeleteConfirmation = false;
  options = 'країна';

  @Output() showButton: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private countryService: CountryService,
    private alert: AlertService,
    private sortService: TableSortService
  ) {
  }

  ngOnInit(): void { }

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
            CountryAdminPageComponent.countries = CountryAdminPageComponent.countries.filter(c => c.id !== this.countryId);
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

  sortTable(sortOption: any): void {
    this.sortDirection = this.sortService.sortTableByStringValues(sortOption, this.countries, this.sortDirection);
  }
}
