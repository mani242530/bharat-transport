(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-get-started-it-get-started-module"],{

/***/ "AvPP":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-get-started/it-get-started.page.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- Osahan Started -->\n  <div\n    class=\"\n      osahan-index\n      bg-c\n      d-flex\n      align-items-center\n      justify-content-center\n      vh-100\n      index-page\n    \"\n  >\n    <div class=\"py-4 d-flex align-items-center justify-content-center\">\n      <div class=\"osahan-started pt-2 text-center\">\n        <img\n          src=\"assets/images/bharat-transport-truck.png\"\n          class=\"img-fluid mb-2 col-9 mx-auto rounded\"\n        />\n        <div class=\"fixed-bottom p-4\">\n          <a\n            routerLink=\"/select-language\"\n            class=\"btn btn-block mb-3 osahanbus-btn btn-purple\"\n            >CREATE AN ACCOUNT</a\n          >\n          <a routerLink=\"/signin\" class=\"btn btn-block btn-white osahanbus-btn\"\n            >SIGN IN</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "KT0G":
/*!*********************************************************!*\
  !*** ./src/app/it-get-started/it-get-started.module.ts ***!
  \*********************************************************/
/*! exports provided: GetStartedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedPageModule", function() { return GetStartedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _it_get_started_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./it-get-started.page.component */ "bIuy");
/* harmony import */ var _it_get_started_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./it-get-started.routing.module */ "g+6a");








const routes = [
    {
        path: "",
        component: _it_get_started_page_component__WEBPACK_IMPORTED_MODULE_6__["GetStartedPageComponent"],
    },
];
/**
 * MODULES
 */
const MODULES = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
    _it_get_started_routing_module__WEBPACK_IMPORTED_MODULE_7__["GetStartedPageRoutingModule"],
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_get_started_page_component__WEBPACK_IMPORTED_MODULE_6__["GetStartedPageComponent"],
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let GetStartedPageModule = class GetStartedPageModule {
};
GetStartedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], GetStartedPageModule);



/***/ }),

/***/ "bIuy":
/*!*****************************************************************!*\
  !*** ./src/app/it-get-started/it-get-started.page.component.ts ***!
  \*****************************************************************/
/*! exports provided: GetStartedPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedPageComponent", function() { return GetStartedPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_it_get_started_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./it-get-started.page.component.html */ "AvPP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let GetStartedPageComponent = class GetStartedPageComponent {
    constructor() { }
    ngOnInit() { }
};
GetStartedPageComponent.ctorParameters = () => [];
GetStartedPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-get-started',
        template: _raw_loader_it_get_started_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], GetStartedPageComponent);



/***/ }),

/***/ "g+6a":
/*!*****************************************************************!*\
  !*** ./src/app/it-get-started/it-get-started.routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: GetStartedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedPageRoutingModule", function() { return GetStartedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _it_get_started_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./it-get-started.page.component */ "bIuy");

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: '',
        component: _it_get_started_page_component__WEBPACK_IMPORTED_MODULE_3__["GetStartedPageComponent"],
    },
];
/**
 * Ng module
 */
let GetStartedPageRoutingModule = class GetStartedPageRoutingModule {
};
GetStartedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
    /**
     * GetStartedPageRoutingModule
     */
], GetStartedPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=it-get-started-it-get-started-module.js.map