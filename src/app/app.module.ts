import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'

import { ScrollingModule } from '@angular/cdk/scrolling';

import { JwtInterceptor } from './helpers/jwt.interceptor'
import { ErrorInterceptor } from './helpers/error.interceptor';

import { CachingInterceptor } from './cache/caching-interceptor.service';

import {
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatSidenavModule,
  MatMenuModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatInputModule,
  MatInput
  

}
  from '@angular/material';
import { NavbarComponent } from './components/general/navbar/navbar.component';

import { SidebarComponent } from './components/general/sidebar/sidebar.component';

import { AboutComponent } from './components/about/about.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { ReadingCardComponent } from './components/general/reading-card/reading-card.component';
import { GraceDashboardComponent } from './components/grace-dashboard/grace-dashboard.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { ReadingsListComponent } from './components/readings-list/readings-list.component';
import { PushNotificationService } from './services/push-notification.service';
import { LoginComponent } from './components/general/login/login.component';
import { RegistrationComponent } from './components/general/registration/registration.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SidebarComponent,
    ReadingCardComponent,
    GraceDashboardComponent,
    ReferenceComponent,
    ReadingsListComponent,
    LoginComponent,
    RegistrationComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatMenuModule,
    MatSnackBarModule,
    ScrollingModule,
    AppRoutingModule,
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }, 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },    
    PushNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
