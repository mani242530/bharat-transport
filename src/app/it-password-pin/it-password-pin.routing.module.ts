import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordPinPageComponent } from './it-password-pin.page.component';
/**
 * Routes
 */
const routes: Routes = [
  {
    path: '', // path
    component: PasswordPinPageComponent, // component
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
 * PasswordPinPageRoutingModule
 */
export class PasswordPinPageRoutingModule {}
