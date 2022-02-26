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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_app_servcie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/app.servcie */ "+hHy");







let SelectLanguagePageComponent = class SelectLanguagePageComponent {
    constructor(translateService, appservice, router) {
        this.translateService = translateService;
        this.appservice = appservice;
        this.router = router;
        this.languages = [
            {
                id: 'en',
                name: 'ENGLISH',
                description: 'ENGLISH',
                img: 'english'
            },
            {
                id: 'hi',
                name: 'हिंदी',
                description: 'HINDI',
                img: 'hindi'
            },
            {
                id: 'ma',
                name: 'मराठी',
                description: 'MARATHI',
                img: 'marathi'
            },
            {
                id: 'gu',
                name: 'ગુજરાતી',
                description: 'GUJARATI',
                img: 'gujarati'
            },
            {
                id: 'tn',
                name: 'தமிழ்',
                description: 'TAMIL',
                img: 'tamil'
            },
            {
                id: 'tl',
                name: 'తెలుగు',
                description: 'TELUGU',
                img: 'telugu'
            },
            {
                id: 'ka',
                name: 'ಕೆನಡಾ',
                description: 'KANADA',
                img: 'kanada'
            },
            {
                id: 'ml',
                name: 'മലയാളം',
                description: 'MALAYALAM',
                img: 'malayalam'
            },
            {
                id: 'pn',
                name: 'ਪੰਜਾਬੀ',
                description: 'PUNJABI',
                img: 'punjabi'
            },
        ];
    }
    ngOnInit() { }
    loadSelectedLanguage(language) {
        this.appservice.selectedLanguage = language;
        this.translateService.use(language);
        this.router.navigate(['/signup']);
    }
};
SelectLanguagePageComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _services_app_servcie__WEBPACK_IMPORTED_MODULE_6__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2l0LXNlbGVjdC1sYW5ndWFnZS5wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBRUY7QUFBQSxXQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7QUFHRiIsImZpbGUiOiJpdC1zZWxlY3QtbGFuZ3VhZ2UucGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJ1dHRvbiBTdHlsZXMgKi9cbi5nb29nbGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNTA3Y2MwO1xuICBjb2xvcjogIzUwN2NjMCAhaW1wb3J0YW50O1xufVxuLmZiLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2RmNDkzMDtcbiAgY29sb3I6ICNkZjQ5MzAgIWltcG9ydGFudDtcbn1cbi8qIFNpZ25pbiAqL1xuLnNpZ24tb3IgaHIge1xuICB3aWR0aDogMTMwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuIl19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <!-- <ion-toolbar> -->\n  <div\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\n  >\n    <h5 class=\"font-weight-normal mb-0 text-white\">\n      <a class=\"text-purple\" routerLink=\"/get-started\"\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\n      ></a>\n      <ion-title>Choose Language</ion-title>\n    </h5>\n  </div>\n  <!-- </ion-toolbar> -->\n</ion-header>\n\n<ion-content id=\"content\" fullscreen>\n  <!-- <cdk-virtual-scroll-viewport\n    class=\"scroll-viewport\"\n    #scroll\n    itemSize=\"80\"\n    minBufferPx=\"900\"\n    maxBufferPx=\"1350\"\n  > -->\n  <div\n    class=\"\n      osahan-index\n      bg-c\n      align-items-center\n      justify-content-center\n      vh-100\n      index-page\n      py-3\n    \"\n  >\n    <ion-grid>\n      <ion-row>\n        <ion-col\n          size=\"4\"\n          margin\n          routerLink=\"/signup\"\n          class=\"text-dark text-center\"\n          *ngFor=\"let language of languages\"\n        >\n          <div\n            class=\"\n              list-item-img\n              language-item-list\n              align-items-center\n              d-inline-flex\n              justify-content-center\n            \"\n            id=\"{{ language.id }}\"\n            (click)=\"loadSelectedLanguage(language.id)\"\n          >\n            <img\n                src=\"assets/images/{{language.img}}.png\"\n                class=\"img-fluid\"\n              />\n            <!-- <p class=\"mb-0 l-hght-10 text-center text-black mb-2 p-1\">\n              {{ language.name }}\n            </p> -->\n            <br />\n            <!-- <p class=\"mb-0 l-hght-10 text-center text-black mb-2 p-1\">\n              {{ language.description }}\n            </p> -->\n          </div>\n          <p class=\"mb-0 l-hght-10 text-center text-black mb-2 p-1\">\n            {{ language.description }}\n          </p>\n          <!-- <p class=\"l-hght-10 text-center text-black mb-2\">\n              {{ language }}\n            </p> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

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