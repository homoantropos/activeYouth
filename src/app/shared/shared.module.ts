import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { SanitizeHTMLPipePipe } from './pipes/sanitize-htmlpipe.pipe';
import { StatisticDetailsComponent } from './components/statistic-details/statistic-details.component';
import { AppointmentFinancingDetailsComponent } from './components/appointment-financing-details/appointment-financing-details.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppointmentDetailsComponent,
    ActivityDetailsComponent,
    AppointmentFinancingDetailsComponent,
    SanitizeHTMLPipePipe,
    StatisticDetailsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    HttpClientModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    SanitizeHTMLPipePipe,
    HttpClientModule
  ],
  providers: []
})
export class SharedModule { }
