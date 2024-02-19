import { Component, OnInit } from '@angular/core';
import { GcaServiceService } from 'src/app/service/gca-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  option: any = 'Home';
  list: any = []
  markers: any[] = []; 

  constructor(private gcaService: GcaServiceService) {}

  ngOnInit(): void {
    this.getList()
  }

  optionSelect(data: any) {
    this.option = data;
  }

  getList() {
    this.gcaService.getSalesman().subscribe((data: any) => {
      this.list = data;
      this.markers = this.getCoordinates(data)
    })
  }

  createPerson(data: any) {
    this.gcaService.createSalesman(data).subscribe((data: any) => {
      console.log(data)
    })
  }

  getPerson(id: any) {
    this.gcaService.getPerson(id).subscribe((data: any) => {
      let coord = {
        lat: data.coordinates.latitude,
        lng: data.coordinates.longitude,
        icon: 'assets/img/pinselected.svg'
      }
      this.markers = []
      this.markers.push(coord)
    })
  }

  getCoordinates(data: any) {
    return data.map((dta: any) => {
      return {
        lat: dta.coordinates.latitude,
        lng: dta.coordinates.longitude,
        icon: 'assets/img/pinselected.svg'
      }
    })
  }
}
