
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

  onCart() {
    this.cartInfo = "Added tour cart";
  }

  cartInfo: string = "";
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

  onClick(event: any) {
    console.log(event.target.value);
  }

  onPhone(event: any) {
    this.phoneclicked = (event.target.value + " is clicked");
  }
  // onLaptop(){
  //   this.plaptopclicked = "laptop is clicked";
  // }
  phoneclicked: string = "";
  plaptopclicked: string = "";

  onCart1(inputinfo1: any) {
    console.log(inputinfo1.value);
    console.log(inputinfo1.name)
  }



  //  onCart1(my:any){
  //   console.log(my.value);
  //   console.log(my.name)
  //    }

  dataBinding: string = "Two Way Binding";


  option: boolean = false;
  onOption() {
    this.option = true;
  }
  product = [
    { proimg: 'https://i.postimg.cc/WpBc133P/winter-blue-pink-gradient-background-vector-53876-117276.webp', name: 'laptop', price: '1000', id: '1', },
    { proimg: 'https://i.postimg.cc/WpBc133P/winter-blue-pink-gradient-background-vector-53876-117276.webp', name: 'laptop1', price: '2000', id: '2', },
    { proimg: 'https://i.postimg.cc/4NysmMvz/8b56ffb305d960f5-800x800ar.png', name: 'laptop2', price: '3000', id: '3', },
    { proimg: 'https://i.postimg.cc/WpBc133P/winter-blue-pink-gradient-background-vector-53876-117276.webp', name: 'laptop3', price: '4000', id: '4', }
  ]





  userArray= [];
  // onCreate(inputValue1:any){
  //   //  console.log(inputValue1.value) ;
  //   this.userArray.push({
  //   name.inputValue1.value
  //   })
  //     }
}
