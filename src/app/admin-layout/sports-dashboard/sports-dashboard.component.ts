import { Component, OnInit } from '@angular/core';
import {MockActivitiesDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sports-dashboard',
  templateUrl: './sports-dashboard.component.html',
  styleUrls: ['./sports-dashboard.component.css']
})
export class SportsDashboardComponent implements OnInit {
  displayedColumns: string[] = ['title', 'author', 'date'];
  dataSource = MockActivitiesDataBase.mockActivitiesDataBase.filter(a => a.kindOfActivity === 'sport');
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  goToActivityCreator(): void {
    this.router.navigate(['admin', 'sports', 'create']);
  }
}
