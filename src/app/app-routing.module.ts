import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PMComponent} from './pm/pm.component';

const routes: Routes = [
  {path: '', redirectTo: '/pm', pathMatch: 'full'},
  {path: 'pm', component: PMComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
