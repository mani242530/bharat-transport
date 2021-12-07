(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-listing-it-listing-module"],{

/***/ "2nZ6":
/*!***********************************************************!*\
  !*** ./src/app/it-listing/it-listing.page.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGl0LWxpc3RpbmcucGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUVGO0FBQUEsV0FBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBR0YiLCJmaWxlIjoiaXQtbGlzdGluZy5wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQnV0dG9uIFN0eWxlcyAqL1xyXG4uZ29vZ2xlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItY29sb3I6ICM1MDdjYzA7XHJcbiAgY29sb3I6ICM1MDdjYzAgIWltcG9ydGFudDtcclxufVxyXG4uZmItYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogI2RmNDkzMDtcclxuICBjb2xvcjogI2RmNDkzMCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIFNpZ25pbiAqL1xyXG4uc2lnbi1vciBociB7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "OkqA":
/*!*************************************************!*\
  !*** ./src/app/it-listing/it-listing.module.ts ***!
  \*************************************************/
/*! exports provided: ListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingPageModule", function() { return ListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _it_listing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./it-listing.page.component */ "frp7");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _it_listing_page_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./it-listing.page.routing.module */ "prqM");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-avatar */ "HWWf");










const routes = [
    {
        path: '',
        component: _it_listing_page_component__WEBPACK_IMPORTED_MODULE_6__["ListingPageComponent"],
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
    // ScrollingModule,
    ngx_avatar__WEBPACK_IMPORTED_MODULE_9__["AvatarModule"],
    _it_listing_page_routing_module__WEBPACK_IMPORTED_MODULE_8__["ListingPageRoutingModule"],
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_listing_page_component__WEBPACK_IMPORTED_MODULE_6__["ListingPageComponent"],
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let ListingPageModule = class ListingPageModule {
};
ListingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], ListingPageModule);



/***/ }),

/***/ "Y8T0":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-listing/it-listing.page.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- <ion-toolbar> -->\r\n  <div\r\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\r\n  >\r\n    <h5 class=\"font-weight-normal mb-0 text-white\">\r\n      <a class=\"text-purple\" routerLink=\"/home\"\r\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\r\n      ></a>\r\n      <ion-title>Search Results</ion-title>\r\n    </h5>\r\n    <div class=\"ml-auto d-flex align-items-center\">\r\n      <!-- <a class=\"text-white h6 mb-0\" routerLink=\"/home\"\r\n          ><fa-icon icon=\"search\" class=\"icofont-search-1\"></fa-icon\r\n        ></a>\r\n        <a\r\n          href=\"#\"\r\n          class=\"mx-4 text-white h6 mb-0\"\r\n          data-toggle=\"modal\"\r\n          data-target=\"#filterModal\"\r\n          ><fa-icon icon=\"filter\" class=\"icofont-filter\"></fa-icon\r\n        ></a> -->\r\n      <ngx-avatar\r\n        name=\"{{ userName }}\"\r\n        (clickOnAvatar)=\"avatarClicked($event)\"\r\n        size=\"50\"\r\n      ></ngx-avatar>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-menu-button\r\n          ><fa-icon icon=\"bars\" class=\"icofont-navigation-menu\"></fa-icon\r\n        ></ion-menu-button>\r\n      </ion-buttons>\r\n    </div>\r\n  </div>\r\n  <!-- </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <!-- <cdk-virtual-scroll-viewport\r\n    class=\"scroll-viewport\"\r\n    #scroll\r\n    itemSize=\"80\"\r\n    minBufferPx=\"900\"\r\n    maxBufferPx=\"1350\"\r\n  > -->\r\n  <div class=\"osahan-listing p-0 m-0 row border-top\">\r\n    <div class=\"p-2 w-100\">\r\n      <div class=\"bg-white border border-warning rounded-1 shadow-sm p-2\">\r\n        <div class=\"row mx-0 px-1\">\r\n          <div class=\"col-6 p-0\">\r\n            <small class=\"text-muted mb-1 f-10 pr-1\">GOING FROM</small>\r\n            <p class=\"small mb-0\">{{ searchParam.from | uppercase }}</p>\r\n          </div>\r\n\r\n          <div class=\"col-6 p-0\">\r\n            <small class=\"text-muted mb-1 f-10 pr-1\">GOING TO</small>\r\n            <p class=\"small mb-0\">{{ searchParam.to | uppercase }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <ion-grid>\r\n    <ion-row>\r\n      <ion-col\r\n        size=\"12\"\r\n        margin\r\n        *ngFor=\"let company of companys; let i = index\"\r\n        [routerLink]=\"['/listing-detail/', company.id]\"\r\n        class=\"text-dark px-0 py-0\"\r\n      > -->\r\n  <ion-list lines=\"none\" *ngIf=\"!isLoading\">\r\n    <ion-item-sliding\r\n      *ngFor=\"let company of companys; let i = index\"\r\n      [routerLink]=\"['/listing-detail/', company.id]\"\r\n      class=\"text-dark px-0 py-0\"\r\n    >\r\n      <div\r\n        class=\"\r\n          list_item_gird\r\n          m-1\r\n          bg-white\r\n          shadow-sm\r\n          listing-item\r\n          border-right\r\n          p-3\r\n        \"\r\n      >\r\n        <div class=\"tic-div mb-2\">\r\n          <p class=\"mb-0 l-hght-10\">{{ company.companyName }}</p>\r\n          <span class=\"text-purple small text-small\"\r\n            >{{ company.firstName }} {{ company.lastName }}</span\r\n          >\r\n        </div>\r\n        <div class=\"d-flex\">\r\n          <div class=\"bus_details w-100\">\r\n            <div class=\"d-flex l-hght-10\">\r\n              <div>\r\n                <small class=\"text-muted d-block\">Firm Activity</small>\r\n                <p class=\"l-hght-10\">{{ company.firmActivity }}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"d-flex l-hght-10\">\r\n              <div>\r\n                <small class=\"text-muted d-block\"\r\n                  >Service Providing / vehicle Type</small\r\n                >\r\n                <p class=\"l-hght-20\">{{ company.serviceProviding }}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"d-flex l-hght-10\">\r\n              <div>\r\n                <small class=\"text-muted d-block\">Location</small>\r\n                <p class=\"l-hght-10\">{{ company.location }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <fa-icon\r\n            icon=\"angle-double-right\"\r\n            class=\"angle-double-right\"\r\n          ></fa-icon>\r\n        </div>\r\n      </div>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n  <!-- </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n\r\n  <ion-list lines=\"none\" *ngIf=\"isLoading\">\r\n    <ion-item-sliding *ngFor=\"let company of companys\">\r\n      <ion-item lines=\"none\">\r\n        <ion-label>\r\n          <h3>\r\n            <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\r\n          </h3>\r\n          <p>\r\n            <ion-skeleton-text animated style=\"width: 75%\"></ion-skeleton-text>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n  <div class=\"d-flex justify-content-center\">\r\n    <div\r\n      class=\"spinner-grow d-flex justify-content-center\"\r\n      role=\"status\"\r\n      *ngIf=\"isLoading\"\r\n    >\r\n      <span class=\"sr-only\">Loading...</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"d-flex justify-content-center\" *ngIf=\"noresults\">\r\n    <span>No results found</span>\r\n  </div>\r\n\r\n  <!-- </cdk-virtual-scroll-viewport> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ "frp7":
/*!*********************************************************!*\
  !*** ./src/app/it-listing/it-listing.page.component.ts ***!
  \*********************************************************/
/*! exports provided: ListingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingPageComponent", function() { return ListingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_it_listing_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./it-listing.page.component.html */ "Y8T0");
/* harmony import */ var _it_listing_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./it-listing.page.component.scss */ "2nZ6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_app_servcie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/app.servcie */ "+hHy");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/toast.service */ "2g2N");











let ListingPageComponent = class ListingPageComponent {
    // @ViewChild(CdkVirtualScrollViewport, { static: true })
    // viewport: CdkVirtualScrollViewport;
    constructor(modalController, routerOutlet, route, appService, ngroute, fbstore, toastservice) {
        // this.userData = this.dataService.signnedInUser;
        // if (this.userData) {
        //   [this.user] = this.userData && this.userData.map((item) => item);
        //   if (this.user) {
        //     this.userName = this.user.firstName + ' ' + this.user.lastName;
        //   }
        // }
        this.modalController = modalController;
        this.routerOutlet = routerOutlet;
        this.route = route;
        this.appService = appService;
        this.ngroute = ngroute;
        this.fbstore = fbstore;
        this.toastservice = toastservice;
        this.isLoading = true;
        this.noresults = false;
        this.isLoading = true;
        this.route.queryParams.subscribe((params) => {
            this.searchParam = params;
            this.searchContactByLocation(this.searchParam);
        });
        this.selectedVehicleType = this.appService.selectedVehicleType;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { });
    }
    trackByFn(_, item) {
        return item.id;
    }
    // searchContactByLocation(params) {
    // this.dataService.searchContactByLocation().subscribe((data: any) => {
    //   if (data.length > 0) {
    //     const filtereddata = data.filter(
    //       (x) => x.location == params.from || x.location === params.to
    //     );
    //     const filteredVehicle = filtereddata.filter(
    //       (v) => (v.serviceProviding = this.selectedVehicleType)
    //     );
    //     if (filteredVehicle.length > 0) {
    //       this.showLoading = false;
    //       this.noresults = false;
    //       this.companys = filteredVehicle;
    //     } else {
    //       this.showLoading = false;
    //       this.noresults = true;
    //     }
    //   }
    // });
    // }
    searchContactByLocation(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fbstore
                    .collection('companys')
                    .snapshotChanges()
                    .subscribe((data) => {
                    console.log(data);
                    console.log(this.selectedVehicleType);
                    // if (data.length > 0) {
                    //   const filtereddata = data.filter(
                    //     (x) => x.location == params.from || x.location === params.to
                    //   );
                    //   const filteredVehicle = filtereddata.filter(
                    //     (v) => (v.serviceProviding = this.selectedVehicleType)
                    //   );
                    //   if (filteredVehicle.length > 0) {
                    //     this.isLoading = false;
                    //     this.noresults = false;
                    //     this.companys = filteredVehicle;
                    //   } else {
                    //     this.isLoading = false;
                    //     this.noresults = true;
                    //   }
                    // }
                    const filteredLocation = data.filter((result) => result.payload.doc.data()['location'] === params.from ||
                        result.payload.doc.data()['location'] === params.to);
                    // const filteredVehicleType = filteredLocation.filter((result) =>
                    //   result.payload.doc
                    //     .data()
                    //     ['serviceProviding'].includes(this.selectedVehicleType)
                    // );
                    // people.filter(person => id_filter.includes(person.id))
                    if (filteredLocation.length > 0) {
                        this.noresults = false;
                        this.companys = data.map((result) => {
                            return {
                                id: result.payload.doc.id,
                                firstName: result.payload.doc.data()['firstName'],
                                lastName: result.payload.doc.data()['lastName'],
                                companyName: result.payload.doc.data()['companyName'],
                                firmActivity: result.payload.doc.data()['firmActivity'],
                                serviceProviding: result.payload.doc.data()['serviceProviding'],
                                landlineNumber: result.payload.doc.data()['landlineNumber'],
                                mobileNumber: result.payload.doc.data()['mobileNumber'],
                                location: result.payload.doc.data()['location'],
                            };
                        });
                    }
                    else {
                        this.noresults = true;
                    }
                    /* remove later only for delaying loading of products list to show animation for a longer duration */
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(data)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["delay"])(1000))
                        .subscribe((data) => {
                        this.isLoading = false;
                    });
                });
            }
            catch (error) {
                this.toastservice.showToast(error.message, 2000);
                //console.log(error.message);
            }
        });
    }
};
ListingPageComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRouterOutlet"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_app_servcie__WEBPACK_IMPORTED_MODULE_9__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"] }
];
ListingPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listing',
        template: _raw_loader_it_listing_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_it_listing_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListingPageComponent);



/***/ }),

/***/ "prqM":
/*!**************************************************************!*\
  !*** ./src/app/it-listing/it-listing.page.routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ListingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingPageRoutingModule", function() { return ListingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _it_listing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./it-listing.page.component */ "frp7");

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_listing_page_component__WEBPACK_IMPORTED_MODULE_3__["ListingPageComponent"],
    },
];
/**
 * Ng module
 */
let ListingPageRoutingModule = class ListingPageRoutingModule {
};
ListingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
    /**
     * ListingPageRoutingModule
     */
], ListingPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=it-listing-it-listing-module.js.map