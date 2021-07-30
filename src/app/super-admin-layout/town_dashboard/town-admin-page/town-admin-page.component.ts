import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Town} from '../../../shared/interfases';
import {TownService} from '../../services/town.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-town-admin-page',
  templateUrl: './town-admin-page.component.html',
  styleUrls: ['./town-admin-page.component.css']
})

export class TownAdminPageComponent implements OnInit {

  static towns: Array<Town> = [];
  get towns(): Array<Town> {
    return TownAdminPageComponent.towns;
  }

  showButton = true;

  searchOption = true;
  searchValue = '';
  searchField = ['townName'];

  // @ts-ignore
  @ViewChild('nameInput') nameInputRef: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private townService: TownService
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
            return this.townService.getAllTowns();
          })
      )
      .subscribe(
        towns => {
          TownAdminPageComponent.towns = towns.slice();
        }
      );
  }

  setShowButton(condition: boolean): void {
    this.showButton = condition;
  }

  goToTownEditor(): void {
    this.showButton = false;
    this.router.navigateByUrl(`superadmin/places/towns/create`);
    this.searchValue = '';
  }

  changeSearchOption(): void {
    this.searchOption = !this.searchOption;
    this.nameInputRef.nativeElement.focus();
    this.searchField = this.searchOption ? ['townName'] : ['region', 'regionName'];
  }
}









