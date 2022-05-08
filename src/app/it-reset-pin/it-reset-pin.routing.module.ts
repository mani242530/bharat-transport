import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPinPageComponent } from './it-reset-pin.page.component';
/**
 * Routes
 */
const routes: Routes = [
  {
    path: '', // path
    component: ResetPinPageComponent, // component
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
 * ResetPinPageRoutingModule
 */
export class ResetPinPageRoutingModule {}
