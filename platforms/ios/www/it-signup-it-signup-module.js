(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-signup-it-signup-module"],{

/***/ "0qXx":
/*!***********************************************!*\
  !*** ./src/app/it-signup/it-signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _it_signup_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./it-signup.page.component */ "kY3p");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _it_signup_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./it-signup.routing.module */ "xfUv");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










const routes = [
    {
        path: '',
        component: _it_signup_page_component__WEBPACK_IMPORTED_MODULE_6__["SignUpPageComponent"],
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
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
    _it_signup_routing_module__WEBPACK_IMPORTED_MODULE_8__["SignUpPageRoutingModule"],
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_signup_page_component__WEBPACK_IMPORTED_MODULE_6__["SignUpPageComponent"],
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], SignUpPageModule);



/***/ }),

/***/ "DOkm":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-signup/it-signup.page.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <!-- <ion-toolbar> -->\n  <div\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\n  >\n    <h5 class=\"font-weight-normal mb-0 text-white\">\n      <a class=\"text-purple\" routerLink=\"/get-started\"\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\n      ></a>\n      <ion-title>{{ \"APP.CREATE_ACCOUNT.HEADER\" | translate }}</ion-title>\n    </h5>\n  </div>\n  <ion-progress-bar\n    *ngIf=\"showProgress\"\n    color=\"warning\"\n    type=\"indeterminate\"\n  ></ion-progress-bar>\n  <!-- </ion-toolbar> -->\n</ion-header>\n\n<ion-content id=\"content\" fullscreen>\n  <!-- <cdk-virtual-scroll-viewport\n    class=\"scroll-viewport\"\n    #scroll\n    itemSize=\"80\"\n    minBufferPx=\"900\"\n    maxBufferPx=\"1350\"\n  > -->\n  <div id=\"sign-UP-button\"></div>\n  <div\n    class=\"\n      osahan-index\n      bg-c\n      align-items-center\n      justify-content-center\n      index-page\n    \"\n  >\n    <div class=\"px-3 py-3\">\n      <form [formGroup]=\"createCompanyForm\" #createForm>\n        <ion-list>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-muted mb-1\">{{\n              'APP.CREATE_ACCOUNT.PLACEHOLDER.COMPANY_NAME' | translate\n            }}<span class=\"required-field\"></span></ion-label>\n            <ion-input\n              class=\"form-control rc-form-control it-form-control\"\n              inputMode=\"text\"\n              clearInput=\"true\"\n              formControlName=\"companyName\"\n              required\n              maxlength=\"250\"\n              placeholder=\"Enter company name\"\n            ></ion-input>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-muted mb-1\">{{\n              'APP.CREATE_ACCOUNT.PLACEHOLDER.OWNER_NAME' | translate\n            }}<span class=\"required-field\"></span></ion-label>\n            <ion-input\n              class=\"form-control rc-form-control it-form-control\"\n              inputMode=\"text\"\n              clearInput=\"true\"\n              formControlName=\"ownerName\"\n              required\n              maxlength=\"250\"\n              placeholder=\"Enter owner name\"\n            ></ion-input>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-muted mb-1\">{{\n              'APP.CREATE_ACCOUNT.PLACEHOLDER.SELECT_FIRM_ACTIVITY'\n                | translate\n            }}<span class=\"required-field\"></span></ion-label>\n            <ion-select\n              interface=\"popover\"\n              class=\"form-control rc-form-control native-select it-form-control\"\n              role=\"combobox\"\n              slot\n              formControlName=\"firmActivity\"\n              required\n              placeholder=\"Select\"\n            >\n              <ion-select-option\n                *ngFor=\"let firmActivity of firmActivitys\"\n                selected=\"false\"\n                value=\"{{ firmActivity | translate }}\"\n                title=\"{{ firmActivity | translate }}\"\n                >{{ firmActivity | translate }}</ion-select-option\n              >\n            </ion-select>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-muted mb-1\">{{\n              'APP.CREATE_ACCOUNT.PLACEHOLDER.SELECT_LOCATION' | translate\n            }}<span class=\"required-field\"></span></ion-label>\n            <ion-select\n              interface=\"popover\"\n              class=\"form-control rc-form-control native-select it-form-control\"\n              formControlName=\"location\"\n              required\n              placeholder=\"Select\"\n            >\n              <ion-select-option\n                *ngFor=\"let location of locations\"\n                value=\"{{ location.name | translate }}\"\n                title=\"{{ location.name | translate }}\"\n                >{{ location.name | translate }}</ion-select-option\n              >\n            </ion-select>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-muted mb-1\">{{\n              'APP.CREATE_ACCOUNT.PLACEHOLDER.SELECT_SERVICE_PROVIDED_LOCATION' | translate\n            }}<span class=\"required-field\"></span></ion-label>\n            <ion-select\n              multiple=\"true\"\n              interface=\"popover\"\n              class=\"form-control rc-form-control native-select it-form-control\"\n              formControlName=\"serviceProvidedLocation\"\n              required\n              placeholder=\"Select\"\n            >\n              <ion-select-option\n                *ngFor=\"let serviceProvidedLocation of serviceProvidedLocations\"\n                value=\"{{ serviceProvidedLocation.name | translate }}\"\n                title=\"{{ serviceProvidedLocation.name | translate }}\"\n                >{{ serviceProvidedLocation.name | translate }}</ion-select-option\n              >\n            </ion-select>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-muted mb-1\">{{\n              'APP.CREATE_ACCOUNT.PLACEHOLDER.SELECT_VEHICLE_TYPE'\n                | translate\n            }}<span class=\"required-field\"></span></ion-label>\n            <ion-select\n              multiple=\"true\"\n              class=\"form-control rc-form-control native-select it-form-control\"\n              formControlName=\"vehicleType\"\n              cancelText=\"cancel\"\n              okText=\"ok\"\n              required\n              placeholder=\"Select\"\n            >\n              <ion-select-option\n                *ngFor=\"let vehicleType of vehicleTypes\"\n                selected=\"false\"\n                value=\"{{ vehicleType | translate }}\"\n                title=\"{{ vehicleType | translate }}\"\n                >{{ vehicleType | translate }}</ion-select-option\n              >\n            </ion-select>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-muted mb-1\">{{\n              'APP.CREATE_ACCOUNT.PLACEHOLDER.MOBILE_NUMBER' | translate\n            }}<span class=\"required-field\"></span></ion-label>\n            <ion-input\n              class=\"form-control rc-form-control it-form-control\"\n              inputMode=\"tel\"\n              clearInput=\"true\"\n              formControlName=\"mobileNumber\"\n              required\n              maxlength=\"10\"\n              minlength=\"10\"\n              placeholder=\"Enter 10 digit mobile number\"\n            ></ion-input>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-muted mb-1\">{{\n              'APP.CREATE_ACCOUNT.PLACEHOLDER.ALTERNATE_MOBILE_NUMBER' | translate\n            }}</ion-label>\n            <ion-input\n              class=\"form-control rc-form-control it-form-control\"\n              inputMode=\"tel\"\n              clearInput=\"true\"\n              formControlName=\"alternateMobileNumber\"\n              maxlength=\"10\"\n              minlength=\"10\"\n              placeholder=\"Enter 10 digit mobile number\"\n            ></ion-input>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-muted mb-1\">{{\n              'APP.CREATE_ACCOUNT.PLACEHOLDER.LANDLINE_NUMBER' | translate\n            }}</ion-label>\n            <ion-input\n              class=\"form-control rc-form-control it-form-control\"\n              inputMode=\"tel\"\n              clearInput=\"true\"\n              formControlName=\"landlineNumber\"\n              placeholder=\"Enter land line number\"\n            ></ion-input>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-muted mb-1\">{{\n              'APP.CREATE_ACCOUNT.PLACEHOLDER.REFERENCE_NAME' | translate\n            }}</ion-label>\n            <ion-input\n              class=\"form-control rc-form-control it-form-control\"\n              inputMode=\"text\"\n              clearInput=\"true\"\n              formControlName=\"referenceName\"\n              type=\"text\"\n              maxlength=\"250\"\n              placeholder=\"Enter reference name\"\n            ></ion-input>\n          </div>\n\n        </ion-list>\n        <button\n          type=\"submit\"\n          class=\"btn btn-purple btn-block osahanbus-btn mt-2\"\n          slot=\"end\"\n          fill=\"clear\"\n          [disabled]=\"!createCompanyForm.valid\"\n          (click)=\"createCompany(createCompanyForm.value)\"\n        >\n          {{ \"APP.CREATE_ACCOUNT.BUTTON.REGISTER\" | translate }}\n        </button>\n      </form>\n      <div class=\"osahan-signin text-center text-muted p-1\" *ngIf=\"userExists\">\n        <p class=\"pt-2 text-info\">\n          {{ \"APP.CREATE_ACCOUNT.MOBILE_EXISTS\" | translate }}\n          <a routerLink=\"/signin\" class=\"text-orange ml-2\">{{\n            \"APP.CREATE_ACCOUNT.BUTTON.SIGN_IN\" | translate\n          }}</a>\n        </p>\n      </div>\n      <div\n        class=\"\n          sign-or\n          d-flex\n          align-items-center\n          justify-content-center\n          mt-4\n          mb-2\n        \"\n      >\n        <hr class=\"mr-4\" />\n        <p class=\"text-muted text-center py-2 m-0\">\n          {{ \"APP.CREATE_ACCOUNT.PLACEHOLDER.OR\" | translate }}\n        </p>\n        <hr class=\"ml-4\" />\n      </div>\n      <div class=\"osahan-signin text-center text-purple p-1\">\n        <p class=\"mb-3\">\n          {{ \"APP.CREATE_ACCOUNT.PLACEHOLDER.ALREADY_A_MEMBER\" | translate }}\n          <a routerLink=\"/signin\" class=\"text-orange ml-2\">{{\n            \"APP.CREATE_ACCOUNT.BUTTON.SIGN_IN\" | translate\n          }}</a>\n        </p>\n      </div>\n      <div\n        class=\"osahan-signin text-center text-muted p-1\"\n        *ngIf=\"invalidMobilenumber\"\n      >\n        <p class=\"pt-2 text-danger\">\n          {{ \"APP.CREATE_ACCOUNT.INVALID_MOBILE\" | translate }}\n        </p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "GWrI":
/*!*********************************************************!*\
  !*** ./src/app/it-signup/it-signup.page.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2l0LXNpZ251cC5wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBRUY7QUFBQSxXQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7QUFHRiIsImZpbGUiOiJpdC1zaWdudXAucGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJ1dHRvbiBTdHlsZXMgKi9cbi5nb29nbGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNTA3Y2MwO1xuICBjb2xvcjogIzUwN2NjMCAhaW1wb3J0YW50O1xufVxuLmZiLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2RmNDkzMDtcbiAgY29sb3I6ICNkZjQ5MzAgIWltcG9ydGFudDtcbn1cbi8qIFNpZ25pbiAqL1xuLnNpZ24tb3IgaHIge1xuICB3aWR0aDogMTMwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuIl19 */");

/***/ }),

/***/ "kY3p":
/*!*******************************************************!*\
  !*** ./src/app/it-signup/it-signup.page.component.ts ***!
  \*******************************************************/
/*! exports provided: SignUpPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageComponent", function() { return SignUpPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_it_signup_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./it-signup.page.component.html */ "DOkm");
/* harmony import */ var _it_signup_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./it-signup.page.component.scss */ "GWrI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _json_service_provided_location__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../json/service-provided-location */ "3ScB");
/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/contact */ "RPWk");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/toast.service */ "2g2N");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _services_app_servcie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/app.servcie */ "+hHy");














let SignUpPageComponent = class SignUpPageComponent {
    constructor(addnewFormbuilder, toastservice, ngroute, fbstore, toastController, authtenticationService, appservice) {
        this.addnewFormbuilder = addnewFormbuilder;
        this.toastservice = toastservice;
        this.ngroute = ngroute;
        this.fbstore = fbstore;
        this.toastController = toastController;
        this.authtenticationService = authtenticationService;
        this.appservice = appservice;
        this.newCompany = new _models_contact__WEBPACK_IMPORTED_MODULE_9__["Company"]();
        this.OTP = '';
        this.CountryCode = '+91';
        this.showOTPInput = false;
        this.OTPmessage = 'An OTP is sent to your number. You should receive it in 15 s';
        this.showProgress = false;
        this.invalidMobilenumber = false;
        this.userExists = false;
        this.vehicleTypes = [
            'APP.VEHICLE_TYPE.LCV',
            'APP.VEHICLE_TYPE.TRAILER',
            'APP.VEHICLE_TYPE.TRUCK',
            'APP.VEHICLE_TYPE.OPEN_TRUCK',
            'APP.VEHICLE_TYPE.PART_LOAD',
            'APP.VEHICLE_TYPE.ODC',
            'APP.VEHICLE_TYPE.20_FT_CBT',
            'APP.VEHICLE_TYPE.32_FT_SINGLE_EXCEL',
            'APP.VEHICLE_TYPE.20_FT_IMPORT_EXPORT',
        ];
        this.firmActivitys = [
            'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.FREIGHT',
            'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.BOOKING',
            'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.SUPPLIER',
            'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.OWNER_DRIVER'
        ];
        this.locations = [];
        this.serviceProvidedLocations = [];
    }
    ngOnInit() {
        const serviceLocations = _json_service_provided_location__WEBPACK_IMPORTED_MODULE_8__["serviceProvidedLocationData"];
        this.locations = serviceLocations.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        this.serviceProvidedLocations = serviceLocations.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        this.firmActivitys = this.firmActivitys.sort((a, b) => (a > b) ? 1 : ((b > a) ? -1 : 0));
        this.vehicleTypes = this.vehicleTypes.sort((a, b) => (a > b) ? 1 : ((b > a) ? -1 : 0));
        this.initializeForm();
    }
    initializeForm() {
        this.createCompanyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            ownerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            firmActivity: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            vehicleType: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            landlineNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            alternateMobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            serviceProvidedLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            referenceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z \-\']+')]),
        });
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_11__["default"].auth.RecaptchaVerifier('sign-UP-button', {
                size: 'invisible',
                callback: (response) => { },
                'expired-callback': () => { },
            });
        });
    }
    ionViewDidLoad() {
        this.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_11__["default"].auth.RecaptchaVerifier('sign-UP-button', {
            size: 'invisible',
            callback: (response) => { },
            'expired-callback': () => { },
        });
    }
    createCompany(formGroup) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showProgress = true;
            const companyObj = {
                companyName: this.createCompanyForm.get('companyName').value,
                ownerName: this.createCompanyForm.get('ownerName').value,
                firmActivity: this.createCompanyForm.get('firmActivity').value,
                vehicleType: this.createCompanyForm.get('vehicleType').value,
                landlineNumber: this.createCompanyForm.get('landlineNumber').value,
                mobileNumber: '+91' + this.createCompanyForm.get('mobileNumber').value,
                alternateMobileNumber: '+91' + this.createCompanyForm.get('alternateMobileNumber').value,
                location: this.createCompanyForm.get('location').value,
                serviceProvidedLocation: this.createCompanyForm.get('serviceProvidedLocation').value,
                referenceName: this.createCompanyForm.get('referenceName').value,
                language: this.appservice.selectedLanguage,
                paymentStatus: 'NOT PAID',
            };
            Object.keys(companyObj).forEach((k) => {
                if (typeof companyObj[k] !== 'object') {
                    companyObj[k] = companyObj[k].trim();
                }
            });
            this.fbstore
                .collection('companys', (ref) => ref.where('mobileNumber', '==', companyObj.mobileNumber).limit(1))
                .get()
                .subscribe((users) => {
                console.log(users.size);
                if (users.size === 0) {
                    try {
                        this.fbstore
                            .collection('companys')
                            .add(companyObj)
                            .then((data) => {
                            console.log(companyObj);
                            if (data) {
                                return new Promise((resolve, reject) => {
                                    this.authtenticationService
                                        .signInWithPhoneNumber(this.recaptchaVerifier, companyObj.mobileNumber)
                                        .then((success) => {
                                        resolve(success);
                                        this.showProgress = false;
                                        this.invalidMobilenumber = false;
                                        this.registerSuccessToast();
                                        this.ngroute.navigate(['verification']);
                                    })
                                        .catch((error) => {
                                        this.showProgress = false;
                                        this.invalidMobilenumber = true;
                                        reject(error);
                                    });
                                });
                            }
                        });
                    }
                    catch (error) {
                        this.showProgress = false;
                        console.log(error);
                    }
                }
                else {
                    this.showProgress = false;
                    // this.userRegisteredAlreadyToast();
                    this.userExists = true;
                }
            });
        });
    }
    registerSuccessToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Account created successfully.',
                duration: 2000,
                position: 'bottom',
                animated: true,
                color: 'Success',
            });
            toast.present();
        });
    }
    userRegisteredAlreadyToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Your mobile number is already registered.',
                duration: 2000,
                position: 'top',
                animated: true,
                color: 'warning',
            });
            toast.present();
        });
    }
};
SignUpPageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthtenticationService"] },
    { type: _services_app_servcie__WEBPACK_IMPORTED_MODULE_13__["AppService"] }
];
SignUpPageComponent.propDecorators = {
    createForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['createForm',] }]
};
SignUpPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_it_signup_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_it_signup_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignUpPageComponent);



/***/ }),

/***/ "xfUv":
/*!*******************************************************!*\
  !*** ./src/app/it-signup/it-signup.routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function() { return SignUpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _it_signup_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./it-signup.page.component */ "kY3p");

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_signup_page_component__WEBPACK_IMPORTED_MODULE_3__["SignUpPageComponent"],
    },
];
/**
 * Ng module
 */
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
    /**
     * SignUpPageRoutingModule
     */
], SignUpPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=it-signup-it-signup-module.js.map