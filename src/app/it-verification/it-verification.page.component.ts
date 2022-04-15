import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Company } from '../models/company';
import { Config } from '../models/otp.config';
import { AppService } from '../services/app.servcie';
import { AuthtenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-verification',
  templateUrl: './it-verification.page.component.html',
  styleUrls: ['./it-verification.page.component.scss'],
})
export class VerificationPageComponent implements OnInit {
  userData;

  OTP: string = '';
  showOTPInput: boolean = false;
  OTPmessage: string = 'APP.VERIFICATION.OTP_MESSAGE';

  otp: string;
  showOtpComponent = true;
  otpVerified = false;
  errorOtpMsg = false;
  otpNotVerified = false;
  authfbObserver;

  filteredUser;

  companysCollection: AngularFirestoreCollection<Company>;

  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config: Config = {
    allowNumbersOnly: false,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };

  constructor(
    private ngroute: Router,
    private authtenticationService: AuthtenticationService,
    private toastController: ToastController,
    private appService: AppService,
    public fbauth: AngularFireAuth,
    private fbstore: AngularFirestore
  ) {}

  ngOnInit() {
    this.otpSentToast();
  }

  async otpSentToast() {
    const toast = await this.toastController.create({
      message: 'OTP Sent.',
      duration: 2000,
      position: 'bottom',
      animated: true,
      color: 'tertiary',
    });
    toast.present();
  }

  async otpVerifiedToast() {
    const toast = await this.toastController.create({
      message: 'OTP Verified.',
      duration: 2000,
      position: 'bottom',
      animated: true,
      color: 'Success',
    });
    toast.present();
  }

  OtpVerification(res) {
    this.otpVerified = true;
    return new Promise<any>((resolve, reject) => {
      this.authtenticationService
        .enterVerificationCode(res)
        .then(async (userData) => {
          const user = userData;
          console.log(userData);
          this.appService.otpVerifiedToast();
          resolve(user);
          console.log(user);
          this.companysCollection = this.fbstore.collection('companys', (ref) =>
            ref.where('mobileNumber', '==', user.phoneNumber)
          );
          this.filteredUser = this.companysCollection.snapshotChanges().pipe(
            map((actions) => {
              return actions.map((action) => {
                const data = action.payload.doc.data() as Company;
                return {
                  id: action.payload.doc.id,
                  paymentStatus: data.paymentStatus,
                  accountStatus: data.accountStatus,
                  firmActivity: data.firmActivity,
                };
              });
            })
          );
          this.filteredUser.subscribe((snapshot) => {
            if (snapshot.length === 0) {
              this.ngroute.navigate(['signin']);
            } else {
              this.appService.userSelectedFirmActivity =
                snapshot[0].firmActivity;
              if (snapshot[0].paymentStatus === 'Paid') {
                this.ngroute.navigate(['select-vehicle']);
              } else {
                this.ngroute.navigate(['payment']);
              }
            }
          });
        });
    });
  }

  onOtpChange(otp) {
    this.otp = otp;
    if (this.otp.length === 6) {
      this.errorOtpMsg = false;
      this.otpVerified = true;
    }
  }

  setVal(val) {
    this.ngOtpInput.setValue(val);
  }

  toggleDisable() {
    if (this.ngOtpInput.otpForm) {
      if (this.ngOtpInput.otpForm.disabled) {
        this.ngOtpInput.otpForm.enable();
      } else {
        this.ngOtpInput.otpForm.disable();
      }
    }
  }

  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }

  verifyOtp() {
    if (this.otp.length === 6) {
      const otpNumber = this.otp.toString();
      this.OtpVerification(otpNumber);
    } else {
      this.otpNotVerified = false;
      this.errorOtpMsg = true;
    }
  }
}
