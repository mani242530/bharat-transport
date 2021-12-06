import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    public fbauth: AngularFireAuth,
    public ngroute: Router
  ) {
    const authfbObserver = fbauth.authState.subscribe((user) => {
      if (user) {
        console.log(user);
        this.ngroute.navigate(['home']);
        authfbObserver.unsubscribe();
      } else {
        console.log(user);
        this.ngroute.navigate(['splash']);
        authfbObserver.unsubscribe();
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
  }

  async doLogout(): Promise<void> {
    await this.fbauth.signOut().then(() => {
      this.ngroute.navigate(['signin']);
    });
  }
}
