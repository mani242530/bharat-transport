import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  FormGroup,
  FormGroupDirective,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as location from '../json/location';
import * as serviceProvidedLocation from '../json/service-provided-location';
import { Company } from '../models/contact';
import { ToastService } from '../services/toast.service';
import firebase from 'firebase/app';
import { AuthtenticationService } from '../services/authentication.service';
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

  modifyCompanyForm: FormGroup;
  @ViewChild('modifyForm') modifyForm: FormGroupDirective;

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
    'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.OWNER_DRIVER',
  ];

  languages = [
    {
      id: 'en',
      name: 'ENGLISH',
      description: 'ENGLISH',
      img: 'english'
    },
    {
      id: 'hi',
      name: 'हिंदी',
      description: 'HINDI',
      img: 'hindi'
    },
    {
      id: 'ma',
      name: 'मराठी',
      description: 'MARATHI',
      img: 'marathi'
    },
    {
      id: 'gu',
      name: 'ગુજરાતી',
      description: 'GUJARATI',
      img: 'gujarati'
    },
    {
      id: 'tn',
      name: 'தமிழ்',
      description: 'TAMIL',
      img: 'tamil'
    },
    {
      id: 'tl',
      name: 'తెలుగు',
      description: 'TELUGU',
      img: 'telugu'
    },
    {
      id: 'ka',
      name: 'ಕೆನಡಾ',
      description: 'KANADA',
      img: 'kanada'
    },
    {
      id: 'ml',
      name: 'മലയാളം',
      description: 'MALAYALAM',
      img: 'malayalam'
    },
    {
      id: 'pn',
      name: 'മലയാളം',
      description: 'PUNJABI',
      img: 'telugu'
    },
  ];

  locations = [];
  serviceProvidedLocations = [];

  constructor(
    public addnewFormbuilder: FormBuilder,
    private toastservice: ToastService,
    public ngroute: Router,
    private fbstore: AngularFirestore,
    private toastController: ToastController,
    public appservice: AppService,
    public route: ActivatedRoute,
  ) {
    this.docid = this.route.snapshot.paramMap.get("id");
    this.initializeModifyForm();
  }

  ngOnInit() {
    const serviceLocations = serviceProvidedLocation.serviceProvidedLocationData

    this.locations = serviceLocations.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.serviceProvidedLocations = serviceLocations.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

    this.firmActivitys = this.firmActivitys.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0));
    this.vehicleTypes = this.vehicleTypes.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0));

    this.getCompanys(this.docid);
    
  }

  initializeModifyForm(): void {
    this.modifyCompanyForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      ownerName: new FormControl('', Validators.required),
      firmActivity: new FormControl('', Validators.required),
      vehicleType: new FormControl('', Validators.required),
      landlineNumber: new FormControl(''),
      mobileNumber: new FormControl('', Validators.required),
      alternateMobileNumber: new FormControl(''),
      location: new FormControl('', Validators.required),
      serviceProvidedLocation: new FormControl('', Validators.required),
      referenceName: new FormControl('', [Validators.pattern('^[a-zA-Z \-\']+')]),
      language: new FormControl(''),
    });
  }

  async getCompanys(docid: string){
    try{
      await this.fbstore.doc("companys/"+docid).valueChanges()
      .subscribe(result => { 
        console.log("modify>>>" + result)
        this.modifyCompanyForm.controls['companyName'].setValue(result["companyName"]);
        this.modifyCompanyForm.controls['ownerName'].setValue(result["ownerName"]);
        this.modifyCompanyForm.controls['firmActivity'].setValue(result["firmActivity"]);
        this.modifyCompanyForm.controls['vehicleType'].setValue(result["vehicleType"]);
        this.modifyCompanyForm.controls['landlineNumber'].setValue(result["landlineNumber"]);
        this.modifyCompanyForm.controls['mobileNumber'].setValue(result["mobileNumber"]);
        this.modifyCompanyForm.controls['alternateMobileNumber'].setValue(result["alternateMobileNumber"]);
        this.modifyCompanyForm.controls['location'].setValue(result["location"]);
        this.modifyCompanyForm.controls['serviceProvidedLocation'].setValue(result["serviceProvidedLocation"]);
        this.modifyCompanyForm.controls['referenceName'].setValue(result["referenceName"]);
        this.modifyCompanyForm.controls['language'].setValue(result["language"]);
      });
    }catch(error){
      this.toastservice.showToast(error.message, 2000);
      //console.log(error.message);
    }
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

  async doModify() {
    
    let companyobj = {
      companyName: this.modifyCompanyForm.get('companyName').value,
      ownerName: this.modifyCompanyForm.get('ownerName').value,
      firmActivity: this.modifyCompanyForm.get('firmActivity').value,
      vehicleType: this.modifyCompanyForm.get('vehicleType').value.toString().split(','),
      landlineNumber: this.modifyCompanyForm.get('landlineNumber').value,
      mobileNumber: this.modifyCompanyForm.get('mobileNumber').value,
      alternateMobileNumber: this.modifyCompanyForm.get('alternateMobileNumber').value,
      location: this.modifyCompanyForm.get('location').value,
      serviceProvidedLocation: this.modifyCompanyForm.get('serviceProvidedLocation').value.toString().split(','),
      referenceName: this.modifyCompanyForm.get('referenceName').value,
      language: this.modifyCompanyForm.get('language').value,
      paymentStatus: 'NOT PAID'
    }
    try{
      await this.fbstore.doc("companys/"+this.docid).update(companyobj).then(data => {
        console.log(data);
        this.toastservice.showToast('Updated Sucessfully', 2000);
        // this.ngroute.navigate(['home']);
      })
    }catch(error){
      this.toastservice.showToast(error.message, 2000);
      //console.log(error.message);
    }
  }
}
