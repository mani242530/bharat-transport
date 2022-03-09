import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentSuccessComponent } from './it-payment-success.page.component';

/**
 * Routes
 */
const routes: Routes = [
  {
    path: '', // path
    component: PaymentSuccessComponent, // component
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
 * PaymentSuccessRoutingModule
 */
export class PaymentSuccessRoutingModule {}
