import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    ListComponent,
    MapComponent,
    HeaderComponent
  ],
  exports: [
    ListComponent,
    MapComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
