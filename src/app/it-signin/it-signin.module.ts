import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SignInPageComponent } from './it-signin.page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignInPageRoutingModule } from './it-signin.routing.module';

const routes: Routes = [
  {
    path: '',
    component: SignInPageComponent,
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
  SignInPageRoutingModule, // SignInPageRoutingModule
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  SignInPageComponent, // SignInPageComponent
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
export class SignInPageModule {}
