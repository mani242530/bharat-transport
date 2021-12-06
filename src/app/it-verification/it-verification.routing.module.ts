/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VerificationPageComponent } from "./it-verification.page.component";
/**
 * Routes
 */
const routes: Routes = [
  {
    path: "", // path
    component: VerificationPageComponent, // component
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
 * VerificationPageRoutingModule
 */
export class VerificationPageRoutingModule {}
