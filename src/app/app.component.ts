import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from './services/app.servcie';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Company } from './models/company';
import { map } from 'rxjs/operators';

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
  filteredUser;

  companysCollection: AngularFirestoreCollection<Company>;

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
        this.companysCollection = this.fbstore.collection('companys', (ref) =>
          ref.where('mobileNumber', '==', user.phoneNumber)
        );
        this.filteredUser = this.companysCollection.snapshotChanges().pipe(
          map((actions) => {
            return actions.map((action) => {
              const data = action.payload.doc.data() as Company;
              return {
                id: action.payload.doc.id,
                paymentStatus: data.paymentStatus,
                accountStatus: data.accountStatus,
                firmActivity: data.firmActivity,
              };
            });
          })
        );
        this.filteredUser.subscribe((snapshot) => {
          if (snapshot.length == 0) {
            this.ngroute.navigate(['splash']);
          } else {
            this.username = snapshot[0].companyName;
            this.userDetails = snapshot[0];
            if (snapshot[0].companyName === 'Paid') {
              this.ngroute.navigate(['select-vehicle']);
            } else {
              this.ngroute.navigate(['payment']);
            }
          }
        });
      } else {
        this.ngroute.navigate(['splash']);
      }

      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
      });

      this.translateService.setDefaultLang('en');
    });
  }

  async doLogout(): Promise<void> {
    await this.fbauth.signOut().then(() => {
      this.appservice.selectedLanguage = '';
      this.authfbObserver.unsubscribe();
      this.filteredUser.unsubscribe();
    });
  }
}
