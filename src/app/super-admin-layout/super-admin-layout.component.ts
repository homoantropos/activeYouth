import { Component, OnInit } from '@angular/core';
import {AuthService} from '../admin-layout/auth/auth.service';
import {Router} from '@angular/router';
import {AutoUpdateArraysCreateService} from '../shared/services/auto-update-arrays-create.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin-layout.component.html',
  styleUrls: ['./super-admin-layout.component.css']
})
export class SuperAdminLayoutComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router,
    private autoUpdateCreator: AutoUpdateArraysCreateService
  ) { }

  ngOnInit(): void {
    if (this.auth.role() === 'superadmin') {
      const existToken = localStorage.getItem('auth-token');
      if (existToken !== null){
        this.auth.setToken(existToken);
      }
      this.autoUpdateCreator.createAutoUpdateArrays();
    } else {
      this.router.navigate(['main']);
      alert('Немає доступу до цього рівня сайту');
    }
  }

  goToMainPage(): void {
    this.router.navigate(['main']);
  }

}
