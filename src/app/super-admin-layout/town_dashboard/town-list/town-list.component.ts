import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Town} from '../../../shared/interfases';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {TownService} from '../../services/town.service';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-town-list',
  templateUrl: './town-list.component.html',
  styleUrls: ['./town-list.component.css']
})
export class TownListComponent implements OnInit {

  @Output() townEventEmitter: EventEmitter<Town> = new EventEmitter<Town>();
  @Input() towns: Array<Town> = [];
  @Output() townIdEventEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() resetFormEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  // @ts-ignore
  dataSource: MatTableDataSource<Town> = new MatTableDataSource<Town>(this.towns);
  displayedColumns = ['_id', 'name', 'country', 'region', 'edit', 'delete'];
  paginatorStartPageNumber = 0;
  // @ts-ignore

  townId: number;
  showEditor = false;
  showDeleteConfirmation = false;
  options = 'місто';

  constructor(
    private router: Router,
    private townService: TownService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): any {
    this.townService.getAllTowns().subscribe(
      towns => this.towns = towns
    );
  }

  editTown(town: Town): void {
    this.townEventEmitter.emit(town);
  }

  callDeletion(id: number): void {
    this.showDeleteConfirmation = true;
    this.townId = id;
  }

  onDelete(confirm: boolean): void {
    if (confirm) {
      this.townService.deleteTown(this.townId)
        .subscribe(
          response => {
            this.alert.success(response.message);
            this.resetFormEventEmitter.emit(true);
            this.towns = response.towns;
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

}




