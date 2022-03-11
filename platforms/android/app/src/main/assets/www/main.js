(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+hHy":
/*!*****************************************!*\
  !*** ./src/app/services/app.servcie.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




let AppService = class AppService {
    constructor(toastController, fbstore) {
        this.toastController = toastController;
        this.fbstore = fbstore;
    }
    otpVerifiedToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'OTP Verified.',
                duration: 2000,
                position: 'bottom',
                animated: true,
                color: 'Success',
            });
            toast.present();
        });
    }
    loggedInUser(number) {
        return this.fbstore
            .collection('companys')
            .snapshotChanges()
            .subscribe((data) => {
            const filteredUser = data.filter((result) => result.payload.doc.data()['mobileNumber'] === number);
        });
    }
};
AppService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AppService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/manivannanbabu/mabblesoft/workspace/bharat-transport/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCwryKwaf_MDuvOWE4aHdZzI6zLf0cDcto",
        authDomain: "bharat-transport-2022.firebaseapp.com",
        databaseURL: "https://bharat-transport-2022-default-rtdb.firebaseio.com",
        projectId: "bharat-transport-2022",
        storageBucket: "bharat-transport-2022.appspot.com",
        messagingSenderId: "304908517281",
        appId: "1:304908517281:web:1b2b25f6b0a5456a0795e0",
        measurementId: "G-3QW3JJQ94Z"
    },
};
// FINAL
// apiKey: "AIzaSyCwryKwaf_MDuvOWE4aHdZzI6zLf0cDcto",
// authDomain: "bharat-transport-2022.firebaseapp.com",
// projectId: "bharat-transport-2022",
// storageBucket: "bharat-transport-2022.appspot.com",
// messagingSenderId: "304908517281",
// appId: "1:304908517281:web:1b2b25f6b0a5456a0795e0",
// measurementId: "G-3QW3JJQ94Z"


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_app_servcie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/app.servcie */ "+hHy");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");











let AppComponent = class AppComponent {
    constructor(platform, fbauth, ngroute, translateService, appservice, fbstore) {
        this.platform = platform;
        this.fbauth = fbauth;
        this.ngroute = ngroute;
        this.translateService = translateService;
        this.appservice = appservice;
        this.fbstore = fbstore;
        this.currentDate = new Date();
        this.authfbObserver = fbauth.authState.subscribe((user) => {
            if (user) {
                this.companysCollection = this.fbstore.collection('companys', (ref) => ref.where('mobileNumber', '==', user.phoneNumber));
                this.filteredUser = this.companysCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((actions) => {
                    return actions.map((action) => {
                        const data = action.payload.doc.data();
                        return {
                            id: action.payload.doc.id,
                            paymentStatus: data.paymentStatus,
                            accountStatus: data.accountStatus,
                            firmActivity: data.firmActivity,
                        };
                    });
                }));
                this.filteredUser.subscribe((snapshot) => {
                    if (snapshot.length == 0) {
                        console.log('User NOT found');
                        this.ngroute.navigate(['splash']);
                    }
                    else {
                        console.log(snapshot[0]);
                        console.log('User found' + snapshot[0].id);
                        this.username = snapshot[0].companyName;
                        this.userDetails = snapshot[0];
                        this.ngroute.navigate(['select-vehicle']);
                    }
                });
            }
            else {
                this.ngroute.navigate(['splash']);
            }
            this.platform.ready().then(() => {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
            });
            this.translateService.setDefaultLang('en');
        });
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fbauth.signOut().then(() => {
                this.appservice.selectedLanguage = '';
                this.authfbObserver.unsubscribe();
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _services_app_servcie__WEBPACK_IMPORTED_MODULE_8__["AppService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-menu side=\"start\" contentId=\"app-content\">\n    <ion-content>\n      <a\n        href=\"#\"\n        class=\"bg-purple sidebar-user d-flex align-items-center py-4 px-3 border-0 mb-0\"\n      >\n        <ngx-avatar name=\"{{ username }}\" size=\"50\"></ngx-avatar>\n        <div class=\"text-white ml-2\">\n          <h6 class=\"mb-0\">\n            {{ userDetails && userDetails.companyName }}\n          </h6>\n          <small>{{ userDetails && userDetails.mobileNumber }}</small\n          ><br />\n          <span class=\"f-10 text-white-50\">{{\n            currentDate | date: \"yyyy-MM-dd\"\n          }}</span>\n        </div>\n      </a>\n\n      <a\n        href=\"#\"\n        class=\"bg-purple sidebar-user py-2 px-2border-0 mb-0 fixed-bottom text-align-center\"\n        (click)=\"doLogout()\"\n      >\n        <div class=\"text-white\">\n          <h6 class=\"mb-0\">Logout</h6>\n        </div>\n      </a>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet\n    id=\"app-content\"\n    overflow-scroll=\"true\"\n  ></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-avatar */ "HWWf");
/* harmony import */ var _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/sms-retriever/ngx */ "BeAq");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");








//firebase imports













let AppModule = class AppModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["fas"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_13__["fab"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_14__["far"]);
    }
};
AppModule.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconLibrary"] }
];
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
            ngx_avatar__WEBPACK_IMPORTED_MODULE_18__["AvatarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]],
                },
            }),
        ],
        providers: [
            _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_19__["SmsRetriever"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_20__["CallNumber"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            {
                provide: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig,
                useValue: { experimentalForceLongPolling: true },
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    { path: '', redirectTo: '/splash', pathMatch: 'full' },
    {
        path: 'splash',
        loadChildren: () => __webpack_require__.e(/*! import() | it-splash-it-splash-module */ "it-splash-it-splash-module").then(__webpack_require__.bind(null, /*! ./it-splash/it-splash.module */ "E5bN")).then((m) => m.SplashPageModule),
    },
    {
        path: 'get-started',
        loadChildren: () => __webpack_require__.e(/*! import() | it-get-started-it-get-started-module */ "it-get-started-it-get-started-module").then(__webpack_require__.bind(null, /*! ./it-get-started/it-get-started.module */ "KT0G")).then((m) => m.GetStartedPageModule),
    },
    {
        path: 'signin',
        loadChildren: () => __webpack_require__.e(/*! import() | it-signin-it-signin-module */ "it-signin-it-signin-module").then(__webpack_require__.bind(null, /*! ./it-signin/it-signin.module */ "qdbj")).then((m) => m.SignInPageModule),
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() | it-signup-it-signup-module */[__webpack_require__.e("default~it-home-it-home-module~it-profile-it-profile-module~it-signup-it-signup-module"), __webpack_require__.e("common"), __webpack_require__.e("it-signup-it-signup-module")]).then(__webpack_require__.bind(null, /*! ./it-signup/it-signup.module */ "0qXx")).then((m) => m.SignUpPageModule),
    },
    {
        path: 'select-language',
        loadChildren: () => __webpack_require__.e(/*! import() | it-select-language-it-select-language-module */ "it-select-language-it-select-language-module").then(__webpack_require__.bind(null, /*! ./it-select-language/it-select-language.module */ "6gCZ")).then((m) => m.SelectLanguagePageModule),
    },
    {
        path: 'verification',
        loadChildren: () => Promise.all(/*! import() | it-verification-it-verification-module */[__webpack_require__.e("common"), __webpack_require__.e("it-verification-it-verification-module")]).then(__webpack_require__.bind(null, /*! ./it-verification/it-verification.module */ "g8aa")).then((m) => m.VerificationPageModule),
    },
    {
        path: 'payment',
        loadChildren: () => __webpack_require__.e(/*! import() | it-payment-it-payment-module */ "it-payment-it-payment-module").then(__webpack_require__.bind(null, /*! ./it-payment/it-payment.module */ "X4+X")).then((m) => m.PaymentPageModule),
    },
    {
        path: 'payment-success/:paymentid',
        loadChildren: () => Promise.all(/*! import() | it-payment-success-it-payment-success-module */[__webpack_require__.e("common"), __webpack_require__.e("it-payment-success-it-payment-success-module")]).then(__webpack_require__.bind(null, /*! ./it-payment-success/it-payment-success.module */ "I2rB")).then((p) => p.PaymentSuccessModule),
    },
    {
        path: 'select-vehicle',
        loadChildren: () => __webpack_require__.e(/*! import() | it-select-vehicle-it-select-vehicle-module */ "it-select-vehicle-it-select-vehicle-module").then(__webpack_require__.bind(null, /*! ./it-select-vehicle/it-select-vehicle.module */ "oNt0")).then((m) => m.SelectVehiclePageModule),
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | it-home-it-home-module */[__webpack_require__.e("default~it-home-it-home-module~it-profile-it-profile-module~it-signup-it-signup-module"), __webpack_require__.e("it-home-it-home-module")]).then(__webpack_require__.bind(null, /*! ./it-home/it-home.module */ "P+C6")).then((m) => m.HomePageModule),
    },
    {
        path: 'listing',
        loadChildren: () => Promise.all(/*! import() | it-listing-it-listing-module */[__webpack_require__.e("common"), __webpack_require__.e("it-listing-it-listing-module")]).then(__webpack_require__.bind(null, /*! ./it-listing/it-listing.module */ "OkqA")).then((m) => m.ListingPageModule),
    },
    {
        path: 'listing-detail',
        loadChildren: () => Promise.all(/*! import() | it-listing-detail-it-listing-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("it-listing-detail-it-listing-detail-module")]).then(__webpack_require__.bind(null, /*! ./it-listing-detail/it-listing-detail.module */ "SDiC")).then((m) => m.ListingDetailPageModule),
    },
    {
        path: 'profile/:id',
        loadChildren: () => Promise.all(/*! import() | it-profile-it-profile-module */[__webpack_require__.e("default~it-home-it-home-module~it-profile-it-profile-module~it-signup-it-signup-module"), __webpack_require__.e("common"), __webpack_require__.e("it-profile-it-profile-module")]).then(__webpack_require__.bind(null, /*! ./it-profile/it-profile.module */ "TuRf")).then((p) => p.ProfilePageModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
// enableProdMode();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map