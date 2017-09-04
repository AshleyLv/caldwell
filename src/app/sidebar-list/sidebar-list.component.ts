import {Component} from '@angular/core';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.css']
})
export class SidebarListComponent {
  constructor(mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.addSvgIconSetInNamespace('core', '/assets/fonts/Material_Icons.woff2');
  }
}
