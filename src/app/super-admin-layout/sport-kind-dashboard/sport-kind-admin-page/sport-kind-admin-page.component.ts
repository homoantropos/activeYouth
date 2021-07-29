import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-sport-kind-admin-page',
  templateUrl: './sport-kind-admin-page.component.html',
  styleUrls: ['./sport-kind-admin-page.component.css']
})
export class SportKindAdminPageComponent implements OnInit {

  showButton = true;
  @Output() searchOption: EventEmitter<string> = new EventEmitter<string>();

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

  goToSportKindEditor(): void {
    this.showButton = false;
    this.router.navigateByUrl(`superadmin/sports/create`);
  }

}
