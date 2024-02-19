import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  center: google.maps.LatLngLiteral = { lat: 4.700798, lng: -74.061767 };
  zoom = 12;
  @Input() markers!: any[];
  map!: google.maps.Map;

  infoWindowData = [
    { title: 'Ubicación 1', description: 'Descripción de la ubicación 1' },
    { title: 'Ubicación 2', description: 'Descripción de la ubicación 2' },
    { title: 'Ubicación 3', description: 'Descripción de la ubicación 3' }
    // Agrega más datos según tus necesidades
  ];

  // Método para abrir la ventana de información
  openInfoWindow(markerIndex: number) {
    console.log("Prueba")
    // const infoWindow = new google.maps.InfoWindow({
    //   content: `<div><h2>${this.infoWindowData[markerIndex].title}</h2><p>${this.infoWindowData[markerIndex].description}</p></div>`
    // });
    // infoWindow.open(this.map, this.markers[markerIndex]);
  }
}
