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
  tryagain: string;
  authfbObserver;

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
    const mobileNumber = this.CountryCode + formvalue.mobileNumber
    if (formvalue.mobileNumber.length === 10) {
      this.authfbObserver = this.fbauth.authState.subscribe((user) => {
        // if (user) {
          this.fbstore
            .collection('companys')
            .snapshotChanges()
            .subscribe((data) => {
              const filteredUser = data.filter(
                (result) =>
                  result.payload.doc.data()['mobileNumber'] === mobileNumber
              );
              if(filteredUser.length > 0) {
                console.log(filteredUser[0].payload.doc.data());
                if (filteredUser[0].payload.doc.data()) {
                  this.appService.docId = filteredUser[0].payload.doc.id;
                  this.appService.userSelectedFirmActivity = filteredUser[0].payload.doc.data()['firmActivity'];
                  console.log(this.appService.userSelectedFirmActivity);
                  console.log(filteredUser[0].payload.doc.id);
                  if (
                    filteredUser[0].payload.doc.data()['paymentStatus'] === 'PAID'
                  ) {
                    console.log('user did pay');
                    this.showProgress = false;
                    this.mobileNumberNotFound = false;
                   
                    this.router.navigate(['/select-vehicle']);
                  } else {
                    console.log('user did not pay');
                    this.showProgress = false;
                    this.mobileNumberNotFound = false;
                    this.router.navigate(['/payment']);
                  }

                } else {
                  this.showProgress = false;
                  this.mobileNumberNotFound = true;
                  console.log('user not found in db');
                }
              } else {
                this.showProgress = false;
                this.mobileNumberNotFound = true;
                console.log('user not found in db');
              }
              
            });
      });
    }
  }
}
