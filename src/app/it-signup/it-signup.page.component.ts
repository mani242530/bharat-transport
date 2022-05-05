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
import { ToastService } from '../services/toast.service';
import * as sharedContansts from '../constants/shared.constants';

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
  formSubmitted = false;

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
    public appService: AppService,
    private toastservice: ToastService
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
      passwordPin: new FormControl('', Validators.required),
      alternateMobileNumber: new FormControl(''),
      location: new FormControl('', Validators.required),
      serviceProvidedLocation: new FormControl('', Validators.required),
      referenceName: new FormControl('', [Validators.pattern("^[a-zA-Z -']+")]),
      vehicleNos: new FormControl('', Validators.required),
      aadharNumber: new FormControl('', [Validators.pattern('[0-9]{1,12}$')]),
      drivingLicenseNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]+$'),
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
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
    if (value.detail.value === sharedContansts.default.app.DRIVER) {
      this.checkFirmActivityIsOwner = false;
      this.checkFirmActivityIsDriver = true;
    } else if (value.detail.value === sharedContansts.default.app.OWNER) {
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
        if (selectedFirmActivity === sharedContansts.default.app.OWNER) {
          companyNameControl.setValidators([Validators.required]);
          vehicleNosControl.setValidators([Validators.required]);
          drivingLicenseNumberControl.setValidators([
            Validators.pattern('[a-zA-Z0-9 ]*$'),
          ]);
        } else if (
          selectedFirmActivity === sharedContansts.default.app.DRIVER
        ) {
          companyNameControl.setValidators(null);
          vehicleNosControl.setValidators(null);
          drivingLicenseNumberControl.setValidators([
            Validators.required,
            Validators.pattern('[a-zA-Z0-9 ]*$'),
          ]);
        } else {
          companyNameControl.setValidators([Validators.required]);
          vehicleNosControl.setValidators(null);
          drivingLicenseNumberControl.setValidators([
            Validators.pattern('[a-zA-Z0-9 ]*$'),
          ]);
        }

        companyNameControl.updateValueAndValidity();
        vehicleNosControl.updateValueAndValidity();
        drivingLicenseNumberControl.updateValueAndValidity();
      });
  }

  validationErrorExists() {
    return (
      (this.formSubmitted || this.createCompanyForm.dirty) &&
      !this.createCompanyForm.valid
    );
  }

  hasError = (controlName: string, errorName: string) => {
    return this.createCompanyForm.controls[controlName].hasError(errorName);
  };

  createCompanyFireStore() {
    this.showProgress = true;
    this.formSubmitted = true;
    if (this.createCompanyForm.valid) {
      const companyObj = {
        companyName: this.createCompanyForm.get('companyName').value,
        ownerName: this.createCompanyForm.get('ownerName').value,
        firmActivity: this.createCompanyForm.get('firmActivity').value,
        vehicleType: this.createCompanyForm.get('vehicleType').value,
        mobileNumber:
          sharedContansts.default.app._91 +
          this.createCompanyForm.get('mobileNumber').value,
        passwordPin: this.createCompanyForm.get('passwordPin').value,
        alternateMobileNumber:
          sharedContansts.default.app._91 +
          this.createCompanyForm.get('alternateMobileNumber').value,
        location: this.createCompanyForm.get('location').value,
        serviceProvidedLocation: this.createCompanyForm.get(
          'serviceProvidedLocation'
        ).value,
        referenceName: this.createCompanyForm.get('referenceName').value,
        vehicleNos: this.createCompanyForm.get('vehicleNos').value,
        aadharNumber: this.createCompanyForm.get('aadharNumber').value,
        drivingLicenseNumber: this.createCompanyForm.get('drivingLicenseNumber')
          .value,
        language: this.appService.selectedLanguage,
        paymentStatus: sharedContansts.default.app.NOT_PAID,
        accountStatus: sharedContansts.default.app.INACTIVE,
        userEntry: sharedContansts.default.app.YES,
        registeredDate: new Date().toISOString().slice(0, 10),
        signInCount: 0,
      };

      // Object.keys(companyObj).forEach((k) => {
      //   if (typeof companyObj[k] !== 'object') {
      //     companyObj[k] = companyObj[k].trim();
      //   }
      // });

      if (companyObj) {
        this.companysNewCollection = this.fbstore.collection(
          'companys',
          (ref) => ref.where('mobileNumber', '==', companyObj.mobileNumber)
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
            this.companysNewCollection.add(companyObj).then((data) => {
              if (data) {
                this.showProgress = false;
                this.userExists = false;
                this.toastservice.showToast(
                  'Profile created successfully',
                  2000
                );
                // return new Promise<any>((resolve, reject) => {
                //   this.authtenticationService
                //     .signInWithPhoneNumber(
                //       this.recaptchaVerifier,
                //       companyObj.mobileNumber
                //     )
                //     .then((success) => {
                //       resolve(success);
                //       this.userExists = false;
                //       this.registerSuccessToast();
                //       this.ngroute.navigate(['/verification']);
                //     })
                //     .catch((error) => {
                //       reject(error);
                //     });
                // });
                this.companysNewCollection = this.fbstore.collection(
                  'companys',
                  (ref) =>
                    ref.where('mobileNumber', '==', companyObj.mobileNumber)
                );
                this.filteredUser = this.companysNewCollection
                  .snapshotChanges()
                  .pipe(
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
                  if (snapshot.length === 0) {
                    this.ngroute.navigate(['signup']);
                  } else {
                    this.appService.userSelectedFirmActivity =
                      snapshot[0].firmActivity;
                    if (
                      snapshot[0] &&
                      snapshot[0].paymentStatus ===
                        sharedContansts.default.app.PAID
                    ) {
                      this.ngroute.navigate(['select-vehicle']);
                    } else {
                      this.ngroute.navigate(['payment']);
                    }
                  }
                });
              }
            });
          } else {
            this.showProgress = false;
            setTimeout(() => {
              this.userExists = true;
            }, 5000);
          }
        });
      }
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
