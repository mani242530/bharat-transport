import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ResetPinPageComponent } from './it-reset-pin.page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResetPinPageRoutingModule } from './it-reset-pin.routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgOtpInputModule } from 'ng-otp-input';

const routes: Routes = [
  {
    path: '',
    component: ResetPinPageComponent,
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
  ResetPinPageRoutingModule, // ResetPinPageRoutingModule
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  ResetPinPageComponent, // ResetPinPageComponent
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
  declarations: [ResetPinPageComponent],
})
export class ResetPinPageModule {}
