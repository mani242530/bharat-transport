import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicSelectableModule } from '@ionic-selectable/angular';
import { IonicModule } from '@ionic/angular';
import { MbscModule } from '@mobiscroll/angular-lite';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarModule } from 'ngx-avatar';
import { HomePageComponent } from './it-home.page.component';
import { HomePageRoutingModule } from './it-home.routing.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
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
  AvatarModule,
  TranslateModule,
  HomePageRoutingModule,
  IonicSelectableModule,
  MbscModule
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  HomePageComponent, // HomePageComponent
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
export class HomePageModule {}
