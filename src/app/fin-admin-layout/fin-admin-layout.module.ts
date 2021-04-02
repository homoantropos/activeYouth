import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FinAdminLayoutRoutingModule} from './fin-admin-layout-routing.module';
import {FinAdminLayoutComponent} from './fin-admin-layout.component';
import {ExpencesManagerComponent} from './creators-editors/expences-creator/expences-manager.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FinDashboardComponent} from './fin-dashboard/fin-dashboard.component';
import {SharedModule} from '../shared/shared.module';
import {FinLoginPageComponent} from './fin-login-page/fin-login-page.component';


@NgModule({
  declarations: [
    FinAdminLayoutComponent,
    ExpencesManagerComponent,
    FinDashboardComponent,
    FinLoginPageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FinAdminLayoutRoutingModule,
    SharedModule
  ]
})
export class FinAdminLayoutModule {
}
