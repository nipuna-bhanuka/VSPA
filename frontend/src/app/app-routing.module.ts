import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { VehicleCardComponent } from './components/vehicle/vehicle-card/vehicle-card.component';
import { VehicleListComponent } from './components/vehicle/vehicle-list/vehicle-list.component';

const routes: Routes = [
  {path: '' , component : VehicleListComponent },
  {path: 'add-vehicle' , component : AddVehicleComponent },
  {path: 'vehicle-details/:id' , component : VehicleDetailsComponent },
  {path: 'contact-details/:id' , component : ContactDetailsComponent },
  {path: 'rent-vehicle' , component : VehicleListComponent },
  {path: '**' , component : VehicleListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
