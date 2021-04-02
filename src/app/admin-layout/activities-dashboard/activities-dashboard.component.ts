import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MockDataBase } from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Activity} from '../../shared/interfases';
import {MatPaginator} from '@angular/material/paginator';
import {ActivityService} from '../../shared/services/activity.service';

@Component({
  selector: 'app-activities-dashboard',
  templateUrl: './activities-dashboard.component.html',
  styleUrls: ['./activities-dashboard.component.css']
})
export class ActivitiesDashboardComponent implements AfterViewInit {

  displayedColumns: string[] = ['title', 'author', 'date', 'edit', 'delete'];
  dataSource: MatTableDataSource<Activity> =
    new MatTableDataSource<Activity>(
      MockDataBase.mockActivitiesDataBase.filter(a => a.kindOfActivity === 'physical culture')
    );

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private activityServise: ActivityService
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  goToActivityCreator(): void {
    this.router.navigateByUrl(`/admin/activities/create`);
  }

  goToActivitiesDetails(a: Activity): void {
    this.router.navigateByUrl(`/admin/activities/${a._id}`);
  }

  removeActivityFromDB(activity: Activity): void {
    MockDataBase.mockActivitiesDataBase.filter(
        a => a._id !== activity._id
      );
  }
}
