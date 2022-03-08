import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SignUpPageComponent } from './it-signup.page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignUpPageRoutingModule } from './it-signup.routing.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: SignUpPageComponent,
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
  SignUpPageRoutingModule, // SignUpPageRoutingModule
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  SignUpPageComponent, // SignUpPageComponent
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
export class SignUpPageModule {}
