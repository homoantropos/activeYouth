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
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import {LoaderComponent} from './components/loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { AlertComponent } from './alert/alert.component';
import { DeletionConfirmerComponent } from './components/deletion-confirmer/deletion-confirmer.component';

@NgModule({
  declarations: [
    AppointmentDetailsComponent,
    ActivityDetailsComponent,
    AppointmentFinancingDetailsComponent,
    SanitizeHTMLPipePipe,
    StatisticDetailsComponent,
    LoaderComponent,
    AlertComponent,
    DeletionConfirmerComponent
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
    MatNativeDateModule,
    MatRadioModule,
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
        MatNativeDateModule,
        MatRadioModule,
        SanitizeHTMLPipePipe,
        NgxPaginationModule,
        HttpClientModule,
        LoaderComponent,
        AlertComponent,
        DeletionConfirmerComponent
    ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ua-UA'},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  ]
})
export class SharedModule {
}
