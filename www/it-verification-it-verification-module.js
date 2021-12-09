(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-verification-it-verification-module"],{

/***/ "1uDb":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-verification/it-verification.page.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- <ion-toolbar> -->\r\n  <div\r\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\r\n  >\r\n    <h5 class=\"font-weight-normal mb-0 text-white\">\r\n      <a class=\"text-purple\" routerLink=\"/get-started\"\r\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\r\n      ></a>\r\n      <ion-title>{{ \"APP.VERIFICATION.TITLE\" | translate }}</ion-title>\r\n    </h5>\r\n  </div>\r\n  <!-- </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <!-- <cdk-virtual-scroll-viewport\r\n    class=\"scroll-viewport\"\r\n    #scroll\r\n    itemSize=\"80\"\r\n    minBufferPx=\"900\"\r\n    maxBufferPx=\"1350\"\r\n  > -->\r\n  <div\r\n    class=\"\r\n      osahan-index\r\n      bg-c\r\n      align-items-center\r\n      justify-content-center\r\n      vh-100\r\n      index-page\r\n    \"\r\n  >\r\n    <div class=\"osahan-form px-3 py-5 text-center mb-5\">\r\n      <div class=\"row my-5 px-3 pb-2\">\r\n        <div class=\"col px-1\">\r\n          <input\r\n            type=\"number\"\r\n            value=\"1\"\r\n            class=\"\r\n              form-control\r\n              otp\r\n              text-purple\r\n              form-control-lg\r\n              text-center\r\n              pb-0\r\n              px-0\r\n            \"\r\n          />\r\n        </div>\r\n        <div class=\"col px-1\">\r\n          <input\r\n            type=\"number\"\r\n            value=\"3\"\r\n            class=\"\r\n              form-control\r\n              otp\r\n              text-purple\r\n              form-control-lg\r\n              text-center\r\n              pb-0\r\n              px-0\r\n            \"\r\n          />\r\n        </div>\r\n        <div class=\"col px-1\">\r\n          <input\r\n            type=\"number\"\r\n            value=\"1\"\r\n            class=\"\r\n              form-control\r\n              otp\r\n              text-purple\r\n              form-control-lg\r\n              text-center\r\n              pb-0\r\n              px-0\r\n            \"\r\n          />\r\n        </div>\r\n        <div class=\"col px-1\">\r\n          <input\r\n            type=\"number\"\r\n            value=\"3\"\r\n            class=\"\r\n              form-control\r\n              otp\r\n              text-purple\r\n              form-control-lg\r\n              text-center\r\n              pb-0\r\n              px-0\r\n            \"\r\n          />\r\n        </div>\r\n      </div>\r\n      <button\r\n        type=\"submit\"\r\n        name=\"submit_button\"\r\n        class=\"btn btn-purple btn-block osahanbus-btn mb-4\"\r\n        routerLink=\"/payment\"\r\n      >\r\n        {{ \"APP.VERIFICATION.BUTTON.VERIFICATION\" | translate }}\r\n      </button>\r\n      <p class=\"text-muted\">\r\n        {{ \"APP.VERIFICATION.TEXT\" | translate\r\n        }}<a href=\"#\" class=\"ml-2 text-orange\">{{\r\n          \"APP.VERIFICATION.BUTTON.RESEND\" | translate\r\n        }}</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "2/GC":
/*!*********************************************************************!*\
  !*** ./src/app/it-verification/it-verification.page.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Verification */\n.opt {\n  border: 1px solid #dc3545 !important;\n  border-radius: 6px;\n  font-size: 46px;\n  font-weight: 700;\n  padding: 0px;\n}\n#verificationModal img {\n  height: 80px;\n}\nh1.success-icon {\n  font-size: 80px !important;\n  color: #5bc550;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGl0LXZlcmlmaWNhdGlvbi5wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0E7RUFDRSxZQUFBO0FBRUY7QUFBQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQUdGIiwiZmlsZSI6Iml0LXZlcmlmaWNhdGlvbi5wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVmVyaWZpY2F0aW9uICovXHJcbi5vcHQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDUgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC1zaXplOiA0NnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbiN2ZXJpZmljYXRpb25Nb2RhbCBpbWcge1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5oMS5zdWNjZXNzLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogODBweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNWJjNTUwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "LWu3":
/*!*******************************************************************!*\
  !*** ./src/app/it-verification/it-verification.page.component.ts ***!
  \*******************************************************************/
/*! exports provided: VerificationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageComponent", function() { return VerificationPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_it_verification_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./it-verification.page.component.html */ "1uDb");
/* harmony import */ var _it_verification_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./it-verification.page.component.scss */ "2/GC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sms-retriever/ngx */ "BeAq");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let VerificationPageComponent = class VerificationPageComponent {
    constructor(router, toastCtrl, smsRetriever) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.smsRetriever = smsRetriever;
        this.OTP = '';
        this.showOTPInput = false;
        this.OTPmessage = 'An OTP is sent to your number. You should receive it in 15 s';
        this.smsRetriever
            .getAppHash()
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
    }
    ngOnInit() { }
    presentToast(message, position, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                position: position,
                duration: duration,
            });
            toast.present();
        });
    }
    next() {
        this.showOTPInput = true;
        this.start();
    }
    start() {
        this.smsRetriever
            .startWatching()
            .then((res) => {
            console.log(res);
            this.processSMS(res);
        })
            .catch((error) => console.error(error));
    }
    processSMS(data) {
        // Design your SMS with App hash so the retriever API can read the SMS without READ_SMS permission
        // Attach the App hash to SMS from your server, Last 11 characters should be the App Hash
        // After that, format the SMS so you can recognize the OTP correctly
        // Here I put the first 6 character as OTP
        const message = data.Message;
        if (message != -1) {
            this.OTP = message.slice(0, 6);
            console.log(this.OTP);
            this.OTPmessage = 'OTP received. Proceed to register';
            this.presentToast('SMS received with correct app hash', 'bottom', 1500);
        }
    }
    register() {
        if (this.OTP != '') {
            this.presentToast('You are successfully registered', 'bottom', 1500);
            this.router.navigate(['/home']);
        }
        else {
            this.presentToast('Your OTP is not valid', 'bottom', 1500);
        }
    }
};
VerificationPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_5__["SmsRetriever"] }
];
VerificationPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verification',
        template: _raw_loader_it_verification_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_it_verification_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerificationPageComponent);



/***/ }),

/***/ "g8aa":
/*!***********************************************************!*\
  !*** ./src/app/it-verification/it-verification.module.ts ***!
  \***********************************************************/
/*! exports provided: VerificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function() { return VerificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _it_verification_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./it-verification.page.component */ "LWu3");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _it_verification_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./it-verification.routing.module */ "jFko");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










const routes = [
    {
        path: '',
        component: _it_verification_page_component__WEBPACK_IMPORTED_MODULE_6__["VerificationPageComponent"],
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
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
    _it_verification_routing_module__WEBPACK_IMPORTED_MODULE_8__["VerificationPageRoutingModule"],
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_verification_page_component__WEBPACK_IMPORTED_MODULE_6__["VerificationPageComponent"],
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
        declarations: [_it_verification_page_component__WEBPACK_IMPORTED_MODULE_6__["VerificationPageComponent"]],
    })
], VerificationPageModule);



/***/ }),

/***/ "jFko":
/*!*******************************************************************!*\
  !*** ./src/app/it-verification/it-verification.routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: VerificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function() { return VerificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _it_verification_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./it-verification.page.component */ "LWu3");

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_verification_page_component__WEBPACK_IMPORTED_MODULE_3__["VerificationPageComponent"],
    },
];
/**
 * Ng module
 */
let VerificationPageRoutingModule = class VerificationPageRoutingModule {
};
VerificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
    /**
     * VerificationPageRoutingModule
     */
], VerificationPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=it-verification-it-verification-module.js.map