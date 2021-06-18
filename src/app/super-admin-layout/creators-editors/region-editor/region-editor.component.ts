import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Country, Region} from '../../../shared/interfases';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RegionService} from '../../services/region.service';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-region-editor',
  templateUrl: './region-editor.component.html',
  styleUrls: ['./region-editor.component.css']
})

export class RegionEditorComponent implements OnInit, OnDestroy {
  // @ts-ignore
  regionEditorForm: FormGroup;
  regionId = 0;
  // @ts-ignore
  region: Region;
  // @ts-ignore
  rSub: Subscription;
  // @ts-ignore
  message: string;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public regionService: RegionService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(
        (params: Params) => {
          this.regionId = params.get('id');
          return  this.regionService.getOneRegionById(params.get('id'));
        }
      )
    ).subscribe(
      region => {
        this.regionEditorForm = new FormGroup({
          region_name: new FormControl(region.region_name, [
            Validators.required
          ]),
          region_group: new FormControl(region.region_group, [
            Validators.required
          ])
        });
      }
    );

  }

  onSubmit(): void {
    if (this.regionEditorForm.invalid) {
      return;
    }
    this.submitted = true;
    this.regionEditorForm.disable();
    const region: Region = {
      region_name: this.regionEditorForm.value.region_name,
      region_group: this.regionEditorForm.value.region_group,
      country: {
        country_name: this.regionEditorForm.value.country_name
      }
    };
    region.id = this.regionId;
    this.rSub = this.regionService.updateRegion(region)
      .subscribe(
        (res) => {
          alert(`${res.message}`);
          this.router.navigate(['superadmin', 'appointmentPlaces']);
        },
        error => {
          this.regionService.errorHandle(error);
        }
      );
  }

  ngOnDestroy(): void {
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }
}


