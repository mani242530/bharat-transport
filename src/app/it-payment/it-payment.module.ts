import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { PaymentPageComponent } from "./it-payment.page.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PaymentPageRoutingModule } from "./it-payment.routing.module";

const routes: Routes = [
  {
    path: "",
    component: PaymentPageComponent,
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
  PaymentPageRoutingModule, // PaymentPageRoutingModule
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  PaymentPageComponent, // PaymentPageComponent
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
  declarations: [PaymentPageComponent],
})
export class PaymentPageModule {}
