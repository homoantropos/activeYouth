import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Region} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';
import {RegionService} from '../../services/region.service';

@Component({
  selector: 'app-regions-list',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.css']
})
export class RegionsListComponent implements OnInit {

  // @ts-ignore
  static regions: Array<Region>;

  get regionsList(): Array<Region> {
    return RegionsListComponent.regions;
  }

  displayedColumns = ['_id', 'name', 'group', 'country', 'edit', 'delete'];
  paginatorStartPageNumber = 0;

  // @ts-ignore
  regionId: number;

  showDeleteConfirmation = false;
  options = 'регіон';
  @Output() showButton: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private regionService: RegionService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): any {
    this.regionService.getAllRegions().subscribe(
      regions => {
        RegionsListComponent.regions = regions.slice();
      }
    );
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
            RegionsListComponent.regions = RegionsListComponent.regions.filter(r => r.id !== this.regionId);
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

}
