import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../admin-layout/auth/auth.service';
import {AlertService} from '../shared/services/alert.service';

@Component({
  selector: 'app-fin-admin-layout',
  templateUrl: './fin-admin-layout.component.html',
  styleUrls: ['./fin-admin-layout.component.css']
})
export class FinAdminLayoutComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    if (this.auth.role() !== 'superadmin') {
      this.router.navigate(['main']);
      this.alert.danger('Немає доступу до цього рівня сайту');
    }
  }

  goToMainPage(): void {
    this.router.navigate(['main']);
  }

}
