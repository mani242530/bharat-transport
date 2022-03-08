import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentPageComponent } from './it-payment.page.component';

/**
 * Routes
 */
const routes: Routes = [
  {
    path: '', // path
    component: PaymentPageComponent, // component
  },
];

/**
 * Ng module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)], // imports
  exports: [RouterModule], // exports
})

/**
 * PaymentPageRoutingModule
 */
export class PaymentPageRoutingModule {}
