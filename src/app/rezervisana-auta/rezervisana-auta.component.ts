import { Component, Input, OnInit } from '@angular/core';
import { ICar } from '../shared/models/car';
import { Output, EventEmitter } from '@angular/core';
import {Modal} from 'bootstrap';

@Component({
  selector: 'app-rezervisana-auta',
  templateUrl: './rezervisana-auta.component.html',
  styleUrls: ['./rezervisana-auta.component.css']
})
export class RezervisanaAutaComponent implements OnInit {

  auto: any;

  constructor() { }

  ngOnInit(): void {
  }

  @Input() automobili: ICar[] = [];
  @Output() newItemEvent = new EventEmitter<ICar>();
  
  addNewItem(value: ICar) {
    value.status = !value.status;
    this.newItemEvent.emit(value);
  }

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
