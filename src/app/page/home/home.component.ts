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
  isLoading: boolean = false;

  constructor(private gcaService: GcaServiceService) {}

  ngOnInit(): void {
    this.getList()
  }

  optionSelect(data: any) {
    this.option = data;
  }

  getList() {
    this.isLoading = true;
    this.gcaService.getSalesman().subscribe((data: any) => {
      this.isLoading = false;
      this.list = data;
      this.markers = this.getCoordinates(data)
    },(error) => {
      this.isLoading = false;
    })
  }

  createPerson(data: any) {
    this.isLoading = true;
    this.gcaService.createSalesman(data).subscribe((data: any) => {
      this.isLoading = false;
      console.log(data)
    },(error: any) => {
      this.isLoading = false;
    })
  }

  getPerson(id: any) {
    this.isLoading = true;
    this.gcaService.getPerson(id).subscribe((data: any) => {
      this.isLoading = false;
      let coord = {
        lat: data.coordinates.latitude,
        lng: data.coordinates.longitude,
        icon: 'assets/img/pinselected.svg'
      }
      this.markers = []
      this.markers.push(coord)
    },(error: any) =>{
      this.isLoading = false;
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
