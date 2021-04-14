import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../admin-layout/auth/auth.service';
import {Router} from '@angular/router';
import {Country, Region} from '../../../shared/interfases';
import {RegionService} from '../../services/region.service';

@Component({
  selector: 'app-regions-creator',
  templateUrl: './region-creator.component.html',
  styleUrls: ['./region-creator.component.css']
})
export class RegionCreatorComponent implements OnInit, OnDestroy {
  // @ts-ignore
  regionCreatorForm: FormGroup;
  // @ts-ignore
  rSub: Subscription;
  // @ts-ignore
  message: string;
  submitted = false;

  constructor(
    public auth: AuthService,
    public regionService: RegionService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.regionCreatorForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      regionsgroup: new FormControl(null, [
        Validators.required
      ])
    });
  }

  onSubmit(): void {
    if (this.regionCreatorForm.invalid) {
      return;
    }
    this.submitted = true;
    this.regionCreatorForm.disable();
    const region: Region = {
      name: this.regionCreatorForm.value.name,
      regionsgroup: this.regionCreatorForm.value.regionsgroup
    };
    this.rSub = this.regionService.createRegion(region)
      .subscribe(
        (con) => {
          this.router.navigateByUrl('/superadmin/places/regions');
        },
        error => {
          this.regionService.errorHandle(error);
          this.regionCreatorForm.enable();
        }
      );
    this.submitted = false;
    this.regionCreatorForm.enable();
  }

  ngOnDestroy(): void {
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }
}

