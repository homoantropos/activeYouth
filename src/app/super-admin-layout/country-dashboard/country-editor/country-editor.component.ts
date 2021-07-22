import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';
import {switchMap} from 'rxjs/operators';
import {Country} from '../../../shared/interfases';
import {CountryService} from '../../services/country.service';
import {CountryListComponent} from '../country-list/country-list.component';

@Component({
  selector: 'app-country-editor',
  templateUrl: './country-editor.component.html',
  styleUrls: ['./country-editor.component.css']
})

export class CountryEditorComponent implements OnInit, OnDestroy {

  // @ts-ignore
  countryForm: FormGroup;
  showCountryForm = false;
  submitted = false;

  // @ts-ignore
  countryId: number;

  // @ts-ignore
  cSub: Subscription;

  // @ts-ignore
  createOrEditLabelName: string;
  private creatOrEditor = true;

  setCreatOrEditor(condition: boolean): void {
    this.creatOrEditor = condition;
  }

  get creatorOrEditor(): boolean {
    return this.creatOrEditor;
  }

  @ViewChild('countryNameInput')
  set countryName(countryNameInput: ElementRef<HTMLInputElement>) {
    if (countryNameInput) {
      setTimeout(() => {
        countryNameInput.nativeElement.focus();
      });
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    if (this.route.toString().includes('edit')) {
      this.setCreatOrEditor(false);
      this.createOrEditLabelName = 'Змінити';
      this.route.paramMap
        .pipe(
          switchMap(
            (params: Params) => {
              this.countryId = params.get('id');
              return this.countryService.getOneCountryById(params.get('id'));
            }
          )
        )
        .subscribe(
          country => {
            // @ts-ignore
            this.countryId = country.id;
            this.countryForm = this.createCountryForm(country);
          },
          error => this.alert.danger(error.message)
        );
    } else {
      this.countryForm = this.createCountryForm(CountryService.initCountry);
      this.createOrEditLabelName = 'Додати';
    }
  }

  createCountryForm(country: Country): FormGroup {
    return new FormGroup({
      countryName: new FormControl(country.countryName.trim(), [Validators.required])
    });
  }

  onSubmit(formValue: any): void {
    this.countryForm.disable();
    this.submitted = true;
    const createdCountry: Country = {
      countryName: formValue.countryName.trim()
    };
    let countryServiceMethod;
    if (this.creatorOrEditor) {
      countryServiceMethod = this.countryService.createCountry(createdCountry);
    } else {
      createdCountry.id = this.countryId;
      countryServiceMethod = this.countryService.updateCountry(createdCountry);
    }
    this.cSub = countryServiceMethod
      .subscribe(
        dbCountryAndMessage => {
          CountryListComponent.countries = CountryListComponent.countries.filter(c => c.id !== dbCountryAndMessage.country.id);
          CountryListComponent.countries.unshift(dbCountryAndMessage.country);
          this.alert.success(dbCountryAndMessage.message);
          this.resetCountryForm();
        }, error => {
          this.countryService.errorHandle(error);
          this.countryForm.enable();
          this.submitted = false;
        }
      );
    if (this.countryService.error$) {
      this.countryService.error$.subscribe(
        message =>
          this.alert.danger(message)
      );
    }
  }

  resetCountryForm(): void {
    this.router.navigate(['superadmin', 'places', 'countries'], {
      queryParams: {
        showButton: false
      }
    });
    this.countryForm.enable();
    this.submitted = false;
    this.showCountryForm = false;
    this.createOrEditLabelName = 'Додати';
    this.setCreatOrEditor(true);
  }

  ngOnDestroy(): void {
    if (this.cSub) {
      this.cSub.unsubscribe();
    }
  }
}
