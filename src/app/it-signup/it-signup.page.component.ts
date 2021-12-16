import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  FormGroup,
  FormGroupDirective,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as location from '../json/location';
import { Company } from '../models/contact';
import { ToastService } from '../services/toast.service';
import firebase from 'firebase/app';
import { AuthtenticationService } from '../services/authentication.service';
import { AppService } from '../services/app.servcie';

@Component({
  selector: 'app-signup',
  templateUrl: './it-signup.page.component.html',
  styleUrls: ['./it-signup.page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  myModal: any;
  newCompany: Company = new Company();

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
  userExists = false;

  createCompanyForm: FormGroup;
  @ViewChild('createForm') createForm: FormGroupDirective;

  vehicleTypes = [
    'APP.VEHICLE_TYPE.LCV',
    'APP.VEHICLE_TYPE.TRAILER',
    'APP.VEHICLE_TYPE.TRUCK',
    'APP.VEHICLE_TYPE.OPEN_TRUCK',
    'APP.VEHICLE_TYPE.20_FT_CBT',
    'APP.VEHICLE_TYPE.32_FT_SINGLE_EXCEL',
    'APP.VEHICLE_TYPE.20_FT_IMPORT_EXPORT',
    'APP.VEHICLE_TYPE.40_FT_IMPORT_EXPORT',
    'APP.VEHICLE_TYPE.32_FT_MULTI_AXLE',
  ];

  locations = [];

  constructor(
    public addnewFormbuilder: FormBuilder,
    private toastservice: ToastService,
    public ngroute: Router,
    private fbstore: AngularFirestore,
    private toastController: ToastController,
    private authtenticationService: AuthtenticationService,
    public appservice: AppService
  ) {}

  ngOnInit() {
    this.locations = location.locationData;
    this.initializeForm();
  }

  initializeForm(): void {
    this.createCompanyForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      companyName: new FormControl('', Validators.required),
      firmActivity: new FormControl('', Validators.required),
      serviceProviding: new FormControl('', Validators.required),
      landlineNumber: new FormControl(''),
      mobileNumber: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
    });
  }

  // createCompany(values: any) {
  //   // copy all the form values into the new contact
  //   const newCompany: Company = { ...values };
  //   console.log(newCompany);
  //   this.dataService.createContact(newCompany);
  //   this.presentModal();
  // }

  // async presentModal() {
  //   this.myModal = await this.modalController.create({
  //     component: AccountSuccessModalComponent,
  //     swipeToClose: true,
  //     backdropDismiss: true,
  //   });
  //   return await this.myModal.present();
  // }

  async ionViewDidEnter() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-UP-button',
      {
        size: 'invisible',
        callback: (response) => {},
        'expired-callback': () => {},
      }
    );
  }

  ionViewDidLoad() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-UP-button',
      {
        size: 'invisible',
        callback: (response) => {},
        'expired-callback': () => {},
      }
    );
  }

  async createCompany(formGroup: FormGroup) {
    this.showProgress = true;
    const companyObj = {
      firstName: this.createCompanyForm.get('firstName').value,
      lastName: this.createCompanyForm.get('lastName').value,
      companyName: this.createCompanyForm.get('companyName').value,
      firmActivity: this.createCompanyForm.get('firmActivity').value,
      serviceProviding: this.createCompanyForm.get('serviceProviding').value,
      landlineNumber: this.createCompanyForm.get('landlineNumber').value,
      mobileNumber: '+91' + this.createCompanyForm.get('mobileNumber').value,
      location: this.createCompanyForm.get('location').value,
      language: this.appservice.selectedLanguage,
      paymentPaid: false,
    };
    Object.keys(companyObj).forEach((k) => {
      if (typeof companyObj[k] !== 'object') {
        companyObj[k] = companyObj[k].trim();
      }
    });
    this.fbstore
      .collection('companys', (ref) =>
        ref.where('mobileNumber', '==', companyObj.mobileNumber).limit(1)
      )
      .get()
      .subscribe((users) => {
        console.log(users.size);
        if (users.size === 0) {
          try {
            this.fbstore
              .collection('companys')
              .add(companyObj)
              .then((data) => {
                console.log(companyObj);
                if (data) {
                  return new Promise<any>((resolve, reject) => {
                    this.authtenticationService
                      .signInWithPhoneNumber(
                        this.recaptchaVerifier,
                        companyObj.mobileNumber
                      )
                      .then((success) => {
                        resolve(success);
                        this.showProgress = false;
                        this.invalidMobilenumber = false;
                        this.registerSuccessToast();
                        this.ngroute.navigate(['verification']);
                      })
                      .catch((error) => {
                        this.showProgress = false;
                        this.invalidMobilenumber = true;
                        reject(error);
                      });
                  });
                }
              });
          } catch (error) {
            this.showProgress = false;
            console.log(error);
          }
        } else {
          this.showProgress = false;
          this.userRegisteredAlreadyToast();
          this.userExists = true;
        }
      });
  }

  async registerSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Account created successfully.',
      duration: 2000,
      position: 'bottom',
      animated: true,
      color: 'Success',
    });
    toast.present();
  }

  async userRegisteredAlreadyToast() {
    const toast = await this.toastController.create({
      message: 'Your mobile number is already registered.',
      duration: 2000,
      position: 'top',
      animated: true,
      color: 'warning',
    });
    toast.present();
  }
}
