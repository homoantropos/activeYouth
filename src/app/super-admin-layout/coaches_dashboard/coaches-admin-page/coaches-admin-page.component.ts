import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoachService} from '../../services/coach.service';
import {Coach} from '../../../shared/interfases';
import {AlertService} from '../../../shared/services/alert.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-activities-admin',
  templateUrl: './coaches-admin-page.component.html',
  styleUrls: ['./coaches-admin-page.component.css']
})

export class CoachesAdminPageComponent implements OnInit, AfterViewInit, OnDestroy {
  // @ts-ignore
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  // @ts-ignore
  coachForm: FormGroup;
  submitted = false;
  coachesList: Array<Coach> = [];
  showCoachForm = false;
  initCoach = CoachService.initCoach;
  creatOrEditor = true;
  option = 'Додати';
  // @ts-ignore
  cSub: Subscription;

  constructor(
    private coachService: CoachService,
    private alert: AlertService
  ) {
  }

  ngOnInit(coach?: Coach): void {
    if (coach) {
      this.initCoach = coach;
      this.creatOrEditor = false;
      this.option = 'Редагувати';
      this.showCoachForm = true;
    }
    this.cSub = this.coachService.getAllCoaches()
      .subscribe(
        coaches => {
          this.coachesList = coaches;
          this.coachForm = new FormGroup({
            name: new FormControl(this.initCoach.name, Validators.required),
            surname: new FormControl(this.initCoach.surname, Validators.required),
            fathersName: new FormControl(this.initCoach.fathersName, Validators.required)
          });
          this.nameInput.nativeElement.focus();
        }, error => {
          this.alert.warning(error.message);
          this.nameInput.nativeElement.focus();
          this.coachForm.enable();
        }
      );
  }

  ngAfterViewInit(): void {
  }

  onCreate(formValue: any): void {
    this.coachForm.disable();
    this.submitted = true;
    const coach = {
      name: formValue.name,
      surname: formValue.surname,
      fathersName: formValue.fathersName
    };
    this.cSub = this.coachService.saveCoachToDB(coach)
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
          this.nameInput.nativeElement.focus();
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
    this.cSub = this.coachService.updateCoach(coach)
      .subscribe(
        response => {
          this.coachesList = response.coaches;
          this.alert.success(response.message);
          this.resetCoachForm();
        }, error => {
          this.coachService.errorHandle(error);
          this.coachForm.enable();
          this.submitted = false;
          this.nameInput.nativeElement.focus();
        }
      );
    if (this.coachService.error$) {
      this.coachService.error$.subscribe(
        message =>
          this.alert.danger(message)
      );
    }
  }

  showForm(): void {
    this.showCoachForm = true;
    this.nameInput.nativeElement.focus();
  }

  resetCoachForm(): void {
    this.coachForm.reset();
    this.coachForm.enable();
    this.submitted = false;
    this.showCoachForm = false;
    this.option = 'Додати';
    this.creatOrEditor = true;
  }

  ngOnDestroy(): void {
    if (this.cSub) {
      this.cSub.unsubscribe();
    }
  }
}
