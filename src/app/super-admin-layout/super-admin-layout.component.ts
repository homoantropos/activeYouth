import { Component, OnInit } from '@angular/core';
import {AuthService} from '../admin-layout/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin-layout.component.html',
  styleUrls: ['./super-admin-layout.component.css']
})
export class SuperAdminLayoutComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const existToken = localStorage.getItem('auth-token');
    if (existToken !== null){
      this.auth.setToken(existToken);
    }
  }

  goToMainPage(): void {
    this.router.navigate(['main']);
  }

}
