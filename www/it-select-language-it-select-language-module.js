(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-select-language-it-select-language-module"],{

/***/ "+ZFL":
/*!*************************************************************************!*\
  !*** ./src/app/it-select-language/it-select-language.page.component.ts ***!
  \*************************************************************************/
/*! exports provided: SelectLanguagePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLanguagePageComponent", function() { return SelectLanguagePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_it_select_language_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./it-select-language.page.component.html */ "LX5y");
/* harmony import */ var _it_select_language_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./it-select-language.page.component.scss */ "/ia7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SelectLanguagePageComponent = class SelectLanguagePageComponent {
    constructor() {
        this.languages = [
            {
                id: 'en',
                name: 'ENGLISH',
            },
            {
                id: 'hi',
                name: 'हिंदी',
            },
            {
                id: 'ma',
                name: 'मराठी',
            },
            {
                id: 'gu',
                name: 'ગુજરાતી',
            },
            {
                id: 'tn',
                name: 'தமிழ்',
            },
            {
                id: 'tl',
                name: 'తెలుగు',
            },
            {
                id: 'ka',
                name: 'ಕೆನಡಾ',
            },
            {
                id: 'ml',
                name: 'മലയാളം',
            },
        ];
    }
    ngOnInit() { }
};
SelectLanguagePageComponent.ctorParameters = () => [];
SelectLanguagePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-language',
        template: _raw_loader_it_select_language_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_it_select_language_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelectLanguagePageComponent);



/***/ }),

/***/ "/ia7":
/*!***************************************************************************!*\
  !*** ./src/app/it-select-language/it-select-language.page.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGl0LXNlbGVjdC1sYW5ndWFnZS5wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBRUY7QUFBQSxXQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7QUFHRiIsImZpbGUiOiJpdC1zZWxlY3QtbGFuZ3VhZ2UucGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJ1dHRvbiBTdHlsZXMgKi9cclxuLmdvb2dsZS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTA3Y2MwO1xyXG4gIGNvbG9yOiAjNTA3Y2MwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZiLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItY29sb3I6ICNkZjQ5MzA7XHJcbiAgY29sb3I6ICNkZjQ5MzAgIWltcG9ydGFudDtcclxufVxyXG4vKiBTaWduaW4gKi9cclxuLnNpZ24tb3IgaHIge1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "6gCZ":
/*!*****************************************************************!*\
  !*** ./src/app/it-select-language/it-select-language.module.ts ***!
  \*****************************************************************/
/*! exports provided: SelectLanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLanguagePageModule", function() { return SelectLanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _it_select_language_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./it-select-language.page.component */ "+ZFL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _it_select_language_page_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./it-select-language.page.routing.module */ "lJ0x");









const routes = [
    {
        path: "",
        component: _it_select_language_page_component__WEBPACK_IMPORTED_MODULE_6__["SelectLanguagePageComponent"],
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
    _it_select_language_page_routing_module__WEBPACK_IMPORTED_MODULE_8__["SelectLanguagePageRoutingModule"],
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_select_language_page_component__WEBPACK_IMPORTED_MODULE_6__["SelectLanguagePageComponent"],
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let SelectLanguagePageModule = class SelectLanguagePageModule {
};
SelectLanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], SelectLanguagePageModule);



/***/ }),

/***/ "LX5y":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-select-language/it-select-language.page.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- <ion-toolbar> -->\r\n  <div\r\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\r\n  >\r\n    <h5 class=\"font-weight-normal mb-0 text-white\">\r\n      <a class=\"text-purple\" routerLink=\"/get-started\"\r\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\r\n      ></a>\r\n      <ion-title>Choose Language</ion-title>\r\n    </h5>\r\n  </div>\r\n  <!-- </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <!-- <cdk-virtual-scroll-viewport\r\n    class=\"scroll-viewport\"\r\n    #scroll\r\n    itemSize=\"80\"\r\n    minBufferPx=\"900\"\r\n    maxBufferPx=\"1350\"\r\n  > -->\r\n  <div\r\n    class=\"\r\n      osahan-index\r\n      bg-c\r\n      align-items-center\r\n      justify-content-center\r\n      vh-100\r\n      index-page\r\n    \"\r\n  >\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col\r\n          size=\"4\"\r\n          margin\r\n          routerLink=\"/signup\"\r\n          class=\"text-dark text-center\"\r\n          *ngFor=\"let language of languages\"\r\n        >\r\n          <div\r\n            class=\"\r\n              list-item-img\r\n              language-item-list\r\n              align-items-center\r\n              d-inline-flex\r\n              justify-content-center\r\n            \"\r\n            id=\"{{ language }}\"\r\n          >\r\n            <!-- <img\r\n                src=\"../../assets/img/language//telugu.png\"\r\n                class=\"img-fluid\"\r\n              /> -->\r\n            <span class=\"mb-0 l-hght-10 text-center text-black mb-2 p-1\">\r\n              {{ language.name }}</span\r\n            >\r\n          </div>\r\n          <!-- <p class=\"l-hght-10 text-center text-black mb-2\">\r\n              {{ language }}\r\n            </p> -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "lJ0x":
/*!******************************************************************************!*\
  !*** ./src/app/it-select-language/it-select-language.page.routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: SelectLanguagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLanguagePageRoutingModule", function() { return SelectLanguagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _it_select_language_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./it-select-language.page.component */ "+ZFL");

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_select_language_page_component__WEBPACK_IMPORTED_MODULE_3__["SelectLanguagePageComponent"],
    },
];
/**
 * Ng module
 */
let SelectLanguagePageRoutingModule = class SelectLanguagePageRoutingModule {
};
SelectLanguagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
    /**
     * SelectLanguagePageRoutingModule
     */
], SelectLanguagePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=it-select-language-it-select-language-module.js.map