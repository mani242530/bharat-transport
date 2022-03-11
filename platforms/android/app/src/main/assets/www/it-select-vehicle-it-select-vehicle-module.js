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
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_app_servcie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/app.servcie */ "+hHy");







let SelectVehiclePageComponent = class SelectVehiclePageComponent {
    constructor(appService, router, fbauth) {
        this.appService = appService;
        this.router = router;
        this.fbauth = fbauth;
        this.vehicleTypes = [
            {
                id: '1',
                name: 'APP.VEHICLE_TYPE.LCV',
                img: 'lcv',
                select: 'LCV',
            },
            {
                id: '2',
                name: 'APP.VEHICLE_TYPE.TRAILER',
                img: 'trailar-truck',
                select: 'Trailer',
            },
            {
                id: '3',
                name: 'APP.VEHICLE_TYPE.TRUCK',
                img: 'taurus-truck',
                select: 'Truck (Taurus)',
            },
            {
                id: '4',
                name: 'APP.VEHICLE_TYPE.OPEN_TRUCK',
                img: 'open-truck',
                select: 'Open Trucks',
            },
            {
                id: '5',
                name: 'APP.VEHICLE_TYPE.PART_LOAD',
                img: 'part-toad',
                select: 'Part Load',
            },
            {
                id: '6',
                name: 'APP.VEHICLE_TYPE.ODC',
                img: 'odc',
                select: 'ODC',
            },
            {
                id: '7',
                name: 'APP.VEHICLE_TYPE.20_FT_CBT',
                img: '20ft-container-cbt',
                select: '20ft Container CBT',
            },
            {
                id: '8',
                name: 'APP.VEHICLE_TYPE.32_FT_SINGLE_EXCEL',
                img: '32ft-container-single-excel',
                select: '32ft Container',
            },
            {
                id: '9',
                name: 'APP.VEHICLE_TYPE.20_FT_IMPORT_EXPORT',
                img: '20ft-container-import-export',
                select: '20ft/40ft Container (Import and Export)',
            },
        ];
        this.docId = this.appService.docId;
    }
    ngOnInit() { }
    selectVehicleType(vehicleType) {
        this.appService.selectedVehicleType = vehicleType.select;
        this.router.navigate(['/home']);
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fbauth.signOut().then(() => {
                this.appService.selectedLanguage = '';
                this.router.navigate(['/splash']);
            });
        });
    }
};
SelectVehiclePageComponent.ctorParameters = () => [
    { type: _services_app_servcie__WEBPACK_IMPORTED_MODULE_6__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <!-- <ion-toolbar> -->\n  <div\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\n  >\n    <h5 class=\"font-weight-normal mb-0 text-white\">\n      <a class=\"text-purple\"\n        ><fa-icon\n          icon=\"bus\"\n          class=\"icofont-truck text-white h2 bg-purple p-2 rounded-circle\"\n        ></fa-icon\n      ></a>\n      <ion-title>{{ \"APP.SELECT_VEHICLE.TITLE\" | translate }}</ion-title>\n    </h5>\n\n    <div class=\"ml-auto d-flex align-items-center\">\n      <ngx-avatar name=\"{{ userName }}\" size=\"50\"></ngx-avatar>\n\n      <ion-buttons slot=\"end\">\n        <a [routerLink]=\"['/profile/', docId]\"\n          ><fa-icon\n            icon=\"user-circle\"\n            class=\"icofont-user-circle\"\n            style=\"color: #ffffff; font-size: 26px\"\n          ></fa-icon\n        ></a>\n        <a style=\"margin-left: 20px\" (click)=\"doLogout()\"\n          ><fa-icon\n            icon=\"sign-out-alt\"\n            class=\"sign-out-alt\"\n            style=\"color: #ffffff; font-size: 26px\"\n          ></fa-icon\n        ></a>\n      </ion-buttons>\n    </div>\n  </div>\n  <!-- </ion-toolbar> -->\n</ion-header>\n\n<ion-content id=\"content\" fullscreen>\n  <!-- <cdk-virtual-scroll-viewport\n    class=\"scroll-viewport\"\n    #scroll\n    itemSize=\"80\"\n    minBufferPx=\"900\"\n    maxBufferPx=\"1350\"\n  > -->\n  <div\n    class=\"osahan-index bg-c align-items-center justify-content-center index-page\"\n  >\n    <div class=\"osahan-listing\">\n      <ion-grid>\n        <ion-row>\n          <ion-col\n            size=\"4\"\n            margin\n            class=\"text-dark text-center\"\n            *ngFor=\"let vehicleType of vehicleTypes; let i = index\"\n          >\n            <div\n              class=\"list-item-img language-item-list align-items-center d-inline-flex justify-content-center mb-2\"\n              id=\"vehicleType\"\n              (click)=\"selectVehicleType(vehicleType)\"\n            >\n              <img\n                src=\"assets/images/{{ vehicleType.img }}.png\"\n                class=\"img-fluid\"\n              />\n            </div>\n            <p class=\"text-center text-purple font-bold mb-2\">\n              {{ vehicleType.name | translate }}\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n");

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