import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AppService } from '../services/app.servcie';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  filteredUser: Observable<any>;

  companysCollection: AngularFirestoreCollection<Company>;

  signInForm: FormGroup;
  @ViewChild('signIn') signIn: FormGroupDirective;

  constructor(
    private router: Router,
    public fbauth: AngularFireAuth,
    private fbstore: AngularFirestore,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.signInForm = new FormGroup({
      mobileNumber: new FormControl('', Validators.required),
    });
  }

  signinWithPhoneNumberFireStore(formvalue) {
    this.showProgress = true;
    const mobileNumber = this.CountryCode + formvalue.mobileNumber;
    if (formvalue.mobileNumber.length === 10) {
      this.companysCollection = this.fbstore.collection('companys', (ref) =>
        ref.where('mobileNumber', '==', mobileNumber)
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
        if (snapshot.length == 0) {
          console.log('User NOT found');
          this.showProgress = false;
          this.mobileNumberNotFound = true;
        } else {
          console.log(snapshot[0]);
          console.log('User found' + snapshot[0].id);
          this.showProgress = false;
          this.mobileNumberNotFound = false;
          this.appService.docId = snapshot[0].id;
          this.appService.userSelectedFirmActivity = snapshot[0].firmActivity;

          if (snapshot[0].paymentStatus === 'Paid') {
            this.router.navigate(['/select-vehicle']);
          } else {
            this.router.navigate(['/payment']);
          }
        }
      });
    }
  }
}
