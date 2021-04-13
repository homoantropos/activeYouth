import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {AppointmentDetailsComponent} from './components/appointment-details/appointment-details.component';
import {ActivityDetailsComponent} from './components/activity-details/activity-details.component';
import {SanitizeHTMLPipePipe} from './pipes/sanitize-htmlpipe.pipe';
import {StatisticDetailsComponent} from './components/statistic-details/statistic-details.component';
import {AppointmentFinancingDetailsComponent} from './components/appointment-financing-details/appointment-financing-details.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import {LoaderComponent} from './components/loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppointmentDetailsComponent,
    ActivityDetailsComponent,
    AppointmentFinancingDetailsComponent,
    SanitizeHTMLPipePipe,
    StatisticDetailsComponent,
    LoaderComponent
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
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    NgxPaginationModule,
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
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    SanitizeHTMLPipePipe,
    NgxPaginationModule,
    HttpClientModule,
    LoaderComponent
  ],
  providers: []
})
export class SharedModule {
}
