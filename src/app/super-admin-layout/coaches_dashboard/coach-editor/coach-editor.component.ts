import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CoachService} from '../../services/coach.service';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Coach} from '../../../shared/interfases';
import {AlertService} from '../../../shared/services/alert.service';
import {Subscription} from 'rxjs';
import {CoachesListComponent} from '../coaches-list/coaches-list.component';

@Component({
  selector: 'app-coach-editor',
  templateUrl: './coach-editor.component.html',
  styleUrls: ['./coach-editor.component.css']
})

export class CoachEditorComponent implements OnInit, OnDestroy {

  // @ts-ignore
  coachForm: FormGroup;
  showCoachForm = false;
  submitted = false;
  // @ts-ignore
  coachId: number;

  // @ts-ignore
  cSub: Subscription;

  // @ts-ignore
  createOrEditLabelName: string;
  private creatOrEditor = true;

  setCreatOrEditor(condition: boolean): void {
    this.creatOrEditor = condition;
  }

  get creatorOrEditor(): boolean {
    return this.creatOrEditor;
  }

  @ViewChild('name')
  set name(name: ElementRef<HTMLInputElement>) {
    if (name) {
      setTimeout(() => {
        name.nativeElement.focus();
      });
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coachService: CoachService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    if (this.route.toString().includes('edit')) {
      this.setCreatOrEditor(false);
      this.createOrEditLabelName = 'Змінити';
      this.route.paramMap
        .pipe(
          switchMap(
            (params: Params) => {
              this.coachId = params.get('id');
              return this.coachService.getCoachById(params.get('id'));
            }
          )
        )
        .subscribe(
          coach => this.coachForm = this.createCoachForm(coach),
          error => this.alert.danger(error.message)
        );
    } else {
      this.coachForm = this.createCoachForm(this.coachService.initCoach);
      this.createOrEditLabelName = 'Додати';
    }
  }

  createCoachForm(coach: Coach): FormGroup {
    return new FormGroup({
      name: new FormControl(coach.name.trim(), Validators.required),
      surname: new FormControl(coach.surname.trim(), Validators.required),
      fathersName: new FormControl(coach.fathersName.trim(), Validators.required)
    });
  }

  onSubmit(formValue: any): void {
    this.coachForm.disable();
    this.submitted = true;
    const createdCoach: Coach = {
      name: formValue.name.trim(),
      surname: formValue.surname.trim(),
      fathersName: formValue.fathersName.trim()
    };
    let coachServiceMethod;
    if (this.creatorOrEditor) {
      coachServiceMethod = this.coachService.saveCoachToDB(createdCoach);
    } else {
      createdCoach.id = this.coachId;
      coachServiceMethod = this.coachService.updateCoach(createdCoach);
    }
    this.cSub = coachServiceMethod
      .subscribe(
        dbCoachAndMessage => {
          CoachesListComponent.coaches = CoachesListComponent.coaches.filter(c => c.id !== dbCoachAndMessage.coach.id);
          CoachesListComponent.coaches.unshift(dbCoachAndMessage.coach);
          this.alert.success(dbCoachAndMessage.message);
          this.resetCoachForm();
        }, error => {
          this.coachService.errorHandle(error);
          this.coachForm.enable();
          this.submitted = false;
        }
      );
    if (this.coachService.error$) {
      this.coachService.error$.subscribe(
        message =>
          this.alert.danger(message)
      );
    }
  }

  resetCoachForm(): void {
    this.router.navigate(['superadmin', 'coaches'], {
      queryParams: {
        showButton: false
      }
    });
    this.coachForm.reset();
    this.coachForm.enable();
    this.submitted = false;
    this.showCoachForm = false;
    this.createOrEditLabelName = 'Додати';
    this.setCreatOrEditor(true);
  }

  ngOnDestroy(): void {
    if (this.cSub) {
      this.cSub.unsubscribe();
    }
  }
}
