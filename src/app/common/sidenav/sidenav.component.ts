import {Component, OnInit} from '@angular/core';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {


  constructor(private mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.addSvgIconSetInNamespace('core', '/assets/fonts/Material_Icons.woff2');
  }

  ngOnInit() {
  }

}
