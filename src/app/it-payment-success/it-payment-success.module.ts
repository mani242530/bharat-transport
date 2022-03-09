import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PaymentSuccessComponent } from './it-payment-success.page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaymentSuccessRoutingModule } from './it-payment-success.routing.module';

const routes: Routes = [
  {
    path: '',
    component: PaymentSuccessComponent,
  },
];
/**
 * MODULES
 */
const MODULES = [
  CommonModule,
  FormsModule,
  IonicModule,
  ReactiveFormsModule,
  RouterModule.forChild(routes),
  FontAwesomeModule,
  PaymentSuccessRoutingModule, // PaymentSuccessRoutingModule
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  PaymentSuccessComponent, // PaymentSuccessComponent
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
export class PaymentSuccessModule {}
