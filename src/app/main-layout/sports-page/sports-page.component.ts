import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {MatTableDataSource} from '@angular/material/table';
import {Activity} from '../../shared/interfases';
import {MatPaginator} from '@angular/material/paginator';
import {ActivityService} from '../../shared/services/activity.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sports-page',
  templateUrl: './sports-page.component.html',
  styleUrls: ['./sports-page.component.css']
})
export class SportsPageComponent implements OnInit, AfterViewInit {

  // @ts-ignore
  sports: Array<Activity>;
  // @ts-ignore
  dataSource: MatTableDataSource<Activity>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['title', 'author', 'date'];

  constructor(
    private activityServise: ActivityService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activityServise.getAllActivity('sport')
      .subscribe(s => this.sports = s);
    this.dataSource = new MatTableDataSource<Activity>(this.sports);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  goToActivityDetails(a: Activity): void {
    this.router.navigateByUrl(`/activities/${a.id}`);
  }
}
