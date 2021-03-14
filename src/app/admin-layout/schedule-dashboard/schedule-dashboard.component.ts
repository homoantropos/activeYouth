import { Component, OnInit } from '@angular/core';
import {MockSchedule} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {Router} from '@angular/router';

@Component({
  selector: 'app-schedule-dashboard',
  templateUrl: './schedule-dashboard.component.html',
  styleUrls: ['./schedule-dashboard.component.css']
})
export class ScheduleDashboardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  displayedColumns: string[] = ['title'];
  dataSource = MockSchedule.schedule;
  ngOnInit(): void {
  }
  goToAppointmentCreator(): void {
    this.router.navigate(['admin', 'create']);
  }

}
