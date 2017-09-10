import {Component, OnInit} from '@angular/core';
import {SidenavService} from '../sidenav/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenavService.sidenavToggle.emit(null);
  }

}
