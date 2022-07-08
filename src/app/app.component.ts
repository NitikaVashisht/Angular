
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tittle = 'my-first-project-nitika';
  firstName = 'Hello';
  propertyBinding = 'Textbox';

  constructor() {
    setTimeout(() => {
      this.tittle = "change tittle";
    }, 5000);
    this.firstName = 'val.string';


  }
  onServer() {
    this.eventBindind = "Something is created";
  }
  custommethod() {
    return ("This is custom method" + this.tittle);
  }
  appstatus: boolean = true;
  // property define used in ternary operator
  Status1 = "Online";
  Status2 = "Offline";
  enable: boolean = true;

  allowme = false;

  eventBindind = "Nothing is created"

}


