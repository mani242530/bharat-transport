import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
    private authtenticationService: AuthtenticationService
  ) {}

  ngOnInit() {}

  OtpVerification(res) {
    this.otpVerified = true;
      this.router.navigate(['/payment']);
    this.authtenticationService.enterVerificationCode(res).then((userData) => {
      console.log(userData);
      // this.otpVerified = true;
      // this.router.navigate(['/payment']);
    });
  }

  onOtpChange(otp) {
    this.otp = otp;
    console.log(this.otp);
    this.verifyOtp(otp);
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

  verifyOtp(otpval) {
    if (otpval.length === 6) {
      const otpNumber = otpval.toString();
      this.OtpVerification(otpNumber);
    } else {
      this.errorOtpMsg = true;
    }
  }
}
