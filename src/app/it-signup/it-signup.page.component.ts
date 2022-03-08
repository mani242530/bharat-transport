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
import * as serviceProvidedLocation from '../json/service-provided-location';
import { Company } from '../models/contact';
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
  checkFirmActivityIsDriver = false;
  checkFirmActivityIsOwner = false;
  selectedFirmActivity;

  createCompanyForm: FormGroup;
  @ViewChild('createForm') createForm: FormGroupDirective;

  vehicleTypes = [
    'APP.VEHICLE_TYPE.LCV',
    'APP.VEHICLE_TYPE.TRAILER',
    'APP.VEHICLE_TYPE.TRUCK',
    'APP.VEHICLE_TYPE.OPEN_TRUCK',
    'APP.VEHICLE_TYPE.PART_LOAD',
    'APP.VEHICLE_TYPE.ODC',
    'APP.VEHICLE_TYPE.20_FT_CBT',
    'APP.VEHICLE_TYPE.32_FT_SINGLE_EXCEL',
    'APP.VEHICLE_TYPE.20_FT_IMPORT_EXPORT',
  ];

  firmActivitys = [
    'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.FREIGHT',
    'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.BOOKING',
    'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.SUPPLIER',
    'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.OWNER',
    'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.DRIVER',
  ];

  locations = [];
  serviceProvidedLocations = [];

  constructor(
    public addnewFormbuilder: FormBuilder,
    public ngroute: Router,
    private fbstore: AngularFirestore,
    private toastController: ToastController,
    private authtenticationService: AuthtenticationService,
    public appservice: AppService
  ) {}

  ngOnInit() {
    const serviceLocations =
      serviceProvidedLocation.serviceProvidedLocationData;
    this.locations = serviceLocations.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    this.serviceProvidedLocations = serviceLocations.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );

    this.vehicleTypes = this.vehicleTypes.sort((a, b) =>
      a > b ? 1 : b > a ? -1 : 0
    );
    this.initializeForm();
    this.setFirmActivityValidators();
  }

  initializeForm(): void {
    this.createCompanyForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      ownerName: new FormControl('', Validators.required),
      firmActivity: new FormControl('', Validators.required),
      vehicleType: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      alternateMobileNumber: new FormControl(''),
      location: new FormControl('', Validators.required),
      serviceProvidedLocation: new FormControl('', Validators.required),
      referenceName: new FormControl('', [Validators.pattern("^[a-zA-Z -']+")]),
      vehicleNos: new FormControl('', Validators.required),
      aadharNumber: new FormControl(''),
      drivingLicenseNumber: new FormControl('', Validators.required),
    });
  }

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

  onFirmActivityChange(value) {
    this.selectedFirmActivity = value.detail.value;
    if (value.detail.value === 'Driver') {
      this.checkFirmActivityIsOwner = false;
      this.checkFirmActivityIsDriver = true;
    } else if (value.detail.value === 'Owner') {
      this.checkFirmActivityIsDriver = false;
      this.checkFirmActivityIsOwner = true;
    } else {
      this.checkFirmActivityIsDriver = false;
      this.checkFirmActivityIsOwner = false;
    }
  }

  setFirmActivityValidators() {
    const companyNameControl = this.createCompanyForm.get('companyName');
    const vehicleNosControl = this.createCompanyForm.get('vehicleNos');
    const drivingLicenseNumberControl = this.createCompanyForm.get(
      'drivingLicenseNumber'
    );

    this.createCompanyForm
      .get('firmActivity')
      .valueChanges.subscribe((selectedFirmActivity) => {
        if (selectedFirmActivity === 'Owner') {
          companyNameControl.setValidators([Validators.required]);
          vehicleNosControl.setValidators([Validators.required]);
          drivingLicenseNumberControl.setValidators(null);
        } else if (selectedFirmActivity === 'Driver') {
          companyNameControl.setValidators(null);
          vehicleNosControl.setValidators(null);
          drivingLicenseNumberControl.setValidators([Validators.required]);
        } else {
          companyNameControl.setValidators([Validators.required]);
          vehicleNosControl.setValidators(null);
          drivingLicenseNumberControl.setValidators(null);
        }

        companyNameControl.updateValueAndValidity();
        vehicleNosControl.updateValueAndValidity();
        drivingLicenseNumberControl.updateValueAndValidity();
      });
  }

  async createCompany(formGroup: FormGroup) {
    this.showProgress = true;
    const companyObj = {
      companyName: this.createCompanyForm.get('companyName').value,
      ownerName: this.createCompanyForm.get('ownerName').value,
      firmActivity: this.createCompanyForm.get('firmActivity').value,
      vehicleType: this.createCompanyForm.get('vehicleType').value,
      mobileNumber: '+91' + this.createCompanyForm.get('mobileNumber').value,
      alternateMobileNumber:
        '+91' + this.createCompanyForm.get('alternateMobileNumber').value,
      location: this.createCompanyForm.get('location').value,
      serviceProvidedLocation: this.createCompanyForm.get(
        'serviceProvidedLocation'
      ).value,
      referenceName: this.createCompanyForm.get('referenceName').value,
      vehicleNos: this.createCompanyForm.get('vehicleNos').value,
      aadharNumber: this.createCompanyForm.get('aadharNumber').value,
      drivingLicenseNumber: this.createCompanyForm.get('drivingLicenseNumber')
        .value,
      language: this.appservice.selectedLanguage,
      paymentStatus: 'Not Paid',
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
        if (users.size === 0) {
          try {
            this.fbstore
              .collection('companys')
              .add(companyObj)
              .then((data) => {
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
          }
        } else {
          this.showProgress = false;
          // this.userRegisteredAlreadyToast();
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
