import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TownService} from '../../services/town.service';
import {AlertService} from '../../../shared/services/alert.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Town} from '../../../shared/interfases';
import {map, startWith, switchMap} from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {Observable, Subscription} from 'rxjs';
import {TownListComponent} from '../town-list/town-list.component';

@Component({
  selector: 'app-town-editor',
  templateUrl: './town-editor.component.html',
  styleUrls: ['./town-editor.component.css']
})

export class TownEditorComponent implements OnInit, OnDestroy {

  // @ts-ignore
  townForm: FormGroup;
  // @ts-ignore
  countryFilteredOptions: Observable<string[]>;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  // @ts-ignore
  townId: number;
  showTownForm = false;
  submitted = false;
  // @ts-ignore
  coachId: number;

  // @ts-ignore
  tSub: Subscription;

  // @ts-ignore
  createOrEditLabelName: string;
  private creatOrEditor = true;

  setCreatOrEditor(condition: boolean): void {
    this.creatOrEditor = condition;
  }

  get creatorOrEditor(): boolean {
    return this.creatOrEditor;
  }

  @ViewChild('townNameInput')
  set townName(townNameInput: ElementRef<HTMLInputElement>) {
    if (townNameInput) {
      setTimeout(() => {
        townNameInput.nativeElement.focus();
      });
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private townService: TownService,
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
              this.townId = params.get('id');
              return this.townService.getOneTownById(params.get('id'));
            }
          )
        )
        .subscribe(
          town => this.townForm = this.createTownForm(town),
          error => this.alert.danger(error.message)
        );
    } else {
      this.townForm = this.createTownForm(TownService.initTown);
      this.createOrEditLabelName = 'Додати';
    }
    if (this.townForm) {
      try {
        // @ts-ignore
        this.countryFilteredOptions = this.townForm.get('country_name').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterCountry(value))
          );
      } catch (e) {
      }
      try {
        // @ts-ignore
        this.regionFilteredOptions = this.townForm.get('region_name').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterRegion(value))
          );
      } catch (e) {
      }
    }
  }

  createTownForm(town: Town): FormGroup {
    return new FormGroup({
      townName: new FormControl(town.townName.trim(), [Validators.required]),
      country_name: new FormControl(town.region?.country?.country_name.trim(), [Validators.required]),
      region_name: new FormControl(town.region?.region_name.trim(), [Validators.required])
    });
  }

  private _filterCountry(value: string): string[] {
    try {
      const filterValue = value.toLowerCase();
      return AutoUpdateArrays.countryNames.filter(option => option.toLowerCase().includes(filterValue));
    } catch (e) {
      return e.message;
    }
  }

  private _filterRegion(value: string): string[] {
    try {
      const filterValue = value.toLowerCase();
      return AutoUpdateArrays.regionsNames.filter(option => option.toLowerCase().includes(filterValue));
    } catch (e) {
      return e.message;
    }
  }

  onSubmit(formValue: any): void {
    this.townForm.disable();
    this.submitted = true;
    const createdTown: Town = {
      townName: formValue.townName.trim(),
      region: {
        region_name: this.townForm.value.region_name.trim()
      }
    };
    let townServiceMethod;
    if (this.creatorOrEditor) {
      townServiceMethod = this.townService.createTown(createdTown);
    } else {
      createdTown.id = this.townId;
      townServiceMethod = this.townService.updateTown(createdTown);
    }
    this.tSub = townServiceMethod
      .subscribe(
        dbTownAndMessage => {
          console.log(dbTownAndMessage.town);
          TownListComponent.towns = TownListComponent.towns.filter(t => t.id !== dbTownAndMessage.town.id);
          TownListComponent.towns.unshift(dbTownAndMessage.town);
          this.alert.success(dbTownAndMessage.message);
          this.resetTownForm();
        }, error => {
          this.townService.errorHandle(error);
          this.townForm.enable();
          this.submitted = false;
        }
      );
    if (this.townService.error$) {
      this.townService.error$.subscribe(
        message =>
          this.alert.danger(message)
      );
    }
  }

  resetTownForm(): void {
    this.router.navigate(['superadmin', 'places', 'towns'], {
      queryParams: {
        showButton: false
      }
    });
    this.townForm.reset();
    this.townForm.enable();
    this.submitted = false;
    this.showTownForm = false;
    this.createOrEditLabelName = 'Додати';
    this.setCreatOrEditor(true);
  }

  ngOnDestroy(): void {
    if (this.tSub) {
      this.tSub.unsubscribe();
    }
  }
}
