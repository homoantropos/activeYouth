import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-activities-admin',
  templateUrl: './coaches-admin-page.component.html',
  styleUrls: ['./coaches-admin-page.component.css']
})

export class CoachesAdminPageComponent implements OnInit, AfterViewInit, OnDestroy {

  private static showButton = false;

  static setShowButton(condition: boolean): void {
    CoachesAdminPageComponent.showButton = condition;
  }

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    CoachesAdminPageComponent.showButton = false;
  }

  goToCoachEditor(): void {
    CoachesAdminPageComponent.showButton = true;
    this.router.navigateByUrl(`superadmin/coaches/create`);
  }

  get showButton(): boolean {
    return CoachesAdminPageComponent.showButton;
  }

  ngOnDestroy(): void {
  }
}
