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
import * as location from '../json/location';
import { Company } from '../models/contact';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './it-signup.page.component.html',
  styleUrls: ['./it-signup.page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  myModal: any;
  newCompany: Company = new Company();

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
    private fbstore: AngularFirestore
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

  async createCompany(formGroup: FormGroup) {
    const companyObj = {
      firstName: this.createCompanyForm.get('firstName').value,
      lastName: this.createCompanyForm.get('lastName').value,
      companyName: this.createCompanyForm.get('companyName').value,
      firmActivity: this.createCompanyForm.get('firmActivity').value,
      serviceProviding: this.createCompanyForm.get('serviceProviding').value,
      plandlineNumberd: this.createCompanyForm.get('landlineNumber').value,
      mobileNumber: '+91' + this.createCompanyForm.get('mobileNumber').value,
      location: this.createCompanyForm.get('location').value,
    };
    console.log(companyObj);
    Object.keys(companyObj).forEach((k) => {
      if (typeof companyObj[k] !== 'object') {
        companyObj[k] = companyObj[k].trim();
      }
    });
    console.log(companyObj);
    try {
      await this.fbstore
        .collection('companys')
        .add(companyObj)
        .then((data) => {
          console.log(data);
          this.ngroute.navigate(['verification']);
        });
    } catch (error) {
      this.toastservice.showToast(error.message, 2000);
      //console.log(error.message);
    }
  }
}
