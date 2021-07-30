import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EducationEntity} from '../../../shared/interfases';
import {switchMap} from 'rxjs/operators';
import {EducationEntityService} from '../../services/education-entity.service';

@Component({
  selector: 'app-education-entity-admin-page',
  templateUrl: './education-entity-admin-page.component.html',
  styleUrls: ['./education-entity-admin-page.component.css']
})

export class EducationEntityAdminPageComponent implements OnInit {

  static educationEntities: Array<EducationEntity> = [];
  get educationEntities(): Array<EducationEntity> {
    return EducationEntityAdminPageComponent.educationEntities;
  }
  eduEntityType = 'ЗЗСО';

  showButton = true;

  searchOption = true;
  searchValue = '';
  searchField = ['name'];

  // @ts-ignore
  @ViewChild('nameInput') nameInputRef: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private educationalEntityService: EducationEntityService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        switchMap(
          (params: Params) => {
            if (params.showButton) {
              this.showButton = params.showButton;
            }
            return this.educationalEntityService.getEduEntities(this.eduEntityType);
          }
        )
      )
      .subscribe(
      educationEntities => {
        EducationEntityAdminPageComponent.educationEntities = educationEntities.eduEntities.slice();
      }
    );
  }

  setShowButton(condition: boolean): void {
    this.showButton = condition;
  }

  goToEducationEntityEditor(): void {
    this.showButton = false;
    this.router.navigateByUrl(`superadmin/eduEntities/create`);
    this.searchValue = '';
  }

  changeEduEntityType(eduEntityType: string): void {
    this.eduEntityType = eduEntityType;
    this.ngOnInit();
  }

  changeSearchOption(): void {
    this.searchOption = !this.searchOption;
    this.nameInputRef.nativeElement.focus();
    this.searchField = this.searchOption ? ['name'] : ['region', 'regionName'];
  }
}
