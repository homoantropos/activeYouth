import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})

export class MainLayoutComponent {
  constructor(
    private router: Router
  ) {  }

  // ці методи лише для ознайомленя з структурою сайту, вони будуть видалені
  goToAdminPage(): void {
    this.router.navigate(['admin']);
  }

  goToFinAdminPage(): void {
    this.router.navigate(['expenses']);
  }
}
