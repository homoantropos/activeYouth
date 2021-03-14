import { Component, OnInit } from '@angular/core';
import {MockActivitiesDataBase, MockSchedule} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.css']
})
export class ActivitiesPageComponent implements OnInit {
  displayedColumns: string[] = ['title', 'author', 'date'];
  dataSource = MockActivitiesDataBase.mockActivitiesDataBase.filter(a => a.kindOfActivity === 'physical culture');
  constructor() { }

  ngOnInit(): void {
  }

}
