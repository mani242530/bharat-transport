import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentFailureComponent } from './it-payment-failure.page.component';

/**
 * Routes
 */
const routes: Routes = [
  {
    path: '', // path
    component: PaymentFailureComponent, // component
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
 * PaymentFailureRoutingModule
 */
export class PaymentFailureRoutingModule {}
