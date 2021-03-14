import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinAdminLayoutComponent } from './fin-admin-layout.component';
import {ExpencesManagerComponent} from './creators-editors/expences-creator/expences-manager.component';
import {FinLoginComponent} from './fin-login/fin-login.component';
import {AuthGuardFinService} from './authFin/auth-guard-fin.service';
import {FinDashboardComponent} from './fin-dashboard/fin-dashboard.component';

const routes: Routes = [
  { path: '', component: FinAdminLayoutComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: FinLoginComponent},
      {path: 'dashboard', component: FinDashboardComponent, canActivate: [AuthGuardFinService]},
      {path: 'edit/:id', component: ExpencesManagerComponent, canActivate: [AuthGuardFinService]}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinAdminLayoutRoutingModule { }
