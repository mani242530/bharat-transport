import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./it-home.page.component";

/**
 * Routes
 */
const routes: Routes = [
  {
    path: "", // path
    component: HomePageComponent, // component
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
 * HomePageRoutingModule
 */
export class HomePageRoutingModule {}
