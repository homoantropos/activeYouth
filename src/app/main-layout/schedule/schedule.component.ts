import { Component } from '@angular/core';
import {MockSchedule} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent {
  displayedColumns: string[] = ['title'];
  dataSource = MockSchedule.schedule;
  constructor( ) {
  }

}
