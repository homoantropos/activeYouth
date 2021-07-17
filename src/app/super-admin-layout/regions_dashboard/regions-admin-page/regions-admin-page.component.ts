import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-regions-admin-page',
  templateUrl: './regions-admin-page.component.html',
  styleUrls: ['./regions-admin-page.component.css']
})
export class RegionsAdminPageComponent implements OnInit {

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

  goToRegionEditor(): void {
    this.showButton = false;
    this.router.navigateByUrl(`superadmin/places/regions/create`);
  }

}
