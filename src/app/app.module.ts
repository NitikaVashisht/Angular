import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './Mycomponent/todo-list/todo-list.component';
import { Card1Component } from './Mycomponent/card1/card1.component';
import { Card2Component } from './Mycomponent/card2/card2.component';
import { MessageServiceService } from './message-service.service';
import { SampleserviceService } from './sampleservice.service';
import { HomeComponent } from './Mycomponent/home/home.component';
import { AboutComponent } from './Mycomponent/about/about.component';
import { ProductComponent } from './Mycomponent/product/product.component';
import { LaptopComponent } from './Mycomponent/product/laptop/laptop.component';
import { MobileComponent } from './Mycomponent/product/mobile/mobile.component';
import { ParentComponent } from './Mycomponent/parent/parent.component';


const appRoutes: Routes=[
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  
    {path:'buy-product', component: ParentComponent},

  {path:'product',component: ProductComponent, children:[
    // {path:'', component: ProductComponent},
    {path:'laptop', component: LaptopComponent},
    {path:'mobile', component: MobileComponent}
  ]}
]


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    Card1Component,
    Card2Component,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    LaptopComponent,
    MobileComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MessageServiceService,SampleserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
