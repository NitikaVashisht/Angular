import { Component, OnInit } from '@angular/core';
import { MessageAlertService } from '../Myservices/message-alert.service';
import studentData  from '../student.json';

interface data{
id:number;
email:string;
name:string;
gender:string;
}

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {

  constructor(private _msgservice:MessageAlertService) { 


  }
 product:any;
  ngOnInit(): void {
    this.product=this._msgservice.product;
  }
  students: data[]= studentData;
  btnclick(){
    this._msgservice.messagealert();
  }
}
