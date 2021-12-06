/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListingPageComponent } from "./it-listing.page.component";

/**
 * Routes
 */
const routes: Routes = [
  {
    path: "", // path
    component: ListingPageComponent, // component
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
 * ListingPageRoutingModule
 */
export class ListingPageRoutingModule {}
