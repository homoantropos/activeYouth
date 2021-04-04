import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FinAdminLayoutComponent} from './fin-admin-layout.component';
import {ExpencesManagerComponent} from './creators-editors/expences-creator/expences-manager.component';
import {FinDashboardComponent} from './fin-dashboard/fin-dashboard.component';
import {AppointmentFinancingDetailsComponent} from '../shared/components/appointment-financing-details/appointment-financing-details.component';
import {AuthGuardService} from '../admin-layout/auth/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: FinAdminLayoutComponent, canActivate: [AuthGuardService], children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: FinDashboardComponent},
      {path: 'edit/:id', component: ExpencesManagerComponent},
      {path: ':id', component: AppointmentFinancingDetailsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinAdminLayoutRoutingModule {
}
