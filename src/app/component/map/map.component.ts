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
  
}
