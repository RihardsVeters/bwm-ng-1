import { Component, OnInit, Input } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-bwm-map',
  templateUrl: './map.component.html',
  styleUrls: [
    './map.component.scss'
    ]
})
export class MapComponent implements OnInit {

  @Input() location: string;

  lat: number = 51.678418;
  lng: number = 7.809007;
  
  private mapfit;
  private mapView;

  constructor(private mapService: MapService) {
   }

  ngOnInit() {
  this.mapfit = (<any>window).mapfit;
  this.mapView = this.mapfit.MapView('map-fit', {theme:'night'});
  this.mapReadyHandler();
  }

  mapReadyHandler(){
    this.mapService.geocodeLocation(this.location).subscribe(
      (coordinates) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
        let position = this.mapfit.LatLng([this.lat,this.lng]);
        let myMarker = this.mapfit.Marker(position);
        this.mapView.addMarker(myMarker);
        this.mapView.setCenter(position);  //set center on the geocoded marker's position
        this.mapView.setZoom(17);
      }); 
    
  }


}
