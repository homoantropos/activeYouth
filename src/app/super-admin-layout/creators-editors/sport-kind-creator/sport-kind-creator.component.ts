import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

import {SportKind} from '../../../shared/interfases';
import {SportKindService} from '../../services/sport-kind.service';

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
    public sportKindService: SportKindService
  ) {
  }

  ngOnInit(): void {

    this.sportKindCreatorForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ])
    });
  }

  onSubmit(): void {
    if (this.sportKindCreatorForm.invalid) {
      return;
    }
    this.submitted = true;
    this.sportKindCreatorForm.disable();
    const sportKind: SportKind = {
      name: this.sportKindCreatorForm.value.name
    };
    this.skSub = this.sportKindService.createSportKind(sportKind)
      .subscribe(
        () => this.message = 'Вид спорту успішно додано до бази даних!',
        error => {
          this.sportKindService.errorHandle(error);
        }
      );
    this.sportKindCreatorForm.reset();
    this.sportKindCreatorForm.enable();
    this.submitted = false;
  }

  ngOnDestroy(): void {
    if (this.skSub) {
      this.skSub.unsubscribe();
    }
  }
}
