webpackJsonp([1,4],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(39);
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
    function AppHomeService(http) {
        this.http = http;
    }
    AppHomeService.prototype.getToken = function () {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.append('X-Requested-With', 'XMLHttpRequest');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: myHeaders });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "token", options).toPromise().then(function (response) { return response.json(); });
    };
    AppHomeService.prototype.getGreeting = function (token) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.append('X-Auth-Token', token.token);
        myHeaders.append('X-Requested-With', 'XMLHttpRequest');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: myHeaders });
        // return this.http.get(`http://localhost:9000`, options).toPromise().then(response => response.json());
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].resourceUrl, options).toPromise().then(function (response) { return response.json(); });
    };
    return AppHomeService;
}());
AppHomeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AppHomeService);

var _a;
//# sourceMappingURL=app-home.service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(39);
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
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "user", headers).toPromise().then(function (response) { return response.json(); });
    };
    return AppLoginService;
}());
AppLoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AppLoginService);

var _a;
//# sourceMappingURL=app-login.service.js.map

/***/ }),

/***/ 109:
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
        template: __webpack_require__(175),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [])
], AppLogoutComponent);

//# sourceMappingURL=app-logout.component.js.map

/***/ }),

/***/ 110:
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
        template: __webpack_require__(176),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [])
], AppNavigationComponent);

//# sourceMappingURL=app-navigation.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(38);
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

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(177),
        styles: [__webpack_require__(171)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_home_app_home_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_login_app_login_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_logout_app_logout_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_navigation_app_navigation_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hammerjs__);
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
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".example-card {\n  width: 1356px;\n}\n\n.example-header-image {\n  background-image: url(" + __webpack_require__(232) + ");\n  background-size: cover;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".example-form {\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

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
exports.push([module.i, ".example-fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.example-button-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "\n\n"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"login()\" #loginForm=\"ngForm\" class=\"example-form\">\n  <p style=\"padding-left: 50px; padding-top: 20px\">\n    <md-input-container class=\"example-full-width\">\n      <input mdInput [(ngModel)]=\"credentials.username\" name=\"username\" placeholder=\"Username\" #username=\"ngModel\" >\n    </md-input-container>\n    <md-input-container class=\"example-full-width\">\n      <input mdInput [(ngModel)]=\"credentials.password\"  name=\"password\" placeholder=\"Password\" #password=\"ngModel\" >\n    </md-input-container>\n    <button style=\"margin-top: 20px\" type=\"submit\" md-raised-button>Login</button>\n  </p>\n</form>\n"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<p>\n  app-logout works!\n</p>\n"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<p>\n  app-navigation works!\n</p>\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span style=\"padding-right: 100px\">MartinEtherton.com</span>\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"example-fill-remaining-space\">\n    <div class=\"button-row\">\n      <button md-button routerLink=\"app-login\">Login</button>\n      <button md-button routerLink=\"app-home\">Home</button>\n      <button md-button routerLink=\"app-algorithm\">Algorithms</button>\n      <button md-button routerLink=\"app-ons\">ONS</button>\n      <button md-button routerLink=\"app-routeapp\">Router</button>\n      <button md-button routerLink=\"app-blog\">Blog</button>\n\n    </div>\n  </span>\n\n  <span>\n    <md-input-container>\n      <input mdInput placeholder=\"Search\" [mdAutocomplete]=\"auto\">\n    </md-input-container>\n    <md-autocomplete #auto=\"mdAutocomplete\">\n      <md-option *ngFor=\"let state of filteredStates | async\" [value]=\"Search\">\n        {{ state }}\n      </md-option>\n    </md-autocomplete>\n  </span>\n</md-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(99);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiUrl: 'http://localhost:9001/',
    resourceUrl: 'http://localhost:9000/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_home_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(38);
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
        this.appHomeService.getToken();
        //   this.greeting = this.appHomeService.getToken().then(token => this.appHomeService.getGreeting(token)).then( gr => this.greeting = gr, () =>  this.router.navigate(['/app-login']));
    };
    return AppHomeComponent;
}());
AppHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-home',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_home_service__["a" /* AppHomeService */]],
        template: __webpack_require__(173),
        styles: [__webpack_require__(167)]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_login_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(38);
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
    function AppLoginComponent(appLoginService, router) {
        this.appLoginService = appLoginService;
        this.router = router;
        this.router = router;
    }
    AppLoginComponent.prototype.ngOnInit = function () {
        this.credentials = {};
        //   this.authenticate(undefined, undefined);
    };
    AppLoginComponent.prototype.authenticate = function (credentials, callback) {
        var _this = this;
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        myHeaders.append('X-Requested-With', 'XMLHttpRequest');
        var auth = 'Basic ' + btoa(credentials.username + ':' + credentials.password);
        if (credentials) {
            myHeaders.append('Authorization', auth);
        }
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestOptions */]({ headers: myHeaders });
        this.appLoginService.getUser(options).then(function (user) {
            if (user.name) {
                _this.isAuthenticated = true;
            }
            else {
                _this.isAuthenticated = false;
            }
            callback && callback();
        });
    };
    AppLoginComponent.prototype.login = function () {
        var self = this;
        this.authenticate(this.credentials, function () {
            if (self.isAuthenticated) {
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
        template: __webpack_require__(174),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_login_service__["a" /* AppLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_login_service__["a" /* AppLoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppLoginComponent);

var _a, _b;
//# sourceMappingURL=app-login.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 98;


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(39);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[234]);
//# sourceMappingURL=main.bundle.js.map