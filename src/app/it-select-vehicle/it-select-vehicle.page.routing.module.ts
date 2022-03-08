import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectVehiclePageComponent } from './it-select-vehicle.page.component';

/**
 * Routes
 */
const routes: Routes = [
  {
    path: '', // path
    component: SelectVehiclePageComponent, // component
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
 * SelectVehiclePageRoutingModule
 */
export class SelectVehiclePageRoutingModule {}
