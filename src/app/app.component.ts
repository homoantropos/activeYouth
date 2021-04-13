import {Component, OnInit} from '@angular/core';
import {MockDBAdministratorService} from './thoseWillBeDeletedAfterDBCreating/mock-db-admin.service';
import {AuthService} from './admin-layout/auth/auth.service';
import {SportKind} from './shared/interfases';
import {SportKindService} from './super-admin-layout/services/sport-kind.service';
import {AutoUpdateArrays} from './shared/utils/autoUpdateArrays';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'activeYouth';
  constructor(
    private auth: AuthService,
    private sportKindService: SportKindService,
    private admin: MockDBAdministratorService
  ) {
  }

  ngOnInit(): void {
    const existToken = localStorage.getItem('auth-token');
    if (existToken !== null){
      this.auth.setToken(existToken);
    }
    this.sportKindService.getAllSportKinds().subscribe(
      sportKinds => {
        sportKinds.map((sportKind: SportKind) => AutoUpdateArrays.sportKinds.push(sportKind.name));
      }
    );
    this.admin.createStatistics();
    this.admin.createBalance();
    this.admin.createResults();
  }
}
