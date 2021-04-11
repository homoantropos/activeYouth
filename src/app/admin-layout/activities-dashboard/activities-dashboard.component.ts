import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Observable} from 'rxjs';

import {Activity} from '../../shared/interfases';
import {ActivityService} from '../../shared/services/activity.service';

@Component({
  selector: 'app-activities-dashboard',
  templateUrl: './activities-dashboard.component.html',
  styleUrls: ['./activities-dashboard.component.css']
})
export class ActivitiesDashboardComponent implements OnInit {

  displayedColumns: string[] = ['title', 'author', 'date', 'edit', 'delete'];
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

  goToActivityCreator(): void {
    this.router.navigateByUrl(`/admin/activities/create`);
  }

  goToActivitiesDetails(id: string): void {
    this.router.navigateByUrl(`/admin/activities/${id}`);
  }

  goToActivitiesEditor(id: string): void {
    this.router.navigateByUrl(`/admin/activities/edit/${id}`);
  }

  removeActivityFromDB(id: string): void {
    this.activityService.deleteActivity(id)
      .subscribe(
        (message) => {
          console.log(message);
          this.ngOnInit();
        }
      );
  }
}
