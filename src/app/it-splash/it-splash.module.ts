import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SplashPageComponent } from './it-splash.page.component';
import { SplashPageRoutingModule } from './it-splash.routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: SplashPageComponent,
  },
];

/**
 * MODULES
 */
const MODULES = [
  FormsModule,
  IonicModule,
  CommonModule, // COMMON MODULE
  RouterModule.forChild(routes),
  SplashPageRoutingModule, // SplashPageRoutingModule
  FontAwesomeModule,
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  SplashPageComponent, // SplashPageComponent
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
export class SplashPageModule {}
