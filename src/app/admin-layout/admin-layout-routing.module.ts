import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ScheduleDashboardComponent} from './schedule-dashboard/schedule-dashboard.component';
import {AppointmentCreatorComponent} from './creators-editors/appointment-creator/appointment-creator.component';
import {ActivitiesDashboardComponent} from './activities-dashboard/activities-dashboard.component';
import {SportsDashboardComponent} from './sports-dashboard/sports-dashboard.component';
import {ResultsDashboardComponent} from './results-dashboard/results-dashboard.component';
import {AppointmentEditorComponent} from './creators-editors/appointment-editor/appointment-editor.component';
import {ActivityCreatorComponent} from './creators-editors/activity-creator/activity-creator.component';
import {ActivityEditorComponent} from './creators-editors/activity-editor/activity-editor.component';
import {ResultsCreatorComponent} from './creators-editors/results-creator/results-creator.component';
import {ResultsEditorComponent} from './creators-editors/results-editor/results-editor.component';
import {AuthGuardService} from '../shared/auth/auth-guard.service';
import {SportsCreatorComponent} from './creators-editors/sports-creator/sports-creator.component';
import {StatisticDashboardComponent} from './statistic-dashboard/statistic-dashboard.component';
import {ActivityDetailsComponent} from '../shared/components/activity-details/activity-details.component';
import {AppointmentDetailsComponent} from '../shared/components/appointment-details/appointment-details.component';
import {StatisticDetailsComponent} from '../shared/components/statistic-details/statistic-details.component';

const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'statistic', canActivate: [AuthGuardService], children: [
          {path: '', component: StatisticDashboardComponent},
          {path: ':id', component: StatisticDetailsComponent}
        ]},
      {path: 'activities', canActivate: [AuthGuardService], children: [
          {path: '', component: ActivitiesDashboardComponent},
          {path: 'create', component: ActivityCreatorComponent},
          {path: 'edit/:id', component: ActivityEditorComponent},
          {path: ':id', component: ActivityDetailsComponent}
        ]},
      {path: 'sports', canActivate: [AuthGuardService], children: [
          {path: '', component: SportsDashboardComponent},
          {path: 'create', component: SportsCreatorComponent},
          {path: 'edit/:id', component: ActivityEditorComponent},
          {path: ':id', component: ActivityDetailsComponent}
        ]},
      {path: 'schedule', canActivate: [AuthGuardService], children: [
          {path: '', component: ScheduleDashboardComponent},
          {path: 'create', component: AppointmentCreatorComponent},
          {path: 'edit/:id', component: AppointmentEditorComponent},
          {path: ':id', component: AppointmentDetailsComponent}
        ]},
      {path: 'rating', canActivate: [AuthGuardService], children: [
          {path: '', component: ResultsDashboardComponent},
          {path: 'create', component: ResultsCreatorComponent},
          {path: 'edit/:id', component: ResultsEditorComponent}
        ]}
    ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
