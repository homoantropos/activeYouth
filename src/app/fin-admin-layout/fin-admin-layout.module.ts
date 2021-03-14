import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinAdminLayoutRoutingModule } from './fin-admin-layout-routing.module';
import { FinAdminLayoutComponent } from './fin-admin-layout.component';
import { ExpencesManagerComponent } from './creators-editors/expences-creator/expences-manager.component';
import { FinLoginComponent } from './fin-login/fin-login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FinDashboardComponent } from './fin-dashboard/fin-dashboard.component';


@NgModule({
  declarations: [FinAdminLayoutComponent, ExpencesManagerComponent, FinLoginComponent, FinDashboardComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    FinAdminLayoutRoutingModule
  ]
})
export class FinAdminLayoutModule { }
