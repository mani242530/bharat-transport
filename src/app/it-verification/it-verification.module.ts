import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerificationPageComponent } from './it-verification.page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VerificationPageRoutingModule } from './it-verification.routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgOtpInputModule } from 'ng-otp-input';

const routes: Routes = [
  {
    path: '',
    component: VerificationPageComponent,
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
  TranslateModule,
  NgOtpInputModule,
  VerificationPageRoutingModule, // VerificationPageRoutingModule
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  VerificationPageComponent, // VerificationPageComponent
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
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
  ],
  declarations: [VerificationPageComponent],
})
export class VerificationPageModule {}
