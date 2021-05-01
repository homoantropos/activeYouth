import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../admin-layout/auth/auth.service';

@Component({
  selector: 'app-fin-admin-layout',
  templateUrl: './fin-admin-layout.component.html',
  styleUrls: ['./fin-admin-layout.component.css']
})
export class FinAdminLayoutComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.auth.role() === 'superadmin') {
      const existToken = localStorage.getItem('auth-token');
      if (existToken !== null){
        this.auth.setToken(existToken);
      }
    } else {
      this.router.navigate(['main']);
      alert('Немає доступу до цього рівня сайту');
    }
  }

  goToMainPage(): void {
    this.router.navigate(['main']);
}

}
