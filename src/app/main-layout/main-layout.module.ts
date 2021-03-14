import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    MainPageComponent,
    ScheduleComponent],
  imports: [
    CommonModule,
    MainLayoutRoutingModule
  ]
})
export class MainLayoutModule { }
