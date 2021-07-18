import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
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

  error$: Subject<string> = new Subject<string>();
  appointmentId = 0;
  listOfParticipants: Array<Result> = [];
  regionsName: Array<string> = [];
  // @ts-ignore
  appointment: Appointment;
  // @ts-ignore
  applicationForm: FormGroup;
  formInitiated = false;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  submitted = false;
  // @ts-ignore
  initResult: Result;
  creatOrEditor = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService: AppointmentService,
    private resultService: ResultService,
    public alert: AlertService
  ) {
  }

  ngOnInit(result?: Result): void {
    if (result) {
      this.initResult = result;
      this.creatOrEditor = false;
    }
    this.route.paramMap
      .pipe(
        switchMap(
          (params: Params) => {
            this.appointmentId = params.get('id');
            return this.resultService.getResultByAppointment(params.get('id'));
          }
        )
      )
      .subscribe(res => {
          if (this.initResult === undefined) {
            this.initResult = this.resultService.getEmptyResult(this.appointment);
          }
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
            coach_name: new FormControl(this.initResult.coach?.name, Validators.required),
            coach_surname: new FormControl(this.initResult.coach?.surname, Validators.required),
            coach_fathersName: new FormControl(this.initResult.coach?.fathersName, Validators.required),
            eduentityName: new FormControl(this.initResult.educational_entity?.name, Validators.required),
            regionName: new FormControl(this.initResult.region?.regionName, Validators.required),
            discipline: new FormControl(this.initResult.discipline, Validators.required)
          });
          this.formInitiated = true;
          // @ts-ignore
          this.regionFilteredOptions = this.applicationForm.get('regionName').valueChanges
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
      .map(region => this.regionsName.push(region.regionName));
    this.regionsName = this.regionsName.filter((v, i, a) => a.indexOf(v) === i);
    return this.regionsName.filter(regionName => regionName.toLowerCase().includes(filterValue));
  }

  onApply(value: any): void {
    this.applicationForm.disable();
    const result: Result = this.resultService.getResult(this.appointment, value);
    this.resultService.createResult(result)
      .pipe(
        catchError(this.resultService.errorHandle.bind(this)),
        switchMap(
          res => {
            this.initResult = res as Result;
            this.alert.success('Вітаємо! Учасник успішно доданий до заявки!');
            return this.resultService.getResultByAppointment(this.appointmentId);
          }
        )
      )
      .subscribe(
        results => {
          this.listOfParticipants = results;
          this.applicationForm.reset();
          this.creatOrEditor = true;
        },
        error => {
          this.resultService.errorHandle(error);
          this.applicationForm.enable();
        }
      );
    if (this.resultService.error$) {
      this.resultService.error$.subscribe(
        message => {
          this.alert.danger(message);
        }
      );
    }
    this.applicationForm.enable();
  }

  onEdit(value: any): void {
    this.applicationForm.disable();
    const result: Result = this.resultService.getResult(this.appointment, value, this.initResult);
    this.resultService.updateResult(result)
      .pipe(
        catchError(this.resultService.errorHandle.bind(this)),
        switchMap(
          () => {
            this.alert.success('Вітаємо! Ваші зміни успішно збережені!');
            return this.resultService.getResultByAppointment(this.appointmentId);
          }
        )
      )
      .subscribe(
        results => {
          this.listOfParticipants = results;
          this.applicationForm.reset();
          this.creatOrEditor = true;
        },
        error => {
          {
            this.resultService.errorHandle(error);
            this.applicationForm.enable();
          }
        }
      );
    if (this.resultService.error$) {
      this.resultService.error$.subscribe(
        message => {
          this.alert.danger(message);
        }
      );
    }
    this.applicationForm.enable();
  }

  resetApplicationForm(id: number): void {
    this.applicationForm.reset();
    this.creatOrEditor = true;
    this.alert.warning('Скасовано');
  }
}
