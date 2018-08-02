import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RentalService {

  constructor() { }
  private rentals: any[] = [{
    id: 1,
    title: 'Central Apratment',
    city: 'New York',
    street: '4th Street',
    category: 'apartment',
    image: 'http://via.placeholder.com/350x250',
    bedroom: 2,
    description: 'Very nice apartment',
    dailyRate: 130,
    shared: false,
    createdAt: '23/02/2015'
  },
  {
    id: 2,
    title: 'Quiet Place',
    city: 'Świtezianka',
    street: 'Kwiaowa',
    category: 'house',
    image: 'http://via.placeholder.com/350x250',
    bedroom: 3,
    description: 'House with mountain view',
    dailyRate: 50,
    shared: true,
    createdAt: '28/12/2017'
  },
  {
    id: 3,
    title: 'Mutt Flat',
    city: 'Stockholm',
    street: 'Ugnbruck',
    category: 'condo',
    image: 'http://via.placeholder.com/350x250',
    bedroom: 1,
    description: 'Great flat in the centre',
    dailyRate: 86,
    shared: false,
    createdAt: '04/08/2018'
  },
  {
    id: 4,
    title: 'Great luxury villa',
    city: 'Copenhagen',
    street: 'Frumonr',
    category: 'villa',
    image: 'http://via.placeholder.com/350x250',
    bedroom: 5,
    description: 'Great house with a pool over the sea',
    dailyRate: 290,
    shared: false,
    createdAt: '15/03/2016'
  }];

  public getRentals(): any {
    const rentalObservable = new Observable((observer) => {

      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);

      setTimeout(() => {
        observer.error('I AM ERROR!');
      }, 2000);

      setTimeout(() => {
        observer.complete();
      }, 3000);
    });
    return rentalObservable;
  }
}
