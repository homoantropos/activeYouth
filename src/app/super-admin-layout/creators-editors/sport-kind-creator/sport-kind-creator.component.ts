import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

import {SportKind} from '../../../shared/interfases';
import {SportKindService} from '../../services/sport-kind.service';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {Router} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-sport-kind-creator',
  templateUrl: './sport-kind-creator.component.html',
  styleUrls: ['./sport-kind-creator.component.css']
})

export class SportKindCreatorComponent implements OnInit, OnDestroy {
// @ts-ignore
  sportKindCreatorForm: FormGroup;
  // @ts-ignore
  skSub: Subscription;
  submitted = false;

  constructor(
    public sportKindService: SportKindService,
    private router: Router,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.sportKindCreatorForm = new FormGroup({
      sport_kind: new FormControl(null, [
        Validators.required
      ]),
      program: new FormControl('', [
        Validators.required
      ]),
    });
  }

  onSubmit(): void {
    if (this.sportKindCreatorForm.invalid) {
      return;
    }
    this.submitted = true;
    this.sportKindCreatorForm.disable();
    const registrationNumber = AutoUpdateArrays.sportKinds.length + 1;
    const sportKind: SportKind = {
      sport_kind: this.sportKindCreatorForm.value.sport_kind,
      program: this.sportKindCreatorForm.value.program,
      registration_number: registrationNumber
    };
    this.skSub = this.sportKindService.createSportKind(sportKind)
      .subscribe(
        sport => {
          this.alert.success(`${sport.sport_kind} успішно додано до бази даних!`);
          this.router.navigate(['superadmin', 'sports']);
        },
        error => {
          this.sportKindService.errorHandle(error);
          this.submitted = false;
          this.sportKindCreatorForm.enable();
        }
      );
    if (this.sportKindService.error$) {
      this.sportKindService.error$.subscribe(
        message => this.alert.danger(message)
      );
    }
  }

  ngOnDestroy(): void {
    if (this.skSub) {
      this.skSub.unsubscribe();
    }
  }
}
