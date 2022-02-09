import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  {
    path: 'splash',
    loadChildren: () =>
      import('./it-splash/it-splash.module').then((m) => m.SplashPageModule),
  },
  {
    path: 'get-started',
    loadChildren: () =>
      import('./it-get-started/it-get-started.module').then(
        (m) => m.GetStartedPageModule
      ),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./it-signin/it-signin.module').then((m) => m.SignInPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./it-signup/it-signup.module').then((m) => m.SignUpPageModule),
  },
  {
    path: 'select-language',
    loadChildren: () =>
      import('./it-select-language/it-select-language.module').then(
        (m) => m.SelectLanguagePageModule
      ),
  },
  {
    path: 'verification',
    loadChildren: () =>
      import('./it-verification/it-verification.module').then(
        (m) => m.VerificationPageModule
      ),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./it-payment/it-payment.module').then((m) => m.PaymentPageModule),
  },
  {
    path: 'select-vehicle',
    loadChildren: () =>
      import('./it-select-vehicle/it-select-vehicle.module').then(
        (m) => m.SelectVehiclePageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./it-home/it-home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'listing',
    loadChildren: () =>
      import('./it-listing/it-listing.module').then((m) => m.ListingPageModule),
  },
  {
    path: 'listing-detail',
    loadChildren: () =>
      import('./it-listing-detail/it-listing-detail.module').then(
        (m) => m.ListingDetailPageModule
      ),
  },
  {
    path: 'profile/:id',
    loadChildren: () =>
      import('./it-profile/it-profile.module').then(
        (p) => p.ProfilePageModule
      ),
  },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./home/home.module').then((m) => m.HomePageModule),
  // },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./login/login.module').then((m) => m.LoginPageModule),
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () =>
  //     import('./signup/signup.module').then((m) => m.SignupPageModule),
  // },
  // {
  //   path: 'modify/:id',
  //   loadChildren: () =>
  //     import('./modify/modify.module').then((m) => m.ModifyPageModule),
  // },
  // {
  //   path: 'addnew',
  //   loadChildren: () =>
  //     import('./addnew/addnew.module').then((m) => m.AddnewPageModule),
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
