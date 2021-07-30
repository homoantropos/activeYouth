import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Coach} from '../../../shared/interfases';
import {CoachService} from '../../services/coach.service';
import {AlertService} from '../../../shared/services/alert.service';
import {Router} from '@angular/router';
import {CoachesAdminPageComponent} from '../coaches-admin-page/coaches-admin-page.component';
import {TableSortService} from '../../../shared/utils/table-sort.service';

@Component({
  selector: 'app-coaches-list',
  templateUrl: './coaches-list.component.html',
  styleUrls: ['./coaches-list.component.css']
})

export class CoachesListComponent implements OnInit {

  // @ts-ignore
  @Input() coaches: Array<Coach>;

  displayedColumns: Array<string> = ['id', 'coachFullName', 'edit', 'delete'];
  paginatorStartPageNumber = 0;

  // @ts-ignore
  coachId: number;

  sortDirection = true;
  showDeleteConfirmation = false;
  option = 'тренера';

  @Output() showButton: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private coachService: CoachService,
    private alert: AlertService,
    private sortService: TableSortService
  ) {
  }

  ngOnInit(): void { }

  goToCoachEditor(id: number): void {
    this.showButton.emit(false);
    this.router.navigateByUrl(`superadmin/coaches/edit/${id}`);
  }

  callDeletion(id: number): void {
    this.showDeleteConfirmation = true;
    this.coachId = id;
    this.router.navigateByUrl(`superadmin/coaches`);
    this.showButton.emit(true);
  }

  onDelete(confirm: boolean): void {
    if (confirm) {
      this.coachService.deleteCoach(this.coachId)
        .subscribe(
          response => {
            this.alert.success(response.message);
            CoachesAdminPageComponent.coaches = CoachesAdminPageComponent.coaches.filter(c => c.id !== this.coachId);
          },
          error => {
            this.coachService.errorHandle(error);
          }
        );
      if (this.coachService.error$) {
        this.coachService.error$.subscribe(
          message => this.alert.danger(message)
        );
      }
    } else {
      this.alert.warning('Видалення скасованою');
    }
    this.showDeleteConfirmation = false;
  }


  sortTable(sortOption: any): void {
    this.sortDirection = this.sortService.sortTableByStringValues(sortOption, this.coaches, this.sortDirection);
  }

}
