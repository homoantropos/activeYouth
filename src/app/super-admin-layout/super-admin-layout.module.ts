import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminLayoutRoutingModule } from './super-admin-layout-routing.module';
import { SuperAdminLayoutComponent } from './super-admin-layout.component';
import { UserAdminPageComponent } from './user-admin-page/user-admin-page.component';
import { PlacesAdminPageComponent } from './places-admin-page/places-admin-page.component';
import { SportsAdminPageComponent } from './sports-admin-page/sports-admin-page.component';
import { CoachesAdminPageComponent } from './coaches-admin-page/coaches-admin-page.component';
import { UserCreatorComponent } from './creators-editors/user-creator/user-creator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { UserEditorComponent } from './creators-editors/user-editor/user-editor.component';
import { SportKindAdminPageComponent } from './sport-kind-admin-page/sport-kind-admin-page.component';
import { SportKindCreatorComponent } from './creators-editors/sport-kind-creator/sport-kind-creator.component';
import { SportKindEditorComponent } from './creators-editors/sport-kind-editor/sport-kind-editor.component';
import { CountriesAdminPageComponent } from './places-admin-page/countries-admin-page/countries-admin-page.component';
import { RegionsAdminPageComponent } from './places-admin-page/regions-admin-page/regions-admin-page.component';
import { TownsAdminPageComponent } from './places-admin-page/towns-admin-page/towns-admin-page.component';
import { SportHallsAdminPageComponent } from './places-admin-page/sport-halls-admin-page/sport-halls-admin-page.component';
import { CountryCreatorComponent } from './creators-editors/country-creator/country-creator.component';
import { CountryEditorComponent } from './creators-editors/country-editor/country-editor.component';
import { RegionCreatorComponent } from './creators-editors/region-creator/region-creator.component';
import { RegionEditorComponent } from './creators-editors/region-editor/region-editor.component';
import { TownCreatorComponent } from './creators-editors/town-creator/town-creator.component';
import { TownEditorComponent } from './creators-editors/town-editor/town-editor.component';
import { SportHallCreatorComponent } from './creators-editors/sport-hall-creator/sport-hall-creator.component';
import { SportHallEditorComponent } from './creators-editors/sport-hall-editor/sport-hall-editor.component';


@NgModule({
  declarations: [
    SuperAdminLayoutComponent,
    UserAdminPageComponent,
    PlacesAdminPageComponent,
    SportsAdminPageComponent,
    CoachesAdminPageComponent,
    UserCreatorComponent,
    UserEditorComponent,
    SportKindAdminPageComponent,
    SportKindCreatorComponent,
    SportKindEditorComponent,
    CountriesAdminPageComponent,
    RegionsAdminPageComponent,
    TownsAdminPageComponent,
    SportHallsAdminPageComponent,
    CountryCreatorComponent,
    CountryEditorComponent,
    RegionCreatorComponent,
    RegionEditorComponent,
    TownCreatorComponent,
    TownEditorComponent,
    SportHallCreatorComponent,
    SportHallEditorComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SuperAdminLayoutRoutingModule,
    SharedModule
  ]
})
export class SuperAdminLayoutModule { }
