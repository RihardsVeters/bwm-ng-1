import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MapService {

    private apikey = "591dccc4e499ca0001a4c6a498715e3e99d44e3ca197e2f88e300a23";
    private geoCoder;

    public geocodeLocation (location: string): Observable<any> {
        this.geoCoder = new (<any>window).mapfit.Geocoder(this.apikey, "https://api.mapfit.com/v2");

        return new Observable((observer) => {
            this.geoCoder.geocode(location)
            .then(resolve => {
                if (resolve[0]){
                    const geometry = resolve[0].location;
                    observer.next({lat: geometry.lat, lng: geometry.lon });
                }else{
                    observer.error('There was an error with MapFit API')
                }
            }).catch(error => {
                console.log('ERROR: ', error);
            });
        });
    }
}