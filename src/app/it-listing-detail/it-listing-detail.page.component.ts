import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AppService } from '../services/app.servcie';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-listing',
  templateUrl: './it-listing-detail.page.component.html',
  styleUrls: ['./it-listing-detail.page.component.scss'],
})
export class ListingDetailPageComponent implements OnInit {
  id: number;
  company;
  paramId: string;
  vehicleType: string;
  isLoading = true;
  userData;
  user;
  userName;
  docId: string;
  companyId: string;
  searchParam;

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastservice: ToastService,
    public ngroute: Router,
    private fbstore: AngularFirestore,
    public appService: AppService,
    public fbauth: AngularFireAuth,
    private callNumber: CallNumber
  ) {
    this.docId = this.appService.docId;
    this.paramId = this.activatedRoute.snapshot.paramMap.get('id');
    this.companyId = this.appService.selectedCompanyId;
    this.activatedRoute.queryParams.subscribe((params) => {
      this.searchParam = params;
    });
  }

  ngOnInit() {
    this.getCompany();
  }

  async getCompany() {
    try {
      await this.fbstore
        .doc('companys/' + this.companyId)
        .valueChanges()
        .subscribe((result) => {
          this.isLoading = false;
          if (!result) {
            let navigationExtras: NavigationExtras = {
              queryParams: {
                from: this.searchParam.from,
                to: this.searchParam.to,
                firmActivity: this.searchParam.firmActivity,
              },
            };
            this.ngroute.navigate(['/listing'], navigationExtras);
          } else {
            this.vehicleType = result['vehicleType']
              .toString()
              .split(',')
              .join('\n');
            this.company = result;
          }
        });
    } catch (error) {
      this.toastservice.showToast(error.message, 2000);
    }
  }

  backToListing() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        from: this.searchParam.from,
        to: this.searchParam.to,
        firmActivity: this.searchParam.firmActivity,
      },
    };
    this.ngroute.navigate(['/listing'], navigationExtras);
  }

  async doLogout(): Promise<void> {
    await this.fbauth.signOut().then(() => {
      this.appService.selectedLanguage = '';
      this.ngroute.navigate(['splash']);
    });
  }

  callNow(number) {
    this.callNumber
      .callNumber(number, true)
      .then((res) => console.log('Launched dialer!', res))
      .catch((err) => console.log('Error launching dialer', err));
  }
}
