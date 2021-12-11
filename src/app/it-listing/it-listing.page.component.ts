import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Company } from '../models/contact';
import { AppService } from '../services/app.servcie';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-listing',
  templateUrl: './it-listing.page.component.html',
  styleUrls: ['./it-listing.page.component.scss'],
})
export class ListingPageComponent implements OnInit {
  companys: Company[];
  isLoading = true;
  searchParam;
  noresults = false;
  selectedVehicleType: string;

  userData;
  user;
  userName;

  // @ViewChild(CdkVirtualScrollViewport, { static: true })
  // viewport: CdkVirtualScrollViewport;

  constructor(
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private route: ActivatedRoute,
    private appService: AppService,
    public ngroute: Router,
    private fbstore: AngularFirestore,
    private toastservice: ToastService
  ) {
    this.isLoading = true;
    this.route.queryParams.subscribe((params) => {
      this.searchParam = params;
      this.searchContactByLocation(this.searchParam);
    });

    this.selectedVehicleType = this.appService.selectedVehicleType;
  }

  async ngOnInit() {}

  trackByFn(_, item) {
    return item.id;
  }

  // searchContactByLocation(params) {
  // this.dataService.searchContactByLocation().subscribe((data: any) => {
  //   if (data.length > 0) {
  //     const filtereddata = data.filter(
  //       (x) => x.location == params.from || x.location === params.to
  //     );
  //     const filteredVehicle = filtereddata.filter(
  //       (v) => (v.serviceProviding = this.selectedVehicleType)
  //     );
  //     if (filteredVehicle.length > 0) {
  //       this.showLoading = false;
  //       this.noresults = false;
  //       this.companys = filteredVehicle;
  //     } else {
  //       this.showLoading = false;
  //       this.noresults = true;
  //     }
  //   }
  // });
  // }

  async searchContactByLocation(params) {
    try {
      await this.fbstore
        .collection('companys')
        .snapshotChanges()
        .subscribe((data) => {
          // if (data.length > 0) {
          //   const filtereddata = data.filter(
          //     (x) => x.location == params.from || x.location === params.to
          //   );
          //   const filteredVehicle = filtereddata.filter(
          //     (v) => (v.serviceProviding = this.selectedVehicleType)
          //   );
          //   if (filteredVehicle.length > 0) {
          //     this.isLoading = false;
          //     this.noresults = false;
          //     this.companys = filteredVehicle;
          //   } else {
          //     this.isLoading = false;
          //     this.noresults = true;
          //   }
          // }
          const filteredLocation = data.filter(
            (result) =>
              result.payload.doc.data()['location'] === params.from ||
              result.payload.doc.data()['location'] === params.to
          );
          // const filteredVehicleType = filteredLocation.filter((result) =>
          //   result.payload.doc
          //     .data()
          //     ['serviceProviding'].includes(this.selectedVehicleType)
          // );
          // people.filter(person => id_filter.includes(person.id))

          if (filteredLocation.length > 0) {
            this.noresults = false;
            this.companys = data.map((result) => {
              return {
                id: result.payload.doc.id,
                firstName: result.payload.doc.data()['firstName'],
                lastName: result.payload.doc.data()['lastName'],
                companyName: result.payload.doc.data()['companyName'],
                firmActivity: result.payload.doc.data()['firmActivity'],
                serviceProviding: result.payload.doc
                  .data()
                  ['serviceProviding'].toString(),
                landlineNumber: result.payload.doc.data()['landlineNumber'],
                mobileNumber: result.payload.doc.data()['mobileNumber'],
                location: result.payload.doc.data()['location'],
              };
            });
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
      //console.log(error.message);
    }
  }
}
