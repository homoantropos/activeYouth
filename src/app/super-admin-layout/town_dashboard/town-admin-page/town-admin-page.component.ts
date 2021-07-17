import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-town-admin-page',
  templateUrl: './town-admin-page.component.html',
  styleUrls: ['./town-admin-page.component.css']
})

export class TownAdminPageComponent implements OnInit {

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

  goToTownEditor(): void {
    this.showButton = false;
    this.router.navigateByUrl(`superadmin/places/towns/create`);
  }
}









