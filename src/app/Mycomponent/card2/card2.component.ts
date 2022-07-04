import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/message-service.service';
import { SampleserviceService } from 'src/app/sampleservice.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {

  constructor(private _msgalert: MessageServiceService, private _clickmsg: SampleserviceService) { }

  ngOnInit(): void {
  }
btnclick1(){
 this._msgalert.messageAlert();

//  const _msgalert= new MessageServiceService();
//  _msgalert.messageAlert();
}
clickAlert(){
this._clickmsg.messagealert();
}

}
