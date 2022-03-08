import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedPageComponent } from './it-get-started.page.component';

/**
 * Routes
 */
const routes: Routes = [
  {
    path: '', // path
    component: GetStartedPageComponent, // component
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
 * GetStartedPageRoutingModule
 */
export class GetStartedPageRoutingModule {}
