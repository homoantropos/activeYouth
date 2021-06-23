import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../admin-layout/auth/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})

export class MainLayoutComponent {

  constructor(
    private router: Router,
    public auth: AuthService
  ) {  }

  changeLoginOrLogout(): void {
    if (this.auth.isAuthenticated()) {
      this.auth.logOut();
    } else {
      this.router.navigate(['login']);
    }
  }
}
