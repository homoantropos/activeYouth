import { Component, OnInit } from '@angular/core';
import {EducationEntityService} from '../services/education-entity.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AlertService} from '../../shared/services/alert.service';

@Component({
  selector: 'app-educational-entity-admin-page',
  templateUrl: './educational-entity-admin-page.component.html',
  styleUrls: ['./educational-entity-admin-page.component.css']
})
export class EducationalEntityAdminPageComponent implements OnInit {

  // @ts-ignore
  educationalEntities$: Observable<Array<EducationEntity>>;
  eduEntityType = 'ЗВО';
  displayedColumns = ['name', 'country', 'region', 'category', 'edit', 'delete'];
  paginatorStartPageNumber = 0;

  constructor(
    private eduEntityService: EducationEntityService,
    private router: Router,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.educationalEntities$ = this.eduEntityService.getEduEntities(this.eduEntityType);
  }

  changeEduEntityType(eduEntityType: string): void {
    this.eduEntityType = eduEntityType;
    this.ngOnInit();
  }

  goToCreator(): void {
    this.router.navigate(['superadmin', 'eduEntities', 'create']);
  }

  goToEditor(id: number): void {
    this.router.navigateByUrl(`/superadmin/eduEntities/edit/${id}`);
  }

  deleteEduEntity(id: number): void {
    this.eduEntityService.deleteEduEntity(id).subscribe(
      res => {
        this.alert.success(res.message);
        this.ngOnInit();
      }
    );
  }
}
