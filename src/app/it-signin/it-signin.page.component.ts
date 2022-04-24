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
import { TranslateService } from '@ngx-translate/core';

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
    private appService: AppService,
    public translateService: TranslateService
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
              mobileNumber: data.mobileNumber,
              paymentStatus: data.paymentStatus,
              userEntry: data.userEntry
            };
          });
        })
      );

      this.filteredUser.subscribe((snapshot) => {
        if (snapshot.length === 0) {
          this.showProgress = false;
          this.mobileNumberNotFound = true;
        } else {
          this.showProgress = false;
          this.mobileNumberNotFound = false;
          this.appService.docId = snapshot[0].id;
          this.appService.paymentStatus = snapshot[0].paymentStatus;
          this.appService.signinMobileNumber = snapshot[0].mobileNumber;
          this.appService.userEntry = snapshot[0].userEntry;
          this.router.navigate(['pin']);
        }
      });
    }
  }
}
