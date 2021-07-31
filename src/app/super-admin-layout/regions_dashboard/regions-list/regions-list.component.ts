import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Region} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';
import {RegionService} from '../../services/region.service';
import {RegionsAdminPageComponent} from '../regions-admin-page/regions-admin-page.component';
import {TableSortService} from '../../../shared/utils/table-sort.service';

@Component({
  selector: 'app-regions-list',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.css']
})

export class RegionsListComponent implements OnInit {

  // @ts-ignore
  @Input() regions: Array<Region>;

  displayedColumns = ['_id', 'name', 'group', 'country', 'edit', 'delete'];
  paginatorStartPageNumber = 0;

  // @ts-ignore
  regionId: number;

  sortDirection = true;
  showDeleteConfirmation = false;
  options = 'регіон';
  @Output() showButton: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private regionService: RegionService,
    private alert: AlertService,
    private sortService: TableSortService
  ) {
  }

  ngOnInit(): any {
  }

  goToRegionEditor(id: number): void {
    this.showButton.emit(false);
    this.router.navigateByUrl(`superadmin/places/regions/edit/${id}`);
  }

  callDeletion(id: number): void {
    this.showDeleteConfirmation = true;
    this.regionId = id;
    this.router.navigateByUrl(`superadmin/places/regions`);
    this.showButton.emit(true);
  }

  onDelete(confirm: boolean): void {
    if (confirm) {
      this.regionService.removeRegion(this.regionId)
        .subscribe(
          response => {
            this.alert.success(response.message);
            this.showButton.emit(true);
            RegionsAdminPageComponent.regions = RegionsAdminPageComponent.regions.filter(r => r.id !== this.regionId);
          },
          error => {
            this.regionService.errorHandle(error);
          }
        );
      if (this.regionService.error$) {
        this.regionService.error$.subscribe(
          message => this.alert.danger(message)
        );
      }
    } else {
      this.alert.warning('Видалення скасовано.');
    }
    this.showDeleteConfirmation = false;
  }

  sortTable(sortOption: any): void {
    this.sortDirection = this.sortService.sortTableByStringValues(sortOption, this.regions, this.sortDirection);
  }

}
