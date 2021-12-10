import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Config } from '../models/otp.config';
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
    private router: Router,
    private authtenticationService: AuthtenticationService,
    private toastController: ToastController
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
          console.log(userData);
          const user = userData.user;
          this.otpVerifiedToast();
          this.router.navigate(['/payment']);
          resolve(user);
        })
        .catch((error) => {
          this.errorOtpMsg = false;
          this.otpNotVerified = true;
          this.router.navigate(['/payment']);
          reject(error.message);
        });
    });
  }

  onOtpChange(otp) {
    this.otp = otp;
    if (this.otp.length === 6) {
      this.errorOtpMsg = false;
      this.otpVerified = true;
    }
    //this.verifyOtp(otp);
    // const otpNumber = this.otp.toString()
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
