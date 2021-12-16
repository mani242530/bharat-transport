(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-select-vehicle-it-select-vehicle-module"],{

/***/ "4f9Z":
/*!***********************************************************************!*\
  !*** ./src/app/it-select-vehicle/it-select-vehicle.page.component.ts ***!
  \***********************************************************************/
/*! exports provided: SelectVehiclePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectVehiclePageComponent", function() { return SelectVehiclePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_it_select_vehicle_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./it-select-vehicle.page.component.html */ "I8Go");
/* harmony import */ var _it_select_vehicle_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./it-select-vehicle.page.component.scss */ "LEvm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_app_servcie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/app.servcie */ "+hHy");






let SelectVehiclePageComponent = class SelectVehiclePageComponent {
    constructor(appService, router) {
        this.appService = appService;
        this.router = router;
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
    }
    ngOnInit() { }
    selectVehicleType(vehicleType) {
        this.appService.selectedVehicleType = vehicleType;
        this.router.navigate(['/home']);
    }
};
SelectVehiclePageComponent.ctorParameters = () => [
    { type: _services_app_servcie__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SelectVehiclePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-vehicle',
        template: _raw_loader_it_select_vehicle_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_it_select_vehicle_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelectVehiclePageComponent);



/***/ }),

/***/ "I8Go":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-select-vehicle/it-select-vehicle.page.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- <ion-toolbar> -->\r\n  <div\r\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\r\n  >\r\n    <h5 class=\"font-weight-normal mb-0 text-white\">\r\n      <a class=\"text-purple\"\r\n        ><fa-icon\r\n          icon=\"bus\"\r\n          class=\"icofont-truck text-white h2 bg-purple p-2 rounded-circle\"\r\n        ></fa-icon\r\n      ></a>\r\n      <ion-title>{{ \"APP.SELECT_VEHICLE.TITLE\" | translate }}</ion-title>\r\n    </h5>\r\n\r\n    <div class=\"ml-auto d-flex align-items-center\">\r\n      <ngx-avatar name=\"{{ userName }}\" size=\"50\"></ngx-avatar>\r\n\r\n      <ion-buttons slot=\"end\">\r\n        <ion-menu-button\r\n          ><fa-icon icon=\"bars\" class=\"icofont-navigation-menu\"></fa-icon\r\n        ></ion-menu-button>\r\n      </ion-buttons>\r\n    </div>\r\n  </div>\r\n  <!-- </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <!-- <cdk-virtual-scroll-viewport\r\n    class=\"scroll-viewport\"\r\n    #scroll\r\n    itemSize=\"80\"\r\n    minBufferPx=\"900\"\r\n    maxBufferPx=\"1350\"\r\n  > -->\r\n  <div\r\n    class=\"\r\n      osahan-index\r\n      bg-c\r\n      align-items-center\r\n      justify-content-center\r\n      vh-100\r\n      index-page\r\n    \"\r\n  >\r\n    <div class=\"osahan-listing\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"4\"\r\n            margin\r\n            class=\"text-dark text-center\"\r\n            *ngFor=\"let vehicleType of vehicleTypes; let i = index\"\r\n          >\r\n            <div\r\n              class=\"\r\n                list-item-img\r\n                language-item-list\r\n                align-items-center\r\n                d-inline-flex\r\n                justify-content-center\r\n                mb-2\r\n              \"\r\n              id=\"vehicleType\"\r\n              (click)=\"selectVehicleType(vehicleType)\"\r\n            >\r\n              <img src=\"assets/img/listing/item1.png\" class=\"img-fluid\" />\r\n            </div>\r\n            <p class=\"l-hght-10 text-center text-black mb-2\">\r\n              {{ vehicleType | translate }}\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "LEvm":
/*!*************************************************************************!*\
  !*** ./src/app/it-select-vehicle/it-select-vehicle.page.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdC1zZWxlY3QtdmVoaWNsZS5wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "oNt0":
/*!***************************************************************!*\
  !*** ./src/app/it-select-vehicle/it-select-vehicle.module.ts ***!
  \***************************************************************/
/*! exports provided: SelectVehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectVehiclePageModule", function() { return SelectVehiclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _it_select_vehicle_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./it-select-vehicle.page.component */ "4f9Z");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _it_select_vehicle_page_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./it-select-vehicle.page.routing.module */ "vt6Y");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-avatar */ "HWWf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











const routes = [
    {
        path: '',
        component: _it_select_vehicle_page_component__WEBPACK_IMPORTED_MODULE_6__["SelectVehiclePageComponent"],
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
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
    _it_select_vehicle_page_routing_module__WEBPACK_IMPORTED_MODULE_8__["SelectVehiclePageRoutingModule"],
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_select_vehicle_page_component__WEBPACK_IMPORTED_MODULE_6__["SelectVehiclePageComponent"],
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let SelectVehiclePageModule = class SelectVehiclePageModule {
};
SelectVehiclePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], SelectVehiclePageModule);



/***/ }),

/***/ "vt6Y":
/*!****************************************************************************!*\
  !*** ./src/app/it-select-vehicle/it-select-vehicle.page.routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: SelectVehiclePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectVehiclePageRoutingModule", function() { return SelectVehiclePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _it_select_vehicle_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./it-select-vehicle.page.component */ "4f9Z");

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: '',
        component: _it_select_vehicle_page_component__WEBPACK_IMPORTED_MODULE_3__["SelectVehiclePageComponent"],
    },
];
/**
 * Ng module
 */
let SelectVehiclePageRoutingModule = class SelectVehiclePageRoutingModule {
};
SelectVehiclePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
    /**
     * SelectVehiclePageRoutingModule
     */
], SelectVehiclePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=it-select-vehicle-it-select-vehicle-module.js.map