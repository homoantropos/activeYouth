import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Town} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {TownService} from '../../services/town.service';
import {AlertService} from '../../../shared/services/alert.service';
import {TableSortService} from '../../../shared/utils/table-sort.service';

@Component({
  selector: 'app-town-list',
  templateUrl: './town-list.component.html',
  styleUrls: ['./town-list.component.css']
})
export class TownListComponent implements OnInit {

  // @ts-ignore
  static towns: Array<Town>;
  sortDirection = true;

  get townsList(): Array<Town> {
    return TownListComponent.towns;
  }

  displayedColumns = ['_id', 'name', 'country', 'region', 'edit', 'delete'];
  paginatorStartPageNumber = 0;

  // @ts-ignore
  townId: number;

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

  ngOnInit(): any {
    this.townService.getAllTowns().subscribe(
      towns => {
        TownListComponent.towns = towns.slice();
      }
    );
  }

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
            TownListComponent.towns = TownListComponent.towns.filter(t => t.id !== this.townId);
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

  sort(sortOption: any): void {
    this.sortDirection = this.sortService.sortTableByStringValues(sortOption, TownListComponent.towns, this.sortDirection);
  }


  sortTable(sortOption: Array<string>): void {
    if (this.sortDirection) {
      TownListComponent.towns.sort(
        (a, b) =>
          // @ts-ignore
          b[sortOption[0]][sortOption[1]].toLowerCase().localeCompare(a[sortOption[0]][sortOption[1]].toLowerCase()));
    } else {
      TownListComponent.towns.sort(
        (a, b) =>
          // @ts-ignore
          a[sortOption[0]][sortOption[1]].toLowerCase().localeCompare(b[sortOption[0]][sortOption[1]].toLowerCase()));
    }
    this.sortDirection = !this.sortDirection;
  }

}




