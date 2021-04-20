import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';

import {AutoApdateArraysCreateService} from '../shared/services/auto-apdate-arrays-create.service';
import {AutoUpdateArrays} from '../shared/utils/autoUpdateArrays';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router,
    private autoUpdateCreator: AutoApdateArraysCreateService
  ) {
  }

  ngOnInit(): void {
    this.autoUpdateCreator.createAutoApdateArrays();
    console.log(AutoUpdateArrays.sportHall);
    console.log(AutoUpdateArrays.sportHalls);
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
