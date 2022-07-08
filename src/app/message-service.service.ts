import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {


  constructor() { }
  messageAlert() {
    alert("This is Alert Messagesssssss.");
  }

  product = "laptop"
}
