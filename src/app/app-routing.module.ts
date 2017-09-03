import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanManagementComponent} from './plan-management/plan-management.component';

const routes: Routes = [
    { path: '', redirectTo: '/planManagement', pathMatch: 'full' },
  {path: 'planManagement', component: PlanManagementComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
