import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICar } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  url = "./assets/car.json"
  constructor(public http:HttpClient) { }
  getCars(): Observable<ICar[]>{
    return this.http.get<ICar[]>(this.url)
  }
}
