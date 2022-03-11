(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-listing-it-listing-module"],{

/***/ "2nZ6":
/*!***********************************************************!*\
  !*** ./src/app/it-listing/it-listing.page.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2l0LWxpc3RpbmcucGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUVGO0FBQUEsV0FBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBR0YiLCJmaWxlIjoiaXQtbGlzdGluZy5wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQnV0dG9uIFN0eWxlcyAqL1xuLmdvb2dsZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICM1MDdjYzA7XG4gIGNvbG9yOiAjNTA3Y2MwICFpbXBvcnRhbnQ7XG59XG4uZmItYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZGY0OTMwO1xuICBjb2xvcjogI2RmNDkzMCAhaW1wb3J0YW50O1xufVxuLyogU2lnbmluICovXG4uc2lnbi1vciBociB7XG4gIHdpZHRoOiAxMzBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4iXX0= */");

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











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
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    ngx_avatar__WEBPACK_IMPORTED_MODULE_9__["AvatarModule"],
    _it_listing_page_routing_module__WEBPACK_IMPORTED_MODULE_8__["ListingPageRoutingModule"],
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <div\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\n  >\n    <h5 class=\"font-weight-normal mb-0 text-white\">\n      <a class=\"text-purple\" routerLink=\"/home\"\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\n      ></a>\n      <ion-title>{{ \"APP.LISTING.TITLE\" | translate }}</ion-title>\n    </h5>\n    <div class=\"ml-auto d-flex align-items-center\">\n      <ion-buttons slot=\"end\">\n        <a [routerLink]=\"['/profile/', docId]\"\n          ><fa-icon\n            icon=\"user-circle\"\n            class=\"icofont-user-circle\"\n            style=\"color: #ffffff; font-size: 26px\"\n          ></fa-icon\n        ></a>\n        <a style=\"margin-left: 20px\" (click)=\"doLogout()\"\n          ><fa-icon\n            icon=\"sign-out-alt\"\n            class=\"sign-out-alt\"\n            style=\"color: #ffffff; font-size: 26px\"\n          ></fa-icon\n        ></a>\n      </ion-buttons>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content id=\"content\" fullscreen>\n  <!-- <cdk-virtual-scroll-viewport\n    class=\"scroll-viewport\"\n    #scroll\n    itemSize=\"80\"\n    minBufferPx=\"900\"\n    maxBufferPx=\"1350\"\n  > -->\n  <div class=\"osahan-listing p-0 m-0 row border-top background-image\">\n    <div class=\"p-2 w-100\">\n      <div class=\"border border-warning rounded-1 shadow-sm p-2 bg-white\">\n        <div class=\"row mx-0 px-1\">\n          <div class=\"col-6 p-0\">\n            <small class=\"text-purple font-bold mb-1 f-10 pr-1\">{{\n              \"APP.LISTING.LABEL.GOING_FROM\" | translate\n            }}</small>\n            <p class=\"small font-bold mb-0\">\n              {{ searchParam.from | uppercase }}\n            </p>\n          </div>\n\n          <div class=\"col-6 p-0\">\n            <small class=\"text-purple font-bold mb-1 f-10 pr-1\">{{\n              \"APP.LISTING.LABEL.GOING_TO\" | translate\n            }}</small>\n            <p class=\"small font-bold mb-0\">{{ searchParam.to | uppercase }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row mx-0 px-1 background-image\">\n    <div class=\"col-12\">\n      <small\n        class=\"text-purple font-bold d-block record-text-right\"\n        *ngIf=\"companyLists && companyLists.length > 0\"\n        >{{ \"APP.LISTING.LABEL.TOTAL_RECORDS\" | translate }} -\n        {{ companyLists && companyLists.length }}\n      </small>\n    </div>\n    <div class=\"col-12 p-0\">\n      <ion-searchbar\n        (keyup)=\"setFilteredItems($event)\"\n        class=\"font-bold\"\n        placeholder=\"Filter by Company Name\"\n      ></ion-searchbar>\n    </div>\n  </div>\n\n  <ion-list lines=\"none\" *ngIf=\"!isLoading\">\n    <ion-item-sliding\n      *ngFor=\"let company of companyLists; let i = index\"\n      class=\"text-dark px-0 py-0\"\n    >\n      <div\n        class=\"list_item_gird m-1 bg-white shadow-sm listing-item border-right p-3\"\n      >\n        <div class=\"tic-div mb-2\">\n          <span class=\"text-purple font-bold d-block\">{{\n            \"APP.LISTING.LABEL.COMPANY_NAME\" | translate\n          }}</span>\n          <p class=\"mb-0 l-hght-10\">{{ company.companyName }}</p>\n        </div>\n        <ion-item class=\"top-border-line\">\n          <fa-icon\n            icon=\"phone-alt\"\n            class=\"phone-alt\"\n            style=\"\n              font-size: 24px;\n              margin-right: 20px;\n              color: #5f259f !important;\n            \"\n          ></fa-icon>\n          <ion-label>\n            <h2>{{ \"APP.LISTING.LABEL.MOBILE\" | translate }}</h2>\n            <p class=\"font-bold text-purple\">\n              {{ company.mobileNumber }}\n            </p>\n          </ion-label>\n          <fa-icon\n            icon=\"angle-double-right\"\n            class=\"angle-double-right font-bold\"\n            (click)=\"goListingDetailPage(company.id)\"\n          ></fa-icon>\n        </ion-item>\n      </div>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-list lines=\"none\" *ngIf=\"isLoading\">\n    <ion-item-sliding>\n      <ion-item lines=\"none\">\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 75%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <div class=\"d-flex justify-content-center\">\n    <div\n      class=\"spinner-grow d-flex justify-content-center\"\n      role=\"status\"\n      *ngIf=\"isLoading\"\n    >\n      <span class=\"sr-only\">{{ \"APP.LISTING.LOADING\" | translate }}</span>\n    </div>\n  </div>\n\n  <div\n    class=\"d-flex justify-content-center text-danger font-bold mt-5\"\n    *ngIf=\"noresults\"\n  >\n    <span>{{ \"APP.LISTING.NO_RESULTS\" | translate }}</span>\n  </div>\n\n  <!-- </cdk-virtual-scroll-viewport> -->\n</ion-content>\n");

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
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");












let ListingPageComponent = class ListingPageComponent {
    constructor(modalController, router, appService, ngroute, fbstore, toastservice, fbauth) {
        this.modalController = modalController;
        this.router = router;
        this.appService = appService;
        this.ngroute = ngroute;
        this.fbstore = fbstore;
        this.toastservice = toastservice;
        this.fbauth = fbauth;
        this.isLoading = true;
        this.noresults = false;
        this.isLoading = true;
        this.docId = this.appService.docId;
        this.router.queryParams.subscribe((params) => {
            this.searchParam = params;
            this.searchContactByLocation(this.searchParam);
            // this.searchContactByLocationFireStore(this.searchParam);
        });
        this.selectedVehicleType = this.appService.selectedVehicleType;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { });
    }
    trackByFn(_, item) {
        return item.id;
    }
    checkThisList(list1, list2) {
        let result = false;
        var hasValue = list2.indexOf(list1) != -1;
        if (hasValue) {
            result = true;
        }
        return result;
    }
    searchContactByLocation(params) {
        try {
            this.fbstore
                .collection('companys')
                .snapshotChanges()
                .subscribe((data) => {
                // VEHICLE TYPE
                let fresult = [];
                for (let res of data) {
                    if (this.checkThisList(this.selectedVehicleType, res.payload.doc.data()['vehicleType'])) {
                        fresult.push(res);
                    }
                }
                // FROM LOCATION
                const locresult = fresult.filter(function (item) {
                    return item.payload.doc.data()['location'] === params.from;
                });
                // TO LOCATION
                let serviceresult = [];
                for (let lres of locresult) {
                    if (this.checkThisList(params.to, lres.payload.doc.data()['serviceProvidedLocation'])) {
                        serviceresult.push(lres);
                    }
                }
                // FIRM ACTIVITY
                const activityresult = serviceresult.filter(function (item) {
                    return (item.payload.doc.data()['firmActivity'] === params.firmActivity);
                });
                if (activityresult && activityresult.length > 0) {
                    this.noresults = false;
                    this.companys =
                        activityresult &&
                            activityresult.map((result) => {
                                this.companyid = result.payload.doc.id;
                                return {
                                    id: result.payload.doc.id,
                                    companyName: result.payload.doc.data()['companyName'],
                                    ownerName: result.payload.doc.data()['ownerName'],
                                    firmActivity: result.payload.doc.data()['firmActivity'],
                                    vehicleType: result.payload.doc.data()['vehicleType'],
                                    mobileNumber: result.payload.doc.data()['mobileNumber'],
                                    alternateMobileNumber: result.payload.doc.data()['alternateMobileNumber'],
                                    location: result.payload.doc.data()['location'],
                                    serviceProvidedLocation: result.payload.doc.data()['serviceProvidedLocation'],
                                    referenceName: result.payload.doc.data()['referenceName'],
                                    vehicleNos: result.payload.doc.data()['vehicleNos'],
                                    aadharNumber: result.payload.doc.data()['aadharNumber'],
                                    drivingLicenseNumber: result.payload.doc.data()['drivingLicenseNumber'],
                                    paymentStatus: result.payload.doc.data()['paymentStatus'],
                                    accountStatus: result.payload.doc.data()['accountStatus'],
                                };
                            });
                    this.companyLists = this.companys;
                    this.finalResultForCompanys = this.companys;
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
        }
    }
    setFilteredItems(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const searchCompanyResult = this.finalResultForCompanys;
            const duplicateResult = searchCompanyResult.filter((item) => item.companyName
                .toLowerCase()
                .indexOf(event.target.value.toLowerCase()) !== -1);
            // const duplicateResult = searchCompanyResult.filter(function(v, i) {
            //   return ((v['mobileNumber'] == '+91'+event.target.value || v['companyName'] == event.target.value.toLowerCase()));
            // })
            this.companyLists = duplicateResult;
        });
    }
    searchContactByLocationFireStore(params) {
        this.isLoading = true;
        if (params) {
            this.companysCollection = this.fbstore.collection('companys', (ref) => ref
                .where('vehicleType', 'in', this.selectedVehicleType.split(''))
                .where('location', '==', params.from)
                .where('serviceProvidedLocation', 'array-contains', params.to.split(''))
                .where('firmActivity', '==', params.firmActivity));
            this.companys = this.companysCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((actions) => {
                return actions.map((action) => {
                    const data = action.payload.doc.data();
                    return {
                        id: action.payload.doc.id,
                        companyName: data[0].companyName,
                        ownerName: data[0].ownerName,
                        firmActivity: data[0].firmActivity,
                        vehicleType: data[0].vehicleType,
                        mobileNumber: data[0].mobileNumber,
                        alternateMobileNumber: data[0].alternateMobileNumber,
                        location: data[0].location,
                        serviceProvidedLocation: data[0].serviceProvidedLocation,
                        referenceName: data[0].referenceName,
                        vehicleNos: data[0].vehicleNos,
                        aadharNumber: data[0].aadharNumber,
                        drivingLicenseNumber: data[0].drivingLicenseNumber,
                        paymentStatus: data[0].paymentStatus,
                        accountStatus: data[0].accountStatus,
                    };
                });
            }));
            this.companys.subscribe((snapshot) => {
                if (snapshot.length == 0) {
                    console.log('Data NOT found');
                    console.log(snapshot);
                    this.isLoading = false;
                    this.noresults = true;
                }
                else {
                    console.log('Data found' + snapshot[0].id);
                    console.log(snapshot);
                    this.isLoading = false;
                    this.noresults = false;
                    this.companyLists = this.companys;
                    this.finalResultForCompanys = this.companys;
                }
            });
        }
    }
    goListingDetailPage(companyid) {
        console.log(companyid);
        this.appService.selectedCompanyId = companyid;
        console.log(this.searchParam);
        const navigationExtras = {
            queryParams: {
                from: this.searchParam.from,
                to: this.searchParam.to,
                firmActivity: this.searchParam.firmActivity,
                companyId: companyid,
            },
        };
        this.ngroute.navigate(['/listing-detail'], navigationExtras);
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fbauth.signOut().then(() => {
                this.appService.selectedLanguage = '';
                this.ngroute.navigate(['splash']);
            });
        });
    }
};
ListingPageComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_app_servcie__WEBPACK_IMPORTED_MODULE_9__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuth"] }
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




/**
 * Routes
 */
const routes = [
    {
        path: '',
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