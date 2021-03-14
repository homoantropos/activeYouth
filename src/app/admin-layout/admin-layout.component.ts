import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
