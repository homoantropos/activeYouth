import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../super-admin-layout/services/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  // ці методи лише для ознайомленя з структурою сайту, вони будуть видалені
  goToAdminPage(): void {
    this.router.navigate(['admin']);
  }

  goToFinAdminPage(): void {
    this.router.navigate(['expenses']);
  }
}
