import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ScheduleDashboardComponent} from './schedule-dashboard/schedule-dashboard.component';
import {AppointmentCreatorComponent} from './creators-editors/appointment-creator/appointment-creator.component';

const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'dashboard', component: ScheduleDashboardComponent},
      {path: 'create', component: AppointmentCreatorComponent}
    ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
