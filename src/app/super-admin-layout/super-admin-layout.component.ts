import { Component, OnInit } from '@angular/core';
import {AuthSuperService} from './authSuper/authSuper.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin-layout.component.html',
  styleUrls: ['./super-admin-layout.component.css']
})
export class SuperAdminLayoutComponent implements OnInit {

  constructor(
    public auth: AuthSuperService
  ) { }

  ngOnInit(): void {
    const existToken = localStorage.getItem('auth-token');
    if (existToken !== null){
      this.auth.setToken(existToken);
    }
  }

}
