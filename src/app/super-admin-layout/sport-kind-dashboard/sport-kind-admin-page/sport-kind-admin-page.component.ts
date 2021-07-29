import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SportKind} from '../../../shared/interfases';
import {switchMap} from 'rxjs/operators';
import {SportKindService} from '../../services/sport-kind.service';

@Component({
  selector: 'app-sport-kind-admin-page',
  templateUrl: './sport-kind-admin-page.component.html',
  styleUrls: ['./sport-kind-admin-page.component.css']
})

export class SportKindAdminPageComponent implements OnInit {

  static sportKinds: Array<SportKind> = [];
  get sportKinds(): Array<SportKind> {
    return SportKindAdminPageComponent.sportKinds;
  }

  showButton = true;
  searchOption = true;
  searchValue = '';
  searchField = 'sportKind';

  // @ts-ignore
  @ViewChild('nameInput') nameInputRef: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sportKindService: SportKindService
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
            return this.sportKindService.getAllSportKinds();
          }
        )
      )
      .subscribe(
        sportKinds => {
          SportKindAdminPageComponent.sportKinds = sportKinds.slice();
          SportKindAdminPageComponent.sportKinds.map(
            (sportKind: SportKind) => {
              let programUkrainian = '';
              switch (sportKind.program) {
                case('I'):
                  programUkrainian = 'олімпійські';
                  break;
                case('II'):
                  programUkrainian = 'неолімпійські';
                  break;
                case('III'):
                  programUkrainian = 'пара(деф)лімпійські';
                  break;
                case('IV'):
                  programUkrainian = 'інші';
                  break;
              }
              sportKind.programUkrainian = programUkrainian;
            });
        }
      );
  }

  setShowButton(condition: boolean): void {
    this.showButton = condition;
  }

  goToSportKindEditor(): void {
    this.showButton = false;
    this.router.navigateByUrl(`superadmin/sports/create`);
    this.searchValue = '';
  }

  changeSearchOption(): void {
    this.searchOption = !this.searchOption;
    this.nameInputRef.nativeElement.focus();
    this.searchField = this.searchOption ? 'sportKind' : 'programUkrainian';
  }
}
