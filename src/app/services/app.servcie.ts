import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  selectedVehicleType: any;
  selectedLanguage: any;
  docId: string;
  userSelectedFirmActivity: string;
  selectedCompanyId: string;
  mobileNumber: string;
  signinMobileNumber: string;
  paymentStatus: string;
  userEntry: string;

  constructor(
    private toastController: ToastController,
    private fbstore: AngularFirestore
  ) {}

  async otpVerifiedToast() {
    const toast = await this.toastController.create({
      message: 'OTP Verified.',
      duration: 2000,
      position: 'top',
      animated: true,
      color: 'Success',
    });
    toast.present();
  }

  loggedInUser(number) {
    return this.fbstore
      .collection('companys')
      .snapshotChanges()
      .subscribe((data) => {
        const filteredUser = data.filter(
          (result) => result.payload.doc.data()['mobileNumber'] === number
        );
      });
  }
}
