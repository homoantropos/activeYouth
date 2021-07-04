import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Appointment, Result} from '../../../shared/interfases';
import {map, startWith, switchMap} from 'rxjs/operators';
import {AppointmentService} from '../../../shared/services/appointment.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResultService} from '../../../shared/services/result.service';
import {Observable} from 'rxjs';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  static resultId = 0;
  listOfParticipants: Array<Result> = [];
  regionsName: Array<string> = [];
  // @ts-ignore
  appointment: Appointment;
  // @ts-ignore
  applicationForm: FormGroup;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService,
    private resultService: ResultService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(
          (params: Params) => {
            return this.appointmentService.getAppointmentById(params.get('id'));
          }
        )
      )
      .subscribe(appointment => {
        this.appointment = appointment;
        this.applicationForm = new FormGroup({
          participant_name: new FormControl('', Validators.required),
          participant_surname: new FormControl('', Validators.required),
          participant_fathersName: new FormControl('', Validators.required),
          participant_DoB: new FormControl('', Validators.required),
          participant_gender: new FormControl('', Validators.required),
          coach_name: new FormControl('', Validators.required),
          coach_surname: new FormControl('', Validators.required),
          coach_fathersName: new FormControl('', Validators.required),
          eduentityName: new FormControl('', Validators.required),
          region: new FormControl('', Validators.required),
          discipline: new FormControl('', Validators.required)
        });
        // @ts-ignore
        this.regionFilteredOptions = this.applicationForm.get('region').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterRegion(value))
          );
      });
  }

  private _filterRegion(value: string): string[] {
    const filterValue = value.toLowerCase();
    AutoUpdateArrays.regions
      // @ts-ignore
      .map(region => this.regionsName.push(region.region_name));
    this.regionsName = this.regionsName.filter((v, i, a) => a.indexOf(v) === i);
    return this.regionsName.filter(regionName => regionName.toLowerCase().includes(filterValue));
  }

  onApply(value: any): void {
    const result: Result = {
      appointment: this.appointment,
      participant: {
        name: value.participant_name,
        surname: value.participant_surname,
        fathersName: value.participant_fathersName,
        DoB: value.participant_DoB,
        gender: value.participant_gender,
        schoolchildOrStudent: this.appointment.participants
      },
      coach: {
        coach_name: value.coach_name,
        surname: value.coach_surname,
        fathersName: value.coach_fathersName
      },
      reg: {
        region_name: value.region
      },
      eduentity: {
        name: value.eduentityName
      },
      discipline: value.discipline,
      completed: false,
      id: ApplicationFormComponent.resultId
    };
    ++ApplicationFormComponent.resultId;
    this.listOfParticipants.unshift(result);
    this.resultService.createResult(result).subscribe(
      res => console.log(res)
    );
  }

}
