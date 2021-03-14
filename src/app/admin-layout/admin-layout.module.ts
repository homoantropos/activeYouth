import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ScheduleDashboardComponent } from './schedule-dashboard/schedule-dashboard.component';
import { AppointmentCreatorComponent } from './creators-editors/appointment-creator/appointment-creator.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { ActivitiesDashboardComponent } from './activities-dashboard/activities-dashboard.component';
import { SportsDashboardComponent } from './sports-dashboard/sports-dashboard.component';
import { ResultsDashboardComponent } from './results-dashboard/results-dashboard.component';
import { AppointmentEditorComponent } from './creators-editors/appointment-editor/appointment-editor.component';
import { ActivityCreatorComponent } from './creators-editors/activity-creator/activity-creator.component';
import { ActivityEditorComponent } from './creators-editors/activity-editor/activity-editor.component';
import { ResultsCreatorComponent } from './creators-editors/results-creator/results-creator.component';
import { ResultsEditorComponent } from './creators-editors/results-editor/results-editor.component';


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
    ResultsEditorComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        AdminLayoutRoutingModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule
    ]
})
export class AdminLayoutModule { }
