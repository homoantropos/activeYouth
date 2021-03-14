import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ScheduleComponent } from './schedule/schedule.component';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';
import { SportsPageComponent } from './sports-page/sports-page.component';
import { RatingPageComponent } from './raiting-page/rating-page.component';
import {QuillModule} from 'ngx-quill';


@NgModule({
  declarations: [
    MainLayoutComponent,
    MainPageComponent,
    ScheduleComponent,
    ActivitiesPageComponent,
    SportsPageComponent,
    RatingPageComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MainLayoutRoutingModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        QuillModule
    ]
})
export class MainLayoutModule { }
