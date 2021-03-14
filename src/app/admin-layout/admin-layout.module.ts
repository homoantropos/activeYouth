import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ScheduleDashboardComponent } from './schedule-dashboard/schedule-dashboard.component';
import { AppointmentCreatorComponent } from './creators-editors/appointment-creator/appointment-creator.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminPageComponent,
    LoginPageComponent,
    ScheduleDashboardComponent,
    AppointmentCreatorComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminLayoutRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AdminLayoutModule { }
