import {Component, OnInit} from '@angular/core';
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
      }
    );
  }

  setShowButton(condition: boolean): void {
    this.showButton = condition;
  }

  goToSportKindEditor(): void {
    this.showButton = false;
    this.router.navigateByUrl(`superadmin/sports/create`);
  }

}
