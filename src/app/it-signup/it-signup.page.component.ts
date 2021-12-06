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
    'LCV',
    'Trailer',
    'Truck (Taurus)',
    'Open Trucks',
    '20ft Container (CBT and Open)',
    '32ft Container Single Excel',
    '20ft Container (Import and Export)',
    '40ft Container (Import and Export)',
    '32ft Container Multi Axle Excel',
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

  async createCompany() {
    let companyObj = {
      firstName: this.createCompanyForm.get('firstName').value,
      lastName: this.createCompanyForm.get('lastName').value,
      companyName: this.createCompanyForm.get('companyName').value,
      firmActivity: this.createCompanyForm.get('firmActivity').value,
      serviceProviding: this.createCompanyForm.get('serviceProviding').value,
      plandlineNumberd: this.createCompanyForm.get('landlineNumber').value,
      mobileNumber: this.createCompanyForm.get('mobileNumber').value,
      location: this.createCompanyForm.get('location').value,
    };
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
