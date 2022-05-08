import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { Company } from '../models/company';
import { Config } from '../models/otp.config';
import { AppService } from '../services/app.servcie';
import * as sharedContansts from '../constants/shared.constants';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-reset-pin',
  templateUrl: './it-reset-pin.page.component.html',
  styleUrls: ['./it-reset-pin.page.component.scss'],
})
export class ResetPinPageComponent implements OnInit {
  userData;

  PIN: string = '';
  showPinInput: boolean = false;
  pinMessage: string = 'APP.VERIFICATION.OTP_MESSAGE';

  pin: string;
  docId: string;
  showPinComponent = true;
  pinVerified = false;
  errorPinMsg = false;
  pinNotVerified = false;
  showProgress = false;
  userEntryFlag = false;
  authfbObserver;

  filteredUser;

  companysCollection: AngularFirestoreCollection<Company>;

  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config: Config = {
    allowNumbersOnly: true,
    length: 4,
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
    private toastController: ToastController,
    private appService: AppService,
    public fbauth: AngularFireAuth,
    private fbstore: AngularFirestore,
    public translateService: TranslateService,
    private toastservice: ToastService
  ) {
    this.docId = this.appService.docId;
  }

  ngOnInit() {
    this.userEntryFlag =
      this.appService.userEntry === sharedContansts.default.app.NO
        ? true
        : false;
  }

  async pinVerifiedToast() {
    const toast = await this.toastController.create({
      message: 'PIN Verified.',
      duration: 2000,
      position: 'bottom',
      animated: true,
      color: 'Success',
    });
    toast.present();
  }

  async pinVerification(pinNumber) {
    this.showProgress = true;
    const mobileNumber = this.appService.signinMobileNumber;
    let resetPinobj = {
      passwordPin: pinNumber,
      userEntry: 'Yes',
    };
    if (pinNumber.length === 4) {
      Object.keys(resetPinobj).forEach((k) => {
        if (typeof resetPinobj[k] !== 'object') {
          resetPinobj[k] = resetPinobj[k].trim();
        }
      });

      try {
        await this.fbstore
          .doc('companys/' + this.docId)
          .ref.update(resetPinobj)
          .then(() => {
            //setTimeout(() => {
            this.toastservice.showToast('Pin reset successfully', 1000);

            this.router.navigate(['signin']);
            //}, 5000);
          });
      } catch (error) {
        this.toastservice.showToast(error.message, 2000);
      }
    }
  }

  onPinChange(pin) {
    this.pin = pin;
    if (this.pin.length === 4) {
      this.errorPinMsg = false;
      this.pinVerified = true;
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

  resetPin() {
    if (this.pin.length === 4) {
      const pinNumber = this.pin.toString();
      this.pinVerification(pinNumber);
    } else {
      this.pinNotVerified = false;
      this.errorPinMsg = true;
    }
  }

  onConfigChange() {
    this.showPinComponent = false;
    this.pin = null;
    setTimeout(() => {
      this.showPinComponent = true;
    }, 0);
  }
}
