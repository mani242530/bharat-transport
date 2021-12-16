import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { AuthtenticationService } from '../services/authentication.service';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppService } from '../services/app.servcie';

@Component({
  selector: 'app-signin',
  templateUrl: './it-signin.page.component.html',
  styleUrls: ['./it-signin.page.component.scss'],
})
export class SignInPageComponent implements OnInit {
  OTP: string = '';
  Code: any;
  PhoneNo: any;
  CountryCode: any = '+91';
  showOTPInput: boolean = false;
  OTPmessage: string =
    'An OTP is sent to your number. You should receive it in 15 s';
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  confirmationResult: any;

  showProgress = false;
  invalidMobilenumber = false;
  mobileNumberNotFound = false;

  signInForm: FormGroup;
  @ViewChild('signIn') signIn: FormGroupDirective;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private authtenticationService: AuthtenticationService,
    public fbauth: AngularFireAuth,
    private fbstore: AngularFirestore,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.signInForm = new FormGroup({
      mobileNumber: new FormControl('', Validators.required),
    });
  }

  async ionViewDidEnter() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: (response) => {},
        'expired-callback': () => {},
      }
    );
  }

  ionViewDidLoad() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: (response) => {},
        'expired-callback': () => {},
      }
    );
  }

  // Button event after the nmber is entered and button is clicked

  signinWithPhoneNumber(formvalue) {
    this.showProgress = true;
    if (formvalue.mobileNumber.length === 10) {
      return new Promise<any>((resolve, reject) => {
        this.mobileNumberNotFound = false;
        const mobile = this.CountryCode + formvalue.mobileNumber;
        const loggedInUser = this.appService.loggedInUser(mobile);

        console.log(loggedInUser);

        if (loggedInUser) {
          this.authtenticationService
            .signInWithPhoneNumber(
              this.recaptchaVerifier,
              this.CountryCode + formvalue.mobileNumber
            )
            .then((success) => {
              this.showProgress = false;
              this.invalidMobilenumber = false;
              const authfbObserver = this.fbauth.authState.subscribe((user) => {
                console.log(user);
                // if (user) {
                this.mobileNumberNotFound = false;
                this.router.navigate(['/verification']);
                resolve(success);
                // } else {
                //   this.mobileNumberNotFound = false;
                // }
              });
            })
            .catch((error) => {
              this.showProgress = false;
              this.mobileNumberNotFound = false;
              this.invalidMobilenumber = true;
              reject(error);
            });
        } else {
          this.mobileNumberNotFound = true;
          console.log('Mobile number not found in db');
        }
        // });
      });
    }
  }
}
