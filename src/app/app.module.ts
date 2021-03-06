import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'

import { ScrollingModule } from '@angular/cdk/scrolling';

import { 
  MatToolbarModule,  
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
 }
   from '@angular/material';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { VerseDashboardComponent } from './components/verse-dashboard/verse-dashboard.component';
import { SidebarComponent } from './components/general/sidebar/sidebar.component';
import { LoggerService } from './services/utils/logger.service';
import { ConsoleLoggerService } from './services/utils/console-logger.service';
import { AboutComponent } from './components/about/about.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VerseDashboardComponent,
    AboutComponent,
    SidebarComponent
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,    
    MatProgressSpinnerModule,    
    ScrollingModule,
    AppRoutingModule
  ],
  providers: [ { provide: LoggerService, useClass: ConsoleLoggerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
