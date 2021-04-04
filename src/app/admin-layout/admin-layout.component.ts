import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  goToMainPage(): void {
    this.router.navigate(['main']);
  }

}


/*TODO:
* 1. Додати сутність "склад учасників" і звідти - "результати".
* 2. Додати форму заявки команди - звідки формуватиметься і склад учасників.
* 3. Додати форму внесення результатів заходу.
*/
