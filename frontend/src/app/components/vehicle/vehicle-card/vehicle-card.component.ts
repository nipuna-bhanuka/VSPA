import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent {
  vehicle : any ={
    id : 1,
    type : 'van',
    model : 'mazda',
    price : '3400000'
  }

}
