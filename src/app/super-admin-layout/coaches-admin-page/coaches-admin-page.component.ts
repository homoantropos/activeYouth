import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoachService} from '../services/coach.service';
import {Coach} from '../../shared/interfases';
import {AlertService} from '../../shared/services/alert.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-activities-admin',
  templateUrl: './coaches-admin-page.component.html',
  styleUrls: ['./coaches-admin-page.component.css']
})

export class CoachesAdminPageComponent implements OnInit, AfterViewInit {

  // @ts-ignore
  coachForm: FormGroup;
  submitted = false;
  coachesList: Array<Coach> = [];
  showCoachForm = false;
  initCoach = CoachService.initCoach;
  creatOrEditor = true;
  // @ts-ignore
  @ViewChild('nameInput') inputRef: ElementRef;

  constructor(
    private coachService: CoachService,
    private alert: AlertService
  ) {
  }

  ngOnInit(coach?: Coach): void {
    if (coach) {
      this.initCoach = coach;
      this.creatOrEditor = false;
      this.showCoachForm = true;
    }
    this.coachService.getAllCoaches()
      .subscribe(
        coaches => {
          this.coachesList = coaches;
          this.coachForm = new FormGroup({
            name: new FormControl(this.initCoach.name, Validators.required),
            surname: new FormControl(this.initCoach.surname, Validators.required),
            fathersName: new FormControl(this.initCoach.fathersName, Validators.required)
          });
        }, error => {
          this.alert.warning(error.message);
          this.inputRef.nativeElement.focus();
          this.coachForm.enable();
          this.submitted = false;
        }
      );
  }

  ngAfterViewInit(): void {  }

  onCreate(formValue: any): void {
    this.coachForm.disable();
    this.submitted = true;
    const coach = {
      name: formValue.name,
      surname: formValue.surname,
      fathersName: formValue.fathersName
    };
    this.coachService.saveCoachToDB(coach)
      .subscribe(
        response => {
          this.alert.success(
            `
               ${response.coach.surname} ${response.coach.name} ${response.coach.fathersName}
                успішно доданий(а) до бази тренерів
                `
          );
          this.coachesList = response.coaches;
          this.resetCoachForm();
        }, error => {
          this.alert.danger(error.message);
          this.coachForm.enable();
          this.submitted = false;
        }
      );
  }

  onUpdate(formValue: any): void {
    this.coachForm.disable();
    this.submitted = true;
    const coach = {
      name: formValue.name,
      surname: formValue.surname,
      fathersName: formValue.fathersName,
      id: this.initCoach.id
    };
    this.coachService.updateCoach(coach)
      .subscribe(
        response => {
          this.coachesList = response.coaches;
          this.alert.success(response.message);
          this.resetCoachForm();
        }, error => {
          this.coachService.errorHandle(error);
          this.coachForm.enable();
          this.submitted = false;
          this.inputRef.nativeElement.focus();
        }
      );
    if(this.coachService.error$) {
      this.coachService.error$.subscribe(
        message =>
          this.alert.danger(message)
      )
    }
  }

  resetCoachForm(): void {
    this.coachForm.reset();
    this.coachForm.enable();
    this.inputRef.nativeElement.focus();
    this.submitted = false;
    this.showCoachForm = false;
  }
}
