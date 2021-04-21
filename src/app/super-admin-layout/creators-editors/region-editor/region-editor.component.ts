import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Country, Region} from '../../../shared/interfases';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RegionService} from '../../services/region.service';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';

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
    this.route.params.subscribe(
      (params: Params) => {
        this.regionId = params.id;
      }
    );
    this.regionService.getOneRegionById(this.regionId).subscribe(
      region => {
        this.region = region;
        this.regionEditorForm = new FormGroup({
          region_name: new FormControl(this.region.region_name, [
            Validators.required
          ]),
          region_group: new FormControl(this.region.region_group, [
            Validators.required
          ])
        });
      }
    );

  }

  onSubmit(region: Region): void {
    if (this.regionEditorForm.invalid) {
      return;
    }
    this.submitted = true;
    this.regionEditorForm.disable();
    region.region_id = this.region.region_id;
    this.rSub = this.regionService.updateRegion(region)
      .subscribe(
        (reg) => {
          AutoUpdateArrays.regionsNames.push(reg.region_name);
          this.message = 'Ваші зміни успішно збережені!';
        },
        error => {
          this.regionService.errorHandle(error);
        }
      );
    this.router.navigate(['superadmin', 'places', 'regions']);
    // this.regionEditorForm.reset();
    // this.regionEditorForm.enable();
    // this.submitted = false;
  }

  ngOnDestroy(): void {
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }
}


