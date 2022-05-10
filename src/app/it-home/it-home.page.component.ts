import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import * as serviceProvidedLocation from '../json/service-provided-location';
import * as location from '../json/location';
import { AppService } from '../services/app.servcie';

@Component({
  selector: 'app-home',
  templateUrl: './it-home.page.component.html',
  styleUrls: ['./it-home.page.component.scss'],
})
export class HomePageComponent implements OnInit {
  locations = [];
  serviceProvidedLocations = [];
  userData;
  user;
  userName;

  docId: string;
  authfbObserver;

  firmActivitys = ['Booking', 'Supplier'];

  searchCompanyForm: FormGroup;
  @ViewChild('searchForm') searchForm: FormGroupDirective;

  constructor(
    private router: Router,
    public appService: AppService,
    public fbauth: AngularFireAuth
  ) {
    this.docId = this.appService.docId;
    const serviceLocations =
      serviceProvidedLocation.serviceProvidedLocationData;
    const locations = location.serviceProvidedLocationData;
    this.serviceProvidedLocations = serviceLocations.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    this.locations = locations.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
  }

  ngOnInit() {
    this.initializeForm();

    this.firmActivitys = this.firmActivitys.sort((a, b) =>
      a > b ? 1 : b > a ? -1 : 0
    );
  }

  initializeForm(): void {
    this.searchCompanyForm = new FormGroup({
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required]),
      firmActivity: new FormControl('', [Validators.required]),
    });
  }

  searchContactByLocation(values) {
    console.log(values);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        from: values && values.from,
        to: values && values.to,
        firmActivity: values && values.firmActivity,
      },
    };
    this.router.navigate(['listing'], navigationExtras);
  }

  async doLogout(): Promise<void> {
    await this.fbauth.signOut().then(() => {
      this.appService.selectedLanguage = '';
      // this.authfbObserver.unsubscribe();
      this.router.navigate(['splash']);
    });
  }

  getServiceProvidedLocationsName(event) {
    console.log(event);
    const location = this.locations.filter((data) =>
      data.name
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase())
    );
    console.log(location);

    this.locations = location;
  }
}
