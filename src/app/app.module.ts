import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MdSidenavModule, MdToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlanManagementComponent} from './plan-management/plan-management.component';
import {SidenavComponent} from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanManagementComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdSidenavModule,
    BrowserAnimationsModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
