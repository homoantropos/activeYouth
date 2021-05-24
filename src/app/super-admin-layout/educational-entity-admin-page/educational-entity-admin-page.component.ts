import { Component, OnInit } from '@angular/core';
import {EducationalEntityService} from '../services/educational-entity.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-educational-entity-admin-page',
  templateUrl: './educational-entity-admin-page.component.html',
  styleUrls: ['./educational-entity-admin-page.component.css']
})
export class EducationalEntityAdminPageComponent implements OnInit {

  // @ts-ignore
  educationalEntities$: Observable<Array<EducationalEntity>>;
  eduEntityType = 'ЗВО';
  displayedColumns = ['name', 'country', 'region', 'category', 'edit', 'delete'];
  paginatorStartPageNumber = 0;

  constructor(
    private eduEntityService: EducationalEntityService,
    private router: Router
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
        alert(res.message);
        this.ngOnInit();
      }
    );
  }
}
