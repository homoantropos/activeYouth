import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Region} from '../../../shared/interfases';
import {switchMap} from 'rxjs/operators';
import {RegionService} from '../../services/region.service';

@Component({
  selector: 'app-regions-admin-page',
  templateUrl: './regions-admin-page.component.html',
  styleUrls: ['./regions-admin-page.component.css']
})

export class RegionsAdminPageComponent implements OnInit {

  static regions: Array<Region> = [];
  get regions(): Array<Region> {
    return RegionsAdminPageComponent.regions;
  }

  showButton = true;

  searchOption = true;
  searchValue = '';
  searchField = ['regionName'];

  // @ts-ignore
  @ViewChild('nameInput') nameInputRef: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private regionService: RegionService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        switchMap(
          (params: Params) => {
            if (params.showButton) {
              this.showButton = params.showButton;
            }
            return this.regionService.getAllRegions();
          }
        )
      )
      .subscribe(
        regions => RegionsAdminPageComponent.regions = regions.slice()
      );
  }

  setShowButton(condition: boolean): void {
    this.showButton = condition;
  }

  goToRegionEditor(): void {
    this.showButton = false;
    this.router.navigateByUrl(`superadmin/places/regions/create`);
    this.searchValue = '';
  }

  changeSearchOption(): void {
    this.searchOption = !this.searchOption;
    this.nameInputRef.nativeElement.focus();
    this.searchField = this.searchOption ? ['regionName'] : ['country', 'countryName'];
  }
}
