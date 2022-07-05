
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tittle = 'my-first-project-nitika';
 firstName='';

constructor(){
  setTimeout(() => {
this.tittle="change tittle";
  },5000);
  this.firstName='val.string';
  }
 
  custommethod(){
    return("This is custom method"  +  this.tittle);
  }
  appstatus:boolean= false;
  Status1="Online" ;
  Status2= "Offline";

}


