(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-home-it-home-module"],{

/***/ "E/BT":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-home/it-home.page.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <!-- <ion-toolbar> -->\n  <div\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\n  >\n    <h5 class=\"font-weight-normal mb-0 text-white\">\n      <a class=\"text-purple\" routerLink=\"/select-vehicle\"\n        ><fa-icon\n          icon=\"bus\"\n          class=\"icofont-truck text-white h2 bg-purple p-2 rounded-circle\"\n        ></fa-icon\n      ></a>\n      <ion-title>{{ \"APP.HOME.BUTTON.SEARCH\" | translate }}</ion-title>\n    </h5>\n    <div class=\"ml-auto d-flex align-items-center\">\n      <ion-buttons slot=\"end\">\n        <a [routerLink]=\"['/profile/', docId]\"\n          ><fa-icon\n            icon=\"user-circle\"\n            class=\"icofont-user-circle\"\n            style=\"color: #ffffff; font-size: 26px\"\n          ></fa-icon\n        ></a>\n        <a style=\"margin-left: 20px\" (click)=\"doLogout()\"\n          ><fa-icon\n            icon=\"sign-out-alt\"\n            class=\"sign-out-alt\"\n            style=\"color: #ffffff; font-size: 26px\"\n          ></fa-icon\n        ></a>\n      </ion-buttons>\n    </div>\n  </div>\n  <!-- </ion-toolbar> -->\n</ion-header>\n\n<ion-content id=\"content\" fullscreen>\n  <div\n    class=\"osahan-index bg-c align-items-center justify-content-center index-page\"\n  >\n    <div class=\"px-3 pb-3 pt-3\">\n      <div class=\"bg-white p-3 home-search-form\">\n        <form [formGroup]=\"searchCompanyForm\" #searchForm>\n          <div class=\"form-group border-bottom\">\n            <fa-icon icon=\"search-location\" class=\"search-location\"></fa-icon>\n            <label\n              for=\"exampleFormControlSelect1\"\n              class=\"mb-2 text-purple font-bold\"\n              ><span class=\"icofont-search-map text-purple font-bold\"></span>\n              {{ \"APP.HOME.LABEL.FROM\" | translate }}</label\n            ><br />\n            <div class=\"form-group mb-3\">\n              <input\n                list=\"fromLocations\"\n                placeholder=\"{{\n                  'APP.HOME.PLACEHOLDER.SELECT_FROM_LOCATION' | translate\n                }}\"\n                class=\"form-control rc-form-control native-select it-form-control\"\n                required\n                formControlName=\"from\"\n                clearInput=\"true\"\n              />\n              <datalist id=\"fromLocations\">\n                <option\n                  *ngFor=\"let location of serviceProvidedLocations\"\n                  value=\"{{ location.name | translate }}\"\n                  title=\"{{ location.name | translate }}\"\n                >\n                  {{ location.name | translate }}\n                </option>\n              </datalist>\n            </div>\n          </div>\n          <div class=\"form-group border-bottom\">\n            <fa-icon icon=\"map-marker-alt\" class=\"map-marker-alt\"></fa-icon>\n            <label\n              for=\"exampleFormControlSelect1\"\n              class=\"mb-2 text-purple font-bold\"\n              ><span class=\"icofont-google-map text-purple font-bold\"></span>\n              {{ \"APP.HOME.LABEL.TO\" | translate }}</label\n            ><br />\n            <div class=\"form-group mb-3\">\n              <input\n                list=\"toLocations\"\n                placeholder=\"{{\n                  'APP.HOME.PLACEHOLDER.SELECT_TO_LOCATION' | translate\n                }}\"\n                class=\"form-control rc-form-control native-select it-form-control\"\n                required\n                formControlName=\"to\"\n                clearInput=\"true\"\n              />\n              <datalist id=\"toLocations\">\n                <option\n                  *ngFor=\"let location of serviceProvidedLocations\"\n                  value=\"{{ location.name | translate }}\"\n                  title=\"{{ location.name | translate }}\"\n                >\n                  {{ location.name | translate }}\n                </option>\n              </datalist>\n            </div>\n          </div>\n          <div class=\"form-group border-bottom\">\n            <fa-icon icon=\"building\" class=\"building\"></fa-icon>\n            <label\n              for=\"exampleFormControlSelect1\"\n              class=\"mb-2 text-purple font-bold\"\n              ><span class=\"icofont-google-map text-purple font-bold\"></span>\n              {{ \"APP.HOME.LABEL.FIRM_ACTIVITY\" | translate }}</label\n            ><br />\n            <div class=\"form-group mb-3\">\n              <ion-select\n                interface=\"popover\"\n                class=\"form-control rc-form-control native-select it-form-control\"\n                placeholder=\"{{\n                  'APP.HOME.PLACEHOLDER.SELECT_FIRM_ACTIVITY' | translate\n                }}\"\n                formControlName=\"firmActivity\"\n                required\n              >\n                <ion-select-option\n                  *ngFor=\"let firmActivity of firmActivitys\"\n                  selected=\"false\"\n                  value=\"{{ firmActivity | translate }}\"\n                  title=\"{{ firmActivity | translate }}\"\n                  >{{ firmActivity | translate }}</ion-select-option\n                >\n              </ion-select>\n            </div>\n          </div>\n          <button\n            type=\"submit\"\n            class=\"btn btn-purple btn-block osahanbus-btn mt-2\"\n            [disabled]=\"!searchCompanyForm.valid\"\n            (click)=\"searchContactByLocation(searchCompanyForm.value)\"\n          >\n            {{ \"APP.HOME.BUTTON.SEARCH\" | translate }}\n          </button>\n        </form>\n      </div>\n    </div>\n    <div class=\"p-3 bg-warning\">\n      <div class=\"row m-0\">\n        <div class=\"col-12 py-1 pr-1 pl-0\">\n          <div class=\"p-3 bg-white shadow-sm rounded-1\">\n            <!-- <img class=\"img-fluid\" src=\"assets/images/ad1.jpg\" alt=\"\" /> -->\n            <p class=\"mb-0 mt-4 font-weight-bold\">Advertisement Panel</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row m-0\">\n        <div class=\"col-12 py-1 pl-1 pr-0\">\n          <div class=\"p-3 bg-white shadow-sm rounded-1\">\n            <!-- <img\n              class=\"img-fluid\"\n              src=\"assets/images/ad2.jpg\"\n              alt=\"\"\n            /> -->\n            <p class=\"mb-0 mt-4 font-weight-bold\">Advertisement Panel</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











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
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
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
/* harmony default export */ __webpack_exports__["default"] = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2l0LWhvbWUucGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUVGO0FBQUEsV0FBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBR0YiLCJmaWxlIjoiaXQtaG9tZS5wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQnV0dG9uIFN0eWxlcyAqL1xuLmdvb2dsZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICM1MDdjYzA7XG4gIGNvbG9yOiAjNTA3Y2MwICFpbXBvcnRhbnQ7XG59XG4uZmItYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZGY0OTMwO1xuICBjb2xvcjogI2RmNDkzMCAhaW1wb3J0YW50O1xufVxuLyogU2lnbmluICovXG4uc2lnbi1vciBociB7XG4gIHdpZHRoOiAxMzBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4iXX0= */");

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
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _json_service_provided_location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../json/service-provided-location */ "3ScB");
/* harmony import */ var _services_app_servcie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/app.servcie */ "+hHy");









let HomePageComponent = class HomePageComponent {
    constructor(router, appService, fbauth) {
        this.router = router;
        this.appService = appService;
        this.fbauth = fbauth;
        this.serviceProvidedLocations = [];
        this.firmActivitys = [
            'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.BOOKING',
            'APP.CREATE_ACCOUNT.SELECT.FIRM_ACTIVITY.SUPPLIER',
        ];
        this.docId = this.appService.docId;
        const serviceLocations = _json_service_provided_location__WEBPACK_IMPORTED_MODULE_7__["serviceProvidedLocationData"];
        this.serviceProvidedLocations = serviceLocations.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
    }
    ngOnInit() {
        this.initializeForm();
        this.firmActivitys = this.firmActivitys.sort((a, b) => a > b ? 1 : b > a ? -1 : 0);
    }
    initializeForm() {
        this.searchCompanyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            firmActivity: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
    }
    searchContactByLocation(values) {
        let navigationExtras = {
            queryParams: {
                from: values.from,
                to: values.to,
                firmActivity: values.firmActivity,
            },
        };
        this.router.navigate(['listing'], navigationExtras);
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fbauth.signOut().then(() => {
                this.appService.selectedLanguage = '';
                this.router.navigate(['splash']);
            });
        });
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_app_servcie__WEBPACK_IMPORTED_MODULE_8__["AppService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
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