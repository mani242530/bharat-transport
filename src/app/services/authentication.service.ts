import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthtenticationService {
  confirmationResult: firebase.auth.ConfirmationResult;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
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
          this.router.navigate(['/verification']);
          reject('SMS not sent');
        });
    });
  }
  public async enterVerificationCode(code) {
    return new Promise<any>((resolve, reject) => {
      this.confirmationResult
        .confirm(code)
        .then(async (result) => {
          console.log(result);
          const user = result.user;
          resolve(user);
        })
        .catch((error) => {
          reject(error.message);
        });
    });
  }
}
