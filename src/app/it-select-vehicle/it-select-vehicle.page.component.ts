import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
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
  docId: string;
  vehicleTypes = [
    {
      id: '1',
      name: 'APP.VEHICLE_TYPE.LCV',
      img: 'lcv',
      select: 'LCV'
    },
    {
      id: '2',
      name: 'APP.VEHICLE_TYPE.TRAILER',
      img: 'trailar-truck',
      select: 'Trailer'
    },
    {
      id: '3',
      name: 'APP.VEHICLE_TYPE.TRUCK',
      img: 'taurus-truck',
      select: 'Truck (Taurus)'
    },
    {
      id: '4',
      name: 'APP.VEHICLE_TYPE.OPEN_TRUCK',
      img: 'open-truck',
      select: 'Open Trucks'
    },
    {
      id: '5',
      name: 'APP.VEHICLE_TYPE.PART_LOAD',
      img: 'part-toad',
      select: 'Part Load'
    },
    {
      id: '6',
      name: 'APP.VEHICLE_TYPE.ODC',
      img: 'odc',
      select: 'ODC'
    },
    {
      id: '7',
      name: 'APP.VEHICLE_TYPE.20_FT_CBT',
      img: '20ft-container-cbt',
      select: '20ft Container CBT'
    },
    {
      id: '8',
      name: 'APP.VEHICLE_TYPE.32_FT_SINGLE_EXCEL',
      img: '32ft-container-single-excel',
      select: '32ft Container'
    },
    {
      id: '9',
      name: 'APP.VEHICLE_TYPE.20_FT_IMPORT_EXPORT',
      img: '20ft-container-import-export',
      select: '20ft/40ft Container (Import and Export)'
    },
  ];
  constructor(private appService: AppService, private router: Router, public fbauth: AngularFireAuth) {
    this.docId = this.appService.docId;
  }

  ngOnInit() {}

  selectVehicleType(vehicleType) {
    this.appService.selectedVehicleType = vehicleType.select;
    this.router.navigate(['/home']);
  }

  async doLogout(): Promise<void> {
    await this.fbauth.signOut().then(() => {
      this.appService.selectedLanguage = '';
      this.router.navigate(['splash']);
    });
  }
}
