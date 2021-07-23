import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';
import {map, startWith, switchMap} from 'rxjs/operators';
import {EducationEntity} from '../../../shared/interfases';
import {EducationEntityService} from '../../services/education-entity.service';
import {EducationEntityListComponent} from '../education-entity-list/education-entity-list.component';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';

@Component({
  selector: 'app-education-entity-editor',
  templateUrl: './education-entity-editor.component.html',
  styleUrls: ['./education-entity-editor.component.css']
})
export class EducationEntityEditorComponent implements OnInit, OnDestroy {

  // @ts-ignore
  educationEntityForm: FormGroup;
  showEducationEntityForm = false;
  submitted = false;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  // @ts-ignore
  educationEntityId: number;
  // @ts-ignore
  eduEntityType: string;

  // @ts-ignore
  eeSub: Subscription;

  // @ts-ignore
  createOrEditLabelName: string;
  private creatOrEditor = true;

  setCreatOrEditor(condition: boolean): void {
    this.creatOrEditor = condition;
  }

  get creatorOrEditor(): boolean {
    return this.creatOrEditor;
  }

  @ViewChild('eduEntityNameInput')
  set eduEntityName(eduEntityName: ElementRef<HTMLInputElement>) {
    if (eduEntityName) {
      setTimeout(() => {
        eduEntityName.nativeElement.focus();
      });
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private educationEntityService: EducationEntityService,
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
              this.educationEntityId = params.get('id');
              return this.educationEntityService.getOneEduEntityById(params.get('id'));
            }
          )
        )
        .subscribe(
          educationEntity => this.educationEntityForm = this.createEducationEntityForm(educationEntity),
          error => this.alert.danger(error.message)
        );
    } else {
      this.educationEntityForm = this.createEducationEntityForm(this.educationEntityService.initEducationEntity);
      this.createOrEditLabelName = 'Додати';
    }
  }

  createEducationEntityForm(educationEntity: EducationEntity): FormGroup {
    const eduEntityForm = new FormGroup({
      name: new FormControl(educationEntity.name, [Validators.required]),
      category: new FormControl(educationEntity.category),
      eduEntityType: new FormControl(educationEntity.type, [Validators.required]),
      regionName: new FormControl(educationEntity.region?.regionName, [Validators.required])
    });
    // @ts-ignore
    this.regionFilteredOptions = eduEntityForm.get('regionName').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterRegion(value))
      );
    // @ts-ignore
    this.eduEntityType = eduEntityForm.get('eduEntityType').valueChanges.subscribe(
      value => this.eduEntityType = value
    );
    return eduEntityForm;
  }

  private _filterRegion(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.regionsNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit(formValue: any): void {
    this.educationEntityForm.disable();
    this.submitted = true;
    const createdEducationEntity: EducationEntity = {
      name: formValue.name.trim(),
      category: formValue.category,
      type: formValue.eduEntityType.trim(),
      region: {
        regionName: formValue.regionName.trim(),
        regionGroup: 0
      }
    };
    let educationEntityServiceMethod;
    if (this.creatorOrEditor) {
      educationEntityServiceMethod = this.educationEntityService.createEduEntity(createdEducationEntity);
    } else {
      createdEducationEntity.id = this.educationEntityId;
      educationEntityServiceMethod = this.educationEntityService.updateEduEntity(createdEducationEntity);
    }
    this.eeSub = educationEntityServiceMethod
      .subscribe(
        dbEducationEntityAndMessage => {
          EducationEntityListComponent.educationEntities =
            EducationEntityListComponent.educationEntities
              .filter(ee => ee.id !== dbEducationEntityAndMessage.educationEntity.id);
          EducationEntityListComponent.educationEntities.unshift(dbEducationEntityAndMessage.educationEntity);
          this.alert.success(dbEducationEntityAndMessage.message);
          this.resetEducationEntityForm();
        }, error => {
          this.educationEntityService.errorHandle(error);
          this.educationEntityForm.enable();
          this.submitted = false;
        }
      );
    if (this.educationEntityService.error$) {
      this.educationEntityService.error$.subscribe(
        message =>
          this.alert.danger(message)
      );
    }
  }

  resetEducationEntityForm(): void {
    this.router.navigate(['superadmin', 'eduEntities'], {
      queryParams: {
        showButton: false
      }
    });
    this.educationEntityForm.reset();
    this.educationEntityForm.enable();
    this.submitted = false;
    this.showEducationEntityForm = false;
    this.createOrEditLabelName = 'Додати';
    this.setCreatOrEditor(true);
  }

  ngOnDestroy(): void {
    if (this.eeSub) {
      this.eeSub.unsubscribe();
    }
  }
}
