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
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toast.service */ "2g2N");







let ListingDetailPageComponent = class ListingDetailPageComponent {
    constructor(activatedRoute, toastservice, ngroute, fbstore) {
        this.activatedRoute = activatedRoute;
        this.toastservice = toastservice;
        this.ngroute = ngroute;
        this.fbstore = fbstore;
        this.paramId = this.activatedRoute.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        // if (this.userData) {
        //   [this.user] = this.userData && this.userData.map((item) => item);
        //   if (this.user) {
        //     this.userName = this.user.firstName + ' ' + this.user.lastName;
        //   }
        // }
        this.getProduct(this.paramId);
    }
    getProduct(docid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fbstore
                    .doc('companys/' + docid)
                    .valueChanges()
                    .subscribe((result) => {
                    console.log('detail>>>' + result);
                    if (!result) {
                        this.ngroute.navigate(['/listing']);
                    }
                    else {
                        this.company = result;
                    }
                });
            }
            catch (error) {
                this.toastservice.showToast(error.message, 2000);
                //console.log(error.message);
            }
        });
    }
    ngOnDestroy() { }
};
ListingDetailPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGl0LWxpc3RpbmctZGV0YWlsLnBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUFBLFdBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBQUdGIiwiZmlsZSI6Iml0LWxpc3RpbmctZGV0YWlsLnBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCdXR0b24gU3R5bGVzICovXHJcbi5nb29nbGUtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzUwN2NjMDtcclxuICBjb2xvcjogIzUwN2NjMCAhaW1wb3J0YW50O1xyXG59XHJcbi5mYi1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGY0OTMwO1xyXG4gIGNvbG9yOiAjZGY0OTMwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogU2lnbmluICovXHJcbi5zaWduLW9yIGhyIHtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuIl19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- <ion-toolbar> -->\r\n  <div\r\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\r\n  >\r\n    <h5 class=\"font-weight-normal mb-0 text-white\">\r\n      <a class=\"text-purple\" routerLink=\"/listing\"\r\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\r\n      ></a>\r\n      <ion-title>Company Details</ion-title>\r\n    </h5>\r\n    <div class=\"ml-auto d-flex align-items-center\">\r\n      <ngx-avatar\r\n        name=\"{{ userName }}\"\r\n        (clickOnAvatar)=\"avatarClicked($event)\"\r\n        size=\"50\"\r\n      ></ngx-avatar>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-menu-button\r\n          ><fa-icon icon=\"bars\" class=\"icofont-navigation-menu\"></fa-icon\r\n        ></ion-menu-button>\r\n      </ion-buttons>\r\n    </div>\r\n  </div>\r\n  <!-- </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <!-- <cdk-virtual-scroll-viewport\r\n    class=\"scroll-viewport\"\r\n    #scroll\r\n    itemSize=\"80\"\r\n    minBufferPx=\"900\"\r\n    maxBufferPx=\"1350\"\r\n  > -->\r\n\r\n  <ion-list lines=\"none\" *ngIf=\"!isLoading\">\r\n    <ion-item-sliding *ngIf=\"company\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <div class=\"Bus-Details padding-bt\">\r\n              <div class=\"list_item m-0 bg-white\">\r\n                <div class=\"px-2 py-3 tic-div border-bottom d-flex\">\r\n                  <!-- <img\r\n                    src=\"assets/img/listing/item1.png\"\r\n                    class=\"img-fluid border rounded p-1 shape-img mr-3\"\r\n                  /> -->\r\n                  <ngx-avatar\r\n                    size=\"40\"\r\n                    initialsSize=\"2\"\r\n                    cornerRadius=\"4\"\r\n                    [round]=\"false\"\r\n                    name=\"{{ company.firstName }} {{ company.lastName }}\"\r\n                    [style]=\"initials\"\r\n                  ></ngx-avatar>\r\n                  <div class=\"w-100 margin-left-15\">\r\n                    <ion-label>\r\n                      <h3 class=\"my-1 l-hght-18 font-weight-bold\">\r\n                        {{ company.firstName }} {{ company.lastName }}\r\n                      </h3>\r\n                    </ion-label>\r\n\r\n                    <div class=\"start-rating f-10\">\r\n                      <div class=\"d-flex mt-1\">\r\n                        <p class=\"m-0\">\r\n                          <fa-icon\r\n                            icon=\"map-marker-alt\"\r\n                            class=\"map-marker-alt\"\r\n                          ></fa-icon\r\n                          ><span class=\"small\">{{ company.location }}</span>\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"bus-details pt-2 pb-0 px-2\">\r\n                  <div class=\"info\" id=\"info\">\r\n                    <ion-label>\r\n                      <h3 class=\"font-weight-normal mb-1\">\r\n                        About {{ company.companyName }}\r\n                      </h3>\r\n                    </ion-label>\r\n\r\n                    <p class=\"text-muted small\">\r\n                      Lorem Ipsum is simply dummy text of the printing and\r\n                      typesetting industry. Lorem Ipsum has been the industry's\r\n                      standard dummy text ever since the 1500s.\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"bus-details pt-2 pb-0 px-2\">\r\n                  <div class=\"info\" id=\"info\">\r\n                    <ion-label>\r\n                      <h3 class=\"font-weight-normal mb-1\">Firm Activity</h3>\r\n                    </ion-label>\r\n\r\n                    <p class=\"text-muted\">\r\n                      {{ company.firmActivity }}\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"bus-details pt-2 pb-0 px-2\">\r\n                  <div class=\"info\" id=\"info\">\r\n                    <ion-label>\r\n                      <h3 class=\"font-weight-normal mb-1\">Service Providing</h3>\r\n                    </ion-label>\r\n\r\n                    <p class=\"text-muted\">\r\n                      {{ company.serviceProviding }}\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"bus-details pt-2 pb-0 px-2\">\r\n                  <div class=\"info\" id=\"info\">\r\n                    <ion-label>\r\n                      <h3 class=\"font-weight-normal mb-1\">Mobile Number</h3>\r\n                    </ion-label>\r\n\r\n                    <p class=\"text-muted\">\r\n                      {{ company.mobileNumber }}\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"bus-details pt-2 pb-0 px-2\">\r\n                  <div class=\"info\" id=\"info\">\r\n                    <ion-label>\r\n                      <h3 class=\"font-weight-normal mb-1\">Land Line Number</h3>\r\n                    </ion-label>\r\n\r\n                    <p class=\"text-muted\">\r\n                      {{ company.landlineNumber }}\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Button -->\r\n              <div class=\"osahan-fotter fixed-bottom m-3\">\r\n                <a class=\"btn btn-purple btn-block osahanbus-btn rounded-1\"\r\n                  >Call Now</a\r\n                >\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n  <ion-list lines=\"none\" *ngIf=\"isLoading\">\r\n    <ion-item-sliding *ngFor=\"let company of companys\">\r\n      <ion-item lines=\"none\">\r\n        <ion-label>\r\n          <h3>\r\n            <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\r\n          </h3>\r\n          <p>\r\n            <ion-skeleton-text animated style=\"width: 75%\"></ion-skeleton-text>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=it-listing-detail-it-listing-detail-module.js.map