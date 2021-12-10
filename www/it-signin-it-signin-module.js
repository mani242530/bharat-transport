(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-signin-it-signin-module"],{

/***/ "6kd8":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-signin/it-signin.page.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- <ion-toolbar> -->\r\n  <div\r\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\r\n  >\r\n    <h5 class=\"font-weight-normal mb-0 text-white\">\r\n      <a class=\"text-purple\" routerLink=\"/get-started\"\r\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\r\n      ></a>\r\n      <ion-title>Sign In</ion-title>\r\n    </h5>\r\n  </div>\r\n  <ion-progress-bar\r\n    *ngIf=\"showProgress\"\r\n    color=\"warning\"\r\n    type=\"indeterminate\"\r\n  ></ion-progress-bar>\r\n  <!-- </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <!-- <cdk-virtual-scroll-viewport\r\n    class=\"scroll-viewport\"\r\n    #scroll\r\n    itemSize=\"80\"\r\n    minBufferPx=\"900\"\r\n    maxBufferPx=\"1350\"\r\n  > -->\r\n  <div id=\"sign-in-button\"></div>\r\n  <div\r\n    class=\"\r\n      osahan-index\r\n      bg-c\r\n      align-items-center\r\n      justify-content-center\r\n      vh-100\r\n      index-page\r\n      py-5\r\n    \"\r\n  >\r\n    <div class=\"px-3\">\r\n      <form [formGroup]=\"signInForm\" #signIn>\r\n        <ion-list>\r\n          <div class=\"form-group mb-4\">\r\n            <ion-label class=\"text-muted mb-1\">Mobile Number</ion-label>\r\n            <ion-input\r\n              class=\"form-control rc-form-control it-form-control mt-4\"\r\n              inputMode=\"tel\"\r\n              clearInput=\"true\"\r\n              formControlName=\"mobileNumber\"\r\n              autofocus=\"true\"\r\n              maxlength=\"10\"\r\n              minlength=\"10\"\r\n              placeholder=\"Ex: 1234567890\"\r\n            ></ion-input>\r\n          </div>\r\n        </ion-list>\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-purple btn-block osahanbus-btn mt-2\"\r\n          slot=\"end\"\r\n          fill=\"clear\"\r\n          [disabled]=\"!signInForm.valid\"\r\n          (click)=\"signinWithPhoneNumber(signInForm.value)\"\r\n        >\r\n          SIGN IN\r\n        </button>\r\n      </form>\r\n\r\n      <div\r\n        class=\"\r\n          sign-or\r\n          d-flex\r\n          align-items-center\r\n          justify-content-center\r\n          mt-4\r\n          mb-2\r\n        \"\r\n      >\r\n        <hr class=\"mr-4\" />\r\n        <p class=\"text-muted text-center py-2 m-0\">OR</p>\r\n        <hr class=\"ml-4\" />\r\n      </div>\r\n      <div class=\"osahan-signin text-center text-purple p-1\">\r\n        <p class=\"m-0\">\r\n          Not a member ?\r\n          <a routerLink=\"/select-language\" class=\"text-orange ml-2\">Sign Up</a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div\r\n      class=\"osahan-signin text-center text-muted p-1\"\r\n      *ngIf=\"invalidMobilenumber\"\r\n    >\r\n      <p class=\"m-5 pt-2\">Invalid mobile number. Please check and try again.</p>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

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











let SignInPageComponent = class SignInPageComponent {
    constructor(router, alertController, formBuilder, authtenticationService, fbauth, fbstore) {
        this.router = router;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.authtenticationService = authtenticationService;
        this.fbauth = fbauth;
        this.fbstore = fbstore;
        this.OTP = '';
        this.CountryCode = '+91';
        this.showOTPInput = false;
        this.OTPmessage = 'An OTP is sent to your number. You should receive it in 15 s';
        this.showProgress = false;
        this.invalidMobilenumber = false;
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
        if (formvalue.mobileNumber.length === 10) {
            return new Promise((resolve, reject) => {
                this.authtenticationService
                    .signInWithPhoneNumber(this.recaptchaVerifier, this.CountryCode + formvalue.mobileNumber)
                    .then((success) => {
                    this.showProgress = false;
                    this.invalidMobilenumber = false;
                    const authfbObserver = this.fbauth.authState.subscribe((user) => {
                        console.log(user);
                        if (user) {
                            this.fbstore
                                .collection('companys')
                                .snapshotChanges()
                                .subscribe((data) => {
                                const filteredUser = data.filter((result) => result.payload.doc.data()['mobileNUmber'] ===
                                    user.phoneNumber);
                                console.log(filteredUser);
                                if (filteredUser) {
                                    this.router.navigate(['/verification']);
                                }
                                else {
                                }
                            });
                        }
                        resolve(user);
                    });
                })
                    .catch((error) => {
                    this.showProgress = false;
                    this.invalidMobilenumber = true;
                    reject(error);
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
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGl0LXNpZ25pbi5wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBRUY7QUFBQSxXQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7QUFHRiIsImZpbGUiOiJpdC1zaWduaW4ucGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJ1dHRvbiBTdHlsZXMgKi9cclxuLmdvb2dsZS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTA3Y2MwO1xyXG4gIGNvbG9yOiAjNTA3Y2MwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZiLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItY29sb3I6ICNkZjQ5MzA7XHJcbiAgY29sb3I6ICNkZjQ5MzAgIWltcG9ydGFudDtcclxufVxyXG4vKiBTaWduaW4gKi9cclxuLnNpZ24tb3IgaHIge1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4iXX0= */");

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