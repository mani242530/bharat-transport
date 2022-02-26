(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-listing-detail-it-listing-detail-module"],{

/***/ "/doe":
/*!***********************************************************************!*\
  !*** ./src/app/it-listing-detail/it-listing-detail.page.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListingDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingDetailPageComponent", function() { return ListingDetailPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_it_listing_detail_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./it-listing-detail.page.component.html */ "xfu8");
/* harmony import */ var _it_listing_detail_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./it-listing-detail.page.component.scss */ "MZ/S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_app_servcie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/app.servcie */ "+hHy");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/toast.service */ "2g2N");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");










let ListingDetailPageComponent = class ListingDetailPageComponent {
    constructor(activatedRoute, toastservice, ngroute, fbstore, appService, fbauth, callNumber) {
        this.activatedRoute = activatedRoute;
        this.toastservice = toastservice;
        this.ngroute = ngroute;
        this.fbstore = fbstore;
        this.appService = appService;
        this.fbauth = fbauth;
        this.callNumber = callNumber;
        this.isLoading = true;
        this.docId = this.appService.docId;
        this.paramId = this.activatedRoute.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.getCompany(this.paramId);
    }
    getCompany(docid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fbstore
                    .doc('companys/' + docid)
                    .valueChanges()
                    .subscribe((result) => {
                    this.isLoading = false;
                    if (!result) {
                        this.ngroute.navigate(['/listing']);
                    }
                    else {
                        this.vehicleType = result['vehicleType']
                            .toString()
                            .split(',')
                            .join('\n');
                        this.company = result;
                    }
                });
            }
            catch (error) {
                this.toastservice.showToast(error.message, 2000);
                console.log(error.message);
            }
        });
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fbauth.signOut().then(() => {
                this.appService.selectedLanguage = '';
                this.ngroute.navigate(['splash']);
            });
        });
    }
    callNow(number) {
        console.log(number);
        this.callNumber.callNumber(number, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
};
ListingDetailPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _services_app_servcie__WEBPACK_IMPORTED_MODULE_7__["AppService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"] }
];
ListingDetailPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listing',
        template: _raw_loader_it_listing_detail_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_it_listing_detail_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListingDetailPageComponent);



/***/ }),

/***/ "MZ/S":
/*!*************************************************************************!*\
  !*** ./src/app/it-listing-detail/it-listing-detail.page.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2l0LWxpc3RpbmctZGV0YWlsLnBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUFBLFdBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBQUdGIiwiZmlsZSI6Iml0LWxpc3RpbmctZGV0YWlsLnBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCdXR0b24gU3R5bGVzICovXG4uZ29vZ2xlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogIzUwN2NjMDtcbiAgY29sb3I6ICM1MDdjYzAgIWltcG9ydGFudDtcbn1cbi5mYi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNkZjQ5MzA7XG4gIGNvbG9yOiAjZGY0OTMwICFpbXBvcnRhbnQ7XG59XG4vKiBTaWduaW4gKi9cbi5zaWduLW9yIGhyIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "SDiC":
/*!***************************************************************!*\
  !*** ./src/app/it-listing-detail/it-listing-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: ListingDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingDetailPageModule", function() { return ListingDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _it_listing_detail_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./it-listing-detail.page.component */ "/doe");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _it_listing_detail_page_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./it-listing-detail.page.routing.module */ "pm+r");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-avatar */ "HWWf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











const routes = [
    {
        path: ':id',
        component: _it_listing_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["ListingDetailPageComponent"],
    },
];
/**
 * MODULES
 */
const MODULES = [
    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
    ngx_avatar__WEBPACK_IMPORTED_MODULE_9__["AvatarModule"],
    _it_listing_detail_page_routing_module__WEBPACK_IMPORTED_MODULE_8__["ListingDetailPageRoutingModule"],
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_listing_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["ListingDetailPageComponent"],
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let ListingDetailPageModule = class ListingDetailPageModule {
};
ListingDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], ListingDetailPageModule);



/***/ }),

/***/ "pm+r":
/*!****************************************************************************!*\
  !*** ./src/app/it-listing-detail/it-listing-detail.page.routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ListingDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingDetailPageRoutingModule", function() { return ListingDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _it_listing_detail_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./it-listing-detail.page.component */ "/doe");

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_listing_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["ListingDetailPageComponent"],
    },
];
/**
 * Ng module
 */
let ListingDetailPageRoutingModule = class ListingDetailPageRoutingModule {
};
ListingDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
    /**
     * ListingDetailPageRoutingModule
     */
], ListingDetailPageRoutingModule);



/***/ }),

/***/ "xfu8":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-listing-detail/it-listing-detail.page.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <!-- <ion-toolbar> -->\n  <div\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\n  >\n    <h5 class=\"font-weight-normal mb-0 text-white\">\n      <a class=\"text-purple\" routerLink=\"/listing\"\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\n      ></a>\n      <ion-title>{{ \"APP.LISTING_DETAILS.TITLE\" | translate }}</ion-title>\n    </h5>\n    <div class=\"ml-auto d-flex align-items-center\">\n      <ngx-avatar name=\"{{ userName }}\" size=\"50\"></ngx-avatar>\n      <ion-buttons slot=\"end\">\n        <a [routerLink]=\"['/profile/', docId]\"><fa-icon icon=\"user-circle\" class=\"icofont-user-circle\"\n        style=\"color: #ffffff; font-size: 26px;\"></fa-icon></a>\n        <a style=\"margin-left: 20px;\"  (click)=\"doLogout()\"><fa-icon icon=\"sign-out-alt\" class=\"sign-out-alt\"\n          style=\"color: #ffffff; font-size: 26px;\"></fa-icon></a>\n      </ion-buttons>\n    </div>\n  </div>\n  <!-- </ion-toolbar> -->\n</ion-header>\n\n<ion-content id=\"content\" fullscreen>\n  <!-- <cdk-virtual-scroll-viewport\n    class=\"scroll-viewport\"\n    #scroll\n    itemSize=\"80\"\n    minBufferPx=\"900\"\n    maxBufferPx=\"1350\"\n  > -->\n\n  <ion-list lines=\"none\" *ngIf=\"!isLoading\">\n    <ion-item-sliding *ngIf=\"company\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div class=\"Bus-Details padding-bt\">\n              <div class=\"list_item m-0\">\n                <div class=\"px-2 py-3 tic-div border-bottom d-flex\">\n                  <ngx-avatar\n                    size=\"40\"\n                    initialsSize=\"2\"\n                    cornerRadius=\"4\"\n                    [round]=\"false\"\n                    name=\"{{ company.companyName }}\"\n                  ></ngx-avatar>\n                  <div class=\"w-100 margin-left-15\">\n                      <div class=\"mb-0 l-hght-10 l-hght-18\">{{ company.companyName }} <span *ngIf=\"company.ownerName !== null\" class=\"text-purple small text-small\"\n                        >({{\n                          \"APP.LISTING_DETAILS.LABEL.OWNER_NAME\" | translate\n                        }} - {{ company.ownerName }})</span\n                      ></div>\n\n                    <div class=\"start-rating f-10\">\n                      <div class=\"d-flex mt-1\">\n                        <p class=\"m-0\">\n                          <fa-icon\n                            icon=\"map-marker-alt\"\n                            class=\"map-marker-alt\"\n                          ></fa-icon\n                          ><span class=\"small\">{{ company.location }}</span>\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"bus-details pt-2 pb-0 px-2\">\n                  <div class=\"info\" id=\"info\">\n                    <ion-label>\n                      <h3 class=\"font-weight-normal mb-1\" style=\"color: #5f259f;\">\n                        {{\n                          \"APP.LISTING_DETAILS.LABEL.FIRM_ACTIVITY\" | translate\n                        }}\n                      </h3>\n                    </ion-label>\n\n                    <p class=\"text-muted\">\n                      {{ company.firmActivity }}\n                    </p>\n                  </div>\n                </div>\n                <div class=\"bus-details pt-2 pb-0 px-2\">\n                  <div class=\"info\" id=\"info\">\n                    <ion-label>\n                      <h3 class=\"font-weight-normal mb-1\" style=\"color: #5f259f;\"> \n                        {{\n                          \"APP.LISTING_DETAILS.LABEL.SERVICE_PROVIDING_CITIES\"\n                            | translate\n                        }}\n                      </h3>\n                    </ion-label>\n\n                    <p class=\"text-muted\" style=\"white-space: pre-line\">\n                      {{ company.serviceProvidedLocation }}\n                    </p>\n                  </div>\n                </div>\n                <div class=\"bus-details pt-2 pb-0 px-2\">\n                  <div class=\"info\" id=\"info\">\n                    <ion-label>\n                      <h3 class=\"font-weight-normal mb-1\" style=\"color: #5f259f;\">\n                        {{\n                          \"APP.LISTING_DETAILS.LABEL.SERVICE_PROVIDING\"\n                            | translate\n                        }}\n                      </h3>\n                    </ion-label>\n\n                    <p class=\"text-muted\" style=\"white-space: pre-line\">\n                      {{ vehicleType }}\n                    </p>\n                  </div>\n                </div>\n                <div class=\"bus-details pt-2 pb-0 px-2\">\n                  <div class=\"info\" id=\"info\">\n                    <ion-label>\n                      <h3 class=\"font-weight-normal mb-1\" style=\"color: #5f259f;\">\n                        {{\n                          \"APP.LISTING_DETAILS.LABEL.MOBILE_NUMBER\" | translate\n                        }}\n                      </h3>\n                    </ion-label>\n\n                    <p class=\"text-muted\">\n                      {{ company.mobileNumber }}\n                    </p>\n                  </div>\n                </div>\n                <div class=\"bus-details pt-2 pb-0 px-2\">\n                  <div class=\"info\" id=\"info\">\n                    <ion-label>\n                      <h3 class=\"font-weight-normal mb-1\" style=\"color: #5f259f;\">\n                        {{\n                          \"APP.LISTING_DETAILS.LABEL.ALTERNATE_MOBILE_NUMBER\" | translate\n                        }}\n                      </h3>\n                    </ion-label>\n\n                    <div\n                      *ngIf=\"company.alternateMobileNumber !== ''; else other_content\"\n                    >\n                      <p class=\"text-muted\">\n                        {{ company.alternateMobileNumber }}\n                      </p>\n                    </div>\n\n                    <ng-template #other_content\n                      ><p class=\"text-muted\">N/A</p></ng-template\n                    >\n                  </div>\n                </div>\n                <div class=\"bus-details pt-2 pb-0 px-2\">\n                  <div class=\"info\" id=\"info\">\n                    <ion-label>\n                      <h3 class=\"font-weight-normal mb-1\" style=\"color: #5f259f;\">\n                        {{\n                          \"APP.LISTING_DETAILS.LABEL.LANDLINE_NUMBER\"\n                            | translate\n                        }}\n                      </h3>\n                    </ion-label>\n\n                    <div\n                      *ngIf=\"company.landlineNumber !== ''; else other_content\"\n                    >\n                      <p class=\"text-muted\">\n                        {{ company.landlineNumber }}\n                      </p>\n                    </div>\n\n                    <ng-template #other_content\n                      ><p class=\"text-muted\">N/A</p></ng-template\n                    >\n                  </div>\n                </div>\n              </div>\n\n              <!-- Button -->\n              <div class=\"osahan-fotter fixed-bottom px-3 mb-3\">\n                <!-- <a class=\"btn btn-purple btn-block osahanbus-btn\">{{\n                  \"APP.LISTING_DETAILS.BUTTON.CALL_NOW\" | translate\n                }}</a> -->\n                <button class=\"btn btn-purple btn-block osahanbus-btn\" \n                  ion-button (click)=\"callNow(company.mobileNumber)\">{{\n                  \"APP.LISTING_DETAILS.BUTTON.CALL_NOW\" | translate\n                }}</button>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-list lines=\"none\" *ngIf=\"isLoading\">\n    <ion-item-sliding>\n      <ion-item lines=\"none\">\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 75%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=it-listing-detail-it-listing-detail-module.js.map