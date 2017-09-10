import {NgModule} from '@angular/core';
import {SidenavComponent} from './sidenav/sidenav.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent,
    SharedModule
  ]
})
export class CommonModule {
}
