
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
    // this is used to call property
    this.eventBindind = "Something is created";
  }
  
  onCart(){
    this.cartInfo = "Added tour cart";
  }

  cartInfo:string = "";
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

  onClick(event: any){
    console.log(event.target.value);
  }
  
  onPhone(event: any){
    this.phoneclicked = (event.target.value  +  " is clicked");
  }
  // onLaptop(){
  //   this.plaptopclicked = "laptop is clicked";
  // }
  phoneclicked:string = "";
  plaptopclicked:string = "";

  onCart1(inputinfo:any){
    console.log(inputinfo.value);
    console.log(inputinfo.value)
     }



    //  onCart1(my:any){
    //   console.log(my.value);
    //   console.log(my.name)
    //    }

    dataBinding:string= "Two Way Binding";


    option:boolean = false;
    onOption(){
      this.option= true;
    }
}
