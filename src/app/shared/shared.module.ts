import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CollapseModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule
  ],
  exports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule {
}
