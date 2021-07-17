import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SuperAdminLayoutComponent} from './super-admin-layout.component';
import {UserAdminPageComponent} from './user-admin-page/user-admin-page.component';
import {PlacesAdminPageComponent} from './places-admin-page/places-admin-page.component';
import {CoachesAdminPageComponent} from './coaches_dashboard/coaches-admin-page/coaches-admin-page.component';
import {UserCreatorComponent} from './creators-editors/user-creator/user-creator.component';
import {AuthGuardService} from '../admin-layout/auth/auth-guard.service';
import {UserEditorComponent} from './creators-editors/user-editor/user-editor.component';
import {SportKindAdminPageComponent} from './sport-kind-admin-page/sport-kind-admin-page.component';
import {SportKindCreatorComponent} from './creators-editors/sport-kind-creator/sport-kind-creator.component';
import {SportKindEditorComponent} from './creators-editors/sport-kind-editor/sport-kind-editor.component';
import {CountriesAdminPageComponent} from './places-admin-page/countries-admin-page/countries-admin-page.component';
import {CountryCreatorComponent} from './creators-editors/country-creator/country-creator.component';
import {CountryEditorComponent} from './creators-editors/country-editor/country-editor.component';
import {AppointmentPlaceAdminPageComponent} from './appointment-place-admin-page/appointment-place-admin-page.component';
import {AppointmentPlaceCreatorComponent} from './creators-editors/appointment-place-creator/appointment-place-creator.component';
import {AppointmentPlaceEditorComponent} from './creators-editors/appointment-place-editor/appointment-place-editor.component';
import {EducationalEntityAdminPageComponent} from './educational-entity-admin-page/educational-entity-admin-page.component';
import {EducationalEntityCreatorComponent} from './creators-editors/educational-entity-creator/educational-entity-creator.component';
import {EducationalEntityEditorComponent} from './creators-editors/educational-entity-editor/educational-entity-editor.component';
import {TownAdminPageComponent} from './town_dashboard/town-admin-page/town-admin-page.component';
import {CoachEditorComponent} from './coaches_dashboard/coach-editor/coach-editor.component';
import {TownEditorComponent} from './town_dashboard/town-editor/town-editor.component';
import {RegionsAdminPageComponent} from './regions_dashboard/regions-admin-page/regions-admin-page.component';
import {RegionEditorComponent} from './regions_dashboard/region-editor/region-editor.component';

const routes: Routes = [
  {
    path: '', component: SuperAdminLayoutComponent, canActivate: [AuthGuardService], canActivateChild: [AuthGuardService], children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
        path: 'users', children: [
          {path: 'create', component: UserCreatorComponent},
          {path: 'edit/:id', component: UserEditorComponent},
          {path: '', component: UserAdminPageComponent}]
      },
      {
        path: 'appointmentPlaces', children: [
          {path: 'create', component: AppointmentPlaceCreatorComponent},
          {path: 'edit/:id', component: AppointmentPlaceEditorComponent},
          {path: '', component: AppointmentPlaceAdminPageComponent}
        ]
      },
      {
        path: 'places', component: PlacesAdminPageComponent, children: [
          {path: '', redirectTo: 'countries', pathMatch: 'full'},

          {
            path: 'countries', component: CountriesAdminPageComponent, children: [
              {path: 'create', component: CountryCreatorComponent},
              {path: 'edit/:id', component: CountryEditorComponent}
            ]
          },
          {
            path: 'regions', component: RegionsAdminPageComponent, children: [
              {path: 'create', component: RegionEditorComponent},
              {path: 'edit/:id', component: RegionEditorComponent}
            ]
          },
          {path: 'towns', component: TownAdminPageComponent, children: [
              {path: 'create', component: TownEditorComponent},
              {path: 'edit/:id', component: TownEditorComponent}
            ]}
        ]
      },
      {
        path: 'sports', children: [
          {path: 'create', component: SportKindCreatorComponent},
          {path: 'edit/:id', component: SportKindEditorComponent},
          {path: '', component: SportKindAdminPageComponent}
        ]
      },
      {
        path: 'coaches', component: CoachesAdminPageComponent, children: [
          {path: 'create', component: CoachEditorComponent},
          {path: 'edit/:id', component: CoachEditorComponent}
        ]
      },
      {
        path: 'eduEntities', children: [
          {path: 'create', component: EducationalEntityCreatorComponent},
          {path: 'edit/:id', component: EducationalEntityEditorComponent},
          {path: '', component: EducationalEntityAdminPageComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminLayoutRoutingModule {
}
