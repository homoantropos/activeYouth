import { Component, OnInit } from '@angular/core';
import {MockActivitiesDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';

@Component({
  selector: 'app-sports-page',
  templateUrl: './sports-page.component.html',
  styleUrls: ['./sports-page.component.css']
})
export class SportsPageComponent implements OnInit {
  displayedColumns: string[] = ['title', 'author', 'date'];
  dataSource = MockActivitiesDataBase.mockActivitiesDataBase.filter(a => a.kindOfActivity === 'sport');
  constructor() { }

  ngOnInit(): void {
  }

}
