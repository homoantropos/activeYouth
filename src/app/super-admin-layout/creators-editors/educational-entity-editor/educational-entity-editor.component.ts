import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EducationalEntityService} from '../../services/educational-entity.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EducationEntity} from '../../../shared/interfases';
import {Observable} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-educational-entity-editor',
  templateUrl: './educational-entity-editor.component.html',
  styleUrls: ['./educational-entity-editor.component.css']
})
export class EducationalEntityEditorComponent implements OnInit {

  // @ts-ignore
  eduEntityEditorForm: FormGroup;
  // @ts-ignore
  eduEntityId: number;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  // @ts-ignore
  eduEntityType: string;
  submitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public eduEntityService: EducationalEntityService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(
        (params: Params) => {
          this.eduEntityId = params.get('id');
          return this.eduEntityService.getOneEduEntityById(params.get('id'));
        }
      )
    ).subscribe(
      eduEntity => {
        this.eduEntityEditorForm = new FormGroup({
          name: new FormControl(eduEntity.name, [Validators.required]),
          category: new FormControl(eduEntity.category),
          eduEntityType: new FormControl(eduEntity.type, [Validators.required]),
          // @ts-ignore
          regionName: new FormControl(eduEntity.region.regionName, [Validators.required])
        });
        // @ts-ignore
        this.regionFilteredOptions = this.eduEntityEditorForm.get('regionName').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterRegion(value))
          );
        // @ts-ignore
        this.eduEntityType = this.eduEntityEditorForm.get('eduEntityType').valueChanges.subscribe(
          (value: string) => this.eduEntityType = value
        );
      },
      error => this.eduEntityService.errorHandle(error)
    );
    if (this.eduEntityService.error$) {
      this.eduEntityService.error$.subscribe(
        message => this.alert.danger(message)
      );
    }
  }

  private _filterRegion(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.regionsNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  onUpdate(eduEntity: EducationEntity): void {
    this.submitted = true;
    this.eduEntityEditorForm.disable();
    eduEntity.id = this.eduEntityId;
    this.eduEntityService.updateEduEntity(eduEntity).subscribe(
      res => {
        this.alert.success(res.message);
        this.router.navigate(['superadmin', 'eduEntities']);
      }, (err) => {
        this.eduEntityService.errorHandle(err);
        this.submitted = false;
        this.eduEntityEditorForm.enable();
    }
    );
    if (this.eduEntityService.error$) {
      this.eduEntityService.error$.subscribe(
        message => this.alert.danger(message)
      );
    }
  }

}
