import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import * as location from '../json/location';
import * as serviceProvidedLocation from '../json/service-provided-location';
import { AppService } from '../services/app.servcie';

@Component({
  selector: 'app-home',
  templateUrl: './it-home.page.component.html',
  styleUrls: ['./it-home.page.component.scss'],
})
export class HomePageComponent implements OnInit {
  locations;
  userData;
  user;
  userName;
  serviceProvidedLocations = [];
  docId: string;
  authfbObserver;

  firmActivitys = [
    'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.FREIGHT',
    'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.BOOKING',
    'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.SUPPLIER',
    'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.OWNER',
    'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.DRIVER',
  ];

  searchCompanyForm: FormGroup;
  @ViewChild('searchForm') searchForm: FormGroupDirective;

  constructor(private router: Router, public appService: AppService,  public fbauth: AngularFireAuth) {
    this.docId = this.appService.docId;
    this.locations = location.puneData;
    const serviceLocations = serviceProvidedLocation.serviceProvidedLocationData
    this.serviceProvidedLocations = serviceLocations.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

  ngOnInit() {
    this.initializeForm();

    this.firmActivitys = this.firmActivitys.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0));
  }

  initializeForm(): void {
    this.searchCompanyForm = new FormGroup({
      from: new FormControl(''),
      to: new FormControl(''),
      firmActivity: new FormControl(''),
    });
  }

  searchContactByLocation(values) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        from: values.from,
        to: values.to,
        firmActivity: values.firmActivity
      },
    };
    this.router.navigate(['listing'], navigationExtras);
  }

  async doLogout(): Promise<void> {
    await this.fbauth.signOut().then(() => {
      this.appService.selectedLanguage = '';
      this.router.navigate(['splash']);
    });
  }
}
