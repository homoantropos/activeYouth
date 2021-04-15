import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Country, Region} from '../../../shared/interfases';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RegionService} from '../../services/region.service';

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
          name: new FormControl(this.region.name, [
            Validators.required
          ]),
          regionsgroup: new FormControl(this.region.regionsgroup, [
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
      name: this.regionEditorForm.value.name,
      regionsgroup: this.regionEditorForm.value.regionsgroup,
      _id: this.region._id
    };
    this.rSub = this.regionService.updateRegion(region)
      .subscribe(
        () => this.message = 'Ваші зміни успішно збережені!',
        error => {
          this.regionService.errorHandle(error);
        }
      );
    this.router.navigate(['superadmin', 'places', 'regions']);
    this.regionEditorForm.reset();
    this.regionEditorForm.enable();
    this.submitted = false;
  }

  ngOnDestroy(): void {
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }
}


