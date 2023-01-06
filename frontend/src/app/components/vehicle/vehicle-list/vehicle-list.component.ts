import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVehicle } from 'src/app/interface/iVehicle';
import { VehicleService } from 'src/app/services/vehicle.service';


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit{
  vehicles: any;
  SellRent =1;

  constructor(private route : ActivatedRoute ,private vehicleservice: VehicleService){}


  ngOnInit(): void{
    this.getList();
  }

  getList(){
    console.log(this.route.snapshot.url.toString());
    if(this.route.snapshot.url.toString()){
      this.SellRent =2;
    }
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
