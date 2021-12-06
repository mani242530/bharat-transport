/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SplashPageComponent } from "./it-splash.page.component";
/**
 * Routes
 */
const routes: Routes = [
  {
    path: "", // path
    component: SplashPageComponent, // component
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
 * SplashPageRoutingModule
 */
export class SplashPageRoutingModule {}
