import { Component, OnInit } from '@angular/core';
 import{ list } from "../../Todo";
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todos:list[];
  constructor() { 
  
 this.todos =[
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

  ngOnInit(): void {
  }

}
