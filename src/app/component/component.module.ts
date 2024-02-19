import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';




@NgModule({
  declarations: [
    ListComponent,
    MapComponent,
    HeaderComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    ModalComponent
  ],
  exports: [
    ListComponent,
    MapComponent,
    HeaderComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ]
})
export class ComponentModule { }
