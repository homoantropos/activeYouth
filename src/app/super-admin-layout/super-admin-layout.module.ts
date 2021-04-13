import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminLayoutRoutingModule } from './super-admin-layout-routing.module';
import { SuperAdminLayoutComponent } from './super-admin-layout.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { PlacesAdminComponent } from './places-admin/places-admin.component';
import { SportsAdminComponent } from './sports-admin/sports-admin.component';
import { CoachesesAdminComponent } from './coaches-admin/coacheses-admin.component';
import { UserCreatorComponent } from './creators-editors/user-creator/user-creator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { UserEditorComponent } from './creators-editors/user-editor/user-editor.component';
import { SportKindAdminComponent } from './sport-kind-admin/sport-kind-admin.component';
import { SportKindCreatorComponent } from './creators-editors/sport-kind-creator/sport-kind-creator.component';
import { SportKindEditorComponent } from './creators-editors/sport-kind-editor/sport-kind-editor.component';


@NgModule({
  declarations: [
    SuperAdminLayoutComponent,
    UserAdminComponent,
    PlacesAdminComponent,
    SportsAdminComponent,
    CoachesesAdminComponent,
    UserCreatorComponent,
    UserEditorComponent,
    SportKindAdminComponent,
    SportKindCreatorComponent,
    SportKindEditorComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SuperAdminLayoutRoutingModule,
    SharedModule
  ]
})
export class SuperAdminLayoutModule { }
