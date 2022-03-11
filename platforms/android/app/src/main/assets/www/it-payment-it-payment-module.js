(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-payment-it-payment-module"],{

/***/ "/8iK":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-payment/it-payment.page.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <!-- <ion-toolbar> -->\n  <div\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\n  >\n    <h5 class=\"font-weight-normal mb-0 text-white\">\n      <a class=\"text-purple\" routerLink=\"/get-started\"\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\n      ></a>\n      <ion-title>{{ \"APP.PAYMENT.TITLE\" | translate }}</ion-title>\n    </h5>\n  </div>\n  <!-- </ion-toolbar> -->\n</ion-header>\n\n<ion-content id=\"content\" fullscreen>\n  <!-- <cdk-virtual-scroll-viewport\n    class=\"scroll-viewport\"\n    #scroll\n    itemSize=\"80\"\n    minBufferPx=\"900\"\n    maxBufferPx=\"1350\"\n  > -->\n  <!-- Payment -->\n  <div\n    class=\"osahan-index bg-c align-items-center justify-content-center vh-92 index-page py-3\"\n  >\n    <div class=\"osahan-form pt-3 px-3\">\n      <!-- You Ticket -->\n      <div class=\"your-ticket mb-3\">\n        <div class=\"p-0\">\n          <!-- Select Payment -->\n          <div class=\"m-0 p-3\">\n            <ng-container\n              *ngIf=\"\n                userFirmActivity === 'Driver';\n                then driverPay;\n                else otherPay\n              \"\n            >\n            </ng-container>\n            <ng-template #driverPay>\n              <div class=\"p-3 mb-3 driver-payment\">\n                <div class=\"payment-tag-onemonth\">\n                  <img src=\"assets/images/onemonth.png\" class=\"onemonth-tag\" />\n                </div>\n                <div\n                  class=\"w-100 mastercard custom-control custom-radio custom-control-inline mr-0\"\n                >\n                  <label\n                    class=\"custom-control-label small w-100\"\n                    for=\"customRadiomaster1\"\n                  >\n                    <a class=\"d-flex align-items-start\">\n                      <div class=\"\">\n                        <span\n                          class=\"mb-0 text-muted\"\n                          style=\"font-size: 32px\"\n                        ></span>\n                        <p class=\"text-muted\" style=\"font-size: 14px\"></p>\n                      </div>\n                    </a>\n                  </label>\n                </div>\n              </div>\n            </ng-template>\n            <ng-template #otherPay>\n              <div class=\"p-3 mb-3 owner-payment\">\n                <div class=\"payment-tag-oneyear\">\n                  <img src=\"assets/images/oneyear.png\" class=\"oneyear-tag\" />\n                </div>\n                <div\n                  class=\"w-100 visa custom-control custom-radio custom-control-inline mr-0\"\n                >\n                  <label\n                    class=\"custom-control-label small w-100\"\n                    for=\"customRadiovisa1\"\n                  >\n                    <a class=\"d-flex align-items-start\">\n                      <div class=\"\">\n                        <span\n                          class=\"mb-0 text-muted\"\n                          style=\"font-size: 32px\"\n                        ></span>\n                        <p class=\"text-muted\" style=\"font-size: 14px\"></p>\n                      </div>\n                    </a>\n                  </label>\n                </div>\n              </div>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n      <div class=\"your-ticket mb-3\">\n        <div\n          class=\"d-flex small\"\n          style=\"border-radius: 10px; position: fixed; bottom: 25%; width: 90%\"\n        >\n          <ul>\n            <li style=\"margin-bottom: 10px\">\n              If you get any fraud number from the app, Bharat transport will\n              not responsible for that.\n            </li>\n            <li style=\"margin-bottom: 10px\">\n              We are not sharing your data with any company.\n            </li>\n            <li>\n              By clicking the \"Pay\" button I Agree to the terms and conditions.\n            </li>\n          </ul>\n        </div>\n      </div>\n      <!-- Select Payment -->\n      <div class=\"payment-borrad bg-white m-0 p-3 mb-3\">\n        <ng-container\n          *ngIf=\"\n            userFirmActivity === 'Driver';\n            then driverPayButton;\n            else otherPayButton\n          \"\n        >\n        </ng-container>\n        <ng-template #driverPayButton>\n          <div class=\"d-flex small\">\n            <p style=\"font-size: 18px\">\n              {{ \"APP.PAYMENT.TEXT.TOTAL_PAYABLE\" | translate }}\n            </p>\n            <p\n              class=\"ml-auto font-weight-bold text-purple\"\n              style=\"font-size: 24px\"\n            >\n              {{ \"APP.PAYMENT.TEXT.DRIVER_AMOUNT\" | translate }}\n            </p>\n          </div>\n        </ng-template>\n        <ng-template #otherPayButton>\n          <div class=\"d-flex small\">\n            <p style=\"font-size: 18px\">\n              {{ \"APP.PAYMENT.TEXT.TOTAL_PAYABLE\" | translate }}\n            </p>\n            <p\n              class=\"ml-auto font-weight-bold text-purple\"\n              style=\"font-size: 24px\"\n            >\n              {{ \"APP.PAYMENT.TEXT.OTHER_AMOUNT\" | translate }}\n            </p>\n          </div>\n        </ng-template>\n      </div>\n\n      <div class=\"osahan-fotter fixed-bottom px-3 py-3\">\n        <div class=\"col-12\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-purple btn-block\"\n            style=\"padding-left: 2%\"\n            (click)=\"payWithRazorpay()\"\n          >\n            {{ \"APP.PAYMENT.BUTTON.PAY\" | translate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_app_servcie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/app.servcie */ "+hHy");






let PaymentPageComponent = class PaymentPageComponent {
    constructor(router, appService) {
        this.router = router;
        this.appService = appService;
        this.paymentAmount = 100.0;
        this.currency = 'INR';
        this.currencyIcon = '₹';
        this.razor_key = 'rzp_live_hP98k48bLAaoBC';
        this.cardDetails = {};
        this.docId = this.appService.docId;
    }
    ngOnInit() {
        this.userFirmActivity = this.appService.userSelectedFirmActivity;
    }
    payWithRazorpay() {
        var options = {
            description: 'Credit towards Service',
            image: 'https://mabblesoft.com/works/bharat-transport/app_logo.png',
            currency: 'INR',
            key: this.razor_key,
            amount: this.paymentAmount,
            name: 'Bharat Transport App',
            config: {
                display: {
                    blocks: {
                        banks: {
                            name: 'All payment methods',
                            instruments: [
                                {
                                    method: 'upi',
                                },
                                {
                                    method: 'card',
                                },
                                {
                                    method: 'netbanking',
                                },
                            ],
                        },
                    },
                    hide: [
                        {
                            method: 'emi',
                        },
                        {
                            method: 'wallet',
                        },
                    ],
                    sequence: ['block.banks'],
                    preferences: {
                        show_default_blocks: false,
                    },
                },
            },
            prefill: {
                email: 'info@privid.co.in',
                contact: '+91 9081486846',
                name: 'Bharat Transport App',
            },
            theme: {
                color: '#5f259f',
            },
            modal: {
                ondismiss: function () {
                    if (confirm('Are you sure, you want to close the form?')) {
                        let txt = 'You pressed OK!';
                        console.log('Checkout form closed by the user');
                    }
                    else {
                        let txt = 'You pressed Cancel!';
                        console.log('Complete the Payment');
                    }
                },
            },
            handler: (response) => {
                this.successPayment(response);
            },
        };
        var successCallback = (payment_id) => {
            this.successPayment(payment_id);
        };
        var cancelCallback = (error) => {
            alert(error.description + ' (Error ' + error.code + ')');
        };
        RazorpayCheckout.open(options, successCallback, cancelCallback);
    }
    successPayment(payment_id) {
        console.log(payment_id);
        console.log(this.docId);
        this.router.navigate(['/payment-success', payment_id]);
    }
};
PaymentPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_app_servcie__WEBPACK_IMPORTED_MODULE_5__["AppService"] }
];
PaymentPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment',
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
/* harmony default export */ __webpack_exports__["default"] = ("/* Verification */\n.opt {\n  border: 1px solid #dc3545 !important;\n  border-radius: 6px;\n  font-size: 46px;\n  font-weight: 700;\n  padding: 0px;\n}\n#verificationModal img {\n  height: 80px;\n}\nh1.success-icon {\n  font-size: 80px !important;\n  color: #5bc550;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2l0LXBheW1lbnQucGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBQTtBQUNBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNBO0VBQ0UsWUFBQTtBQUVGO0FBQUE7RUFDRSwwQkFBQTtFQUNBLGNBQUE7QUFHRiIsImZpbGUiOiJpdC1wYXltZW50LnBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBWZXJpZmljYXRpb24gKi9cbi5vcHQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiA0NnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwcHg7XG59XG4jdmVyaWZpY2F0aW9uTW9kYWwgaW1nIHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuaDEuc3VjY2Vzcy1pY29uIHtcbiAgZm9udC1zaXplOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNWJjNTUwO1xufVxuIl19 */");

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




/**
 * Routes
 */
const routes = [
    {
        path: '',
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










const routes = [
    {
        path: '',
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
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
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