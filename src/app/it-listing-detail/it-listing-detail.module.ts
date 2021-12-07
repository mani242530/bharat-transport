import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListingDetailPageComponent } from './it-listing-detail.page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListingDetailPageRoutingModule } from './it-listing-detail.page.routing.module';
import { AvatarModule } from 'ngx-avatar';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: ':id',
    component: ListingDetailPageComponent,
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
  AvatarModule,
  ListingDetailPageRoutingModule, // ListingDetailPageRoutingModule
  TranslateModule,
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  ListingDetailPageComponent, // ListingDetailPageComponent
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
export class ListingDetailPageModule {}
