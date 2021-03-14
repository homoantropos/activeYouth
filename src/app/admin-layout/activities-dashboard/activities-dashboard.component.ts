import { Component, OnInit } from '@angular/core';
import {MockActivitiesDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {Router} from '@angular/router';

@Component({
  selector: 'app-activities-dashboard',
  templateUrl: './activities-dashboard.component.html',
  styleUrls: ['./activities-dashboard.component.css']
})
export class ActivitiesDashboardComponent implements OnInit {
  displayedColumns: string[] = ['title', 'author', 'date'];
  dataSource = MockActivitiesDataBase.mockActivitiesDataBase.filter(a => a.kindOfActivity === 'physical culture');
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToActivityCreator(): void {
    this.router.navigate(['admin', 'activities', 'create']);
  }
}
