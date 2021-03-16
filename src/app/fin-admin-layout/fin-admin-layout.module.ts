import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinAdminLayoutRoutingModule } from './fin-admin-layout-routing.module';
import { FinAdminLayoutComponent } from './fin-admin-layout.component';
import { ExpencesManagerComponent } from './creators-editors/expences-creator/expences-manager.component';
import { FinLoginComponent } from './fin-login/fin-login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FinDashboardComponent } from './fin-dashboard/fin-dashboard.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    FinAdminLayoutComponent,
    ExpencesManagerComponent,
    FinLoginComponent,
    FinDashboardComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        FinAdminLayoutRoutingModule,
        SharedModule
    ]
})
export class FinAdminLayoutModule { }
