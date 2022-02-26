(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-splash-it-splash-module"],{

/***/ "5oFa":
/*!*******************************************************!*\
  !*** ./src/app/it-splash/it-splash.routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SplashPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageRoutingModule", function() { return SplashPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _it_splash_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./it-splash.page.component */ "ODfu");

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_splash_page_component__WEBPACK_IMPORTED_MODULE_3__["SplashPageComponent"],
    },
];
/**
 * Ng module
 */
let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
    /**
     * SplashPageRoutingModule
     */
], SplashPageRoutingModule);



/***/ }),

/***/ "E5bN":
/*!***********************************************!*\
  !*** ./src/app/it-splash/it-splash.module.ts ***!
  \***********************************************/
/*! exports provided: SplashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageModule", function() { return SplashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _it_splash_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./it-splash.page.component */ "ODfu");
/* harmony import */ var _it_splash_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./it-splash.routing.module */ "5oFa");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










const routes = [
    {
        path: '',
        component: _it_splash_page_component__WEBPACK_IMPORTED_MODULE_6__["SplashPageComponent"],
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
    _it_splash_routing_module__WEBPACK_IMPORTED_MODULE_7__["SplashPageRoutingModule"],
    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_splash_page_component__WEBPACK_IMPORTED_MODULE_6__["SplashPageComponent"],
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let SplashPageModule = class SplashPageModule {
};
SplashPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], SplashPageModule);



/***/ }),

/***/ "ODfu":
/*!*******************************************************!*\
  !*** ./src/app/it-splash/it-splash.page.component.ts ***!
  \*******************************************************/
/*! exports provided: SplashPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageComponent", function() { return SplashPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_it_splash_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./it-splash.page.component.html */ "pjDJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




let SplashPageComponent = class SplashPageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        // this.initTranslate();
    }
    initTranslate() {
        // Set the default language for translation strings, and the current language.
        // this._translate.setDefaultLang('hi');
        // if (this._translate.getBrowserLang() !== undefined) {
        //   this._translate.use(this._translate.getBrowserLang());
        // } else {
        //   this._translate.use("hi"); // Set your language here
        // }
    }
};
SplashPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SplashPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-splash',
        template: _raw_loader_it_splash_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SplashPageComponent);



/***/ }),

/***/ "pjDJ":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-splash/it-splash.page.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- Osahan Index -->\n  <div\n    class=\"\n      osahan-index\n      bg-c\n      d-flex\n      align-items-center\n      justify-content-center\n      vh-100\n      index-page\n    \"\n  >\n    <div class=\"text-center\">\n      <a routerLink=\"/get-started\">\n        <img src=\"assets/images/app_logo.png\" class=\"display-1 p-3\" /> </a\n      ><br />\n\n      <div class=\"spinner\"></div>\n    </div>\n  </div>\n  <div class=\"osahan-fotter fixed-bottom m-3\">\n    <a\n      class=\"\n        btn btn-block\n        px-4\n        py-3\n        d-flex\n        align-items-center\n        osahanbus-btlan\n        btn-purple\n        shadow\n      \"\n      routerLink=\"/get-started\"\n    >\n      {{ \"APP.GET_STARTED\" | translate }}\n      <fa-icon\n        icon=\"arrow-right\"\n        class=\"text-white splash-arrow-right\"\n      ></fa-icon>\n    </a>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=it-splash-it-splash-module.js.map