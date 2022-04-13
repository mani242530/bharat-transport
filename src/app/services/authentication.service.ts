import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthtenticationService {
  confirmationResult: firebase.auth.ConfirmationResult;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private toastservice: ToastService
  ) {}

  public signInWithPhoneNumber(recaptchaVerifier, phoneNumber) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth
        .signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
        .then((confirmationResult) => {
          this.confirmationResult = confirmationResult;
          resolve(confirmationResult);
        })
        .catch((error) => {
          console.log(error);
          this.toastservice.showToast(
            'We have blocked all requests from this device due to unusual activity and OTP not sent. But dont worry Your data is saved and Please Sign In',
            5000
          );
          reject(
            'We have blocked all requests from this device due to unusual activity. Please try again later and OTP not sent but dont worry your data is saved. Please sign in'
          );
        });
    });
  }
  public async enterVerificationCode(code) {
    return new Promise<any>((resolve, reject) => {
      this.confirmationResult
        .confirm(code)
        .then(async (result) => {
          const user = result.user;
          resolve(user);
        })
        .catch((error) => {
          reject(error.message);
        });
    });
  }
}
