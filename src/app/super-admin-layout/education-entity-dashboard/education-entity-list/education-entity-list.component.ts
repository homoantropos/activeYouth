import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EducationEntity} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';
import {EducationEntityService} from '../../services/education-entity.service';
import {TableSortService} from '../../../shared/utils/table-sort.service';
import {EducationEntityAdminPageComponent} from '../education-entity-admin-page/education-entity-admin-page.component';

@Component({
  selector: 'app-education-entity-list',
  templateUrl: './education-entity-list.component.html',
  styleUrls: ['./education-entity-list.component.css']
})
export class EducationEntityListComponent implements OnInit {

  // @ts-ignore
  @Input() educationEntities: Array<EducationEntity>;

  displayedColumns: Array<string> = ['id', 'name', 'country', 'region', 'category', 'edit', 'delete'];
  paginatorStartPageNumber = 0;

  // @ts-ignore
  educationEntityId: number;

  sortDirection = true;
  showDeleteConfirmation = false;
  option = 'заклад освіти';
  @Output() showButton: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private educationEntityService: EducationEntityService,
    private alert: AlertService,
    private sortService: TableSortService
  ) {
  }

  ngOnInit(): void { }

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
            EducationEntityAdminPageComponent.educationEntities =
              EducationEntityAdminPageComponent.educationEntities
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

  sortTable(sortOption: any): void {
    this.sortDirection =
      this.sortService.sortTableByStringValues(sortOption, this.educationEntities, this.sortDirection);
  }
}
