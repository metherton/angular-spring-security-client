webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(69);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__credentials_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHomeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppHomeService = (function () {
    function AppHomeService(http, credentialsService) {
        this.http = http;
        this.credentialsService = credentialsService;
    }
    AppHomeService.prototype.getToken = function () {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.append('X-Requested-With', 'XMLHttpRequest');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: myHeaders });
        return this.http.get("token", options).toPromise().then(function (response) { return response.json(); });
    };
    AppHomeService.prototype.getGreeting = function (token) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        if (this.credentialsService.getPassword() && this.credentialsService.getUsername()) {
            var auth = 'Basic ' + btoa(this.credentialsService.getUsername() + ':' + this.credentialsService.getPassword());
            myHeaders.append('Authorization', auth);
        }
        myHeaders.append('X-Auth-Token', token.token);
        myHeaders.append('X-Requested-With', 'XMLHttpRequest');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: myHeaders });
        // return this.http.get(`http://localhost:9000`, options).toPromise().then(response => response.json());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].resourceUrl + 'resource', options).toPromise().then(function (response) { return response.json(); });
    };
    return AppHomeService;
}());
AppHomeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__credentials_service__["a" /* CredentialsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__credentials_service__["a" /* CredentialsService */]) === "function" && _b || Object])
], AppHomeService);

var _a, _b;
//# sourceMappingURL=app-home.service.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppLoginService = (function () {
    function AppLoginService(http) {
        this.http = http;
    }
    AppLoginService.prototype.getUser = function (headers) {
        return this.http.get("user", headers).toPromise().then(function (response) { return response.json(); });
    };
    return AppLoginService;
}());
AppLoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AppLoginService);

var _a;
//# sourceMappingURL=app-login.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppLogoutComponent = (function () {
    function AppLogoutComponent() {
    }
    AppLogoutComponent.prototype.ngOnInit = function () {
    };
    return AppLogoutComponent;
}());
AppLogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-app-logout',
        template: __webpack_require__(176),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [])
], AppLogoutComponent);

//# sourceMappingURL=app-logout.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppNavigationComponent = (function () {
    function AppNavigationComponent() {
    }
    AppNavigationComponent.prototype.ngOnInit = function () {
    };
    return AppNavigationComponent;
}());
AppNavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__(177),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [])
], AppNavigationComponent);

//# sourceMappingURL=app-navigation.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_home_app_home_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_login_app_login_component__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by martin on 18/05/17.
 */




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__app_home_app_home_component__["a" /* AppHomeComponent */] },
    { path: 'app-login', component: __WEBPACK_IMPORTED_MODULE_3__app_login_app_login_component__["a" /* AppLoginComponent */] },
    { path: 'app-home', component: __WEBPACK_IMPORTED_MODULE_2__app_home_app_home_component__["a" /* AppHomeComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credentials_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(credentialsService) {
        this.credentialsService = credentialsService;
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(178),
        styles: [__webpack_require__(172)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__credentials_service__["a" /* CredentialsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__credentials_service__["a" /* CredentialsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__credentials_service__["a" /* CredentialsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_home_app_home_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_login_app_login_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_logout_app_logout_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_navigation_app_navigation_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__credentials_service__ = __webpack_require__(29);
/* unused harmony export MyOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var MyOptions = (function (_super) {
    __extends(MyOptions, _super);
    function MyOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': 'Basic dXNlcjpwYXNzd29yZA==',
            'X-Auth-Token': '22ea59a5-00eb-4cfc-a40d-f02f69225aa6'
        });
        return _this;
    }
    return MyOptions;
}(__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* BaseRequestOptions */]));

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__app_home_app_home_component__["a" /* AppHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__app_login_app_login_component__["a" /* AppLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__app_logout_app_logout_component__["a" /* AppLogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__app_navigation_app_navigation_component__["a" /* AppNavigationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["b" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MdAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["f" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MdGridListModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_13__credentials_service__["a" /* CredentialsService */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".example-card {\n  width: 400px;\n  margin-top: 20px;\n}\n\n.example-header-image {\n  background-image: url(" + __webpack_require__(233) + ");\n  background-size: cover;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".example-form {\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".example-fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.example-button-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"example-card\">\n  <md-card-header>\n    <div md-card-avatar class=\"example-header-image\"></div>\n    <md-card-title>San Francisco, 2016</md-card-title>\n  </md-card-header>\n  <img md-card-image src=\"assets/martin.jpg\">\n  <md-card-content>\n    <p>\n      My name is Martin Etherton. I'm a husband to Erna, a father to Dylan and work as a Developer for ING in Leeuwarden, The Netherlands. Originally from Sheffield, England, I now live in Marknesse, a small village in the province of Flevoland. Hope you find something of interest on my site.\n    </p>\n  </md-card-content>\n  <md-card-actions>\n    <button md-button>LIKE</button>\n    <button md-button>SHARE</button>\n  </md-card-actions>\n</md-card>\n\n"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"login()\" #loginForm=\"ngForm\" class=\"example-form\">\n  <p style=\"padding-left: 50px; padding-top: 20px\">\n    <md-input-container class=\"example-full-width\">\n      <input mdInput [(ngModel)]=\"credentials.username\" name=\"username\" placeholder=\"Username\" #username=\"ngModel\" >\n    </md-input-container>\n    <md-input-container class=\"example-full-width\">\n      <input mdInput [(ngModel)]=\"credentials.password\" type=\"password\" name=\"password\" placeholder=\"Password\" #password=\"ngModel\" >\n    </md-input-container>\n    <md-error *ngIf=\"error\">Invalid username or password. Please try again</md-error>\n    <button style=\"margin-top: 20px\" type=\"submit\" md-raised-button>Login</button>\n  </p>\n</form>\n"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<p>\n  app-logout works!\n</p>\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<p>\n  app-navigation works!\n</p>\n"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span style=\"padding-right: 100px\">MartinEtherton.com</span>\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"example-fill-remaining-space\">\n    <div class=\"button-row\">\n      <button md-button routerLink=\"app-login\">Login</button>\n      <button md-button routerLink=\"app-home\">Home</button>\n      <button md-button routerLink=\"app-algorithm\">Algorithms</button>\n      <button md-button routerLink=\"app-ons\">ONS</button>\n      <button md-button routerLink=\"app-routeapp\">Router</button>\n      <button *ngIf=\"credentialsService.isAuthenticated()\" md-button routerLink=\"app-blog\">Blog</button>\n\n    </div>\n  </span>\n\n  <span>\n    <md-input-container>\n      <input mdInput placeholder=\"Search\" [mdAutocomplete]=\"auto\">\n    </md-input-container>\n    <md-autocomplete #auto=\"mdAutocomplete\">\n      <md-option *ngFor=\"let state of filteredStates | async\" [value]=\"Search\">\n        {{ state }}\n      </md-option>\n    </md-autocomplete>\n  </span>\n</md-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "martin.a948bdeb6bd6661d4e63.jpg";

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(100);


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CredentialsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CredentialsService = (function () {
    function CredentialsService() {
    }
    CredentialsService.prototype.setUsername = function (username) {
        this.username = username;
    };
    CredentialsService.prototype.setPassword = function (password) {
        this.password = password;
    };
    CredentialsService.prototype.getUsername = function () {
        return this.username;
    };
    CredentialsService.prototype.getPassword = function () {
        return this.password;
    };
    CredentialsService.prototype.setAuthenticated = function (value) {
        this.authenticated = value;
    };
    CredentialsService.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    return CredentialsService;
}());
CredentialsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CredentialsService);

//# sourceMappingURL=credentials.service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_home_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppHomeComponent = (function () {
    function AppHomeComponent(appHomeService, router) {
        this.appHomeService = appHomeService;
        this.router = router;
    }
    AppHomeComponent.prototype.ngOnInit = function () {
        // this.greeting = this.appHomeService.getToken().then(token => this.appHomeService.getGreeting(token)).then( gr => this.greeting = gr, () =>  this.router.navigate(['/app-login']));
    };
    return AppHomeComponent;
}());
AppHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-home',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_home_service__["a" /* AppHomeService */]],
        template: __webpack_require__(174),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_home_service__["a" /* AppHomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_home_service__["a" /* AppHomeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppHomeComponent);

var _a, _b;
//# sourceMappingURL=app-home.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_login_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__credentials_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppLoginComponent = (function () {
    // private location: Location;
    function AppLoginComponent(appLoginService, router, credentialsService) {
        this.appLoginService = appLoginService;
        this.router = router;
        this.credentialsService = credentialsService;
        this.router = router;
    }
    AppLoginComponent.prototype.ngOnInit = function () {
        this.credentials = {};
        this.credentialsService.setPassword(undefined);
        this.credentialsService.setUsername(undefined);
        this.credentialsService.setAuthenticated(false);
        //   this.authenticate(undefined, undefined);
    };
    AppLoginComponent.prototype.authenticate = function (credentials, callback) {
        var _this = this;
        this.error = false;
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        myHeaders.append('X-Requested-With', 'XMLHttpRequest');
        this.credentialsService.setUsername(credentials.username);
        this.credentialsService.setPassword(credentials.password);
        var auth = 'Basic ' + btoa(credentials.username + ':' + credentials.password);
        if (credentials) {
            myHeaders.append('Authorization', auth);
        }
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({ headers: myHeaders });
        this.appLoginService.getUser(options).then(function (user) {
            _this.credentialsService.setAuthenticated(true);
            callback && callback();
        }, function () {
            _this.error = true;
        });
    };
    AppLoginComponent.prototype.login = function () {
        var self = this;
        this.authenticate(this.credentials, function () {
            if (self.credentialsService.isAuthenticated) {
                var navigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };
                self.router.navigate(['/app-home']);
            }
        });
    };
    return AppLoginComponent;
}());
AppLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-login',
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_login_service__["a" /* AppLoginService */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* PathLocationStrategy */] }],
        template: __webpack_require__(175),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_login_service__["a" /* AppLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_login_service__["a" /* AppLoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__credentials_service__["a" /* CredentialsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__credentials_service__["a" /* CredentialsService */]) === "function" && _c || Object])
], AppLoginComponent);

var _a, _b, _c;
//# sourceMappingURL=app-login.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'http://141.138.139.81:9001/',
    resourceUrl: 'http://141.138.139.81:9000/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 99;


/***/ })

},[235]);
//# sourceMappingURL=main.bundle.js.map