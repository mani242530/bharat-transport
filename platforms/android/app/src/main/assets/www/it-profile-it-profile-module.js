(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-profile-it-profile-module"],{

/***/ "Tbvu":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-profile/it-profile.page.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <!-- <ion-toolbar> -->\n  <div\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\n  >\n    <h5 class=\"font-weight-normal mb-0 text-white\">\n      <a class=\"text-purple\" routerLink=\"/select-vehicle\"\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\n      ></a>\n      <ion-title>{{ \"APP.UPDATE_ACCOUNT.HEADER\" | translate }}</ion-title>\n    </h5>\n  </div>\n  <ion-progress-bar\n    *ngIf=\"showProgress\"\n    color=\"warning\"\n    type=\"indeterminate\"\n  ></ion-progress-bar>\n  <!-- </ion-toolbar> -->\n</ion-header>\n\n<ion-content id=\"content\" fullscreen>\n  <!-- <cdk-virtual-scroll-viewport\n    class=\"scroll-viewport\"\n    #scroll\n    itemSize=\"80\"\n    minBufferPx=\"900\"\n    maxBufferPx=\"1350\"\n  > -->\n  <div id=\"sign-UP-button\"></div>\n  <div\n    class=\"osahan-index bg-c align-items-center justify-content-center index-page\"\n  >\n    <div class=\"px-3 py-3\">\n      <form [formGroup]=\"modifyCompanyForm\" #modifyForm novalidate>\n        <ion-list>\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-purple font-bold mb-1\"\n              >{{\n                \"APP.CREATE_ACCOUNT.PLACEHOLDER.SELECT_FIRM_ACTIVITY\"\n                  | translate\n              }}<span class=\"required-field\"></span\n            ></ion-label>\n            <ion-select\n              interface=\"popover\"\n              class=\"form-control rc-form-control native-select it-form-control\"\n              role=\"combobox\"\n              slot\n              formControlName=\"firmActivity\"\n              placeholder=\"Select firm activity\"\n              (ionChange)=\"onFirmActivityChange($event)\"\n            >\n              <ion-select-option\n                *ngFor=\"let firmActivity of firmActivitys\"\n                selected=\"false\"\n                value=\"{{ firmActivity | translate }}\"\n                title=\"{{ firmActivity | translate }}\"\n                >{{ firmActivity | translate }}</ion-select-option\n              >\n            </ion-select>\n          </div>\n\n          <div class=\"form-group mb-3\" *ngIf=\"!checkFirmActivityIsDriver\">\n            <ion-label class=\"text-purple font-bold mb-1\"\n              >{{ \"APP.CREATE_ACCOUNT.PLACEHOLDER.COMPANY_NAME\" | translate\n              }}<span class=\"required-field\"></span\n            ></ion-label>\n            <ion-input\n              class=\"form-control rc-form-control it-form-control\"\n              inputMode=\"text\"\n              clearInput=\"true\"\n              formControlName=\"companyName\"\n              placeholder=\"Enter company name\"\n            ></ion-input>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-purple font-bold mb-1\"\n              >{{ \"APP.CREATE_ACCOUNT.PLACEHOLDER.OWNER_NAME\" | translate\n              }}<span class=\"required-field\"></span\n            ></ion-label>\n            <ion-input\n              class=\"form-control rc-form-control it-form-control\"\n              inputMode=\"text\"\n              clearInput=\"true\"\n              formControlName=\"ownerName\"\n              placeholder=\"Enter owner name\"\n            ></ion-input>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-purple font-bold mb-1\"\n              >{{ \"APP.CREATE_ACCOUNT.PLACEHOLDER.SELECT_LOCATION\" | translate\n              }}<span class=\"required-field\"></span\n            ></ion-label>\n            <input\n              list=\"locations\"\n              placeholder=\"Select location\"\n              class=\"form-control rc-form-control native-select it-form-control\"\n              formControlName=\"location\"\n              clearInput=\"true\"\n            />\n            <datalist id=\"locations\">\n              <option\n                *ngFor=\"let location of serviceProvidedLocations\"\n                value=\"{{ location.name | translate }}\"\n                title=\"{{ location.name | translate }}\"\n              >\n                {{ location.name | translate }}\n              </option>\n            </datalist>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-purple font-bold mb-1\"\n              >{{\n                \"APP.CREATE_ACCOUNT.PLACEHOLDER.SELECT_SERVICE_PROVIDED_LOCATION\"\n                  | translate\n              }}<span class=\"required-field\"></span\n            ></ion-label>\n            <ion-select\n              multiple=\"true\"\n              interface=\"popover\"\n              class=\"form-control rc-form-control native-select it-form-control\"\n              formControlName=\"serviceProvidedLocation\"\n              placeholder=\"Select service provided location\"\n            >\n              <ion-select-option\n                *ngFor=\"let serviceProvidedLocation of serviceProvidedLocations\"\n                value=\"{{ serviceProvidedLocation.name | translate }}\"\n                title=\"{{ serviceProvidedLocation.name | translate }}\"\n                >{{\n                  serviceProvidedLocation.name | translate\n                }}</ion-select-option\n              >\n            </ion-select>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-purple font-bold mb-1\"\n              >{{\n                \"APP.CREATE_ACCOUNT.PLACEHOLDER.SELECT_VEHICLE_TYPE\"\n                  | translate\n              }}<span class=\"required-field\"></span\n            ></ion-label>\n            <ion-select\n              multiple=\"true\"\n              class=\"form-control rc-form-control native-select it-form-control\"\n              formControlName=\"vehicleType\"\n              cancelText=\"cancel\"\n              okText=\"ok\"\n              placeholder=\"Select vehicle type\"\n            >\n              <ion-select-option\n                *ngFor=\"let vehicleType of vehicleTypes\"\n                selected=\"false\"\n                value=\"{{ vehicleType | translate }}\"\n                title=\"{{ vehicleType | translate }}\"\n                >{{ vehicleType | translate }}</ion-select-option\n              >\n            </ion-select>\n          </div>\n\n          <div class=\"form-group mb-3\" *ngIf=\"checkFirmActivityIsOwner\">\n            <ion-label class=\"text-purple font-bold mb-1\"\n              >{{\n                \"APP.CREATE_ACCOUNT.PLACEHOLDER.NUMBER_OF_VEHICLES\" | translate\n              }}<span class=\"required-field\"></span\n            ></ion-label>\n            <ion-input\n              class=\"form-control rc-form-control it-form-control\"\n              inputMode=\"number\"\n              clearInput=\"true\"\n              formControlName=\"vehicleNos\"\n              placeholder=\"Enter number of vehicles\"\n            ></ion-input>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-purple font-bold mb-1\">{{\n              \"APP.CREATE_ACCOUNT.PLACEHOLDER.SELECT_LANGUAGE\" | translate\n            }}</ion-label>\n            <ion-select\n              class=\"form-control rc-form-control native-select it-form-control\"\n              formControlName=\"language\"\n              placeholder=\"Select language\"\n            >\n              <ion-select-option\n                *ngFor=\"let language of languages\"\n                selected=\"false\"\n                value=\"{{ language.id }}\"\n                title=\"{{ language.name }}\"\n                >{{ language.name }}</ion-select-option\n              >\n            </ion-select>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-purple font-bold mb-1\"\n              >{{ \"APP.CREATE_ACCOUNT.PLACEHOLDER.MOBILE_NUMBER\" | translate\n              }}<span class=\"required-field\"></span\n            ></ion-label>\n            <ion-input\n              class=\"form-control rc-form-control it-form-control\"\n              inputMode=\"tel\"\n              clearInput=\"true\"\n              formControlName=\"mobileNumber\"\n              placeholder=\"Enter 10 digit mobile number\"\n            ></ion-input>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-purple font-bold mb-1\">{{\n              \"APP.CREATE_ACCOUNT.PLACEHOLDER.ALTERNATE_MOBILE_NUMBER\"\n                | translate\n            }}</ion-label>\n            <ion-input\n              class=\"form-control rc-form-control it-form-control\"\n              inputMode=\"tel\"\n              clearInput=\"true\"\n              formControlName=\"alternateMobileNumber\"\n              placeholder=\"Enter 10 digit mobile number\"\n            ></ion-input>\n          </div>\n\n          <div class=\"form-group mb-3\" *ngIf=\"checkFirmActivityIsDriver\">\n            <ion-label class=\"text-purple font-bold mb-1\">{{\n              \"APP.CREATE_ACCOUNT.PLACEHOLDER.AADHAR_NUMBER\" | translate\n            }}</ion-label>\n            <ion-input\n              class=\"form-control rc-form-control it-form-control\"\n              inputMode=\"number\"\n              clearInput=\"true\"\n              formControlName=\"aadharNumber\"\n              placeholder=\"Enter aadhar number\"\n            ></ion-input>\n          </div>\n\n          <div class=\"form-group mb-3\" *ngIf=\"checkFirmActivityIsDriver\">\n            <ion-label class=\"text-purple font-bold mb-1\"\n              >{{\n                \"APP.CREATE_ACCOUNT.PLACEHOLDER.DRIVING_LICENSE_NUMBER\"\n                  | translate\n              }}<span class=\"required-field\"></span\n            ></ion-label>\n            <ion-input\n              class=\"form-control rc-form-control it-form-control\"\n              inputMode=\"text\"\n              clearInput=\"true\"\n              formControlName=\"drivingLicenseNumber\"\n              placeholder=\"Enter driving license number\"\n            ></ion-input>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <ion-label class=\"text-purple font-bold mb-1\">{{\n              \"APP.CREATE_ACCOUNT.PLACEHOLDER.REFERENCE_NAME\" | translate\n            }}</ion-label>\n            <ion-input\n              class=\"form-control rc-form-control it-form-control\"\n              inputMode=\"text\"\n              clearInput=\"true\"\n              formControlName=\"referenceName\"\n              type=\"text\"\n              placeholder=\"Enter reference name\"\n            ></ion-input>\n          </div>\n        </ion-list>\n        <button\n          type=\"submit\"\n          class=\"btn btn-purple btn-block osahanbus-btn mt-2\"\n          slot=\"end\"\n          fill=\"clear\"\n          [disabled]=\"!modifyCompanyForm.valid\"\n          (click)=\"doModify()\"\n        >\n          {{ \"APP.CREATE_ACCOUNT.BUTTON.UPDATE\" | translate }}\n        </button>\n      </form>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "TuRf":
/*!*************************************************!*\
  !*** ./src/app/it-profile/it-profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _it_profile_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./it-profile.page.component */ "xXls");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _it_profile_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./it-profile.routing.module */ "yJvK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










const routes = [
    {
        path: '',
        component: _it_profile_page_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
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
    _it_profile_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfileRoutingModule"],
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_profile_page_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], ProfilePageModule);



/***/ }),

/***/ "llEK":
/*!***********************************************************!*\
  !*** ./src/app/it-profile/it-profile.page.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2l0LXByb2ZpbGUucGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUVGO0FBQUEsV0FBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBR0YiLCJmaWxlIjoiaXQtcHJvZmlsZS5wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQnV0dG9uIFN0eWxlcyAqL1xuLmdvb2dsZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICM1MDdjYzA7XG4gIGNvbG9yOiAjNTA3Y2MwICFpbXBvcnRhbnQ7XG59XG4uZmItYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZGY0OTMwO1xuICBjb2xvcjogI2RmNDkzMCAhaW1wb3J0YW50O1xufVxuLyogU2lnbmluICovXG4uc2lnbi1vciBociB7XG4gIHdpZHRoOiAxMzBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4iXX0= */");

/***/ }),

/***/ "xXls":
/*!*********************************************************!*\
  !*** ./src/app/it-profile/it-profile.page.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_it_profile_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./it-profile.page.component.html */ "Tbvu");
/* harmony import */ var _it_profile_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./it-profile.page.component.scss */ "llEK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _json_service_provided_location__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../json/service-provided-location */ "3ScB");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/company */ "P+Z7");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/toast.service */ "2g2N");
/* harmony import */ var _services_app_servcie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/app.servcie */ "+hHy");












let ProfileComponent = class ProfileComponent {
    constructor(addnewFormbuilder, toastservice, router, fbstore, toastController, appservice, route) {
        this.addnewFormbuilder = addnewFormbuilder;
        this.toastservice = toastservice;
        this.router = router;
        this.fbstore = fbstore;
        this.toastController = toastController;
        this.appservice = appservice;
        this.route = route;
        this.newCompany = new _models_company__WEBPACK_IMPORTED_MODULE_9__["Company"]();
        this.showProgress = false;
        this.invalidMobilenumber = false;
        this.userExists = false;
        this.disabledFlag = true;
        this.checkFirmActivityIsDriver = false;
        this.checkFirmActivityIsOwner = false;
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
            'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.OWNER',
            'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.DRIVER',
        ];
        this.languages = [
            {
                id: 'en',
                name: 'ENGLISH',
                description: 'ENGLISH',
                img: 'english',
            },
            {
                id: 'hi',
                name: 'हिंदी',
                description: 'HINDI',
                img: 'hindi',
            },
            {
                id: 'ma',
                name: 'मराठी',
                description: 'MARATHI',
                img: 'marathi',
            },
            {
                id: 'gu',
                name: 'ગુજરાતી',
                description: 'GUJARATI',
                img: 'gujarati',
            },
            {
                id: 'tn',
                name: 'தமிழ்',
                description: 'TAMIL',
                img: 'tamil',
            },
            {
                id: 'tl',
                name: 'తెలుగు',
                description: 'TELUGU',
                img: 'telugu',
            },
            {
                id: 'ka',
                name: 'ಕೆನಡಾ',
                description: 'KANADA',
                img: 'kanada',
            },
            {
                id: 'ml',
                name: 'മലയാളം',
                description: 'MALAYALAM',
                img: 'malayalam',
            },
            {
                id: 'pn',
                name: 'മലയാളം',
                description: 'PUNJABI',
                img: 'telugu',
            },
        ];
        this.locations = [];
        this.serviceProvidedLocations = [];
        // this.docid = this.route.snapshot.paramMap.get('id');
        this.docid = this.appservice.docId;
    }
    ngOnInit() {
        const serviceLocations = _json_service_provided_location__WEBPACK_IMPORTED_MODULE_8__["serviceProvidedLocationData"];
        this.locations = serviceLocations.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
        this.serviceProvidedLocations = serviceLocations.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
        this.vehicleTypes = this.vehicleTypes.sort((a, b) => a > b ? 1 : b > a ? -1 : 0);
        this.initializeModifyForm();
        this.setFirmActivityValidators();
        this.getCompanys(this.docid);
    }
    initializeModifyForm() {
        this.modifyCompanyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            ownerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            firmActivity: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            vehicleType: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            alternateMobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            serviceProvidedLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            referenceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[a-zA-Z -']+")]),
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            vehicleNos: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            aadharNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            drivingLicenseNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
    }
    getCompanys(docid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fbstore
                    .doc('companys/' + docid)
                    .valueChanges()
                    .subscribe((result) => {
                    this.onFirmActivityValue(result);
                    this.modifyCompanyForm.controls['companyName'].setValue(result['companyName']);
                    this.modifyCompanyForm.controls['ownerName'].setValue(result['ownerName']);
                    this.modifyCompanyForm.controls['firmActivity'].setValue(result['firmActivity']);
                    this.modifyCompanyForm.controls['vehicleType'].setValue(result['vehicleType']);
                    this.modifyCompanyForm.controls['mobileNumber'].setValue(result['mobileNumber']);
                    this.modifyCompanyForm.controls['alternateMobileNumber'].setValue(result['alternateMobileNumber']);
                    this.modifyCompanyForm.controls['location'].setValue(result['location']);
                    this.modifyCompanyForm.controls['serviceProvidedLocation'].setValue(result['serviceProvidedLocation']);
                    this.modifyCompanyForm.controls['referenceName'].setValue(result['referenceName']);
                    this.modifyCompanyForm.controls['language'].setValue(result['language']);
                    this.modifyCompanyForm.controls['vehicleNos'].setValue(result['vehicleNos']);
                    this.modifyCompanyForm.controls['aadharNumber'].setValue(result['aadharNumber']);
                    this.modifyCompanyForm.controls['drivingLicenseNumber'].setValue(result['drivingLicenseNumber']);
                });
            }
            catch (error) {
                this.toastservice.showToast(error.message, 2000);
            }
        });
    }
    onFirmActivityValue(result) {
        if (result['firmActivity'] === 'Driver') {
            this.checkFirmActivityIsOwner = false;
            this.checkFirmActivityIsDriver = true;
        }
        else if (result['firmActivity'] === 'Owner') {
            this.checkFirmActivityIsDriver = false;
            this.checkFirmActivityIsOwner = true;
        }
        else {
            this.checkFirmActivityIsDriver = false;
            this.checkFirmActivityIsOwner = false;
        }
    }
    onFirmActivityChange(value) {
        if (value.detail.value === 'Driver') {
            this.checkFirmActivityIsOwner = false;
            this.checkFirmActivityIsDriver = true;
        }
        else if (value.detail.value === 'Owner') {
            this.checkFirmActivityIsDriver = false;
            this.checkFirmActivityIsOwner = true;
        }
        else {
            this.checkFirmActivityIsDriver = false;
            this.checkFirmActivityIsOwner = false;
        }
    }
    setFirmActivityValidators() {
        const companyNameControl = this.modifyCompanyForm.get('companyName');
        const vehicleNosControl = this.modifyCompanyForm.get('vehicleNos');
        const drivingLicenseNumberControl = this.modifyCompanyForm.get('drivingLicenseNumber');
        this.modifyCompanyForm
            .get('firmActivity')
            .valueChanges.subscribe((selectedFirmActivity) => {
            if (selectedFirmActivity === 'Owner') {
                companyNameControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
                vehicleNosControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
                drivingLicenseNumberControl.setValidators(null);
            }
            else if (selectedFirmActivity === 'Driver') {
                companyNameControl.setValidators(null);
                vehicleNosControl.setValidators(null);
                drivingLicenseNumberControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
            }
            else {
                companyNameControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
                vehicleNosControl.setValidators(null);
                drivingLicenseNumberControl.setValidators(null);
            }
            companyNameControl.updateValueAndValidity();
            vehicleNosControl.updateValueAndValidity();
            drivingLicenseNumberControl.updateValueAndValidity();
        });
    }
    registerSuccessToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Account updated successfully.',
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
    doModify() {
        const companyobj = {
            companyName: this.modifyCompanyForm.get('companyName').value,
            ownerName: this.modifyCompanyForm.get('ownerName').value,
            firmActivity: this.modifyCompanyForm.get('firmActivity').value,
            vehicleType: this.modifyCompanyForm.get('vehicleType').value.toString(),
            mobileNumber: this.modifyCompanyForm.get('mobileNumber').value,
            alternateMobileNumber: this.modifyCompanyForm.get('alternateMobileNumber')
                .value,
            location: this.modifyCompanyForm.get('location').value,
            serviceProvidedLocation: this.modifyCompanyForm
                .get('serviceProvidedLocation')
                .value.toString(),
            referenceName: this.modifyCompanyForm.get('referenceName').value,
            language: this.modifyCompanyForm.get('language').value,
            vehicleNos: this.modifyCompanyForm.get('vehicleNos').value,
            aadharNumber: this.modifyCompanyForm.get('aadharNumber').value,
            drivingLicenseNumber: this.modifyCompanyForm.get('drivingLicenseNumber')
                .value,
            paymentStatus: 'Paid',
            accountStatus: 'Active',
        };
        try {
            this.fbstore
                .doc('companys/' + this.docid)
                .ref.update(companyobj)
                .then((data) => {
                console.log(data);
                this.toastservice.showToast('Profile updated successfully', 1000);
            });
        }
        catch (error) {
            this.toastservice.showToast(error.message, 2000);
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _services_app_servcie__WEBPACK_IMPORTED_MODULE_11__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
ProfileComponent.propDecorators = {
    modifyForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['modifyForm',] }]
};
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_it_profile_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_it_profile_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileComponent);



/***/ }),

/***/ "yJvK":
/*!*********************************************************!*\
  !*** ./src/app/it-profile/it-profile.routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _it_profile_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./it-profile.page.component */ "xXls");




/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_profile_page_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
    },
];
/**
 * Ng module
 */
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
    /**
     * ProfileRoutingModule
     */
], ProfileRoutingModule);



/***/ })

}]);
//# sourceMappingURL=it-profile-it-profile-module.js.map