import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EducationEntity} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';
import {EducationEntityService} from '../../services/education-entity.service';

@Component({
  selector: 'app-education-entity-list',
  templateUrl: './education-entity-list.component.html',
  styleUrls: ['./education-entity-list.component.css']
})
export class EducationEntityListComponent implements OnInit {

  // @ts-ignore
  static educationEntities: Array<EducationEntity>;
  eduEntityType = 'ЗЗСО';

  get educationEntitiesList(): Array<EducationEntity> {
    return EducationEntityListComponent.educationEntities;
  }

  displayedColumns: Array<string> = ['id', 'name', 'country', 'region', 'category', 'edit', 'delete'];
  paginatorStartPageNumber = 0;

  // @ts-ignore
  educationEntityId: number;

  showDeleteConfirmation = false;
  option = 'заклад освіти';
  @Output() showButton: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private educationEntityService: EducationEntityService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.educationEntityService.getEduEntities(this.eduEntityType).subscribe(
      educationEntities => {
        EducationEntityListComponent.educationEntities = educationEntities.eduEntities.slice();
      }
    );
  }

  goToEducationEntityEditor(id: number): void {
    this.showButton.emit(false);
    this.router.navigateByUrl(`superadmin/eduEntities/edit/${id}`);
  }

  callDeletion(id: number): void {
    this.showDeleteConfirmation = true;
    this.educationEntityId = id;
    this.router.navigateByUrl(`superadmin/eduEntities`);
    this.showButton.emit(true);
  }

  onDelete(confirm: boolean): void {
    if (confirm) {
      this.educationEntityService.deleteEduEntity(this.educationEntityId)
        .subscribe(
          response => {
            this.alert.success(response.message);
            EducationEntityListComponent.educationEntities =
              EducationEntityListComponent.educationEntities
                .filter(eduEnt => eduEnt.id !== this.educationEntityId);
          },
          error => {
            this.educationEntityService.errorHandle(error);
          }
        );
      if (this.educationEntityService.error$) {
        this.educationEntityService.error$.subscribe(
          message => this.alert.danger(message)
        );
      }
    } else {
      this.alert.warning('Видалення скасованою');
    }
    this.showDeleteConfirmation = false;
  }

  changeEduEntityType(eduEntityType: string): void {
    this.eduEntityType = eduEntityType;
    this.ngOnInit();
  }
}
