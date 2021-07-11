import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Coach} from '../../shared/interfases';
import {CoachService} from '../services/coach.service';
import {Router} from '@angular/router';
import {AlertService} from '../../shared/services/alert.service';

@Component({
  selector: 'app-coaches-list',
  templateUrl: './coaches-list.component.html',
  styleUrls: ['./coaches-list.component.css']
})

export class CoachesListComponent implements OnInit {
  // @ts-ignore
  @Input() coachesList: Array<Coach>;
  @Output() coachEventEmitter: EventEmitter<Coach> = new EventEmitter<Coach>();
  @Output() resetFormEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  paginatorStartPageNumber = 0;
  displayedColumns: Array<string> = ['id', 'coachFullName', 'edit', 'delete'];
  showDeleteConfirmation = false;
  // @ts-ignore
  coachId: number;
  option = 'тренера';

  constructor(
    private coachService: CoachService,
    private router: Router,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
  }

  editCoach(coach: Coach): void {
    this.coachEventEmitter.emit(coach);
    this.router.navigateByUrl(`superadmin/coaches`);
  }

  deleteCoach(id: number): void {
    this.showDeleteConfirmation = true;
    this.coachId = id;
  }

  confirmDeletion(confirm: boolean): void {
    if (confirm) {
      this.coachService.deleteCoach(this.coachId)
        .subscribe(
          response => {
            this.alert.success(response.message);
            this.resetFormEventEmitter.emit(true);
            this.coachesList = response.coaches;
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

}
