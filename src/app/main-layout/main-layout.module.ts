import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ScheduleComponent } from './schedule/schedule.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';
import { SportsPageComponent } from './sports-page/sports-page.component';
import { RatingPageComponent } from './raiting-page/rating-page.component';
import {QuillModule} from 'ngx-quill';
import {SharedModule} from '../shared/shared.module';
import { RatingOfStudentsComponent } from './raiting-page/rating-of-students/rating-of-students.component';
import { RatingOfEducationalEntityComponent } from './raiting-page/rating-of-educational-entity/rating-of-educational-entity.component';
import { TeachersPageComponent } from './teachers-page/teachers-page.component';
import { OrganizatorsPageComponent } from './organizators-page/organizators-page.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    MainPageComponent,
    ScheduleComponent,
    ActivitiesPageComponent,
    SportsPageComponent,
    RatingPageComponent,
    RatingOfStudentsComponent,
    RatingOfEducationalEntityComponent,
    TeachersPageComponent,
    OrganizatorsPageComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MainLayoutRoutingModule,
        QuillModule.forRoot(),
        SharedModule
    ]
})
export class MainLayoutModule { }
