import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SuperAdminLayoutComponent} from './super-admin-layout.component';
import {UserAdminPageComponent} from './user-admin-page/user-admin-page.component';
import {PlacesAdminPageComponent} from './places-admin-page/places-admin-page.component';
import {CoachesesAdminPageComponent} from './coaches-admin-page/coacheses-admin-page.component';
import {UserCreatorComponent} from './creators-editors/user-creator/user-creator.component';
import {AuthGuardService} from '../admin-layout/auth/auth-guard.service';
import {UserEditorComponent} from './creators-editors/user-editor/user-editor.component';
import {SportKindAdminPageComponent} from './sport-kind-admin-page/sport-kind-admin-page.component';
import {SportKindCreatorComponent} from './creators-editors/sport-kind-creator/sport-kind-creator.component';
import {SportKindEditorComponent} from './creators-editors/sport-kind-editor/sport-kind-editor.component';
import {CountriesAdminPageComponent} from './places-admin-page/countries-admin-page/countries-admin-page.component';
import {RegionsAdminPageComponent} from './places-admin-page/regions-admin-page/regions-admin-page.component';
import {TownsAdminPageComponent} from './places-admin-page/towns-admin-page/towns-admin-page.component';
import {SportHallsAdminPageComponent} from './places-admin-page/sport-halls-admin-page/sport-halls-admin-page.component';
import {CountryCreatorComponent} from './creators-editors/country-creator/country-creator.component';
import {CountryEditorComponent} from './creators-editors/country-editor/country-editor.component';
import {RegionCreatorComponent} from './creators-editors/region-creator/region-creator.component';
import {RegionEditorComponent} from './creators-editors/region-editor/region-editor.component';
import {TownCreatorComponent} from './creators-editors/town-creator/town-creator.component';
import {TownEditorComponent} from './creators-editors/town-editor/town-editor.component';

const routes: Routes = [
  {
    path: '', component: SuperAdminLayoutComponent, canActivate: [AuthGuardService], children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
        path: 'users', children: [
          {path: 'create', component: UserCreatorComponent},
          {path: 'edit/:id', component: UserEditorComponent},
          {path: '', component: UserAdminPageComponent}]
      },
      {
        path: 'places', component: PlacesAdminPageComponent, canActivate: [AuthGuardService], children: [
          {
            path: 'countries', component: CountriesAdminPageComponent, children: [
              {path: 'create', component: CountryCreatorComponent},
              {path: 'edit/:id', component: CountryEditorComponent}
            ]
          },
          {
            path: 'regions', component: RegionsAdminPageComponent, children: [
              {path: 'create', component: RegionCreatorComponent},
              {path: 'edit/:id', component: RegionEditorComponent}
            ]
          },
          {
            path: 'towns', component: TownsAdminPageComponent, children: [
              {path: 'create', component: TownCreatorComponent},
              {path: 'edit/:id', component: TownEditorComponent}
            ]
          },
          {path: 'sportHalls', component: SportHallsAdminPageComponent}
        ]
      },
      {
        path: 'sports', children: [
          {path: 'create', component: SportKindCreatorComponent},
          {path: 'edit/:id', component: SportKindEditorComponent},
          {path: '', component: SportKindAdminPageComponent}
        ]
      },
      {path: 'coaches', component: CoachesesAdminPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminLayoutRoutingModule {
}
