import { Component, Input } from '@angular/core';
import { IVehicle } from 'src/app/interface/iVehicle';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent {
  @Input() vehicle!: IVehicle;

}
