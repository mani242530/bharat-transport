import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GetStartedPageComponent } from './it-get-started.page.component';
import { GetStartedPageRoutingModule } from './it-get-started.routing.module';

const routes: Routes = [
  {
    path: '',
    component: GetStartedPageComponent,
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
  GetStartedPageRoutingModule, // MANIFEST CHECK ROUTING MODULE
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  GetStartedPageComponent, // MANIFEST CHECK COMPONENT
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
export class GetStartedPageModule {}
