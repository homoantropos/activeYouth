import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EducationEntity} from '../../../shared/interfases';
import {EducationalEntityService} from '../../services/educational-entity.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {Router} from '@angular/router';

@Component({
  selector: 'app-educational-entity-creator',
  templateUrl: './educational-entity-creator.component.html',
  styleUrls: ['./educational-entity-creator.component.css']
})
export class EducationalEntityCreatorComponent implements OnInit {

  // @ts-ignore
  eduEntityCreatorFrom: FormGroup;
  // @ts-ignore
  message: string;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  // @ts-ignore
  eduEntityType: string;
  submitted = false;

  constructor(
    public eduEntityService: EducationalEntityService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.eduEntityCreatorFrom = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl(null),
      eduEntityType: new FormControl('', [Validators.required]),
      region_name: new FormControl('', [Validators.required])
    });
    // @ts-ignore
    this.regionFilteredOptions = this.eduEntityCreatorFrom.get('region_name').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterRegion(value))
      );
    // @ts-ignore
    this.eduEntityType = this.eduEntityCreatorFrom.get('eduEntityType').valueChanges.subscribe(
      value => this.eduEntityType = value
    );
  }

  private _filterRegion(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.regionsNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  onCreate(eduEntity: EducationEntity): void {
    this.eduEntityCreatorFrom.disable()
    this.eduEntityService.createEduEntity(eduEntity).subscribe(
      eDenT => {
        this.router.navigate(['superadmin', 'eduEntities']);
      },
      error => {
        this.eduEntityService.errorHandle(error);
        this.eduEntityCreatorFrom.enable();
      }
    );
  }

}
