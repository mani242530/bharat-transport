import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  selectedVehicleType: any;
  selectedLanguage: any;

  constructor() {}
}
