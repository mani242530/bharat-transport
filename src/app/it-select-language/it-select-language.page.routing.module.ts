/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SelectLanguagePageComponent } from "./it-select-language.page.component";

/**
 * Routes
 */
const routes: Routes = [
  {
    path: "", // path
    component: SelectLanguagePageComponent, // component
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
 * SelectLanguagePageRoutingModule
 */
export class SelectLanguagePageRoutingModule {}
