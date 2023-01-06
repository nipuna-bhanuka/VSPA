import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit{
 vehicleId! : number;

  constructor(private route : ActivatedRoute, private router: Router){}


  ngOnInit(): void {
    this.vehicleId = +this.route.snapshot.params['id'];

    //router link does not instansiate the component if it is on the same route, thats why we use below command
    this.route.params.subscribe(
      (params)=>{
        this.vehicleId = +params['id'];
      }
    )
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSelectNext(){
    this.vehicleId +=1;
    this.router.navigate(['/vehicle-details/',this.vehicleId]);
  }

}
