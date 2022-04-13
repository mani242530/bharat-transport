import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PaymentFailureComponent } from './it-payment-failure.page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaymentFailureRoutingModule } from './it-payment-failure.routing.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: PaymentFailureComponent,
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
  PaymentFailureRoutingModule, // PaymentFailureRoutingModule
  TranslateModule,
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  PaymentFailureComponent, // PaymentFailureComponent
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
export class PaymentFailureModule {}
