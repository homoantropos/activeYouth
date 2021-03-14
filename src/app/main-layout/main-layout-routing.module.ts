import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import {LoginPageComponent} from '../admin-layout/login-page/login-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ScheduleComponent} from './schedule/schedule.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'schedule', pathMatch: 'full'},
      {path: 'main', component: MainPageComponent},
      {path: 'schedule', component: ScheduleComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
