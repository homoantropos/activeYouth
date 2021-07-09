import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../admin-layout/auth/auth.service';
import {TownService} from '../../services/town.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { startWith } from 'rxjs/internal/operators/startWith';
import {map, switchMap} from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {Town} from '../../../shared/interfases';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-town-editor',
  templateUrl: './town-editor.component.html',
  styleUrls: ['./town-editor.component.css']
})
export class TownEditorComponent implements OnInit, OnDestroy {
// @ts-ignore
  townEditorForm: FormGroup;
  // @ts-ignore
  tSub: Subscription;
  // @ts-ignore
  countryFilteredOptions: Observable<string[]>;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  // @ts-ignore
  towns: Array<Town>;
  townId = 0;

  constructor(
    public auth: AuthService,
    public townService: TownService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(
        (params: Params) => {
          this.townId = params.get('id');
          return this.townService.getOneTownById(params.get('id'));
        }
      )
    ).subscribe(
      res => {
        this.townEditorForm = new FormGroup({
          town_name: new FormControl(res.town_name, [
            Validators.required
          ]),
          country_name: new FormControl(res.region.country.country_name, [
            Validators.required
          ]),
          region_name: new FormControl(res.region.region_name, [
            Validators.required
          ])
        });

        // @ts-ignore
        this.countryFilteredOptions = this.townEditorForm.get('country_name').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterCountry(value))
          );
        // @ts-ignore
        this.regionFilteredOptions = this.townEditorForm.get('region_name').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterRegion(value))
          );
      }
    );
  }

  private _filterCountry(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.countryNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterRegion(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.regionsNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit(): void {
    if (this.townEditorForm.invalid) {
      return;
    }
    this.townEditorForm.disable();
    const town: Town = {
      town_name: this.townEditorForm.value.town_name,
      region: {
        region_name: this.townEditorForm.value.region_name
      }
    };
    town.id = this.townId;
    this.tSub = this.townService.updateTown(town)
      .subscribe(
        (res) => {
          this.alert.success(res.message);
          this.router.navigate(['superadmin', 'appointmentPlaces']);
        },
        error => {
          this.townService.errorHandle(error);
          this.townEditorForm.enable();
        }
      );
    if (this.townService.error$) {
      this.townService.error$.subscribe(
        message => this.alert.danger(message)
      );
    }
    this.townEditorForm.enable();
  }

  ngOnDestroy(): void {
    if (this.tSub) {
      this.tSub.unsubscribe();
    }
  }
}
