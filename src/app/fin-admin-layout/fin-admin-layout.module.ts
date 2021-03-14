import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinAdminLayoutRoutingModule } from './fin-admin-layout-routing.module';
import { FinAdminLayoutComponent } from './fin-admin-layout.component';
import { ExpencesManagerComponent } from './creators-editors/expences-creator/expences-manager.component';


@NgModule({
  declarations: [FinAdminLayoutComponent, ExpencesManagerComponent],
  imports: [
    CommonModule,
    FinAdminLayoutRoutingModule
  ]
})
export class FinAdminLayoutModule { }
