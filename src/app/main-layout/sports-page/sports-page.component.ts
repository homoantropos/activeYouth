import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Activity} from '../../shared/interfases';
import {ActivityService} from '../../shared/services/activity.service';


@Component({
  selector: 'app-sports-page',
  templateUrl: './sports-page.component.html',
  styleUrls: ['./sports-page.component.css']
})

export class SportsPageComponent implements OnInit {

  displayedColumns: string[] = ['title', 'author', 'date'];
  paginatorStartPageNumber = 1;
  // @ts-ignore
  sports$: Observable<Array<Activity>>;
  // @ts-ignore
  dataSource: MatTableDataSource<Activity>;

  constructor(
    private activityService: ActivityService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.sports$ = this.activityService.getAllActivities('sport');
    this.activityService.getAllActivities('sport').subscribe(
      res => console.log(res)
    );
  }

  goToActivityDetails(a: Activity): void {
    this.router.navigateByUrl(`/sports/${a._id}`);
  }
}
