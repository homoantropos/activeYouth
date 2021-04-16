import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Country, Region, User} from '../../../shared/interfases';
import {Observable, of} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {RegionService} from '../../services/region.service';

@Component({
  selector: 'app-regions-admin-page',
  templateUrl: './regions-admin-page.component.html',
  styleUrls: ['./regions-admin-page.component.css']
})

export class RegionsAdminPageComponent implements OnInit {
// @ts-ignore
  dataSource: MatTableDataSource<User>;
  // @ts-ignore
  region$: Observable<Array<Region>>;
  displayedColumns = ['_id', 'name', 'group', 'delete'];
  paginatorStartPageNumber = 0;
  // @ts-ignore
  hideButton: boolean;
  // @ts-ignore
  countryFilteredOptions: Observable<number>;

  constructor(
    private router: Router,
    private regionService: RegionService,
    private route: ActivatedRoute
  ) {
    this.countryFilteredOptions = of(this.route.children.length);
  }

  ngOnInit(): any {
    this.region$ = this.regionService.getAllRegions();
    this.hideButton = true;
  }

  onDelete(id: number): void {
    this.regionService.removeRegion(id).subscribe(
      res => {
        alert(res.message);
        this.ngOnInit();
      }
    );
  }

  goToRegionCreator(): void {
    this.router.navigate(['/superadmin', 'places', 'regions', 'create']);
    this.hideButton = !this.hideButton;
  }

  goToRegionEditor(id: number): void {
    this.router.navigateByUrl(`/superadmin/places/regions/edit/${id}`);
  }
}

