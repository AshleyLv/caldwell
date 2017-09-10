import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdCardModule,
  MdDialogModule,
  MdIconModule,
  MdListModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdDialogModule,
    MdSnackBarModule,
    MdListModule,
    MdIconModule,
    MdCardModule
  ],
  exports: [
    CommonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdDialogModule,
    MdSnackBarModule,
    MdListModule,
    MdIconModule,
    MdCardModule
  ],
  declarations: []
})
export class SharedModule {
}
