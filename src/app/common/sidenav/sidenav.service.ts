import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class SidenavService {
  @Output() sidenavToggle = new EventEmitter();

  constructor() {
  }

}
