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


@NgModule({
  declarations: [
    MainLayoutComponent,
    MainPageComponent,
    ScheduleComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MainLayoutRoutingModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class MainLayoutModule { }
