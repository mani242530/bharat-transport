import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PasswordPinPageComponent } from './it-password-pin.page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PasswordPinPageRoutingModule } from './it-password-pin.routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgOtpInputModule } from 'ng-otp-input';

const routes: Routes = [
  {
    path: '',
    component: PasswordPinPageComponent,
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
  PasswordPinPageRoutingModule, // PasswordPinPageRoutingModule
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  PasswordPinPageComponent, // PasswordPinPageComponent
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
  declarations: [PasswordPinPageComponent],
})
export class PasswordPinPageModule {}
