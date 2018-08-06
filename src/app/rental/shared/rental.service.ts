import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Rental } from './rental.model'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class RentalService {

  constructor(private http: HttpClient) { }

  public getRentalById(rentalId: string): Observable<any> {
    return this.http.get('/api/v1/rentals/' + rentalId);
  }
//below could also be Observable<any> and then type for 'this' does not need to be defined - like above
  public getRentals(): Observable<Rental[]> {
    return <Observable<Rental[]>>this.http.get('/api/v1/rentals');
  }
}
