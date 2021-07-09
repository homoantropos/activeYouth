import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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

export class CoachesAdminPageComponent implements OnInit {

  // @ts-ignore
  coachForm: FormGroup;
  submitted = false;
  coachesList: Array<Coach> = [];
  // @ts-ignore
  @ViewChild('nameInput') inputRef: ElementRef;

  constructor(
    private coachService: CoachService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.coachService.getAllCoaches()
      .subscribe(
        coaches => {
          this.coachesList = coaches;
          this.coachForm = new FormGroup({
            name: new FormControl('', Validators.required),
            surname: new FormControl('', Validators.required),
            fathersName: new FormControl('', Validators.required)
          });
        }, error => {
          this.alert.warning(error.message);
        }
      );
  }

  onCreate(formValue: any): void {
    this.coachForm.disable();
    this.submitted = true;
    const coach = {
      name: formValue.name,
      surname: formValue.surname,
      fathersName: formValue.fathersName
    };
    this.coachService.saveCoachToDB(coach)
      .pipe(
        switchMap(
          responseCoach => {
            this.alert.success(
              `
               ${responseCoach.surname} ${responseCoach.name} ${responseCoach.fathersName}
                успішно доданий(а) до бази тренерів
                `
            );
            return this.coachService.getAllCoaches();
          }
        )
      )
      .subscribe(
      coaches => {
        this.coachesList = coaches;
        this.coachForm.reset();
        this.coachForm.enable();
        this.inputRef.nativeElement.focus();
        this.submitted = false;
      }, error => {
        this.alert.danger(error.message);
        this.coachForm.enable();
        }
    );
  }

}
