import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../admin-layout/auth/auth.service';
import {SportHallService} from '../../services/sport-hall.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {map, startWith } from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';
import {SportHall} from '../../../shared/interfases';

@Component({
  selector: 'app-sport-hall-editor',
  templateUrl: './sport-hall-editor.component.html',
  styleUrls: ['./sport-hall-editor.component.css']
})
export class SportHallEditorComponent implements OnInit, OnDestroy {
// @ts-ignore
  sportHallEditorForm: FormGroup;
  // @ts-ignore
  sSub: Subscription;
  // @ts-ignore
  message: string;
  // @ts-ignore
  countryFilteredOptions: Observable<string[]>;
  // @ts-ignore
  regionFilteredOptions: Observable<string[]>;
  // @ts-ignore
  townFilteredOptions: Observable<string[]>;
  // @ts-ignore
  towns: Array<Town>;
  sportHallId = 0;

  constructor(
    public auth: AuthService,
    public sportHallService: SportHallService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => this.sportHallId = params.id
    );
    this.sportHallService.getOneSportHallById(this.sportHallId).subscribe(
      sportHall => {
        this.sportHallEditorForm = new FormGroup({
          sportHall_name: new FormControl(sportHall.sportHall_name, [
            Validators.required
          ]),
          address: new FormControl(sportHall.address),
          country_name: new FormControl(''),
          region_name: new FormControl(''),
          town_name: new FormControl(sportHall.town.town_name, [
            Validators.required
          ])
        });
        // @ts-ignore
        this.countryFilteredOptions = this.sportHallEditorForm.get('country_name').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterCountry(value))
          );
        // @ts-ignore
        this.regionFilteredOptions = this.sportHallEditorForm.get('region_name').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterRegion(value))
          );
        // @ts-ignore
        this.townFilteredOptions = this.sportHallEditorForm.get('town_name').valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this._filterTown(value))
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

  private _filterTown(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.towns.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit(sportHall: SportHall): void {
    if (this.sportHallEditorForm.invalid) {
      return;
    }
    this.sportHallEditorForm.disable();
    sportHall.sportHall_id = this.sportHallId;
    this.sSub = this.sportHallService.updateSportHall(sportHall)
      .subscribe(
        () => {
          alert(`Інформація про спортивну споруду успішно оновлена.`);
          this.router.navigate(['superadmin', 'places', 'sportHalls']);
        },
        error => {
          this.sportHallService.errorHandle(error);
          this.sportHallEditorForm.enable();
        }
      );
    this.sportHallEditorForm.enable();
  }

  ngOnDestroy(): void {
    if (this.sSub) {
      this.sSub.unsubscribe();
    }
  }
}
