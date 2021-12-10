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
    'APP.VEHICLE_TYPE.LCV',
    'APP.VEHICLE_TYPE.TRAILER',
    'APP.VEHICLE_TYPE.TRUCK',
    'APP.VEHICLE_TYPE.OPEN_TRUCK',
    'APP.VEHICLE_TYPE.20_FT_CBT',
    'APP.VEHICLE_TYPE.32_FT_SINGLE_EXCEL',
    'APP.VEHICLE_TYPE.20_FT_IMPORT_EXPORT',
    'APP.VEHICLE_TYPE.40_FT_IMPORT_EXPORT',
    'APP.VEHICLE_TYPE.32_FT_MULTI_AXLE',
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
