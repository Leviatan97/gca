import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() dataList: any  = [];
  @Output() dataPerson: EventEmitter<any> = new EventEmitter;
  @Output() idPerson: EventEmitter<any> = new EventEmitter;
  id: any;


  createPerson(data: any ){
    let id = this.dataList.length+1;
    let dataPerson = {
      id: id.toString(),
      name: data.name,
      category: data.category,
      address: data.Address,
      photo: data.photo,
      vehicle: data.vehicle
    }
    this.dataPerson.emit(dataPerson)
  }

  selectPerson(id: any) {
    this.id = id;
    this.idPerson.emit(id)
  }
 
}
