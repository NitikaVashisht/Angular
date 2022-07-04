import { Component, OnInit } from '@angular/core';
import { mergeScan } from 'rxjs';
import {MessageServiceService} from '../../message-service.service';
@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
btnclick(){
const msgservice= new MessageServiceService();
msgservice.messageAlert();
}
}
