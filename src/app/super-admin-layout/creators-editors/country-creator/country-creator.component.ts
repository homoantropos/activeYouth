import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../admin-layout/auth/auth.service';
import {Router} from '@angular/router';
import {Country} from '../../../shared/interfases';
import {CountryService} from '../../services/country.service';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-countries-creator',
  templateUrl: './country-creator.component.html',
  styleUrls: ['./country-creator.component.css']
})
export class CountryCreatorComponent implements OnInit, OnDestroy {
  // @ts-ignore
  countryCreatorForm: FormGroup;
  // @ts-ignore
  cSub: Subscription;
  submitted = false;

  constructor(
    public auth: AuthService,
    public countryService: CountryService,
    private router: Router,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.countryCreatorForm = new FormGroup({
      country_name: new FormControl(null, [
        Validators.required
      ])
    });
  }

  onSubmit(country: Country): void {
    country.country_name = country.country_name.toUpperCase();
    if (this.countryCreatorForm.invalid) {
      return;
    }
    this.submitted = true;
    this.countryCreatorForm.disable();
    this.cSub = this.countryService.createCountry(country)
      .subscribe(
        (con: Country) => {
          this.alert.success(`Країна ${con.country_name} успішно додана до бази даних`);
          this.router.navigateByUrl('/superadmin/places/countries');
        },
        error => {
          this.countryService.errorHandle(error);
          this.submitted = false;
          this.countryCreatorForm.enable();
        }
      );
    if (this.countryService.error$) {
        this.countryService.error$.subscribe(
          message => {
            this.alert.danger(message);
          }
        );
    }
  }

  ngOnDestroy(): void {
    if (this.cSub) {
      this.cSub.unsubscribe();
    }
  }
}

