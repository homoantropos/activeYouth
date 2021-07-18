import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-appointment-place-admin-page',
  templateUrl: './appointment-place-admin-page.component.html',
  styleUrls: ['./appointment-place-admin-page.component.css']
})
export class AppointmentPlaceAdminPageComponent implements OnInit {

  showButton = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (params.showButton) {
          this.showButton = params.showButton;
        }
      }
    );
  }

  setShowButton(condition: boolean): void {
    this.showButton = condition;
  }

  goToAppointmentPlaceEditor(): void {
    this.showButton = false;
    this.router.navigateByUrl(`superadmin/places/appointmentplaces/create`);
  }

}
