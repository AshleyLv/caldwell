import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlanManagementComponent} from './plan-management/plan-management.component';
import {MdDialogModule, MdSidenavModule, MdSnackBarModule, MdToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PlanManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdToolbarModule,
    MdDialogModule,
    MdSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


