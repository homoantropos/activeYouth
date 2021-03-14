import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import {LoginPageComponent} from '../admin-layout/login-page/login-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {ActivitiesPageComponent} from './activities-page/activities-page.component';
import {SportsPageComponent} from './sports-page/sports-page.component';
import {RatingPageComponent} from './raiting-page/rating-page.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'schedule', pathMatch: 'full'},
      {path: 'main', component: MainPageComponent},
      {path: 'activities', component: ActivitiesPageComponent},
      {path: 'sports', component: SportsPageComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'rating', component: RatingPageComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
