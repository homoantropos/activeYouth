import {Component, OnDestroy, OnInit} from '@angular/core';

import {MockDBAdministratorService} from './thoseWillBeDeletedAfterDBCreating/mock-db-admin.service';
import {AuthService} from './admin-layout/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'activeYouth';

  constructor(
    private auth: AuthService,
    private admin: MockDBAdministratorService
  ) {
  }

  ngOnInit(): void {
    const existToken = localStorage.getItem('auth-token');
    if (existToken !== null){
      this.auth.setToken(existToken);
    }
    this.admin.createStatistics();
    this.admin.createBalance();
    this.admin.createResults();
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }

}
