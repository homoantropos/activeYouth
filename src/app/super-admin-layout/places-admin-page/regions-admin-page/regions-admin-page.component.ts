import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Country, User} from '../../../shared/interfases';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {CountryService} from '../../services/country.service';
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
  region$: Observable<Array<Country>>;
  displayedColumns = ['_id', 'name', 'group', 'delete'];
  paginatorStartPageNumber = 0;

  constructor(
    private router: Router,
    private regionService: RegionService
  ) {
  }

  ngOnInit(): void {
    this.region$ = this.regionService.getAllRegions();
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
  }

  goToRegionEditor(id: number): void {
    this.router.navigateByUrl(`/superadmin/places/regions/edit/${id}`);
  }
}

