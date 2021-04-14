import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../admin-layout/auth/auth.service';
import {Router} from '@angular/router';
import {Country} from '../../../shared/interfases';
import {CountryService} from '../../services/country.service';

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
  // @ts-ignore
  message: string;
  submitted = false;

  constructor(
    public auth: AuthService,
    public countryService: CountryService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.countryCreatorForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ])
    });
  }

  onSubmit(): void {
    if (this.countryCreatorForm.invalid) {
      return;
    }
    this.submitted = true;
    this.countryCreatorForm.disable();
    const country: Country = {
      name: this.countryCreatorForm.value.name
    };
    this.cSub = this.countryService.createCountry(country)
      .subscribe(
        (con) => {
          this.router.navigate(['/superadmin', 'places', 'countries']);
        },
        error => {
          this.countryService.errorHandle(error);
          this.countryCreatorForm.enable();
        }
      );
    this.submitted = false;
    this.countryCreatorForm.enable();
  }

  ngOnDestroy(): void {
    if (this.cSub) {
      this.cSub.unsubscribe();
    }
  }
}

