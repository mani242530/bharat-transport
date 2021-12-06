/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListingDetailPageComponent } from "./it-listing-detail.page.component";

/**
 * Routes
 */
const routes: Routes = [
  {
    path: "", // path
    component: ListingDetailPageComponent, // component
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
 * ListingDetailPageRoutingModule
 */
export class ListingDetailPageRoutingModule {}
