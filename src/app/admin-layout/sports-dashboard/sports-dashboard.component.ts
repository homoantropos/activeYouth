import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Activity} from '../../shared/interfases';
import {Observable, Subscription} from 'rxjs';
import {ActivityService} from '../../shared/services/activity.service';

@Component({
  selector: 'app-sports-dashboard',
  templateUrl: './sports-dashboard.component.html',
  styleUrls: ['./sports-dashboard.component.css']
})

export class SportsDashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  // @ts-ignore
  sports$: Observable<Array<Activity>>;
  // @ts-ignore
  sSub: Subscription;
  // @ts-ignore
  dataSource: MatTableDataSource<Activity>;

  displayedColumns: string[] = ['title', 'author', 'date', 'edit', 'delete'];

  constructor(
    private router: Router,
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {
    this.sports$ = this.activityService.getAllActivity('sport');
  }

  ngAfterViewInit(): void {}

  goToActivityCreator(): void {
    this.router.navigate(['admin', 'sports', 'create']);
  }

  goToActivitiesDetails(a: Activity): void {
    this.router.navigateByUrl(`/admin/sports/${a._id}`);
  }

  ngOnDestroy(): void {
    if (this.sSub) {
      this.sSub.unsubscribe();
    }
  }
}
