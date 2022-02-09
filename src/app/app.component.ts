import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from './services/app.servcie';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  authfbObserver;
  userDetails;
  username;
  currentDate = new Date();

  constructor(
    private platform: Platform,
    public fbauth: AngularFireAuth,
    public ngroute: Router,
    public translateService: TranslateService,
    public appservice: AppService,
    private fbstore: AngularFirestore
  ) {
    this.authfbObserver = fbauth.authState.subscribe((user) => {
      if (user) {
        this.fbstore
          .collection('companys')
          .snapshotChanges()
          .subscribe((data) => {
            const filteredUser = data.filter(
              (result) =>
                result.payload.doc.data()['mobileNumber'] === user.phoneNumber
            );
            debugger;
            if(filteredUser.length > 0) {
              console.log(filteredUser[0].payload.doc.data());
              if (filteredUser[0].payload.doc.data()) {
                this.userDetails = filteredUser[0].payload.doc.data();
                this.username = this.userDetails.companyName ;
              } else {
                console.log('user not found in db');
              }
            }
            
          });
        this.ngroute.navigate(['select-vehicle']);
      } else {
        console.log('user not logged in');
        this.ngroute.navigate(['splash']);
      }
    });

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });

    this.translateService.setDefaultLang('en');
  }

  async doLogout(): Promise<void> {
    await this.fbauth.signOut().then(() => {
      this.appservice.selectedLanguage = '';
      this.authfbObserver.unsubscribe();
    });
  }
}
