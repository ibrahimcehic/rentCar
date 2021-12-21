import { Component, Input, OnInit } from '@angular/core';
import { ICar } from '../shared/models/car';

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

rezervisanaAuta: ICar[] = [];

}
