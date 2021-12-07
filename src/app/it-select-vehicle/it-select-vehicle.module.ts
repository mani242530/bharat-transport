import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectVehiclePageComponent } from './it-select-vehicle.page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectVehiclePageRoutingModule } from './it-select-vehicle.page.routing.module';
import { AvatarModule } from 'ngx-avatar';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: SelectVehiclePageComponent,
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
  AvatarModule,
  TranslateModule,
  SelectVehiclePageRoutingModule, // SelectVehiclePageRoutingModule
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  SelectVehiclePageComponent, // SelectVehiclePageComponent
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
export class SelectVehiclePageModule {}
