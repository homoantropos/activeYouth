import {Component, OnDestroy, OnInit} from '@angular/core';

import {SportKind} from '../../../shared/interfases';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SportKindService} from '../../services/sport-kind.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-sport-kind-editor',
  templateUrl: './sport-kind-editor.component.html',
  styleUrls: ['./sport-kind-editor.component.css']
})

export class SportKindEditorComponent implements OnInit, OnDestroy {
// @ts-ignore
  sportKindEditorForm: FormGroup;
  sportKindId = 0;
  // @ts-ignore
  sportKind: SportKind;
  // @ts-ignore
  skSub: Subscription;
  // @ts-ignore
  message: string;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public sportKindService: SportKindService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(
        (params: Params) => {
          this.sportKindId = params.get('id');
          return this.sportKindService.getOneSportKindById(params.get('id'));
        }
      )
    ).subscribe(
      sportKind => {
        this.sportKindEditorForm = new FormGroup({
          sport_kind: new FormControl(sportKind.sport_kind, [
            Validators.required
          ]),
          program: new FormControl(sportKind.program, [
            Validators.required
          ]),
          registration_number: new FormControl(sportKind.registration_number, [
            Validators.required
          ])
        });
      }
    );
  }

  onSubmit(sportKind: SportKind): void {
    if (this.sportKindEditorForm.invalid) {
      return;
    }
    this.submitted = true;
    this.sportKindEditorForm.disable();
    sportKind.id = this.sportKindId;
    this.skSub = this.sportKindService.updateSportKind(sportKind)
      .subscribe(
        (res) => {
          alert(`${res.message}`);
          this.router.navigate(['superadmin', 'sports']);
        },
        error => {
          this.sportKindEditorForm.enable();
          this.sportKindService.errorHandle(error);
        }
      );
  }

  ngOnDestroy(): void {
    if (this.skSub) {
      this.skSub.unsubscribe();
    }
  }
}

