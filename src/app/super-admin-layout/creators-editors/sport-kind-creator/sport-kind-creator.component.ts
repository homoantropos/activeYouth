import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

import {SportKind} from '../../../shared/interfases';
import {SportKindService} from '../../services/sport-kind.service';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {Router} from '@angular/router';

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
  // @ts-ignore
  message: string;
  submitted = false;

  constructor(
    public sportKindService: SportKindService,
    private router: Router
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
        () => {
          this.message = 'Вид спорту успішно додано до бази даних!';
          this.router.navigate(['superadmin', 'sports']);
        },
        error => {
          this.sportKindService.errorHandle(error);
          this.submitted = false;
          this.sportKindCreatorForm.enable();
        }
      );
  }

  ngOnDestroy(): void {
    if (this.skSub) {
      this.skSub.unsubscribe();
    }
  }
}
