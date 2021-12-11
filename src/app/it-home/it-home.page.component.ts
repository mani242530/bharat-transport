import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import * as location from '../json/location';

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

  searchCompanyForm: FormGroup;
  @ViewChild('searchForm') searchForm: FormGroupDirective;

  constructor(private router: Router) {
    this.locations = location.locationData;
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.searchCompanyForm = new FormGroup({
      from: new FormControl(''),
      to: new FormControl(''),
    });
  }

  searchContactByLocation(values) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        from: values.from,
        to: values.to,
      },
    };
    this.router.navigate(['listing'], navigationExtras);
  }
}
