import { Component, OnInit } from '@angular/core';
 import{ list } from "../../Todo";
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todoss:list[];
  constructor() { 
  
    this.todoss =[
    {
      sno:1,
      title:"listing",
      desc:"fanccccccccccccccccc"

},
{
  sno:2,
  title:"listing1",
  desc:"fan1"

},
{
  sno:3,
  title:"listing3",
  desc:"fan3"

}
 ]


  }

mypro:boolean=true;
mystyle1:string="15px"
mystyle2:string="5px"
isActive:boolean=false;

// object for property wih array
multiclasses ={
class1:true,
class2:true,
class3:true
}

multistyle ={
  'background': 'black',
     'border': '1px solid #fff', 'padding': '10px', 'color':'#fff'
}
  ngOnInit(): void {
  }

}
