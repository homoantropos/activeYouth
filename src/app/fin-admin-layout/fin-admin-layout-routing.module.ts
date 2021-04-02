import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinAdminLayoutComponent } from './fin-admin-layout.component';
import {ExpencesManagerComponent} from './creators-editors/expences-creator/expences-manager.component';
import {FinDashboardComponent} from './fin-dashboard/fin-dashboard.component';
import {AppointmentFinancingDetailsComponent} from '../shared/components/appointment-financing-details/appointment-financing-details.component';
import {AuthGuardService} from '../shared/auth/auth-guard.service';
import {LoginPageComponent} from '../admin-layout/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: FinAdminLayoutComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'dashboard', component: FinDashboardComponent, canActivate: [AuthGuardService]},
      {path: 'edit/:id', component: ExpencesManagerComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: AppointmentFinancingDetailsComponent},
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinAdminLayoutRoutingModule { }
