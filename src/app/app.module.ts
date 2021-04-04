import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import {QuillModule} from 'ngx-quill';
import { SharedModule } from './shared/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './admin-layout/auth/auth.interceptor';
import {AuthSuperInterceptor} from './super-admin-layout/authSuper/auth-super.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthSuperInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
