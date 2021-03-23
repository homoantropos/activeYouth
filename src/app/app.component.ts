import {Component, OnInit} from '@angular/core';
import {MockDBAdministratorService} from './thoseWillBeDeletedAfterDBCreating/mock-db-admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'activeYouth';
  constructor(
    private admin: MockDBAdministratorService
  ) {
  }

  ngOnInit(): void {
    this.admin.createStatistics();
    this.admin.createBalance();
    this.admin.createResults();
  }
}
