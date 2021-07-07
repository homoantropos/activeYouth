import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Country} from '../../../shared/interfases';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CountryService} from '../../services/country.service';
import {switchMap} from 'rxjs/operators';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-country-editor',
  templateUrl: './country-editor.component.html',
  styleUrls: ['./country-editor.component.css']
})
export class CountryEditorComponent implements OnInit, OnDestroy {
// @ts-ignore
  countryEditorForm: FormGroup;
  countryId = 0;
  // @ts-ignore
  cSub: Subscription;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public countryService: CountryService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: Params) => {
        this.countryId = params.get('id');
        return this.countryService.getOneCountryById(params.get('id'));
      })
    ).subscribe(
      country => {
        this.countryEditorForm = new FormGroup({
          country_name: new FormControl(country.country_name, [
            Validators.required
          ])
        });
      }
    );

  }

  onSubmit(): void {
    if (this.countryEditorForm.invalid) {
      return;
    }
    this.submitted = true;
    this.countryEditorForm.disable();
    const country: Country = {
      country_name: this.countryEditorForm.value.country_name,
      id: this.countryId
    };
    this.cSub = this.countryService.updateCountry(country)
      .subscribe(
        (res) => {
          this.alert.success(res.message);
          this.router.navigate(['superadmin', 'appointmentPlaces']);
        },
        error => {
          this.countryService.errorHandle(error);
          this.submitted = false;
          this.countryEditorForm.enable();
        }
      );
    if (this.countryService.error$) {
      this.countryService.error$.subscribe(
        message => this.alert.danger(message)
      );
    }
  }

  ngOnDestroy(): void {
    if (this.cSub) {
      this.cSub.unsubscribe();
    }
  }
}


