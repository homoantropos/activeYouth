import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminLayoutRoutingModule } from './super-admin-layout-routing.module';
import { SuperAdminLayoutComponent } from './super-admin-layout.component';
import { UserAdminPageComponent } from './user-admin-page/user-admin-page.component';
import { PlacesAdminPageComponent } from './places-admin-page/places-admin-page.component';
import { CoachesAdminPageComponent } from './coaches_dashboard/coaches-admin-page/coaches-admin-page.component';
import { UserCreatorComponent } from './creators-editors/user-creator/user-creator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { UserEditorComponent } from './creators-editors/user-editor/user-editor.component';
import { SportKindAdminPageComponent } from './sport-kind-admin-page/sport-kind-admin-page.component';
import { SportKindCreatorComponent } from './creators-editors/sport-kind-creator/sport-kind-creator.component';
import { SportKindEditorComponent } from './creators-editors/sport-kind-editor/sport-kind-editor.component';
import {CountryAdminPageComponent} from './country_dashboard/country-admin-page/country-admin-page.component';
import {CountryEditorComponent} from './country_dashboard/country-editor/country-editor.component';
import { CountryListComponent } from './country_dashboard/country-list/country-list.component';
import {RegionsAdminPageComponent} from './regions_dashboard/regions-admin-page/regions-admin-page.component';
import {RegionEditorComponent} from './regions_dashboard/region-editor/region-editor.component';
import {AppointmentPlaceAdminPageComponent} from './appointment-place-dashboard/appointment-place-admin-page/appointment-place-admin-page.component';
import { EducationalEntityAdminPageComponent } from './educational-entity-admin-page/educational-entity-admin-page.component';
import { EducationalEntityCreatorComponent } from './creators-editors/educational-entity-creator/educational-entity-creator.component';
import { EducationalEntityEditorComponent } from './creators-editors/educational-entity-editor/educational-entity-editor.component';
import { CoachesListComponent } from './coaches_dashboard/coaches-list/coaches-list.component';
import { TownAdminPageComponent } from './town_dashboard/town-admin-page/town-admin-page.component';
import { TownListComponent } from './town_dashboard/town-list/town-list.component';
import { CoachEditorComponent } from './coaches_dashboard/coach-editor/coach-editor.component';
import { TownEditorComponent } from './town_dashboard/town-editor/town-editor.component';
import { RegionsListComponent } from './regions_dashboard/regions-list/regions-list.component';
import { AppointmentPlaceListComponent } from './appointment-place-dashboard/appointment-place-list/appointment-place-list.component';
import {AppointmentPlaceEditorComponent} from './appointment-place-dashboard/appointment-place-editor/appointment-place-editor.component';


@NgModule({
  declarations: [
    SuperAdminLayoutComponent,
    UserAdminPageComponent,
    PlacesAdminPageComponent,
    CoachesAdminPageComponent,
    UserCreatorComponent,
    UserEditorComponent,
    SportKindAdminPageComponent,
    SportKindCreatorComponent,
    SportKindEditorComponent,
    RegionsAdminPageComponent,
    CountryEditorComponent,
    RegionEditorComponent,
    AppointmentPlaceAdminPageComponent,
    AppointmentPlaceEditorComponent,
    EducationalEntityAdminPageComponent,
    EducationalEntityCreatorComponent,
    EducationalEntityEditorComponent,
    CoachesListComponent,
    TownAdminPageComponent,
    TownListComponent,
    CoachEditorComponent,
    TownEditorComponent,
    RegionsListComponent,
    CountryListComponent,
    CountryAdminPageComponent,
    AppointmentPlaceListComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SuperAdminLayoutRoutingModule,
    SharedModule
  ]
})
export class SuperAdminLayoutModule { }
