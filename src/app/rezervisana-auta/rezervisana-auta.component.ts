import { Component, Input, OnInit } from '@angular/core';
import { ICar } from '../shared/models/car';

@Component({
  selector: 'app-rezervisana-auta',
  templateUrl: './rezervisana-auta.component.html',
  styleUrls: ['./rezervisana-auta.component.css']
})
export class RezervisanaAutaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() automobili: ICar[] = [];
}
