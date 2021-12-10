import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from './services/app.servcie';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  authfbObserver;
  constructor(
    private platform: Platform,
    public fbauth: AngularFireAuth,
    public ngroute: Router,
    public translateService: TranslateService,
    public appservice: AppService
  ) {
    this.authfbObserver = fbauth.authState.subscribe((user) => {
      if (user) {
        console.log(user);
        console.log(user.phoneNumber);
        // this.ngroute.navigate(['home']);
        this.ngroute.navigate(['select-vehicle']);
      } else {
        console.log(user);
        this.ngroute.navigate(['splash']);
      }
    });

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });

    // if (this.userData) {
    //   [this.user] = this.userData && this.userData.map((item) => item);
    //   this.userName =
    //     this.user &&
    //     this.user.firstName + ' ' + this.user &&
    //     this.user.lastName;
    // }

    this.translateService.setDefaultLang('en');
  }

  async doLogout(): Promise<void> {
    await this.fbauth.signOut().then(() => {
      this.appservice.selectedLanguage = '';
      this.authfbObserver.unsubscribe();
    });
  }
}
