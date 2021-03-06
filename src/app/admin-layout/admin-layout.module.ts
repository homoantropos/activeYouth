import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ScheduleDashboardComponent } from './schedule-dashboard/schedule-dashboard.component';
import { AppointmentCreatorComponent } from './creators-editors/appointment-creator/appointment-creator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ActivitiesDashboardComponent } from './activities-dashboard/activities-dashboard.component';
import { SportsDashboardComponent } from './sports-dashboard/sports-dashboard.component';
import { ResultsDashboardComponent } from './results-dashboard/results-dashboard.component';
import { AppointmentEditorComponent } from './creators-editors/appointment-editor/appointment-editor.component';
import { ActivityCreatorComponent } from './creators-editors/activity-creator/activity-creator.component';
import { ActivityEditorComponent } from './creators-editors/activity-editor/activity-editor.component';
import { ResultsCreatorComponent } from './creators-editors/results-creator/results-creator.component';
import { ResultsEditorComponent } from './creators-editors/results-editor/results-editor.component';
import {QuillModule} from 'ngx-quill';
import { SportsCreatorComponent } from './creators-editors/sports-creator/sports-creator.component';
import {SharedModule} from '../shared/shared.module';
import { StatisticDashboardComponent } from './statistic-dashboard/statistic-dashboard.component';
import {MatRadioModule} from '@angular/material/radio';
import { SportsEditorComponent } from './creators-editors/sports-editor/sports-editor.component';
import { ReportEditorComponent } from './creators-editors/report-editor/report-editor.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TeacherAdminPageComponent } from './teacher-admin-page/teacher-admin-page.component';
import { OrganizatorAdminPageComponent } from './organizator-admin-page/organizator-admin-page.component';
import {AuthGuardService} from './auth/auth-guard.service';
import { ApplicationFormComponent } from './creators-editors/application-form/application-form.component';
import { TeamListComponent } from './team-list/team-list.component';
import { OneResultEditorComponent } from './creators-editors/one-result-editor/one-result-editor.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    ScheduleDashboardComponent,
    AppointmentCreatorComponent,
    ActivitiesDashboardComponent,
    SportsDashboardComponent,
    ResultsDashboardComponent,
    AppointmentEditorComponent,
    ActivityCreatorComponent,
    ActivityEditorComponent,
    ResultsCreatorComponent,
    ResultsEditorComponent,
    SportsCreatorComponent,
    StatisticDashboardComponent,
    SportsEditorComponent,
    ReportEditorComponent,
    CalendarComponent,
    TeacherAdminPageComponent,
    OrganizatorAdminPageComponent,
    ApplicationFormComponent,
    TeamListComponent,
    OneResultEditorComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        AdminLayoutRoutingModule,
        QuillModule,
        SharedModule,
        MatRadioModule,
        MatIconModule
    ],
  providers: [
    AuthGuardService
  ]
})
export class AdminLayoutModule { }
