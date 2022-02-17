(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-signin-it-signin-module"],{

/***/ "6kd8":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-signin/it-signin.page.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <!-- <ion-toolbar> -->\n  <div\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\n  >\n    <h5 class=\"font-weight-normal mb-0 text-white\">\n      <a class=\"text-purple\" routerLink=\"/get-started\"\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\n      ></a>\n      <ion-title>Sign In</ion-title>\n    </h5>\n  </div>\n  <ion-progress-bar\n    *ngIf=\"showProgress\"\n    color=\"warning\"\n    type=\"indeterminate\"\n  ></ion-progress-bar>\n  <!-- </ion-toolbar> -->\n</ion-header>\n\n<ion-content id=\"content\" fullscreen>\n  <!-- <cdk-virtual-scroll-viewport\n    class=\"scroll-viewport\"\n    #scroll\n    itemSize=\"80\"\n    minBufferPx=\"900\"\n    maxBufferPx=\"1350\"\n  > -->\n  <div id=\"sign-in-button\"></div>\n  <div\n    class=\"\n      osahan-index\n      bg-c\n      align-items-center\n      justify-content-center\n      vh-100\n      index-page\n      py-5\n    \"\n  >\n    <div class=\"px-3\">\n      <form [formGroup]=\"signInForm\" #signIn>\n        <ion-list>\n          <div class=\"form-group mb-4\">\n            <ion-label class=\"text-muted mb-1\">Mobile Number</ion-label>\n            <ion-input\n              class=\"form-control rc-form-control it-form-control mt-4\"\n              inputMode=\"tel\"\n              clearInput=\"true\"\n              formControlName=\"mobileNumber\"\n              autofocus=\"true\"\n              maxlength=\"10\"\n              minlength=\"10\"\n              placeholder=\"Enter 10 digit mobile number\"\n            ></ion-input>\n          </div>\n        </ion-list>\n        <button\n          type=\"submit\"\n          class=\"btn btn-purple btn-block osahanbus-btn mt-2\"\n          slot=\"end\"\n          fill=\"clear\"\n          [disabled]=\"!signInForm.valid\"\n          (click)=\"signinWithPhoneNumber(signInForm.value)\"\n        >\n          SIGN IN\n        </button>\n      </form>\n\n      <div\n        class=\"\n          sign-or\n          d-flex\n          align-items-center\n          justify-content-center\n          mt-4\n          mb-2\n        \"\n      >\n        <hr class=\"mr-4\" />\n        <p class=\"text-muted text-center py-2 m-0\">OR</p>\n        <hr class=\"ml-4\" />\n      </div>\n      <div class=\"osahan-signin text-center text-purple p-1\">\n        <p class=\"m-0\">\n          Not a member ?\n          <a routerLink=\"/select-language\" class=\"text-orange ml-2\">Sign Up</a>\n        </p>\n      </div>\n    </div>\n    <div class=\"osahan-signin text-center p-1\" *ngIf=\"invalidMobilenumber\">\n      <p class=\"m-5 pt-2 text-danger\">\n        {{ tryagain }}\n      </p>\n    </div>\n    <div class=\"osahan-signin text-center p-1\" *ngIf=\"mobileNumberNotFound\">\n      <p class=\"m-5 pt-2 text-danger\">\n        Sorry! Your mobile number is not registered with us. Please sign up to create account\n      </p>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "SGL0":
/*!*******************************************************!*\
  !*** ./src/app/it-signin/it-signin.routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _it_signin_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./it-signin.page.component */ "Y/qf");

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_signin_page_component__WEBPACK_IMPORTED_MODULE_3__["SignInPageComponent"],
    },
];
/**
 * Ng module
 */
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
    /**
     * SignInPageRoutingModule
     */
], SignInPageRoutingModule);



/***/ }),

/***/ "Y/qf":
/*!*******************************************************!*\
  !*** ./src/app/it-signin/it-signin.page.component.ts ***!
  \*******************************************************/
/*! exports provided: SignInPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageComponent", function() { return SignInPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_it_signin_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./it-signin.page.component.html */ "6kd8");
/* harmony import */ var _it_signin_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./it-signin.page.component.scss */ "h7ix");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _services_app_servcie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/app.servcie */ "+hHy");












let SignInPageComponent = class SignInPageComponent {
    constructor(router, alertController, formBuilder, authtenticationService, fbauth, fbstore, appService) {
        this.router = router;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.authtenticationService = authtenticationService;
        this.fbauth = fbauth;
        this.fbstore = fbstore;
        this.appService = appService;
        this.OTP = '';
        this.CountryCode = '+91';
        this.showOTPInput = false;
        this.OTPmessage = 'An OTP is sent to your number. You should receive it in 15 s';
        this.showProgress = false;
        this.invalidMobilenumber = false;
        this.mobileNumberNotFound = false;
    }
    ngOnInit() {
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
        });
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_8__["default"].auth.RecaptchaVerifier('sign-in-button', {
                size: 'invisible',
                callback: (response) => { },
                'expired-callback': () => { },
            });
        });
    }
    ionViewDidLoad() {
        this.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_8__["default"].auth.RecaptchaVerifier('sign-in-button', {
            size: 'invisible',
            callback: (response) => { },
            'expired-callback': () => { },
        });
    }
    // Button event after the nmber is entered and button is clicked
    signinWithPhoneNumber(formvalue) {
        this.showProgress = true;
        const mobileNumber = this.CountryCode + formvalue.mobileNumber;
        if (formvalue.mobileNumber.length === 10) {
            this.authfbObserver = this.fbauth.authState.subscribe((user) => {
                // if (user) {
                this.fbstore
                    .collection('companys')
                    .snapshotChanges()
                    .subscribe((data) => {
                    const filteredUser = data.filter((result) => result.payload.doc.data()['mobileNumber'] === mobileNumber);
                    if (filteredUser.length > 0) {
                        console.log(filteredUser[0].payload.doc.data());
                        if (filteredUser[0].payload.doc.data()) {
                            this.appService.docId = filteredUser[0].payload.doc.id;
                            console.log(filteredUser[0].payload.doc.id);
                            if (filteredUser[0].payload.doc.data()['paymentStatus'] === 'PAID') {
                                console.log('user did pay');
                                this.showProgress = false;
                                this.mobileNumberNotFound = false;
                                this.router.navigate(['/select-vehicle']);
                            }
                            else {
                                console.log('user did not pay');
                                this.showProgress = false;
                                this.mobileNumberNotFound = false;
                                this.router.navigate(['/payment']);
                            }
                        }
                        else {
                            this.showProgress = false;
                            this.mobileNumberNotFound = true;
                            console.log('user not found in db');
                        }
                    }
                    else {
                        this.showProgress = false;
                        this.mobileNumberNotFound = true;
                        console.log('user not found in db');
                    }
                });
            });
        }
    }
};
SignInPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthtenticationService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"] },
    { type: _services_app_servcie__WEBPACK_IMPORTED_MODULE_11__["AppService"] }
];
SignInPageComponent.propDecorators = {
    signIn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['signIn',] }]
};
SignInPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signin',
        template: _raw_loader_it_signin_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_it_signin_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignInPageComponent);



/***/ }),

/***/ "h7ix":
/*!*********************************************************!*\
  !*** ./src/app/it-signin/it-signin.page.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2l0LXNpZ25pbi5wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBRUY7QUFBQSxXQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7QUFHRiIsImZpbGUiOiJpdC1zaWduaW4ucGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJ1dHRvbiBTdHlsZXMgKi9cbi5nb29nbGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNTA3Y2MwO1xuICBjb2xvcjogIzUwN2NjMCAhaW1wb3J0YW50O1xufVxuLmZiLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2RmNDkzMDtcbiAgY29sb3I6ICNkZjQ5MzAgIWltcG9ydGFudDtcbn1cbi8qIFNpZ25pbiAqL1xuLnNpZ24tb3IgaHIge1xuICB3aWR0aDogMTMwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuIl19 */");

/***/ }),

/***/ "qdbj":
/*!***********************************************!*\
  !*** ./src/app/it-signin/it-signin.module.ts ***!
  \***********************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _it_signin_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./it-signin.page.component */ "Y/qf");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _it_signin_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./it-signin.routing.module */ "SGL0");









const routes = [
    {
        path: '',
        component: _it_signin_page_component__WEBPACK_IMPORTED_MODULE_6__["SignInPageComponent"],
    },
];
/**
 * MODULES
 */
const MODULES = [
    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
    _it_signin_routing_module__WEBPACK_IMPORTED_MODULE_8__["SignInPageRoutingModule"],
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_signin_page_component__WEBPACK_IMPORTED_MODULE_6__["SignInPageComponent"],
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let SignInPageModule = class SignInPageModule {
};
SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], SignInPageModule);



/***/ })

}]);
//# sourceMappingURL=it-signin-it-signin-module.js.map