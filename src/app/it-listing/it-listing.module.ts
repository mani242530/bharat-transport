import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListingPageComponent } from './it-listing.page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListingPageRoutingModule } from './it-listing.page.routing.module';

// import { ScrollingModule } from "@angular/cdk/scrolling/public-api";
import { environment } from 'src/environments/environment';
import { AvatarModule } from 'ngx-avatar';

const routes: Routes = [
  {
    path: '',
    component: ListingPageComponent,
  },
];

/**
 * MODULES
 */
const MODULES = [
  CommonModule,
  FormsModule,
  IonicModule,
  RouterModule.forChild(routes),
  FontAwesomeModule,
  // ScrollingModule,
  AvatarModule,
  ListingPageRoutingModule, // ListingPageRoutingModule
  // AngularFirestoreModule,
  // AngularFireModule.initializeApp(environment.firebase),
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  ListingPageComponent, // ListingPageComponent
];

/**
 * PROVIDERS
 */
const PROVIDERS = [];

/**
 * Ng module
 */
@NgModule({
  imports: MODULES,
  exports: COMPONENTS,
  declarations: COMPONENTS,
  providers: PROVIDERS,
})
export class ListingPageModule {}
