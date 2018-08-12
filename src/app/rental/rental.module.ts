import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MapModule } from '../common/map/map.module';

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { NgPipesModule } from 'ngx-pipes';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

import { RentalService } from './shared/rental.service';

import { UpperCasePipe } from '../common/pipes/uppercase.pipe';

const routes: Routes = [
  {
    path: 'rentals',
    component: RentalComponent,
    children: [
      {path: '', component: RentalListComponent },
      {path: ':rentalId', component: RentalDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgPipesModule,
    MapModule
  ],
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent,
    UpperCasePipe
  ],
  providers: [
    RentalService
  ]
})
export class RentalModule { }
