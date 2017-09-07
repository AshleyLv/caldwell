import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PMComponent} from './pm/pm.component';
import {
  MdDialogModule,
  MdIconModule,
  MdListModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdToolbarModule,
  MdCardModule
} from '@angular/material';
import {SidebarListComponent} from './sidebar-list/sidebar-list.component';
import { TodolistComponent } from './todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    PMComponent,
    SidebarListComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdToolbarModule,
    MdDialogModule,
    MdSnackBarModule,
    MdListModule,
    MdIconModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


