import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Company } from '../models/contact';
import { AppService } from '../services/app.servcie';
import { ToastService } from '../services/toast.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-listing',
  templateUrl: './it-listing.page.component.html',
  styleUrls: ['./it-listing.page.component.scss'],
})

export class ListingPageComponent implements OnInit {
  companys: Company[];
  finalResultForCompanys: Company[];
  companyLists: Company[];
  isLoading = true;
  searchParam;
  noresults = false;
  selectedVehicleType: string;
  searchCompanyModel;
  docId: string;

  constructor(
    public modalController: ModalController,
    private router: ActivatedRoute,
    private appService: AppService,
    public ngroute: Router,
    private fbstore: AngularFirestore,
    private toastservice: ToastService,
    public fbauth: AngularFireAuth,
  ) {
    this.isLoading = true;
    this.docId = this.appService.docId;
    this.router.queryParams.subscribe((params) => {
      this.searchParam = params;
      this.searchContactByLocation(this.searchParam);
    });

    this.selectedVehicleType = this.appService.selectedVehicleType;
  }

  async ngOnInit() {}

  trackByFn(_, item) {
    return item.id;
  }

  checkThisList(list1,list2){  
    let result  = false; 
    var hasValue = list2.indexOf(list1) != -1;
    if(hasValue){
    result = true;
    }
    
    return result ;
    }

  async searchContactByLocation(params) {
    try {
      await this.fbstore
        .collection('companys')
        .snapshotChanges()
        .subscribe((data) => {

          // VEHICLE TYPE
          let fresult= [];
          let sresult = [];
          for(let res of data){
              if(this.checkThisList(this.selectedVehicleType, res.payload.doc.data()['vehicleType']))
              {
                fresult.push(res);
              }
          }

          // FROM LOCATION
          const locresult = fresult.filter(function(item) {
            return item.payload.doc.data()['location'] === params.from;
          });

          // TO LOCATION
          let serviceresult= [];
          for(let lres of locresult){
              if(this.checkThisList(params.to, lres.payload.doc.data()['serviceProvidedLocation']))
              {
                serviceresult.push(lres);
              }
          }

          // FIRM ACTIVITY
          const activityresult = serviceresult.filter(function(item) {
            return item.payload.doc.data()['firmActivity'] === params.firmActivity;
          });

          if (activityresult.length > 0) {
            this.noresults = false;
            this.companys = activityresult.map((result) => {
              return {
                id: result.payload.doc.id,
                companyName: result.payload.doc.data()['companyName'],
                ownerName: result.payload.doc.data()['ownerName'],
                firmActivity: result.payload.doc.data()['firmActivity'],
                vehicleType: result.payload.doc
                  .data()
                  ['vehicleType'],
                mobileNumber: result.payload.doc.data()['mobileNumber'],
                alternateMobileNumber: result.payload.doc.data()['alternateMobileNumber'],
                location: result.payload.doc.data()['location'],
                serviceProvidedLocation: result.payload.doc.data()['serviceProvidedLocation'],
                referenceName: result.payload.doc.data()['referenceName'],
                vehicleNos: result.payload.doc.data()['vehicleNos'],
                aadharNumber: result.payload.doc.data()['aadharNumber'],
                drivingLicenseNumber: result.payload.doc.data()['drivingLicenseNumber'],
                paymentStatus: result.payload.doc.data()['paymentStatus'],
                accountStatus: result.payload.doc.data()['accountStatus'],
              };
            });
            this.companyLists = this.companys;
            this.finalResultForCompanys = this.companys;
          } else {
            this.noresults = true;
          }

          /* remove later only for delaying loading of products list to show animation for a longer duration */
          of(data)
            .pipe(delay(1000))
            .subscribe((data) => {
              this.isLoading = false;
            });
        });
    } catch (error) {
      this.toastservice.showToast(error.message, 2000);
    }
  }

  async setFilteredItems(event) {
    const searchCompanyResult = this.finalResultForCompanys;
    const duplicateResult = searchCompanyResult.filter(item => item.companyName.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);

    // const duplicateResult = searchCompanyResult.filter(function(v, i) {
    //   return ((v['mobileNumber'] == '+91'+event.target.value || v['companyName'] == event.target.value.toLowerCase()));
    // })
    this.companyLists = duplicateResult;
  }

  async doLogout(): Promise<void> {
    await this.fbauth.signOut().then(() => {
      this.appService.selectedLanguage = '';
      this.ngroute.navigate(['splash']);
    });
  }
}
