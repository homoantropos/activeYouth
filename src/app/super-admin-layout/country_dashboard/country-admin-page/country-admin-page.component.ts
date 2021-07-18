import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-country-admin-page',
  templateUrl: './country-admin-page.component.html',
  styleUrls: ['./country-admin-page.component.css']
})

export class CountryAdminPageComponent implements OnInit {

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

  goToCountryEditor(): void {
    this.showButton = false;
    this.router.navigateByUrl(`superadmin/places/countries/create`);
  }

}
