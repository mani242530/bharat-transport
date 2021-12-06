import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.servcie';

@Component({
  selector: 'app-select-vehicle',
  templateUrl: './it-select-vehicle.page.component.html',
  styleUrls: ['./it-select-vehicle.page.component.scss'],
})
export class SelectVehiclePageComponent implements OnInit {
  userData;
  user;
  userName;
  vehicleTypes = [
    'LCV',
    'Trailer',
    'Truck (Taurus)',
    'Open Trucks',
    '20ft Container (CBT and Open)',
    '32ft Container Single Excel',
    '20ft Container (Import and Export)',
    '40ft Container (Import and Export)',
    '32ft Container Multi Axle Excel',
  ];
  constructor(private appService: AppService) {}

  ngOnInit() {
    // this.userData = this.dataService.signnedInUser;
    // if (this.userData) {
    //   [this.user] = this.userData && this.userData.map((item) => item);
    //   if (this.user) {
    //     this.userName = this.user.firstName + ' ' + this.user.lastName;
    //   }
    // }
  }

  selectVehicleType(vehicleType) {
    this.appService.selectedVehicleType = vehicleType;
  }
}
