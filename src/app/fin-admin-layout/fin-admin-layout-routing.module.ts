import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FinAdminLayoutComponent} from './fin-admin-layout.component';
import {ExpencesManagerComponent} from './creators-editors/expences-creator/expences-manager.component';
import {FinDashboardComponent} from './fin-dashboard/fin-dashboard.component';
import {AppointmentFinancingDetailsComponent} from '../shared/components/appointment-financing-details/appointment-financing-details.component';
import {FinLoginPageComponent} from './fin-login-page/fin-login-page.component';
import {AuthGuardFinService} from './authFin/auth-guard-fin.service';

const routes: Routes = [
  {
    path: '', component: FinAdminLayoutComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: FinLoginPageComponent},
      {path: 'dashboard', component: FinDashboardComponent, canActivate: [AuthGuardFinService]},
      {path: 'edit/:id', component: ExpencesManagerComponent, canActivate: [AuthGuardFinService]},
      {path: ':id', component: AppointmentFinancingDetailsComponent, canActivate: [AuthGuardFinService]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinAdminLayoutRoutingModule {
}
