import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfileComponent } from './it-profile.page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileRoutingModule } from './it-profile.routing.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
];
/**
 * MODULES
 */
const MODULES = [
  CommonModule,
  FormsModule,
  IonicModule,
  ReactiveFormsModule,
  RouterModule.forChild(routes),
  FontAwesomeModule,
  TranslateModule,
  ProfileRoutingModule, // ProfileRoutingModule
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  ProfileComponent, // ProfileComponent
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
export class ProfilePageModule {}
