import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './Mycomponent/todo-list/todo-list.component';
import { Card1Component } from './Mycomponent/card1/card1.component';
import { Card2Component } from './Mycomponent/card2/card2.component';
import { MessageServiceService } from './message-service.service';
import { SampleserviceService } from './sampleservice.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    Card1Component,
    Card2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MessageServiceService,SampleserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
