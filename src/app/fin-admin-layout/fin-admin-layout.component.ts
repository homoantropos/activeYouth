import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth/auth.service';

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
  }
  goToMainPage(): void {
    this.router.navigate(['main']);
}

}
