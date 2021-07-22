import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-education-entity-admin-page',
  templateUrl: './education-entity-admin-page.component.html',
  styleUrls: ['./education-entity-admin-page.component.css']
})
export class EducationEntityAdminPageComponent implements OnInit {

  showButton = true;
  eduEntityType = 'ЗЗСО';

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

  goToEducationEntityEditor(): void {
    this.showButton = false;
    this.router.navigateByUrl(`superadmin/eduEntities/create`);
  }

  changeEduEntityType(eduEntityType: string): void {
    this.eduEntityType = eduEntityType;
    this.router.navigateByUrl(`superadmin/eduEntities`);
  }
}
