import { Component, Input, OnInit } from '@angular/core';
import { ICar } from '../shared/models/car';

@Component({
  selector: 'app-detalji',
  templateUrl: './detalji.component.html',
  styleUrls: ['./detalji.component.css']
})
export class DetaljiComponent implements OnInit {
  @Input() auto!: ICar;
  auto2!:ICar;

  constructor() { }

  ngOnInit(): void {
    this.auto2 = {...this.auto}
  }
}
