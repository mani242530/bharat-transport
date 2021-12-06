/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInPageComponent } from "./it-signin.page.component";

/**
 * Routes
 */
const routes: Routes = [
  {
    path: "", // path
    component: SignInPageComponent, // component
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
 * SignInPageRoutingModule
 */
export class SignInPageRoutingModule {}
