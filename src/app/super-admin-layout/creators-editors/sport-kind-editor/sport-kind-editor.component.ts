import {Component, OnDestroy, OnInit} from '@angular/core';

import {SportKind} from '../../../shared/interfases';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SportKindService} from '../../services/sport-kind.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

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
    this.route.params.subscribe(
      (params: Params) => {
        this.sportKindId = params.id;
      }
    );
    this.sportKindService.getOneSportKindById(this.sportKindId).subscribe(
      sportKind => {
        this.sportKind = sportKind;
        this.sportKindEditorForm = new FormGroup({
          name: new FormControl(this.sportKind.name, [
            Validators.required
          ])
        });
      }
    );

  }

  onSubmit(): void {
    if (this.sportKindEditorForm.invalid) {
      return;
    }
    this.submitted = true;
    this.sportKindEditorForm.disable();
    const sportKind: SportKind = {
      name: this.sportKindEditorForm.value.name,
      _id: this.sportKind._id
    };
    this.skSub = this.sportKindService.updateSportKind(sportKind)
      .subscribe(
        () => this.message = 'Ваші зміни успішно збережені!',
        error => {
          this.sportKindService.errorHandle(error);
        }
      );
    this.router.navigate(['superadmin', 'sports']);
    this.sportKindEditorForm.reset();
    this.sportKindEditorForm.enable();
    this.submitted = false;
  }

  ngOnDestroy(): void {
    if (this.skSub) {
      this.skSub.unsubscribe();
    }
  }
}

