import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SportKind} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';
import {SportKindService} from '../../services/sport-kind.service';
import {TableSortService} from '../../../shared/utils/table-sort.service';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-sport-kind-list',
  templateUrl: './sport-kind-list.component.html',
  styleUrls: ['./sport-kind-list.component.css']
})
export class SportKindListComponent implements OnInit {

  // @ts-ignore
  static sportKinds: Array<SportKind>;

  get sportKindsList(): Array<SportKind> {
    return SportKindListComponent.sportKinds;
  }

  displayedColumns = ['id', 'sportKind', 'program', 'registrationNumber', 'edit', 'delete'];
  paginatorStartPageNumber = 0;

  // @ts-ignore
  sportKindId: number;

  sortDirection = true;
  showDeleteConfirmation = false;
  // @ts-ignore
  searchOption: string;
  options = 'вид спорту';
  @Output() showButton: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private sportKindService: SportKindService,
    private alert: AlertService,
    private sortService: TableSortService
  ) {
  }

  ngOnInit(): any {
    this.sportKindService.getAllSportKinds().subscribe(
      sportKinds => {
        SportKindListComponent.sportKinds = sportKinds.slice();
      }
    );
  }

  goToSportKindEditor(id: number): void {
    this.showButton.emit(false);
    this.router.navigateByUrl(`superadmin/sports/edit/${id}`);
  }

  callDeletion(id: number): void {
    this.showDeleteConfirmation = true;
    this.sportKindId = id;
    this.router.navigateByUrl(`superadmin/sports`);
    this.showButton.emit(true);
  }

  onDelete(confirm: boolean): void {
    if (confirm) {
      this.sportKindService.removeSportKind(this.sportKindId)
        .subscribe(
          response => {
            this.alert.success(response.message);
            this.showButton.emit(true);
            SportKindListComponent.sportKinds = SportKindListComponent.sportKinds.filter(sk => sk.id !== this.sportKindId);
          },
          error => {
            this.sportKindService.errorHandle(error);
          }
        );
      if (this.sportKindService.error$) {
        this.sportKindService.error$.subscribe(
          message => this.alert.danger(message)
        );
      }
    } else {
      this.alert.warning('Видалення скасовано.');
    }
    this.showDeleteConfirmation = false;
  }

  sortTable(sortOption: any): void {
    this.sortDirection = this.sortService.sortTableByStringValues(sortOption, SportKindListComponent.sportKinds, this.sortDirection);
  }

  filter(value: string): void {
    const nameInput = fromEvent(document, 'keydown');
    SportKindListComponent.sportKinds = SportKindListComponent.sportKinds.filter(
      sk => sk.sportKind.toLowerCase().includes(this.searchOption.toLowerCase())
    );
  }
}
