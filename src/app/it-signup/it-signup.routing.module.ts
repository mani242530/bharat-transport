/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignUpPageComponent } from "./it-signup.page.component";

/**
 * Routes
 */
const routes: Routes = [
  {
    path: "", // path
    component: SignUpPageComponent, // component
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
 * SignUpPageRoutingModule
 */
export class SignUpPageRoutingModule {}
