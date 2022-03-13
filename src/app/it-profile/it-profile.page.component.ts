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
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as serviceProvidedLocation from '../json/service-provided-location';
import { Company } from '../models/company';
import { ToastService } from '../services/toast.service';
import { AppService } from '../services/app.servcie';

@Component({
  selector: 'app-profile',
  templateUrl: './it-profile.page.component.html',
  styleUrls: ['./it-profile.page.component.scss'],
})
export class ProfileComponent implements OnInit {
  myModal: any;
  newCompany: Company = new Company();

  showProgress = false;
  invalidMobilenumber = false;
  userExists = false;
  docid: string;

  disabledFlag = true;
  checkFirmActivityIsDriver = false;
  checkFirmActivityIsOwner = false;

  companysCollection: AngularFirestoreCollection<Company>;

  modifyCompanyForm: FormGroup;
  @ViewChild('modifyForm') modifyForm: FormGroupDirective;

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

  languages = [
    {
      id: 'en',
      name: 'ENGLISH',
      description: 'ENGLISH',
      img: 'english',
    },
    {
      id: 'hi',
      name: 'हिंदी',
      description: 'HINDI',
      img: 'hindi',
    },
    {
      id: 'ma',
      name: 'मराठी',
      description: 'MARATHI',
      img: 'marathi',
    },
    {
      id: 'gu',
      name: 'ગુજરાતી',
      description: 'GUJARATI',
      img: 'gujarati',
    },
    {
      id: 'tn',
      name: 'தமிழ்',
      description: 'TAMIL',
      img: 'tamil',
    },
    {
      id: 'tl',
      name: 'తెలుగు',
      description: 'TELUGU',
      img: 'telugu',
    },
    {
      id: 'ka',
      name: 'ಕೆನಡಾ',
      description: 'KANADA',
      img: 'kanada',
    },
    {
      id: 'ml',
      name: 'മലയാളം',
      description: 'MALAYALAM',
      img: 'malayalam',
    },
    {
      id: 'pn',
      name: 'മലയാളം',
      description: 'PUNJABI',
      img: 'telugu',
    },
  ];

  locations = [];
  serviceProvidedLocations = [];

  constructor(
    public addnewFormbuilder: FormBuilder,
    private toastservice: ToastService,
    public router: Router,
    private fbstore: AngularFirestore,
    private toastController: ToastController,
    public appservice: AppService,
    public route: ActivatedRoute
  ) {
    // this.docid = this.route.snapshot.paramMap.get('id');
    this.docid = this.appservice.docId;
  }

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

    this.initializeModifyForm();
    this.setFirmActivityValidators();
    this.getCompanys(this.docid);
  }

  initializeModifyForm(): void {
    this.modifyCompanyForm = new FormGroup({
      companyName: new FormControl(''),
      ownerName: new FormControl('', Validators.required),
      firmActivity: new FormControl({ value: '', disabled: true }),
      vehicleType: new FormControl('', Validators.required),
      mobileNumber: new FormControl({ value: '', disabled: true }),
      alternateMobileNumber: new FormControl(''),
      location: new FormControl('', Validators.required),
      serviceProvidedLocation: new FormControl('', Validators.required),
      referenceName: new FormControl('', [Validators.pattern("^[a-zA-Z -']+")]),
      language: new FormControl(''),
      vehicleNos: new FormControl(''),
      aadharNumber: new FormControl(''),
      drivingLicenseNumber: new FormControl(''),
    });
  }

  async getCompanys(docid: string) {
    try {
      await this.fbstore
        .doc('companys/' + docid)
        .valueChanges()
        .subscribe((result) => {
          this.onFirmActivityValue(result);
          console.log('profile', result);
          this.modifyCompanyForm.controls['companyName'].setValue(
            result['companyName']
          );
          this.modifyCompanyForm.controls['ownerName'].setValue(
            result['ownerName']
          );
          this.modifyCompanyForm.controls['firmActivity'].setValue(
            result['firmActivity']
          );
          this.modifyCompanyForm.controls['vehicleType'].setValue(
            result['vehicleType']
          );
          this.modifyCompanyForm.controls['mobileNumber'].setValue(
            result['mobileNumber']
          );
          this.modifyCompanyForm.controls['alternateMobileNumber'].setValue(
            result['alternateMobileNumber']
          );
          this.modifyCompanyForm.controls['location'].setValue(
            result['location']
          );
          this.modifyCompanyForm.controls['serviceProvidedLocation'].setValue(
            result['serviceProvidedLocation']
          );
          this.modifyCompanyForm.controls['referenceName'].setValue(
            result['referenceName']
          );
          this.modifyCompanyForm.controls['language'].setValue(
            result['language']
          );
          this.modifyCompanyForm.controls['vehicleNos'].setValue(
            result['vehicleNos']
          );
          this.modifyCompanyForm.controls['aadharNumber'].setValue(
            result['aadharNumber']
          );
          this.modifyCompanyForm.controls['drivingLicenseNumber'].setValue(
            result['drivingLicenseNumber']
          );
        });
    } catch (error) {
      this.toastservice.showToast(error.message, 2000);
    }
  }

  onFirmActivityValue(result) {
    if (result['firmActivity'] === 'Driver') {
      this.checkFirmActivityIsOwner = false;
      this.checkFirmActivityIsDriver = true;
    } else if (result['firmActivity'] === 'Owner') {
      this.checkFirmActivityIsDriver = false;
      this.checkFirmActivityIsOwner = true;
    } else {
      this.checkFirmActivityIsDriver = false;
      this.checkFirmActivityIsOwner = false;
    }
  }

  onFirmActivityChange(value) {
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
    const companyNameControl = this.modifyCompanyForm.get('companyName');
    const vehicleNosControl = this.modifyCompanyForm.get('vehicleNos');
    const drivingLicenseNumberControl = this.modifyCompanyForm.get(
      'drivingLicenseNumber'
    );

    this.modifyCompanyForm
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

  async registerSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Account updated successfully.',
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

  doModify() {
    const companyobj = {
      companyName: this.modifyCompanyForm.get('companyName').value,
      ownerName: this.modifyCompanyForm.get('ownerName').value,
      firmActivity: this.modifyCompanyForm.get('firmActivity').value,
      vehicleType: this.modifyCompanyForm.get('vehicleType').value,
      mobileNumber: this.modifyCompanyForm.get('mobileNumber').value,
      alternateMobileNumber: this.modifyCompanyForm.get('alternateMobileNumber')
        .value,
      location: this.modifyCompanyForm.get('location').value,
      serviceProvidedLocation: this.modifyCompanyForm
        .get('serviceProvidedLocation')
        .value,
      referenceName: this.modifyCompanyForm.get('referenceName').value,
      language: this.modifyCompanyForm.get('language').value,
      vehicleNos: this.modifyCompanyForm.get('vehicleNos').value,
      aadharNumber: this.modifyCompanyForm.get('aadharNumber').value,
      drivingLicenseNumber: this.modifyCompanyForm.get('drivingLicenseNumber')
        .value,
      paymentStatus: 'Paid',
      accountStatus: 'Active',
    };
    try {
      this.fbstore
        .doc('companys/' + this.docid)
        .ref.update(companyobj)
        .then((data) => {
          console.log(data);
          this.toastservice.showToast('Profile updated successfully', 1000);
        });
    } catch (error) {
      this.toastservice.showToast(error.message, 2000);
    }
  }
}
