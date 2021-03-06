import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SuperAdminLayoutComponent} from './super-admin-layout.component';
import {UserAdminPageComponent} from './user-dashboard/user-admin-page/user-admin-page.component';
import {PlacesAdminPageComponent} from './places-admin-page/places-admin-page.component';
import {CoachesAdminPageComponent} from './coaches-dashboard/coaches-admin-page/coaches-admin-page.component';
import {UserCreatorComponent} from './user-dashboard/user-creator/user-creator.component';
import {AuthGuardService} from '../admin-layout/auth/auth-guard.service';
import {UserEditorComponent} from './user-dashboard/user-editor/user-editor.component';
import {AppointmentPlaceAdminPageComponent} from './appointment-place-dashboard/appointment-place-admin-page/appointment-place-admin-page.component';
import {TownAdminPageComponent} from './town_dashboard/town-admin-page/town-admin-page.component';
import {CoachEditorComponent} from './coaches-dashboard/coach-editor/coach-editor.component';
import {TownEditorComponent} from './town_dashboard/town-editor/town-editor.component';
import {RegionsAdminPageComponent} from './regions_dashboard/regions-admin-page/regions-admin-page.component';
import {RegionEditorComponent} from './regions_dashboard/region-editor/region-editor.component';
import {CountryAdminPageComponent} from './country-dashboard/country-admin-page/country-admin-page.component';
import {CountryEditorComponent} from './country-dashboard/country-editor/country-editor.component';
import {AppointmentPlaceEditorComponent} from './appointment-place-dashboard/appointment-place-editor/appointment-place-editor.component';
import {EducationEntityAdminPageComponent} from './education-entity-dashboard/education-entity-admin-page/education-entity-admin-page.component';
import {EducationEntityEditorComponent} from './education-entity-dashboard/education-entity-editor/education-entity-editor.component';
import {SportKindAdminPageComponent} from './sport-kind-dashboard/sport-kind-admin-page/sport-kind-admin-page.component';
import {SportKindEditorComponent} from './sport-kind-dashboard/sport-kind-editor/sport-kind-editor.component';

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
        path: 'places', component: PlacesAdminPageComponent, children: [
          {path: '', redirectTo: 'appointmentplaces', pathMatch: 'full'},
          {
            path: 'appointmentplaces', component: AppointmentPlaceAdminPageComponent, children: [
              {path: 'create', component: AppointmentPlaceEditorComponent},
              {path: 'edit/:id', component: AppointmentPlaceEditorComponent}
            ]
          },
          {
            path: 'countries', component: CountryAdminPageComponent, children: [
              {path: 'create', component: CountryEditorComponent},
              {path: 'edit/:id', component: CountryEditorComponent}
            ]
          },
          {
            path: 'regions', component: RegionsAdminPageComponent, children: [
              {path: 'create', component: RegionEditorComponent},
              {path: 'edit/:id', component: RegionEditorComponent}
            ]
          },
          {
            path: 'towns', component: TownAdminPageComponent, children: [
              {path: 'create', component: TownEditorComponent},
              {path: 'edit/:id', component: TownEditorComponent}
            ]
          }
        ]
      },
      {
        path: 'sports', component: SportKindAdminPageComponent, children: [
          {path: 'create', component: SportKindEditorComponent},
          {path: 'edit/:id', component: SportKindEditorComponent}
        ]
      },
      {
        path: 'coaches', component: CoachesAdminPageComponent, children: [
          {path: 'create', component: CoachEditorComponent},
          {path: 'edit/:id', component: CoachEditorComponent}
        ]
      },
      {
        path: 'eduEntities', component: EducationEntityAdminPageComponent, children: [
          {path: 'create', component: EducationEntityEditorComponent},
          {path: 'edit/:id', component: EducationEntityEditorComponent}
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
