import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IVehicle } from '../interface/iVehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {


  constructor(private http : HttpClient) { }

  // getAllVehicles() : Observable<IVehicle[]>{
  //   return this.http.get('data/vehicles.json').pipe(
  //     map(data=>{
  //       const vehiclesArray: Array<IVehicle> = [];
  //       for(const id in data){
  //         if(data.hasOwnProperty(id)){
  //           vehiclesArray.push(data[id]) ;
  //         }
  //       }

  //       return vehiclesArray;
  //     })
  //   );
  // }

  getAllVehicles() {
    return this.http.get('data/vehicles.json');
  }
}
