import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EducationalEntityService} from '../../services/educational-entity.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EducationEntity} from '../../../shared/interfases';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';

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
  message: string;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  // @ts-ignore
  eduEntityType: string;
  submitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public eduEntityService: EducationalEntityService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => this.eduEntityId = params.id
    );
    this.eduEntityService.getOneEduEntityById(this.eduEntityId).subscribe(
      eduEntity => {
        console.log(eduEntity);
        this.eduEntityEditorForm = new FormGroup({
          name: new FormControl(eduEntity.name, [Validators.required]),
          category: new FormControl(eduEntity.category),
          eduEntityType: new FormControl(eduEntity.type, [Validators.required]),
          // @ts-ignore
          region_name: new FormControl(eduEntity.region.region_name, [Validators.required])
        });
        // @ts-ignore
        this.regionFilteredOptions = this.eduEntityEditorForm.get('region_name').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterRegion(value))
          );
        // @ts-ignore
        this.eduEntityType = this.eduEntityEditorForm.get('eduEntityType').valueChanges.subscribe(
          (value: string) => this.eduEntityType = value
        );
      }
    );
  }

  private _filterRegion(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.regionsNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  onUpdate(eduEntity: EducationEntity): void {
    this.submitted = true;
    eduEntity.id = this.eduEntityId;
    this.eduEntityService.updateEduEntity(eduEntity).subscribe(
      res => {
        alert(res.message);
        this.router.navigate(['superadmin', 'eduEntities']);
      }, (err) => {
        this.eduEntityService.errorHandle(err);
        this.submitted = false;
    }
    );
  }

}
