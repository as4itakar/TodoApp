import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  sideState: boolean = false

  constructor() { }

  changeSideState(){
    this.sideState = !this.sideState
  }
}
