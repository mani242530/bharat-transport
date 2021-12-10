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

  signInForm: FormGroup;
  @ViewChild('signIn') signIn: FormGroupDirective;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private authtenticationService: AuthtenticationService,
    public fbauth: AngularFireAuth,
    private fbstore: AngularFirestore
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
    if (formvalue.mobileNumber) {
      this.authtenticationService
        .signInWithPhoneNumber(
          this.recaptchaVerifier,
          this.CountryCode + formvalue.mobileNumber
        )
        .then((success) => {
          this.showProgress = false;
          const authfbObserver = this.fbauth.authState.subscribe((user) => {
            console.log(user);
            if (user) {
              this.fbstore
                .collection('companys')
                .snapshotChanges()
                .subscribe((data) => {
                  const filteredUser = data.filter(
                    (result) =>
                      result.payload.doc.data()['mobileNUmber'] ===
                      user.phoneNumber
                  );
                  console.log(filteredUser);
                  if (filteredUser) {
                    this.router.navigate(['/verification']);
                  } else {
                  }
                });
            }
          });
        });
    }
  }

  // signinWithPhoneNumber(formvalue) {
  //   this.dataService.signnedInUser = [];
  //   this.showProgress = true;
  //   const userData = this.dataService
  //     .searchContactByLocation()
  //     .subscribe((data: any) => {
  //       if (data.length > 0) {
  //         const filtereddata = data.filter(
  //           (x) => x.mobileNumber == formvalue.mobileNumber
  //         );

  //         if (filtereddata.length > 0) {
  //           this.dataService.signnedInUser = filtereddata;
  //           // this.storage.set('loggedinuser', filtereddata);

  //           this.showProgress = false;
  //           this.router.navigate(['/verification']);
  //         } else {
  //           this.dataService.signnedInUser = filtereddata;
  //           this.router.navigate(['/verification']);
  //         }
  //       }
  //     });
  // }
}
