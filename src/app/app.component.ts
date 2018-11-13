import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  exportNum = '0';

  emitSendNum(num) {
    this.exportNum = num;
  }
  constructor() {
}


}
