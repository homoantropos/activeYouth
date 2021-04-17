import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../admin-layout/auth/auth.service';
import {TownService} from '../../services/town.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { startWith } from 'rxjs/internal/operators/startWith';
import { map } from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {Town} from '../../../shared/interfases';
import {HttpResponse} from '@angular/common/http';

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
  message: string;
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
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.townId = params.id;
      }
    );
    this.townService.getOneTownById(this.townId).subscribe(
      res => {
        console.log(res);
        this.townEditorForm = new FormGroup({
          town_name: new FormControl(res.town_name, [
            Validators.required
          ]),
          country_name: new FormControl(res.country.country_name, [
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
    return AutoUpdateArrays.countries.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterRegion(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.regions.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit(town: Town): void {
    if (this.townEditorForm.invalid) {
      return;
    }
    this.townEditorForm.disable();
    town.town_id = this.townId;
    this.tSub = this.townService.updateTown(town)
      .subscribe(
        () => {
          alert(`Нове місто успішно додано до бази даних.`);
          this.router.navigate(['superadmin', 'places', 'towns']);
        },
        error => {
          this.townService.errorHandle(error);
          this.townEditorForm.enable();
        }
      );
    this.townEditorForm.enable();
  }

  ngOnDestroy(): void {
    if (this.tSub) {
      this.tSub.unsubscribe();
    }
  }
}
