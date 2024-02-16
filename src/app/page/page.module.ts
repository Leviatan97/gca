import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../component/component.module';
import { HomeComponent } from './home/home.component';
import { PageRoutingModule } from './page-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    PageRoutingModule
  ]
})
export class PageModule { }
