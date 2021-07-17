import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Coach} from '../../../shared/interfases';
import {CoachService} from '../../services/coach.service';
import {AlertService} from '../../../shared/services/alert.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-coaches-list',
  templateUrl: './coaches-list.component.html',
  styleUrls: ['./coaches-list.component.css']
})

export class CoachesListComponent implements OnInit {

  // @ts-ignore
  static coaches: Array<Coach>;
  paginatorStartPageNumber = 0;
  displayedColumns: Array<string> = ['id', 'coachFullName', 'edit', 'delete'];
  showDeleteConfirmation = false;
  // @ts-ignore
  coachId: number;
  option = 'тренера';
  // @ts-ignore
  dataSource: MatTableDataSource<Coach>;
  @Output() showButton: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private coachService: CoachService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.coachService.getAllCoaches().subscribe(
      coaches => CoachesListComponent.coaches = coaches.slice()
    );
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
            CoachesListComponent.coaches = response.coaches;
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
    this.showButton.emit(false);
    this.router.navigateByUrl(`superadmin/coaches/edit/${id}`);
  }

  get coachesList(): Array<Coach> {
    return CoachesListComponent.coaches;
  }
}
