import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Observable} from 'rxjs';

import {Activity} from '../../shared/interfases';
import {ActivityService} from '../../shared/services/activity.service';

@Component({
  selector: 'app-sports-dashboard',
  templateUrl: './sports-dashboard.component.html',
  styleUrls: ['./sports-dashboard.component.css']
})

export class SportsDashboardComponent implements OnInit {

  displayedColumns: string[] = ['title', 'author', 'date', 'edit', 'delete'];
  paginatorStartPageNumber = 1;

  // @ts-ignore
  sports$: Observable<Array<Activity>>;
  // @ts-ignore
  dataSource: MatTableDataSource<Activity>;

  constructor(
    private router: Router,
    private activityService: ActivityService
  ) {
  }

  ngOnInit(): void {
    this.sports$ = this.activityService.getAllActivities('sport');
  }

  goToActivityCreator(): void {
    this.router.navigate(['admin', 'sports', 'create']);
  }

  goToSportsEditor(id: number): void {
    this.router.navigateByUrl(`/admin/sports/edit/${id}`);
  }

  goToActivitiesDetails(id: string): void {
    this.router.navigateByUrl(`/admin/sports/${id}`);
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
