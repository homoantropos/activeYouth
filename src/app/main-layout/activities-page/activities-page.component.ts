import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Activity} from '../../shared/interfases';
import {ActivityService} from '../../shared/services/activity.service';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.css']
})

export class ActivitiesPageComponent implements OnInit {

  displayedColumns: string[] = ['title', 'author', 'date'];
  paginatorStartPageNumber = 1;
  // @ts-ignore
  activities$: Observable<Array<Activity>>;
  // @ts-ignore
  dataSource: MatTableDataSource<Activity>;

  constructor(
    private router: Router,
    private activityService: ActivityService
  ) {
  }

  ngOnInit(): void {
    this.activities$ = this.activityService.getAllActivities('physical culture');
  }

  goToActivityDetails(a: Activity): void {
    this.router.navigateByUrl(`/activities/${a._id}`);
  }

}
