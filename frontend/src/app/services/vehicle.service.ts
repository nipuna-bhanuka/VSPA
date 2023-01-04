import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IVehicle } from '../interface/i-vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http : HttpClient) { }

  // getAllVehicles() : Observable<IVehicle[]>{
  //   return this.http.get('data/vehicles.json').pipe(
  //     map(data=>{
  //       const vehicleArray: Array<IVehicle> = [];
  //       for(let id in data){
  //         if(data.hasOwnProperty(id)){
  //           vehicleArray.push(data[id]);
  //         }
  //       }
  //       return vehicleArray;
  //     })
  //   );
  // }

  getAllVehicles(){
    return this.http.get('data/vehicles.json');
  }
}
