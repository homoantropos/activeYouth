import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {SportKindService} from '../super-admin-layout/services/sport-kind.service';
import {SportKind} from '../shared/interfases';
import {AutoUpdateArrays} from '../shared/utils/autoUpdateArrays';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit, OnDestroy {

  sSub: Subscription = new Subscription();

  constructor(
    public auth: AuthService,
    private router: Router,
    private sportKindService: SportKindService
  ) {
  }

  ngOnInit(): void {
    this.sSub = this.sportKindService.getAllSportKinds().subscribe(
      sportKinds => {
        sportKinds.map((sportKind: SportKind) => AutoUpdateArrays.sportKinds.push(sportKind.name));
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sSub) {
      this.sSub.unsubscribe();
    }
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
