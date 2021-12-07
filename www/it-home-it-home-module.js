(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-home-it-home-module"],{

/***/ "E/BT":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-home/it-home.page.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- <ion-toolbar> -->\r\n  <div\r\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\r\n  >\r\n    <h5 class=\"font-weight-normal mb-0 text-white\">\r\n      <a class=\"text-purple\"\r\n        ><fa-icon\r\n          icon=\"bus\"\r\n          class=\"icofont-truck text-white h2 bg-purple p-2 rounded-circle\"\r\n        ></fa-icon\r\n      ></a>\r\n      <ion-title>Search</ion-title>\r\n    </h5>\r\n    <div class=\"ml-auto d-flex align-items-center\">\r\n      <ngx-avatar\r\n        name=\"{{ userName }}\"\r\n        (clickOnAvatar)=\"avatarClicked($event)\"\r\n        size=\"50\"\r\n      ></ngx-avatar>\r\n\r\n      <ion-buttons slot=\"end\">\r\n        <ion-menu-button\r\n          ><fa-icon icon=\"bars\" class=\"icofont-navigation-menu\"></fa-icon\r\n        ></ion-menu-button>\r\n      </ion-buttons>\r\n    </div>\r\n  </div>\r\n  <!-- </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <div\r\n    class=\"\r\n      osahan-index\r\n      bg-c\r\n      align-items-center\r\n      justify-content-center\r\n      vh-100\r\n      index-page\r\n    \"\r\n  >\r\n    <div class=\"px-3 pb-3 pt-3\">\r\n      <div class=\"bg-white p-3 home-search-form\">\r\n        <form [formGroup]=\"searchCompanyForm\" #searchForm>\r\n          <div class=\"form-group border-bottom\">\r\n            <fa-icon icon=\"search-location\" class=\"search-location\"></fa-icon>\r\n            <label for=\"exampleFormControlSelect1\" class=\"mb-2\"\r\n              ><span class=\"icofont-search-map text-purple\"></span> From</label\r\n            ><br />\r\n            <div class=\"form-group mb-3\">\r\n              <ion-select\r\n                interface=\"popover\"\r\n                class=\"\r\n                  form-control\r\n                  rc-form-control\r\n                  native-select\r\n                  it-form-control\r\n                \"\r\n                placeholder=\"Select From Location\"\r\n                formControlName=\"from\"\r\n                required\r\n              >\r\n                <ion-select-option\r\n                  *ngFor=\"let location of locations\"\r\n                  value=\"{{ location.name }}\"\r\n                  title=\"{{ location.name }}\"\r\n                  >{{ location.name }}</ion-select-option\r\n                >\r\n              </ion-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group border-bottom\">\r\n            <fa-icon icon=\"map-marker-alt\" class=\"map-marker-alt\"></fa-icon>\r\n            <label for=\"exampleFormControlSelect1\" class=\"mb-2\"\r\n              ><span class=\"icofont-google-map text-purple\"></span> To</label\r\n            ><br />\r\n            <div class=\"form-group mb-3\">\r\n              <ion-select\r\n                interface=\"popover\"\r\n                class=\"\r\n                  form-control\r\n                  rc-form-control\r\n                  native-select\r\n                  it-form-control\r\n                \"\r\n                placeholder=\"Select To Location\"\r\n                formControlName=\"to\"\r\n                required\r\n              >\r\n                <ion-select-option\r\n                  *ngFor=\"let location of locations\"\r\n                  value=\"{{ location.name }}\"\r\n                  title=\"{{ location.name }}\"\r\n                  >{{ location.name }}</ion-select-option\r\n                >\r\n              </ion-select>\r\n            </div>\r\n          </div>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-purple btn-block osahanbus-btn rounded-1 mt-2\"\r\n            [disabled]=\"!searchCompanyForm.valid\"\r\n            (click)=\"searchContactByLocation(searchCompanyForm.value)\"\r\n          >\r\n            Search\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"p-3 bg-warning\">\r\n      <div class=\"row m-0\">\r\n        <div class=\"col-6 py-1 pr-1 pl-0\">\r\n          <div class=\"p-3 bg-white shadow-sm rounded-1\">\r\n            <img class=\"img-fluid\" src=\"assets/img/safe-vehicles.svg\" alt=\"\" />\r\n            <p class=\"mb-0 mt-4 font-weight-bold\">\r\n              Safe and Hygenic<br />Vehicles\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 py-1 pl-1 pr-0\">\r\n          <div class=\"p-3 bg-white shadow-sm rounded-1\">\r\n            <img\r\n              class=\"img-fluid\"\r\n              src=\"assets/img/customer-support.svg\"\r\n              alt=\"\"\r\n            />\r\n            <p class=\"mb-0 mt-4 font-weight-bold\">\r\n              Best Customer<br />Care and Support\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 py-1 pr-1 pl-0\">\r\n          <div class=\"p-3 bg-white shadow-sm rounded-1\">\r\n            <img class=\"img-fluid\" src=\"assets/img/live-tracking.svg\" alt=\"\" />\r\n            <p class=\"mb-0 mt-4 font-weight-bold\">\r\n              Live Track your<br />Journey\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 py-1 pl-1 pr-0\">\r\n          <div class=\"p-3 bg-white shadow-sm rounded-1\">\r\n            <img\r\n              class=\"img-fluid\"\r\n              src=\"assets/img/verified-drivers.svg\"\r\n              alt=\"\"\r\n            />\r\n            <p class=\"mb-0 mt-4 font-weight-bold\">\r\n              Verified Drivers<br />and Vehicles\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "P+C6":
/*!*******************************************!*\
  !*** ./src/app/it-home/it-home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _it_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./it-home.page.component */ "rdMg");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _it_home_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./it-home.routing.module */ "p3eC");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-avatar */ "HWWf");










const routes = [
    {
        path: '',
        component: _it_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
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
    ngx_avatar__WEBPACK_IMPORTED_MODULE_9__["AvatarModule"],
    _it_home_routing_module__WEBPACK_IMPORTED_MODULE_8__["HomePageRoutingModule"],
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], HomePageModule);



/***/ }),

/***/ "cVyt":
/*!*****************************************************!*\
  !*** ./src/app/it-home/it-home.page.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGl0LWhvbWUucGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUVGO0FBQUEsV0FBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBR0YiLCJmaWxlIjoiaXQtaG9tZS5wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQnV0dG9uIFN0eWxlcyAqL1xyXG4uZ29vZ2xlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItY29sb3I6ICM1MDdjYzA7XHJcbiAgY29sb3I6ICM1MDdjYzAgIWltcG9ydGFudDtcclxufVxyXG4uZmItYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogI2RmNDkzMDtcclxuICBjb2xvcjogI2RmNDkzMCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIFNpZ25pbiAqL1xyXG4uc2lnbi1vciBociB7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "p3eC":
/*!***************************************************!*\
  !*** ./src/app/it-home/it-home.routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _it_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./it-home.page.component */ "rdMg");

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"],
    },
];
/**
 * Ng module
 */
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
    /**
     * HomePageRoutingModule
     */
], HomePageRoutingModule);



/***/ }),

/***/ "rdMg":
/*!***************************************************!*\
  !*** ./src/app/it-home/it-home.page.component.ts ***!
  \***************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_it_home_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./it-home.page.component.html */ "E/BT");
/* harmony import */ var _it_home_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./it-home.page.component.scss */ "cVyt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _json_location__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../json/location */ "wEno");







let HomePageComponent = class HomePageComponent {
    constructor(router) {
        this.router = router;
        this.locations = _json_location__WEBPACK_IMPORTED_MODULE_6__["locationData"];
    }
    ngOnInit() {
        // this.userData = this.dataService.signnedInUser;
        // if (this.userData) {
        //   [this.user] = this.userData && this.userData.map((item) => item);
        //   if (this.user) {
        //     this.userName = this.user.firstName + ' ' + this.user.lastName;
        //   }
        // }
        this.initializeForm();
    }
    initializeForm() {
        this.searchCompanyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    }
    searchContactByLocation(values) {
        let navigationExtras = {
            queryParams: {
                from: values.from,
                to: values.to,
            },
        };
        this.router.navigate(['listing'], navigationExtras);
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
HomePageComponent.propDecorators = {
    searchForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['searchForm',] }]
};
HomePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_it_home_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_it_home_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePageComponent);



/***/ })

}]);
//# sourceMappingURL=it-home-it-home-module.js.map