import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PMComponent} from './pm/pm.component';
import {CommonModule} from './common/common.module';
import {SidenavService} from './common/sidenav/sidenav.service';
import {CoreModule} from './core/core.module';
import {TodolistComponent} from './todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    PMComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    CoreModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }


