import { Component, OnInit } from '@angular/core';
import { ICar } from '../shared/models/car';
import { CarService } from '../shared/services/car.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  auta: ICar[] = [];

  constructor(private service: CarService) { }

  ngOnInit(): void {
    this.service.getCars().subscribe(cars1=> {this.auta = cars1})
  }
  

}
