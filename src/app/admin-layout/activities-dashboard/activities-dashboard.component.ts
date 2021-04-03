import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Activity} from '../../shared/interfases';
import {MatPaginator} from '@angular/material/paginator';
import {ActivityService} from '../../shared/services/activity.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-activities-dashboard',
  templateUrl: './activities-dashboard.component.html',
  styleUrls: ['./activities-dashboard.component.css']
})
export class ActivitiesDashboardComponent implements OnInit, AfterViewInit {

  // @ts-ignore
  activities$: Observable<Array<Activity>>;

  displayedColumns: string[] = ['title', 'author', 'date', 'edit', 'delete'];
  dataSource: MatTableDataSource<Activity> =
    new MatTableDataSource<Activity>(
      MockDataBase.mockActivitiesDataBase.filter(a => a.kindOfActivity === 'physical culture')
    );

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private activityService: ActivityService
  ) {
  }

  ngOnInit(): void {
    this.activities$ = this.activityService.getAllActivity();
  }

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
