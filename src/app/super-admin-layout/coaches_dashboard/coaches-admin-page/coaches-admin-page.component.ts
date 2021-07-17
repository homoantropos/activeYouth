import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-activities-admin',
  templateUrl: './coaches-admin-page.component.html',
  styleUrls: ['./coaches-admin-page.component.css']
})

export class CoachesAdminPageComponent implements OnInit, OnDestroy {

  showButton = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (params.showButton) {
          this.showButton = params.showButton;
        }
      }
    );
  }

  setShowButton(condition: boolean): void {
    this.showButton = condition;
  }

  goToCoachEditor(): void {
    this.showButton = false;
    this.router.navigateByUrl(`superadmin/coaches/create`);
  }

  ngOnDestroy(): void {
  }
}
