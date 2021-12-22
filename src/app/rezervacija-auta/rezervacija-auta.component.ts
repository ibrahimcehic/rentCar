import { Component, Input, OnInit } from '@angular/core';
import { ICar } from '../shared/models/car';
import {Modal} from 'bootstrap';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rezervacija-auta',
  templateUrl: './rezervacija-auta.component.html',
  styleUrls: ['./rezervacija-auta.component.css']
})
export class RezervacijaAutaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  @Input() automobili: ICar[] = [];

  @Output() newItemEvent = new EventEmitter<ICar>();
  
  addNewItem(value: ICar) {
    value.status = !value.status;
    this.newItemEvent.emit(value);
  }

  auto: any;

update(auto: ICar, modalElement: any){
  this.auto = {
    id: auto.id,
    marka: auto.marka,
    model: auto.model,
    snaga: auto.snaga,
    gorivo: auto.gorivo,
    mjenjac: auto.mjenjac,
    godina: auto.godina,
    cijena: auto.cijena,
    kilometri: auto.kilometri ,
    slika: auto.slika,
    status: auto.status,
    detalji: auto.detalji
    }
  const modal=new Modal(modalElement);
  modal.show();
  console.log(auto);
  /* let index = this.auta.findIndex(element => element.id == auto.id) */
  
}


}
