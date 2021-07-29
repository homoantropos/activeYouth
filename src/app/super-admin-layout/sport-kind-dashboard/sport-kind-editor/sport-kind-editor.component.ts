import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';
import {switchMap} from 'rxjs/operators';
import {SportKind} from '../../../shared/interfases';
import {SportKindService} from '../../services/sport-kind.service';
import {SportKindListComponent} from '../sport-kind-list/sport-kind-list.component';

@Component({
  selector: 'app-sport-kind-editor',
  templateUrl: './sport-kind-editor.component.html',
  styleUrls: ['./sport-kind-editor.component.css']
})
export class SportKindEditorComponent implements OnInit, OnDestroy {

  // @ts-ignore
  sportKindForm: FormGroup;
  showSportKindForm = false;
  submitted = false;

  // @ts-ignore
  sportKindId: number;
  // @ts-ignore
  registrationNumber: string;

  // @ts-ignore
  skSub: Subscription;

  // @ts-ignore
  createOrEditLabelName: string;
  private creatOrEditor = true;

  setCreatOrEditor(condition: boolean): void {
    this.creatOrEditor = condition;
  }

  get creatorOrEditor(): boolean {
    return this.creatOrEditor;
  }

  @ViewChild('sportKindNameInput')
  set sportKindName(sportKindNameInput: ElementRef<HTMLInputElement>) {
    if (sportKindNameInput) {
      setTimeout(() => {
        sportKindNameInput.nativeElement.focus();
      });
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sportKindService: SportKindService,
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
              this.sportKindId = params.get('id');
              return this.sportKindService.getOneSportKindById(params.get('id'));
            }
          )
        )
        .subscribe(
          sportKind => {
            // @ts-ignore
            this.sportKindId = sportKind.id;
            this.registrationNumber = sportKind.registrationNumber;
            this.sportKindForm = this.createSportKindForm(sportKind);
          },
          error => this.alert.danger(error.message)
        );
    } else {
      this.sportKindForm = this.createSportKindForm(SportKindService.initSportKind);
      this.createOrEditLabelName = 'Додати';
    }
  }

  createSportKindForm(sportKind: SportKind): FormGroup {
    return new FormGroup({
      sportKind: new FormControl(sportKind.sportKind.trim(), [Validators.required]),
      program: new FormControl(sportKind.program.trim(), [Validators.required])
    });
  }

  onSubmit(formValue: any): void {
    this.sportKindForm.disable();
    this.submitted = true;
    const registrationNumber = `${SportKindListComponent.sportKinds.length + 1}`;
    const createdSportKind: SportKind = {
      sportKind: formValue.sportKind.trim(),
      program: formValue.program.trim(),
      registrationNumber
    };
    let sportKindServiceMethod;
    if (this.creatorOrEditor) {
      sportKindServiceMethod = this.sportKindService.createSportKind(createdSportKind);
    } else {
      createdSportKind.id = this.sportKindId;
      createdSportKind.registrationNumber = this.registrationNumber;
      sportKindServiceMethod = this.sportKindService.updateSportKind(createdSportKind);
    }
    this.skSub = sportKindServiceMethod
      .subscribe(
        dbSportKindAndMessage => {
          SportKindListComponent.sportKinds = SportKindListComponent.sportKinds.filter(sk => sk.id !== dbSportKindAndMessage.sportKind.id);
          SportKindListComponent.sportKinds.push(dbSportKindAndMessage.sportKind);
          this.alert.success(dbSportKindAndMessage.message);
          this.resetSportKindForm();
        }, error => {
          this.sportKindService.errorHandle(error);
          this.sportKindForm.enable();
          this.submitted = false;
        }
      );
    if (this.sportKindService.error$) {
      this.sportKindService.error$.subscribe(
        message =>
          this.alert.danger(message)
      );
    }
  }

  resetSportKindForm(): void {
    this.router.navigate(['superadmin', 'sports'], {
      queryParams: {
        showButton: false
      }
    });
    this.sportKindForm.enable();
    this.submitted = false;
    this.showSportKindForm = false;
    this.createOrEditLabelName = 'Додати';
    this.setCreatOrEditor(true);
  }

  ngOnDestroy(): void {
    if (this.skSub) {
      this.skSub.unsubscribe();
    }
  }
}
