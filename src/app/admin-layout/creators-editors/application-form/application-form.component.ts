import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Appointment, Result} from '../../../shared/interfases';
import {distinct, map, startWith, switchMap} from 'rxjs/operators';
import {AppointmentService} from '../../../shared/services/appointment.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResultService} from '../../../shared/services/result.service';
import {Observable, Subscription} from 'rxjs';
import {AlertService} from '../../../shared/services/alert.service';
import {EducationEntityService} from '../../../super-admin-layout/services/education-entity.service';
import {RegionService} from '../../../super-admin-layout/services/region.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})

export class ApplicationFormComponent implements OnInit, OnDestroy {

  // @ts-ignore
  applicationForm: FormGroup;
  submitted = false;
  creatOrEditor = true;

  // @ts-ignore
  afSub: Subscription;

  listOfParticipants: Array<Result> = [];
  educationalEntityName: Array<string> = [];
  regionsNames: Array<string> = [];
  // @ts-ignore
  educationEntityNameFilteredOptions: Observable<string>;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;

  // @ts-ignore
  appointment: Appointment;
  // @ts-ignore
  initResult: Result;

  regionName = '';

  @ViewChild('participantSurnameInput')
  set participantSurname(participantSurnameInput: ElementRef<HTMLInputElement>) {
    if (participantSurnameInput) {
      setTimeout(() => {
        participantSurnameInput.nativeElement.focus();
      });
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService: AppointmentService,
    private educationEntityService: EducationEntityService,
    private resultService: ResultService,
    private cd: ChangeDetectorRef,
    private regionService: RegionService,
    public alert: AlertService
  ) {
  }

  ngOnInit(result?: Result): void {
    this.afSub = this.regionService.getAllRegions()
      .pipe(
        map(
          regions => regions.map(
            region => region.regionName
          )
        )
      )
      .subscribe(
        regionsNames => this.regionsNames = regionsNames.slice()
      );
    if (result) {
      this.initResult = result;
      this.creatOrEditor = false;
    }
    this.route.paramMap
      .pipe(
        switchMap(
          (params: Params) => {
            return this.resultService.getResultByAppointment(params.get('id'));
          }
        )
      )
      .subscribe(resultsOfAppointment => {
          if (this.initResult === undefined) {
            this.initResult = this.resultService.getEmptyResult(this.appointment);
          }
          if (resultsOfAppointment[0] === undefined) {
            // @ts-ignore
            this.appointment = resultsOfAppointment;
          } else {
            this.appointment = resultsOfAppointment[0].appointment;
            this.listOfParticipants = resultsOfAppointment;
          }
          this.applicationForm = this.createApplicationForm(this.initResult);
        },
        error => this.resultService.errorHandle(error)
      );
    if (this.resultService.error$) {
      this.resultService.error$.subscribe(
        message => {
          this.alert.warning(message);
        }
      );
    }
  }

  onSubmit(formGroupValue: any): void {
    this.applicationForm.disable();
    const result: Result = this.resultService.getResult(this.appointment, formGroupValue, this.initResult);
    let resultServiceMethod;
    if (this.creatOrEditor){
      resultServiceMethod = this.resultService.createResult(result);
    } else {
      resultServiceMethod = this.resultService.updateResult(result);
    }
    this.afSub = resultServiceMethod
      .subscribe(
        dbResultAndMessage => {
          this.listOfParticipants = this.listOfParticipants
            .filter(
              r => r.id !== dbResultAndMessage.result.id
            );
          this.listOfParticipants.push(dbResultAndMessage.result);
          this.cd.detectChanges();
          this.alert.success(dbResultAndMessage.message);
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

  resetApplicationForm(): void {
    this.applicationForm.reset();
    this.creatOrEditor = true;
    this.alert.warning('Скасовано');
  }

  createApplicationForm(result: Result): FormGroup {
    const applicationForm = new FormGroup({
      participant_name: new FormControl(result.participant.name, Validators.required),
      participant_surname: new FormControl(result.participant.surname, Validators.required),
      participant_fathersName: new FormControl(result.participant.fathersName, Validators.required),
      participant_DoB: new FormControl(result.participant.DoB, Validators.required),
      participant_gender: new FormControl(result.participant.gender, Validators.required),
      coach_name: new FormControl(result.coach?.name, Validators.required),
      coach_surname: new FormControl(result.coach?.surname, Validators.required),
      coach_fathersName: new FormControl(result.coach?.fathersName, Validators.required),
      eduentityName: new FormControl(result.educationEntity?.name, Validators.required),
      regionName: new FormControl(result.region?.regionName, Validators.required),
      discipline: new FormControl(result.discipline, Validators.required)
    });
    // @ts-ignore
    this.regionFilteredOptions = applicationForm.get('regionName').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterRegion(value))
      );
    // @ts-ignore
    this.educationEntityNameFilteredOptions = applicationForm.get('eduentityName').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filterEducationEntityName(value))
      );
    return applicationForm;
  }

  private _filterRegion(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      this.regionName = value;
      return this.regionsNames.filter(regionName => regionName.toLowerCase().includes(filterValue));
    }
    return [];
  }

  private _filterEducationEntityName(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      if (this.regionName) {
        this.educationEntityService.getEduEntitiesNamesByRegion(this.regionName)
          .pipe(
            distinct()
          )
          .subscribe(
            educationEntityNames => {
              this.educationalEntityName = educationEntityNames.slice();
            });
      }
      return this.educationalEntityName.filter(educationalEntityName => educationalEntityName.toLowerCase().includes(filterValue));
    }
    return [];
  }

  ngOnDestroy(): void {
    if (this.afSub) {
      this.afSub.unsubscribe();
    }
  }
}
