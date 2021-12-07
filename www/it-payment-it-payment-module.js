(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-payment-it-payment-module"],{

/***/ "/8iK":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-payment/it-payment.page.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- <ion-toolbar> -->\r\n  <div\r\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\r\n  >\r\n    <h5 class=\"font-weight-normal mb-0 text-white\">\r\n      <a class=\"text-purple\" routerLink=\"/get-started\"\r\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\r\n      ></a>\r\n      <ion-title>Payment</ion-title>\r\n    </h5>\r\n  </div>\r\n  <!-- </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <!-- <cdk-virtual-scroll-viewport\r\n    class=\"scroll-viewport\"\r\n    #scroll\r\n    itemSize=\"80\"\r\n    minBufferPx=\"900\"\r\n    maxBufferPx=\"1350\"\r\n  > -->\r\n  <!-- <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <div\r\n        class=\"\r\n          osahan-header-nav\r\n          shadow-sm\r\n          p-3\r\n          d-flex\r\n          align-items-center\r\n          bg-purple\r\n        \"\r\n      >\r\n        <h5 class=\"font-weight-normal mb-0 text-white\">\r\n          <a class=\"text-purple\" routerLink=\"/get-started\"\r\n            ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\r\n          ></a>\r\n          <ion-title>Payment</ion-title>\r\n        </h5>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-header> -->\r\n  <!-- Payment -->\r\n  <div\r\n    class=\"\r\n      osahan-index\r\n      bg-c\r\n      align-items-center\r\n      justify-content-center\r\n      vh-100\r\n      index-page\r\n      py-3\r\n    \"\r\n  >\r\n    <div class=\"osahan-form pt-3 px-3\">\r\n      <!-- You Ticket -->\r\n      <div class=\"your-ticket mb-3\">\r\n        <div class=\"p-0\">\r\n          <!-- Select Payment -->\r\n          <div class=\"payment-borrad bg-white m-0 p-3\">\r\n            <div class=\"border p-3\">\r\n              <div\r\n                class=\"\r\n                  w-100\r\n                  mastercard\r\n                  custom-control custom-radio custom-control-inline\r\n                  mr-0\r\n                \"\r\n              >\r\n                <input\r\n                  type=\"radio\"\r\n                  id=\"customRadiomaster1\"\r\n                  name=\"customRadiocard1\"\r\n                  class=\"custom-control-input\"\r\n                  checked\r\n                />\r\n                <label\r\n                  class=\"custom-control-label small w-100\"\r\n                  for=\"customRadiomaster1\"\r\n                >\r\n                  <a class=\"d-flex align-items-start\">\r\n                    <div class=\"\">\r\n                      <p class=\"mb-0 text-dark\">Mastercard / Visa / Rupay</p>\r\n                      <small class=\"text-muted\"\r\n                        >Pay from mastercard account using mastercard payment\r\n                        gateway</small\r\n                      >\r\n                    </div>\r\n                    <img\r\n                      src=\"assets/img/master.png\"\r\n                      class=\"img-fluid rounded ml-auto\"\r\n                    />\r\n                  </a>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"border p-3\">\r\n              <div\r\n                class=\"\r\n                  w-100\r\n                  visa\r\n                  custom-control custom-radio custom-control-inline\r\n                  mr-0\r\n                \"\r\n              >\r\n                <input\r\n                  type=\"radio\"\r\n                  id=\"customRadiovisa1\"\r\n                  name=\"customRadiocard1\"\r\n                  class=\"custom-control-input\"\r\n                />\r\n                <label\r\n                  class=\"custom-control-label small w-100\"\r\n                  for=\"customRadiovisa1\"\r\n                >\r\n                  <a class=\"d-flex align-items-start\">\r\n                    <div class=\"\">\r\n                      <p class=\"mb-0 text-dark\">Net Banking</p>\r\n                      <small class=\"text-muted\"\r\n                        >Pay from your bank account using net banking\r\n                        gateway</small\r\n                      >\r\n                    </div>\r\n                    <img\r\n                      src=\"assets/img/visa.png\"\r\n                      class=\"img-fluid rounded ml-auto\"\r\n                    />\r\n                  </a>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Select Payment -->\r\n      <div class=\"payment-borrad bg-white m-0 p-3\">\r\n        <div class=\"d-flex small\">\r\n          <p>Total Payable INR</p>\r\n          <p class=\"ml-auto font-weight-bold text-danger\">5,000</p>\r\n        </div>\r\n        <div class=\"small\">\r\n          <div class=\"form-group row mb-3\">\r\n            <div class=\"d-flex align-items-start\">\r\n              <label for=\"exampleInputEmail1\" class=\"mb-1 small text-label\"\r\n                >Card Number</label\r\n              >\r\n              <img\r\n                src=\"assets/img/master-card.png\"\r\n                class=\"img-fluid ml-auto rounded\"\r\n              />\r\n            </div>\r\n            <div class=\"d-flex align-items-start\">\r\n              <input\r\n                type=\"number\"\r\n                class=\"form-control form-control-sm px-1 it-form-control\"\r\n                placeholder=\"1234 5678 9145 4589\"\r\n                id=\"exampleInputEmail1\"\r\n                aria-describedby=\"emailHelp\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row mb-3\">\r\n            <div class=\"col-8\">\r\n              <label for=\"exampleInputmondate1\" class=\"mb-1 small text-label\"\r\n                >Month / Date</label\r\n              >\r\n              <div class=\"d-flex border rounded\">\r\n                <input\r\n                  type=\"number\"\r\n                  class=\"\r\n                    form-control\r\n                    text-center\r\n                    form-control-sm\r\n                    border-0\r\n                    px-1\r\n                    it-form-control\r\n                  \"\r\n                  placeholder=\"DD\"\r\n                  id=\"exampleInputmondate1\"\r\n                  aria-describedby=\"mondateHelp\"\r\n                />\r\n                <span class=\"pt-2\">/</span>\r\n                <input\r\n                  type=\"number\"\r\n                  class=\"\r\n                    form-control\r\n                    text-center\r\n                    form-control-sm\r\n                    border-0\r\n                    px-1\r\n                    it-form-control\r\n                  \"\r\n                  placeholder=\"MM\"\r\n                  id=\"exampleInputmondate1\"\r\n                  aria-describedby=\"mondateHelp\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <label for=\"exampleInputcvv1\" class=\"mb-1 small text-muted\"\r\n                >CVV</label\r\n              >\r\n              <input\r\n                type=\"number\"\r\n                class=\"form-control text-center form-control-sm it-form-control\"\r\n                placeholder=\"000\"\r\n                id=\"exampleInputcvv1\"\r\n                aria-describedby=\"cvvHelp\"\r\n              />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row mb-3\">\r\n            <div class=\"col-12\">\r\n              <button\r\n                type=\"submit\"\r\n                class=\"btn btn-purple btn-block\"\r\n                data-toggle=\"modal\"\r\n                data-target=\"#paymentModal\"\r\n                routerLink=\"/select-vehicle\"\r\n              >\r\n                Pay\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "4V+T":
/*!*********************************************************!*\
  !*** ./src/app/it-payment/it-payment.page.component.ts ***!
  \*********************************************************/
/*! exports provided: PaymentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageComponent", function() { return PaymentPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_it_payment_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./it-payment.page.component.html */ "/8iK");
/* harmony import */ var _it_payment_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./it-payment.page.component.scss */ "CaHB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PaymentPageComponent = class PaymentPageComponent {
    constructor() { }
    ngOnInit() { }
};
PaymentPageComponent.ctorParameters = () => [];
PaymentPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-payment",
        template: _raw_loader_it_payment_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_it_payment_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaymentPageComponent);



/***/ }),

/***/ "CaHB":
/*!***********************************************************!*\
  !*** ./src/app/it-payment/it-payment.page.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Verification */\n.opt {\n  border: 1px solid #dc3545 !important;\n  border-radius: 6px;\n  font-size: 46px;\n  font-weight: 700;\n  padding: 0px;\n}\n#verificationModal img {\n  height: 80px;\n}\nh1.success-icon {\n  font-size: 80px !important;\n  color: #5bc550;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGl0LXBheW1lbnQucGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBQTtBQUNBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNBO0VBQ0UsWUFBQTtBQUVGO0FBQUE7RUFDRSwwQkFBQTtFQUNBLGNBQUE7QUFHRiIsImZpbGUiOiJpdC1wYXltZW50LnBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBWZXJpZmljYXRpb24gKi9cclxuLm9wdCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDQ2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuI3ZlcmlmaWNhdGlvbk1vZGFsIGltZyB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcbmgxLnN1Y2Nlc3MtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM1YmM1NTA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "EffK":
/*!*********************************************************!*\
  !*** ./src/app/it-payment/it-payment.routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _it_payment_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./it-payment.page.component */ "4V+T");

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_payment_page_component__WEBPACK_IMPORTED_MODULE_3__["PaymentPageComponent"],
    },
];
/**
 * Ng module
 */
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
    /**
     * PaymentPageRoutingModule
     */
], PaymentPageRoutingModule);



/***/ }),

/***/ "X4+X":
/*!*************************************************!*\
  !*** ./src/app/it-payment/it-payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _it_payment_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./it-payment.page.component */ "4V+T");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _it_payment_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./it-payment.routing.module */ "EffK");









const routes = [
    {
        path: "",
        component: _it_payment_page_component__WEBPACK_IMPORTED_MODULE_6__["PaymentPageComponent"],
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
    _it_payment_routing_module__WEBPACK_IMPORTED_MODULE_8__["PaymentPageRoutingModule"],
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_payment_page_component__WEBPACK_IMPORTED_MODULE_6__["PaymentPageComponent"],
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        ],
        declarations: [_it_payment_page_component__WEBPACK_IMPORTED_MODULE_6__["PaymentPageComponent"]],
    })
], PaymentPageModule);



/***/ })

}]);
//# sourceMappingURL=it-payment-it-payment-module.js.map