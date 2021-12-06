import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SelectLanguagePageComponent } from "./it-select-language.page.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SelectLanguagePageRoutingModule } from "./it-select-language.page.routing.module";

const routes: Routes = [
  {
    path: "",
    component: SelectLanguagePageComponent,
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
  SelectLanguagePageRoutingModule, // SelectLanguagePageRoutingModule
];

/**
 * COMPONENTS
 */
const COMPONENTS = [
  SelectLanguagePageComponent, // SelectLanguagePageComponent
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
export class SelectLanguagePageModule {}
