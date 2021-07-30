import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Coach} from '../../../shared/interfases';
import {CoachService} from '../../services/coach.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-activities-admin',
  templateUrl: './coaches-admin-page.component.html',
  styleUrls: ['./coaches-admin-page.component.css']
})

export class CoachesAdminPageComponent implements OnInit {

  static coaches: Array<Coach> = [];
  get coaches(): Array<Coach> {
    return CoachesAdminPageComponent.coaches;
  }

  showButton = true;

  searchOption = true;
  searchValue = '';
  searchField = ['surname'];

  // @ts-ignore
  @ViewChild('nameInput') nameInputRef: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coachService: CoachService
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
            return this.coachService.getAllCoaches();
          }
        )
      )
      .subscribe(
        coaches => CoachesAdminPageComponent.coaches = coaches.slice()
    );
  }

  setShowButton(condition: boolean): void {
    this.showButton = condition;
  }

  goToCoachEditor(): void {
    this.showButton = false;
    this.router.navigateByUrl(`superadmin/coaches/create`);
    this.searchValue = '';
  }

}
