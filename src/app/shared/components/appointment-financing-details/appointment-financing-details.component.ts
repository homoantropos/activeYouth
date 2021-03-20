import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {AppointmentFinancingService} from '../../services/appointment-financing.service';
import {AppointmentFinancing} from '../../interfases';

@Component({
  selector: 'app-appointment-financing-details',
  templateUrl: './appointment-financing-details.component.html',
  styleUrls: ['./appointment-financing-details.component.css']
})
export class AppointmentFinancingDetailsComponent implements OnInit {

  // @ts-ignore
  appointmentFinancing: AppointmentFinancing;
  constructor(
    private route: ActivatedRoute,
    private afServise: AppointmentFinancingService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>
        this.afServise.getAppointmentFinancingByID(params.id)
          .subscribe(af => this.appointmentFinancing = af)
    );
  }

}
