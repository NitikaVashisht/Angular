import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleserviceService {

  constructor() { 



  }
  messagealert(){
    alert("This is sevice click");
  }
}
