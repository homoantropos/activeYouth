import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CoachService} from '../../services/coach.service';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Coach} from '../../../shared/interfases';
import {AlertService} from '../../../shared/services/alert.service';
import {Subscription} from 'rxjs';
import {CoachesListComponent} from '../coaches-list/coaches-list.component';
import {CoachesAdminPageComponent} from '../coaches-admin-page/coaches-admin-page.component';

@Component({
  selector: 'app-coach-editor',
  templateUrl: './coach-editor.component.html',
  styleUrls: ['./coach-editor.component.css']
})
export class CoachEditorComponent implements OnInit, OnDestroy, AfterViewInit {

  private static creatOrEditor = true;
  // @ts-ignore
  @ViewChild('name') nameInputRef: ElementRef;
  // @ts-ignore
  coachForm: FormGroup;
  // @ts-ignore
  option: string;
  // @ts-ignore
  cSub: Subscription;
  // @ts-ignore
  coachId: number;
  submitted = false;
  showCoachForm = false;

  static setCreatOrEditor(condition: boolean): void {
    CoachEditorComponent.creatOrEditor = condition;
  }

  get creatOrEditor(): boolean {
    return CoachEditorComponent.creatOrEditor;
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
      CoachEditorComponent.setCreatOrEditor(false);
      this.option = 'Редагувати';
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
          coach => {
            this.coachForm = this.createCoachForm(coach);
          },
          error => this.alert.danger(error.message)
        );
    } else {
      this.coachForm = this.createCoachForm(CoachService.initCoach);
      this.option = 'Додати';
    }
    this.nameInputRef.nativeElement.focus();
  }

  ngAfterViewInit(): void {
    try {
      this.nameInputRef.nativeElement.focus();
    } catch (e) {
    }
  }

  createCoachForm(coach: Coach): FormGroup {
    return new FormGroup({
      name: new FormControl(coach.name.trim(), Validators.required),
      surname: new FormControl(coach.surname.trim(), Validators.required),
      fathersName: new FormControl(coach.fathersName.trim(), Validators.required)
    });
  }

  onCreate(formValue: any): void {
    this.coachForm.disable();
    this.submitted = true;
    const coach = {
      name: formValue.name.trim(),
      surname: formValue.surname.trim(),
      fathersName: formValue.fathersName.trim()
    };
    this.cSub = this.coachService.saveCoachToDB(coach)
      .subscribe(
        response => {
          CoachesListComponent.coachesList.unshift(response.coach);
          this.alert.success(
            `
               ${response.coach.surname} ${response.coach.name} ${response.coach.fathersName}
                успішно доданий(а) до бази тренерів
                `
          );
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
      name: formValue.name.trim(),
      surname: formValue.surname.trim(),
      fathersName: formValue.fathersName.trim(),
      id: this.coachId
    };
    this.cSub = this.coachService.updateCoach(coach)
      .subscribe(
        response => {
          this.alert.success(response.message);
          CoachesListComponent.coachesList = CoachesListComponent.coachesList.filter(c => c.id === this.coachId);
          CoachesListComponent.coachesList.unshift(response.coach);
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

  showForm(): void {
    this.showCoachForm = true;
  }

  resetCoachForm(): void {
    this.router.navigateByUrl(`superadmin/coaches`);
    this.coachForm.reset();
    this.coachForm.enable();
    this.submitted = false;
    this.showCoachForm = false;
    this.option = 'Додати';
    CoachEditorComponent.setCreatOrEditor(true);
    CoachesAdminPageComponent.setShowButton(false);
  }

  ngOnDestroy(): void {
    if (this.cSub) {
      this.cSub.unsubscribe();
    }
  }
}
