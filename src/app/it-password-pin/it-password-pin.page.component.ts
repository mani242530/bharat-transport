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
  selector: 'app-password-pin',
  templateUrl: './it-password-pin.page.component.html',
  styleUrls: ['./it-password-pin.page.component.scss'],
})
export class PasswordPinPageComponent implements OnInit {
  userData;

  PIN: string = '';
  showPinInput: boolean = false;
  pinMessage: string = 'APP.VERIFICATION.OTP_MESSAGE';

  pin: string;
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
  ) {}

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

  pinVerification(pinNumber) {
    this.showProgress = true;
    const mobileNumber = this.appService.signinMobileNumber;
    if (pinNumber.length === 4) {
      this.companysCollection = this.fbstore.collection('companys', (ref) =>
        ref
          .where('mobileNumber', '==', mobileNumber)
          .where('passwordPin', '==', pinNumber)
      );
      this.filteredUser = this.companysCollection.snapshotChanges().pipe(
        map((actions) => {
          return actions.map((action) => {
            const data = action.payload.doc.data() as Company;
            return {
              id: action.payload.doc.id,
              paymentStatus: data.paymentStatus,
              payment_id: data.payment_id,
              accountStatus: data.accountStatus,
              firmActivity: data.firmActivity,
              language: data.language,
              userEntry: data.userEntry,
            };
          });
        })
      );

      this.filteredUser.subscribe((snapshot) => {
        if (snapshot.length === 0) {
          this.showProgress = false;
          this.pinNotVerified = true;
        } else {
          this.showProgress = false;
          this.pinNotVerified = false;
          this.appService.docId = snapshot[0].id;
          this.appService.userSelectedFirmActivity = snapshot[0].firmActivity;

          const userLanguage = snapshot[0].language;
          this.translateService.setDefaultLang(userLanguage);

          if (snapshot[0].userEntry === sharedContansts.default.app.YES) {
            if (
              snapshot[0].paymentStatus === sharedContansts.default.app.PAID
            ) {
              this.toastservice.showToast('Pin verified successfully', 1000);
              this.router.navigate(['select-vehicle']);
            } else {
              this.router.navigate(['payment']);
            }
          } else {
            this.router.navigate(['profile', this.appService.docId]);
          }
        }
      });
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

  verifyPin() {
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

  // gotoNextField(nextElement) {
  //   nextElement.setFocus();
  // }

  // finishFunction() {
  //   alert('otp');
  // }
}
