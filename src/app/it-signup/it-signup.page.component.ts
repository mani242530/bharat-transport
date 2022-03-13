import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
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
import { Company } from '../models/company';
import firebase from 'firebase/app';
import { AuthtenticationService } from '../services/authentication.service';
import { AppService } from '../services/app.servcie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  filteredUser: Observable<any>;

  companysNewCollection: AngularFirestoreCollection<Company>;

  createCompanyForm: FormGroup;
  @ViewChild('createForm') createForm: FormGroupDirective;

  vehicleTypes = [
    'LCV',
    'Trailer',
    'Truck (Taurus)',
    'Open Trucks',
    'Part Load',
    'ODC',
    '20ft Container CBT',
    '20ft / 40ft Container (Import and Export)',
    '32ft Container',
  ];

  firmActivitys = [
    'Freight Forwarders',
    'Booking',
    'Supplier',
    'Owner',
    'Driver',
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

  createCompanyFireStore(formvalue) {
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

    if (companyObj) {
      this.companysNewCollection = this.fbstore.collection('companys', (ref) =>
        ref.where('mobileNumber', '==', companyObj.mobileNumber)
      );
      this.filteredUser = this.companysNewCollection.snapshotChanges().pipe(
        map((actions) => {
          return actions.map((action) => {
            const data = action.payload.doc.data() as Company;
            return {
              id: action.payload.doc.id,
            };
          });
        })
      );

      this.filteredUser.subscribe((snapshot) => {
        if (snapshot.length === 0) {
          console.log('User NOT found');

          this.companysNewCollection.add(companyObj).then((data) => {
            if (data) {
              this.showProgress = false;
              this.userExists = false;
              return new Promise<any>((resolve, reject) => {
                this.authtenticationService
                  .signInWithPhoneNumber(
                    this.recaptchaVerifier,
                    companyObj.mobileNumber
                  )
                  .then((success) => {
                    resolve(success);
                    this.userExists = false;
                    this.registerSuccessToast();
                    this.ngroute.navigate(['verification']);
                  })
                  .catch((error) => {
                    reject(error);
                  });
              });
            }
          });
        } else {
          console.log('User found signup component' + snapshot[0].id);
          this.showProgress = false;
          setTimeout(() => {
            this.userExists = true;
          }, 5000);
        }
      });
    }
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
}
