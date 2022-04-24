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
    path: 'pin',
    loadChildren: () =>
      import('./it-password-pin/it-password-pin.module').then(
        (p) => p.PasswordPinPageModule
      ),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./it-payment/it-payment.module').then((m) => m.PaymentPageModule),
  },
  {
    path: 'payment-success/:paymentid',
    loadChildren: () =>
      import('./it-payment-success/it-payment-success.module').then(
        (p) => p.PaymentSuccessModule
      ),
  },
  {
    path: 'payment-failure',
    loadChildren: () =>
      import('./it-payment-failure/it-payment-failure.module').then(
        (p) => p.PaymentFailureModule
      ),
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
      import('./it-profile/it-profile.module').then((p) => p.ProfilePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
