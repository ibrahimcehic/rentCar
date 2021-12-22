import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RezervacijaAutaComponent } from './rezervacija-auta/rezervacija-auta.component';
import { RezervisanaAutaComponent } from './rezervisana-auta/rezervisana-auta.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DetaljiComponent } from './detalji/detalji.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RezervacijaAutaComponent,
    RezervisanaAutaComponent,
    DetaljiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'auta_za_rezervaciju', component: RezervacijaAutaComponent},
      {path: 'rezervisana_auta', component: RezervisanaAutaComponent},
      {path: 'welcome', component: HomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
