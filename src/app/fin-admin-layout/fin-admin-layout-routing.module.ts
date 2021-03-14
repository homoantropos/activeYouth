import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinAdminLayoutComponent } from './fin-admin-layout.component';
import {ExpencesManagerComponent} from './creators-editors/expences-creator/expences-manager.component';

const routes: Routes = [
  { path: '', component: FinAdminLayoutComponent, children: [
      {path: 'edit/:id', component: ExpencesManagerComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinAdminLayoutRoutingModule { }
