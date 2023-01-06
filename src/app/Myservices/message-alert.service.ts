import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageAlertService {

  constructor() { }

  messagealert(){
    alert("subscribed")
  }
  product={name:"nit",id:"2"}

}
