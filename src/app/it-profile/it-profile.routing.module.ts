/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./it-profile.page.component";

/**
 * Routes
 */
const routes: Routes = [
  {
    path: "", // path
    component: ProfileComponent, // component
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
 * ProfileRoutingModule
 */
export class ProfileRoutingModule {}
