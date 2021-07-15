import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Coach} from '../../../shared/interfases';
import {CoachService} from '../../services/coach.service';
import {AlertService} from '../../../shared/services/alert.service';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {Router} from '@angular/router';
import {CoachesAdminPageComponent} from '../coaches-admin-page/coaches-admin-page.component';

@Component({
  selector: 'app-coaches-list',
  templateUrl: './coaches-list.component.html',
  styleUrls: ['./coaches-list.component.css']
})

export class CoachesListComponent implements OnInit {
  // @ts-ignore
  static coachesList: Array<Coach>;
  @Output() coachEventEmitter: EventEmitter<Coach> = new EventEmitter<Coach>();
  @Output() resetFormEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  paginatorStartPageNumber = 0;
  displayedColumns: Array<string> = ['id', 'coachFullName', 'edit', 'delete'];
  showDeleteConfirmation = false;
  // @ts-ignore
  coachId: number;
  option = 'тренера';

  constructor(
    private router: Router,
    private coachService: CoachService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.coachService.getAllCoaches().subscribe(
      coaches => CoachesListComponent.coachesList = coaches
    );
  }

  editCoach(coach: Coach): void {
    this.coachEventEmitter.emit(coach);
  }

  callDeletion(id: number): void {
    this.showDeleteConfirmation = true;
    this.coachId = id;
  }

  onDelete(confirm: boolean): void {
    if (confirm) {
      this.coachService.deleteCoach(this.coachId)
        .subscribe(
          response => {
            this.alert.success(response.message);
            this.resetFormEventEmitter.emit(true);
            CoachesListComponent.coachesList = response.coaches;
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

  goToCoachEditor(id: number): void {
    this.router.navigateByUrl(`superadmin/coaches/edit/${id}`);
    return CoachesAdminPageComponent.setShowButton(true);
  }

  get coachesList(): Array<Coach> {
    return CoachesListComponent.coachesList;
  }
}
