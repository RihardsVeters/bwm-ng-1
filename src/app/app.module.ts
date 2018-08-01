import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RentalModule } from './rental/rental.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { TempComponent } from './temp/temp.component';

const routes: Routes = [
  {path: '', component: RentalComponent},
  {path: 'temp', component: TempComponent} ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RentalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
