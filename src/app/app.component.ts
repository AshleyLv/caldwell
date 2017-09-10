import {Component, ViewChild} from '@angular/core';
import {MdSidenav} from '@angular/material';
import {SidenavService} from './common/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private sidenavService: SidenavService) {
    this.sidenavService.sidenavToggle.subscribe(() => this.sidenav.toggle());
  }
}
