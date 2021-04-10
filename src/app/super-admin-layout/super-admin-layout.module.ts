import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminLayoutRoutingModule } from './super-admin-layout-routing.module';
import { SuperAdminLayoutComponent } from './super-admin-layout.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { PlacesAdminComponent } from './places-admin/places-admin.component';
import { SportsAdminComponent } from './sports-admin/sports-admin.component';
import { ActivitiesAdminComponent } from './activities-admin/activities-admin.component';
import { UserCreatorComponent } from './creators-editors/user-creator/user-creator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { UserEditorComponent } from './creators-editors/user-editor/user-editor.component';


@NgModule({
  declarations: [
    SuperAdminLayoutComponent,
    UserAdminComponent,
    PlacesAdminComponent,
    SportsAdminComponent,
    ActivitiesAdminComponent,
    UserCreatorComponent,
    UserEditorComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SuperAdminLayoutRoutingModule,
    SharedModule
  ]
})
export class SuperAdminLayoutModule { }
