import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import {LoginPageComponent} from '../admin-layout/login-page/login-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {ActivitiesPageComponent} from './activities-page/activities-page.component';
import {SportsPageComponent} from './sports-page/sports-page.component';
import {RatingPageComponent} from './raiting-page/rating-page.component';
import {AppointmentDetailsComponent} from '../shared/components/appointment-details/appointment-details.component';
import {ActivityDetailsComponent} from '../shared/components/activity-details/activity-details.component';
import {RatingOfStudentsComponent} from './raiting-page/rating-of-students/rating-of-students.component';
import {RatingOfEducationalEntityComponent} from './raiting-page/rating-of-educational-entity/rating-of-educational-entity.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: MainPageComponent},
      {path: 'activities', component: ActivitiesPageComponent},
      {path: 'activities/:id', component: ActivityDetailsComponent},
      {path: 'sports', component: SportsPageComponent},
      {path: 'sports/:id', component: ActivityDetailsComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'schedule/:id', component: AppointmentDetailsComponent},
      {path: 'rating', component: RatingPageComponent, children: [
          {path: 'students', component: RatingOfStudentsComponent},
          {path: 'eduentity', component: RatingOfEducationalEntityComponent}
        ]}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
