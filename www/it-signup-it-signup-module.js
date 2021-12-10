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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- <ion-toolbar> -->\r\n  <div\r\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\r\n  >\r\n    <h5 class=\"font-weight-normal mb-0 text-white\">\r\n      <a class=\"text-purple\" routerLink=\"/get-started\"\r\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\r\n      ></a>\r\n      <ion-title>{{ \"APP.CREATE_ACCOUNT.HEADER\" | translate }}</ion-title>\r\n    </h5>\r\n  </div>\r\n  <ion-progress-bar\r\n    *ngIf=\"showProgress\"\r\n    color=\"warning\"\r\n    type=\"indeterminate\"\r\n  ></ion-progress-bar>\r\n  <!-- </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <!-- <cdk-virtual-scroll-viewport\r\n    class=\"scroll-viewport\"\r\n    #scroll\r\n    itemSize=\"80\"\r\n    minBufferPx=\"900\"\r\n    maxBufferPx=\"1350\"\r\n  > -->\r\n  <div id=\"sign-UP-button\"></div>\r\n  <div\r\n    class=\"\r\n      osahan-index\r\n      bg-c\r\n      align-items-center\r\n      justify-content-center\r\n      vh-100\r\n      index-page\r\n    \"\r\n  >\r\n    <div class=\"px-3 py-3\">\r\n      <form [formGroup]=\"createCompanyForm\" #createForm>\r\n        <ion-list>\r\n          <div class=\"form-group mb-4\">\r\n            <ion-input\r\n              class=\"form-control rc-form-control it-form-control\"\r\n              placeholder=\"{{\r\n                'APP.CREATE_ACCOUNT.PLACEHOLDER.FIRST_NAME' | translate\r\n              }}\"\r\n              inputMode=\"text\"\r\n              clearInput=\"true\"\r\n              formControlName=\"firstName\"\r\n              required\r\n            ></ion-input>\r\n          </div>\r\n\r\n          <div class=\"form-group mb-4\">\r\n            <ion-input\r\n              class=\"form-control rc-form-control it-form-control\"\r\n              placeholder=\"{{\r\n                'APP.CREATE_ACCOUNT.PLACEHOLDER.LAST_NAME' | translate\r\n              }}\"\r\n              inputMode=\"text\"\r\n              clearInput=\"true\"\r\n              formControlName=\"lastName\"\r\n              required\r\n            ></ion-input>\r\n          </div>\r\n\r\n          <div class=\"form-group mb-4\">\r\n            <ion-input\r\n              class=\"form-control rc-form-control it-form-control\"\r\n              placeholder=\"{{\r\n                'APP.CREATE_ACCOUNT.PLACEHOLDER.COMPANY_NAME' | translate\r\n              }}\"\r\n              inputMode=\"text\"\r\n              clearInput=\"true\"\r\n              formControlName=\"companyName\"\r\n              required\r\n            ></ion-input>\r\n          </div>\r\n\r\n          <div class=\"form-group mb-4\">\r\n            <ion-select\r\n              interface=\"popover\"\r\n              class=\"form-control rc-form-control native-select it-form-control\"\r\n              role=\"combobox\"\r\n              placeholder=\"{{\r\n                'APP.CREATE_ACCOUNT.PLACEHOLDER.SELECT_FIRM_ACTIVITY'\r\n                  | translate\r\n              }}\"\r\n              slot\r\n              formControlName=\"firmActivity\"\r\n              required\r\n            >\r\n              <ion-select-option value=\"Freight Forwarders\">{{\r\n                \"APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.FREIGHT\" | translate\r\n              }}</ion-select-option>\r\n              <ion-select-option value=\"Booking\">{{\r\n                \"APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.BOOKING\" | translate\r\n              }}</ion-select-option>\r\n              <ion-select-option value=\"Supplier\">{{\r\n                \"APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.SUPPLIER\" | translate\r\n              }}</ion-select-option>\r\n              <ion-select-option value=\"Owner\">{{\r\n                \"APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.OWNER\" | translate\r\n              }}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n\r\n          <div class=\"form-group mb-4\">\r\n            <ion-select\r\n              multiple=\"true\"\r\n              class=\"form-control rc-form-control native-select it-form-control\"\r\n              placeholder=\"{{\r\n                'APP.CREATE_ACCOUNT.PLACEHOLDER.SELECT_SERVICE_PROVIDING'\r\n                  | translate\r\n              }}\"\r\n              formControlName=\"serviceProviding\"\r\n              cancelText=\"cancel\"\r\n              okText=\"ok\"\r\n            >\r\n              <ion-select-option\r\n                *ngFor=\"let vehicleType of vehicleTypes\"\r\n                selected=\"false\"\r\n                value=\"{{ vehicleType | translate }}\"\r\n                title=\"{{ vehicleType | translate }}\"\r\n                >{{ vehicleType | translate }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </div>\r\n\r\n          <div class=\"form-group mb-4\">\r\n            <ion-select\r\n              interface=\"popover\"\r\n              class=\"form-control rc-form-control native-select it-form-control\"\r\n              placeholder=\"{{\r\n                'APP.CREATE_ACCOUNT.PLACEHOLDER.SELECT_LOCATION' | translate\r\n              }}\"\r\n              formControlName=\"location\"\r\n              required\r\n            >\r\n              <ion-select-option\r\n                *ngFor=\"let location of locations\"\r\n                value=\"{{ location.name | translate }}\"\r\n                title=\"{{ location.name | translate }}\"\r\n                >{{ location.name | translate }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </div>\r\n\r\n          <div class=\"form-group mb-4\">\r\n            <ion-input\r\n              class=\"form-control rc-form-control it-form-control\"\r\n              placeholder=\"{{\r\n                'APP.CREATE_ACCOUNT.PLACEHOLDER.MOBILE_NUMBER' | translate\r\n              }}\"\r\n              inputMode=\"tel\"\r\n              clearInput=\"true\"\r\n              formControlName=\"mobileNumber\"\r\n              required\r\n              maxlength=\"10\"\r\n              minlength=\"10\"\r\n            ></ion-input>\r\n          </div>\r\n\r\n          <div class=\"form-group mb-4\">\r\n            <ion-input\r\n              class=\"form-control rc-form-control it-form-control\"\r\n              placeholder=\"{{\r\n                'APP.CREATE_ACCOUNT.PLACEHOLDER.LANDLINE_NUMBER' | translate\r\n              }}\"\r\n              inputMode=\"tel\"\r\n              clearInput=\"true\"\r\n              formControlName=\"landlineNumber\"\r\n            ></ion-input>\r\n          </div>\r\n        </ion-list>\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-purple btn-block osahanbus-btn mt-2\"\r\n          slot=\"end\"\r\n          fill=\"clear\"\r\n          [disabled]=\"!createCompanyForm.valid\"\r\n          (click)=\"createCompany(createCompanyForm.value)\"\r\n        >\r\n          {{ \"APP.CREATE_ACCOUNT.BUTTON.REGISTER\" | translate }}\r\n        </button>\r\n      </form>\r\n      <div\r\n        class=\"\r\n          sign-or\r\n          d-flex\r\n          align-items-center\r\n          justify-content-center\r\n          mt-4\r\n          mb-2\r\n        \"\r\n      >\r\n        <hr class=\"mr-4\" />\r\n        <p class=\"text-muted text-center py-2 m-0\">\r\n          {{ \"APP.CREATE_ACCOUNT.PLACEHOLDER.OR\" | translate }}\r\n        </p>\r\n        <hr class=\"ml-4\" />\r\n      </div>\r\n      <div class=\"osahan-signin text-center text-purple p-1\">\r\n        <p class=\"mb-4\">\r\n          {{ \"APP.CREATE_ACCOUNT.PLACEHOLDER.ALREADY_A_MEMBER\" | translate }}\r\n          <a routerLink=\"/signin\" class=\"text-orange ml-2\">{{\r\n            \"APP.CREATE_ACCOUNT.BUTTON.SIGN_IN\" | translate\r\n          }}</a>\r\n        </p>\r\n      </div>\r\n      <div\r\n        class=\"osahan-signin text-center text-muted p-1\"\r\n        *ngIf=\"invalidMobilenumber\"\r\n      >\r\n        <p class=\"pt-2\">Invalid mobile number. Please check and try again.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "GWrI":
/*!*********************************************************!*\
  !*** ./src/app/it-signup/it-signup.page.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGl0LXNpZ251cC5wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBRUY7QUFBQSxXQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7QUFHRiIsImZpbGUiOiJpdC1zaWdudXAucGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJ1dHRvbiBTdHlsZXMgKi9cclxuLmdvb2dsZS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTA3Y2MwO1xyXG4gIGNvbG9yOiAjNTA3Y2MwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZiLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItY29sb3I6ICNkZjQ5MzA7XHJcbiAgY29sb3I6ICNkZjQ5MzAgIWltcG9ydGFudDtcclxufVxyXG4vKiBTaWduaW4gKi9cclxuLnNpZ24tb3IgaHIge1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "RPWk":
/*!***********************************!*\
  !*** ./src/app/models/contact.ts ***!
  \***********************************/
/*! exports provided: Company, ContactCategory, Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCategory", function() { return ContactCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
class Company {
}
var ContactCategory;
(function (ContactCategory) {
    ContactCategory["FRIEND"] = "Friend";
    ContactCategory["FAMILY"] = "Family";
})(ContactCategory || (ContactCategory = {}));
class Contact {
}


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
/* harmony import */ var _json_location__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../json/location */ "wEno");
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
        this.vehicleTypes = [
            'APP.VEHICLE_TYPE.LCV',
            'APP.VEHICLE_TYPE.TRAILER',
            'APP.VEHICLE_TYPE.TRUCK',
            'APP.VEHICLE_TYPE.OPEN_TRUCK',
            'APP.VEHICLE_TYPE.20_FT_CBT',
            'APP.VEHICLE_TYPE.32_FT_SINGLE_EXCEL',
            'APP.VEHICLE_TYPE.20_FT_IMPORT_EXPORT',
            'APP.VEHICLE_TYPE.40_FT_IMPORT_EXPORT',
            'APP.VEHICLE_TYPE.32_FT_MULTI_AXLE',
        ];
        this.locations = [];
    }
    ngOnInit() {
        this.locations = _json_location__WEBPACK_IMPORTED_MODULE_8__["locationData"];
        this.initializeForm();
    }
    initializeForm() {
        this.createCompanyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            firmActivity: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            serviceProviding: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            landlineNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
    }
    // createCompany(values: any) {
    //   // copy all the form values into the new contact
    //   const newCompany: Company = { ...values };
    //   console.log(newCompany);
    //   this.dataService.createContact(newCompany);
    //   this.presentModal();
    // }
    // async presentModal() {
    //   this.myModal = await this.modalController.create({
    //     component: AccountSuccessModalComponent,
    //     swipeToClose: true,
    //     backdropDismiss: true,
    //   });
    //   return await this.myModal.present();
    // }
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
                firstName: this.createCompanyForm.get('firstName').value,
                lastName: this.createCompanyForm.get('lastName').value,
                companyName: this.createCompanyForm.get('companyName').value,
                firmActivity: this.createCompanyForm.get('firmActivity').value,
                serviceProviding: this.createCompanyForm.get('serviceProviding').value,
                landlineNumber: this.createCompanyForm.get('landlineNumber').value,
                mobileNumber: '+91' + this.createCompanyForm.get('mobileNumber').value,
                location: this.createCompanyForm.get('location').value,
                language: this.appservice.selectedLanguage,
            };
            Object.keys(companyObj).forEach((k) => {
                if (typeof companyObj[k] !== 'object') {
                    companyObj[k] = companyObj[k].trim();
                }
            });
            try {
                yield this.fbstore
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
                                this.invalidMobilenumber = false;
                                const toast = this.toastController.create({
                                    message: 'Account created successfully.',
                                    duration: 2000,
                                    position: 'bottom',
                                    animated: true,
                                    color: 'Success',
                                });
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
                this.toastservice.showToast(error.message, 2000);
            }
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