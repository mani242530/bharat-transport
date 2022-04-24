import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Company } from '../models/company';
import { AppService } from '../services/app.servcie';
import { ToastService } from '../services/toast.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-listing',
  templateUrl: './it-listing.page.component.html',
  styleUrls: ['./it-listing.page.component.scss'],
})
export class ListingPageComponent implements OnInit {
  companys: any;
  finalResultForCompanys: Company[];
  companyLists: any;
  isLoading = true;
  searchParam;
  noresults = false;
  selectedVehicleType: string;
  searchCompanyModel;
  docId: string;
  companysCollection: AngularFirestoreCollection<Company[]>;
  companyid;
  selectedVehicleTypeFilter;
  finalFilteredVehicleType;

  constructor(
    public modalController: ModalController,
    private router: ActivatedRoute,
    private appService: AppService,
    public ngroute: Router,
    private fbstore: AngularFirestore,
    private toastservice: ToastService,
    public fbauth: AngularFireAuth,
    private callNumber: CallNumber
  ) {
    this.isLoading = true;
    this.docId = this.appService.docId;
    this.selectedVehicleType = this.appService.selectedVehicleType;
    this.router.queryParams.subscribe((params) => {
      this.searchParam = params;
      this.searchContactByLocationFireStore(this.searchParam);
    });
  }

  async ngOnInit() {}

  trackByFn(_, item) {
    return item.id;
  }

  async setFilteredItems(event) {
    const searchCompanyResult = this.finalResultForCompanys;
    const duplicateResult = searchCompanyResult.filter(
      (item) =>
        item.companyName
          .toLowerCase()
          .indexOf(event.target.value.toLowerCase()) !== -1
    );

    // const duplicateResult = searchCompanyResult.filter(function(v, i) {
    //   return ((v['mobileNumber'] == '+91'+event.target.value || v['companyName'] == event.target.value.toLowerCase()));
    // })
    this.companyLists = duplicateResult;
  }

  searchContactByLocationFireStore(params) {
    this.isLoading = true;
    if (params) {
      this.companysCollection = this.fbstore.collection('companys', (ref) =>
        ref
          .where('location', '==', params.from)
          // .where('serviceProvidedLocation', 'array-contains', params.to)
          .where('serviceProvidedLocation', 'array-contains-any', [
            params.to,
            'Pan India',
          ])
          .where('firmActivity', '==', params.firmActivity)
      );
      this.companys = this.companysCollection.snapshotChanges().pipe(
        map((actions) => {
          return actions.map((action) => {
            const data = action.payload.doc.data() as Company[];
            return {
              id: action.payload.doc.id,
              companyName: data['companyName'],
              ownerName: data['ownerName'],
              firmActivity: data['firmActivity'],
              vehicleType: data['vehicleType'],
              mobileNumber: data['mobileNumber'],
              alternateMobileNumber: data['alternateMobileNumber'],
              location: data['location'],
              serviceProvidedLocation: data['serviceProvidedLocation'],
              referenceName: data['referenceName'],
              vehicleNos: data['vehicleNos'],
              aadharNumber: data['aadharNumber'],
              drivingLicenseNumber: data['drivingLicenseNumber'],
              paymentStatus: data['paymentStatus'],
              accountStatus: data['accountStatus'],
            };
          });
        })
      );

      this.companys.subscribe((snapshot) => {
        if (snapshot.length == 0) {
          this.isLoading = false;
          this.noresults = true;
        } else {
          this.isLoading = false;
          this.noresults = false;

          const finallist = snapshot.filter((item) =>
            item.vehicleType.find(
              (vehicleType) => vehicleType === this.selectedVehicleType
            )
          );
          const panResult = finallist.filter(
            (data) => data.serviceProvidedLocation[0] === 'Pan India'
          );
          const nonPanResult = finallist.filter(
            (data) => data.serviceProvidedLocation[0] !== 'Pan India'
          );
          const mergedArray = [...nonPanResult, ...panResult];
          const uniqueData = [
            ...mergedArray
              .reduce((map, obj) => map.set(obj.mobileNumber, obj), new Map())
              .values(),
          ];

          this.companyLists = uniqueData;
          this.finalResultForCompanys = uniqueData;
        }
      });
    }
  }

  goListingDetailPage(companyid) {
    this.appService.selectedCompanyId = companyid;
    const navigationExtras: NavigationExtras = {
      queryParams: {
        from: this.searchParam.from,
        to: this.searchParam.to,
        firmActivity: this.searchParam.firmActivity,
        companyId: companyid,
      },
    };
    this.ngroute.navigate(['/listing-detail'], navigationExtras);
  }

  callNow(number) {
    this.callNumber
      .callNumber(number, true)
      .then((res) => console.log('Launched dialer!', res))
      .catch((err) => console.log('Error launching dialer', err));
  }

  async doLogout(): Promise<void> {
    await this.fbauth.signOut().then(() => {
      this.appService.selectedLanguage = '';
      this.ngroute.navigate(['splash']);
    });
  }
}
