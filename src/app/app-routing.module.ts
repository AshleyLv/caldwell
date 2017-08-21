import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { PlanManagementComponent } from './plan-management/plan-management.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
    { path: '', redirectTo: '/planManagement', pathMatch: 'full' },
    { path: 'planManagement',  component: PlanManagementComponent },
    { path: 'sideBar',  component: SidenavComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}