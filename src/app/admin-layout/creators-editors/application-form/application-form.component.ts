import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Appointment, Result} from '../../../shared/interfases';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {AppointmentService} from '../../../shared/services/appointment.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResultService} from '../../../shared/services/result.service';
import {Observable, Subject} from 'rxjs';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  static resultId = 0;
  error$: Subject<string> = new Subject<string>();
  appointmentId = 0;
  listOfParticipants: Array<Result> = [];
  regionsName: Array<string> = [];
  // @ts-ignore
  appointment: Appointment;
  // @ts-ignore
  applicationForm: FormGroup;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  submitted = false;
  // @ts-ignore
  initResult: Result;

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService,
    private resultService: ResultService,
    public alert: AlertService
  ) {
  }

  ngOnInit(result?: Result): void {
    if (result) {
      this.initResult = result;
    }
    this.route.paramMap
      .pipe(
        switchMap(
          (params: Params) => {
            this.appointmentId = params.get('id');
            if (this.initResult === undefined) {
              this.initResult = this.resultService.getEmptyResult(this.appointment);
            }
            console.log('result: ', this.initResult);
            return this.resultService.getResultByAppointment(params.get('id'));
          }
        )
      )
      .subscribe(res => {
          if (res[0] === undefined) {
            // @ts-ignore
            this.appointment = res;
          } else {
            this.appointment = res[0].appointment;
            this.listOfParticipants = res;
          }
          this.applicationForm = new FormGroup({
            participant_name: new FormControl(this.initResult.participant.name, Validators.required),
            participant_surname: new FormControl(this.initResult.participant.surname, Validators.required),
            participant_fathersName: new FormControl(this.initResult.participant.fathersName, Validators.required),
            participant_DoB: new FormControl(this.initResult.participant.DoB, Validators.required),
            participant_gender: new FormControl(this.initResult.participant.gender, Validators.required),
            coach_name: new FormControl(this.initResult.coach?.coach_name, Validators.required),
            coach_surname: new FormControl(this.initResult.coach?.surname, Validators.required),
            coach_fathersName: new FormControl(this.initResult.coach?.fathersName, Validators.required),
            eduentityName: new FormControl(this.initResult.educational_entity?.name, Validators.required),
            region: new FormControl(this.initResult.reg?.region_name, Validators.required),
            discipline: new FormControl(this.initResult.discipline, Validators.required)
          });
          // @ts-ignore
          this.regionFilteredOptions = this.applicationForm.get('region').valueChanges
            .pipe(
              startWith(''),
              map((value: string) => this._filterRegion(value))
            );
        },
        error => this.resultService.errorHandle(error));
    if (this.resultService.error$) {
      this.resultService.error$.subscribe(
        message => {
          this.alert.warning(message);
        }
      );
    }
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
    this.resultService.createResult(result)
      .pipe(
        catchError(this.resultService.errorHandle.bind(this)),
        switchMap(
          res => {
            this.alert.success('Вітаємо! Учасник успішно доданий до заявки!');
            return this.resultService.getResultByAppointment(this.appointmentId);
          }
        )
      )
      .subscribe(
        results => this.listOfParticipants = results,
        error => {
          this.resultService.errorHandle(error);
        }
      );
    if (this.resultService.error$) {
      this.resultService.error$.subscribe(
        message => {
          this.alert.warning(message);
        }
      );
    }
  }

}
