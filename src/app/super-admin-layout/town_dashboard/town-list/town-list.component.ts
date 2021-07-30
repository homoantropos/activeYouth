import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {Town} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {TownService} from '../../services/town.service';
import {AlertService} from '../../../shared/services/alert.service';
import {TableSortService} from '../../../shared/utils/table-sort.service';
import {TownAdminPageComponent} from '../town-admin-page/town-admin-page.component';

@Component({
  selector: 'app-town-list',
  templateUrl: './town-list.component.html',
  styleUrls: ['./town-list.component.css']
})

export class TownListComponent implements OnInit {

  // @ts-ignore
  @Input() towns: Array<Town>;

  displayedColumns = ['_id', 'name', 'country', 'region', 'edit', 'delete'];
  paginatorStartPageNumber = 0;

  // @ts-ignore
  townId: number;

  sortDirection = true;
  showDeleteConfirmation = false;
  options = 'місто';

  @Output() showButton: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private townService: TownService,
    private alert: AlertService,
    private sortService: TableSortService
  ) {
  }

  ngOnInit(): void {  }

  goToTownEditor(id: number): void {
    this.showButton.emit(false);
    this.router.navigateByUrl(`superadmin/places/towns/edit/${id}`);
  }

  callDeletion(id: number): void {
    this.showDeleteConfirmation = true;
    this.townId = id;
    this.router.navigateByUrl(`superadmin/places/towns`);
    this.showButton.emit(true);
  }

  onDelete(confirm: boolean): void {
    if (confirm) {
      this.townService.deleteTown(this.townId)
        .subscribe(
          response => {
            this.alert.success(response.message);
            this.showButton.emit(true);
            TownAdminPageComponent.towns = TownAdminPageComponent.towns.filter(t => t.id !== this.townId);
          },
          error => {
            this.townService.errorHandle(error);
          }
        );
      if (this.townService.error$) {
        this.townService.error$.subscribe(
          message => this.alert.danger(message)
        );
      }
    } else {
      this.alert.warning('Видалення скасовано.');
    }
    this.showDeleteConfirmation = false;
  }

  sortTable(sortOption: any): void {
    this.sortDirection = this.sortService.sortTableByStringValues(sortOption, this.towns, this.sortDirection);
  }
}




