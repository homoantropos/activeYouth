import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminLayoutRoutingModule } from './super-admin-layout-routing.module';
import { SuperAdminLayoutComponent } from './super-admin-layout.component';
import { UserAdminPageComponent } from './user-admin-page/user-admin-page.component';
import { PlacesAdminPageComponent } from './places-admin-page/places-admin-page.component';
import { SportsAdminPageComponent } from './sports-admin-page/sports-admin-page.component';
import { CoachesesAdminPageComponent } from './coaches-admin-page/coacheses-admin-page.component';
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
import { AddressesAdminPageComponent } from './places-admin-page/addresses-admin-page/addresses-admin-page.component';
import { SportHallsAdminPageComponent } from './places-admin-page/sport-halls-admin-page/sport-halls-admin-page.component';
import { CountryCreatorComponent } from './creators-editors/country-creator/country-creator.component';
import { CountryEditorComponent } from './creators-editors/country-editor/country-editor.component';


@NgModule({
  declarations: [
    SuperAdminLayoutComponent,
    UserAdminPageComponent,
    PlacesAdminPageComponent,
    SportsAdminPageComponent,
    CoachesesAdminPageComponent,
    UserCreatorComponent,
    UserEditorComponent,
    SportKindAdminPageComponent,
    SportKindCreatorComponent,
    SportKindEditorComponent,
    CountriesAdminPageComponent,
    RegionsAdminPageComponent,
    TownsAdminPageComponent,
    AddressesAdminPageComponent,
    SportHallsAdminPageComponent,
    CountryCreatorComponent,
    CountryEditorComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SuperAdminLayoutRoutingModule,
    SharedModule
  ]
})
export class SuperAdminLayoutModule { }
