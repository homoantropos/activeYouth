import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';
import {map, startWith, switchMap} from 'rxjs/operators';
import {Region} from '../../../shared/interfases';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {RegionService} from '../../services/region.service';
import {RegionsListComponent} from '../regions-list/regions-list.component';

@Component({
  selector: 'app-region-editor',
  templateUrl: './region-editor.component.html',
  styleUrls: ['./region-editor.component.css']
})

export class RegionEditorComponent implements OnInit, OnDestroy {

  // @ts-ignore
  regionForm: FormGroup;
  showRegionForm = false;
  submitted = false;
  // @ts-ignore
  countryFilteredOptions: Observable<string[]>;

  // @ts-ignore
  regionId: number;
  // @ts-ignore
  countryId: number;

  // @ts-ignore
  rSub: Subscription;

  // @ts-ignore
  createOrEditLabelName: string;
  private creatOrEditor = true;

  setCreatOrEditor(condition: boolean): void {
    this.creatOrEditor = condition;
  }

  get creatorOrEditor(): boolean {
    return this.creatOrEditor;
  }

  @ViewChild('regionNameInput')
  set regionName(regionNameInput: ElementRef<HTMLInputElement>) {
    if (regionNameInput) {
      setTimeout(() => {
        regionNameInput.nativeElement.focus();
      });
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private regionService: RegionService,
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
              this.regionId = params.get('id');
              return this.regionService.getOneRegionById(params.get('id'));
            }
          )
        )
        .subscribe(
          region => {
            // @ts-ignore
            this.countryId = region.country.id;
            this.regionForm = this.createRegionForm(region);
          },
          error => this.alert.danger(error.message)
        );
    } else {
      this.regionForm = this.createRegionForm(RegionService.initRegion);
      this.createOrEditLabelName = 'Додати';
    }
    if (this.regionForm) {
      try {
        // @ts-ignore
        this.countryFilteredOptions = this.regionForm.get('countryName').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterCountry(value))
          );
      } catch (e) {
      }
    }
  }

  createRegionForm(region: Region): FormGroup {
    return new FormGroup({
      regionName: new FormControl(region.regionName.trim(), [Validators.required]),
      regionGroup: new FormControl(region.regionGroup, [Validators.required]),
      countryName: new FormControl(region.country?.countryName.trim(), [Validators.required])
    });
  }

  private _filterCountry(value: string): string[] {
    try {
      const filterValue = value.toLowerCase();
      return AutoUpdateArrays.countryNames.filter(option => option.toLowerCase().includes(filterValue));
    } catch (e) {
      this.alert.danger(e.message);
      return e.message;
    }
  }

  onSubmit(formValue: any): void {
    this.regionForm.disable();
    this.submitted = true;
    const createdRegion: Region = {
      regionName: formValue.regionName.trim(),
      regionGroup: formValue.regionGroup,
      country: {
        countryName: this.regionForm.value.countryName.trim()
      }
    };
    let regionServiceMethod;
    if (this.creatorOrEditor) {
      regionServiceMethod = this.regionService.createRegion(createdRegion);
    } else {
      createdRegion.id = this.regionId;
      regionServiceMethod = this.regionService.updateRegion(createdRegion);
    }
    this.rSub = regionServiceMethod
      .subscribe(
        dbRegionAndMessage => {
          RegionsListComponent.regions = RegionsListComponent.regions.filter(r => r.id !== dbRegionAndMessage.region.id);
          RegionsListComponent.regions.unshift(dbRegionAndMessage.region);
          this.alert.success(dbRegionAndMessage.message);
          this.resetTownForm();
        }, error => {
          this.regionService.errorHandle(error);
          this.regionForm.enable();
          this.submitted = false;
        }
      );
    if (this.regionService.error$) {
      this.regionService.error$.subscribe(
        message =>
          this.alert.danger(message)
      );
    }
  }

  resetTownForm(): void {
    this.router.navigate(['superadmin', 'places', 'regions'], {
      queryParams: {
        showButton: false
      }
    });
    this.regionForm.enable();
    this.submitted = false;
    this.showRegionForm = false;
    this.createOrEditLabelName = 'Додати';
    this.setCreatOrEditor(true);
  }

  ngOnDestroy(): void {
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }
}
