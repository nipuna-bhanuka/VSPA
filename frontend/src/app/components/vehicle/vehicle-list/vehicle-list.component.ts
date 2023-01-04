import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IVehicle } from 'src/app/interface/i-vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit{
  vehicles: any;

  constructor(private vehicleservice: VehicleService){}


  ngOnInit(): void{
    this.getList();
  }

  getList(){
    this.vehicleservice.getAllVehicles().subscribe(
      data=>{
        this.vehicles = data;
        console.log(data);
      },error=>{
        console.log(error);
      }
    );
  }
}
