webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.getAccount = function () {
        return this.http.get('/auth/account')
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
        ;
    };
    AccountService.prototype.getAcconts = function (limit, page) {
        return this.http.get('/user/list/' + limit.toString() + '/' + page.toString()).map(function (res) { return res.json(); });
    };
    AccountService.prototype.getAccountById = function (id) {
        return this.http.get('/user/' + id).map(function (res) { return res.json(); });
    };
    AccountService.prototype.setAccountById = function (id, user) {
        return this.http.put('/user/' + id, user).map(function (res) { return res.json(); });
    };
    AccountService.prototype.deleteAccountById = function (id) {
        return this.http.delete('/user/' + id).map(function (res) { return res.json(); });
    };
    AccountService.prototype.getAccountsByKeyword = function (limit, page, keyword) {
        return this.http.get('/user/search/' + limit.toString() + '/' + page.toString() + '/' + keyword).map(function (res) { return res.json(); });
    };
    return AccountService;
}());
AccountService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AccountService);

var _a;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/account.service.js.map

/***/ }),

/***/ "../../../../../src/app/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-nav-private [status]=\"status\"></app-nav-private>\n\n    <div id=\"page-wrapper\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"page-header\">User Profile</h1>\n            </div>\n            <!-- /.col-lg-12 -->\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        Basic Profile\n                    </div>\n                    <div class=\"panel-body\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <form role=\"form\">\n                                    <div class=\"form-group\">\n                                        <label>Account Provider</label>\n                                        <p class=\"form-control-static\">{{account.provider}}</p>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>OAuth ID</label>\n                                        <p class=\"form-control-static\">{{account.oauthID}}</p>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>User Name</label>\n                                        <p class=\"form-control-static\">{{account.name}}</p>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Join Date</label>\n                                        <p class=\"form-control-static\">{{account.created | convertTimezone:[timeZone, timeFormat]}} (CET)</p>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Account Type</label>\n                                        <p class=\"form-control-static\">{{account.grade}}</p>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_service__ = __webpack_require__("../../../../../src/app/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = (function () {
    function AccountComponent(accountService, navigationService) {
        var _this = this;
        this.accountService = accountService;
        this.navigationService = navigationService;
        this.account = {};
        this.timeZone = '+01:00';
        this.timeFormat = 'DD-MM-YYYY HH:mm:ss';
        navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
            console.log("[EasyInside - account] navigation message: " + _this.message);
        });
        navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
            console.log("[EasyInside - account] navigation status: " + _this.status);
        });
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getAccount().subscribe(function (account) {
            _this.account = account;
        });
        this.navigationService.setNavigationStatus('maker');
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__("../../../../../src/app/account/account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/account.component.css"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__navigation_service__["a" /* NavigationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__navigation_service__["a" /* NavigationService */]) === "function" && _b || Object])
], AccountComponent);

var _a, _b;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/account.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-dashboard/admin-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-dashboard works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin-dashboard/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDashboardComponent = (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    return AdminDashboardComponent;
}());
AdminDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-dashboard',
        template: __webpack_require__("../../../../../src/app/admin-dashboard/admin-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin-dashboard/admin-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminDashboardComponent);

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/admin-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getDings = function () {
        return this.http.get('/api/dings/json')
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ApiService.prototype.getInfo = function (spaceId) {
        return this.http.get('/api/info/json/' + spaceId)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ApiService.prototype.getMap = function (mapId) {
        return this.http.get('/api/map/' + mapId)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ApiService.prototype.mapPassword = function (mapId, password) {
        return this.http.post('/api/mapauth/' + mapId, password)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ApiService.prototype.getSpace = function (spaceId) {
        return this.http.get('/api/space/' + spaceId)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ApiService.prototype.getRobotsInMap = function (mapId) {
        return this.http.get("/api/robotinmap/" + mapId)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ApiService.prototype.registerRobot = function (mapId, robotName, mapPassword) {
        return this.http.get("/api/robotregister/" + mapId + "/" + robotName + "/" + mapPassword)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ApiService.prototype.deleteRobot = function (robotId, mapPassword) {
        return this.http.get("/api/robotdelete/" + robotId + "/" + mapPassword)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ApiService.prototype.setRobotPosition = function (robotId, x, y, d) {
        return this.http.get("/api/robotposition/" + robotId + "/" + x + "/" + y + "/" + d)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ApiService.prototype.setRobotFree = function (robotId) {
        return this.http.get('/api/robotfree/' + robotId)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ApiService.prototype.getIdleHostRobot = function (mapId) {
        return this.http.get('/api/robotidle/' + mapId)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ApiService.prototype.getSelectedRobot = function (robotId) {
        return this.http.get('/api/robotselect/' + robotId)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ApiService.prototype.getRobotMessage = function (robotId) {
        return this.http.get("/api/robotmessage/" + robotId)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ApiService.prototype.setRoute = function (robotId, route) {
        return this.http.put('/api/robotroute/' + robotId, route)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ApiService.prototype.getSharedMaps = function (limit, page) {
        return this.http.get('/api/mapsearchablelist/' + limit.toString() + '/' + page.toString()).map(function (res) { return res.json(); });
    };
    ApiService.prototype.getSharedMapsByKeyword = function (limit, page, keyword) {
        return this.http.get('/api/mapsearchablebykeyword/' + limit.toString() + '/' + page.toString() + '/' + keyword).map(function (res) { return res.json(); });
    };
    ApiService.prototype.getSharedSpaces = function (limit, page) {
        return this.http.get('/api/spacesearchablelist/' + limit.toString() + '/' + page.toString()).map(function (res) { return res.json(); });
    };
    ApiService.prototype.getSharedSpacesByKeyword = function (limit, page, keyword) {
        return this.http.get('/api/spacesearchablebykeyword/' + limit.toString() + '/' + page.toString() + '/' + keyword).map(function (res) { return res.json(); });
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<h1>\n  {{title}}\n</h1>-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
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
    function AppComponent(titleService, router, activatedRoute) {
        this.titleService = titleService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) { return _this.titleService.setTitle(event['title']); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_service__ = __webpack_require__("../../../../../src/app/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__space_service__ = __webpack_require__("../../../../../src/app/space.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__textures_service__ = __webpack_require__("../../../../../src/app/textures.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geometries_service__ = __webpack_require__("../../../../../src/app/geometries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dings_service__ = __webpack_require__("../../../../../src/app/dings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__infos_service__ = __webpack_require__("../../../../../src/app/infos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__robot_service__ = __webpack_require__("../../../../../src/app/robot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__convert_timezone_pipe__ = __webpack_require__("../../../../../src/app/convert-timezone.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__arithmetic_rgb_to_hex_pipe__ = __webpack_require__("../../../../../src/app/arithmetic-rgb-to-hex.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__nav_private_nav_private_component__ = __webpack_require__("../../../../../src/app/nav-private/nav-private.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__userlist_userlist_component__ = __webpack_require__("../../../../../src/app/userlist/userlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__userview_userview_component__ = __webpack_require__("../../../../../src/app/userview/userview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__spaces_spaces_component__ = __webpack_require__("../../../../../src/app/spaces/spaces.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__space_edit_space_edit_component__ = __webpack_require__("../../../../../src/app/space-edit/space-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__map_detail_map_detail_component__ = __webpack_require__("../../../../../src/app/map-detail/map-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__map_edit_map_edit_component__ = __webpack_require__("../../../../../src/app/map-edit/map-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__maker_dashboard_maker_dashboard_component__ = __webpack_require__("../../../../../src/app/maker-dashboard/maker-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__textures_textures_component__ = __webpack_require__("../../../../../src/app/textures/textures.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__geometries_geometries_component__ = __webpack_require__("../../../../../src/app/geometries/geometries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__dings_dings_component__ = __webpack_require__("../../../../../src/app/dings/dings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__desk_edit_desk_edit_component__ = __webpack_require__("../../../../../src/app/desk-edit/desk-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__map_optimizer_map_optimizer_component__ = __webpack_require__("../../../../../src/app/map-optimizer/map-optimizer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__info_edit_info_edit_component__ = __webpack_require__("../../../../../src/app/info-edit/info-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__map_login_map_login_component__ = __webpack_require__("../../../../../src/app/map-login/map-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__map_view_map_view_component__ = __webpack_require__("../../../../../src/app/map-view/map-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__robots_robots_component__ = __webpack_require__("../../../../../src/app/robots/robots.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__space_search_space_search_component__ = __webpack_require__("../../../../../src/app/space-search/space-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__document_document_component__ = __webpack_require__("../../../../../src/app/document/document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__color_translator_color_translator_component__ = __webpack_require__("../../../../../src/app/color-translator/color-translator.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// services









// pipes


// components

























var ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_20__home_home_component__["a" /* HomeComponent */],
        data: { title: 'Easy Inside' }
    },
    {
        path: 'admin/dashboard',
        component: __WEBPACK_IMPORTED_MODULE_30__admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
        data: { title: 'Admin Dashboard - Easy Inside' }
    },
    {
        path: 'admin/userlist',
        component: __WEBPACK_IMPORTED_MODULE_23__userlist_userlist_component__["a" /* UserlistComponent */],
        data: { title: 'User List - Easy Inside' }
    },
    {
        path: 'admin/userdetails/:id',
        component: __WEBPACK_IMPORTED_MODULE_24__userview_userview_component__["a" /* UserviewComponent */],
        data: { title: 'User Details - Easy Inside' }
    },
    {
        path: 'maker/dashboard',
        component: __WEBPACK_IMPORTED_MODULE_29__maker_dashboard_maker_dashboard_component__["a" /* MakerDashboardComponent */],
        data: { title: 'Dashboard - Easy Inside' }
    },
    {
        path: 'maker/account',
        component: __WEBPACK_IMPORTED_MODULE_21__account_account_component__["a" /* AccountComponent */],
        data: { title: 'User Profile - Easy Inside' }
    },
    {
        path: 'maker/spaces',
        component: __WEBPACK_IMPORTED_MODULE_25__spaces_spaces_component__["a" /* SpacesComponent */],
        data: { title: 'Spaces - Easy Inside' }
    },
    {
        path: 'maker/spacedetails/:id',
        component: __WEBPACK_IMPORTED_MODULE_26__space_edit_space_edit_component__["a" /* SpaceEditComponent */],
        data: { title: 'Space Details - Easy Inside' }
    },
    {
        path: 'maker/map-detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_27__map_detail_map_detail_component__["a" /* MapDetailComponent */],
        data: { title: 'Map Details - Easy Inside' }
    },
    {
        path: 'maker/map-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_28__map_edit_map_edit_component__["a" /* MapEditComponent */],
        data: { title: 'Map Editor - Easy Inside' }
    },
    {
        path: 'maker/map-optimizer/:id',
        component: __WEBPACK_IMPORTED_MODULE_35__map_optimizer_map_optimizer_component__["a" /* MapOptimizerComponent */],
        data: { title: 'Map Optimizer - Easy Inside' }
    },
    {
        path: 'maker/desk-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_34__desk_edit_desk_edit_component__["a" /* DeskEditComponent */],
        data: { title: 'Desk Editor - Easy Inside' }
    },
    {
        path: 'maker/info-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_36__info_edit_info_edit_component__["a" /* InfoEditComponent */],
        data: { title: 'Information Editor - Easy Inside' }
    },
    {
        path: 'maker/textures',
        component: __WEBPACK_IMPORTED_MODULE_31__textures_textures_component__["a" /* TexturesComponent */],
        data: { title: 'Textures - Easy Inside' }
    },
    {
        path: 'maker/geometries',
        component: __WEBPACK_IMPORTED_MODULE_32__geometries_geometries_component__["a" /* GeometriesComponent */],
        data: { title: 'Geometries - Easy Inside' }
    },
    {
        path: 'maker/dings',
        component: __WEBPACK_IMPORTED_MODULE_33__dings_dings_component__["a" /* DingsComponent */],
        data: { title: 'Things - Easy Inside' }
    },
    {
        path: 'maker/robots',
        component: __WEBPACK_IMPORTED_MODULE_39__robots_robots_component__["a" /* RobotsComponent */],
        data: { title: 'Robots - Easy Inside' }
    },
    {
        path: 'map/login/:id',
        component: __WEBPACK_IMPORTED_MODULE_37__map_login_map_login_component__["a" /* MapLoginComponent */],
        data: { title: 'Give Me Password - Easy Inside' }
    },
    {
        path: 'map/:id',
        component: __WEBPACK_IMPORTED_MODULE_38__map_view_map_view_component__["a" /* MapViewComponent */],
        data: { title: 'Map Explore - Easy Inside' }
    },
    {
        path: 'spaces',
        component: __WEBPACK_IMPORTED_MODULE_40__space_search_space_search_component__["a" /* SpaceSearchComponent */],
        data: { title: 'Spaces - Easy Inside' }
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_41__contact_contact_component__["a" /* ContactComponent */],
        data: { title: 'Contact - Easy Inside' }
    },
    {
        path: 'document',
        component: __WEBPACK_IMPORTED_MODULE_42__document_document_component__["a" /* DocumentComponent */],
        data: { title: 'Document - Easy Inside' }
    },
    {
        path: 'app/color-translator',
        component: __WEBPACK_IMPORTED_MODULE_43__color_translator_color_translator_component__["a" /* ColorTranslatorComponent */],
        data: { title: 'Color Translator - Easy Inside' }
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_20__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_21__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_22__nav_private_nav_private_component__["a" /* NavPrivateComponent */],
            __WEBPACK_IMPORTED_MODULE_23__userlist_userlist_component__["a" /* UserlistComponent */],
            __WEBPACK_IMPORTED_MODULE_17__convert_timezone_pipe__["a" /* ConvertTimezonePipe */],
            __WEBPACK_IMPORTED_MODULE_18__arithmetic_rgb_to_hex_pipe__["a" /* ArithmeticRGBtoHEXPipe */],
            __WEBPACK_IMPORTED_MODULE_24__userview_userview_component__["a" /* UserviewComponent */],
            __WEBPACK_IMPORTED_MODULE_25__spaces_spaces_component__["a" /* SpacesComponent */],
            __WEBPACK_IMPORTED_MODULE_26__space_edit_space_edit_component__["a" /* SpaceEditComponent */],
            __WEBPACK_IMPORTED_MODULE_27__map_detail_map_detail_component__["a" /* MapDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_28__map_edit_map_edit_component__["a" /* MapEditComponent */],
            __WEBPACK_IMPORTED_MODULE_29__maker_dashboard_maker_dashboard_component__["a" /* MakerDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_30__admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_31__textures_textures_component__["a" /* TexturesComponent */],
            __WEBPACK_IMPORTED_MODULE_32__geometries_geometries_component__["a" /* GeometriesComponent */],
            __WEBPACK_IMPORTED_MODULE_33__dings_dings_component__["a" /* DingsComponent */],
            __WEBPACK_IMPORTED_MODULE_34__desk_edit_desk_edit_component__["a" /* DeskEditComponent */],
            __WEBPACK_IMPORTED_MODULE_35__map_optimizer_map_optimizer_component__["a" /* MapOptimizerComponent */],
            __WEBPACK_IMPORTED_MODULE_36__info_edit_info_edit_component__["a" /* InfoEditComponent */],
            __WEBPACK_IMPORTED_MODULE_37__map_login_map_login_component__["a" /* MapLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_38__map_view_map_view_component__["a" /* MapViewComponent */],
            __WEBPACK_IMPORTED_MODULE_39__robots_robots_component__["a" /* RobotsComponent */],
            __WEBPACK_IMPORTED_MODULE_40__space_search_space_search_component__["a" /* SpaceSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_41__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_42__document_document_component__["a" /* DocumentComponent */],
            __WEBPACK_IMPORTED_MODULE_43__color_translator_color_translator_component__["a" /* ColorTranslatorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */].forRoot(ROUTES),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["d" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["f" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["e" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["c" /* ButtonsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileUploadModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_9__navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_10__space_service__["a" /* SpaceService */],
            __WEBPACK_IMPORTED_MODULE_11__textures_service__["a" /* TexturesService */],
            __WEBPACK_IMPORTED_MODULE_12__geometries_service__["a" /* GeometriesService */],
            __WEBPACK_IMPORTED_MODULE_13__dings_service__["a" /* DingsService */],
            __WEBPACK_IMPORTED_MODULE_14__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_15__infos_service__["a" /* InfosService */],
            __WEBPACK_IMPORTED_MODULE_16__robot_service__["a" /* RobotService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/arithmetic-rgb-to-hex.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArithmeticRGBtoHEXPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArithmeticRGBtoHEXPipe = (function () {
    function ArithmeticRGBtoHEXPipe() {
    }
    ArithmeticRGBtoHEXPipe.prototype.transform = function (rgb) {
        var channels = rgb.split(',');
        var hex = '#';
        var tmpHex = '';
        for (var _i = 0, channels_1 = channels; _i < channels_1.length; _i++) {
            var i = channels_1[_i];
            tmpHex = Math.round(parseFloat(i) * 255).toString(16);
            hex += (tmpHex.length == 1) ? '0' + tmpHex : tmpHex;
        }
        return hex;
    };
    return ArithmeticRGBtoHEXPipe;
}());
ArithmeticRGBtoHEXPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'arithmeticRGBtoHEX'
    })
], ArithmeticRGBtoHEXPipe);

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/arithmetic-rgb-to-hex.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/astar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Astar; });
/* unused harmony export Heuristics */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__binary_heap__ = __webpack_require__("../../../../../src/app/binary-heap.ts");

var Astar = (function () {
    function Astar() {
    }
    Astar.prototype.getHeap = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__binary_heap__["a" /* BinaryHeap */](function (node) {
            return node.f;
        });
    };
    Astar.prototype.search = function (graph, start, end, options) {
        graph.cleanDirty();
        options = options || {};
        var heuristic = options.heuristic || new Heuristics().manhattan, closest = options.closest || false;
        var openHeap = this.getHeap(), closestNode = start; // set the start node to be the closest if required
        start.h = heuristic(start, end);
        openHeap.push(start);
        while (openHeap.size() > 0) {
            // Grab the lowest f(x) to process next.  Heap keeps this sorted for us.
            var currentNode = openHeap.pop();
            // End case -- result has been found, return the traced path.
            if (currentNode === end) {
                return this.pathTo(currentNode);
            }
            // Normal case -- move currentNode from open to closed, process each of its neighbors.
            currentNode.closed = true;
            // Find all neighbors for the current node.
            var neighbors = graph.neighbors(currentNode);
            for (var i = 0, il = neighbors.length; i < il; ++i) {
                var neighbor = neighbors[i];
                if (neighbor.closed || neighbor.isWall()) {
                    // Not a valid node to process, skip to next neighbor.
                    continue;
                }
                // The g score is the shortest distance from start to current node.
                // We need to check if the path we have arrived at this neighbor is the shortest one we have seen yet.
                var gScore = currentNode.g + neighbor.getCost(currentNode), beenVisited = neighbor.visited;
                if (!beenVisited || gScore < neighbor.g) {
                    // Found an optimal (so far) path to this node.  Take score for node to see how good it is.
                    neighbor.visited = true;
                    neighbor.parent = currentNode;
                    neighbor.h = neighbor.h || heuristic(neighbor, end);
                    neighbor.g = gScore;
                    neighbor.f = neighbor.g + neighbor.h;
                    graph.markDirty(neighbor);
                    if (closest) {
                        // If the neighbour is closer than the current closestNode or if it's equally close but has
                        // a cheaper path than the current closest node then it becomes the closest node
                        if (neighbor.h < closestNode.h || (neighbor.h === closestNode.h && neighbor.g < closestNode.g)) {
                            closestNode = neighbor;
                        }
                    }
                    if (!beenVisited) {
                        // Pushing to heap will put it in proper place based on the 'f' value.
                        openHeap.push(neighbor);
                    }
                    else {
                        // Already seen the node, but since it has been rescored we need to reorder it in the heap
                        openHeap.rescoreElement(neighbor);
                    }
                }
            }
        }
        if (closest) {
            return this.pathTo(closestNode);
        }
        // No result was found - empty array signifies failure to find path.
        return [];
    };
    Astar.prototype.cleanNode = function (node) {
        node.f = 0;
        node.g = 0;
        node.h = 0;
        node.visited = false;
        node.closed = false;
        node.parent = null;
    };
    Astar.prototype.pathTo = function (node) {
        var curr = node, path = [];
        while (curr.parent) {
            path.push(curr);
            curr = curr.parent;
        }
        return path.reverse();
    };
    return Astar;
}());

// See list of heuristics: http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html
var Heuristics = (function () {
    function Heuristics() {
    }
    Heuristics.prototype.manhattan = function (pos0, pos1) {
        var d1 = Math.abs(pos1.x - pos0.x);
        var d2 = Math.abs(pos1.y - pos0.y);
        return d1 + d2;
    };
    Heuristics.prototype.diagonal = function (pos0, pos1) {
        var D = 1;
        var D2 = Math.sqrt(2);
        var d1 = Math.abs(pos1.x - pos0.x);
        var d2 = Math.abs(pos1.y - pos0.y);
        return (D * (d1 + d2)) + ((D2 - (2 * D)) * Math.min(d1, d2));
    };
    return Heuristics;
}());

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/astar.js.map

/***/ }),

/***/ "../../../../../src/app/binary-heap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinaryHeap; });
var BinaryHeap = (function () {
    function BinaryHeap(scoreFunction) {
        this.content = [];
        this.scoreFunction = scoreFunction;
    }
    BinaryHeap.prototype.push = function (element) {
        // Add the new element to the end of the array.
        this.content.push(element);
        // Allow it to sink down.
        this.sinkDown(this.content.length - 1);
    };
    BinaryHeap.prototype.pop = function () {
        // Store the first element so we can return it later.
        var result = this.content[0];
        // Get the element at the end of the array.
        var end = this.content.pop();
        // If there are any elements left, put the end element at the
        // start, and let it bubble up.
        if (this.content.length > 0) {
            this.content[0] = end;
            this.bubbleUp(0);
        }
        return result;
    };
    BinaryHeap.prototype.remove = function (node) {
        var i = this.content.indexOf(node);
        // When it is found, the process seen in 'pop' is repeated
        // to fill up the hole.
        var end = this.content.pop();
        if (i !== this.content.length - 1) {
            this.content[i] = end;
            if (this.scoreFunction(end) < this.scoreFunction(node)) {
                this.sinkDown(i);
            }
            else {
                this.bubbleUp(i);
            }
        }
    };
    BinaryHeap.prototype.size = function () {
        return this.content.length;
    };
    BinaryHeap.prototype.rescoreElement = function (node) {
        this.sinkDown(this.content.indexOf(node));
    };
    BinaryHeap.prototype.sinkDown = function (n) {
        // Fetch the element that has to be sunk.
        var element = this.content[n];
        // When at 0, an element can not sink any further.
        while (n > 0) {
            // Compute the parent element's index, and fetch it.
            var parentN = ((n + 1) >> 1) - 1, parent = this.content[parentN];
            // Swap the elements if the parent is greater.
            if (this.scoreFunction(element) < this.scoreFunction(parent)) {
                this.content[parentN] = element;
                this.content[n] = parent;
                // Update 'n' to continue at the new position.
                n = parentN;
            }
            else {
                break;
            }
        }
    };
    BinaryHeap.prototype.bubbleUp = function (n) {
        // Look up the target element and its score.
        var length = this.content.length, element = this.content[n], elemScore = this.scoreFunction(element);
        while (true) {
            // Compute the indices of the child elements.
            var child2N = (n + 1) << 1, child1N = child2N - 1;
            // This is used to store the new position of the element, if any.
            var swap = null, child1Score;
            // If the first child exists (is inside the array)...
            if (child1N < length) {
                // Look it up and compute its score.
                var child1 = this.content[child1N];
                child1Score = this.scoreFunction(child1);
                // If the score is less than our element's, we need to swap.
                if (child1Score < elemScore) {
                    swap = child1N;
                }
            }
            // Do the same checks for the other child.
            if (child2N < length) {
                var child2 = this.content[child2N], child2Score = this.scoreFunction(child2);
                if (child2Score < (swap === null ? elemScore : child1Score)) {
                    swap = child2N;
                }
            }
            // If the element needs to be moved, swap it, and continue.
            if (swap !== null) {
                this.content[n] = this.content[swap];
                this.content[swap] = element;
                n = swap;
            }
            else {
                break;
            }
        }
    };
    return BinaryHeap;
}());

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/binary-heap.js.map

/***/ }),

/***/ "../../../../../src/app/camera-action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
 // must 'npm install @types/three'!!!
var CameraAction = (function () {
    function CameraAction(window, scene, cam, container, planeNav, raycaster, callback) {
        this.isMoving = false;
        this.heightLimit = 1000;
        this.heightMax = 8500;
        this.speedDistance = 3;
        this.speedAngle = Math.PI * 0.001;
        this.originPosition = { x: 0, y: 0, z: 0 };
        this.window = window;
        this.scene = scene;
        this.camera = cam;
        this.container3D = container;
        this.planeNav = planeNav;
        this.raycaster = raycaster;
        this.callbackAfterMove = callback;
    }
    CameraAction.prototype.move = function (moveType) {
        if (this.isMoving === false) {
            this.startPosition = this.camera.position.clone();
            this.moveType = moveType;
            this.isMoving = true;
            switch (this.moveType) {
                case 'zoomin':
                    this.totalDistance = 1000;
                    break;
                case 'zoomout':
                    this.totalDistance = 1000;
                    break;
                case 'pedestalleft':
                    this.totalDistance = 1000;
                    break;
                case 'pedestalright':
                    this.totalDistance = 1000;
                    break;
                case 'pedestalup':
                    this.totalDistance = 1000;
                    break;
                case 'pedestaldown':
                    this.totalDistance = 1000;
                    break;
                case 'rotateleft':
                    this.totalAngle = Math.PI / 3;
                    var crossingPoint = this.getCrossingPointOnPlane();
                    crossingPoint.y = 10;
                    this.spinPoint = crossingPoint;
                    this.angleUntilNow = 0;
                    break;
                case 'rotateright':
                    this.totalAngle = Math.PI / 3;
                    var crossingPoint = this.getCrossingPointOnPlane();
                    crossingPoint.y = 10;
                    this.spinPoint = crossingPoint;
                    this.angleUntilNow = 0;
                    break;
            }
        }
    };
    CameraAction.prototype.hedgehop = function (x, y, z) {
        if (this.isMoving === false) {
            //if (camera.position.y <= this.heightLimit) {
            this.isMoving = true;
            this.startPosition = this.camera.position.clone();
            this.moveType = 'hedgehop';
            var dx = x, dy = 0, dz = z;
            this.finalPosition = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */]();
            this.finalPosition.x = this.camera.position.x + dx;
            this.finalPosition.y = this.heightLimit;
            this.finalPosition.z = this.camera.position.z + dz;
            this.speedDistanceX = Math.abs(dx / 500);
            this.speedDistanceY = Math.abs(dy / 500);
            this.speedDistanceZ = Math.abs(dz / 500);
            this.spinPoint.x = this.spinPoint.x + dx;
            this.spinPoint.y = 10;
            this.spinPoint.z = this.spinPoint.z + dz;
            //}
        }
    };
    CameraAction.prototype.closeToDesk = function (deskObj) {
        if (this.isMoving === false) {
            this.selectedDesk = deskObj;
            this.startPosition = this.camera.position.clone();
            this.isMoving = true;
            //if (this.camera.position.y <= this.heightLimit) {
            if (this.container3D.classList.contains('hedgehop')) {
                this.moveType = 'hedgehop';
                var dx = deskObj.ding.position.x - this.spinPoint.x;
                var dy = 0; // no meaning. because 'hedgehop' will keep y position.
                var dz = deskObj.ding.position.z - this.spinPoint.z;
                this.finalPosition = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */]();
                this.finalPosition.x = this.camera.position.x + dx;
                this.finalPosition.y = this.heightLimit;
                this.finalPosition.z = this.camera.position.z + dz;
                this.speedDistanceX = Math.abs(dx / 500);
                this.speedDistanceY = Math.abs(dy / 500);
                this.speedDistanceZ = Math.abs(dz / 500);
                this.spinPoint.x = this.spinPoint.x + dx;
                this.spinPoint.y = 10;
                this.spinPoint.z = this.spinPoint.z + dz;
            }
            else {
                this.moveType = 'closetodesk';
                var tmpCameraClone = new __WEBPACK_IMPORTED_MODULE_0_three__["w" /* Object3D */]();
                //tmpCameraClone.applyMatrix(this.camera.matrix);
                tmpCameraClone.rotation.copy(this.camera.rotation);
                tmpCameraClone.position.set(deskObj.ding.position.x, deskObj.ding.position.y, deskObj.ding.position.z);
                tmpCameraClone.translateZ(500);
                this.finalPosition = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */]();
                this.finalPosition.x = tmpCameraClone.position.x;
                this.finalPosition.y = tmpCameraClone.position.y;
                this.finalPosition.z = tmpCameraClone.position.z;
                var dx = this.startPosition.x - this.finalPosition.x;
                var dy = this.startPosition.y - this.finalPosition.y;
                var dz = this.startPosition.z - this.finalPosition.z;
                //this.totalDistance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                this.speedDistanceX = Math.abs(dx / 1000);
                this.speedDistanceY = Math.abs(dy / 1000);
                this.speedDistanceZ = Math.abs(dz / 1000);
                this.spinPoint.x = deskObj.ding.position.x;
                this.spinPoint.y = 10;
                this.spinPoint.z = deskObj.ding.position.z;
            }
        }
    };
    CameraAction.prototype.forwardToPoint = function (px, py, pz) {
        if (this.isMoving === false) {
            this.moveType = 'forwardtopoint';
            this.startPosition = this.camera.position.clone();
            this.isMoving = true;
            this.finalPosition = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */]();
            this.finalPosition.x = px;
            this.finalPosition.y = py;
            this.finalPosition.z = pz;
            var dx = this.startPosition.x - this.finalPosition.x;
            var dy = this.startPosition.y - this.finalPosition.y;
            var dz = this.startPosition.z - this.finalPosition.z;
            this.speedDistanceX = Math.abs(dx / 1000);
            this.speedDistanceY = Math.abs(dy / 1000);
            this.speedDistanceZ = Math.abs(dz / 1000);
            this.spinPoint.x = this.spinPoint.x + dx;
            this.spinPoint.y = 10;
            this.spinPoint.z = this.spinPoint.x + dz;
        }
    };
    CameraAction.prototype.backToPoint = function (px, py, pz) {
        if (this.isMoving === false) {
            this.moveType = 'backwardtopoint';
            this.startPosition = this.camera.position.clone();
            this.isMoving = true;
            this.finalPosition = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */]();
            this.finalPosition.x = px;
            this.finalPosition.y = py;
            this.finalPosition.z = pz;
            var dx = this.startPosition.x - this.finalPosition.x;
            var dy = this.startPosition.y - this.finalPosition.y;
            var dz = this.startPosition.z - this.finalPosition.z;
            this.speedDistanceX = Math.abs(dx / 1000);
            this.speedDistanceY = Math.abs(dy / 1000);
            this.speedDistanceZ = Math.abs(dz / 1000);
            this.spinPoint.x = 0;
            this.spinPoint.y = 0;
            this.spinPoint.z = 0;
        }
    };
    CameraAction.prototype.backToOriginPoint = function () {
        this.backToPoint(this.originPosition.x, this.originPosition.y, this.originPosition.z);
    };
    CameraAction.prototype.animate = function (delta) {
        var distanceFromMap = Math.sqrt(this.camera.position.x * this.camera.position.x + this.camera.position.y * this.camera.position.y + this.camera.position.z * this.camera.position.z);
        var distanceAtOnce, angleAtOnce, tmpPosition;
        if (this.totalDistance && this.finalPosition === null) {
            var dx_1 = this.camera.position.x - this.startPosition.x;
            var dy_1 = this.camera.position.y - this.startPosition.y;
            var dz_1 = this.camera.position.z - this.startPosition.z;
            var distanceUntilNow = Math.sqrt(dx_1 * dx_1 + dy_1 * dy_1 + dz_1 * dz_1);
            distanceAtOnce = this.speedDistance * delta;
            if (distanceUntilNow + distanceAtOnce >= this.totalDistance) {
                distanceAtOnce = this.totalDistance - distanceUntilNow;
                this.totalDistance = null;
                this.isMoving = false;
            }
        }
        if (this.totalAngle) {
            var vs = this.startPosition.clone();
            var vc = this.camera.position.clone();
            // angle is caculated on plane (y = 0)
            vs.y = 0;
            vc.y = 0;
            var dot = vs.dot(vc);
            //let angleUntilNow = Math.acos(dot / (vs.length() * vc.length()));
            angleAtOnce = this.speedAngle * delta;
            this.angleUntilNow += angleAtOnce;
            //if (angleUntilNow + angleAtOnce >= this.totalAngle) {
            if (this.angleUntilNow >= this.totalAngle) {
                angleAtOnce = this.totalAngle - this.angleUntilNow;
                this.totalAngle = null;
                this.isMoving = false;
            }
        }
        if (this.finalPosition) {
            tmpPosition = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */]();
            tmpPosition.set(this.camera.position.x, this.camera.position.y, this.camera.position.z);
            tmpPosition.x = (tmpPosition.x > this.finalPosition.x) ? tmpPosition.x - this.speedDistanceX * delta : tmpPosition.x + this.speedDistanceX * delta;
            tmpPosition.y = (tmpPosition.y > this.finalPosition.y) ? tmpPosition.y - this.speedDistanceY * delta : tmpPosition.y + this.speedDistanceY * delta;
            tmpPosition.z = (tmpPosition.z > this.finalPosition.z) ? tmpPosition.z - this.speedDistanceZ * delta : tmpPosition.z + this.speedDistanceZ * delta;
            if (tmpPosition.y < this.heightLimit) {
                if (this.moveType === 'closetodesk') {
                    var correctDistanceY = (tmpPosition.y - this.heightLimit) / delta;
                    var correctDistanceX = correctDistanceY * this.speedDistanceX / this.speedDistanceY;
                    var correctDistanceZ = correctDistanceY * this.speedDistanceZ / this.speedDistanceY;
                    tmpPosition.set(this.camera.position.x, this.camera.position.y, this.camera.position.z);
                    tmpPosition.x = (tmpPosition.x > this.finalPosition.x) ? tmpPosition.x - correctDistanceX * delta : tmpPosition.x + this.speedDistanceX * delta;
                    tmpPosition.y = (tmpPosition.y > this.finalPosition.y) ? tmpPosition.y - correctDistanceY * delta : tmpPosition.y + this.speedDistanceY * delta;
                    //tmpPosition.y = this.heightLimit;
                    tmpPosition.z = (tmpPosition.z > this.finalPosition.z) ? tmpPosition.z - correctDistanceZ * delta : tmpPosition.z + this.speedDistanceZ * delta;
                    this.isMoving = false;
                }
                else {
                    tmpPosition.y = this.heightLimit;
                }
            }
            var dx_2 = Math.abs(tmpPosition.x - this.finalPosition.x);
            var dy_2 = Math.abs(tmpPosition.y - this.finalPosition.y);
            var dz_2 = Math.abs(tmpPosition.z - this.finalPosition.z);
            var distanceUntilNow = Math.sqrt(dx_2 * dx_2 + dy_2 * dy_2 + dz_2 * dz_2);
            //if (distanceUntilNow <= this.heightLimit || camera.position.y <= this.heightLimit) {
            //if (this.moveType === 'closetodesk' && this.camera.position.y <= this.heightLimit) {
            if (this.moveType === 'closetodesk' && this.isMoving === false) {
                //tmpPosition.set(camera.position.x, camera.position.y, camera.position.z);
                this.container3D.classList.add('hedgehop');
                this.planeNav.show();
                this.isMoving = false;
            }
            else if (this.moveType === 'hedgehop' && dx_2 <= this.speedDistanceX * delta && dz_2 <= this.speedDistanceZ * delta) {
                tmpPosition.x = this.finalPosition.x;
                tmpPosition.y = this.finalPosition.y;
                tmpPosition.z = this.finalPosition.z;
                this.container3D.classList.add('hedgehop');
                this.planeNav.show();
                this.isMoving = false;
            }
            else if (this.moveType === 'backwardtopoint' && ((dx_2 <= this.speedDistanceX * delta && dz_2 <= this.speedDistanceZ * delta) || distanceFromMap >= this.heightMax)) {
                this.isMoving = false;
            }
            else if (this.moveType === 'forwardtopoint' && ((dx_2 <= this.speedDistanceX * delta && dz_2 <= this.speedDistanceZ * delta) || this.camera.position.y <= this.heightLimit)) {
                this.isMoving = false;
            }
        }
        switch (this.moveType) {
            case 'zoomin':
                this.camera.translateZ(-distanceAtOnce);
                break;
            case 'zoomout':
                this.camera.translateZ(distanceAtOnce);
                break;
            case 'pedestalleft':
                this.camera.translateX(-distanceAtOnce);
                break;
            case 'pedestalright':
                this.camera.translateX(distanceAtOnce);
                break;
            case 'pedestalup':
                this.camera.translateY(distanceAtOnce);
                break;
            case 'pedestaldown':
                this.camera.translateY(-distanceAtOnce);
                break;
            case 'rotateleft':
                var positionNow = this.camera.position.clone();
                var tx = positionNow.x - this.spinPoint.x;
                var tz = positionNow.z - this.spinPoint.z;
                positionNow.x = (tx * Math.cos(angleAtOnce)) - (tz * Math.sin(angleAtOnce));
                positionNow.z = (tz * Math.cos(angleAtOnce)) + (tx * Math.sin(angleAtOnce));
                positionNow.x += this.spinPoint.x;
                positionNow.z += this.spinPoint.z;
                this.setPosition(positionNow.x, positionNow.y, positionNow.z);
                this.lookAt(this.spinPoint);
                break;
            case 'rotateright':
                var positionNow2 = this.camera.position.clone();
                var tx2 = positionNow2.x - this.spinPoint.x;
                var tz2 = positionNow2.z - this.spinPoint.z;
                positionNow2.x = (tx2 * Math.cos(-angleAtOnce)) - (tz2 * Math.sin(-angleAtOnce));
                positionNow2.z = (tz2 * Math.cos(-angleAtOnce)) + (tx2 * Math.sin(-angleAtOnce));
                positionNow2.x += this.spinPoint.x;
                positionNow2.z += this.spinPoint.z;
                this.setPosition(positionNow2.x, positionNow2.y, positionNow2.z);
                this.lookAt(this.spinPoint);
                break;
            case 'closetodesk':
                this.setPosition(tmpPosition.x, tmpPosition.y, tmpPosition.z);
                break;
            case 'hedgehop':
                this.setPosition(tmpPosition.x, tmpPosition.y, tmpPosition.z);
                break;
            case 'forwardtopoint':
            case 'backwardtopoint':
                this.setPosition(tmpPosition.x, tmpPosition.y, tmpPosition.z);
                this.lookAt(this.spinPoint);
                break;
        }
        if (this.isMoving === false) {
            if (this.moveType === 'pedestalleft' || this.moveType === 'pedestalright' || this.moveType === 'pedestalup' || this.moveType === 'pedestaldown') {
                var dx = this.camera.position.x - this.startPosition.x;
                var dy = this.camera.position.y - this.startPosition.y;
                var dz = this.camera.position.z - this.startPosition.z;
                this.spinPoint.x += dx;
                this.spinPoint.y += dy;
                this.spinPoint.z += dz;
            }
            else if (this.moveType === 'closetodesk' || this.moveType === 'hedgehop') {
                if (this.selectedDesk) {
                    this.callbackAfterMove(this.selectedDesk);
                }
            }
            else if (this.moveType === 'forwardtopoint' || this.moveType === 'backwardtopoint') {
                //camera.lookAt(this.spinPoint);
                //this.finalPosition = null;
            }
            this.finalPosition = null;
            if (this.camera.position.y > this.heightLimit) {
                this.container3D.classList.remove('hedgehop');
            }
            else {
                this.container3D.classList.add('hedgehop');
                this.planeNav.show();
            }
            if (this.moveType === 'closetodesk') {
                this.container3D.classList.add('hedgehop');
                this.planeNav.show();
            }
            if (distanceFromMap < this.heightMax) {
                this.container3D.classList.remove('stratosphere');
            }
            else {
                this.container3D.classList.add('stratosphere');
                this.planeNav.hide();
            }
        }
    };
    CameraAction.prototype.setSpinPoint = function (x, y, z) {
        if (typeof this.spinPoint === 'undefined') {
            this.spinPoint = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](x, y, z);
        }
        else {
            this.spinPoint.x = x;
            this.spinPoint.y = y;
            this.spinPoint.z = z;
        }
        //camera.lookAt(this.spinPoint);
        this.lookAt(this.spinPoint);
        this.camera.updateProjectionMatrix();
    };
    CameraAction.prototype.setPosition = function (x, y, z) {
        this.camera.position.set(x, y, z);
        this.planeNav.moveAtTheFrontOf(this.camera, this.window);
    };
    CameraAction.prototype.setOriginPosition = function (x, y, z) {
        this.originPosition.x = x;
        this.originPosition.y = y;
        this.originPosition.z = z;
    };
    CameraAction.prototype.lookAt = function (obj) {
        this.camera.lookAt(obj);
        this.planeNav.moveAtTheFrontOf(this.camera, this.window);
    };
    CameraAction.prototype.getCrossingPointOnPlane = function () {
        var centerPosition = new __WEBPACK_IMPORTED_MODULE_0_three__["H" /* Vector2 */]();
        centerPosition.set(0, 0);
        this.raycaster.setFromCamera(centerPosition, this.camera);
        var intersects = this.raycaster.intersectObjects(this.scene.children, true), point;
        if (intersects.length > 0) {
            for (var i = 0; i < intersects.length; i++) {
                if (intersects[i].object.pattern) {
                    if (intersects[i].object.pattern === 'floor') {
                        point = intersects[i].point;
                        return point;
                    }
                }
            }
        }
    };
    return CameraAction;
}());

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/camera-action.js.map

/***/ }),

/***/ "../../../../../src/app/color-translator/color-translator.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-default navbar-fixed-top topnav\" role=\"navigation\">\n    <div class=\"container topnav\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand topnav\" href=\"#\">Easy Inside</a>\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"/spaces\">Search</a>\n                </li>\n                <li>\n                    <a href=\"/document\">Document</a>\n                </li>\n                <li>\n                    <a href=\"/contact\">Contact</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container -->\n</nav>\n\n<div id=\"wrapper\" class=\"container toggled\">\n  <div id=\"page-content-wrapper\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              Setting\n            </div>\n            <div class=\"panel-body\">\n              <form id=\"robot\" class=\"form-horizontal\" role=\"form\" [formGroup]=\"robotForm\" (ngSubmit)=\"startListening(robotForm.value)\">\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-12\">\n                    <label class=\"control-label col-sm-2\">Map ID</label>\n                    <div class=\"col-sm-10\">\n                      <input class=\"form-control\" placeholder=\"Enter Map ID\" [formControl]=\"robotForm.controls['mapId']\" [ngModel]=\"robot?._map\">\n                      <div *ngIf=\"robotForm.controls['mapId'].hasError('required') && robotForm.controls['mapId'].touched\" class=\"alert alert-danger\">\n                        You must include a Space ID.\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-12\">\n                    <label class=\"control-label col-sm-2\">Robot Name</label>\n                    <div class=\"col-sm-10\">\n                      <input class=\"form-control\" placeholder=\"Enter name of robot\" [formControl]=\"robotForm.controls['robotName']\" [ngModel]=\"robot?.name\">\n                      <div *ngIf=\"robotForm.controls['robotName'].hasError('required') && robotForm.controls['robotName'].touched\" class=\"alert alert-danger\">\n                        You must include a robot name.\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-12\">\n                    <label class=\"control-label col-sm-2\">Position X</label>\n                    <div class=\"col-sm-10\">\n                      <input class=\"form-control\" placeholder=\"Enter name of robot\" [formControl]=\"robotForm.controls['positionX']\" [ngModel]=\"robot?.position.x\">\n                      <div *ngIf=\"robotForm.controls['positionX'].hasError('required') && robotForm.controls['positionX'].touched\" class=\"alert alert-danger\">\n                        You must include position X.\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-12\">\n                    <label class=\"control-label col-sm-2\">Position Y</label>\n                    <div class=\"col-sm-10\">\n                      <input class=\"form-control\" placeholder=\"Enter name of robot\" [formControl]=\"robotForm.controls['positionY']\" [ngModel]=\"robot?.position.y\">\n                      <div *ngIf=\"robotForm.controls['positionY'].hasError('required') && robotForm.controls['positionY'].touched\" class=\"alert alert-danger\">\n                        You must include position Y.\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-12\">\n                    <label class=\"control-label col-sm-2\">Direction</label>\n                    <div class=\"form-control-static col-sm-4\">\n                        <div class=\"btn-group\" dropdown>\n                            <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                                <i [ngClass]=\"{'glyphicon':true, 'glyphicon-arrow-up':robotDirection=='y-', 'glyphicon-arrow-right':robotDirection=='x+', 'glyphicon-arrow-down':robotDirection=='y+', 'glyphicon-arrow-left':robotDirection=='x-'}\" aria-hidden=\"true\"></i> {{robotDirection}} <span class=\"caret\"></span>\n                            </button>\n                            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'direction', 'y-')\"><i class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"true\"></i> y-</a></li>\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'direction', 'x+')\"><i class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></i> x+</a></li>\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'direction', 'y+')\"><i class=\"glyphicon glyphicon-arrow-down\" aria-hidden=\"true\"></i> y+</a></li>\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'direction', 'x-')\"><i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i> x-</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <label class=\"control-label col-sm-2\">Left of X+</label>\n                    <div class=\"form-control-static col-sm-4\">\n                        <div class=\"btn-group\" dropdown>\n                            <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                              {{yValueOfLeftX}} <span class=\"caret\"></span>\n                            </button>\n                            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'xleft', 'y-')\"><i class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"true\"></i> y-</a></li>\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'xleft', 'y+')\"><i class=\"glyphicon glyphicon-arrow-down\" aria-hidden=\"true\"></i> y+</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-12\">\n                    <label class=\"control-label col-sm-2\">Password</label>\n                    <div class=\"col-sm-10\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\">optional</div>\n                        <input class=\"form-control\" placeholder=\"If map is private, password is required\" [formControl]=\"robotForm.controls['password']\" [ngModel]=\"mapPassword\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <button type=\"submit\" class=\"btn btn-primary col-sm-offset-1 col-sm-10 col-xs-12\" [disabled]=\"!robotForm.valid\">\n                      Start Listening\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div [ngClass]=\"{'panel': true, 'panel-default': true, 'listeningPanel': true, 'closed': !listening}\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h4 class=\"col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10\"></h4>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h5 class=\"col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10\">Calibrating for black color...</h5>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <button type=\"button\" class=\"btn btn-danger col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10\" (click)=\"stopListening()\">\n        Stop Listening\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/color-translator/color-translator.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper {\n  padding-left: 0;\n  margin-top: 66px;\n}\n#lamp {\n  width: 100vw;\n  height: 100vh;\n}\n.listeningPanel {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  z-index: 2000;\n  margin: 0;\n}\n.listeningPanel button {\n  position: fixed;\n  bottom: 10px;\n}\n.listeningPanel.closed {\n  display: none;\n}\n.listeningPanel.black {\n  background-color: #000000;\n}\n.listeningPanel.black h5,\n.listeningPanel.black h4 {\n  color: white;\n}\n.listeningPanel.white {\n  background-color: #ffffff;\n}\n.listeningPanel.white h5,\n.listeningPanel.white h4 {\n  color: black;\n}\n.listeningPanel.red {\n  background-color: #808080;\n}\n.listeningPanel.red h5,\n.listeningPanel.red h4 {\n  color: black;\n}\n.listeningPanel h5 {\n  position: fixed;\n  bottom: 50px;\n}\n.listeningPanel h4 {\n  position: fixed;\n  bottom: 80px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/color-translator/color-translator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorTranslatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ColorTranslatorComponent = (function () {
    function ColorTranslatorComponent(elementRef, apiService, fb) {
        this.elementRef = elementRef;
        this.apiService = apiService;
        this.robot = {
            _id: '',
            name: '',
            position: { x: 0, y: 0 },
            direction: 'y-',
            _map: ''
        };
        this.robotDirection = 'y-';
        this.yValueOfLeftX = 'y-';
        this.mapPassword = '';
        this.listening = false;
        this.robotForm = fb.group({
            'mapId': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9A-Za-z]*')]],
            'robotName': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9A-Za-zàâçéèêëîïôûùüÿñæœäöüÀÂÇÉÈÊËÎÏÔÛÙÜŸÑÆŒÄÖÜß&:)(,.+–?!/\' -]*')]],
            'positionX': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9\-]*')]],
            'positionY': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9\-]*')]],
            'password': [null]
        });
        this.timeToRequestMessage = 5000;
        this.timeToPrintNext = 0;
        this.minimumTimeToPrintNext = 3000;
        this.prePositionX = null;
        this.prePositionY = null;
        this.stepToGoAtOnceNow = 0;
        this.secondToGoForwardOneUnit = 1000;
        this.secondToTurn90Degree = 2000;
        this.secondToPrintEachColor = 500;
        this.routeQueue = [];
        this.onTheWayUturn = false;
        this.totalDirectionQueue = [];
        this.totalColorQueue = [];
    }
    ColorTranslatorComponent.prototype.ngOnInit = function () {
    };
    ColorTranslatorComponent.prototype.ngAfterViewInit = function () {
    };
    ColorTranslatorComponent.prototype.changeRobotStatus = function (event, property, value) {
        event.preventDefault();
        switch (property) {
            case 'direction':
                this.robotDirection = value;
                break;
            case 'xleft':
                this.yValueOfLeftX = value;
                break;
            default:
                this.robot[property] = value;
                break;
        }
    };
    ColorTranslatorComponent.prototype.startListening = function (value) {
        var _this = this;
        this.mapPassword = (value.password) ? value.password : '**';
        this.apiService.registerRobot(value.mapId, value.robotName, this.mapPassword).subscribe(function (res) {
            if (typeof res.error !== 'undefined') {
                alert('Server has trouble for registering this robot. Please try later.');
            }
            else {
                _this.robot = res;
                _this.apiService.setRobotPosition(_this.robot._id, value.positionX, value.positionY, _this.robotDirection).subscribe(function (res) {
                    if (typeof res.error !== 'undefined') {
                        alert('Server has trouble for set robot\'s position. Please try later.');
                    }
                    else {
                        _this.robot.direction = res.direction;
                        _this.robot.position = res.position;
                        _this.listening = true;
                        _this.calibrateBlack();
                    }
                });
            }
        });
    };
    ColorTranslatorComponent.prototype.stopListening = function () {
        var _this = this;
        clearTimeout(this.timerId);
        this.apiService.deleteRobot(this.robot._id, this.mapPassword).subscribe(function (res) {
            if (typeof res.error !== 'undefined') {
                alert('Server has trouble for registering this robot. Please try later.');
            }
            else {
                _this.listening = false;
                _this.robot._id = '';
                _this.robot.position.x = 0;
                _this.robot.position.y = 0;
            }
        });
    };
    ColorTranslatorComponent.prototype.calibrateBlack = function () {
        //this.elementRef.nativeElement.querySelector('.listeningPanel').classList.add('black');
        //this.elementRef.nativeElement.querySelector('.listeningPanel h5').classList.add('w');
        //this.elementRef.nativeElement.querySelector('.listeningPanel h5').textContent = 'Calibrating black color...';
        this.printBgColorAndMsg('B', 'Calibrating black color...');
        this.timerId = setTimeout(function (t) {
            var that = t;
            return function () {
                that.calibrateWhite();
            };
        }(this), 15000);
    };
    ColorTranslatorComponent.prototype.calibrateWhite = function () {
        this.printBgColorAndMsg('W', 'Calibrating white color...');
        this.timerId = setTimeout(function (t) {
            var that = t;
            return function () {
                that.getMessageFromServer();
            };
        }(this), 5000);
    };
    ColorTranslatorComponent.prototype.printBgColorAndMsg = function (bgColor, msg) {
        var bgColorClass;
        this.totalColorQueue.push(bgColor);
        switch (bgColor) {
            case 'B':
                bgColorClass = 'black';
                break;
            case 'W':
                bgColorClass = 'white';
                break;
            case 'R':
                bgColorClass = 'red';
                break;
        }
        this.elementRef.nativeElement.querySelector('.listeningPanel').classList.remove('white', 'black', 'red');
        this.elementRef.nativeElement.querySelector('.listeningPanel').classList.add(bgColorClass);
        this.elementRef.nativeElement.querySelector('.listeningPanel h5').textContent = msg;
    };
    ColorTranslatorComponent.prototype.printConsole = function (msg) {
        this.totalDirectionQueue.push(msg);
        this.elementRef.nativeElement.querySelector('.listeningPanel h4').textContent = msg;
    };
    ColorTranslatorComponent.prototype.getMessageFromServer = function () {
        var _this = this;
        this.printBgColorAndMsg('W', 'Listening...');
        this.apiService.getRobotMessage(this.robot._id).subscribe(function (res) {
            if (typeof res.error !== 'undefined') {
                alert('Server has error');
            }
            else {
                _this.robot = res;
                if (_this.robot.routes.length > 0) {
                    console.log(_this.robot);
                    _this.printConsole('Route info is received. Start to print route.');
                    _this.managePrintingRoutes();
                }
                else {
                    _this.timerId = setTimeout(function (t) {
                        var that = t;
                        return function () {
                            that.getMessageFromServer();
                        };
                    }(_this), _this.timeToRequestMessage);
                }
            }
        });
    };
    // Firstly move my virtual position first, then compare to pre-position. Then decide which message will be printed.
    ColorTranslatorComponent.prototype.managePrintingRoutes = function () {
        if (this.onTheWayUturn === true) {
            this.makeQueueUTurn();
        }
        else {
            //let positionNow = this.robot.routes.shift();
            var positionNext = this.robot.routes[0];
            //if (this.prePositionX === null && this.prePositionY === null) {
            this.prePositionX = this.robot.position.x;
            this.prePositionY = this.robot.position.y;
            //}
            if (this.robot.position.x === positionNext.x && this.robot.position.y === positionNext.y) {
                this.managePrintingRoutes();
                console.log('location is same. finish function.');
                return;
            }
            else {
                //this.robot.position.x = positionNow.x;
                //this.robot.position.y = positionNow.y;
                //this.robot.position.x = this.prePositionX;
                //this.robot.position.y = this.prePositionY;
            }
            if (positionNext.x > this.prePositionX) {
                switch (this.robot.direction) {
                    case 'x+':
                        this.measureDistanceForward();
                        break;
                    case 'x-':
                        this.makeQueueUTurn();
                        break;
                    case 'y+':
                        if (this.yValueOfLeftX === 'y+') {
                            this.makeQueueTurnRight();
                        }
                        else {
                            this.makeQueueTurnLeft();
                        }
                        break;
                    case 'y-':
                        if (this.yValueOfLeftX === 'y+') {
                            this.makeQueueTurnLeft();
                        }
                        else {
                            this.makeQueueTurnRight();
                        }
                        break;
                    default:
                        break;
                }
            }
            else if (positionNext.x < this.prePositionX) {
                switch (this.robot.direction) {
                    case 'x+':
                        this.makeQueueUTurn();
                        break;
                    case 'x-':
                        this.measureDistanceForward();
                        break;
                    case 'y+':
                        if (this.yValueOfLeftX === 'y+') {
                            this.makeQueueTurnLeft();
                        }
                        else {
                            this.makeQueueTurnRight();
                        }
                        break;
                    case 'y-':
                        if (this.yValueOfLeftX === 'y+') {
                            this.makeQueueTurnRight();
                        }
                        else {
                            this.makeQueueTurnLeft();
                        }
                        break;
                    default:
                        break;
                }
            }
            else if (positionNext.y > this.prePositionY) {
                switch (this.robot.direction) {
                    case 'x+':
                        if (this.yValueOfLeftX === 'y+') {
                            this.makeQueueTurnLeft();
                        }
                        else {
                            this.makeQueueTurnRight();
                        }
                        break;
                    case 'x-':
                        if (this.yValueOfLeftX === 'y+') {
                            this.makeQueueTurnRight();
                        }
                        else {
                            this.makeQueueTurnLeft();
                        }
                        break;
                    case 'y+':
                        this.measureDistanceForward();
                        break;
                    case 'y-':
                        this.makeQueueUTurn();
                        break;
                    default:
                        break;
                }
            }
            else if (positionNext.y < this.prePositionY) {
                switch (this.robot.direction) {
                    case 'x+':
                        if (this.yValueOfLeftX === 'y+') {
                            this.makeQueueTurnRight();
                        }
                        else {
                            this.makeQueueTurnLeft();
                        }
                        break;
                    case 'x-':
                        if (this.yValueOfLeftX === 'y+') {
                            this.makeQueueTurnLeft();
                        }
                        else {
                            this.makeQueueTurnRight();
                        }
                        break;
                    case 'y+':
                        this.makeQueueUTurn();
                        break;
                    case 'y-':
                        this.measureDistanceForward();
                        break;
                    default:
                        break;
                }
            }
            this.prePositionX = positionNext.x;
            this.prePositionY = positionNext.y;
        }
        this.printColorsByQueue();
    };
    ColorTranslatorComponent.prototype.measureDistanceForward = function () {
        if (this.robot.routes.length > 0) {
            var nextPosition = this.robot.routes[0];
            if (this.robot.direction === 'x+' && this.robot.position.y != nextPosition.y) {
                this.makeQueueGoForward();
            }
            else if (this.robot.direction === 'x-' && this.robot.position.y != nextPosition.y) {
                this.makeQueueGoForward();
            }
            else if (this.robot.direction === 'y+' && this.robot.position.x != nextPosition.x) {
                this.makeQueueGoForward();
            }
            else if (this.robot.direction === 'y-' && this.robot.position.x != nextPosition.x) {
                this.makeQueueGoForward();
            }
            else {
                var positionNext = this.robot.routes.shift();
                this.stepToGoAtOnceNow += 1;
                this.robot.position.x = positionNext.x;
                this.robot.position.y = positionNext.y;
                this.measureDistanceForward();
                //this.managePrintingRoutes();
            }
        }
        else {
            this.makeQueueGoForward();
        }
    };
    ColorTranslatorComponent.prototype.makeQueueGoForward = function () {
        this.routeQueue.push('B', 'W', 'B', 'W');
        var strBinary = this.stepToGoAtOnceNow.toString(2);
        var arrBinary = strBinary.split('');
        for (var _i = 0, arrBinary_1 = arrBinary; _i < arrBinary_1.length; _i++) {
            var val = arrBinary_1[_i];
            this.routeQueue.push('B');
            if (val === '0') {
                this.routeQueue.push('W');
            }
            else {
                this.routeQueue.push('R');
            }
        }
        this.timeToPrintNext = this.secondToGoForwardOneUnit * this.stepToGoAtOnceNow;
        if (this.timeToPrintNext < this.minimumTimeToPrintNext) {
            this.timeToPrintNext = this.minimumTimeToPrintNext;
        }
        this.printConsole("Move forward " + this.stepToGoAtOnceNow + " cells");
        this.stepToGoAtOnceNow = 0;
    };
    ColorTranslatorComponent.prototype.makeQueueTurnLeft = function () {
        if (this.yValueOfLeftX === 'y+') {
            switch (this.robot.direction) {
                case 'x+':
                    this.robot.direction = 'y+';
                    break;
                case 'x-':
                    this.robot.direction = 'y-';
                    break;
                case 'y+':
                    this.robot.direction = 'x-';
                    break;
                case 'y-':
                    this.robot.direction = 'x+';
                    break;
                default:
                    break;
            }
        }
        else {
            switch (this.robot.direction) {
                case 'x+':
                    this.robot.direction = 'y-';
                    break;
                case 'x-':
                    this.robot.direction = 'y+';
                    break;
                case 'y+':
                    this.robot.direction = 'x+';
                    break;
                case 'y-':
                    this.robot.direction = 'x-';
                    break;
                default:
                    break;
            }
        }
        this.routeQueue.push('B', 'W', 'B', 'R');
        this.timeToPrintNext = this.secondToTurn90Degree;
        this.printConsole('Turn left');
        this.stepToGoAtOnceNow = 0;
    };
    ColorTranslatorComponent.prototype.makeQueueTurnRight = function () {
        if (this.yValueOfLeftX === 'y+') {
            switch (this.robot.direction) {
                case 'x+':
                    this.robot.direction = 'y-';
                    break;
                case 'x-':
                    this.robot.direction = 'y+';
                    break;
                case 'y+':
                    this.robot.direction = 'x+';
                    break;
                case 'y-':
                    this.robot.direction = 'x-';
                    break;
                default:
                    break;
            }
        }
        else {
            switch (this.robot.direction) {
                case 'x+':
                    this.robot.direction = 'y+';
                    break;
                case 'x-':
                    this.robot.direction = 'y-';
                    break;
                case 'y+':
                    this.robot.direction = 'x-';
                    break;
                case 'y-':
                    this.robot.direction = 'x+';
                    break;
                default:
                    break;
            }
        }
        this.routeQueue.push('B', 'R', 'B', 'W');
        this.timeToPrintNext = this.secondToTurn90Degree;
        this.printConsole('Turn Right');
        this.stepToGoAtOnceNow = 0;
    };
    ColorTranslatorComponent.prototype.makeQueueUTurn = function () {
        this.onTheWayUturn = !this.onTheWayUturn;
        this.makeQueueTurnLeft();
    };
    ColorTranslatorComponent.prototype.printColorsByQueue = function () {
        var colorNow = this.routeQueue.shift();
        this.printBgColorAndMsg(colorNow, colorNow);
        if (this.routeQueue.length > 0) {
            this.timerId = setTimeout(function (t) {
                var that = t;
                return function () {
                    that.printColorsByQueue();
                };
            }(this), this.secondToPrintEachColor);
        }
        else {
            this.timerId = setTimeout(function (t) {
                var that = t;
                return function () {
                    that.waitUntilNextQueue();
                };
            }(this), this.secondToPrintEachColor);
        }
    };
    ColorTranslatorComponent.prototype.waitUntilNextQueue = function () {
        this.printConsole('');
        this.printBgColorAndMsg('W', "waiting for " + this.timeToPrintNext + "m sec");
        if (this.robot.routes.length > 0) {
            this.timerId = setTimeout(function (t) {
                var that = t;
                return function () {
                    //that.managePrintingRoutes();
                    that.apiService.setRobotPosition(that.robot._id, that.robot.position.x, that.robot.position.y, that.robot.direction).subscribe(function (res) {
                        if (typeof res.error !== 'undefined') {
                            alert('Server has error');
                        }
                        else {
                            that.managePrintingRoutes();
                        }
                    });
                };
            }(this), this.timeToPrintNext);
        }
        else {
            this.timerId = setTimeout(function (t) {
                var that = t;
                return function () {
                    that.apiService.setRobotPosition(that.robot._id, that.robot.position.x, that.robot.position.y, that.robot.direction).subscribe(function (res) {
                        if (typeof res.error !== 'undefined') {
                            alert('Server has error');
                        }
                        else {
                            that.printConsole('Trying finish movement...');
                            that.idleRobot();
                        }
                    });
                };
            }(this), this.timeToPrintNext);
        }
    };
    ColorTranslatorComponent.prototype.idleRobot = function () {
        var _this = this;
        this.apiService.setRobotFree(this.robot._id).subscribe(function (res) {
            if (typeof res.error !== 'undefined') {
                alert('Server has error');
            }
            else {
                _this.printConsole('');
                _this.getMessageFromServer();
                console.log(_this.totalColorQueue);
                console.log(_this.totalDirectionQueue);
            }
        });
    };
    return ColorTranslatorComponent;
}());
ColorTranslatorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-color-translator',
        template: __webpack_require__("../../../../../src/app/color-translator/color-translator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/color-translator/color-translator.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _c || Object])
], ColorTranslatorComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/color-translator.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper {\n    margin-top: 51px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-default navbar-fixed-top topnav\" role=\"navigation\">\n    <div class=\"container topnav\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand topnav\" [routerLink]=\"['/']\">Easy Inside</a>\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a [routerLink]=\"['/spaces']\">Search</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/document']\">Document</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/contact']\">Contact</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container -->\n</nav>\n\n<div id=\"wrapper\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h1 class=\"page-header\">Contact</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <h3>Hamdalf</h3>\n          <label>email</label>\n          <p><a href=\"mailto:kyoungwoo.ham@gmail.com\">kyoungwoo.ham@gmail.com</a></p>\n          <p>If possible, please make the title of email to begin '[easyinside]'. This makes me easy to find your message. Thanks.</p>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/convert-timezone.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertTimezonePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConvertTimezonePipe = (function () {
    function ConvertTimezonePipe() {
    }
    ConvertTimezonePipe.prototype.transform = function (date, args) {
        var timeZone = args[0];
        var format = args[1];
        return __WEBPACK_IMPORTED_MODULE_1_moment__["parseZone"](date).utcOffset(timeZone).format(format);
    };
    return ConvertTimezonePipe;
}());
ConvertTimezonePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'convertTimezone'
    })
], ConvertTimezonePipe);

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/convert-timezone.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/desk-edit/desk-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".webgl-wrapper {\n    padding: 0 !important;\n    background-color: #f3f5e3 !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/desk-edit/desk-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-nav-private [status]=\"status\"></app-nav-private>\n\n    <div style=\"position:fixed;right:10px;top:10px;z-index:1001;\">\n        <alert type=\"warning\" dismissible=\"true\" *ngIf=\"graphicCardNeeded\" (onClose)=\"onCloseGraphicCardAlert($event)\">\n            <strong>Warning!</strong> Your graphics card does not seem to support <a href=\"http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation\" style=\"color:#000\">WebGL</a>.<br />\n            Find out how to get it <a href=\"http://get.webgl.org/\" style=\"color:#000\">here</a>.\n        </alert>\n        <alert type=\"warning\" dismissible=\"true\" *ngIf=\"browserNeeded\" (onClose)=\"onCloseBrowserAlert($event)\">\n            <strong>Warning!</strong> Your browser does not seem to support <a href=\"http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation\" style=\"color:#000\">WebGL</a>.<br />\n            Find out how to get it <a href=\"http://get.webgl.org/\" style=\"color:#000\">here</a>.\n        </alert>\n    </div>\n\n    <div id=\"page-wrapper\" class=\"webgl-wrapper\" (mousemove)=\"onDocumentMouseMove($event)\">\n\n    </div>\n\n</div>\n\n<div class=\"modal fade\" bsModal #optAskModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Apply Latest Map</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>There is new map, you need apply this map to desk editor.</p>\n        <a class=\"btn btn-success\" [routerLink]=\"['/maker/map-optimizer', map?._id]\">Apply New Map</a>\n        <a class=\"btn btn-danger\" (click)=\"getDings()\">Ignore New Map</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #loadingModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Loading Map...</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Please wait for a while.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #loadingDeskModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Loading Desks...</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Please wait for a while.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #saveAskModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Something Is Not Saved</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>There is something which is not saved after last save.</p>\n        <a class=\"btn btn-success\" (click)=\"saveMap(true)\">Save &amp; Exit</a>\n        <a class=\"btn btn-danger\" href=\"/maker/map-detail/{{map?._id}}\">Don't Worry, Just Exit</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/desk-edit/desk-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeskEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__space_service__ = __webpack_require__("../../../../../src/app/space.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_three_examples_js_controls_NgTrackballControls_js__ = __webpack_require__("../../../../three/examples/js/controls/NgTrackballControls.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







 // must 'npm install @types/three'!!!

var DeskEditComponent = (function () {
    function DeskEditComponent(route, location, navigationService, spaceService, apiService, elementRef, router) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.navigationService = navigationService;
        this.spaceService = spaceService;
        this.apiService = apiService;
        this.elementRef = elementRef;
        this.router = router;
        this.renderingAllowed = true;
        this.map = {};
        this.dings = [];
        this.firstDeskId = null;
        this.graphicCardNeeded = false;
        this.browserNeeded = false;
        this.saveProcessStarted = false;
        this.saveFinished = false;
        this.viewInitFinished = false;
        this.dataInitFinished = false;
        this.needSave = false;
        this.rolloverPosition = new __WEBPACK_IMPORTED_MODULE_7_three__["I" /* Vector3 */]();
        this.zoomFactor = 1;
        this.zoomIncFactor = 0.01;
        this.isCtrlDown = false;
        this.isAltDown = false;
        this.lastPutDelTime = Date.now();
        navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
            if (message.includes('dingid')) {
                var data = _this.message.split('=');
                _this.setRollover(data[1]);
            }
            else if (message.includes('gridlayer')) {
                var data = _this.message.split('=');
                _this.moveGrid(data[1]);
            }
            else if (message.includes('gridtoggle')) {
                var data = _this.message.split('=');
                var bgStat = (data[1] == 'On') ? true : false;
                _this.setBackground(bgStat);
            }
            else if (message.includes('pathtoggle')) {
                var data = _this.message.split('=');
                _this.setPath((data[1] == 'On') ? true : false);
            }
            else if (message.includes('mapreload')) {
                _this.reloadMap();
            }
            else if (message.includes('save')) {
                _this.saveMap(false);
            }
            else if (message.includes('safeexit')) {
                _this.saveMap(true);
            }
            else if (message.includes('exit')) {
                _this.exitEditor();
            }
            else if (message.includes('home')) {
                _this.goHome();
            }
        });
        navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
        });
    }
    DeskEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.spaceService.getMapById(params['id']);
        })
            .subscribe(function (res) {
            _this.map = res;
            _this.mapId = _this.map._id;
            _this.navigationService.sendNavigationMessage('mapid=' + _this.mapId);
            var bgImgName = (_this.map.bgImgName) ? _this.map.bgImgName : 'null';
            _this.navigationService.sendNavigationMessage('bgfile=' + bgImgName);
            if (!_this.map.optModified || _this.map.fileModified > _this.map.optModified) {
                _this.optAskModal.show();
            }
            else {
                _this.getDings();
            }
        });
        this.rolloverTexture = {
            opacity: 0.6,
            transparent: true
        };
        this.navigationService.setNavigationStatus('deskeditor');
    };
    DeskEditComponent.prototype.ngAfterViewInit = function () {
        this.container = document.querySelector('#page-wrapper');
        this.mouse2D = new __WEBPACK_IMPORTED_MODULE_7_three__["H" /* Vector2 */]();
        this.viewInitFinished = true;
        if (this.dataInitFinished == true) {
            this.initWebGL();
        }
    };
    DeskEditComponent.prototype.reloadMap = function () {
        var _this = this;
        this.spaceService.getMapById(this.mapId).subscribe(function (res) {
            _this.map = res;
            var bgImgName = (_this.map.bgImgName) ? _this.map.bgImgName : 'null';
            _this.navigationService.sendNavigationMessage('bgfile=' + bgImgName);
        });
    };
    DeskEditComponent.prototype.getDings = function () {
        var _this = this;
        this.apiService.getDings().subscribe(function (dings) {
            _this.dings = dings;
            var texture = {};
            var material = {};
            var geoData = {};
            var dimensionPartFrom, dimensionPartTo, dimensionPart;
            var dimensionArray = [];
            for (var i in _this.dings) {
                _this.dings[i]._idx = i;
                if (_this.firstDeskId === null && _this.dings[i].type === 'desk') {
                    _this.firstDeskId = _this.dings[i]._id;
                }
                switch (_this.dings[i].texture.shading) {
                    case 'THREE.FlatShading':
                        texture.shading = __WEBPACK_IMPORTED_MODULE_7_three__["k" /* FlatShading */];
                        break;
                }
                if (_this.dings[i].texture.color != '') {
                    var colors = _this.dings[i].texture.color.split(',');
                    texture.color = new __WEBPACK_IMPORTED_MODULE_7_three__["d" /* Color */]().setRGB(parseFloat(colors[0]), parseFloat(colors[1]), parseFloat(colors[2]));
                }
                if (_this.dings[i].texture.map != null && _this.dings[i].texture.map != '') {
                    // make map logic
                }
                texture.opacity = _this.dings[i].texture.opacity;
                if (texture.opacity < 1) {
                    texture.transparent = true;
                }
                switch (_this.dings[i].material) {
                    case 'THREE.MeshPhongMaterial':
                        material = new __WEBPACK_IMPORTED_MODULE_7_three__["v" /* MeshPhongMaterial */](texture);
                        break;
                    case 'THREE.MeshBasicMaterial':
                        material = new __WEBPACK_IMPORTED_MODULE_7_three__["t" /* MeshBasicMaterial */](texture);
                        break;
                    case 'THREE.MeshLambertMaterial':
                        material = new __WEBPACK_IMPORTED_MODULE_7_three__["u" /* MeshLambertMaterial */](texture);
                        break;
                }
                material._idx = i;
                _this.dings[i]._material = material;
                if (_this.dings[i].type === 'desk') {
                    geoData = JSON.parse(_this.dings[i].geometry.data);
                    _this.dings[i]._geometry = __WEBPACK_IMPORTED_MODULE_7_three__["m" /* JSONLoader */].prototype.parse(geoData[0].g.data);
                }
                else if (_this.dings[i].type === 'place') {
                    if (_this.dings[i].geometry.data.includes('THREE.BoxGeometry')) {
                        dimensionPartFrom = _this.dings[i].geometry.data.indexOf('(');
                        dimensionPartTo = _this.dings[i].geometry.data.indexOf(')');
                        dimensionPart = _this.dings[i].geometry.data.substr(dimensionPartFrom + 1, dimensionPartTo - 1);
                        dimensionArray = dimensionPart.split(',');
                        _this.dings[i]._geometry = { geometry: new __WEBPACK_IMPORTED_MODULE_7_three__["b" /* BoxGeometry */](parseInt(dimensionArray[0]), parseInt(dimensionArray[1]), parseInt(dimensionArray[2])) };
                        _this.dings[i]._geometry.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_7_three__["r" /* Matrix4 */]().makeTranslation(0, (parseInt(dimensionArray[1]) * 0.5), 0));
                        _this.dings[i]._w = parseInt(dimensionArray[0]);
                        _this.dings[i]._h = parseInt(dimensionArray[1]);
                        _this.dings[i]._d = parseInt(dimensionArray[2]);
                    }
                }
                else if (_this.dings[i].type === 'object') {
                    if (_this.dings[i].geometry.data.includes('THREE.BoxGeometry')) {
                        dimensionPartFrom = _this.dings[i].geometry.data.indexOf('(');
                        dimensionPartTo = _this.dings[i].geometry.data.indexOf(')');
                        dimensionPart = _this.dings[i].geometry.data.substr(dimensionPartFrom + 1, dimensionPartTo - 1);
                        dimensionArray = dimensionPart.split(',');
                        _this.dings[i]._geometry = { geometry: new __WEBPACK_IMPORTED_MODULE_7_three__["b" /* BoxGeometry */](parseInt(dimensionArray[0]), parseInt(dimensionArray[1]), parseInt(dimensionArray[2])) };
                        _this.dings[i]._geometry.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_7_three__["r" /* Matrix4 */]().makeTranslation(0, (parseInt(dimensionArray[1]) * 0.5), 0));
                        _this.dings[i]._w = parseInt(dimensionArray[0]);
                        _this.dings[i]._h = parseInt(dimensionArray[1]);
                        _this.dings[i]._d = parseInt(dimensionArray[2]);
                    }
                }
            }
            _this.dataInitFinished = true;
            if (_this.viewInitFinished == true) {
                _this.initWebGL();
            }
        });
    };
    DeskEditComponent.prototype.initWebGL = function () {
        if (this.detectWebGL() === false) {
            this.showWebGLAlert();
        }
        this.renderer = new __WEBPACK_IMPORTED_MODULE_7_three__["J" /* WebGLRenderer */]({
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true
        });
        this.camera = new __WEBPACK_IMPORTED_MODULE_7_three__["x" /* PerspectiveCamera */](25, this.container.clientWidth / this.container.clientHeight, 50, 1e7);
        this.camera.position.x = 800;
        this.camera.position.y = 800;
        this.camera.position.z = 800;
        this.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_7_three__["I" /* Vector3 */](0, 0, 0));
        //this.controls = new TrackballControls(this.camera, this.renderer.document);
        this.controls = new __WEBPACK_IMPORTED_MODULE_8__node_modules_three_examples_js_controls_NgTrackballControls_js__["a" /* default */](this.camera, this.renderer.domElement);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 3.6;
        this.controls.panSpeed = 2;
        this.controls.noZoom = false;
        this.controls.noPan = false;
        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;
        this.controls.keys = [65, 83, 68]; // a:rotate, s:zoom, d:pan
        setTimeout(function () {
            var t = this;
            return function () {
                t.setRendererSize();
            };
        }.call(this), 3000);
        this.container.appendChild(this.renderer.domElement);
        this.navigationService.window.addEventListener('resize', function () {
            var t = this;
            return function () {
                t.setRendererSize();
            };
        }.call(this));
        this.scene = new __WEBPACK_IMPORTED_MODULE_7_three__["B" /* Scene */]();
        this.setGrid();
        var ambientLight = new __WEBPACK_IMPORTED_MODULE_7_three__["a" /* AmbientLight */](0x606060);
        var directionalLight = new __WEBPACK_IMPORTED_MODULE_7_three__["e" /* DirectionalLight */](0xffffff);
        directionalLight.position.set(1, 1, -1).normalize();
        this.scene.add(ambientLight);
        this.scene.add(directionalLight);
        this.setRollover(this.firstDeskId);
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_7_three__["A" /* Raycaster */]();
        this.animate();
        if (this.map.optFileName.length > 0) {
            this.loadingModal.show();
            var url = 'https://s3.eu-central-1.amazonaws.com/easyinside/opts/' + this.map.optFileName;
            var xhr_1 = new XMLHttpRequest();
            if ('withCredentials' in xhr_1) {
                xhr_1.open('GET', url, true);
            }
            //xhr.responseType = 'json';
            var t_1 = this;
            xhr_1.onreadystatechange = function () {
                var status;
                var data;
                if (xhr_1.readyState == 4) {
                    status = xhr_1.status;
                    if (status == 200) {
                        data = JSON.parse(xhr_1.responseText);
                        t_1.initAfterMapDataLoad(data);
                    }
                    else {
                        console.log('Error in reading map data');
                    }
                }
            };
            xhr_1.send();
        }
    };
    DeskEditComponent.prototype.detectWebGL = function () {
        try {
            return !!this.navigationService.window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
        }
        catch (e) {
            return false;
        }
    };
    DeskEditComponent.prototype.showWebGLAlert = function () {
        if (this.navigationService.window.WebGLRenderingContext) {
            this.graphicCardNeeded = true;
        }
        else {
            this.browserNeeded = true;
        }
    };
    DeskEditComponent.prototype.setRendererSize = function () {
        var w = this.container.clientWidth;
        var h = this.container.clientHeight;
        this.renderer.setSize(w, h);
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.controls.handleResize();
    };
    DeskEditComponent.prototype.onDocumentKeyDown = function (e) {
        switch (e.keyCode) {
            case 'R'.charCodeAt(0):
                this.rotateRollover();
                break;
            case 17:
                this.isCtrlDown = true;
                break;
            case 18:
                this.isAltDown = true;
                break;
            case 38:
                this.zoomInOut('in');
                break;
            case 40:
                this.zoomInOut('out');
                break;
        }
    };
    ;
    DeskEditComponent.prototype.onDocumentKeyUp = function (e) {
        switch (e.keyCode) {
            case 17:
                this.isCtrlDown = false;
                break;
            case 18:
                this.isAltDown = false;
                break;
        }
    };
    /**
     * voxelSize : 10 = map.width : planeWidth
     * planeWidth = 10 * map.width / voxelSize
     * planeHeight = 10 * map.height / voxelSize
     */
    DeskEditComponent.prototype.setGrid = function () {
        if (this.planeObj) {
            this.scene.remove(this.planeObj);
        }
        var planeWidth = Math.floor(10 * this.map.width / this.map.voxelSize);
        var planeHeight = Math.floor(10 * this.map.height / this.map.voxelSize);
        var planeMaterial = new __WEBPACK_IMPORTED_MODULE_7_three__["t" /* MeshBasicMaterial */]({
            color: 0x777777,
            opacity: 0.1,
            transparent: true
            //wireframe: true
        });
        this.planeObj = new __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */](new __WEBPACK_IMPORTED_MODULE_7_three__["y" /* PlaneGeometry */](planeWidth, planeHeight, 1, 1), planeMaterial);
        // add lines on plane
        var lineMaterial = new __WEBPACK_IMPORTED_MODULE_7_three__["o" /* LineBasicMaterial */]({
            color: 0x777777,
            linewidth: 1,
            opacity: 0.7,
            transparent: true
        });
        var gridGeo = new __WEBPACK_IMPORTED_MODULE_7_three__["l" /* Geometry */]();
        var halfW = Math.floor(planeWidth / 2);
        var halfH = Math.floor(planeHeight / 2);
        for (var i = -halfW; i <= halfW; i += 10) {
            gridGeo.vertices.push(new __WEBPACK_IMPORTED_MODULE_7_three__["I" /* Vector3 */](i, -halfH, 0));
            gridGeo.vertices.push(new __WEBPACK_IMPORTED_MODULE_7_three__["I" /* Vector3 */](i, halfH, 0));
        }
        for (var i = -halfH; i <= halfH; i += 10) {
            gridGeo.vertices.push(new __WEBPACK_IMPORTED_MODULE_7_three__["I" /* Vector3 */](-halfW, i, 0));
            gridGeo.vertices.push(new __WEBPACK_IMPORTED_MODULE_7_three__["I" /* Vector3 */](halfW, i, 0));
        }
        var grid = new __WEBPACK_IMPORTED_MODULE_7_three__["p" /* LineSegments */](gridGeo, lineMaterial);
        this.planeObj.add(grid);
        this.planeObj.overdraw = true;
        this.planeObj.rotation.x = -(Math.PI * 90 / 180);
        this.planeObj.material.depthTest = false;
        this.planeObj.renderOrder = 1;
        this.scene.add(this.planeObj);
    };
    DeskEditComponent.prototype.moveGrid = function (layer) {
        this.planeObj.position.y = parseInt(layer) * 10;
    };
    DeskEditComponent.prototype.setBackground = function (status) {
        if (status) {
            var img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = function (t) {
                return function (tex) {
                    t.planeObj.material.map = new __WEBPACK_IMPORTED_MODULE_7_three__["G" /* Texture */](this);
                    t.planeObj.material.transparent = false;
                    t.planeObj.material.map.needsUpdate = true;
                    t.planeObj.material.needsUpdate = true;
                };
            }(this);
            img.src = 'https://s3.eu-central-1.amazonaws.com/easyinside/gridbgs/' + this.map.bgImgName;
        }
        else {
            this.planeObj.material.map = null;
            this.planeObj.material.transparent = true;
            this.planeObj.material.needsUpdate = true;
        }
    };
    DeskEditComponent.prototype.setPath = function (status) {
        if (this.pathObj) {
            if (status) {
                this.scene.add(this.pathObj);
            }
            else {
                this.scene.remove(this.pathObj);
            }
        }
    };
    DeskEditComponent.prototype.setRollover = function (dId) {
        this.scene.remove(this.rolloverMesh);
        for (var _i = 0, _a = this.dings; _i < _a.length; _i++) {
            var d = _a[_i];
            if (d._id == dId) {
                this.selectedDing = d;
                break;
            }
        }
        var texture = {};
        var material = {};
        for (var k in this.rolloverTexture) {
            texture[k] = this.rolloverTexture[k];
        }
        switch (this.selectedDing.texture.shading) {
            case 'THREE.FlatShading':
                texture.shading = __WEBPACK_IMPORTED_MODULE_7_three__["k" /* FlatShading */];
                break;
        }
        if (this.selectedDing.texture.color != '') {
            var colors = this.selectedDing.texture.color.split(',');
            texture.color = new __WEBPACK_IMPORTED_MODULE_7_three__["d" /* Color */]().setRGB(parseFloat(colors[0]), parseFloat(colors[1]), parseFloat(colors[2]));
        }
        switch (this.selectedDing.material) {
            case 'THREE.MeshPhongMaterial':
                material = new __WEBPACK_IMPORTED_MODULE_7_three__["v" /* MeshPhongMaterial */](texture);
                break;
            case 'THREE.MeshBasicMaterial':
                material = new __WEBPACK_IMPORTED_MODULE_7_three__["t" /* MeshBasicMaterial */](texture);
                break;
            case 'THREE.MeshLambertMaterial':
                material = new __WEBPACK_IMPORTED_MODULE_7_three__["u" /* MeshLambertMaterial */](texture);
                break;
        }
        material._idx = this.selectedDing._idx;
        this.rolloverMesh = new __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */](this.selectedDing._geometry.geometry.clone(), material);
        this.rolloverMesh._idx = this.selectedDing._idx;
        this.rolloverMesh._r = false;
        if (this.selectedDing.type === 'desk') {
            if (this.selectedDing._id === '5909ef6f8a0d422b37dc5247') {
                this.rolloverMesh._w = 160;
                this.rolloverMesh._h = 72;
                this.rolloverMesh._d = 80;
                this.rolloverMesh.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_7_three__["r" /* Matrix4 */]().makeTranslation(-80, -36, -40));
            }
            else if (this.selectedDing._id === '5909efc18a0d422b37dc5248') {
                this.rolloverMesh._w = 200;
                this.rolloverMesh._h = 72;
                this.rolloverMesh._d = 100;
                this.rolloverMesh.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_7_three__["r" /* Matrix4 */]().makeTranslation(0, -70, 0));
            }
        }
        else {
            this.rolloverMesh._w = this.selectedDing._w;
            this.rolloverMesh._h = this.selectedDing._h;
            this.rolloverMesh._d = this.selectedDing._d;
        }
        this.scene.add(this.rolloverMesh);
    };
    ;
    DeskEditComponent.prototype.rotateRollover = function () {
        if (this.rolloverMesh._r === false) {
            //rollOverMesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2);
            this.rolloverMesh.rotation.y += Math.PI / 2;
            this.rolloverMesh._r = true;
        }
        else {
            this.rolloverMesh.rotation.y -= Math.PI / 2;
            this.rolloverMesh._r = false;
        }
    };
    DeskEditComponent.prototype.onDocumentMouseMove = function (event) {
        this.mouse2D.x = ((event.clientX - this.container.offsetLeft) / this.container.clientWidth) * 2 - 1;
        this.mouse2D.y = -((event.clientY - this.container.offsetTop) / this.container.clientHeight) * 2 + 1;
    };
    DeskEditComponent.prototype.zoomInOut = function (cmd) {
        switch (cmd) {
            case 'in':
                this.zoomFactor = (this.zoomFactor > 1) ? 1 : this.zoomFactor;
                this.zoomFactor = this.zoomFactor - this.zoomIncFactor;
                this.zoomFactor = (this.zoomFactor <= 0.2) ? 0.2 : this.zoomFactor;
                break;
            case 'out':
                this.zoomFactor = (this.zoomFactor < 1) ? 1 : this.zoomFactor;
                this.zoomFactor = this.zoomFactor + this.zoomIncFactor;
                this.zoomFactor = (this.zoomFactor >= 2) ? 1 : this.zoomFactor;
                break;
        }
        this.camera.fov *= this.zoomFactor;
        this.camera.updateProjectionMatrix();
    };
    DeskEditComponent.prototype.getSelectedDingsId = function (idx) {
        var dingChoosen;
        for (var i in this.dings) {
            if (this.dings[i]._idx == idx) {
                dingChoosen = this.dings[i];
            }
        }
        return dingChoosen._id;
    };
    DeskEditComponent.prototype.getSelectedDingsType = function (idx) {
        var dingChoosen;
        for (var i in this.dings) {
            if (this.dings[i]._idx == idx) {
                dingChoosen = this.dings[i];
            }
        }
        return dingChoosen.type;
    };
    DeskEditComponent.prototype.getSelectedDingsName = function (idx) {
        var dingChoosen;
        for (var i in this.dings) {
            if (this.dings[i]._idx == idx) {
                dingChoosen = this.dings[i];
            }
        }
        return dingChoosen.name;
    };
    DeskEditComponent.prototype.getSelectedDingsMaterial = function (idx) {
        var dingChoosen;
        for (var i in this.dings) {
            if (this.dings[i]._idx == idx) {
                dingChoosen = this.dings[i];
            }
        }
        return dingChoosen._material;
    };
    DeskEditComponent.prototype.getSelectedDingsGeometry = function (idx) {
        var dingChoosen;
        for (var i in this.dings) {
            if (this.dings[i]._idx == idx) {
                dingChoosen = this.dings[i];
            }
        }
        return dingChoosen._geometry.geometry.clone();
    };
    DeskEditComponent.prototype.getRealIntersector = function (intersects) {
        var intersector;
        for (var i = 0; i < intersects.length; i++) {
            intersector = intersects[i];
            if (intersector.object != this.rolloverMesh && intersector.object.name != 'path') {
                return intersector;
            }
        }
    };
    DeskEditComponent.prototype.setRolloverPosition = function (intersector) {
        var normalMatrix = new __WEBPACK_IMPORTED_MODULE_7_three__["q" /* Matrix3 */]();
        normalMatrix.getNormalMatrix(intersector.object.matrixWorld);
        var rotatedNormal = new __WEBPACK_IMPORTED_MODULE_7_three__["I" /* Vector3 */]().copy(intersector.face.normal);
        rotatedNormal.applyMatrix3(normalMatrix);
        this.rolloverPosition.addVectors(intersector.point, rotatedNormal);
        if (this.rolloverMesh) {
            if (this.selectedDing.type === 'desk') {
                if (this.selectedDing._id === '5909ef6f8a0d422b37dc5247') {
                    if (this.rolloverMesh._r) {
                        this.rolloverPosition.x = Math.floor((this.rolloverPosition.x) / 10) * 10 + 2;
                        this.rolloverPosition.y = Math.floor((this.rolloverPosition.y + (this.rolloverMesh._h)) / 10) * 10 + 1;
                        this.rolloverPosition.z = Math.floor((this.rolloverPosition.z) / 10) * 10 + 7;
                    }
                    else {
                        this.rolloverPosition.x = Math.floor((this.rolloverPosition.x) / 10) * 10 + 3.2;
                        this.rolloverPosition.y = Math.floor((this.rolloverPosition.y + (this.rolloverMesh._h)) / 10) * 10 + 1;
                        this.rolloverPosition.z = Math.floor((this.rolloverPosition.z) / 10) * 10 + 2;
                    }
                }
                else if (this.selectedDing._id === '5909efc18a0d422b37dc5248') {
                    this.rolloverPosition.y = Math.floor((this.rolloverPosition.y + (this.rolloverMesh._h)) / 10) * 10 + 1;
                }
            }
            else {
                if (this.rolloverMesh._r) {
                    if (this.rolloverMesh._w % 20 === 0) {
                        this.rolloverPosition.z = Math.floor(this.rolloverPosition.z / 10) * 10;
                    }
                    else {
                        this.rolloverPosition.z = Math.floor(this.rolloverPosition.z / 10) * 10 + 5;
                    }
                    this.rolloverPosition.y = Math.floor(this.rolloverPosition.y / 10) * 10;
                    if (this.rolloverMesh._d % 20 === 0) {
                        this.rolloverPosition.x = Math.floor(this.rolloverPosition.x / 10) * 10;
                    }
                    else {
                        this.rolloverPosition.x = Math.floor(this.rolloverPosition.x / 10) * 10 + 5;
                    }
                }
                else {
                    if (this.rolloverMesh._w % 20 === 0) {
                        this.rolloverPosition.x = Math.floor(this.rolloverPosition.x / 10) * 10;
                    }
                    else {
                        this.rolloverPosition.x = Math.floor(this.rolloverPosition.x / 10) * 10 + 5;
                    }
                    this.rolloverPosition.y = Math.floor(this.rolloverPosition.y / 10) * 10;
                    if (this.rolloverMesh._d % 20 === 0) {
                        this.rolloverPosition.z = Math.floor(this.rolloverPosition.z / 10) * 10;
                    }
                    else {
                        this.rolloverPosition.z = Math.floor(this.rolloverPosition.z / 10) * 10 + 5;
                    }
                }
            }
        }
    };
    DeskEditComponent.prototype.initAfterMapDataLoad = function (data) {
        var maxIdx = 0;
        for (var i in this.dings) {
            this.dings[i]._idx = null;
            this.dings[i]._material._idx = null;
        }
        for (var i in data.m) {
            for (var j in this.dings) {
                if (this.dings[j]._id == data.m[i]._id) {
                    this.dings[j]._idx = data.m[i].idx;
                    this.dings[j]._material._idx = data.m[i].idx;
                    maxIdx = (data.m[i].idx > maxIdx) ? data.m[i].idx : maxIdx;
                }
            }
        }
        for (var i in this.dings) {
            if (this.dings[i]._idx == null) {
                maxIdx++;
                this.dings[i]._idx = maxIdx;
                this.dings[i]._material._idx = maxIdx;
            }
        }
        var children = this.scene.children.slice(0);
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === 'map' || children[i].name === 'path') {
                this.scene.remove(children[i]);
                continue;
            }
            if (children[i] instanceof __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */] === false) {
                continue;
            }
            if (children[i].geometry instanceof __WEBPACK_IMPORTED_MODULE_7_three__["b" /* BoxGeometry */] === false) {
                continue;
            }
            if (children[i] === this.rolloverMesh) {
                continue;
            }
            this.scene.remove(children[i]);
        }
        var voxels = data.d;
        var voxel, mesh, tmpMaterial, tmpGeometry;
        var voxelLength = voxels.length;
        for (var i = 0; i < voxelLength; i++) {
            voxel = voxels[i];
            tmpMaterial = this.getSelectedDingsMaterial(voxel.t);
            tmpGeometry = __WEBPACK_IMPORTED_MODULE_7_three__["m" /* JSONLoader */].prototype.parse(voxel.g.data);
            mesh = new __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */](tmpGeometry.geometry, tmpMaterial);
            mesh.position.x = voxel.x;
            mesh.position.y = voxel.y;
            mesh.position.z = voxel.z;
            mesh.name = (this.getSelectedDingsType(voxel.t) === 'path') ? 'path' : 'map';
            if (mesh.name == 'path') {
                this.pathObj = mesh;
            }
            this.scene.add(mesh);
            if (mesh.name == 'path') {
                this.setPath(false);
            }
        }
        this.loadingModal.hide();
        if (this.map.objFileName && this.map.objFileName.length > 0) {
            this.loadingDeskModal.show();
            var url = 'https://s3.eu-central-1.amazonaws.com/easyinside/desks/' + this.map.objFileName;
            var xhr_2 = new XMLHttpRequest();
            if ('withCredentials' in xhr_2) {
                xhr_2.open('GET', url, true);
            }
            //xhr.responseType = 'json';
            var t_2 = this;
            xhr_2.onreadystatechange = function () {
                var status;
                var data;
                if (xhr_2.readyState == 4) {
                    status = xhr_2.status;
                    if (status == 200) {
                        data = JSON.parse(xhr_2.responseText);
                        t_2.initAfterDeskDataLoad(data);
                    }
                    else {
                        console.log('Error in reading map data');
                    }
                }
            };
            xhr_2.send();
        }
    };
    DeskEditComponent.prototype.initAfterDeskDataLoad = function (data) {
        var children = this.scene.children.slice(0);
        for (var i = 0; i < children.length; i++) {
            if (children[i]._p !== 'desk' && children[i]._p !== 'place' && children[i]._p !== 'object') {
                continue;
            }
            if (children[i] === this.rolloverMesh) {
                continue;
            }
            this.scene.remove(children[i]);
        }
        var desks = data;
        var deskLength = desks.length;
        var voxel, mesh, tmpMaterial, tmpGeometry;
        for (var i_1 = 0; i_1 < deskLength; i_1++) {
            voxel = desks[i_1];
            tmpMaterial = this.getSelectedDingsMaterial(voxel.t);
            tmpGeometry = this.getSelectedDingsGeometry(voxel.t);
            mesh = new __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */](tmpGeometry, tmpMaterial);
            mesh.position.set(voxel.x, voxel.y, voxel.z);
            switch (this.getSelectedDingsId(voxel.t)) {
                case '5909ef6f8a0d422b37dc5247':
                    mesh.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_7_three__["r" /* Matrix4 */]().makeTranslation(-80, -36, -40));
                    break;
                case '5909efc18a0d422b37dc5248':
                    mesh.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_7_three__["r" /* Matrix4 */]().makeTranslation(0, -70, 0));
                    break;
            }
            if (voxel.r === 1) {
                mesh.rotation.y += Math.PI / 2;
                mesh._r = true;
            }
            else {
                mesh._r = false;
            }
            mesh.matrixAutoUpdate = false;
            mesh.updateMatrix();
            mesh._p = this.getSelectedDingsType(voxel.t);
            mesh._t = voxel.t;
            mesh._userID = voxel.i;
            mesh._n = this.getSelectedDingsName(voxel.t);
            this.scene.add(mesh);
        }
        this.loadingDeskModal.hide();
    };
    DeskEditComponent.prototype.putDelRollover = function () {
        if (this.isCtrlDown === false && this.isAltDown === false) {
            return;
        }
        if (Date.now() - this.lastPutDelTime < 500) {
            return;
        }
        else {
            this.lastPutDelTime = Date.now();
        }
        var intersects = this.raycaster.intersectObjects(this.scene.children);
        if (intersects.length > 0) {
            var intersector = this.getRealIntersector(intersects);
            if (this.isAltDown) {
                console.info(intersector);
                if (intersector.object._p === 'desk' || intersector.object._p === 'place' || intersector.object._p === 'object') {
                    this.scene.remove(intersector.object);
                    this.needSave = true;
                }
            }
            else if (this.isCtrlDown) {
                this.setRolloverPosition(intersector);
                var material = this.getSelectedDingsMaterial(this.selectedDing._idx);
                var geometry = this.getSelectedDingsGeometry(this.selectedDing._idx);
                var obj = new __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */](geometry, material);
                if (this.selectedDing.type === 'desk') {
                    if (this.selectedDing._id === '5909ef6f8a0d422b37dc5247') {
                        obj.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_7_three__["r" /* Matrix4 */]().makeTranslation(-80, -36, -40));
                    }
                    else if (this.selectedDing._id === '5909efc18a0d422b37dc5248') {
                        obj.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_7_three__["r" /* Matrix4 */]().makeTranslation(0, -70, 0));
                    }
                }
                obj.position.copy(this.rolloverPosition);
                if (this.rolloverMesh._r === true) {
                    obj.rotation.y += Math.PI / 2;
                    obj._r = true;
                }
                else {
                    obj._r = false;
                }
                obj.matrixAutoUpdate = false;
                obj.updateMatrix();
                obj._p = this.getSelectedDingsType(this.selectedDing._idx);
                obj._n = this.getSelectedDingsName(this.selectedDing._idx);
                obj._userID = null;
                this.scene.add(obj);
                this.needSave = true;
            }
        }
    };
    DeskEditComponent.prototype.saveMap = function (exitAfterSave) {
        var _this = this;
        this.saveProcessStarted = true;
        var children = this.scene.children;
        var voxels = [];
        var child;
        for (var i = 0; i < children.length; i++) {
            child = children[i];
            if (child._p !== 'desk' && child._p !== 'place' && child._p !== 'object') {
                continue;
            }
            if (child === this.rolloverMesh) {
                continue;
            }
            voxels.push({
                x: child.position.x,
                y: child.position.y,
                z: child.position.z,
                t: child.material._idx,
                r: (child._r === true) ? 1 : 0,
                i: child._userID,
                p: child._p,
                n: child._n
            });
        }
        var dataUri = JSON.stringify(voxels);
        this.spaceService.saveDeskFile(this.mapId, { file: dataUri }).subscribe(function (res) {
            if (res.result) {
                _this.needSave = false;
                if (exitAfterSave) {
                    //document.location.href = '/maker/map-detail/' + this.mapId;
                    _this.exitToDetail();
                }
                else {
                    _this.saveProcessStarted = false;
                    _this.saveFinished = true;
                    setTimeout(function () {
                        _this.saveFinished = false;
                    }, 3000);
                }
            }
        });
    };
    DeskEditComponent.prototype.exitEditor = function () {
        if (this.needSave) {
            this.saveAskModal.show();
        }
        else {
            //document.location.href = '/maker/map-detail/' + this.mapId;
            this.exitToDetail();
        }
    };
    DeskEditComponent.prototype.exitToDetail = function () {
        this.renderingAllowed = false;
        this.router.navigate(['/maker/map-detail', this.mapId]);
    };
    DeskEditComponent.prototype.goHome = function () {
        this.renderingAllowed = false;
        this.router.navigate(['/']);
    };
    DeskEditComponent.prototype.animate = function () {
        if (this.renderingAllowed) {
            requestAnimationFrame(function () {
                var t = this;
                return function () {
                    t.animate();
                };
            }.call(this));
        }
        this.controls.update();
        this.render();
    };
    DeskEditComponent.prototype.render = function () {
        this.putDelRollover();
        this.raycaster.setFromCamera(this.mouse2D, this.camera);
        var intersects = this.raycaster.intersectObjects(this.scene.children);
        if (intersects.length > 0) {
            var intersector = this.getRealIntersector(intersects);
            if (intersector) {
                this.setRolloverPosition(intersector);
                this.rolloverMesh.position.copy(this.rolloverPosition);
            }
        }
        this.renderer.render(this.scene, this.camera);
    };
    return DeskEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('optAskModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], DeskEditComponent.prototype, "optAskModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loadingModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
], DeskEditComponent.prototype, "loadingModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loadingDeskModal'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _c || Object)
], DeskEditComponent.prototype, "loadingDeskModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('saveAskModal'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _e || Object)
], DeskEditComponent.prototype, "saveAskModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DeskEditComponent.prototype, "onDocumentKeyDown", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DeskEditComponent.prototype, "onDocumentKeyUp", null);
DeskEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-desk-edit',
        template: __webpack_require__("../../../../../src/app/desk-edit/desk-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/desk-edit/desk-edit.component.css"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _g || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__space_service__["a" /* SpaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__space_service__["a" /* SpaceService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _o || Object])
], DeskEditComponent);

var _a, _b, _c, _e, _f, _g, _j, _k, _l, _m, _o;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/desk-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/dings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DingsService = (function () {
    function DingsService(http) {
        this.http = http;
    }
    DingsService.prototype.getDings = function (limit, page) {
        return this.http.get('/ding/list/' + limit.toString() + '/' + page.toString()).map(function (res) { return res.json(); });
    };
    DingsService.prototype.getDingsByKeyword = function (limit, page, keyword) {
        return this.http.get('/ding/search/' + limit.toString() + '/' + page.toString() + '/' + keyword).map(function (res) { return res.json(); });
    };
    DingsService.prototype.getAvailableDings = function () {
        return this.http.get('/ding/availables').map(function (res) { return res.json(); });
    };
    DingsService.prototype.createDing = function (ding) {
        return this.http.post('/ding/create', ding)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    DingsService.prototype.saveDing = function (id, ding) {
        return this.http.put('/ding/' + id, ding)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    DingsService.prototype.deleteDing = function (id) {
        return this.http.delete('/ding/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    DingsService.prototype.getDingById = function (id) {
        return this.http.get('/ding/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    return DingsService;
}());
DingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DingsService);

var _a;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/dings.service.js.map

/***/ }),

/***/ "../../../../../src/app/dings/dings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dings/dings.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-nav-private [status]=\"status\"></app-nav-private>\n\n    <div style=\"position:fixed;right:10px;top:10px;z-index:1001;\">\n        <alert type=\"success\" dismissible=\"true\" *ngIf=\"editComplete\">\n            <strong>Updated!</strong> You successfully change ding data.\n        </alert>\n        <alert type=\"danger\" dismissible=\"true\" *ngIf=\"alert.visible\" (onClose)=\"onCloseAlert($event)\">\n            <strong>Error!</strong> {{alert.message}}\n        </alert>\n        <alert type=\"warning\" *ngIf=\"deleteProcess\">\n            <strong>Warning!</strong> This ding will be deleted permanently. Are you sure?\n            <button type=\"button\" class=\"btn btn-primary btn-xs\" style=\"margin-left:20px;\" (click)=\"deleteDing($event)\">Yes</button>\n            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteProcess=false\">No</button>\n        </alert>\n    </div>\n\n    <div id=\"page-wrapper\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"page-header\">Dings</h1>\n            </div>\n            <!-- /.col-lg-12 -->\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        DataTables Advanced Tables\n                        <button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"float:right;margin-top:-5px;\" (click)=\"openCreateModal($event)\">\n                            Create A Ding\n                        </button>\n                    </div>\n                    <!-- /.panel-heading -->\n                    <div class=\"panel-body\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group\">\n                                    <label style=\"display:block;\">Show entries</label>\n                                    <div class=\"btn-group\">\n                                        <label class=\"btn btn-default\" [(ngModel)]=\"limit\" btnRadio=\"5\" (click)=\"onClickLimit($event)\" uncheckable>5</label>\n                                        <label class=\"btn btn-default\" [(ngModel)]=\"limit\" btnRadio=\"10\" (click)=\"onClickLimit($event)\" uncheckable>10</label>\n                                        <label class=\"btn btn-default\" [(ngModel)]=\"limit\" btnRadio=\"50\" (click)=\"onClickLimit($event)\" uncheckable>50</label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\" for=\"inputSearch\">Search</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"inputSearch\" (keypress)=\"onChangeKeyword($event)\">\n                                </div>\n                            </div>\n                        </div>\n                        <table width=\"100%\" class=\"table table-striped table-bordered table-hover\" id=\"geometrylistTable\">\n                            <thead>\n                                <tr>\n                                    <th>_Id</th>\n                                    <th>Type</th>\n                                    <th>Name</th>\n                                    <th>Published</th>\n                                    <th>Last Modified</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let d of dings; let index=index; let odd=odd; let even=even; let last=last;\" [ngClass]=\"{odd: odd, even: even}\">\n                                    <td class=\"preCell\"><a href=\"#\" (click)=\"openEditModal($event, d._id)\">{{d._id}}</a></td>\n                                    <td>{{d.type}}</td>\n                                    <td>{{d.name}}</td>\n                                    <td style=\"text-align:center;\"><span [ngClass]=\"{'glyphicon':true, 'glyphicon-ok': d.published, 'glyphicon-remove': !d.published}\"><!--{{d.published}}--></span></td>\n                                    <td>{{d.modified | convertTimezone:[timeZone, timeFormat]}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <div>Showing {{pageFrom}} to {{pageTo}} of {{total}} entries</div>\n                        <pagination [(ngModel)]=\"page\" [totalItems]=\"total\" [itemsPerPage]=\"limit\" [maxSize]=\"5\" [boundaryLinks]=\"true\" [rotate]=\"false\" (pageChanged)=\"pageChanged($event)\"></pagination>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"modal fade\" bsModal #dingCreationModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">New Ding</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"dingCreationModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form id=\"newding\" role=\"form\" [formGroup]=\"newDingForm\" (ngSubmit)=\"createDing(newDingForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!newDingForm.controls['name'].valid && newDingForm.controls['name'].touched}\">\n                <label>Name</label>\n                <input class=\"form-control\" placeholder=\"Enter ding name\" [formControl]=\"newDingForm.controls['name']\">\n                <div *ngIf=\"newDingForm.controls['name'].hasError('required') && newDingForm.controls['name'].touched\" class=\"alert alert-danger\">\n                  You must include a ding name.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Type</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                          {{ding?.type}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'type', 'floor')\">Floor</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'type', 'wall')\">Wall</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'type', 'object')\">Object</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'type', 'desk')\">Desk</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'type', 'place')\">Place</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'type', 'path')\">Path</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Geometry</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\n                          {{geometry?.name}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li *ngFor=\"let g of geometries\" role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'geometry', g._id)\">{{g.name}}</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Texture</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\n                          {{texture?.name}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li *ngFor=\"let t of textures\" role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'texture', t._id)\">{{t.name}}</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Material</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\n                          {{ding?.material}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'material', 'THREE.MeshBasicMaterial')\">THREE.MeshBasicMaterial</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'material', 'THREE.MeshLambertMaterial')\">THREE.MeshLambertMaterial</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'material', 'THREE.MeshPhongMaterial')\">THREE.MeshPhongMaterial</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Show Public</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                          {{published}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeDingStatus($event, 'published', true)\">Yes</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeDingStatus($event, 'published', false)\">No</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!newDingForm.valid\">\n                  Create\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #dingEditModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Edit Ding</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"dingEditModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form id=\"editding\" role=\"form\" [formGroup]=\"editDingForm\" (ngSubmit)=\"editDing(editDingForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                  <label>Ding ID</label>\n                  <p class=\"form-control-static\">{{ding?._id}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!editDingForm.controls['name'].valid && editDingForm.controls['name'].touched}\">\n                <label>Name</label>\n                <input class=\"form-control\" placeholder=\"Enter geometry name\" [formControl]=\"editDingForm.controls['name']\">\n                <div *ngIf=\"editDingForm.controls['name'].hasError('required') && editDingForm.controls['name'].touched\" class=\"alert alert-danger\">\n                  You must include a ding name.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Type</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                          {{ding?.type}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'type', 'floor')\">Floor</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'type', 'wall')\">Wall</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'type', 'object')\">Object</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'type', 'desk')\">Desk</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'type', 'place')\">Place</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'type', 'path')\">Path</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Geometry</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\n                          {{geometry?.name}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li *ngFor=\"let g of geometries\" role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'geometry', g._id)\">{{g.name}}</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Texture</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\n                          {{texture?.name}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li *ngFor=\"let t of textures\" role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'texture', t._id)\">{{t.name}}</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Material</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\n                          {{ding?.material}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'material', 'THREE.MeshBasicMaterial')\">THREE.MeshBasicMaterial</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'material', 'THREE.MeshLambertMaterial')\">THREE.MeshLambertMaterial</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeDingStatus($event, 'material', 'THREE.MeshPhongMaterial')\">THREE.MeshPhongMaterial</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Show Public</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                          {{published}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeDingStatus($event, 'published', true)\">Yes</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeDingStatus($event, 'published', false)\">No</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!editDingForm.valid\">\n                  Save\n                </button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"askDelete($event)\">\n                  Delete\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dings/dings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dings_service__ = __webpack_require__("../../../../../src/app/dings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__textures_service__ = __webpack_require__("../../../../../src/app/textures.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geometries_service__ = __webpack_require__("../../../../../src/app/geometries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DingsComponent = (function () {
    function DingsComponent(elementRef, dingsService, texturesService, geometriesService, navigationService, fb) {
        var _this = this;
        this.elementRef = elementRef;
        this.dingsService = dingsService;
        this.texturesService = texturesService;
        this.geometriesService = geometriesService;
        this.navigationService = navigationService;
        this.textures = [];
        this.geometries = [];
        this.dings = [];
        this.limit = '10';
        this.page = 1;
        this.timeZone = '+01:00';
        this.timeFormat = 'DD-MM-YYYY HH:mm:ss';
        this.alert = {
            visible: false,
            message: ''
        };
        this.ding = {};
        this.published = 'no';
        this.editComplete = false;
        this.deleteProcess = false;
        navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
        });
        navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
        });
        this.newDingForm = fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].pattern('[0-9A-Za-z ]*')]]
        });
        this.editDingForm = fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].pattern('[0-9A-Za-z ]*')]]
        });
    }
    DingsComponent.prototype.ngOnInit = function () {
        this.navigationService.setNavigationStatus('maker');
        this.getAvailableTextures();
        this.getAvailableGeometries();
        this.getDings();
    };
    DingsComponent.prototype.ngAfterViewInit = function () {
    };
    DingsComponent.prototype.setPage = function (p) {
        this.page = p;
    };
    DingsComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.getDings();
    };
    DingsComponent.prototype.onClickLimit = function (event) {
        this.getDings();
    };
    DingsComponent.prototype.onChangeKeyword = function (event) {
        if (event.keyCode == 13) {
            if (event.srcElement.value != '') {
                this.keyword = event.srcElement.value;
            }
            else {
                this.keyword = '';
            }
            this.page = 1;
            this.getDings();
        }
    };
    DingsComponent.prototype.getDings = function () {
        var _this = this;
        if (!this.keyword) {
            this.dingsService.getDings(parseInt(this.limit), this.page - 1).subscribe(function (res) {
                _this.dings = res.dings;
                _this.total = res.total;
                _this.page = res.page + 1;
                _this.pageFrom = (_this.page - 1) * parseInt(_this.limit) + 1;
                var pt = _this.pageFrom + parseInt(_this.limit) - 1;
                _this.pageTo = (pt > _this.total) ? _this.total : pt;
            });
        }
        else {
            this.dingsService.getDingsByKeyword(parseInt(this.limit), this.page - 1, this.keyword).subscribe(function (res) {
                _this.dings = res.dings;
                _this.keyword = res.keyword;
                _this.total = res.total;
                _this.page = res.page + 1;
                _this.pageFrom = (_this.page - 1) * parseInt(_this.limit) + 1;
                var pt = _this.pageFrom + parseInt(_this.limit) - 1;
                _this.pageTo = (pt > _this.total) ? _this.total : pt;
            });
        }
    };
    DingsComponent.prototype.getAvailableTextures = function () {
        var _this = this;
        if (this.textures.length == 0) {
            this.texturesService.getAvailableTextures().subscribe(function (res) {
                _this.textures = res.textures;
            });
        }
    };
    DingsComponent.prototype.getAvailableGeometries = function () {
        var _this = this;
        if (this.geometries.length == 0) {
            this.geometriesService.getAvailableGeometries().subscribe(function (res) {
                _this.geometries = res.geometries;
            });
        }
    };
    DingsComponent.prototype.openCreateModal = function (event) {
        event.preventDefault();
        //this.getAvailableTextures();
        //this.getAvailableGeometries();
        this.ding = {};
        this.published = 'no';
        this.ding.type = 'floor';
        this.ding.published = false;
        this.ding.material = 'THREE.MeshBasicMaterial';
        this.geometry = this.geometries[0];
        this.texture = this.textures[0];
        this.dingCreationModal.show();
    };
    DingsComponent.prototype.createDing = function (value) {
        var _this = this;
        var dg = {
            name: value.name,
            type: this.ding.type,
            geometry: this.geometry._id,
            texture: this.texture._id,
            material: this.ding.material,
            published: this.ding.published
        };
        this.dingsService.createDing(dg).subscribe(function (res) {
            _this.getDings();
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
        this.dingCreationModal.hide();
        this.newDingForm.reset();
    };
    DingsComponent.prototype.openEditModal = function (event, dId) {
        var _this = this;
        event.preventDefault();
        this.dingsService.getDingById(dId).subscribe(function (res) {
            _this.ding = res;
            _this.dingId = res._id;
            _this.editDingForm.controls['name'].setValue(_this.ding.name, { onlySelf: true });
            _this.published = _this.ding.published ? 'yes' : 'no';
            _this.geometry = _this.ding.geometry;
            _this.texture = _this.ding.texture;
            //this.getAvailableTextures();
            //this.getAvailableGeometries();
            _this.dingEditModal.show();
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    DingsComponent.prototype.changeDingStatus = function (event, property, value) {
        event.preventDefault();
        switch (property) {
            case 'texture':
                for (var _i = 0, _a = this.textures; _i < _a.length; _i++) {
                    var t = _a[_i];
                    console.log(t._id);
                    if (t._id.toString() == value) {
                        this.texture = t;
                        this.ding.texture = t;
                    }
                }
                break;
            case 'geometry':
                for (var _b = 0, _c = this.geometries; _b < _c.length; _b++) {
                    var g = _c[_b];
                    if (g._id.toString() == value) {
                        this.geometry = g;
                        this.ding.geometry = g;
                    }
                }
                break;
            default:
                this.ding[property] = value;
                break;
        }
        this.published = this.ding.published ? 'yes' : 'no';
        this.editDingForm.updateValueAndValidity();
    };
    DingsComponent.prototype.editDing = function (value) {
        var _this = this;
        var dg = {
            name: value.name,
            type: this.ding.type,
            geometry: this.geometry._id,
            texture: this.texture._id,
            material: this.ding.material,
            published: this.ding.published
        };
        this.dingsService.saveDing(this.dingId, dg).subscribe(function (res) {
            _this.getDings();
            _this.editComplete = true;
            _this.dingEditModal.hide();
            setTimeout(function () {
                _this.editComplete = false;
            }, 3000);
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    DingsComponent.prototype.askDelete = function (event) {
        event.preventDefault();
        this.dingEditModal.hide();
        this.deleteProcess = true;
    };
    DingsComponent.prototype.deleteDing = function (event) {
        var _this = this;
        event.preventDefault();
        this.dingsService.deleteDing(this.dingId).subscribe(function (res) {
            _this.deleteProcess = false;
            _this.getDings();
            _this.dingEditModal.hide();
        }, function (err) {
            _this.deleteProcess = false;
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    return DingsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dingCreationModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], DingsComponent.prototype, "dingCreationModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dingEditModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
], DingsComponent.prototype, "dingEditModal", void 0);
DingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dings',
        template: __webpack_require__("../../../../../src/app/dings/dings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dings/dings.component.css"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__navigation_service__["a" /* NavigationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__dings_service__["a" /* DingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dings_service__["a" /* DingsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__textures_service__["a" /* TexturesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__textures_service__["a" /* TexturesService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__geometries_service__["a" /* GeometriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__geometries_service__["a" /* GeometriesService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__navigation_service__["a" /* NavigationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]) === "function" && _h || Object])
], DingsComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/dings.component.js.map

/***/ }),

/***/ "../../../../../src/app/document/document.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-default navbar-fixed-top topnav\" role=\"navigation\">\n    <div class=\"container topnav\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand topnav\" [routerLink]=\"['/']\">Easy Inside</a>\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a [routerLink]=\"['/spaces']\">Search</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/document']\">Document</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/contact']\">Contact</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container -->\n</nav>\n\n<div id=\"wrapper\" class=\"container toggled\">\n  <div id=\"sidebar-wrapper\">\n    <ul class=\"sidebar-nav\">\n      <li>\n        <a href=\"/document#GettingStarted\">Getting started</a>\n      </li>\n      <li>\n        <a href=\"#\">hohoho</a>\n      </li>\n      <li>\n        <a href=\"#\">hahaha</a>\n      </li>\n      <li>\n        <a href=\"#\">hihihi</a>\n      </li>\n    </ul>\n  </div>\n  <div id=\"page-content-wrapper\">\n    <button class=\"btn btn-link btn-toggle\"></button>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <h1>Getting started</h1>\n          <h2>Create account</h2>\n          <p>Easy Inside needs an account. You just use one of your accounts which you created aready in Google, Facebook, Twitter, Github, Instagram and Pinterest.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/document/document.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav.navbar {\n  margin-bottom: 0;\n}\n#wrapper {\n  padding-left: 0;\n  margin-top: 51px;\n  transition: all 0.5s ease;\n}\n#wrapper #sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #6f5499;\n  color: #fff;\n  transition: all 0.5s ease;\n}\n#wrapper #page-content-wrapper {\n  width: 100%;\n  position: absolute;\n  padding: 15px;\n}\n#wrapper #page-content-wrapper .btn-toggle {\n  border-radius: 20px;\n  background-color: #6f5499;\n  color: #fff;\n  text-decoration: none;\n  line-height: 25px;\n  font-family: 'Glyphicons Halflings';\n  position: fixed;\n  left: 5px;\n  top: 56px;\n  outline: none;\n  transition: all 0.5s ease;\n}\n#wrapper #page-content-wrapper .btn-toggle:focus {\n  outline: none;\n}\n#wrapper #page-content-wrapper .btn-toggle:before {\n  content: '\\E092';\n}\n#wrapper.toggled {\n  padding-left: 250px;\n}\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px;\n}\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px;\n}\n#wrapper.toggled #page-content-wrapper .btn-toggle {\n  left: 255px;\n}\n#wrapper.toggled #page-content-wrapper .btn-toggle:before {\n  content: '\\E091';\n}\n/* Sidebar Styles */\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 35px 0 0 0;\n  padding: 0;\n  list-style: none;\n}\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px;\n}\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #fff;\n}\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2);\n}\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n  text-decoration: none;\n}\n.sidebar-nav > .sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px;\n}\n.sidebar-nav > .sidebar-brand a {\n  color: #999;\n}\n.sidebar-nav > .sidebar-brand a:hover {\n  color: #fff;\n  background: none;\n}\n@media (min-width: 768px) {\n  #wrapper {\n    padding-left: 0;\n  }\n  #wrapper #sidebar-wrapper {\n    width: 0;\n  }\n  #wrapper #page-content-wrapper {\n    padding: 20px;\n    position: relative;\n  }\n  #wrapper.toggled {\n    padding-left: 250px;\n  }\n  #wrapper.toggled #sidebar-wrapper {\n    width: 250px;\n  }\n  #wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/document/document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentComponent = (function () {
    function DocumentComponent(elementRef) {
        this.elementRef = elementRef;
    }
    DocumentComponent.prototype.ngOnInit = function () {
    };
    DocumentComponent.prototype.ngAfterViewInit = function () {
        var navbarTop = this.elementRef.nativeElement.querySelector('.btn-toggle');
        navbarTop.addEventListener('click', function (t) {
            var that = t;
            return function (e) {
                e.preventDefault();
                that.elementRef.nativeElement.querySelector('#wrapper').classList.toggle('toggled');
            };
        }(this), false);
    };
    return DocumentComponent;
}());
DocumentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-document',
        template: __webpack_require__("../../../../../src/app/document/document.component.html"),
        styles: [__webpack_require__("../../../../../src/app/document/document.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], DocumentComponent);

var _a;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/document.component.js.map

/***/ }),

/***/ "../../../../../src/app/fennecfox.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FennecFox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
 // must 'npm install @types/three'!!!
var FennecFox = (function () {
    function FennecFox(selectedDing) {
        this.root = new __WEBPACK_IMPORTED_MODULE_0_three__["w" /* Object3D */]();
        this.root.name = 'foxroot';
        var mesh = new __WEBPACK_IMPORTED_MODULE_0_three__["s" /* Mesh */](selectedDing._geometry.geometry.clone(), selectedDing._material.clone());
        switch (selectedDing._id) {
            case '5909ef6f8a0d422b37dc5247':
                mesh.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_0_three__["r" /* Matrix4 */]().makeTranslation(-80, -36, -40));
                break;
            case '5909efc18a0d422b37dc5248':
                mesh.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_0_three__["r" /* Matrix4 */]().makeTranslation(0, -70, 0));
                break;
        }
        this.originalColor = selectedDing._material.color.clone();
        this.ding = mesh;
        this.ding.name = 'ding';
        this.ding._p = selectedDing.type;
        this.ding._t = selectedDing._idx;
        this.ding._n = selectedDing.name;
        this.root.ding = this.ding;
        this.namePanel = null;
        this.root.add(this.ding);
    }
    FennecFox.prototype.update = function () {
        if (this.ding._r === true) {
            this.ding.rotation.y += Math.PI / 2;
        }
        this.ding.matrixAutoUpdate = false;
        this.ding.updateMatrix();
    };
    FennecFox.prototype.setPosition = function (x, y, z) {
        this.ding.position.set(x, y, z);
    };
    FennecFox.prototype.setRotation = function (r) {
        this.ding._r = r;
    };
    FennecFox.prototype.setUser = function (uid, uname) {
        this.ding._userID = uid;
        if (uname) {
            this.setNamePanel(uname);
        }
    };
    FennecFox.prototype.clearUser = function () {
        this.ding._userID = void (0);
        this.clearNamePanel();
    };
    FennecFox.prototype.setFocus = function () {
        this.ding.material.color.setHex(0xe3983b);
    };
    FennecFox.prototype.blur = function () {
        //this.ding.material.color.setRGB(0.98, 0.98, 0.90);
        this.ding.material.color.copy(this.originalColor);
    };
    FennecFox.prototype.select = function () {
        this.ding.material.color.setHex(0xdd4477);
    };
    FennecFox.prototype.setNamePanel = function (uname) {
        if (this.namePanel) {
            this.clearNamePanel();
        }
        var canvas = this.buildNameCanvas(uname);
        var texture = new __WEBPACK_IMPORTED_MODULE_0_three__["G" /* Texture */](canvas);
        texture.needsUpdate = true;
        var material = new __WEBPACK_IMPORTED_MODULE_0_three__["F" /* SpriteMaterial */]({ map: texture });
        var sprite = new __WEBPACK_IMPORTED_MODULE_0_three__["E" /* Sprite */](material);
        sprite.position.set(this.ding.position.x, this.ding.position.y + 50, this.ding.position.z);
        sprite.scale.set(150, 150, 150);
        //sprite.position.normalize();
        this.namePanel = sprite;
        this.root.add(this.namePanel);
    };
    FennecFox.prototype.clearNamePanel = function () {
        if (this.namePanel === null) {
            return;
        }
        this.root.remove(this.namePanel);
        this.namePanel = null;
    };
    FennecFox.prototype.buildNameCanvas = function (txt) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var fontSize = 20;
        var lineHeight = 25;
        var fontFamily = 'Arial';
        var bgColor = 'rgba(0,0,255,0.3)';
        var fontColor = 'rgba(0,0,0,0.7)';
        var scale = 1.3;
        var fontH = lineHeight;
        var tmpWidth;
        var line = '';
        var words = txt.split(' ');
        var maxWidth = 300;
        var y = 1;
        canvas.width = 300;
        canvas.height = 300;
        context.translate(canvas.width / 2, canvas.height / 2);
        context.font = '600 ' + fontSize + 'px "' + fontFamily + '"';
        context.fillStyle = fontColor;
        //fontW = context.measureText(txt).width;
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var matrix = context.measureText(testLine);
            var testWidth = matrix.width;
            if (testWidth > maxWidth && n > 0) {
                tmpWidth = context.measureText(line).width;
                context.fillText(line, -tmpWidth / 2, lineHeight * (y - 1));
                line = words[n] + ' ';
                y += 1;
            }
            else {
                line = testLine;
            }
        }
        tmpWidth = context.measureText(line).width;
        context.fillText(line, -tmpWidth / 2, lineHeight * (y - 1));
        context.fillStyle = bgColor;
        context.fillRect(-maxWidth * scale / 2, -lineHeight, maxWidth * scale, fontH * y + 10);
        //context.fillRect(-fontW*scale/2,-fontH*scale/1.3,fontW*scale,fontH*scale);
        //context.fillText(txt, -fontW/2, 0);
        return canvas;
    };
    return FennecFox;
}());

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/fennecfox.js.map

/***/ }),

/***/ "../../../../../src/app/geometries.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeometriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeometriesService = (function () {
    function GeometriesService(http) {
        this.http = http;
    }
    GeometriesService.prototype.getGeometries = function (limit, page) {
        return this.http.get('/geometry/list/' + limit.toString() + '/' + page.toString()).map(function (res) { return res.json(); });
    };
    GeometriesService.prototype.getGeometriesByKeyword = function (limit, page, keyword) {
        return this.http.get('/geometry/search/' + limit.toString() + '/' + page.toString() + '/' + keyword).map(function (res) { return res.json(); });
    };
    GeometriesService.prototype.getAvailableGeometries = function () {
        return this.http.get('/geometry/availables').map(function (res) { return res.json(); });
    };
    GeometriesService.prototype.createGeometry = function (geometry) {
        return this.http.post('/geometry/create', geometry)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    GeometriesService.prototype.saveGeometry = function (id, geometry) {
        return this.http.put('/geometry/' + id, geometry)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    GeometriesService.prototype.deleteGeometry = function (id) {
        return this.http.delete('/geometry/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    GeometriesService.prototype.getGeometryById = function (id) {
        return this.http.get('/geometry/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    return GeometriesService;
}());
GeometriesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GeometriesService);

var _a;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/geometries.service.js.map

/***/ }),

/***/ "../../../../../src/app/geometries/geometries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/geometries/geometries.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-nav-private [status]=\"status\"></app-nav-private>\n\n    <div style=\"position:fixed;right:10px;top:10px;z-index:1001;\">\n        <alert type=\"success\" dismissible=\"true\" *ngIf=\"editComplete\">\n            <strong>Updated!</strong> You successfully change geometry data.\n        </alert>\n        <alert type=\"danger\" dismissible=\"true\" *ngIf=\"alert.visible\" (onClose)=\"onCloseAlert($event)\">\n            <strong>Error!</strong> {{alert.message}}\n        </alert>\n         <alert type=\"warning\" *ngIf=\"deleteProcess\">\n            <strong>Warning!</strong> This geometry will be deleted permanently. Are you sure?\n            <button type=\"button\" class=\"btn btn-primary btn-xs\" style=\"margin-left:20px;\" (click)=\"deleteGeometry($event)\">Yes</button>\n            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteProcess=false\">No</button>\n        </alert>\n    </div>\n\n    <div id=\"page-wrapper\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"page-header\">Geometries</h1>\n            </div>\n            <!-- /.col-lg-12 -->\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        DataTables Advanced Tables\n                        <button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"float:right;margin-top:-5px;\" (click)=\"openCreateModal($event)\">\n                          Create A Geometry\n                        </button>\n                    </div>\n                    <!-- /.panel-heading -->\n                    <div class=\"panel-body\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group\">\n                                    <label style=\"display:block;\">Show entries</label>\n                                    <div class=\"btn-group\">\n                                        <label class=\"btn btn-default\" [(ngModel)]=\"limit\" btnRadio=\"5\" (click)=\"onClickLimit($event)\" uncheckable>5</label>\n                                        <label class=\"btn btn-default\" [(ngModel)]=\"limit\" btnRadio=\"10\" (click)=\"onClickLimit($event)\"  uncheckable>10</label>\n                                        <label class=\"btn btn-default\" [(ngModel)]=\"limit\" btnRadio=\"50\" (click)=\"onClickLimit($event)\"  uncheckable>50</label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\" for=\"inputSearch\">Search</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"inputSearch\" (keypress)=\"onChangeKeyword($event)\">\n                                </div>\n                            </div>\n                        </div>\n                        <table width=\"100%\" class=\"table table-striped table-bordered table-hover\" id=\"geometrylistTable\">\n                            <thead>\n                                <tr>\n                                    <th>_Id</th>\n                                    <th>Name</th>\n                                    <th>Data</th>\n                                    <th>Published</th>\n                                    <th>Last Modified</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let g of geometries; let index=index; let odd=odd; let even=even; let last=last;\" [ngClass]=\"{odd: odd, even: even}\">\n                                    <td class=\"preCell\"><a href=\"#\" (click)=\"openEditModal($event, g._id)\">{{g._id}}</a></td>\n                                    <td>{{g.name}}</td>\n                                    <td>{{g.data.substr(0, 50)}}</td>\n                                    <td style=\"text-align:center;\"><span [ngClass]=\"{'glyphicon':true, 'glyphicon-ok': g.published, 'glyphicon-remove': !g.published}\"><!--{{g.published}}--></span></td>\n                                    <td>{{g.modified | convertTimezone:[timeZone, timeFormat]}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <div>Showing {{pageFrom}} to {{pageTo}} of {{total}} entries</div>\n                        <pagination [(ngModel)]=\"page\" [totalItems]=\"total\" [itemsPerPage]=\"limit\" [maxSize]=\"5\" [boundaryLinks]=\"true\" [rotate]=\"false\" (pageChanged)=\"pageChanged($event)\"></pagination>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"modal fade\" bsModal #geometryCreationModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">New Geometry</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"geometryCreationModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form id=\"newgeometry\" role=\"form\" [formGroup]=\"newGeometryForm\" (ngSubmit)=\"createGeometry(newGeometryForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!newGeometryForm.controls['name'].valid && newGeometryForm.controls['name'].touched}\">\n                <label>Name</label>\n                <input class=\"form-control\" placeholder=\"Enter geometry name\" [formControl]=\"newGeometryForm.controls['name']\">\n                <div *ngIf=\"newGeometryForm.controls['name'].hasError('required') && newGeometryForm.controls['name'].touched\" class=\"alert alert-danger\">\n                  You must include a geometry name.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!newGeometryForm.controls['data'].valid && newGeometryForm.controls['data'].touched}\">\n                <label>Data</label>\n                <input class=\"form-control\" placeholder=\"THREE.BoxGeometry(10, 10, 10)\" [formControl]=\"newGeometryForm.controls['data']\">\n                <div *ngIf=\"newGeometryForm.controls['data'].hasError('required') && newGeometryForm.controls['data'].touched\" class=\"alert alert-danger\">\n                  You must include a geometry data.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!newGeometryForm.valid\">\n                  Create\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #geometryEditModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Edit Geometry</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"geometryEditModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form id=\"editgeometry\" role=\"form\" [formGroup]=\"editGeometryForm\" (ngSubmit)=\"editGeometry(editGeometryForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                  <label>Geometry ID</label>\n                  <p class=\"form-control-static\">{{geometry?._id}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!editGeometryForm.controls['name'].valid && editGeometryForm.controls['name'].touched}\">\n                <label>Name</label>\n                <input class=\"form-control\" placeholder=\"Enter geometry name\" [formControl]=\"editGeometryForm.controls['name']\">\n                <div *ngIf=\"editGeometryForm.controls['name'].hasError('required') && editGeometryForm.controls['name'].touched\" class=\"alert alert-danger\">\n                  You must include a geometry name.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!editGeometryForm.controls['data'].valid && editGeometryForm.controls['data'].touched}\">\n                <label>Data</label>\n                <input class=\"form-control\" placeholder=\"Enter geometry data\" [formControl]=\"editGeometryForm.controls['data']\">\n                <div *ngIf=\"editGeometryForm.controls['data'].hasError('required') && editGeometryForm.controls['data'].touched\" class=\"alert alert-danger\">\n                  You must include a geometry data.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Show Public</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                          {{published}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeGeometryStatus($event, 'published', true)\">Yes</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeGeometryStatus($event, 'published', false)\">No</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!editGeometryForm.valid\">\n                  Save\n                </button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"askDelete($event)\">\n                  Delete\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/geometries/geometries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeometriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geometries_service__ = __webpack_require__("../../../../../src/app/geometries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GeometriesComponent = (function () {
    function GeometriesComponent(elementRef, geometriesService, navigationService, fb) {
        var _this = this;
        this.elementRef = elementRef;
        this.geometriesService = geometriesService;
        this.navigationService = navigationService;
        this.geometries = [];
        this.limit = '10';
        this.page = 1;
        this.timeZone = '+01:00';
        this.timeFormat = 'DD-MM-YYYY HH:mm:ss';
        this.alert = {
            visible: false,
            message: ''
        };
        this.geometry = {};
        this.published = 'no';
        this.editComplete = false;
        this.deleteProcess = false;
        navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
        });
        navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
        });
        this.newGeometryForm = fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern('[0-9A-Za-z ]*')]],
            'data': ["THREE.BoxGeometry(10, 10, 10)", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]]
        });
        this.editGeometryForm = fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern('[0-9A-Za-z ]*')]],
            'data': ["THREE.BoxGeometry(10, 10, 10)", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]]
        });
    }
    GeometriesComponent.prototype.ngOnInit = function () {
        this.navigationService.setNavigationStatus('maker');
        this.getGeometries();
    };
    GeometriesComponent.prototype.ngAfterViewInit = function () {
    };
    GeometriesComponent.prototype.setPage = function (p) {
        this.page = p;
    };
    GeometriesComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.getGeometries();
    };
    GeometriesComponent.prototype.onClickLimit = function (event) {
        this.getGeometries();
    };
    GeometriesComponent.prototype.onChangeKeyword = function (event) {
        if (event.keyCode == 13) {
            if (event.srcElement.value != '') {
                this.keyword = event.srcElement.value;
            }
            else {
                this.keyword = '';
            }
            this.page = 1;
            this.getGeometries();
        }
    };
    GeometriesComponent.prototype.getGeometries = function () {
        var _this = this;
        if (!this.keyword) {
            this.geometriesService.getGeometries(parseInt(this.limit), this.page - 1).subscribe(function (res) {
                _this.geometries = res.geometries;
                _this.total = res.total;
                _this.page = res.page + 1;
                _this.pageFrom = (_this.page - 1) * parseInt(_this.limit) + 1;
                var pt = _this.pageFrom + parseInt(_this.limit) - 1;
                _this.pageTo = (pt > _this.total) ? _this.total : pt;
            });
        }
        else {
            this.geometriesService.getGeometriesByKeyword(parseInt(this.limit), this.page - 1, this.keyword).subscribe(function (res) {
                _this.geometries = res.geometries;
                _this.keyword = res.keyword;
                _this.total = res.total;
                _this.page = res.page + 1;
                _this.pageFrom = (_this.page - 1) * parseInt(_this.limit) + 1;
                var pt = _this.pageFrom + parseInt(_this.limit) - 1;
                _this.pageTo = (pt > _this.total) ? _this.total : pt;
            });
        }
    };
    GeometriesComponent.prototype.openCreateModal = function (event) {
        event.preventDefault();
        this.geometryCreationModal.show();
    };
    GeometriesComponent.prototype.createGeometry = function (value) {
        var _this = this;
        this.geometriesService.createGeometry(value).subscribe(function (res) {
            _this.getGeometries();
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
        this.geometryCreationModal.hide();
        this.newGeometryForm.reset();
    };
    GeometriesComponent.prototype.openEditModal = function (event, gId) {
        var _this = this;
        event.preventDefault();
        this.geometriesService.getGeometryById(gId).subscribe(function (res) {
            _this.geometry = res;
            _this.geometryId = res._id;
            _this.editGeometryForm.controls['name'].setValue(_this.geometry.name, { onlySelf: true });
            _this.editGeometryForm.controls['data'].setValue(_this.geometry.data, { onlySelf: true });
            _this.published = _this.geometry.published ? 'yes' : 'no';
            _this.geometryEditModal.show();
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    GeometriesComponent.prototype.changeGeometryStatus = function (event, property, value) {
        event.preventDefault();
        this.geometry[property] = value;
        this.published = this.geometry.published ? 'yes' : 'no';
        this.editGeometryForm.updateValueAndValidity();
    };
    GeometriesComponent.prototype.editGeometry = function (value) {
        var _this = this;
        var gm = {
            name: value.name,
            data: value.data,
            published: this.geometry.published
        };
        this.geometriesService.saveGeometry(this.geometryId, gm).subscribe(function (res) {
            _this.getGeometries();
            _this.editComplete = true;
            _this.geometryEditModal.hide();
            setTimeout(function () {
                _this.editComplete = false;
            }, 3000);
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    GeometriesComponent.prototype.askDelete = function (event) {
        event.preventDefault();
        this.geometryEditModal.hide();
        this.deleteProcess = true;
    };
    GeometriesComponent.prototype.deleteGeometry = function (event) {
        var _this = this;
        event.preventDefault();
        this.geometriesService.deleteGeometry(this.geometryId).subscribe(function (res) {
            _this.deleteProcess = false;
            _this.getGeometries();
            _this.geometryEditModal.hide();
        }, function (err) {
            _this.deleteProcess = false;
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    return GeometriesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('geometryCreationModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], GeometriesComponent.prototype, "geometryCreationModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('geometryEditModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
], GeometriesComponent.prototype, "geometryEditModal", void 0);
GeometriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-geometries',
        template: __webpack_require__("../../../../../src/app/geometries/geometries.component.html"),
        styles: [__webpack_require__("../../../../../src/app/geometries/geometries.component.css"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__navigation_service__["a" /* NavigationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__geometries_service__["a" /* GeometriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__geometries_service__["a" /* GeometriesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__navigation_service__["a" /* NavigationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _f || Object])
], GeometriesComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/geometries.component.js.map

/***/ }),

/***/ "../../../../../src/app/graph-search.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__astar__ = __webpack_require__("../../../../../src/app/astar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graph__ = __webpack_require__("../../../../../src/app/graph.ts");


var GraphSearch = (function () {
    function GraphSearch() {
        this.astar = new __WEBPACK_IMPORTED_MODULE_0__astar__["a" /* Astar */]();
        this.optimized = false;
    }
    GraphSearch.prototype.init = function (nodes) {
        this.graph = new __WEBPACK_IMPORTED_MODULE_1__graph__["a" /* Graph */](nodes, {});
    };
    GraphSearch.prototype.setPoint = function (x1, y1, x2, y2) {
        this.startPoint = this.graph.grid[x1][y1];
        this.endPoint = this.graph.grid[x2][y2];
    };
    GraphSearch.prototype.set = function (floorData, deskData, XLength, YLength, usePath, callback) {
        this.xLength = XLength;
        this.yLength = YLength;
        var xHalf = Math.floor(this.xLength / 2);
        var yHalf = Math.floor(this.yLength / 2);
        this.nodes = [];
        var nodeRow;
        for (var x = 0; x < this.xLength; x++) {
            nodeRow = [];
            for (var y = 0; y < this.yLength; y++) {
                nodeRow.push(0); // Prevented position like as Wall
            }
            this.nodes.push(nodeRow);
        }
        if (usePath) {
            for (var i = 0; i < floorData.length; i++) {
                this.nodes[floorData[i].x + xHalf][floorData[i].z + yHalf] = (floorData[i].p === 2) ? 1 : 0;
            }
        }
        else {
            for (var i = 0; i < floorData.length; i++) {
                this.nodes[floorData[i].x + xHalf][floorData[i].z + yHalf] = floorData[i].p;
            }
        }
        var fW, tW, fH, tH, typeArr, minW, maxW, minH, maxH;
        for (var i = 0; i < deskData.length; i++) {
            if (deskData[i].p == 'desk') {
                if (deskData[i].n.indexOf('160') > -1) {
                    if (deskData[i].r == true) {
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - 5;
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + 3;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - 8;
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + 8;
                    }
                    else {
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - 8;
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + 8;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - 5;
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + 3;
                    }
                }
                else if (deskData[i].n.indexOf('200') > -1) {
                    if (deskData[i].r == true) {
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - 10;
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + 10;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - 20;
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + 20;
                    }
                    else {
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - 20;
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + 20;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - 10;
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + 10;
                    }
                }
            }
            else {
                typeArr = deskData[i].n.substr(deskData[i].n.indexOf(' ')).split('x');
                if (deskData[i].r == true) {
                    if (typeArr[0] % 2 === 0) {
                        if (typeArr[1] % 2 === 0) {
                            minW = Math.floor(typeArr[1] / 2);
                            maxW = minW;
                            minH = Math.floor(typeArr[0] / 2);
                            maxH = minH;
                        }
                        else {
                            minW = Math.floor(typeArr[1] / 2);
                            maxW = minW + 1;
                            minH = Math.floor(typeArr[0] / 2);
                            maxH = minH;
                        }
                    }
                    else {
                        if (typeArr[1] % 2 === 0) {
                            minW = Math.floor(typeArr[1] / 2);
                            maxW = minW;
                            minH = Math.floor(typeArr[0] / 2);
                            maxH = minH + 1;
                        }
                        else {
                            minW = Math.floor(typeArr[1] / 2);
                            maxW = minW + 1;
                            minH = Math.floor(typeArr[0] / 2);
                            maxH = minH + 1;
                        }
                    }
                    fW = Math.ceil(deskData[i].x / 10) + xHalf - (minW * 5);
                    tW = Math.ceil(deskData[i].x / 10) + xHalf + (maxW * 5);
                    fH = Math.ceil(deskData[i].z / 10) + yHalf - (minH * 5);
                    tH = Math.ceil(deskData[i].z / 10) + yHalf + (maxH * 5);
                }
                else {
                    if (typeArr[0] % 2 === 0) {
                        minW = Math.floor(typeArr[0] / 2);
                        maxW = minW;
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - (minW * 5);
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + (maxW * 5);
                    }
                    else {
                        minW = Math.floor(typeArr[0] / 2);
                        maxW = minW + 1;
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - (minW * 5);
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + (maxW * 5);
                    }
                    if (typeArr[1] % 2 === 0) {
                        minH = Math.floor(typeArr[1] / 2);
                        maxH = minH;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - (minH * 5);
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + (maxH * 5);
                    }
                    else {
                        minH = Math.floor(typeArr[1] / 2);
                        maxH = minH + 1;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - (minH * 5);
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + (maxH * 5);
                    }
                }
            }
            for (var x = fW; x < tW; x++) {
                for (var y_1 = fH; y_1 < tH; y_1++) {
                    this.nodes[x][y_1] = 0; // Prevented position like as Wall
                }
            }
        }
        this.init(this.nodes);
        callback();
    };
    GraphSearch.prototype.getNearestPoint = function (x1, y1) {
        var x, y, tmpLmt;
        for (var l = 0; l < 50; l++) {
            //console.log(l);
            x = (x1 - l >= 0) ? x1 - l : 0;
            tmpLmt = (y1 + l < this.yLength) ? y1 + l : this.yLength - 1;
            for (y = (y1 - l >= 0) ? y1 - l : 0; y <= tmpLmt; y++) {
                //console.log('part1:',x, y, y1+l);
                if (this.graph.grid[x][y].weight > 0) {
                    return { "x": x, "y": y };
                }
            }
            y = (y1 - l >= 0) ? y1 - l : 0;
            tmpLmt = (x1 + l < this.xLength) ? x1 + l : this.xLength;
            for (x = (x1 - l + 1 >= 0) ? x1 - l + 1 : 0; x < tmpLmt; x++) {
                //console.log(x, y);
                if (this.graph.grid[x][y].weight > 0) {
                    return { "x": x, "y": y };
                }
            }
            y = (y1 + l < this.yLength) ? y1 + l : this.yLength - 1;
            tmpLmt = (x1 + l < this.xLength) ? x1 + l : this.xLength;
            for (x = (x1 - l + 1 >= 0) ? x1 - l + 1 : 0; x < tmpLmt; x++) {
                //console.log(x, y);
                if (this.graph.grid[x][y].weight > 0) {
                    return { "x": x, "y": y };
                }
            }
            x = (x1 + l < this.xLength) ? x1 + l : this.xLength - 1;
            tmpLmt = (y1 + l < this.yLength) ? y1 + l : this.yLength - 1;
            for (y = (y1 - l >= 0) ? y1 - l : 0; y <= tmpLmt; y++) {
                //console.log(x, y);
                if (this.graph.grid[x][y].weight > 0) {
                    return { "x": x, "y": y };
                }
            }
        }
        return false;
    };
    return GraphSearch;
}());

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/graph-search.js.map

/***/ }),

/***/ "../../../../../src/app/graph.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Graph; });
/* unused harmony export GridNode */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__astar__ = __webpack_require__("../../../../../src/app/astar.ts");

var Graph = (function () {
    function Graph(gridIn, options) {
        this.astar = new __WEBPACK_IMPORTED_MODULE_0__astar__["a" /* Astar */]();
        this.nodes = [];
        this.diagonal = !!options.diagonal;
        this.grid = [];
        for (var x = 0; x < gridIn.length; x++) {
            this.grid[x] = [];
            for (var y = 0, row = gridIn[x]; y < row.length; y++) {
                var node = new GridNode(x, y, row[y]);
                this.grid[x][y] = node;
                this.nodes.push(node);
            }
        }
        this.init();
    }
    Graph.prototype.init = function () {
        this.dirtyNodes = [];
        for (var i = 0; i < this.nodes.length; i++) {
            this.astar.cleanNode(this.nodes[i]);
        }
    };
    Graph.prototype.cleanDirty = function () {
        for (var i = 0; i < this.dirtyNodes.length; i++) {
            this.astar.cleanNode(this.dirtyNodes[i]);
        }
        this.dirtyNodes = [];
    };
    Graph.prototype.markDirty = function (node) {
        this.dirtyNodes.push(node);
    };
    Graph.prototype.neighbors = function (node) {
        var ret = [], x = node.x, y = node.y, grid = this.grid;
        // West
        if (grid[x - 1] && grid[x - 1][y]) {
            ret.push(grid[x - 1][y]);
        }
        // East
        if (grid[x + 1] && grid[x + 1][y]) {
            ret.push(grid[x + 1][y]);
        }
        // South
        if (grid[x] && grid[x][y - 1]) {
            ret.push(grid[x][y - 1]);
        }
        // North
        if (grid[x] && grid[x][y + 1]) {
            ret.push(grid[x][y + 1]);
        }
        if (this.diagonal) {
            // Southwest
            if (grid[x - 1] && grid[x - 1][y - 1]) {
                ret.push(grid[x - 1][y - 1]);
            }
            // Southeast
            if (grid[x + 1] && grid[x + 1][y - 1]) {
                ret.push(grid[x + 1][y - 1]);
            }
            // Northwest
            if (grid[x - 1] && grid[x - 1][y + 1]) {
                ret.push(grid[x - 1][y + 1]);
            }
            // Northeast
            if (grid[x + 1] && grid[x + 1][y + 1]) {
                ret.push(grid[x + 1][y + 1]);
            }
        }
        return ret;
    };
    Graph.prototype.toString = function () {
        var graphString = [], nodes = this.grid, // when using grid
        rowDebug, row, y, l;
        for (var x = 0, len = nodes.length; x < len; x++) {
            rowDebug = [];
            row = nodes[x];
            for (y = 0, l = row.length; y < l; y++) {
                rowDebug.push(row[y].weight);
            }
            graphString.push(rowDebug.join(" "));
        }
        return graphString.join("\n");
    };
    return Graph;
}());

var GridNode = (function () {
    function GridNode(x, y, weight) {
        this.x = x;
        this.y = y;
        this.weight = weight;
    }
    GridNode.prototype.toString = function () {
        return "[" + this.x + " " + this.y + "]";
    };
    ;
    GridNode.prototype.getCost = function () {
        return this.weight;
    };
    ;
    GridNode.prototype.isWall = function () {
        return this.weight === 0;
    };
    return GridNode;
}());

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/graph.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".notice-area {\n    position: fixed;\n    left: 10px;\n    top: 60px;\n    z-index: 1001;\n}\n\n.alert {\n    font-weight: 400;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notice-area\">\n    <!--<alert type=\"info\" dismissible=\"true\">\n        <h4>Thanks for all in Maker Faire Berlin 2017!</h4>\n        <p>As you may know already, now this site is under construction. not perfect yet.</p>\n        <p>Sorry for making you wait.</p>\n    </alert>-->\n    <alert type=\"success\" dismissible=\"true\">\n        <strong>Google OAuth!</strong> Now you can use Google account. Other accounts will be able to use as soon as possible.\n    </alert>\n    <alert type=\"info\" dismissible=\"true\">\n        <strong>Showcase!</strong> You can see the map of <a href=\"/map/58fd302d324a9bb2b1b5b95a\">Maker Faire Berlin 2017</a>.\n    </alert>\n</div>\n\n<!-- Navigation -->\n<nav class=\"navbar navbar-default navbar-fixed-top topnav\" role=\"navigation\">\n    <div class=\"container topnav\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand topnav\" [routerLink]=\"['/']\">Easy Inside</a>\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a [routerLink]=\"['/spaces']\">Search</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/document']\">Document</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/contact']\">Contact</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container -->\n</nav>\n\n<!-- Header -->\n<a name=\"about\"></a>\n<div class=\"intro-header\">\n    <div class=\"container\">\n\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"intro-message\">\n                    <h1>Enjoy Your Space</h1>\n                    <h3>If there is a map for your house, garden or office, what can you do with the map?</h3>\n                    <hr class=\"intro-divider\">\n                    <h5>Choose a Login Method</h5>\n                    <ul class=\"list-inline intro-social-buttons\">\n                        <li>\n                            <!--<a href=\"/auth/google\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-google-plus fa-fw\"></i> <span class=\"network-name\">Google</span></a>-->\n                            <a href=\"/auth/google\" class=\"btn btn-social-icon btn-google btn-lg\"><i class=\"fa fa-google\"></i></a>\n                        </li>\n                        <li>\n                            <!--<a href=\"/auth/facebook\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-facebook fa-fw\"></i> <span class=\"network-name\">Facebook</span></a>-->\n                            <a href=\"/auth/facebook\" class=\"btn btn-social-icon btn-facebook btn-lg\"><i class=\"fa fa-facebook\"></i></a>\n                        </li>\n                        <li>\n                            <!--<a href=\"/auth/twitter\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-twitter fa-fw\"></i> <span class=\"network-name\">Twitter</span></a>-->\n                            <a href=\"/auth/twitter\" class=\"btn btn-social-icon btn-twitter btn-lg\"><i class=\"fa fa-twitter\"></i></a>\n                        </li>\n                        <li>\n                            <!--<a href=\"/auth/github\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-github fa-fw\"></i> <span class=\"network-name\">Github</span></a>-->\n                            <a href=\"/auth/github\" class=\"btn btn-social-icon btn-github btn-lg\"><i class=\"fa fa-github\"></i></a>\n                        </li>\n                        <li>\n                            <!--<a href=\"/auth/instagram\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-instagram fa-fw\"></i> <span class=\"network-name\">Instagram</span></a>-->\n                            <a href=\"/auth/instagram\" class=\"btn btn-social-icon btn-instagram btn-lg\"><i class=\"fa fa-instagram\"></i></a>\n                        </li>\n                        <li>\n                            <!--<a href=\"/auth/pinterest\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-pinterest fa-fw\"></i> <span class=\"network-name\">Pinterest</span></a>-->\n                            <a href=\"/auth/pinterest\" class=\"btn btn-social-icon btn-pinterest btn-lg\"><i class=\"fa fa-pinterest\"></i></a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <!-- /.container -->\n\n</div>\n<!-- /.intro-header -->\n\n<!-- Page Content -->\n\n\t<a  name=\"services\"></a>\n    <div class=\"content-section-a\">\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-5 col-sm-6\">\n                    <hr class=\"section-heading-spacer\">\n                    <div class=\"clearfix\"></div>\n                    <h2 class=\"section-heading\">Help your colleagues</h2>\n                    <p class=\"lead\">Do you know where all your colleagues are? Maybe your colleagues want to know you also. Share your office map with colleagues.</p>\n                </div>\n                <div class=\"col-lg-5 col-lg-offset-2 col-sm-6\">\n                    <img class=\"img-responsive\" src=\"img/ipad.png\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-5 col-sm-6\">\n                    <img class=\"img-responsive\" src=\"img/ipad.png\" alt=\"\">\n                </div>\n                <div class=\"col-lg-5 col-lg-offset-2 col-sm-6\">\n                    <hr class=\"section-heading-spacer\">\n                    <div class=\"clearfix\"></div>\n                    <h2 class=\"section-heading\">Help your guests</h2>\n                    <p class=\"lead\">Make your guest to find your space. Your map has navigation. People can search every locations and routes.</p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-5 col-sm-6\">\n                    <hr class=\"section-heading-spacer\">\n                    <div class=\"clearfix\"></div>\n                    <h2 class=\"section-heading\">Make your robot</h2>\n                    <p class=\"lead\">Robot is hard? No. There are tutorials for making robot world easy. You can make your space as robot world.</p>\n                </div>\n                <div class=\"col-lg-5 col-lg-offset-2 col-sm-6\">\n                    <img class=\"img-responsive\" src=\"img/ipad.png\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-5 col-sm-6\">\n                    <img class=\"img-responsive\" src=\"img/ipad.png\" alt=\"\">\n                </div>\n                <div class=\"col-lg-5 col-lg-offset-2 col-sm-6\">\n                    <hr class=\"section-heading-spacer\">\n                    <div class=\"clearfix\"></div>\n                    <h2 class=\"section-heading\">Make your future</h2>\n                    <p class=\"lead\">You can make a gardening robot or you can change an old lawn mower to move by itself. How about cleaning robot or coffee delivering robot? Yes, you can make it.</p>\n                </div>\n            </div>\n            \n        </div>\n        <!-- /.container -->\n\n    </div>\n    <!-- /.content-section-a -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css"), __webpack_require__("../../../../../src/assets/bootstrap/landingpage/css/landing-page.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/indoor-location-converter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IndoorLocationConverter; });
/* unused harmony export GeoUnit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CanvasUnit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_proj4__ = __webpack_require__("../../../../proj4/lib/index.js");
//import * as proj4 from 'proj4';

var proj4 = __WEBPACK_IMPORTED_MODULE_0_proj4__["a" /* default */];
var IndoorLocationConverter = (function () {
    function IndoorLocationConverter() {
        this.map = {
            geo: {
                zeroPoint: {
                    longitude: null,
                    latitude: null
                },
                horizontalPoint: {
                    longitude: null,
                    latitude: null
                },
                verticalPoint: {
                    longitude: null,
                    latitude: null
                }
            },
            cartesian: {
                zeroPoint: null,
                horizontalPoint: null,
                verticalPoint: null,
                virtualHorizontalPoint: null,
                virtualVerticalPoint: null,
                rotateDegreeForTransform: null,
                x: {
                    length: null
                },
                y: {
                    length: null
                },
                objectScale: {
                    width: null,
                    height: null
                },
                getRotationDeg: function (p1, p2, p3) {
                    var p12 = Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2)), p13 = Math.sqrt(Math.pow((p1.x - p3.x), 2) + Math.pow((p1.y - p3.y), 2)), p23 = Math.sqrt(Math.pow((p2.x - p3.x), 2) + Math.pow((p2.y - p3.y), 2)), resultDegree = Math.acos(((Math.pow(p12, 2)) + (Math.pow(p13, 2)) - (Math.pow(p23, 2))) / (2 * p12 * p13)) * 180 / Math.PI;
                    return resultDegree;
                },
                getRotationRad: function (p1, p2, p3) {
                    var p12 = Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2)), p13 = Math.sqrt(Math.pow((p1.x - p3.x), 2) + Math.pow((p1.y - p3.y), 2)), p23 = Math.sqrt(Math.pow((p2.x - p3.x), 2) + Math.pow((p2.y - p3.y), 2)), resultRadian = Math.acos(((Math.pow(p12, 2)) + (Math.pow(p13, 2)) - (Math.pow(p23, 2))) / (2 * p12 * p13));
                    return resultRadian;
                },
                getDistance: function (p1, p2) {
                    var xdf = p2.x - p1.x, ydf = p2.y - p1.y;
                    return Math.sqrt(Math.pow(xdf, 2) + Math.pow(ydf, 2));
                }
            },
            array: {
                x: {
                    min: null,
                    max: null,
                    length: null,
                    reverseFactor: 1
                },
                y: {
                    min: null,
                    max: null,
                    length: null,
                    reverseFactor: 1
                }
            },
            canvas: {
                x: {
                    min: null,
                    max: null,
                    length: null,
                    reverseFactor: 1
                },
                y: {
                    min: null,
                    max: null,
                    length: null,
                    reverseFactor: 1
                }
            }
        };
    }
    IndoorLocationConverter.prototype.setGeoMap = function (zeroPointLongitude, zeroPointLatitude, horizontalPointLongitude, horizontalPointLatitude, verticalPointLongitude, verticalPointLatitude) {
        var gps = proj4.Proj('EPSG:4326'); //source coordinates will be in Longitude/Latitude, WGS84
        var cat = proj4.Proj('EPSG:3785'); //destination coordinates in meters, global spherical mercators projection, see http://spatialreference.org/ref/epsg/3785/
        this.map.geo.zeroPoint.longitude = zeroPointLongitude;
        this.map.geo.zeroPoint.latitude = zeroPointLatitude;
        this.map.geo.horizontalPoint.longitude = horizontalPointLongitude;
        this.map.geo.horizontalPoint.latitude = horizontalPointLatitude;
        this.map.geo.verticalPoint.longitude = verticalPointLongitude;
        this.map.geo.verticalPoint.latitude = verticalPointLatitude;
        this.map.cartesian.zeroPoint = proj4.transform(gps, cat, proj4.toPoint([this.map.geo.zeroPoint.longitude, this.map.geo.zeroPoint.latitude]));
        this.map.cartesian.horizontalPoint = proj4.transform(gps, cat, proj4.toPoint([this.map.geo.horizontalPoint.longitude, this.map.geo.horizontalPoint.latitude]));
        this.map.cartesian.verticalPoint = proj4.transform(gps, cat, proj4.toPoint([this.map.geo.verticalPoint.longitude, this.map.geo.verticalPoint.latitude]));
        var parallelRotationDirection = -1; // -1 : clock wise, 1: anti clock wise
        var tmpParallelPoint = { x: this.map.cartesian.zeroPoint.x + parallelRotationDirection, y: this.map.cartesian.zeroPoint.y };
        this.map.cartesian.rotateDegreeForTransform = parallelRotationDirection * this.map.cartesian.getRotationRad(this.map.cartesian.zeroPoint, this.map.cartesian.horizontalPoint, tmpParallelPoint);
        var vX = this.map.cartesian.verticalPoint.x - this.map.cartesian.zeroPoint.x, vY = this.map.cartesian.verticalPoint.y - this.map.cartesian.zeroPoint.y, rX = vX * Math.cos(this.map.cartesian.rotateDegreeForTransform) - vY * Math.sin(this.map.cartesian.rotateDegreeForTransform), rY = vX * Math.sin(this.map.cartesian.rotateDegreeForTransform) + vY * Math.cos(this.map.cartesian.rotateDegreeForTransform);
        this.map.cartesian.virtualVerticalPoint = { x: rX + this.map.cartesian.zeroPoint.x, y: rY + this.map.cartesian.zeroPoint.y };
        vX = this.map.cartesian.horizontalPoint.x - this.map.cartesian.zeroPoint.x;
        vY = this.map.cartesian.horizontalPoint.y - this.map.cartesian.zeroPoint.y;
        rX = vX * Math.cos(this.map.cartesian.rotateDegreeForTransform) - vY * Math.sin(this.map.cartesian.rotateDegreeForTransform);
        rY = vX * Math.sin(this.map.cartesian.rotateDegreeForTransform) + vY * Math.cos(this.map.cartesian.rotateDegreeForTransform);
        this.map.cartesian.virtualHorizontalPoint = { x: rX + this.map.cartesian.zeroPoint.x, y: rY + this.map.cartesian.zeroPoint.y };
        var xMin = Math.min(this.map.cartesian.virtualHorizontalPoint.x, this.map.cartesian.zeroPoint.x), xMax = Math.max(this.map.cartesian.virtualHorizontalPoint.x, this.map.cartesian.zeroPoint.x), yMin = Math.min(this.map.cartesian.virtualVerticalPoint.y, this.map.cartesian.zeroPoint.y), yMax = Math.max(this.map.cartesian.virtualVerticalPoint.y, this.map.cartesian.zeroPoint.y);
        this.map.cartesian.x.length = xMax - xMin;
        this.map.cartesian.y.length = yMax - yMin;
    };
    IndoorLocationConverter.prototype.setArrayMap = function (minX, maxX, minY, maxY, reverseFactorX, reverseFactorY) {
        this.map.array.x.min = minX;
        this.map.array.x.max = maxX;
        this.map.array.y.min = minY;
        this.map.array.y.max = maxY;
        this.map.array.x.reverseFactor = reverseFactorX;
        this.map.array.y.reverseFactor = reverseFactorY;
        this.map.array.x.length = this.map.array.x.max - this.map.array.x.min + 1;
        this.map.array.y.length = this.map.array.y.max - this.map.array.y.min + 1;
        this.map.cartesian.objectScale.width = this.map.array.x.length * 0.1; // meter unit
        this.map.cartesian.objectScale.height = this.map.array.y.length * 0.1; // meter unit
    };
    IndoorLocationConverter.prototype.setCanvasMap = function (minX, maxX, minY, maxY, reverseFactorX, reverseFactorY) {
        this.map.canvas.x.min = minX;
        this.map.canvas.x.max = maxX;
        this.map.canvas.y.min = minY;
        this.map.canvas.y.max = maxY;
        this.map.canvas.y.reverseFactor = reverseFactorX;
        this.map.canvas.y.reverseFactor = reverseFactorY;
        this.map.canvas.x.length = this.map.canvas.x.max - this.map.canvas.x.min;
        this.map.canvas.y.length = this.map.canvas.y.max - this.map.canvas.y.min;
    };
    return IndoorLocationConverter;
}());

var GeoUnit = (function () {
    function GeoUnit(longitude, latitude, altitude, indoorLocationConverter) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.altitude = altitude;
        this.OLC = indoorLocationConverter;
    }
    GeoUnit.prototype.toArray = function () {
        var canvasUnit = this.toCanvas();
        return canvasUnit.toArray();
    };
    GeoUnit.prototype.toCanvas = function () {
        var gps = proj4.Proj('EPSG:4326'); //source coordinates will be in Longitude/Latitude, WGS84
        var cat = proj4.Proj('EPSG:3785'); //destination coordinates in meters, global spherical mercators projection, see http://spatialreference.org/ref/epsg/3785/
        var ratioX = this.OLC.map.canvas.x.length / this.OLC.map.cartesian.x.length, ratioY = this.OLC.map.canvas.y.length / this.OLC.map.cartesian.y.length, cP = proj4.transform(gps, cat, proj4.toPoint([this.longitude, this.latitude])), vX = cP.x - this.OLC.map.cartesian.zeroPoint.x, vY = cP.y - this.OLC.map.cartesian.zeroPoint.y, rX = vX * Math.cos(this.OLC.map.cartesian.rotateDegreeForTransform) - vY * Math.sin(this.OLC.map.cartesian.rotateDegreeForTransform), rY = vX * Math.sin(this.OLC.map.cartesian.rotateDegreeForTransform) + vY * Math.cos(this.OLC.map.cartesian.rotateDegreeForTransform), canvasX = ((rX * ratioX) - this.OLC.map.canvas.x.min) * this.OLC.map.canvas.x.reverseFactor, canvasY = ((rY * ratioY) - this.OLC.map.canvas.y.max) * this.OLC.map.canvas.y.reverseFactor;
        return new CanvasUnit(canvasX, canvasY, this.OLC);
    };
    return GeoUnit;
}());

var ArrayUnit = (function () {
    function ArrayUnit(x, y, indoorLocationConverter) {
        this.x = x;
        this.y = y;
        this.OLC = indoorLocationConverter;
    }
    ArrayUnit.prototype.toGeo = function () {
        var canvasUnit = this.toCanvas();
        return canvasUnit.toGeo();
    };
    ArrayUnit.prototype.toCanvas = function () {
        var ratioX = this.OLC.map.canvas.x.length / this.OLC.map.array.x.length, ratioY = this.OLC.map.canvas.y.length / this.OLC.map.array.y.length, canvasX = (this.x * ratioX) + this.OLC.map.canvas.x.min, canvasY = (this.y * ratioY) + this.OLC.map.canvas.y.min;
        return new CanvasUnit(canvasX, canvasY, this.OLC);
    };
    return ArrayUnit;
}());

var CanvasUnit = (function () {
    function CanvasUnit(x, y, indoorLocationConverter) {
        this.x = x;
        this.y = y;
        this.OLC = indoorLocationConverter;
    }
    CanvasUnit.prototype.toGeo = function () {
        var gps = proj4.Proj('EPSG:4326'); //source coordinates will be in Longitude/Latitude, WGS84
        var cat = proj4.Proj('EPSG:3785'); //destination coordinates in meters, global spherical mercators projection, see http://spatialreference.org/ref/epsg/3785/
        var ratioX = this.OLC.map.canvas.x.length / this.OLC.map.cartesian.x.length, ratioY = this.OLC.map.canvas.y.length / this.OLC.map.cartesian.y.length, rX = ((this.x / this.OLC.map.canvas.x.reverseFactor) + -this.OLC.map.canvas.x.min) / ratioX, rY = ((this.y / this.OLC.map.canvas.y.reverseFactor) + this.OLC.map.canvas.y.max) / ratioY, vY = (rY - (rX * Math.tan(this.OLC.map.cartesian.rotateDegreeForTransform))) / (Math.sin(this.OLC.map.cartesian.rotateDegreeForTransform) * Math.tan(this.OLC.map.cartesian.rotateDegreeForTransform) + 1), vX = (rX / Math.cos(this.OLC.map.cartesian.rotateDegreeForTransform)) + (vY * Math.sin(this.OLC.map.cartesian.rotateDegreeForTransform) / Math.cos(this.OLC.map.cartesian.rotateDegreeForTransform)), cPx = vX + this.OLC.map.cartesian.zeroPoint.x, cPy = vY + this.OLC.map.cartesian.zeroPoint.y, gP = proj4.transform(cat, gps, proj4.toPoint([cPx, cPy]));
        return new GeoUnit(gP.x, gP.y, 0, this.OLC);
    };
    CanvasUnit.prototype.toArray = function () {
        var ratioX = this.OLC.map.array.x.length / this.OLC.map.canvas.x.length, ratioY = this.OLC.map.array.y.length / this.OLC.map.canvas.y.length, arrayX = Math.ceil((this.x - this.OLC.map.canvas.x.min) * ratioX), arrayY = Math.ceil((this.y - this.OLC.map.canvas.y.min) * ratioY);
        return new ArrayUnit(arrayX, arrayY, this.OLC);
    };
    return CanvasUnit;
}());

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/indoor-location-converter.js.map

/***/ }),

/***/ "../../../../../src/app/info-edit/info-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".webgl-wrapper {\n    padding: 0 !important;\n    background-color: #f3f5e3 !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/info-edit/info-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-nav-private [status]=\"status\"></app-nav-private>\n\n    <div style=\"position:fixed;right:10px;top:10px;z-index:1001;\">\n        <alert type=\"warning\" dismissible=\"true\" *ngIf=\"graphicCardNeeded\" (onClose)=\"onCloseGraphicCardAlert($event)\">\n            <strong>Warning!</strong> Your graphics card does not seem to support <a href=\"http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation\" style=\"color:#000\">WebGL</a>.<br />\n            Find out how to get it <a href=\"http://get.webgl.org/\" style=\"color:#000\">here</a>.\n        </alert>\n        <alert type=\"warning\" dismissible=\"true\" *ngIf=\"browserNeeded\" (onClose)=\"onCloseBrowserAlert($event)\">\n            <strong>Warning!</strong> Your browser does not seem to support <a href=\"http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation\" style=\"color:#000\">WebGL</a>.<br />\n            Find out how to get it <a href=\"http://get.webgl.org/\" style=\"color:#000\">here</a>.\n        </alert>\n        <alert type=\"success\" dismissible=\"true\" *ngIf=\"editComplete\">\n            <strong>Updated!</strong> You successfully change info data.\n        </alert>\n        <alert type=\"danger\" dismissible=\"true\" *ngIf=\"alert.visible\" (onClose)=\"onCloseAlert($event)\">\n            <strong>Error!</strong> {{alert.message}}\n        </alert>\n        <alert type=\"warning\" *ngIf=\"deleteProcess\">\n            <strong>Warning!</strong> This info will be deleted permanently. Are you sure?\n            <button type=\"button\" class=\"btn btn-primary btn-xs\" style=\"margin-left:20px;\" (click)=\"deleteInfo($event)\">Yes</button>\n            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteProcess=false\">No</button>\n        </alert>\n    </div>\n\n    <div id=\"page-wrapper\" class=\"webgl-wrapper\" (mousemove)=\"onDocumentMouseMove($event)\" (mouseup)=\"onDocumentMouseUp($event)\">\n\n    </div>\n\n</div>\n\n<div class=\"modal fade\" bsModal #loadingModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Loading Map...</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Please wait for a while.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #loadingDeskModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Loading Desks...</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Please wait for a while.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #saveAskModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Something Is Not Saved</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>There is something which is not saved after last save.</p>\n        <a class=\"btn btn-success\" (click)=\"saveMap(true)\">Save &amp; Exit</a>\n        <a class=\"btn btn-danger\" href=\"/maker/map-detail/{{map?._id}}\">Don't Worry, Just Exit</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #infoListModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Infos</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"infoListModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\" style=\"padding-left:15px;padding-right:15px;margin-bottom:15px;\">\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"float:right;\" (click)=\"openCreateModal($event)\">\n              Create A Info\n          </button>\n        </div>\n        <div class=\"row\" style=\"padding-left:15px;padding-right:15px;max-height:60vh;overflow-y:auto;\">\n          <table width=\"100%\" class=\"table table-striped table-bordered table-hover\" id=\"geometrylistTable\">\n              <thead>\n                  <tr>\n                      <th>_Id</th>\n                      <th>Type</th>\n                      <th>Name</th>\n                      <th>Last Modified</th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor=\"let i of infos; let index=index; let odd=odd; let even=even; let last=last;\" [ngClass]=\"{odd: odd, even: even}\">\n                      <td class=\"preCell\"><a href=\"#\" (click)=\"openEditModal($event, i._id)\">{{i._id}}</a></td>\n                      <td>{{i.type}}</td>\n                      <td>{{i.name}}</td>\n                      <td>{{i.modified | convertTimezone:[timeZone, timeFormat]}}</td>\n                  </tr>\n              </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #infoCreateModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Create An Info</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeCreateModal($event)\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form id=\"newinfo\" role=\"form\" [formGroup]=\"newInfoForm\" (ngSubmit)=\"createInfo(newInfoForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!newInfoForm.controls['name'].valid && newInfoForm.controls['name'].touched}\">\n                <label>Name</label>\n                <input class=\"form-control\" placeholder=\"Enter name\" [formControl]=\"newInfoForm.controls['name']\">\n                <div *ngIf=\"newInfoForm.controls['name'].hasError('required') && newInfoForm.controls['name'].touched\" class=\"alert alert-danger\">\n                  You must include a name.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Type</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                          {{info?.type}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button2\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeInfoStatus($event, 'type', 'people')\">People</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeInfoStatus($event, 'type', 'place')\">Place</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <label>Description</label>\n                <input class=\"form-control\" placeholder=\"Enter description\" [formControl]=\"newInfoForm.controls['description']\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <label>Contact</label>\n                <input class=\"form-control\" placeholder=\"Enter contact\" [formControl]=\"newInfoForm.controls['contact']\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <label>Image</label>\n                <input #infoCreateUploader type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!newInfoForm.valid\">\n                  Create\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #infoEditModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\" style=\"max-height:80vh;overflow-y:auto;\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Edit An Info</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeEditModal($event)\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form id=\"editinfo\" role=\"form\" [formGroup]=\"editInfoForm\" (ngSubmit)=\"editInfo(editInfoForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                  <label>ID</label>\n                  <p class=\"form-control-static\">{{info?._id}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                  <label>Created</label>\n                  <p class=\"form-control-static\">{{info?.created | convertTimezone:[timeZone, timeFormat]}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                  <label>Last Modified</label>\n                  <p class=\"form-control-static\">{{info?.modified | convertTimezone:[timeZone, timeFormat]}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!editInfoForm.controls['name'].valid && editInfoForm.controls['name'].touched}\">\n                <label>Name</label>\n                <input class=\"form-control\" placeholder=\"Enter name\" [formControl]=\"editInfoForm.controls['name']\">\n                <div *ngIf=\"editInfoForm.controls['name'].hasError('required') && editInfoForm.controls['name'].touched\" class=\"alert alert-danger\">\n                  You must include a name.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Type</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                          {{info?.type}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button2\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeInfoStatus($event, 'type', 'people')\">People</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeInfoStatus($event, 'type', 'place')\">Place</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <label>Description</label>\n                <input class=\"form-control\" placeholder=\"Enter description\" [formControl]=\"editInfoForm.controls['description']\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <label>Contact</label>\n                <input class=\"form-control\" placeholder=\"Enter contact\" [formControl]=\"editInfoForm.controls['contact']\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <label>Image</label>\n                <p class=\"form-control-static\">{{(info?.picFileName)?'https://s3.eu-central-1.amazonaws.com/easyinside/pics/'+(info?.picFileName):'No Image'}}</p>\n                <input #infoEditUploader type=\"file\" ng2FileSelect [uploader]=\"uploader2\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!editInfoForm.valid\">\n                  Save\n                </button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"askDelete($event)\">\n                  Delete\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #foxInfoModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Info Detail</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeFoxModal($event)\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <div class=\"form-group\">\n                <label>Object ID</label>\n                <p class=\"form-control-static\">{{selectedFoxId}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <label>Assigned Info</label>\n            <div class=\"form-control-static\">\n                <div class=\"btn-group\" dropdown>\n                    <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                        {{infoAssigned}} <span class=\"caret\"></span>\n                    </button>\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button2\">\n                        <li *ngFor=\"let i of infos;\" role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeInfoAssigned($event, i._id)\">{{i.name}} | {{i.type}}</a></li>\n                    </ul>\n                </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <div class=\"form-group\">\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"saveInfoAssign($event)\">\n                Save\n              </button>\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"clearInfoAssign($event)\">\n                Delete Assigned Info\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/info-edit/info-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__space_service__ = __webpack_require__("../../../../../src/app/space.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__infos_service__ = __webpack_require__("../../../../../src/app/infos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fennecfox__ = __webpack_require__("../../../../../src/app/fennecfox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_three_examples_js_controls_NgTrackballControls_js__ = __webpack_require__("../../../../three/examples/js/controls/NgTrackballControls.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











 // must 'npm install @types/three'!!!

var InfoEditComponent = (function () {
    function InfoEditComponent(route, location, navigationService, spaceService, apiService, infosService, elementRef, router, fb) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.navigationService = navigationService;
        this.spaceService = spaceService;
        this.apiService = apiService;
        this.infosService = infosService;
        this.elementRef = elementRef;
        this.router = router;
        this.renderingAllowed = true;
        this.timeZone = '+01:00';
        this.timeFormat = 'DD-MM-YYYY HH:mm:ss';
        this.map = {};
        this.dings = [];
        this.infos = [];
        this.info = {};
        //selectedMeshId: string;
        this.graphicCardNeeded = false;
        this.browserNeeded = false;
        this.saveProcessStarted = false;
        this.saveFinished = false;
        this.viewInitFinished = false;
        this.dataInitFinished = false;
        this.firstInitFinished = false;
        this.deleteProcess = false;
        this.editComplete = false;
        this.needSave = false;
        this.zoomFactor = 1;
        this.zoomIncFactor = 0.01;
        this.foxes = {};
        this.alert = {
            visible: false,
            message: ''
        };
        navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
            if (message.includes('showinfos')) {
                _this.infoListModal.show();
            }
            else if (message.includes('save')) {
                _this.saveMap(false);
            }
            else if (message.includes('safeexit')) {
                _this.saveMap(true);
            }
            else if (message.includes('exit')) {
                _this.exitEditor();
            }
            else if (message.includes('pathtoggle')) {
                var data = _this.message.split('=');
                _this.setPath((data[1] == 'On') ? true : false);
            }
            else if (message.includes('home')) {
                _this.goHome();
            }
        });
        navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
        });
        this.newInfoForm = fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern('[0-9A-Za-zàâçéèêëîïôûùüÿñæœäöüÀÂÇÉÈÊËÎÏÔÛÙÜŸÑÆŒÄÖÜß&:)(,.+–?!/\' -]*')]],
            'description': "",
            'contact': ""
        });
        this.editInfoForm = fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern('[0-9A-Za-zàâçéèêëîïôûùüÿñæœäöüÀÂÇÉÈÊËÎÏÔÛÙÜŸÑÆŒÄÖÜß&:)(,.+–?!/\' -]*')]],
            'description': "",
            'contact': ""
        });
    }
    InfoEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.spaceService.getMapById(params['id']);
        })
            .subscribe(function (res) {
            _this.map = res;
            _this.mapId = _this.map._id;
            _this.getDings();
        });
        this.uploader = new __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__["FileUploader"]({ url: '' });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var responsePath = JSON.parse(response);
        };
        this.uploader2 = new __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__["FileUploader"]({ url: '' });
        this.uploader2.onCompleteItem = function (item, response, status, headers) {
            var responsePath = JSON.parse(response);
        };
        this.navigationService.setNavigationStatus('infoeditor');
    };
    InfoEditComponent.prototype.ngAfterViewInit = function () {
        this.container = document.querySelector('#page-wrapper');
        this.mouse2D = new __WEBPACK_IMPORTED_MODULE_11_three__["H" /* Vector2 */]();
        this.viewInitFinished = true;
        if (this.dataInitFinished == true) {
            this.initWebGL();
        }
    };
    InfoEditComponent.prototype.getDings = function () {
        var _this = this;
        this.apiService.getDings().subscribe(function (dings) {
            _this.dings = dings;
            var texture = {};
            var material = {};
            var geoData = {};
            var dimensionPartFrom, dimensionPartTo, dimensionPart;
            var dimensionArray = [];
            for (var i in _this.dings) {
                _this.dings[i]._idx = i;
                switch (_this.dings[i].texture.shading) {
                    case 'THREE.FlatShading':
                        texture.shading = __WEBPACK_IMPORTED_MODULE_11_three__["k" /* FlatShading */];
                        break;
                }
                if (_this.dings[i].texture.color != '') {
                    var colors = _this.dings[i].texture.color.split(',');
                    texture.color = new __WEBPACK_IMPORTED_MODULE_11_three__["d" /* Color */]().setRGB(parseFloat(colors[0]), parseFloat(colors[1]), parseFloat(colors[2]));
                }
                if (_this.dings[i].texture.map != null && _this.dings[i].texture.map != '') {
                    // make map logic
                }
                texture.opacity = _this.dings[i].texture.opacity;
                if (texture.opacity < 1) {
                    texture.transparent = true;
                }
                switch (_this.dings[i].material) {
                    case 'THREE.MeshPhongMaterial':
                        material = new __WEBPACK_IMPORTED_MODULE_11_three__["v" /* MeshPhongMaterial */](texture);
                        break;
                    case 'THREE.MeshBasicMaterial':
                        material = new __WEBPACK_IMPORTED_MODULE_11_three__["t" /* MeshBasicMaterial */](texture);
                        break;
                    case 'THREE.MeshLambertMaterial':
                        material = new __WEBPACK_IMPORTED_MODULE_11_three__["u" /* MeshLambertMaterial */](texture);
                        break;
                }
                material._idx = i;
                _this.dings[i]._material = material;
                if (_this.dings[i].type === 'desk') {
                    geoData = JSON.parse(_this.dings[i].geometry.data);
                    _this.dings[i]._geometry = __WEBPACK_IMPORTED_MODULE_11_three__["m" /* JSONLoader */].prototype.parse(geoData[0].g.data);
                }
                else if (_this.dings[i].type === 'place') {
                    if (_this.dings[i].geometry.data.includes('THREE.BoxGeometry')) {
                        dimensionPartFrom = _this.dings[i].geometry.data.indexOf('(');
                        dimensionPartTo = _this.dings[i].geometry.data.indexOf(')');
                        dimensionPart = _this.dings[i].geometry.data.substr(dimensionPartFrom + 1, dimensionPartTo - 1);
                        dimensionArray = dimensionPart.split(',');
                        _this.dings[i]._geometry = { geometry: new __WEBPACK_IMPORTED_MODULE_11_three__["b" /* BoxGeometry */](parseInt(dimensionArray[0]), parseInt(dimensionArray[1]), parseInt(dimensionArray[2])) };
                        _this.dings[i]._geometry.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_11_three__["r" /* Matrix4 */]().makeTranslation(0, (parseInt(dimensionArray[1]) * 0.5), 0));
                        _this.dings[i]._w = parseInt(dimensionArray[0]);
                        _this.dings[i]._h = parseInt(dimensionArray[1]);
                        _this.dings[i]._d = parseInt(dimensionArray[2]);
                    }
                }
                else if (_this.dings[i].type === 'object') {
                    if (_this.dings[i].geometry.data.includes('THREE.BoxGeometry')) {
                        dimensionPartFrom = _this.dings[i].geometry.data.indexOf('(');
                        dimensionPartTo = _this.dings[i].geometry.data.indexOf(')');
                        dimensionPart = _this.dings[i].geometry.data.substr(dimensionPartFrom + 1, dimensionPartTo - 1);
                        dimensionArray = dimensionPart.split(',');
                        _this.dings[i]._geometry = { geometry: new __WEBPACK_IMPORTED_MODULE_11_three__["b" /* BoxGeometry */](parseInt(dimensionArray[0]), parseInt(dimensionArray[1]), parseInt(dimensionArray[2])) };
                        _this.dings[i]._geometry.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_11_three__["r" /* Matrix4 */]().makeTranslation(0, (parseInt(dimensionArray[1]) * 0.5), 0));
                        _this.dings[i]._w = parseInt(dimensionArray[0]);
                        _this.dings[i]._h = parseInt(dimensionArray[1]);
                        _this.dings[i]._d = parseInt(dimensionArray[2]);
                    }
                }
            }
            _this.getInfos();
        });
    };
    InfoEditComponent.prototype.getInfos = function () {
        var _this = this;
        this.infosService.getInfos(this.map._space).subscribe(function (infos) {
            _this.infos = infos;
            _this.navigationService.sendNavigationMessage('infocount=' + _this.infos.length);
            if (_this.firstInitFinished === false) {
                _this.dataInitFinished = true;
                if (_this.viewInitFinished == true) {
                    _this.initWebGL();
                }
                _this.firstInitFinished = true;
            }
        });
    };
    InfoEditComponent.prototype.initWebGL = function () {
        if (this.detectWebGL() === false) {
            this.showWebGLAlert();
        }
        this.renderer = new __WEBPACK_IMPORTED_MODULE_11_three__["J" /* WebGLRenderer */]({
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true
        });
        this.camera = new __WEBPACK_IMPORTED_MODULE_11_three__["x" /* PerspectiveCamera */](25, this.container.clientWidth / this.container.clientHeight, 50, 1e7);
        this.camera.position.x = 800;
        this.camera.position.y = 800;
        this.camera.position.z = 800;
        this.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_11_three__["I" /* Vector3 */](0, 0, 0));
        //this.controls = new TrackballControls(this.camera, this.renderer.document);
        this.controls = new __WEBPACK_IMPORTED_MODULE_12__node_modules_three_examples_js_controls_NgTrackballControls_js__["a" /* default */](this.camera, this.renderer.domElement);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 3.6;
        this.controls.panSpeed = 2;
        this.controls.noZoom = false;
        this.controls.noPan = false;
        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;
        this.controls.keys = [65, 83, 68]; // a:rotate, s:zoom, d:pan
        setTimeout(function () {
            var t = this;
            return function () {
                t.setRendererSize();
            };
        }.call(this), 3000);
        this.container.appendChild(this.renderer.domElement);
        this.navigationService.window.addEventListener('resize', function () {
            var t = this;
            return function () {
                t.setRendererSize();
            };
        }.call(this));
        this.scene = new __WEBPACK_IMPORTED_MODULE_11_three__["B" /* Scene */]();
        var ambientLight = new __WEBPACK_IMPORTED_MODULE_11_three__["a" /* AmbientLight */](0x606060);
        var directionalLight = new __WEBPACK_IMPORTED_MODULE_11_three__["e" /* DirectionalLight */](0xffffff);
        directionalLight.position.set(1, 1, -1).normalize();
        this.scene.add(ambientLight);
        this.scene.add(directionalLight);
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_11_three__["A" /* Raycaster */]();
        this.animate();
        if (this.map.optFileName.length > 0) {
            this.loadingModal.show();
            var url = 'https://s3.eu-central-1.amazonaws.com/easyinside/opts/' + this.map.optFileName;
            var xhr_1 = new XMLHttpRequest();
            if ('withCredentials' in xhr_1) {
                xhr_1.open('GET', url, true);
            }
            //xhr.responseType = 'json';
            var t_1 = this;
            xhr_1.onreadystatechange = function () {
                var status;
                var data;
                if (xhr_1.readyState == 4) {
                    status = xhr_1.status;
                    if (status == 200) {
                        data = JSON.parse(xhr_1.responseText);
                        t_1.initAfterMapDataLoad(data);
                    }
                    else {
                        console.log('Error in reading map data');
                    }
                }
            };
            xhr_1.send();
        }
    };
    InfoEditComponent.prototype.detectWebGL = function () {
        try {
            return !!this.navigationService.window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
        }
        catch (e) {
            return false;
        }
    };
    InfoEditComponent.prototype.showWebGLAlert = function () {
        if (this.navigationService.window.WebGLRenderingContext) {
            this.graphicCardNeeded = true;
        }
        else {
            this.browserNeeded = true;
        }
    };
    InfoEditComponent.prototype.setRendererSize = function () {
        var w = this.container.clientWidth;
        var h = this.container.clientHeight;
        this.renderer.setSize(w, h);
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.controls.handleResize();
    };
    InfoEditComponent.prototype.setPath = function (status) {
        if (this.pathObj) {
            if (status) {
                this.scene.add(this.pathObj);
            }
            else {
                this.scene.remove(this.pathObj);
            }
        }
    };
    InfoEditComponent.prototype.onDocumentKeyDown = function (e) {
        switch (e.keyCode) {
            case 38:
                this.zoomInOut('in');
                break;
            case 40:
                this.zoomInOut('out');
                break;
        }
    };
    ;
    InfoEditComponent.prototype.onDocumentMouseMove = function (event) {
        this.mouse2D.x = ((event.clientX - this.container.offsetLeft) / this.container.clientWidth) * 2 - 1;
        this.mouse2D.y = -((event.clientY - this.container.offsetTop) / this.container.clientHeight) * 2 + 1;
    };
    InfoEditComponent.prototype.onDocumentMouseUp = function (event) {
        this.raycaster.setFromCamera(this.mouse2D, this.camera);
        var intersects = this.raycaster.intersectObjects(this.scene.children, true);
        if (intersects.length > 0) {
            var intersector = this.getRealIntersector(intersects);
            if (intersector) {
                this.selectOnFox(intersector);
                this.openFoxInfo(intersector.ding._userID, intersector.ding.uuid);
            }
        }
    };
    InfoEditComponent.prototype.zoomInOut = function (cmd) {
        switch (cmd) {
            case 'in':
                this.zoomFactor = (this.zoomFactor > 1) ? 1 : this.zoomFactor;
                this.zoomFactor = this.zoomFactor - this.zoomIncFactor;
                this.zoomFactor = (this.zoomFactor <= 0.2) ? 0.2 : this.zoomFactor;
                break;
            case 'out':
                this.zoomFactor = (this.zoomFactor < 1) ? 1 : this.zoomFactor;
                this.zoomFactor = this.zoomFactor + this.zoomIncFactor;
                this.zoomFactor = (this.zoomFactor >= 2) ? 1 : this.zoomFactor;
                break;
        }
        this.camera.fov *= this.zoomFactor;
        this.camera.updateProjectionMatrix();
    };
    InfoEditComponent.prototype.getRealIntersector = function (intersects) {
        var intersector;
        for (var i = 0; i < intersects.length; i++) {
            intersector = intersects[i];
            if (intersector.object.name === 'ding') {
                return this.foxes[intersector.object.uuid];
            }
        }
    };
    InfoEditComponent.prototype.getSelectedDingsId = function (idx) {
        var dingChoosen;
        for (var i in this.dings) {
            if (this.dings[i]._idx == idx) {
                dingChoosen = this.dings[i];
            }
        }
        return dingChoosen._id;
    };
    InfoEditComponent.prototype.getSelectedDingsType = function (idx) {
        var dingChoosen;
        for (var i in this.dings) {
            if (this.dings[i]._idx == idx) {
                dingChoosen = this.dings[i];
            }
        }
        return dingChoosen.type;
    };
    InfoEditComponent.prototype.getSelectedDingsMaterial = function (idx) {
        var dingChoosen;
        for (var i in this.dings) {
            if (this.dings[i]._idx == idx) {
                dingChoosen = this.dings[i];
            }
        }
        return dingChoosen._material;
    };
    InfoEditComponent.prototype.getSelectedDingsGeometry = function (idx) {
        var dingChoosen;
        for (var i in this.dings) {
            if (this.dings[i]._idx == idx) {
                dingChoosen = this.dings[i];
            }
        }
        return dingChoosen._geometry.geometry.clone();
    };
    InfoEditComponent.prototype.getSelectedDing = function (idx) {
        var dingChoosen;
        for (var i in this.dings) {
            if (this.dings[i]._idx == idx) {
                dingChoosen = this.dings[i];
            }
        }
        return dingChoosen;
    };
    InfoEditComponent.prototype.findInfoById = function (id) {
        for (var i in this.infos) {
            if (this.infos[i]._id === id) {
                return this.infos[i];
            }
        }
        return null;
    };
    InfoEditComponent.prototype.initAfterMapDataLoad = function (data) {
        var maxIdx = 0;
        for (var i in this.dings) {
            this.dings[i]._idx = null;
            this.dings[i]._material._idx = null;
        }
        for (var i in data.m) {
            for (var j in this.dings) {
                if (this.dings[j]._id == data.m[i]._id) {
                    this.dings[j]._idx = data.m[i].idx;
                    this.dings[j]._material._idx = data.m[i].idx;
                    maxIdx = (data.m[i].idx > maxIdx) ? data.m[i].idx : maxIdx;
                }
            }
        }
        for (var i in this.dings) {
            if (this.dings[i]._idx == null) {
                maxIdx++;
                this.dings[i]._idx = maxIdx;
                this.dings[i]._material._idx = maxIdx;
            }
        }
        var children = this.scene.children.slice(0);
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === 'map' || children[i].name === 'path') {
                this.scene.remove(children[i]);
                continue;
            }
            if (children[i] instanceof __WEBPACK_IMPORTED_MODULE_11_three__["s" /* Mesh */] === false) {
                continue;
            }
            if (children[i].geometry instanceof __WEBPACK_IMPORTED_MODULE_11_three__["b" /* BoxGeometry */] === false) {
                continue;
            }
            this.scene.remove(children[i]);
        }
        var voxels = data.d;
        var voxel, mesh, tmpMaterial, tmpGeometry;
        var voxelLength = voxels.length;
        for (var i = 0; i < voxelLength; i++) {
            voxel = voxels[i];
            tmpMaterial = this.getSelectedDingsMaterial(voxel.t);
            tmpGeometry = __WEBPACK_IMPORTED_MODULE_11_three__["m" /* JSONLoader */].prototype.parse(voxel.g.data);
            mesh = new __WEBPACK_IMPORTED_MODULE_11_three__["s" /* Mesh */](tmpGeometry.geometry, tmpMaterial);
            mesh.position.x = voxel.x;
            mesh.position.y = voxel.y;
            mesh.position.z = voxel.z;
            mesh.name = (this.getSelectedDingsType(voxel.t) === 'path') ? 'path' : 'map';
            if (mesh.name == 'path') {
                this.pathObj = mesh;
            }
            this.scene.add(mesh);
            if (mesh.name == 'path') {
                this.setPath(false);
            }
        }
        this.loadingModal.hide();
        if (this.map.objFileName && this.map.objFileName.length > 0) {
            this.loadingDeskModal.show();
            var url = 'https://s3.eu-central-1.amazonaws.com/easyinside/desks/' + this.map.objFileName;
            var xhr_2 = new XMLHttpRequest();
            if ('withCredentials' in xhr_2) {
                xhr_2.open('GET', url, true);
            }
            //xhr.responseType = 'json';
            var t_2 = this;
            xhr_2.onreadystatechange = function () {
                var status;
                var data;
                if (xhr_2.readyState == 4) {
                    status = xhr_2.status;
                    if (status == 200) {
                        data = JSON.parse(xhr_2.responseText);
                        t_2.initAfterDeskDataLoad(data);
                    }
                    else {
                        console.log('Error in reading map data');
                    }
                }
            };
            xhr_2.send();
        }
    };
    InfoEditComponent.prototype.initAfterDeskDataLoad = function (data) {
        var children = this.scene.children.slice(0);
        for (var i = 0; i < children.length; i++) {
            if (children[i]._p !== 'desk' && children[i]._p !== 'place' && children[i]._p !== 'object') {
                continue;
            }
            this.scene.remove(children[i]);
        }
        var voxels = data;
        var voxelLength = voxels.length;
        var fennecFox, voxel, tmpInfo;
        for (var i_1 = 0; i_1 < voxelLength; i_1++) {
            voxel = voxels[i_1];
            fennecFox = new __WEBPACK_IMPORTED_MODULE_9__fennecfox__["a" /* FennecFox */](this.getSelectedDing(voxel.t));
            fennecFox.setPosition(voxel.x, voxel.y, voxel.z);
            fennecFox.setRotation(voxel.r === 1 ? true : false);
            tmpInfo = this.findInfoById(voxel.i);
            if (tmpInfo) {
                fennecFox.setUser(voxel.i, tmpInfo.name);
            }
            else {
                fennecFox.setUser(null, null);
            }
            fennecFox.update();
            this.foxes[fennecFox.ding.uuid] = fennecFox;
            this.scene.add(fennecFox.root);
        }
        this.loadingDeskModal.hide();
    };
    InfoEditComponent.prototype.exitEditor = function () {
        if (this.needSave) {
            this.saveAskModal.show();
        }
        else {
            //document.location.href = '/maker/map-detail/' + this.mapId;
            this.exitToDetail();
        }
    };
    InfoEditComponent.prototype.exitToDetail = function () {
        this.renderingAllowed = false;
        this.router.navigate(['/maker/map-detail', this.mapId]);
    };
    InfoEditComponent.prototype.goHome = function () {
        this.renderingAllowed = false;
        this.router.navigate(['/']);
    };
    InfoEditComponent.prototype.setFocusOnFox = function (aFox) {
        if (aFox.ding.uuid !== this.preChangedFoxId) {
            if (typeof this.preChangedFoxId !== 'undefined') {
                if (this.preChangedFoxId !== this.selectedFoxId) {
                    this.setBlurOnFox(this.foxes[this.preChangedFoxId]);
                }
            }
        }
        if (aFox.ding.uuid !== this.selectedFoxId) {
            this.preChangedFoxId = aFox.ding.uuid;
            aFox.setFocus();
        }
        else {
            this.preChangedFoxId = void (0);
        }
    };
    InfoEditComponent.prototype.setBlurOnFox = function (aFox) {
        aFox.blur();
    };
    InfoEditComponent.prototype.selectOnFox = function (aFox) {
        if (aFox.ding.uuid !== this.selectedFoxId) {
            if (typeof this.selectedFoxId !== 'undefined') {
                this.setBlurOnFox(this.foxes[this.selectedFoxId]);
            }
        }
        this.selectedFoxId = aFox.ding.uuid;
        aFox.select();
    };
    InfoEditComponent.prototype.animate = function () {
        if (this.renderingAllowed) {
            requestAnimationFrame(function () {
                var t = this;
                return function () {
                    t.animate();
                };
            }.call(this));
        }
        this.controls.update();
        this.render();
    };
    InfoEditComponent.prototype.render = function () {
        this.raycaster.setFromCamera(this.mouse2D, this.camera);
        var intersects = this.raycaster.intersectObjects(this.scene.children, true);
        if (intersects.length > 0) {
            var intersector = this.getRealIntersector(intersects);
            if (intersector) {
                this.setFocusOnFox(intersector);
            }
            else {
                if (typeof this.preChangedFoxId !== 'undefined') {
                    if (this.preChangedFoxId !== this.selectedFoxId) {
                        this.setBlurOnFox(this.foxes[this.preChangedFoxId]);
                    }
                }
            }
        }
        this.renderer.render(this.scene, this.camera);
    };
    InfoEditComponent.prototype.openCreateModal = function (event) {
        event.preventDefault();
        this.info = {};
        this.info.type = 'people';
        this.info._space = this.map._space;
        this.infoCreateUploader.nativeElement.value = '';
        this.infoListModal.hide();
        this.infoCreateModal.show();
    };
    InfoEditComponent.prototype.uploaderAvailable = function () {
        if (this.uploader) {
            return (!this.uploader.getNotUploadedItems().length);
        }
        else {
            return true;
        }
    };
    InfoEditComponent.prototype.uploader2Available = function () {
        if (this.uploader2) {
            return (!this.uploader2.getNotUploadedItems().length);
        }
        else {
            return true;
        }
    };
    InfoEditComponent.prototype.createInfo = function (value) {
        var _this = this;
        var ifo = {
            name: value.name,
            type: this.info.type,
            description: value.description,
            contact: value.contact,
            _space: this.info._space
        };
        this.infosService.createInfo(ifo).subscribe(function (res) {
            _this.uploader.queue.forEach(function (el) {
                el.url = '/info/pic-file/' + res._id;
            });
            if (_this.uploaderAvailable() === false) {
                _this.uploader.uploadAll();
            }
            _this.getInfos();
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
        this.infoCreateModal.hide();
        this.newInfoForm.reset();
        this.infoListModal.show();
    };
    InfoEditComponent.prototype.closeCreateModal = function (event) {
        event.preventDefault();
        this.infoCreateModal.hide();
        this.infoListModal.show();
    };
    InfoEditComponent.prototype.changeInfoStatus = function (event, property, value) {
        event.preventDefault();
        this.info[property] = value;
        this.editInfoForm.updateValueAndValidity();
    };
    InfoEditComponent.prototype.openEditModal = function (event, iId) {
        var _this = this;
        event.preventDefault();
        this.infosService.getInfoById(iId).subscribe(function (res) {
            _this.info = res;
            _this.infoId = res._id;
            _this.editInfoForm.controls['name'].setValue(_this.info.name, { onlySelf: true });
            _this.editInfoForm.controls['description'].setValue(_this.info.description, { onlySelf: true });
            _this.editInfoForm.controls['contact'].setValue(_this.info.contact, { onlySelf: true });
            _this.editInfoForm.updateValueAndValidity();
            _this.infoEditUploader.nativeElement.value = '';
            _this.infoListModal.hide();
            _this.infoEditModal.show();
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    InfoEditComponent.prototype.editInfo = function (value) {
        var _this = this;
        var ifo = {
            name: value.name,
            type: this.info.type,
            description: value.description,
            contact: value.contact,
        };
        this.infosService.saveInfo(this.infoId, ifo).subscribe(function (res) {
            _this.uploader2.queue.forEach(function (el) {
                el.url = '/info/pic-file/' + res._id;
            });
            if (_this.uploader2Available() === false) {
                _this.uploader2.uploadAll();
            }
            _this.getInfos();
            _this.editComplete = true;
            _this.infoEditModal.hide();
            _this.infoListModal.show();
            setTimeout(function () {
                _this.editComplete = false;
            }, 3000);
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    InfoEditComponent.prototype.closeEditModal = function (event) {
        event.preventDefault();
        this.infoListModal.show();
        this.infoEditModal.hide();
    };
    InfoEditComponent.prototype.askDelete = function (event) {
        event.preventDefault();
        this.infoEditModal.hide();
        this.deleteProcess = true;
    };
    InfoEditComponent.prototype.deleteInfo = function (event) {
        var _this = this;
        event.preventDefault();
        this.infosService.deleteInfo(this.infoId).subscribe(function (res) {
            _this.deleteProcess = false;
            _this.getInfos();
            _this.infoEditModal.hide();
            _this.infoListModal.show();
        }, function (err) {
            _this.deleteProcess = false;
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    InfoEditComponent.prototype.openFoxInfo = function (uId, meshId) {
        //this.selectedMeshId = meshId;
        this.selectedFoxId = meshId;
        this.changeInfoAssigned(null, uId);
        /*let info = this.findInfoById(uId);
        if (info) {
          //this.infoAssigned = info.name;
        } else {
          //this.infoAssigned = 'not assigned yet';
        }*/
        this.foxInfoModal.show();
    };
    InfoEditComponent.prototype.closeFoxModal = function (event) {
        event.preventDefault();
        if (typeof this.selectedFoxId !== 'undefined') {
            this.setBlurOnFox(this.foxes[this.selectedFoxId]);
            this.selectedFoxId = void (0);
        }
        this.foxInfoModal.hide();
    };
    InfoEditComponent.prototype.changeInfoAssigned = function (event, uId) {
        if (event) {
            event.preventDefault();
        }
        var info = this.findInfoById(uId);
        if (info) {
            this.infoAssigned = info.name;
            this.infoIdAssigned = uId;
        }
        else {
            this.infoAssigned = 'not assigned yet';
            this.infoIdAssigned = null;
        }
    };
    InfoEditComponent.prototype.saveInfoAssign = function (event) {
        var _this = this;
        event.preventDefault();
        var info = this.findInfoById(this.infoIdAssigned);
        var ifo = {
            mapid: this.mapId
        };
        this.infosService.setInfoMap(this.infoIdAssigned, ifo).subscribe(function (res) {
            _this.foxes[_this.selectedFoxId].setUser(_this.infoIdAssigned, info.name);
            _this.closeFoxModal(event);
        });
        this.needSave = true;
    };
    InfoEditComponent.prototype.clearInfoAssign = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.infoIdAssigned);
        this.infosService.delInfoMap(this.infoIdAssigned).subscribe(function (res) {
            _this.foxes[_this.selectedFoxId].clearUser();
            _this.closeFoxModal(event);
        });
        this.needSave = true;
    };
    InfoEditComponent.prototype.saveMap = function (exitAfterSave) {
        var _this = this;
        this.saveProcessStarted = true;
        var children = this.scene.children;
        var voxels = [];
        var child;
        for (var i = 0; i < children.length; i++) {
            child = children[i];
            if (typeof child.ding === 'undefined') {
                continue;
            }
            voxels.push({
                x: child.ding.position.x,
                y: child.ding.position.y,
                z: child.ding.position.z,
                t: child.ding._t,
                p: child.ding._p,
                n: child.ding._n,
                r: (child.ding._r === true) ? 1 : 0,
                i: child.ding._userID
            });
        }
        var dataUri = JSON.stringify(voxels);
        this.spaceService.saveDeskFile(this.mapId, { file: dataUri }).subscribe(function (res) {
            if (res.result) {
                _this.needSave = false;
                if (exitAfterSave) {
                    //document.location.href = '/maker/map-detail/' + this.mapId;
                    _this.exitToDetail();
                }
                else {
                    _this.saveProcessStarted = false;
                    _this.saveFinished = true;
                    setTimeout(function () {
                        _this.saveFinished = false;
                    }, 3000);
                }
            }
        });
    };
    return InfoEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('optAskModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], InfoEditComponent.prototype, "optAskModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loadingModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
], InfoEditComponent.prototype, "loadingModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loadingDeskModal'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _c || Object)
], InfoEditComponent.prototype, "loadingDeskModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('saveAskModal'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _e || Object)
], InfoEditComponent.prototype, "saveAskModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('infoListModal'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _f || Object)
], InfoEditComponent.prototype, "infoListModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('infoCreateModal'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _g || Object)
], InfoEditComponent.prototype, "infoCreateModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('infoEditModal'),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _j || Object)
], InfoEditComponent.prototype, "infoEditModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('foxInfoModal'),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _k || Object)
], InfoEditComponent.prototype, "foxInfoModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('infoCreateUploader'),
    __metadata("design:type", Object)
], InfoEditComponent.prototype, "infoCreateUploader", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('infoEditUploader'),
    __metadata("design:type", Object)
], InfoEditComponent.prototype, "infoEditUploader", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InfoEditComponent.prototype, "onDocumentKeyDown", null);
InfoEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-info-edit',
        template: __webpack_require__("../../../../../src/app/info-edit/info-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/info-edit/info-edit.component.css"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__navigation_service__["a" /* NavigationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_4__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__navigation_service__["a" /* NavigationService */]) === "function" && _o || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_5__space_service__["a" /* SpaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__space_service__["a" /* SpaceService */]) === "function" && _q || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */]) === "function" && _s || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_7__infos_service__["a" /* InfosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__infos_service__["a" /* InfosService */]) === "function" && _u || Object, typeof (_v = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _v || Object, typeof (_x = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _x || Object, typeof (_y = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _y || Object])
], InfoEditComponent);

var _a, _b, _c, _e, _f, _g, _j, _k, _l, _m, _o, _q, _s, _u, _v, _x, _y;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/info-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/infos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfosService = (function () {
    function InfosService(http) {
        this.http = http;
    }
    InfosService.prototype.getInfos = function (spaceId) {
        return this.http.get('/info/infos/' + spaceId).map(function (res) { return res.json(); });
    };
    InfosService.prototype.createInfo = function (info) {
        return this.http.post('/info/create', info)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    InfosService.prototype.saveInfo = function (id, info) {
        return this.http.put('/info/' + id, info)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    InfosService.prototype.deleteInfo = function (id) {
        return this.http.delete('/info/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    InfosService.prototype.getInfoById = function (id) {
        return this.http.get('/info/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    InfosService.prototype.setInfoMap = function (id, info) {
        return this.http.put('/info/setmap/' + id, info)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    InfosService.prototype.delInfoMap = function (id) {
        return this.http.put('/info/delmap/' + id, null)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    return InfosService;
}());
InfosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], InfosService);

var _a;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/infos.service.js.map

/***/ }),

/***/ "../../../../../src/app/maker-dashboard/maker-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-nav-private [status]=\"status\"></app-nav-private>\n\n    <div id=\"page-wrapper\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"page-header\">Dashboard</h1>\n            </div>\n            <!-- /.col-lg-12 -->\n        </div>\n        <!-- /.row -->\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"panel panel-primary\">\n                    <div class=\"panel-heading\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-map fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-right\">\n                                <div class=\"huge\">{{allMapCount}}</div>\n                                <div>Maps In Spaces</div>\n                            </div>\n                        </div>\n                    </div>\n                    <a [routerLink]=\"['/maker/spaces']\">\n                        <div class=\"panel-footer\">\n                            <span class=\"pull-left\">View Spaces</span>\n                            <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"panel panel-green\">\n                    <div class=\"panel-heading\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-database fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-right\">\n                                <div class=\"huge\">4,500</div>\n                                <div>KB of Disk Used</div>\n                            </div>\n                        </div>\n                    </div>\n                    <a href=\"#\">\n                        <div class=\"panel-footer\">\n                            <span class=\"pull-left\">View Details</span>\n                            <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"panel panel-yellow\">\n                    <div class=\"panel-heading\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-cloud-download fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-right\">\n                                <div class=\"huge\">9.8</div>\n                                <div>GB of Traffics Used</div>\n                            </div>\n                        </div>\n                    </div>\n                    <a href=\"#\">\n                        <div class=\"panel-footer\">\n                            <span class=\"pull-left\">View Details</span>\n                            <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"panel panel-red\">\n                    <div class=\"panel-heading\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-cog fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-right\">\n                                <div class=\"huge\">5</div>\n                                <div>Robots Worked</div>\n                            </div>\n                        </div>\n                    </div>\n                    <a href=\"#\">\n                        <div class=\"panel-footer\">\n                            <span class=\"pull-left\">View Details</span>\n                            <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <!-- /.row -->\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n\n            </div>\n            <!-- /.col-lg-8 -->\n            <div class=\"col-lg-6\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <i class=\"fa fa-map fa-fw\"></i> Recent Maps\n                    </div>\n                    <!-- /.panel-heading -->\n                    <div class=\"panel-body\">\n                        <div class=\"list-group\">\n                            <a *ngFor=\"let m of recentMaps;\" [routerLink]=\"['/maker/map-detail', m._id]\" class=\"list-group-item\">\n                                {{m.name}}\n                                <span class=\"pull-right text-muted small\"><em>{{m.modified | amTimeAgo}}</em> <a [routerLink]=\"['/maker/map-edit', m._id]\"><i class=\"fa fa-pencil-square fa-fw\"></i>Map</a> <a [routerLink]=\"['/maker/desk-edit', m._id]\"><i class=\"fa fa-pencil-square fa-fw\"></i>Desk</a> <a [routerLink]=\"['/maker/info-edit', m._id]\"><i class=\"fa fa-pencil-square fa-fw\"></i>Info</a></span>\n                            </a>\n                        </div>\n                        <!-- /.list-group -->\n                        <a [routerLink]=\"['/maker/spaces']\" class=\"btn btn-default btn-block\">View All Spaces</a>\n                    </div>\n                    <!-- /.panel-body -->\n                </div>\n            </div>\n            <!-- /.col-lg-4 -->\n        </div>\n        <!-- /.row -->\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/maker-dashboard/maker-dashboard.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/maker-dashboard/maker-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakerDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__space_service__ = __webpack_require__("../../../../../src/app/space.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MakerDashboardComponent = (function () {
    function MakerDashboardComponent(navigationService, spaceService) {
        var _this = this;
        this.navigationService = navigationService;
        this.spaceService = spaceService;
        this.recentMaps = [];
        this.allMapCount = 0;
        navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
        });
        navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
        });
    }
    MakerDashboardComponent.prototype.ngOnInit = function () {
        this.navigationService.setNavigationStatus('maker');
        this.getRecentMaps();
        this.getAllMapsCount();
    };
    MakerDashboardComponent.prototype.getRecentMaps = function () {
        var _this = this;
        this.spaceService.getRecentMaps().subscribe(function (maps) {
            _this.recentMaps = maps;
        });
    };
    MakerDashboardComponent.prototype.getAllMapsCount = function () {
        var _this = this;
        this.spaceService.getAllMapsCount().subscribe(function (res) {
            _this.allMapCount = res.maps;
        });
    };
    return MakerDashboardComponent;
}());
MakerDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-maker-dashboard',
        template: __webpack_require__("../../../../../src/app/maker-dashboard/maker-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/maker-dashboard/maker-dashboard.component.less"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__navigation_service__["a" /* NavigationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__navigation_service__["a" /* NavigationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__space_service__["a" /* SpaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__space_service__["a" /* SpaceService */]) === "function" && _b || Object])
], MakerDashboardComponent);

var _a, _b;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/maker-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/map-detail/map-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-nav-private [status]=\"status\"></app-nav-private>\n\n    <div style=\"position:fixed;right:10px;top:10px;z-index:1001;\">\n        <alert type=\"success\" dismissible=\"true\" *ngIf=\"editComplete\">\n            <strong>Map Updated!</strong> You successfully change map data.\n        </alert>\n        <alert type=\"danger\" dismissible=\"true\" *ngIf=\"alert.visible\" (onClose)=\"onCloseAlert($event)\">\n            <strong>Cannot modify map data!</strong> {{alert.message}}\n        </alert>\n        <alert type=\"warning\" *ngIf=\"deleteProcess\">\n            <strong>Warning!</strong> This map will be deleted permanently. Are you sure?\n            <button type=\"button\" class=\"btn btn-primary btn-xs\" style=\"margin-left:20px;\" (click)=\"deleteMap($event)\">Yes</button>\n            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteProcess=false\">No</button>\n        </alert>\n    </div>\n\n    <div id=\"page-wrapper\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"page-header\">Map Details</h1>\n            </div>\n            <!-- /.col-lg-12 -->\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        Map Info\n                        <a class=\"btn btn-default btn-sm float-btn margin-top-btn\" [routerLink]=\"['/maker/spacedetails', map?._space]\">Back To List</a>\n                        <a class=\"btn btn-primary btn-sm float-btn margin-top-btn margin-right-btn\" [routerLink]=\"['/maker/info-edit', map?._id]\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Info Editor</a>\n                        <a class=\"btn btn-primary btn-sm float-btn margin-top-btn margin-right-btn\" [routerLink]=\"['/maker/desk-edit', map?._id]\"><i class=\"fa fa-street-view\" aria-hidden=\"true\"></i> Desk Editor</a>\n                        <a class=\"btn btn-primary btn-sm float-btn margin-top-btn margin-right-btn\" [routerLink]=\"['/maker/map-edit', map?._id]\"><i class=\"fa fa-map\" aria-hidden=\"true\"></i> Map Editor</a>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <form role=\"form\" [formGroup]=\"mapForm\" (ngSubmit)=\"saveMap(mapForm.value)\">\n                                    <div class=\"form-group\">\n                                        <label>Map ID</label>\n                                        <p class=\"form-control-static\">{{map?._id}}</p>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Created Date</label>\n                                        <p class=\"form-control-static\">{{map?.created | convertTimezone:[timeZone, timeFormat]}} (CET)</p>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Last Modified Date</label>\n                                        <p class=\"form-control-static\">{{map?.modified | convertTimezone:[timeZone, timeFormat]}} (CET)</p>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Map Data Size</label>\n                                        <p class=\"form-control-static\">{{map?.fileSize}}</p>\n                                    </div>\n                                    <div class=\"form-group\" [ngClass]=\"{'has-error':!mapForm.controls['name'].valid && mapForm.controls['name'].touched}\">\n                                        <label>Name</label>\n                                        <input class=\"form-control\" placeholder=\"Enter map name\" [formControl]=\"mapForm.controls['name']\" [ngModel]=\"map?.name\">\n                                        <div *ngIf=\"mapForm.controls['name'].hasError('required') && mapForm.controls['name'].touched\" class=\"alert alert-danger\">\n                                            You must include a map name.\n                                        </div>\n                                        <div *ngIf=\"mapForm.controls['name'].hasError('pattern') && mapForm.controls['name'].touched\" class=\"alert alert-danger\">\n                                            Map name allows only a~z, A~Z, 0~9 and space.\n                                        </div>\n                                    </div>\n                                    <label>Width</label>\n                                    <div class=\"form-group input-group\" [ngClass]=\"{'has-error':!mapForm.controls['width'].valid && mapForm.controls['width'].touched}\">\n                                        <input class=\"form-control\" placeholder=\"Enter map width\" [formControl]=\"mapForm.controls['width']\" [ngModel]=\"map?.width\">\n                                        <span class=\"input-group-addon\">&#13213;</span>\n                                    </div>\n                                    <div *ngIf=\"mapForm.controls['width'].hasError('required') && mapForm.controls['width'].touched\" class=\"alert alert-danger\">\n                                        You must include map width.\n                                    </div>\n                                    <div *ngIf=\"mapForm.controls['width'].hasError('pattern') && mapForm.controls['width'].touched\" class=\"alert alert-danger\">\n                                        Map width allows only number.\n                                    </div>\n                                    <div *ngIf=\"mapForm.controls['width'].hasError('minValue') && mapForm.controls['width'].touched\" class=\"alert alert-danger\">\n                                        Map width must be larger than 0.\n                                    </div>\n                                    <label>Height</label>\n                                    <div class=\"form-group input-group\" [ngClass]=\"{'has-error':!mapForm.controls['height'].valid && mapForm.controls['height'].touched}\">\n                                        <input class=\"form-control\" placeholder=\"Enter map height\" [formControl]=\"mapForm.controls['height']\" [ngModel]=\"map?.height\">\n                                        <span class=\"input-group-addon\">&#13213;</span>\n                                    </div>\n                                    <div *ngIf=\"mapForm.controls['height'].hasError('required') && mapForm.controls['height'].touched\" class=\"alert alert-danger\">\n                                        You must include map height.\n                                    </div>\n                                    <div *ngIf=\"mapForm.controls['height'].hasError('pattern') && mapForm.controls['height'].touched\" class=\"alert alert-danger\">\n                                        Map height allows only number.\n                                    </div>\n                                    <div *ngIf=\"mapForm.controls['height'].hasError('minValue') && mapForm.controls['height'].touched\" class=\"alert alert-danger\">\n                                        Map height must be larger than 0.\n                                    </div>\n                                    <label>Voxel Size</label>\n                                    <div class=\"form-group input-group\" [ngClass]=\"{'has-error':!mapForm.controls['voxelSize'].valid && mapForm.controls['voxelSize'].touched}\">\n                                        <input class=\"form-control\" placeholder=\"Enter voxel name\" [formControl]=\"mapForm.controls['voxelSize']\" [ngModel]=\"map?.voxelSize\">\n                                        <span class=\"input-group-addon\">&#13213;</span>\n                                    </div>\n                                    <div *ngIf=\"mapForm.controls['voxelSize'].hasError('required') && mapForm.controls['voxelSize'].touched\" class=\"alert alert-danger\">\n                                        You must include voxel size.\n                                    </div>\n                                    <div *ngIf=\"mapForm.controls['voxelSize'].hasError('pattern') && mapForm.controls['voxelSize'].touched\" class=\"alert alert-danger\">\n                                        Voxel size allows only number.\n                                    </div>\n                                    <div *ngIf=\"mapForm.controls['voxelSize'].hasError('minValue') && mapForm.controls['voxelSize'].touched\" class=\"alert alert-danger\">\n                                        Voxel size must be larger than 0.\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Allow Search</label>\n                                        <div class=\"form-control-static\">\n                                            <div class=\"btn-group\" dropdown>\n                                                <button id=\"allow-button\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                                                    {{searchable}} <span class=\"caret\"></span>\n                                                </button>\n                                                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeMapStatus($event, 'searchable', true)\">Yes</a></li>\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeMapStatus($event, 'searchable', false)\">No</a></li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Allow Robot</label>\n                                        <div class=\"form-control-static\">\n                                            <div class=\"btn-group\" dropdown>\n                                                <button id=\"allow-button\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                                                    {{allowrobot}} <span class=\"caret\"></span>\n                                                </button>\n                                                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeMapStatus($event, 'allowRobot', true)\">Yes</a></li>\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeMapStatus($event, 'allowRobot', false)\">No</a></li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Use Path Object for Navigation</label>\n                                        <div class=\"form-control-static\">\n                                            <div class=\"btn-group\" dropdown>\n                                                <button id=\"allow-button\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                                                    {{usepath}} <span class=\"caret\"></span>\n                                                </button>\n                                                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeMapStatus($event, 'usePath', true)\">Yes</a></li>\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeMapStatus($event, 'usePath', false)\">No</a></li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Secutity</label>\n                                        <div class=\"form-control-static\">\n                                            <div class=\"btn-group\" dropdown>\n                                                <button id=\"security-button\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                                                    {{security}} <span class=\"caret\"></span>\n                                                </button>\n                                                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeMapStatus($event, 'security', 'private')\">private</a></li>\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeMapStatus($event, 'security', 'password')\">password</a></li>\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeMapStatus($event, 'security', 'public')\">public</a></li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\" [ngClass]=\"{'has-error':!mapForm.controls['password'].valid}\">\n                                        <label>Password</label>\n                                        <input class=\"form-control\" placeholder=\"Enter password\" [formControl]=\"mapForm.controls['password']\" [ngModel]=\"map?.password\">\n                                        <div *ngIf=\"mapForm.controls['password'].hasError('required')\" class=\"alert alert-danger\">\n                                            When security is 'Password', you must make password.\n                                        </div>\n                                        <div *ngIf=\"mapForm.controls['password'].hasError('pattern')\" class=\"alert alert-danger\">\n                                            Password allows only a~z, A~Z, 0~9, !, @, #, $, %, ^, &amp;, *, (, ).\n                                        </div>\n                                        <div *ngIf=\"mapForm.controls['password'].hasError('minLength')\" class=\"alert alert-danger\">\n                                            Password must be 8 characters at least.\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!mapForm.valid\">Save</button>\n                                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"askDelete($event)\">Delete</button>\n                                        <a class=\"btn btn-primary btn-sm float-btn\" [routerLink]=\"['/maker/info-edit', map?._id]\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Info Editor</a>\n                                        <a class=\"btn btn-primary btn-sm float-btn margin-right-btn\" [routerLink]=\"['/maker/desk-edit', map?._id]\"><i class=\"fa fa-street-view\" aria-hidden=\"true\"></i> Desk Editor</a>\n                                        <a class=\"btn btn-primary btn-sm float-btn margin-right-btn\" [routerLink]=\"['/maker/map-edit', map?._id]\"><i class=\"fa fa-map\" aria-hidden=\"true\"></i> Map Editor</a>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/map-detail/map-detail.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".float-btn {\n  float: right;\n}\n.margin-right-btn {\n  margin-right: 5px;\n}\n.margin-top-btn {\n  margin-top: -5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map-detail/map-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__space_service__ = __webpack_require__("../../../../../src/app/space.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapDetailComponent = (function () {
    function MapDetailComponent(route, location, navigationService, spaceService, fb) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.navigationService = navigationService;
        this.spaceService = spaceService;
        this.map = {};
        this.searchable = 'no';
        this.allowrobot = 'no';
        this.usepath = 'no';
        this.security = 'private';
        this.editComplete = false;
        this.alert = {
            visible: false,
            message: ''
        };
        this.deleteProcess = false;
        this.timeZone = '+01:00';
        this.timeFormat = 'DD-MM-YYYY HH:mm:ss';
        navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
        });
        navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
        });
        function minValue(c) {
            if (parseInt(c.value) <= 0) {
                return { minValue: true };
            }
            else {
                return null;
            }
        }
        function makeRequiredForPassword() {
            var thisComponent = this;
            return function required(c) {
                if (thisComponent.map.security == 'password' && c.value === '') {
                    return { required: true };
                }
                else {
                    return null;
                }
            };
        }
        function makePatternForPassword() {
            var thisComponent = this;
            return function pattern(c) {
                var REGEXP = /^[0-9A-Za-z!@#$%^&*()]*$/i;
                if (thisComponent.map.security == 'password' && REGEXP.test(c.value) === false) {
                    return { pattern: true };
                }
                else {
                    return null;
                }
            };
        }
        function makeMinLengthForPassword() {
            var thisComponent = this;
            return function minLength(c) {
                if (thisComponent.map.security == 'password' && c.value && c.value.length < 8) {
                    return { minLength: true };
                }
                else {
                    return null;
                }
            };
        }
        this.mapForm = fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9A-Za-z ]*')]],
            'width': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9]*'), minValue]],
            'height': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9]*'), minValue]],
            'voxelSize': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9]*'), minValue]],
            'password': [null, [makeRequiredForPassword.call(this), makePatternForPassword.call(this), makeMinLengthForPassword.call(this)]]
        });
    }
    MapDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.spaceService.getMapById(params['id']);
        })
            .subscribe(function (res) {
            _this.map = res;
            _this.mapId = _this.map._id;
            //this.mapForm.controls['name'].setValue(this.map.name, { onlySelf: true });
            //this.mapForm.controls['voxelSize'].setValue(this.map.voxelSize, { onlySelf: true });
            //this.mapForm.controls['password'].setValue(this.map.password, { onlySelf: true });
            _this.searchable = _this.map.searchable ? 'yes' : 'no';
            _this.allowrobot = _this.map.allowRobot ? 'yes' : 'no';
            _this.usepath = _this.map.usePath ? 'yes' : 'no';
            _this.security = _this.map.security;
            _this.mapForm.updateValueAndValidity();
            _this.mapForm.controls['password'].updateValueAndValidity(); // custom validator must be called like as this
        });
        this.navigationService.setNavigationStatus('maker');
    };
    MapDetailComponent.prototype.changeMapStatus = function (event, property, value) {
        event.preventDefault();
        this.map[property] = value;
        this.searchable = this.map.searchable ? 'yes' : 'no';
        this.allowrobot = this.map.allowRobot ? 'yes' : 'no';
        this.usepath = this.map.usePath ? 'yes' : 'no';
        this.security = this.map.security;
        this.mapForm.updateValueAndValidity();
        this.mapForm.controls['password'].updateValueAndValidity(); // custom validator must be called like as this
    };
    MapDetailComponent.prototype.saveMap = function (value) {
        var _this = this;
        var mp = {
            name: value.name,
            width: value.width,
            height: value.height,
            voxelSize: value.voxelSize,
            password: value.password,
            searchable: this.map.searchable,
            allowRobot: this.map.allowRobot,
            usePath: this.map.usePath,
            security: this.security
        };
        this.spaceService.saveMap(this.mapId, mp).subscribe(function (res) {
            _this.map = res;
            //this.mapForm.controls['name'].setValue(this.map.name, { onlySelf: true });
            //this.mapForm.controls['voxelSize'].setValue(this.map.voxelSize, { onlySelf: true });
            //this.mapForm.controls['password'].setValue(this.map.password, { onlySelf: true });
            _this.searchable = _this.map.searchable ? 'yes' : 'no';
            _this.security = _this.map.security;
            _this.editComplete = true;
            setTimeout(function () {
                _this.editComplete = false;
            }, 3000);
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    MapDetailComponent.prototype.onCloseAlert = function (event) {
        this.alert.visible = false;
    };
    MapDetailComponent.prototype.askDelete = function (event) {
        event.preventDefault();
        this.deleteProcess = true;
    };
    MapDetailComponent.prototype.deleteMap = function (event) {
        var _this = this;
        event.preventDefault();
        this.spaceService.deleteMap(this.mapId).subscribe(function (res) {
            history.back();
        }, function (err) {
            console.log(err);
            _this.deleteProcess = false;
        });
    };
    return MapDetailComponent;
}());
MapDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map-detail',
        template: __webpack_require__("../../../../../src/app/map-detail/map-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map-detail/map-detail.component.less"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__space_service__["a" /* SpaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__space_service__["a" /* SpaceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _e || Object])
], MapDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/map-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/map-edit/map-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".webgl-wrapper {\n    padding: 0 !important;\n    background-color: #f3f5e3 !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map-edit/map-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-nav-private [status]=\"status\"></app-nav-private>\n\n    <div style=\"position:fixed;right:10px;top:10px;z-index:1001;\">\n        <alert type=\"warning\" dismissible=\"true\" *ngIf=\"graphicCardNeeded\" (onClose)=\"onCloseGraphicCardAlert($event)\">\n            <strong>Warning!</strong> Your graphics card does not seem to support <a href=\"http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation\" style=\"color:#000\">WebGL</a>.<br />\n            Find out how to get it <a href=\"http://get.webgl.org/\" style=\"color:#000\">here</a>.\n        </alert>\n        <alert type=\"warning\" dismissible=\"true\" *ngIf=\"browserNeeded\" (onClose)=\"onCloseBrowserAlert($event)\">\n            <strong>Warning!</strong> Your browser does not seem to support <a href=\"http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation\" style=\"color:#000\">WebGL</a>.<br />\n            Find out how to get it <a href=\"http://get.webgl.org/\" style=\"color:#000\">here</a>.\n        </alert>\n        <alert type=\"warning\" dismissible=\"true\" *ngIf=\"saveProcessStarted\">\n            <strong>Warning!</strong> Please wait for a while. Do not close this window.\n        </alert>\n        <alert type=\"success\" dismissible=\"true\" *ngIf=\"saveFinished\">\n            <strong>Map Updated!</strong> You successfully change map data.\n        </alert>\n    </div>\n\n    <div id=\"page-wrapper\" class=\"webgl-wrapper\" (mousemove)=\"onDocumentMouseMove($event)\">\n\n    </div>\n\n</div>\n\n<div class=\"modal fade\" bsModal #loadingModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Loading...</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Please wait for a while.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #saveAskModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Something Is Not Saved</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>There is something which is not saved after last save.</p>\n        <a class=\"btn btn-success\" (click)=\"saveMap(true)\">Save &amp; Exit</a>\n        <a class=\"btn btn-danger\" [routerLink]=\"['/maker/map-detail', map?._id]\">Don't Worry, Just Exit</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/map-edit/map-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__space_service__ = __webpack_require__("../../../../../src/app/space.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_three_examples_js_controls_NgTrackballControls_js__ = __webpack_require__("../../../../three/examples/js/controls/NgTrackballControls.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







 // must 'npm install @types/three'!!!

var MapEditComponent = (function () {
    function MapEditComponent(route, location, navigationService, spaceService, apiService, elementRef, router) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.navigationService = navigationService;
        this.spaceService = spaceService;
        this.apiService = apiService;
        this.elementRef = elementRef;
        this.router = router;
        this.renderingAllowed = true;
        this.map = {};
        this.dings = [];
        this.graphicCardNeeded = false;
        this.browserNeeded = false;
        this.saveProcessStarted = false;
        this.saveFinished = false;
        this.viewInitFinished = false;
        this.dataInitFinished = false;
        this.needSave = false;
        //bgObj: any;
        this.voxelPosition = new __WEBPACK_IMPORTED_MODULE_7_three__["I" /* Vector3 */]();
        this.zoomFactor = 1;
        this.zoomIncFactor = 0.01;
        //checker: boolean = false;
        this.isCtrlDown = false;
        this.isAltDown = false;
        this.lastPutDelTime = Date.now();
        navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
            if (message.includes('dingid')) {
                var data = _this.message.split('=');
                _this.setVoxel(data[1]);
            }
            else if (message.includes('fillFloor')) {
                _this.fillFloorWithVoxel();
            }
            else if (message.includes('gridlayer')) {
                var data = _this.message.split('=');
                _this.moveGrid(data[1]);
            }
            else if (message.includes('gridtoggle')) {
                var data = _this.message.split('=');
                var bgStat = (data[1] == 'On') ? true : false;
                _this.setBackground(bgStat);
            }
            else if (message.includes('mapreload')) {
                _this.reloadMap();
            }
            else if (message.includes('save')) {
                _this.saveMap(false);
            }
            else if (message.includes('safeexit')) {
                _this.saveMap(true);
            }
            else if (message.includes('exit')) {
                _this.exitEditor();
            }
            else if (message.includes('home')) {
                _this.goHome();
            }
        });
        navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
        });
    }
    MapEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.spaceService.getMapById(params['id']);
        })
            .subscribe(function (res) {
            _this.map = res;
            _this.mapId = _this.map._id;
            _this.navigationService.sendNavigationMessage('mapid=' + _this.mapId);
            var bgImgName = (_this.map.bgImgName) ? _this.map.bgImgName : 'null';
            _this.navigationService.sendNavigationMessage('bgfile=' + bgImgName);
            _this.getDings();
            //this.mapForm.updateValueAndValidity();
            //this.mapForm.controls['password'].updateValueAndValidity(); // custom validator must be called like as this
        });
        this.rolloverTexture = {
            opacity: 0.6,
            transparent: true
        };
        this.navigationService.setNavigationStatus('mapeditor');
    };
    MapEditComponent.prototype.reloadMap = function () {
        var _this = this;
        this.spaceService.getMapById(this.mapId).subscribe(function (res) {
            _this.map = res;
            var bgImgName = (_this.map.bgImgName) ? _this.map.bgImgName : 'null';
            _this.navigationService.sendNavigationMessage('bgfile=' + bgImgName);
        });
    };
    MapEditComponent.prototype.getDings = function () {
        var _this = this;
        this.apiService.getDings().subscribe(function (dings) {
            _this.dings = dings;
            var texture = {};
            var material = {};
            for (var i in _this.dings) {
                _this.dings[i]._idx = i;
                switch (_this.dings[i].texture.shading) {
                    case 'THREE.FlatShading':
                        texture.shading = __WEBPACK_IMPORTED_MODULE_7_three__["k" /* FlatShading */];
                        break;
                }
                if (_this.dings[i].texture.color != '') {
                    var colors = _this.dings[i].texture.color.split(',');
                    texture.color = new __WEBPACK_IMPORTED_MODULE_7_three__["d" /* Color */]().setRGB(parseFloat(colors[0]), parseFloat(colors[1]), parseFloat(colors[2]));
                }
                if (_this.dings[i].texture.map != null && _this.dings[i].texture.map != '') {
                    // make map logic
                }
                texture.opacity = _this.dings[i].texture.opacity;
                if (texture.opacity < 1) {
                    texture.transparent = true;
                }
                switch (_this.dings[i].material) {
                    case 'THREE.MeshPhongMaterial':
                        material = new __WEBPACK_IMPORTED_MODULE_7_three__["v" /* MeshPhongMaterial */](texture);
                        break;
                    case 'THREE.MeshBasicMaterial':
                        material = new __WEBPACK_IMPORTED_MODULE_7_three__["t" /* MeshBasicMaterial */](texture);
                        break;
                    case 'THREE.MeshLambertMaterial':
                        material = new __WEBPACK_IMPORTED_MODULE_7_three__["u" /* MeshLambertMaterial */](texture);
                        break;
                }
                material._idx = i;
                //material._p = (this.dings[i].type === 'floor') ? 1 : 0;
                switch (_this.dings[i].type) {
                    case 'floor':
                        material._p = 1;
                        break;
                    case 'path':
                        material._p = 2;
                        break;
                    default:
                        material._p = 0;
                        break;
                }
                _this.dings[i]._material = material;
            }
            _this.dataInitFinished = true;
            if (_this.viewInitFinished == true) {
                _this.initWebGL();
            }
        });
    };
    MapEditComponent.prototype.ngAfterViewInit = function () {
        this.container = document.querySelector('#page-wrapper');
        this.mouse2D = new __WEBPACK_IMPORTED_MODULE_7_three__["H" /* Vector2 */]();
        this.viewInitFinished = true;
        if (this.dataInitFinished == true) {
            this.initWebGL();
        }
    };
    MapEditComponent.prototype.initWebGL = function () {
        if (this.detectWebGL() === false) {
            this.showWebGLAlert();
        }
        this.renderer = new __WEBPACK_IMPORTED_MODULE_7_three__["J" /* WebGLRenderer */]({
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true
        });
        this.camera = new __WEBPACK_IMPORTED_MODULE_7_three__["x" /* PerspectiveCamera */](25, this.container.clientWidth / this.container.clientHeight, 50, 1e7);
        this.camera.position.x = 800;
        this.camera.position.y = 800;
        this.camera.position.z = 800;
        this.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_7_three__["I" /* Vector3 */](0, 0, 0));
        this.controls = new __WEBPACK_IMPORTED_MODULE_8__node_modules_three_examples_js_controls_NgTrackballControls_js__["a" /* default */](this.camera, this.renderer.domElement);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 3.6;
        this.controls.panSpeed = 2;
        this.controls.noZoom = false;
        this.controls.noPan = false;
        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;
        this.controls.keys = [65, 83, 68]; // a:rotate, s:zoom, d:pan
        /*setTimeout(function() {
          let t = this;
          return function() {
            t.setRendererSize();
          }
        }.call(this), 3000);*/
        this.container.appendChild(this.renderer.domElement);
        this.navigationService.window.addEventListener('resize', function () {
            var t = this;
            return function () {
                t.setRendererSize();
            };
        }.call(this));
        this.scene = new __WEBPACK_IMPORTED_MODULE_7_three__["B" /* Scene */]();
        this.setGrid();
        var ambientLight = new __WEBPACK_IMPORTED_MODULE_7_three__["a" /* AmbientLight */](0x606060);
        var directionalLight = new __WEBPACK_IMPORTED_MODULE_7_three__["e" /* DirectionalLight */](0xffffff);
        directionalLight.position.set(1, 1, -1).normalize();
        this.scene.add(ambientLight);
        this.scene.add(directionalLight);
        this.rolloverGeo = new __WEBPACK_IMPORTED_MODULE_7_three__["b" /* BoxGeometry */](10, 10, 10);
        this.setVoxel(this.dings[0]._id);
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_7_three__["A" /* Raycaster */]();
        this.animate();
        if (this.map.fileName.length > 0) {
            this.loadingModal.show();
            var url = 'https://s3.eu-central-1.amazonaws.com/easyinside/maps/' + this.map.fileName;
            var xhr_1 = new XMLHttpRequest();
            if ('withCredentials' in xhr_1) {
                xhr_1.open('GET', url, true);
                //xhr.withCredentials = true;
                //xhr.setRequestHeader('Authorization', 'AKIAICLUJEHJFYOPSNAA');
            }
            //xhr.responseType = 'json';
            var t_1 = this;
            xhr_1.onreadystatechange = function () {
                var status;
                var data;
                if (xhr_1.readyState == 4) {
                    status = xhr_1.status;
                    if (status == 200) {
                        data = JSON.parse(xhr_1.responseText);
                        t_1.initAfterDataLoad(data);
                    }
                    else {
                        console.log('Error in reading json data');
                    }
                }
            };
            xhr_1.send();
        }
    };
    MapEditComponent.prototype.detectWebGL = function () {
        try {
            return !!this.navigationService.window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
        }
        catch (e) {
            return false;
        }
    };
    MapEditComponent.prototype.showWebGLAlert = function () {
        if (this.navigationService.window.WebGLRenderingContext) {
            this.graphicCardNeeded = true;
        }
        else {
            this.browserNeeded = true;
        }
    };
    MapEditComponent.prototype.onCloseGraphicCardAlert = function (event) {
        this.graphicCardNeeded = false;
    };
    MapEditComponent.prototype.onCloseBrowserAlert = function (event) {
        this.browserNeeded = false;
    };
    MapEditComponent.prototype.setRendererSize = function () {
        var w = this.container.clientWidth;
        var h = this.container.clientHeight;
        this.renderer.setSize(w, h);
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.controls.handleResize();
    };
    MapEditComponent.prototype.onDocumentKeyDown = function (e) {
        switch (e.keyCode) {
            case 17:
                this.isCtrlDown = true;
                break;
            case 18:
                this.isAltDown = true;
                break;
            case 38:
                this.zoomInOut('in');
                break;
            case 40:
                this.zoomInOut('out');
                break;
        }
    };
    ;
    MapEditComponent.prototype.onDocumentKeyUp = function (e) {
        switch (e.keyCode) {
            case 17:
                this.isCtrlDown = false;
                break;
            case 18:
                this.isAltDown = false;
                break;
        }
    };
    MapEditComponent.prototype.setVoxel = function (dId) {
        for (var _i = 0, _a = this.dings; _i < _a.length; _i++) {
            var d = _a[_i];
            if (d._id == dId) {
                this.selectedDing = d;
                break;
            }
        }
        var texture = {};
        var material = {};
        for (var k in this.rolloverTexture) {
            texture[k] = this.rolloverTexture[k];
        }
        switch (this.selectedDing.texture.shading) {
            case 'THREE.FlatShading':
                texture.shading = __WEBPACK_IMPORTED_MODULE_7_three__["k" /* FlatShading */];
                break;
        }
        if (this.selectedDing.texture.color != '') {
            var colors = this.selectedDing.texture.color.split(',');
            texture.color = new __WEBPACK_IMPORTED_MODULE_7_three__["d" /* Color */]().setRGB(parseFloat(colors[0]), parseFloat(colors[1]), parseFloat(colors[2]));
        }
        //texture.opacity = this.selectedDing.texture.opacity;
        switch (this.selectedDing.material) {
            case 'THREE.MeshPhongMaterial':
                //this.rolloverMaterial = new THREE.MeshPhongMaterial(texture);
                material = new __WEBPACK_IMPORTED_MODULE_7_three__["v" /* MeshPhongMaterial */](texture);
                break;
            case 'THREE.MeshBasicMaterial':
                //this.rolloverMaterial = new THREE.MeshBasicMaterial(texture);
                material = new __WEBPACK_IMPORTED_MODULE_7_three__["t" /* MeshBasicMaterial */](texture);
                break;
            case 'THREE.MeshLambertMaterial':
                material = new __WEBPACK_IMPORTED_MODULE_7_three__["u" /* MeshLambertMaterial */](texture);
                break;
        }
        material._idx = this.selectedDing._idx;
        if (!this.rolloverMesh) {
            //this.rolloverMesh = new THREE.Mesh(this.rolloverGeo, this.rolloverMaterial);
            this.rolloverMesh = new __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */](this.rolloverGeo, material);
            this.scene.add(this.rolloverMesh);
        }
        else {
            this.rolloverMesh.material = material;
        }
    };
    ;
    /**
     * voxelSize : 10 = map.width : planeWidth
     * planeWidth = 10 * map.width / voxelSize
     * planeHeight = 10 * map.height / voxelSize
     */
    MapEditComponent.prototype.setGrid = function () {
        if (this.planeObj) {
            this.scene.remove(this.planeObj);
        }
        var planeWidth = Math.floor(10 * this.map.width / this.map.voxelSize);
        var planeHeight = Math.floor(10 * this.map.height / this.map.voxelSize);
        var planeMaterial = new __WEBPACK_IMPORTED_MODULE_7_three__["t" /* MeshBasicMaterial */]({
            color: 0x777777,
            opacity: 0.1,
            transparent: true
            //wireframe: true
        });
        //this.planeObj = new THREE.Mesh(new THREE.PlaneGeometry(planeWidth, planeHeight, Math.floor(planeWidth / 10), Math.floor(planeHeight / 10)), planeMaterial);
        this.planeObj = new __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */](new __WEBPACK_IMPORTED_MODULE_7_three__["y" /* PlaneGeometry */](planeWidth, planeHeight, 1, 1), planeMaterial);
        // add lines on plane
        var lineMaterial = new __WEBPACK_IMPORTED_MODULE_7_three__["o" /* LineBasicMaterial */]({
            color: 0x777777,
            linewidth: 1,
            opacity: 0.7,
            transparent: true
        });
        var gridGeo = new __WEBPACK_IMPORTED_MODULE_7_three__["l" /* Geometry */]();
        var halfW = Math.floor(planeWidth / 2);
        var halfH = Math.floor(planeHeight / 2);
        for (var i = -halfW; i <= halfW; i += 10) {
            gridGeo.vertices.push(new __WEBPACK_IMPORTED_MODULE_7_three__["I" /* Vector3 */](i, -halfH, 0));
            gridGeo.vertices.push(new __WEBPACK_IMPORTED_MODULE_7_three__["I" /* Vector3 */](i, halfH, 0));
        }
        for (var i = -halfH; i <= halfH; i += 10) {
            gridGeo.vertices.push(new __WEBPACK_IMPORTED_MODULE_7_three__["I" /* Vector3 */](-halfW, i, 0));
            gridGeo.vertices.push(new __WEBPACK_IMPORTED_MODULE_7_three__["I" /* Vector3 */](halfW, i, 0));
        }
        var grid = new __WEBPACK_IMPORTED_MODULE_7_three__["p" /* LineSegments */](gridGeo, lineMaterial);
        this.planeObj.add(grid);
        this.planeObj.overdraw = true;
        this.planeObj.rotation.x = -(Math.PI * 90 / 180);
        this.planeObj.material.depthTest = false;
        this.planeObj.renderOrder = 1;
        this.scene.add(this.planeObj);
    };
    MapEditComponent.prototype.moveGrid = function (layer) {
        this.planeObj.position.y = parseInt(layer) * 10;
    };
    MapEditComponent.prototype.setBackground = function (status) {
        if (status) {
            //this.planeObj.material.map = THREE.ImageUtils.loadTexture('https://s3.eu-central-1.amazonaws.com/easyinside/gridbgs/' + this.map.bgImgName);
            /*let imgUrl = 'https://s3.eu-central-1.amazonaws.com/easyinside/gridbgs/' + this.map.bgImgName;
            let tLoader = new THREE.TextureLoader();
            tLoader.load(imgUrl, function(t) {
              return function(tex) {
                t.planeObj.material.map = tex;
                t.planeObj.material.needsUpdate = true;
              }
            }(this));*/
            var img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = function (t) {
                return function (tex) {
                    t.planeObj.material.map = new __WEBPACK_IMPORTED_MODULE_7_three__["G" /* Texture */](this);
                    t.planeObj.material.transparent = false;
                    t.planeObj.material.map.needsUpdate = true;
                    t.planeObj.material.needsUpdate = true;
                };
            }(this);
            img.src = 'https://s3.eu-central-1.amazonaws.com/easyinside/gridbgs/' + this.map.bgImgName;
        }
        else {
            this.planeObj.material.map = null;
            this.planeObj.material.transparent = true;
            this.planeObj.material.needsUpdate = true;
        }
    };
    MapEditComponent.prototype.onDocumentMouseMove = function (event) {
        this.mouse2D.x = ((event.clientX - this.container.offsetLeft) / this.container.clientWidth) * 2 - 1;
        this.mouse2D.y = -((event.clientY - this.container.offsetTop) / this.container.clientHeight) * 2 + 1;
    };
    MapEditComponent.prototype.zoomInOut = function (cmd) {
        switch (cmd) {
            case 'in':
                this.zoomFactor = (this.zoomFactor > 1) ? 1 : this.zoomFactor;
                this.zoomFactor = this.zoomFactor - this.zoomIncFactor;
                this.zoomFactor = (this.zoomFactor <= 0.2) ? 0.2 : this.zoomFactor;
                break;
            case 'out':
                this.zoomFactor = (this.zoomFactor < 1) ? 1 : this.zoomFactor;
                this.zoomFactor = this.zoomFactor + this.zoomIncFactor;
                this.zoomFactor = (this.zoomFactor >= 2) ? 1 : this.zoomFactor;
                break;
        }
        this.camera.fov *= this.zoomFactor;
        this.camera.updateProjectionMatrix();
    };
    MapEditComponent.prototype.fillFloorWithVoxel = function () {
        var planeWidth = Math.floor(10 * this.map.width / this.map.voxelSize);
        var planeHeight = Math.floor(10 * this.map.height / this.map.voxelSize);
        var halfW = Math.floor(planeWidth / 2);
        var halfH = Math.floor(planeHeight / 2);
        var material = this.getSelectedDingsMaterial(this.selectedDing._idx);
        var voxel;
        for (var x = -halfW; x < halfW; x += 10) {
            for (var z = -halfH; z < halfH; z += 10) {
                voxel = new __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */](this.rolloverGeo, material);
                voxel.position.x = Math.floor(x / 10) * 10 + 5;
                voxel.position.y = 5;
                voxel.position.z = Math.floor(z / 10) * 10 + 5;
                voxel.matrixAutoUpdate = true;
                voxel.updateMatrix();
                this.scene.add(voxel);
            }
        }
    };
    MapEditComponent.prototype.getSelectedDingsMaterial = function (idx) {
        //let texture: any = {};
        //let material: any = {};
        var dingChoosen;
        for (var i in this.dings) {
            if (this.dings[i]._idx == idx) {
                dingChoosen = this.dings[i];
            }
        }
        /*switch (dingChoosen.texture.shading) {
          case 'THREE.FlatShading':
            texture.shading = THREE.FlatShading;
            break;
        }
        if (dingChoosen.texture.color != '') {
          let colors = dingChoosen.texture.color.split(',');
          texture.color = new THREE.Color().setRGB(parseFloat(colors[0]), parseFloat(colors[1]), parseFloat(colors[2]));
        }
        if (dingChoosen.texture.map != null && dingChoosen.texture.map != '') {
          // make map logic
        }
        texture.opacity = dingChoosen.texture.opacity;
        if (texture.opacity < 1) {
          texture.transparent = true;
        }
    
        switch (dingChoosen.material) {
          case 'THREE.MeshPhongMaterial':
            material = new THREE.MeshPhongMaterial(texture);
            break;
          case 'THREE.MeshBasicMaterial':
            material = new THREE.MeshBasicMaterial(texture);
            break;
        }
        material._type = dingChoosen.type;
        material._idx = dingChoosen.idx;
        
        return material;*/
        return dingChoosen._material;
    };
    MapEditComponent.prototype.putDelVoxel = function () {
        if (this.isCtrlDown === false && this.isAltDown === false) {
            return;
        }
        if (Date.now() - this.lastPutDelTime < 500) {
            return;
        }
        else {
            this.lastPutDelTime = Date.now();
        }
        var intersects = this.raycaster.intersectObjects(this.scene.children);
        if (intersects.length > 0) {
            var intersector = this.getRealIntersector(intersects);
            if (this.isAltDown) {
                if (intersector.object != this.planeObj) {
                    this.scene.remove(intersector.object);
                    this.needSave = true;
                }
            }
            else if (this.isCtrlDown) {
                this.setVoxelPosition(intersector);
                var material = this.getSelectedDingsMaterial(this.selectedDing._idx);
                var voxel = new __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */](this.rolloverGeo, material);
                voxel.position.copy(this.voxelPosition);
                voxel.matrixAutoUpdate = false;
                voxel.updateMatrix();
                this.scene.add(voxel);
                this.needSave = true;
            }
        }
    };
    ;
    MapEditComponent.prototype.getRealIntersector = function (intersects) {
        var intersector;
        for (var i = 0; i < intersects.length; i++) {
            intersector = intersects[i];
            if (intersector.object != this.rolloverMesh) {
                return intersector;
            }
        }
    };
    MapEditComponent.prototype.setVoxelPosition = function (intersector) {
        var normalMatrix = new __WEBPACK_IMPORTED_MODULE_7_three__["q" /* Matrix3 */]();
        normalMatrix.getNormalMatrix(intersector.object.matrixWorld);
        var rotatedNormal = new __WEBPACK_IMPORTED_MODULE_7_three__["I" /* Vector3 */]().copy(intersector.face.normal);
        rotatedNormal.applyMatrix3(normalMatrix);
        this.voxelPosition.addVectors(intersector.point, rotatedNormal);
        this.voxelPosition.x = Math.floor(this.voxelPosition.x / 10) * 10 + 5;
        this.voxelPosition.y = Math.floor(this.voxelPosition.y / 10) * 10 + 5;
        this.voxelPosition.z = Math.floor(this.voxelPosition.z / 10) * 10 + 5;
    };
    MapEditComponent.prototype.initAfterDataLoad = function (data) {
        var maxIdx = 0;
        for (var i in this.dings) {
            this.dings[i]._idx = null;
            this.dings[i]._material._idx = null;
        }
        for (var i in data.m) {
            for (var j in this.dings) {
                if (this.dings[j]._id == data.m[i]._id) {
                    this.dings[j]._idx = data.m[i].idx;
                    this.dings[j]._material._idx = data.m[i].idx;
                    maxIdx = (data.m[i].idx > maxIdx) ? data.m[i].idx : maxIdx;
                }
            }
        }
        for (var i in this.dings) {
            if (this.dings[i]._idx == null) {
                maxIdx++;
                this.dings[i]._idx = maxIdx;
                this.dings[i]._material._idx = maxIdx;
            }
        }
        var children = this.scene.children.slice(0);
        for (var i = 0; i < children.length; i++) {
            if (children[i] instanceof __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */] === false) {
                continue;
            }
            if (children[i].geometry instanceof __WEBPACK_IMPORTED_MODULE_7_three__["b" /* BoxGeometry */] === false) {
                continue;
            }
            if (children[i] === this.rolloverMesh) {
                continue;
            }
            this.scene.remove(children[i]);
        }
        var voxels = data.d;
        var voxel, mesh, tmpMaterial;
        var voxelLength = voxels.length;
        for (var i = 0; i < voxelLength; i++) {
            //for (let i = 0; i < 10000; i++) {
            //console.log(i);
            voxel = voxels[i];
            tmpMaterial = this.getSelectedDingsMaterial(voxel.t);
            mesh = new __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */](this.rolloverGeo, tmpMaterial);
            mesh.position.x = voxel.x * 10 + 5;
            mesh.position.y = voxel.y * 10 + 5;
            mesh.position.z = voxel.z * 10 + 5;
            mesh.matrixAutoUpdate = true;
            mesh.updateMatrix();
            this.scene.add(mesh);
        }
        this.setRendererSize();
        this.loadingModal.hide();
    };
    MapEditComponent.prototype.saveMap = function (exitAfterSave) {
        var _this = this;
        this.saveProcessStarted = true;
        var children = this.scene.children;
        var voxels = [];
        var child;
        var ds = [];
        for (var i in this.dings) {
            ds.push({
                idx: this.dings[i]._idx,
                _id: this.dings[i]._id
            });
        }
        for (var i = 0; i < children.length; i++) {
            child = children[i];
            if (child instanceof __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */] === false) {
                continue;
            }
            if (child.geometry instanceof __WEBPACK_IMPORTED_MODULE_7_three__["b" /* BoxGeometry */] === false) {
                continue;
            }
            if (child === this.rolloverMesh) {
                continue;
            }
            voxels.push({
                x: (child.position.x - 5) / 10,
                y: (child.position.y - 5) / 10,
                z: (child.position.z - 5) / 10,
                t: child.material._idx,
                p: child.material._p
            });
        }
        var fileStr = {
            m: ds,
            d: voxels
        };
        var dataUri = JSON.stringify(fileStr);
        this.spaceService.saveMapFile(this.mapId, { file: dataUri }).subscribe(function (res) {
            if (res.result) {
                _this.needSave = false;
                if (exitAfterSave) {
                    //document.location.href = '/maker/map-detail/' + this.mapId;
                    _this.exitToDetail();
                }
                else {
                    _this.saveProcessStarted = false;
                    _this.saveFinished = true;
                    setTimeout(function () {
                        _this.saveFinished = false;
                    }, 3000);
                }
            }
        });
    };
    MapEditComponent.prototype.exitEditor = function () {
        if (this.needSave) {
            this.saveAskModal.show();
        }
        else {
            //document.location.href = '/maker/map-detail/' + this.mapId;
            this.exitToDetail();
        }
    };
    MapEditComponent.prototype.exitToDetail = function () {
        this.renderingAllowed = false;
        this.router.navigate(['/maker/map-detail', this.mapId]);
    };
    MapEditComponent.prototype.goHome = function () {
        this.renderingAllowed = false;
        this.router.navigate(['/']);
    };
    MapEditComponent.prototype.animate = function () {
        if (this.renderingAllowed) {
            requestAnimationFrame(function () {
                var t = this;
                return function () {
                    t.animate();
                };
            }.call(this));
        }
        this.controls.update();
        this.render();
    };
    MapEditComponent.prototype.render = function () {
        this.putDelVoxel();
        this.raycaster.setFromCamera(this.mouse2D, this.camera);
        var intersects = this.raycaster.intersectObjects(this.scene.children);
        if (intersects.length > 0) {
            var intersector = this.getRealIntersector(intersects);
            if (intersector) {
                this.setVoxelPosition(intersector);
                this.rolloverMesh.position.copy(this.voxelPosition);
            }
        }
        this.renderer.render(this.scene, this.camera);
    };
    return MapEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loadingModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], MapEditComponent.prototype, "loadingModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('saveAskModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
], MapEditComponent.prototype, "saveAskModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MapEditComponent.prototype, "onDocumentKeyDown", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MapEditComponent.prototype, "onDocumentKeyUp", null);
MapEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map-edit',
        template: __webpack_require__("../../../../../src/app/map-edit/map-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map-edit/map-edit.component.css"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__space_service__["a" /* SpaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__space_service__["a" /* SpaceService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _j || Object])
], MapEditComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/map-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/map-login/map-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".intro-header {\n    color: #333;\n    background: url(/assets/bootstrap/landingpage/img/login-bg.jpg) no-repeat center center;\n    background-size: cover;\n    height: 100vh;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map-login/map-login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-default navbar-fixed-top topnav\" role=\"navigation\">\n    <div class=\"container topnav\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand topnav\" href=\"#\">Easy Inside</a>\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#about\">About</a>\n                </li>\n                <li>\n                    <a href=\"#services\">Services</a>\n                </li>\n                <li>\n                    <a href=\"#contact\">Contact</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container -->\n</nav>\n\n<div class=\"intro-header\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-lg-offset-3\">\n                <div class=\"login-message\">\n                    <div class=\"panel panel-default\" style=\"margin-top: 10vh;\">\n                        <div class=\"panel-heading\">\n                            This map needs password\n                        </div>\n                        <div class=\"panel-body\">\n                            <form role=\"form\" [formGroup]=\"pwForm\" (ngSubmit)=\"submitPassword(pwForm.value)\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-10 col-lg-offset-1\">\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"Enter password\" [formControl]=\"pwForm.controls['pw']\">\n                                    <div *ngIf=\"pwForm.controls['pw'].hasError('required') && pwForm.controls['pw'].touched\" class=\"alert alert-danger\">\n                                        You must input password.\n                                    </div>\n                                    <div *ngIf=\"wrongPassword\" class=\"alert alert-danger\">\n                                        Password is wrong.\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" style=\"margin-top:10px;\">\n                                <div class=\"col-lg-10 col-lg-offset-1\">\n                                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!pwForm.valid\">\n                                        Submit Password\n                                    </button>\n                                </div>\n                            </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/map-login/map-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapLoginComponent = (function () {
    function MapLoginComponent(route, location, apiService, fb) {
        this.route = route;
        this.location = location;
        this.apiService = apiService;
        this.wrongPassword = false;
        this.pwForm = fb.group({
            'pw': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]]
        });
    }
    MapLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.mapId = params['id'];
        })
            .subscribe(function (res) {
            //console.log(res, this.mapId);
        });
        this.route.queryParams.subscribe(function (params) {
            _this.infoId = params['infoId'];
        });
    };
    MapLoginComponent.prototype.submitPassword = function (value) {
        var _this = this;
        var data = {
            password: value.pw
        };
        this.apiService.mapPassword(this.mapId, data).subscribe(function (res) {
            if (typeof res.error !== 'undefined') {
                if (res.error.includes('PASSWORD')) {
                    _this.wrongPassword = true;
                }
            }
            if (typeof res.result !== 'undefined') {
                if (res.result.includes('PASS')) {
                    _this.wrongPassword = false;
                    if (_this.infoId) {
                        document.location.href = '/map/' + _this.mapId + '?infoId=' + _this.infoId;
                    }
                    else {
                        document.location.href = '/map/' + _this.mapId;
                    }
                }
            }
        });
    };
    return MapLoginComponent;
}());
MapLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map-login',
        template: __webpack_require__("../../../../../src/app/map-login/map-login.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/bootstrap/landingpage/css/landing-page.css"), __webpack_require__("../../../../../src/app/map-login/map-login.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object])
], MapLoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/map-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/map-optimizer/map-optimizer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".webgl-wrapper {\n    padding: 0 !important;\n    background-color: #f3f5e3 !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map-optimizer/map-optimizer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-nav-private [status]=\"status\"></app-nav-private>\n\n    <div style=\"position:fixed;right:10px;top:10px;z-index:1001;\">\n        <alert type=\"warning\" dismissible=\"true\" *ngIf=\"graphicCardNeeded\" (onClose)=\"onCloseGraphicCardAlert($event)\">\n            <strong>Warning!</strong> Your graphics card does not seem to support <a href=\"http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation\" style=\"color:#000\">WebGL</a>.<br />\n            Find out how to get it <a href=\"http://get.webgl.org/\" style=\"color:#000\">here</a>.\n        </alert>\n        <alert type=\"warning\" dismissible=\"true\" *ngIf=\"browserNeeded\" (onClose)=\"onCloseBrowserAlert($event)\">\n            <strong>Warning!</strong> Your browser does not seem to support <a href=\"http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation\" style=\"color:#000\">WebGL</a>.<br />\n            Find out how to get it <a href=\"http://get.webgl.org/\" style=\"color:#000\">here</a>.\n        </alert>\n    </div>\n\n    <div id=\"page-wrapper\" class=\"webgl-wrapper\">\n\n    </div>\n\n</div>\n\n<div class=\"modal fade\" bsModal #savingModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Saving...</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Optimizing is finished. Saving optimized result...</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #optimizationModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Optimizing...</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>It takes long time. Please wait...</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #loadingModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Loading Data...</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Please wait for a while.</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/map-optimizer/map-optimizer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapOptimizerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__space_service__ = __webpack_require__("../../../../../src/app/space.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_csg_ThreeCSG__ = __webpack_require__("../../../../../src/assets/csg/ThreeCSG.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







 // must 'npm install @types/three'!!!

var MapOptimizerComponent = (function () {
    function MapOptimizerComponent(route, location, navigationService, spaceService, apiService, elementRef) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.navigationService = navigationService;
        this.spaceService = spaceService;
        this.apiService = apiService;
        this.elementRef = elementRef;
        this.map = {};
        this.dings = [];
        this.graphicCardNeeded = false;
        this.browserNeeded = false;
        this.viewInitFinished = false;
        this.dataInitFinished = false;
        this.bspByTypes = {};
        navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
        });
        navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
        });
    }
    MapOptimizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.spaceService.getMapById(params['id']);
        })
            .subscribe(function (res) {
            _this.map = res;
            _this.mapId = _this.map._id;
            _this.getDings();
        });
        this.navigationService.setNavigationStatus('mapoptimizer');
    };
    MapOptimizerComponent.prototype.getDings = function () {
        var _this = this;
        this.apiService.getDings().subscribe(function (dings) {
            _this.dings = dings;
            var texture = {};
            var material = {};
            for (var i in _this.dings) {
                _this.dings[i]._idx = i;
                switch (_this.dings[i].texture.shading) {
                    case 'THREE.FlatShading':
                        texture.shading = __WEBPACK_IMPORTED_MODULE_7_three__["k" /* FlatShading */];
                        break;
                }
                if (_this.dings[i].texture.color != '') {
                    var colors = _this.dings[i].texture.color.split(',');
                    texture.color = new __WEBPACK_IMPORTED_MODULE_7_three__["d" /* Color */]().setRGB(parseFloat(colors[0]), parseFloat(colors[1]), parseFloat(colors[2]));
                }
                if (_this.dings[i].texture.map != null && _this.dings[i].texture.map != '') {
                    // make map logic
                }
                texture.opacity = _this.dings[i].texture.opacity;
                if (texture.opacity < 1) {
                    texture.transparent = true;
                }
                switch (_this.dings[i].material) {
                    case 'THREE.MeshPhongMaterial':
                        material = new __WEBPACK_IMPORTED_MODULE_7_three__["v" /* MeshPhongMaterial */](texture);
                        break;
                    case 'THREE.MeshBasicMaterial':
                        material = new __WEBPACK_IMPORTED_MODULE_7_three__["t" /* MeshBasicMaterial */](texture);
                        break;
                    case 'THREE.MeshLambertMaterial':
                        material = new __WEBPACK_IMPORTED_MODULE_7_three__["u" /* MeshLambertMaterial */](texture);
                        break;
                }
                material._idx = i;
                _this.dings[i]._material = material;
            }
            _this.dataInitFinished = true;
            if (_this.viewInitFinished == true) {
                _this.initWebGL();
            }
        });
    };
    MapOptimizerComponent.prototype.ngAfterViewInit = function () {
        this.container = document.querySelector('#page-wrapper');
        this.viewInitFinished = true;
        if (this.dataInitFinished == true) {
            this.initWebGL();
        }
    };
    MapOptimizerComponent.prototype.initWebGL = function () {
        if (this.detectWebGL() === false) {
            this.showWebGLAlert();
        }
        this.renderer = new __WEBPACK_IMPORTED_MODULE_7_three__["J" /* WebGLRenderer */]({
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true
        });
        this.camera = new __WEBPACK_IMPORTED_MODULE_7_three__["x" /* PerspectiveCamera */](25, this.container.clientWidth / this.container.clientHeight, 50, 1e7);
        this.camera.position.x = 800;
        this.camera.position.y = 800;
        this.camera.position.z = 800;
        this.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_7_three__["I" /* Vector3 */](0, 0, 0));
        setTimeout(function () {
            var t = this;
            return function () {
                t.setRendererSize();
            };
        }.call(this), 3000);
        this.container.appendChild(this.renderer.domElement);
        this.navigationService.window.addEventListener('resize', function () {
            var t = this;
            return function () {
                t.setRendererSize();
            };
        }.call(this));
        this.scene = new __WEBPACK_IMPORTED_MODULE_7_three__["B" /* Scene */]();
        var ambientLight = new __WEBPACK_IMPORTED_MODULE_7_three__["a" /* AmbientLight */](0x606060);
        var directionalLight = new __WEBPACK_IMPORTED_MODULE_7_three__["e" /* DirectionalLight */](0xffffff);
        directionalLight.position.set(1, 1, -1).normalize();
        this.scene.add(ambientLight);
        this.scene.add(directionalLight);
        this.animate();
        if (this.map.fileName.length > 0) {
            this.loadingModal.show();
            var url = 'https://s3.eu-central-1.amazonaws.com/easyinside/maps/' + this.map.fileName;
            var xhr_1 = new XMLHttpRequest();
            if ('withCredentials' in xhr_1) {
                xhr_1.open('GET', url, true);
                //xhr.withCredentials = true;
                //xhr.setRequestHeader('Authorization', 'AKIAICLUJEHJFYOPSNAA');
            }
            //xhr.responseType = 'json';
            var t_1 = this;
            xhr_1.onreadystatechange = function () {
                var status;
                var data;
                if (xhr_1.readyState == 4) {
                    status = xhr_1.status;
                    if (status == 200) {
                        data = JSON.parse(xhr_1.responseText);
                        t_1.loadingModal.hide();
                        t_1.mapOptimizing(data);
                    }
                    else {
                        console.log('Error in reading json data');
                    }
                }
            };
            xhr_1.send();
        }
    };
    MapOptimizerComponent.prototype.detectWebGL = function () {
        try {
            return !!this.navigationService.window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
        }
        catch (e) {
            return false;
        }
    };
    MapOptimizerComponent.prototype.showWebGLAlert = function () {
        if (this.navigationService.window.WebGLRenderingContext) {
            this.graphicCardNeeded = true;
        }
        else {
            this.browserNeeded = true;
        }
    };
    MapOptimizerComponent.prototype.onCloseGraphicCardAlert = function (event) {
        this.graphicCardNeeded = false;
    };
    MapOptimizerComponent.prototype.onCloseBrowserAlert = function (event) {
        this.browserNeeded = false;
    };
    MapOptimizerComponent.prototype.setRendererSize = function () {
        var w = this.container.clientWidth;
        var h = this.container.clientHeight;
        this.renderer.setSize(w, h);
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
    };
    MapOptimizerComponent.prototype.getSelectedDing = function (idx) {
        var dingChoosen;
        for (var i in this.dings) {
            if (this.dings[i]._idx == idx) {
                dingChoosen = this.dings[i];
            }
        }
        return dingChoosen;
    };
    MapOptimizerComponent.prototype.checkVoxDiffer = function (vox1, vox2) {
        var dX = vox2.x - vox1.x, dY = vox2.y - vox1.y, dZ = vox2.z - vox1.z, score = Math.abs(dX) + Math.abs(dY) + Math.abs(dZ);
        return {
            'dX': dX,
            'dY': dY,
            'dZ': dZ,
            'score': score
        };
    };
    MapOptimizerComponent.prototype.mapOptimizing = function (data) {
        this.optimizationModal.show();
        var maxIdx = 0;
        for (var i in this.dings) {
            this.dings[i]._idx = null;
            this.dings[i]._material._idx = null;
        }
        for (var i in data.m) {
            for (var j in this.dings) {
                if (this.dings[j]._id == data.m[i]._id) {
                    this.dings[j]._idx = data.m[i].idx;
                    this.dings[j]._material._idx = data.m[i].idx;
                    maxIdx = (data.m[i].idx > maxIdx) ? data.m[i].idx : maxIdx;
                }
            }
        }
        for (var i in this.dings) {
            if (this.dings[i]._idx == null) {
                maxIdx++;
                this.dings[i]._idx = maxIdx;
                this.dings[i]._material._idx = maxIdx;
            }
        }
        var voxels = data.d;
        var voxelLength = voxels.length;
        var voxel;
        var structuredVoxels = {};
        var structuredPaths = {};
        var paths;
        for (var i = 0; i < voxelLength; i++) {
            voxel = voxels[i];
            // path objects will be managed separately
            if (voxel.p === 2) {
                if (typeof structuredPaths[voxel.t] === 'undefined') {
                    structuredPaths[voxel.t] = {};
                }
                if (typeof structuredPaths[voxel.t][voxel.y] === 'undefined') {
                    structuredPaths[voxel.t][voxel.y] = {};
                }
                if (typeof structuredPaths[voxel.t][voxel.y][voxel.x] === 'undefined') {
                    structuredPaths[voxel.t][voxel.y][voxel.x] = [];
                }
                structuredPaths[voxel.t][voxel.y][voxel.x].push(voxel);
                continue;
            }
            // map objects except path
            if (typeof structuredVoxels[voxel.t] === 'undefined') {
                structuredVoxels[voxel.t] = {};
            }
            if (typeof structuredVoxels[voxel.t][voxel.y] === 'undefined') {
                structuredVoxels[voxel.t][voxel.y] = {};
            }
            if (typeof structuredVoxels[voxel.t][voxel.y][voxel.x] === 'undefined') {
                structuredVoxels[voxel.t][voxel.y][voxel.x] = [];
            }
            structuredVoxels[voxel.t][voxel.y][voxel.x].push(voxel);
        }
        voxels = [];
        for (var t in structuredVoxels) {
            for (var y in structuredVoxels[t]) {
                for (var x in structuredVoxels[t][y]) {
                    structuredVoxels[t][y][x].sort(function (a, b) {
                        if (a.z < b.z) {
                            return -1;
                        }
                        else if (a.z > b.z) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    });
                    voxels = voxels.concat(structuredVoxels[t][y][x]);
                }
            }
        }
        paths = [];
        for (var t in structuredPaths) {
            for (var y in structuredPaths[t]) {
                for (var x in structuredPaths[t][y]) {
                    structuredPaths[t][y][x].sort(function (a, b) {
                        if (a.z < b.z) {
                            return -1;
                        }
                        else if (a.z > b.z) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    });
                    paths = paths.concat(structuredPaths[t][y][x]);
                }
            }
        }
        var rawStructureBox = function () {
            return {
                size: {
                    x: 10,
                    y: 10,
                    z: 10
                },
                position: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            };
        };
        var box, dObj, mesh;
        var scaleFactor = 10;
        // merging objs except path
        voxelLength = voxels.length;
        for (var i = 0; i < voxelLength; i++) {
            voxel = voxels[i];
            if (i === 0) {
                box = rawStructureBox();
                box.position.x = voxel.x * scaleFactor + (scaleFactor / 2);
                box.position.y = voxel.y * scaleFactor + (scaleFactor / 2);
                box.position.z = voxel.z * scaleFactor + (scaleFactor / 2);
                box.__t = voxel.t;
                continue;
            }
            dObj = this.checkVoxDiffer(voxels[i - 1], voxel);
            if (box.__t === voxel.t && dObj.score === 1 && Math.abs(dObj.dZ) === 1) {
                if (dObj.dZ !== 0) {
                    box.size.z += Math.abs(dObj.dZ) * scaleFactor;
                    box.position.z += (dObj.dZ * scaleFactor) / 2;
                }
            }
            else {
                if (this.getSelectedDing(box.__t).type === 'wall') {
                    box.size.y = 200;
                    box.position.y = 110;
                }
                mesh = new __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */](new __WEBPACK_IMPORTED_MODULE_7_three__["b" /* BoxGeometry */](box.size.x, box.size.y, box.size.z));
                mesh.position.x = box.position.x;
                mesh.position.y = box.position.y;
                mesh.position.z = box.position.z;
                mesh.__t = box.__t;
                this.mergeMesh(mesh, mesh.__t);
                box = rawStructureBox();
                box.position.x = voxel.x * scaleFactor + (scaleFactor / 2);
                box.position.y = voxel.y * scaleFactor + (scaleFactor / 2);
                box.position.z = voxel.z * scaleFactor + (scaleFactor / 2);
                box.__t = voxel.t;
            }
            if (i === voxelLength - 1) {
                if (this.getSelectedDing(box.__t).type === 'wall') {
                    box.size.y = 200;
                    box.position.y = 110;
                }
                mesh = new __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */](new __WEBPACK_IMPORTED_MODULE_7_three__["b" /* BoxGeometry */](box.size.x, box.size.y, box.size.z));
                mesh.position.x = box.position.x;
                mesh.position.y = box.position.y;
                mesh.position.z = box.position.z;
                mesh.__t = box.__t;
                this.mergeMesh(mesh, mesh.__t);
            }
        }
        /*for (let t in this.bspByTypes) {
          let tempMesh = this.getBsp(t).toMesh(this.getSelectedDing(t)._material);
          tempMesh.name = 'map';
          this.scene.add(tempMesh);
        }*/
        // merging path
        voxelLength = paths.length;
        for (var i = 0; i < voxelLength; i++) {
            voxel = paths[i];
            if (i === 0) {
                box = rawStructureBox();
                box.position.x = voxel.x * scaleFactor + (scaleFactor / 2);
                box.position.y = voxel.y * scaleFactor + (scaleFactor / 2);
                box.position.z = voxel.z * scaleFactor + (scaleFactor / 2);
                box.__t = voxel.t;
                continue;
            }
            dObj = this.checkVoxDiffer(paths[i - 1], voxel);
            if (box.__t === voxel.t && dObj.score === 1 && Math.abs(dObj.dZ) === 1) {
                if (dObj.dZ !== 0) {
                    box.size.z += Math.abs(dObj.dZ) * scaleFactor;
                    box.position.z += (dObj.dZ * scaleFactor) / 2;
                }
            }
            else {
                if (this.getSelectedDing(box.__t).type === 'wall') {
                    box.size.y = 200;
                    box.position.y = 110;
                }
                mesh = new __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */](new __WEBPACK_IMPORTED_MODULE_7_three__["b" /* BoxGeometry */](box.size.x, box.size.y, box.size.z));
                mesh.position.x = box.position.x;
                mesh.position.y = box.position.y;
                mesh.position.z = box.position.z;
                mesh.__t = box.__t;
                this.mergeMesh(mesh, mesh.__t);
                box = rawStructureBox();
                box.position.x = voxel.x * scaleFactor + (scaleFactor / 2);
                box.position.y = voxel.y * scaleFactor + (scaleFactor / 2);
                box.position.z = voxel.z * scaleFactor + (scaleFactor / 2);
                box.__t = voxel.t;
            }
            if (i === voxelLength - 1) {
                mesh = new __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */](new __WEBPACK_IMPORTED_MODULE_7_three__["b" /* BoxGeometry */](box.size.x, box.size.y, box.size.z));
                mesh.position.x = box.position.x;
                mesh.position.y = box.position.y;
                mesh.position.z = box.position.z;
                mesh.__t = box.__t;
                this.mergeMesh(mesh, mesh.__t);
            }
        }
        for (var t in this.bspByTypes) {
            var tempMesh = this.getBsp(t).toMesh(this.getSelectedDing(t)._material);
            var tmpType = this.getSelectedDing(t).type;
            tempMesh.name = (tmpType === 'path') ? 'path' : 'map';
            this.scene.add(tempMesh);
        }
        this.optimizationModal.hide();
        this.saveOptMap();
    };
    MapOptimizerComponent.prototype.saveOptMap = function () {
        var _this = this;
        this.savingModal.show();
        var children = this.scene.children;
        var voxels = [];
        var child;
        var ds = [];
        for (var i in this.dings) {
            ds.push({
                idx: this.dings[i]._idx,
                _id: this.dings[i]._id
            });
        }
        for (var i = 0; i < children.length; i++) {
            child = children[i];
            if (child instanceof __WEBPACK_IMPORTED_MODULE_7_three__["s" /* Mesh */] === false) {
                continue;
            }
            if (child.name !== 'map' && child.name !== 'path') {
                continue;
            }
            voxels.push({
                x: child.position.x,
                y: child.position.y,
                z: child.position.z,
                t: child.material._idx,
                g: child.geometry.toJSON()
            });
        }
        var fileStr = {
            m: ds,
            d: voxels
        };
        var dataUri = JSON.stringify(fileStr);
        this.spaceService.saveOptFile(this.mapId, { file: dataUri }).subscribe(function (res) {
            if (res.result) {
                _this.savingModal.hide();
                document.location.href = '/maker/desk-edit/' + _this.mapId;
            }
        });
    };
    MapOptimizerComponent.prototype.setBsp = function (t, bsp) {
        if (typeof this.bspByTypes[t] === 'undefined') {
            this.bspByTypes[t] = null;
        }
        if (bsp) {
            this.bspByTypes[t] = bsp;
        }
    };
    MapOptimizerComponent.prototype.getBsp = function (t) {
        this.setBsp(t, null);
        return this.bspByTypes[t];
    };
    MapOptimizerComponent.prototype.mergeMesh = function (mesh, t) {
        var bsp = new __WEBPACK_IMPORTED_MODULE_8__assets_csg_ThreeCSG__["a" /* default */](mesh);
        var targetBsp = this.getBsp(t);
        var mergedBsp;
        if (targetBsp === null) {
            this.setBsp(t, bsp);
        }
        else {
            mergedBsp = targetBsp.union(bsp);
            this.setBsp(t, mergedBsp);
        }
    };
    MapOptimizerComponent.prototype.animate = function () {
        requestAnimationFrame(function () {
            var t = this;
            return function () {
                t.animate();
            };
        }.call(this));
        this.render();
    };
    MapOptimizerComponent.prototype.render = function () {
        this.renderer.render(this.scene, this.camera);
    };
    return MapOptimizerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loadingModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], MapOptimizerComponent.prototype, "loadingModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('optimizationModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
], MapOptimizerComponent.prototype, "optimizationModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('savingModal'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _c || Object)
], MapOptimizerComponent.prototype, "savingModal", void 0);
MapOptimizerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map-optimizer',
        template: __webpack_require__("../../../../../src/app/map-optimizer/map-optimizer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map-optimizer/map-optimizer.component.css"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__space_service__["a" /* SpaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__space_service__["a" /* SpaceService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _j || Object])
], MapOptimizerComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/map-optimizer.component.js.map

/***/ }),

/***/ "../../../../../src/app/map-view/map-view.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-default navbar-fixed-top topnav\" role=\"navigation\">\n    <div class=\"container topnav\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand topnav\" href=\"#\" (click)=\"exit($event, '/')\">Easy Inside</a>\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#\" (click)=\"exit($event, '/spaces')\">Search</a>\n                </li>\n                <li>\n                    <a href=\"#\" (click)=\"exit($event, '/document')\">Document</a>\n                </li>\n                <li>\n                    <a href=\"#\" (click)=\"exit($event, '/contact')\">Contact</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container -->\n</nav>\n\n<div id=\"wrapper\">\n\n    <div style=\"position:fixed;right:10px;top:60px;z-index:1001;\">\n        <alert type=\"warning\" dismissible=\"true\" *ngIf=\"graphicCardNeeded\" (onClose)=\"onCloseGraphicCardAlert($event)\">\n            <strong>Warning!</strong> Your graphics card does not seem to support <a href=\"http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation\" style=\"color:#000\">WebGL</a>.<br />\n            Find out how to get it <a href=\"http://get.webgl.org/\" style=\"color:#000\">here</a>.\n        </alert>\n        <alert type=\"warning\" dismissible=\"true\" *ngIf=\"browserNeeded\" (onClose)=\"onCloseBrowserAlert($event)\">\n            <strong>Warning!</strong> Your browser does not seem to support <a href=\"http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation\" style=\"color:#000\">WebGL</a>.<br />\n            Find out how to get it <a href=\"http://get.webgl.org/\" style=\"color:#000\">here</a>.\n        </alert>\n        <alert type=\"info\" dismissible=\"true\" *ngIf=\"routeCalculating\">\n            <strong>Finding...</strong> Please wait for a while. Now server is finding route.\n        </alert>\n        <alert type=\"info\" dismissible=\"true\" *ngIf=\"navigationPreparing\">\n            <strong>Loading Robots...</strong> If you want to call a robot, please wait.\n        </alert>\n        <alert type=\"info\" dismissible=\"true\" *ngIf=\"robotStart\">\n            <strong>Calling Robot...</strong> Robot {{selectedRobotName}} starts now.\n        </alert>\n    </div>\n\n    <div id=\"page-wrapper\" class=\"webgl-wrapper\" (mousemove)=\"onDocumentMouseMove($event)\" (mouseup)=\"onDocumentMouseUp($event)\">\n\n    </div>\n\n</div>\n\n<div class=\"modal fade\" bsModal #loadingModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Loading Map...</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Please wait for a while.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #loadingDeskModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Loading Desks...</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Please wait for a while.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"floornav\">\n    <div class=\"row navbox\">\n        <div class=\"col-lg-3 col-md-3\">\n            <div class=\"btn-group\" dropdown *ngIf=\"multiMaps\" [dropup]=\"true\">\n                <button id=\"map-move-btn\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                    {{map.name}} <span class=\"caret\"></span>\n                </button>\n                <ul *dropdownMenu role=\"menu\" class=\"dropdown-menu\">\n                    <li *ngFor=\"let m of space.maps;\" role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeMap($event, m._id)\">{{m.name}}</a></li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-lg-5 col-md-5\">\n            <select id=\"search-info\" class=\"form-control select2-single\" style=\"width:100%;\">\n                <option *ngFor=\"let i of infos;\" value=\"{{i.type}},{{i._id}}\">{{i.name}}</option>\n            </select>\n        </div>\n        <div class=\"col-lg-2 col-md-2\">\n            <div class=\"btn-group\" role=\"group\">\n                <label class=\"btn btn-primary\" (click)=\"cameraAction.move('rotateleft')\"><i class=\"fa fa-reply\" aria-hidden=\"true\"></i></label>\n                <label class=\"btn btn-primary\" (click)=\"cameraAction.move('rotateright')\"><i class=\"fa fa-mail-forward\" aria-hidden=\"true\"></i></label>\n            </div>\n        </div>\n        <div class=\"col-lg-2 col-md-2\">\n            <div class=\"btn-group\" role=\"group\">\n                <label class=\"btn btn-primary\" (click)=\"cameraAction.move('zoomin')\"><i class=\"glyphicon glyphicon-zoom-in\" aria-hidden=\"true\"></i></label>\n                <label class=\"btn btn-primary\" (click)=\"cameraAction.backToOriginPoint()\"><i class=\"glyphicon glyphicon-zoom-out\" aria-hidden=\"true\"></i></label>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"info-detail\" *ngIf=\"infoShow\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">Information <a class=\"close\" role=\"button\" (click)=\"closeDetailPanel($event)\">&times;</a></div>\n                <div class=\"panel-body thumbnail\">\n                    <img *ngIf=\"infoImgShow\" src=\"https://s3.eu-central-1.amazonaws.com/easyinside/pics/{{selectedInfo.picFileName}}\">\n                    <div class=\"caption\">\n                        <h3><i class=\"{{selectedInfoType}}\" aria-hidden=\"true\"></i> {{selectedInfo.name}}</h3>\n                        <p>{{selectedInfo.description}}</p>\n                        <p>{{selectedInfo.contact}}</p>\n                        <p>\n                            <a class=\"btn btn-primary\" role=\"button\" (click)=\"sendAnyRobot($event)\">Come Here, Robot</a>\n                            <a class=\"btn-group\" dropdown>\n                                <button type=\"button\" class=\"btn btn-warning\">Call a Specified robot</button>\n                                <button type=\"button\" dropdownToggle class=\"btn btn-warning dropdown-toggle dropdown-toggle-split\">\n                                    <span class=\"caret\"></span>\n                                    <span class=\"sr-only\">Split button!</span>\n                                </button>\n                                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                                    <li *ngFor=\"let r of robots;\" role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"sendRobot($event, r._id)\">{{ r.name }}</a></li>\n                                </ul>\n                            </a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"info-location\">\n    <div class=\"row locbox\">\n        <div class=\"col-lg-12\">\n            <p>\n                <i class=\"fa fa-th\" aria-hidden=\"true\"></i> {{arrayCoordinate}}\n                <button class=\"btn btn-default btn-xs\" (click)=\"eraseRoute()\" title=\"erase routes\"><i class=\"fa fa-eraser\" aria-hidden=\"true\"></i></button>\n                <button type=\"button\" class=\"btn btn-default btn-xs\" [(ngModel)]=\"pathOn\" btnCheckbox btnCheckboxTrue=\"On\" btnCheckboxFalse=\"Off\" (click)=\"togglePath($event)\" title=\"toggle path for robots\"><i class=\"fa fa-map\" aria-hidden=\"true\"></i></button>\n            </p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/map-view/map-view.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper {\n  margin-top: 51px;\n  height: Calc(100vh - 51px);\n}\n.webgl-wrapper {\n  height: 100%;\n  background-color: #1f4c09;\n}\n.floornav {\n  position: absolute;\n  bottom: 30px;\n  width: 50vw;\n  margin-left: 25vw;\n}\n.navbox {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.info-detail {\n  position: absolute;\n  right: 30px;\n  top: 100px;\n  width: 30vw;\n}\n.info-detail .thumbnail {\n  margin-bottom: 0;\n  border: none;\n}\n.info-detail .close {\n  position: relative;\n  bottom: 3px;\n}\n.info-location {\n  position: absolute;\n  left: 30px;\n  bottom: 30px;\n}\n.locbox {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  color: #fff;\n}\n.locbox p {\n  margin-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map-view/map-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fennecfox__ = __webpack_require__("../../../../../src/app/fennecfox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__zatoichi__ = __webpack_require__("../../../../../src/app/zatoichi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__camera_action__ = __webpack_require__("../../../../../src/app/camera-action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plane_navigator__ = __webpack_require__("../../../../../src/app/plane-navigator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__indoor_location_converter__ = __webpack_require__("../../../../../src/app/indoor-location-converter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graph_search__ = __webpack_require__("../../../../../src/app/graph-search.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_three__ = __webpack_require__("../../../../three/build/three.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












 // must 'npm install @types/three'!!!
var MapViewComponent = (function () {
    function MapViewComponent(route, location, apiService, elementRef, router, fb) {
        this.route = route;
        this.location = location;
        this.apiService = apiService;
        this.elementRef = elementRef;
        this.router = router;
        this.window = window; // type assertion
        this.renderingAllowed = true;
        this.map = {};
        this.space = {};
        this.dings = [];
        this.infos = [];
        this.desks = [];
        this.robots = [];
        this.multiMaps = false;
        this.graphicCardNeeded = false;
        this.browserNeeded = false;
        this.routeCalculating = false;
        this.navigationPreparing = false;
        this.viewInitFinished = false;
        this.dataInitFinished = false;
        this.firstInitFinished = false;
        this.robotStart = false;
        this.isDropup = false;
        this.robotMeshes = {};
        this.pathOn = 'Off';
        this.foxes = {};
        this.mapSizeMax = {
            x: 0,
            y: 0,
            z: 0
        };
        this.infoShow = false;
        this.infoImgShow = false;
    }
    MapViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.apiService.getMap(params['id']);
        })
            .subscribe(function (res) {
            if (typeof res.error !== 'undefined') {
                if (res.error.includes('PASSWORD')) {
                    if (_this.infoId) {
                        document.location.href = '/map/login/' + res.id + '?infoId=' + _this.infoId;
                    }
                    else {
                        document.location.href = '/map/login/' + res.id;
                    }
                }
                else if (res.error.includes('PRIVATE')) {
                    document.location.href = '/';
                }
            }
            else {
                _this.map = res;
                _this.mapId = _this.map._id;
                _this.multiMaps = (_this.map._space.maps.length > 1) ? true : false;
                _this.getSpace();
            }
        }, function (err) {
            console.log(err);
        });
        this.route.queryParams.subscribe(function (params) {
            _this.infoId = params['infoId'];
        });
    };
    MapViewComponent.prototype.ngAfterViewInit = function () {
        this.container = document.querySelector('#page-wrapper');
        this.mouse2D = new __WEBPACK_IMPORTED_MODULE_12_three__["H" /* Vector2 */]();
        this.viewInitFinished = true;
        if (this.dataInitFinished == true) {
            this.initWebGL();
        }
    };
    MapViewComponent.prototype.ngOnDestroy = function () {
        this.renderingAllowed = false;
    };
    MapViewComponent.prototype.getSpace = function () {
        var _this = this;
        this.apiService.getSpace(this.map._space._id).subscribe(function (space) {
            _this.space = space;
            _this.getDings();
        });
    };
    MapViewComponent.prototype.getDings = function () {
        var _this = this;
        this.apiService.getDings().subscribe(function (dings) {
            _this.dings = dings;
            var texture = {};
            var material = {};
            var geoData = {};
            var dimensionPartFrom, dimensionPartTo, dimensionPart;
            var dimensionArray = [];
            for (var i in _this.dings) {
                _this.dings[i]._idx = i;
                switch (_this.dings[i].texture.shading) {
                    case 'THREE.FlatShading':
                        texture.shading = __WEBPACK_IMPORTED_MODULE_12_three__["k" /* FlatShading */];
                        break;
                }
                if (_this.dings[i].texture.color != '') {
                    var colors = _this.dings[i].texture.color.split(',');
                    texture.color = new __WEBPACK_IMPORTED_MODULE_12_three__["d" /* Color */]().setRGB(parseFloat(colors[0]), parseFloat(colors[1]), parseFloat(colors[2]));
                }
                if (_this.dings[i].texture.map != null && _this.dings[i].texture.map != '') {
                    // make map logic
                }
                texture.opacity = _this.dings[i].texture.opacity;
                if (texture.opacity < 1) {
                    texture.transparent = true;
                }
                switch (_this.dings[i].material) {
                    case 'THREE.MeshPhongMaterial':
                        material = new __WEBPACK_IMPORTED_MODULE_12_three__["v" /* MeshPhongMaterial */](texture);
                        break;
                    case 'THREE.MeshBasicMaterial':
                        material = new __WEBPACK_IMPORTED_MODULE_12_three__["t" /* MeshBasicMaterial */](texture);
                        break;
                    case 'THREE.MeshLambertMaterial':
                        material = new __WEBPACK_IMPORTED_MODULE_12_three__["u" /* MeshLambertMaterial */](texture);
                        break;
                }
                material._idx = i;
                _this.dings[i]._material = material;
                if (_this.dings[i].type === 'desk') {
                    geoData = JSON.parse(_this.dings[i].geometry.data);
                    _this.dings[i]._geometry = __WEBPACK_IMPORTED_MODULE_12_three__["m" /* JSONLoader */].prototype.parse(geoData[0].g.data);
                }
                else if (_this.dings[i].type === 'place') {
                    if (_this.dings[i].geometry.data.includes('THREE.BoxGeometry')) {
                        dimensionPartFrom = _this.dings[i].geometry.data.indexOf('(');
                        dimensionPartTo = _this.dings[i].geometry.data.indexOf(')');
                        dimensionPart = _this.dings[i].geometry.data.substr(dimensionPartFrom + 1, dimensionPartTo - 1);
                        dimensionArray = dimensionPart.split(',');
                        _this.dings[i]._geometry = { geometry: new __WEBPACK_IMPORTED_MODULE_12_three__["b" /* BoxGeometry */](parseInt(dimensionArray[0]), parseInt(dimensionArray[1]), parseInt(dimensionArray[2])) };
                        _this.dings[i]._geometry.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_12_three__["r" /* Matrix4 */]().makeTranslation(0, (parseInt(dimensionArray[1]) * 0.5), 0));
                        _this.dings[i]._w = parseInt(dimensionArray[0]);
                        _this.dings[i]._h = parseInt(dimensionArray[1]);
                        _this.dings[i]._d = parseInt(dimensionArray[2]);
                    }
                }
                else if (_this.dings[i].type === 'object') {
                    if (_this.dings[i].geometry.data.includes('THREE.BoxGeometry')) {
                        dimensionPartFrom = _this.dings[i].geometry.data.indexOf('(');
                        dimensionPartTo = _this.dings[i].geometry.data.indexOf(')');
                        dimensionPart = _this.dings[i].geometry.data.substr(dimensionPartFrom + 1, dimensionPartTo - 1);
                        dimensionArray = dimensionPart.split(',');
                        _this.dings[i]._geometry = { geometry: new __WEBPACK_IMPORTED_MODULE_12_three__["b" /* BoxGeometry */](parseInt(dimensionArray[0]), parseInt(dimensionArray[1]), parseInt(dimensionArray[2])) };
                        _this.dings[i]._geometry.geometry.applyMatrix(new __WEBPACK_IMPORTED_MODULE_12_three__["r" /* Matrix4 */]().makeTranslation(0, (parseInt(dimensionArray[1]) * 0.5), 0));
                        _this.dings[i]._w = parseInt(dimensionArray[0]);
                        _this.dings[i]._h = parseInt(dimensionArray[1]);
                        _this.dings[i]._d = parseInt(dimensionArray[2]);
                    }
                }
            }
            _this.getInfos();
        });
    };
    MapViewComponent.prototype.getInfos = function () {
        var _this = this;
        this.apiService.getInfo(this.map._space._id).subscribe(function (infos) {
            _this.infos = infos;
            if (_this.firstInitFinished === false) {
                _this.dataInitFinished = true;
                if (_this.viewInitFinished == true) {
                    _this.initWebGL();
                }
                _this.firstInitFinished = true;
            }
        });
    };
    MapViewComponent.prototype.initWebGL = function () {
        if (this.detectWebGL() === false) {
            this.showWebGLAlert();
        }
        this.renderer = new __WEBPACK_IMPORTED_MODULE_12_three__["J" /* WebGLRenderer */]({
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true
        });
        this.scene = new __WEBPACK_IMPORTED_MODULE_12_three__["B" /* Scene */]();
        this.camera = new __WEBPACK_IMPORTED_MODULE_12_three__["x" /* PerspectiveCamera */](25, this.container.clientWidth / this.container.clientHeight, 50, 1e7);
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_12_three__["A" /* Raycaster */]();
        this.planeNav = new __WEBPACK_IMPORTED_MODULE_8__plane_navigator__["a" /* PlaneNavigator */]();
        this.cameraAction = new __WEBPACK_IMPORTED_MODULE_7__camera_action__["a" /* CameraAction */](this.window, this.scene, this.camera, this.container, this.planeNav, this.raycaster, null);
        this.cameraAction.callbackAfterMove = function (that) {
            var t = that;
            return function (aFox) {
                var info = t.findInfoById(aFox.ding._userID);
                if (info) {
                    t.selectedInfo = info;
                    if (info.picFileName) {
                        t.infoImgShow = true;
                    }
                    switch (t.selectedInfo.type) {
                        case 'people':
                            t.selectedInfoType = 'fa fa-user';
                            break;
                        case 'place':
                            t.selectedInfoType = 'fa fa-map-marker';
                            break;
                        default:
                            t.selectedInfoType = 'fa fa-info';
                            break;
                    }
                    t.infoShow = true;
                }
                else {
                    t.infoShow = false;
                }
            };
        }(this);
        this.scene.add(this.camera);
        this.scene.add(this.planeNav.root);
        setTimeout(function () {
            var t = this;
            return function () {
                t.setRendererSize();
                if (t.infoId) {
                    var fox = t.findFoxByUserId(t.infoId);
                    if (fox) {
                        t.selectOnFox(fox);
                        t.cameraAction.closeToDesk(fox);
                    }
                }
            };
        }.call(this), 3000);
        this.container.appendChild(this.renderer.domElement);
        this.window.addEventListener('resize', function () {
            var t = this;
            return function () {
                t.setRendererSize();
            };
        }.call(this));
        var ambientLight = new __WEBPACK_IMPORTED_MODULE_12_three__["a" /* AmbientLight */](0x606060);
        var directionalLight = new __WEBPACK_IMPORTED_MODULE_12_three__["e" /* DirectionalLight */](0xffffff);
        directionalLight.position.set(1, 1, -1).normalize();
        this.scene.add(ambientLight);
        this.scene.add(directionalLight);
        this.animate(0);
        if (this.map.optFileName.length > 0) {
            this.loadingModal.show();
            var url = 'https://s3.eu-central-1.amazonaws.com/easyinside/opts/' + this.map.optFileName;
            var xhr_1 = new XMLHttpRequest();
            if ('withCredentials' in xhr_1) {
                xhr_1.open('GET', url, true);
            }
            //xhr.responseType = 'json';
            var t_1 = this;
            xhr_1.onreadystatechange = function () {
                var status;
                var data;
                if (xhr_1.readyState == 4) {
                    status = xhr_1.status;
                    if (status == 200) {
                        data = JSON.parse(xhr_1.responseText);
                        t_1.initAfterMapDataLoad(data);
                    }
                    else {
                        console.log('Error in reading map data');
                    }
                }
            };
            xhr_1.send();
        }
    };
    MapViewComponent.prototype.detectWebGL = function () {
        try {
            return !!this.window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
        }
        catch (e) {
            return false;
        }
    };
    MapViewComponent.prototype.showWebGLAlert = function () {
        if (this.window.WebGLRenderingContext) {
            this.graphicCardNeeded = true;
        }
        else {
            this.browserNeeded = true;
        }
    };
    MapViewComponent.prototype.setRendererSize = function () {
        var w = this.container.clientWidth;
        var h = this.container.clientHeight;
        this.renderer.setSize(w, h);
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.planeNav.moveAtTheFrontOf(this.camera, this.window);
    };
    MapViewComponent.prototype.initAfterMapDataLoad = function (data) {
        var maxIdx = 0;
        for (var i in this.dings) {
            this.dings[i]._idx = null;
            this.dings[i]._material._idx = null;
        }
        for (var i in data.m) {
            for (var j in this.dings) {
                if (this.dings[j]._id == data.m[i]._id) {
                    this.dings[j]._idx = data.m[i].idx;
                    this.dings[j]._material._idx = data.m[i].idx;
                    maxIdx = (data.m[i].idx > maxIdx) ? data.m[i].idx : maxIdx;
                }
            }
        }
        for (var i in this.dings) {
            if (this.dings[i]._idx == null) {
                maxIdx++;
                this.dings[i]._idx = maxIdx;
                this.dings[i]._material._idx = maxIdx;
            }
        }
        var children = this.scene.children.slice(0);
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === 'map' || children[i].name === 'path') {
                this.scene.remove(children[i]);
                continue;
            }
            if (children[i] instanceof __WEBPACK_IMPORTED_MODULE_12_three__["s" /* Mesh */] === false) {
                continue;
            }
            if (children[i].geometry instanceof __WEBPACK_IMPORTED_MODULE_12_three__["b" /* BoxGeometry */] === false) {
                continue;
            }
            this.scene.remove(children[i]);
        }
        var voxels = data.d;
        var voxel, mesh, tmpMaterial, tmpGeometry;
        var voxelLength = voxels.length;
        for (var i = 0; i < voxelLength; i++) {
            voxel = voxels[i];
            tmpMaterial = this.getSelectedDingsMaterial(voxel.t);
            tmpGeometry = __WEBPACK_IMPORTED_MODULE_12_three__["m" /* JSONLoader */].prototype.parse(voxel.g.data);
            mesh = new __WEBPACK_IMPORTED_MODULE_12_three__["s" /* Mesh */](tmpGeometry.geometry, tmpMaterial);
            mesh.position.x = voxel.x;
            mesh.position.y = voxel.y;
            mesh.position.z = voxel.z;
            mesh.pattern = this.getSelectedDing(voxel.t).type;
            mesh.name = (mesh.pattern === 'path') ? 'path' : 'map';
            if (mesh.pattern == 'path') {
                this.pathObj = mesh;
            }
            this.scene.add(mesh);
            if (mesh.name == 'path') {
                this.pathOn = 'Off';
                this.togglePath(null);
            }
            if (typeof mesh.geometry.boundingBox === 'undefined' || mesh.geometry.boundingBox === null) {
                mesh.geometry.computeBoundingBox();
            }
            if (this.mapSizeMax.x < mesh.geometry.boundingBox.max.x) {
                this.mapSizeMax.x = mesh.geometry.boundingBox.max.x;
            }
            if (this.mapSizeMax.y < mesh.geometry.boundingBox.max.y) {
                this.mapSizeMax.y = mesh.geometry.boundingBox.max.y;
            }
            if (this.mapSizeMax.z < mesh.geometry.boundingBox.max.z) {
                this.mapSizeMax.z = mesh.geometry.boundingBox.max.z;
            }
        }
        this.loadingModal.hide();
        if (this.map.objFileName && this.map.objFileName.length > 0) {
            this.loadingDeskModal.show();
            var url = 'https://s3.eu-central-1.amazonaws.com/easyinside/desks/' + this.map.objFileName;
            var xhr_2 = new XMLHttpRequest();
            if ('withCredentials' in xhr_2) {
                xhr_2.open('GET', url, true);
            }
            //xhr.responseType = 'json';
            var t_2 = this;
            xhr_2.onreadystatechange = function () {
                var status;
                var data;
                if (xhr_2.readyState == 4) {
                    status = xhr_2.status;
                    if (status == 200) {
                        data = JSON.parse(xhr_2.responseText);
                        t_2.initAfterDeskDataLoad(data);
                    }
                    else {
                        console.log('Error in reading map data');
                    }
                }
            };
            xhr_2.send();
        }
    };
    MapViewComponent.prototype.initAfterDeskDataLoad = function (data) {
        var children = this.scene.children.slice(0);
        for (var i = 0; i < children.length; i++) {
            if (children[i]._p !== 'desk' && children[i]._p !== 'place' && children[i]._p !== 'object') {
                continue;
            }
            this.scene.remove(children[i]);
        }
        this.desks = data;
        var voxelLength = this.desks.length;
        var fennecFox, voxel, tmpInfo;
        for (var i_1 = 0; i_1 < voxelLength; i_1++) {
            voxel = this.desks[i_1];
            fennecFox = new __WEBPACK_IMPORTED_MODULE_5__fennecfox__["a" /* FennecFox */](this.getSelectedDing(voxel.t));
            fennecFox.setPosition(voxel.x, voxel.y, voxel.z);
            fennecFox.setRotation(voxel.r === 1 ? true : false);
            tmpInfo = this.findInfoById(voxel.i);
            if (tmpInfo) {
                fennecFox.setUser(voxel.i, tmpInfo.name);
            }
            else {
                fennecFox.setUser(null, null);
            }
            fennecFox.update();
            this.foxes[fennecFox.ding.uuid] = fennecFox;
            this.scene.add(fennecFox.root);
        }
        this.loadingDeskModal.hide();
        this.ILC = new __WEBPACK_IMPORTED_MODULE_10__indoor_location_converter__["c" /* IndoorLocationConverter */]();
        var canvasWidth = Math.floor(10 * this.map.width / this.map.voxelSize);
        var canvasHeight = Math.floor(10 * this.map.height / this.map.voxelSize);
        var halfCW = canvasWidth / 2;
        var halfCH = canvasHeight / 2;
        this.ILC.setArrayMap(0, (this.map.width / this.map.voxelSize) - 1, 0, (this.map.height / this.map.voxelSize) - 1, 1, 1);
        this.ILC.setCanvasMap(-halfCW, halfCW, -halfCH, halfCH, 1, 1);
        //this.ILC.setGeoMap(13.421238, 52.525556, 13.420783, 52.525176, 13.421007, 52.525659);
        //this.cameraAction.setPosition(-3000, 5000, -6500);
        var maxDist = Math.max(this.mapSizeMax.y, this.mapSizeMax.y, this.mapSizeMax.z);
        this.cameraAction.setPosition(this.mapSizeMax.x, maxDist * 3, maxDist * 3.5);
        this.cameraAction.setOriginPosition(this.mapSizeMax.x, maxDist * 3, maxDist * 3.5);
        this.cameraAction.setSpinPoint(0, 0, 0);
        this.container.classList.remove('hedgehop');
        this.container.classList.add('stratosphere');
        this.container.style.display = 'block';
        this.planeNav.hide();
        this.planeNav.moveAtTheFrontOf(this.camera, this.window);
        var s = document.createElement('script');
        s.innerText = 'function formatState(data) {'
            + 'var icon;'
            + 'if (!data.id) { return data.text; }'
            + 'switch (data.element.value.toLowerCase().split(\',\')[0]) {'
            + 'case \'people\':'
            + 'icon=\'fa fa-user\';'
            + 'break;'
            + 'case \'place\':'
            + 'icon=\'fa fa-map-marker\';'
            + 'break;}'
            + 'var rtn=$(\'<span><i class="\'+icon+\'" aria-hidden="true"></i> \'+data.text+\'</span>\');'
            + 'return rtn;'
            + '};'
            + '(function(){'
            + '$(\'#search-info\').select2({'
            + 'templateResult:formatState,'
            + 'templateSelection:formatState'
            + '});'
            + '})();';
        this.elementRef.nativeElement.appendChild(s);
        this.elementRef.nativeElement.querySelector('#search-info').onchange = function (that) {
            var t = that;
            return function (evt) {
                var vals = evt.target.value.split(',');
                var ifo = t.findInfoById(vals[1]);
                if (ifo._map && ifo._map._id !== t.mapId) {
                    document.location.href = '/map/' + ifo._map._id + '?infoId=' + ifo._id;
                }
                else {
                    var fox = t.findFoxByUserId(ifo._id);
                    //console.log(fox);
                    if (fox) {
                        t.selectOnFox(fox);
                        t.cameraAction.closeToDesk(fox);
                    }
                }
            };
        }(this);
        if (this.map.allowRobot) {
            this.navigationPreparing = true;
            this.initMapGraph();
        }
    };
    MapViewComponent.prototype.onDocumentMouseMove = function (event) {
        this.mouse2D.x = ((event.clientX - this.container.offsetLeft) / this.container.clientWidth) * 2 - 1;
        this.mouse2D.y = -((event.clientY - this.container.offsetTop) / this.container.clientHeight) * 2 + 1;
    };
    MapViewComponent.prototype.onDocumentMouseUp = function (event) {
        if (event.altKey) {
            return this.makePath(event);
        }
        this.raycaster.setFromCamera(this.mouse2D, this.camera);
        var intersects = this.raycaster.intersectObjects(this.scene.children, true);
        if (intersects.length > 0) {
            var intersector = this.getRealIntersector(intersects);
            if (intersector) {
                if (intersector.ding) {
                    if (intersector.ding.name === 'ding') {
                        var aFox = this.foxes[intersector.ding.uuid];
                        this.preChangedFoxId = void (0);
                        this.selectOnFox(aFox);
                        this.cameraAction.closeToDesk(aFox);
                    }
                }
                else if (intersector.object.name === 'btnUp') {
                    this.cameraAction.hedgehop(400, 0, 0);
                }
                else if (intersector.object.name === 'btnDown') {
                    this.cameraAction.hedgehop(-400, 0, 0);
                }
                else if (intersector.object.name === 'btnLeft') {
                    this.cameraAction.hedgehop(0, 0, -400);
                }
                else if (intersector.object.name === 'btnRight') {
                    this.cameraAction.hedgehop(0, 0, 400);
                }
            }
        }
    };
    MapViewComponent.prototype.togglePath = function (event) {
        if (event) {
            event.preventDefault();
        }
        if (this.pathObj) {
            if (this.pathOn == 'On') {
                this.scene.add(this.pathObj);
            }
            else {
                this.scene.remove(this.pathObj);
            }
        }
    };
    MapViewComponent.prototype.makePath = function (e) {
        this.raycaster.setFromCamera(this.mouse2D, this.camera);
        var intersects = this.raycaster.intersectObjects(this.scene.children, true);
        if (intersects.length > 0) {
            var intersector = this.getMapIntersector(intersects);
            if (intersector) {
                if (!this.startPoint) {
                    this.startPoint = new __WEBPACK_IMPORTED_MODULE_10__indoor_location_converter__["b" /* CanvasUnit */](intersector.point.x, intersector.point.z, this.ILC);
                }
                else if (!this.endPoint) {
                    this.routeCalculating = true;
                    this.endPoint = new __WEBPACK_IMPORTED_MODULE_10__indoor_location_converter__["b" /* CanvasUnit */](intersector.point.x, intersector.point.z, this.ILC);
                    var startArray = this.startPoint.toArray(), endArray = this.endPoint.toArray();
                    //flipSArray = {x: 529 - startArray.x, y: 199 - startArray.y},
                    //flipEArray = {x: 529 - endArray.x, y: 199 - endArray.y};
                    var x1 = startArray.x, y1 = startArray.y, x2 = endArray.x, y2 = endArray.y, startPoint = this.graphSearch.graph.grid[x1][y1], endPoint = this.graphSearch.graph.grid[x2][y2];
                    if (endPoint.weight === 0) {
                        var safePoint = this.graphSearch.getNearestPoint(x2, y2);
                        endPoint = this.graphSearch.graph.grid[safePoint.x][safePoint.y];
                    }
                    var path = this.graphSearch.astar.search(this.graphSearch.graph, startPoint, endPoint, { closest: false });
                    this.createRoute(path, null);
                    this.startPoint = null;
                    this.endPoint = null;
                    this.routeCalculating = false;
                    //this.apiService.getPath(this.mapId, startArray.x, startArray.y, endArray.x, endArray.y).subscribe(path => {});
                }
            }
        }
    };
    MapViewComponent.prototype.eraseRoute = function () {
        if (this.routeMesh) {
            this.scene.remove(this.routeMesh);
        }
    };
    MapViewComponent.prototype.createRoute = function (node, color) {
        this.eraseRoute();
        var nodes = [], lineColor = color ? color : { color: 0xff6600 }, posArray, posCanvas;
        for (var i = 0; i < node.length; i++) {
            posArray = new __WEBPACK_IMPORTED_MODULE_10__indoor_location_converter__["a" /* ArrayUnit */](node[i].x, node[i].y, this.ILC);
            posCanvas = posArray.toCanvas();
            nodes.push(new __WEBPACK_IMPORTED_MODULE_12_three__["I" /* Vector3 */](posCanvas.x, 50, posCanvas.y));
        }
        var curve = new __WEBPACK_IMPORTED_MODULE_12_three__["c" /* CatmullRomCurve3 */](nodes), shape = new __WEBPACK_IMPORTED_MODULE_12_three__["C" /* Shape */]([
            new __WEBPACK_IMPORTED_MODULE_12_three__["H" /* Vector2 */](-5, 2),
            new __WEBPACK_IMPORTED_MODULE_12_three__["H" /* Vector2 */](5, 2),
            new __WEBPACK_IMPORTED_MODULE_12_three__["H" /* Vector2 */](5, -2),
            new __WEBPACK_IMPORTED_MODULE_12_three__["H" /* Vector2 */](-5, -2)
        ]), curveGeo = new __WEBPACK_IMPORTED_MODULE_12_three__["h" /* ExtrudeGeometry */](shape, {
            steps: 200,
            bevelEnabled: false,
            extrudePath: curve
        }), curveMat = new __WEBPACK_IMPORTED_MODULE_12_three__["t" /* MeshBasicMaterial */](lineColor);
        this.routeMesh = new __WEBPACK_IMPORTED_MODULE_12_three__["s" /* Mesh */](curveGeo, curveMat);
        this.scene.add(this.routeMesh);
    };
    MapViewComponent.prototype.lighteningRoute = function (originalRoute) {
        var lighteningRoute = [];
        for (var _i = 0, originalRoute_1 = originalRoute; _i < originalRoute_1.length; _i++) {
            var r = originalRoute_1[_i];
            lighteningRoute.push({ x: r.x, y: r.y });
        }
        return lighteningRoute;
    };
    MapViewComponent.prototype.getSelectedDingsMaterial = function (idx) {
        var dingChoosen;
        for (var i in this.dings) {
            if (this.dings[i]._idx == idx) {
                dingChoosen = this.dings[i];
            }
        }
        return dingChoosen._material;
    };
    MapViewComponent.prototype.getSelectedDingsType = function (idx) {
        var dingChoosen;
        for (var i in this.dings) {
            if (this.dings[i]._idx == idx) {
                dingChoosen = this.dings[i];
            }
        }
        return dingChoosen.type;
    };
    MapViewComponent.prototype.getSelectedDing = function (idx) {
        var dingChoosen;
        for (var i in this.dings) {
            if (this.dings[i]._idx == idx) {
                dingChoosen = this.dings[i];
            }
        }
        return dingChoosen;
    };
    MapViewComponent.prototype.findInfoById = function (id) {
        for (var i in this.infos) {
            if (this.infos[i]._id === id) {
                return this.infos[i];
            }
        }
        return null;
    };
    MapViewComponent.prototype.setFocusOnFox = function (aFox) {
        if (aFox.ding.uuid !== this.preChangedFoxId) {
            if (typeof this.preChangedFoxId !== 'undefined') {
                if (this.preChangedFoxId !== this.selectedFoxId) {
                    this.setBlurOnFox(this.foxes[this.preChangedFoxId]);
                }
            }
        }
        if (aFox.ding.uuid !== this.selectedFoxId) {
            this.preChangedFoxId = aFox.ding.uuid;
            aFox.setFocus();
        }
        else {
            this.preChangedFoxId = void (0);
        }
    };
    MapViewComponent.prototype.setBlurOnFox = function (aFox) {
        //this.selectedFoxId = void(0); // last check
        aFox.blur();
    };
    MapViewComponent.prototype.selectOnFox = function (aFox) {
        //console.log(aFox.ding.uuid, this.selectedFoxId);
        if (aFox.ding.uuid !== this.selectedFoxId) {
            if (typeof this.selectedFoxId !== 'undefined') {
                this.setBlurOnFox(this.foxes[this.selectedFoxId]);
                this.selectedFoxId = void (0);
            }
        }
        this.selectedFoxId = aFox.ding.uuid;
        aFox.select();
    };
    MapViewComponent.prototype.findFoxByUserId = function (uId) {
        for (var k in this.foxes) {
            if (this.foxes[k].ding._userID == uId) {
                return this.foxes[k];
            }
        }
        return void (0);
    };
    MapViewComponent.prototype.getRealIntersector = function (intersects) {
        var intersector;
        for (var i = 0; i < intersects.length; i++) {
            intersector = intersects[i];
            if (intersector.object.name) {
                switch (intersector.object.name) {
                    case 'ding':
                        return this.foxes[intersector.object.uuid];
                    case 'btnUp':
                    case 'btnDown':
                    case 'btnLeft':
                    case 'btnRight':
                        return intersector;
                }
            }
        }
    };
    MapViewComponent.prototype.getMapIntersector = function (intersects) {
        var intersector;
        for (var i = 0; i < intersects.length; i++) {
            intersector = intersects[i];
            if (intersector.object.name) {
                switch (intersector.object.name) {
                    case 'map':
                        return intersector;
                }
            }
        }
    };
    MapViewComponent.prototype.animate = function (nowMsec) {
        this.lastMsec = (this.lastMsec) ? this.lastMsec : nowMsec;
        var deltaMsec = nowMsec - this.lastMsec;
        if (this.cameraAction.isMoving === true) {
            this.cameraAction.animate(deltaMsec);
        }
        this.lastMsec = nowMsec;
        if (this.renderingAllowed) {
            requestAnimationFrame(function () {
                var t = this;
                return function (obj) {
                    t.animate(obj);
                };
            }.call(this));
        }
        this.render();
    };
    MapViewComponent.prototype.render = function () {
        this.raycaster.setFromCamera(this.mouse2D, this.camera);
        var intersects = this.raycaster.intersectObjects(this.scene.children, true);
        if (intersects.length > 0) {
            var intersector = this.getRealIntersector(intersects);
            if (intersector) {
                if (intersector.ding) {
                    if (intersector.ding.name === 'ding') {
                        this.setFocusOnFox(intersector);
                    }
                }
            }
            else {
                if (typeof this.preChangedFoxId !== 'undefined') {
                    if (this.preChangedFoxId !== this.selectedFoxId) {
                        this.setBlurOnFox(this.foxes[this.preChangedFoxId]);
                    }
                }
                this.preChangedFoxId = void (0);
            }
            intersector = this.getMapIntersector(intersects);
            if (intersector) {
                if (intersector.object.name === 'map') {
                    var nowPoint = new __WEBPACK_IMPORTED_MODULE_10__indoor_location_converter__["b" /* CanvasUnit */](intersector.point.x, intersector.point.z, this.ILC);
                    var nowArray = nowPoint.toArray();
                    this.arrayCoordinate = 'x:' + nowArray.x + ', y:' + nowArray.y;
                }
            }
        }
        this.renderer.render(this.scene, this.camera);
    };
    MapViewComponent.prototype.changeMap = function (event, mapId) {
        event.preventDefault();
        event.stopPropagation();
        document.location.href = '/map/' + mapId;
    };
    MapViewComponent.prototype.getRobotsStatus = function () {
        var _this = this;
        if (this.robotTrafficTimer) {
            clearTimeout(this.robotTrafficTimer);
        }
        this.apiService.getRobotsInMap(this.mapId).subscribe(function (robots) {
            _this.afterRobotsStatusLoad(robots);
        });
    };
    MapViewComponent.prototype.afterRobotsStatusLoad = function (data) {
        for (var k in this.robotMeshes) {
            this.scene.remove(this.robotMeshes[k].root);
        }
        this.robotMeshes = {};
        this.robots = data;
        var voxelLength = this.robots.length;
        var zatoichi, robot, tmpPosArray, tmpPosCanvas;
        for (var i = 0; i < voxelLength; i++) {
            robot = this.robots[i];
            zatoichi = new __WEBPACK_IMPORTED_MODULE_6__zatoichi__["a" /* Zatoichi */](robot);
            tmpPosArray = new __WEBPACK_IMPORTED_MODULE_10__indoor_location_converter__["a" /* ArrayUnit */](robot.position.x, robot.position.y, this.ILC);
            tmpPosCanvas = tmpPosArray.toCanvas();
            zatoichi.setPosition(tmpPosCanvas.x, 20, tmpPosCanvas.y);
            zatoichi.setDirection(robot.direction);
            zatoichi.setName(robot._id, robot.name);
            zatoichi.update();
            this.robotMeshes[robot._id] = zatoichi;
            this.scene.add(zatoichi.root);
        }
        if (this.renderingAllowed) {
            this.robotTrafficTimer = setTimeout(function (that) {
                var t = that;
                return function () {
                    t.getRobotsStatus();
                };
            }(this), 5000);
        }
    };
    MapViewComponent.prototype.getRobotById = function (rId) {
        for (var _i = 0, _a = this.robots; _i < _a.length; _i++) {
            var r = _a[_i];
            if (r._id === rId) {
                return r;
            }
        }
    };
    MapViewComponent.prototype.sendIdleHostRobot = function (targetPositionX, targetPositionY) {
        var _this = this;
        this.apiService.getIdleHostRobot(this.mapId).subscribe(function (res) {
            if (typeof res.error !== 'undefined') {
                alert('All robots are busy now. Please try later.');
            }
            else {
                var robot_1 = _this.getRobotById(res._id);
                var x1 = robot_1.position.x, y1 = robot_1.position.y, x2 = targetPositionX, y2 = targetPositionY, startPoint = _this.graphSearch.graph.grid[x1][y1], endPoint = _this.graphSearch.graph.grid[x2][y2];
                if (endPoint.weight === 0) {
                    var safePoint = _this.graphSearch.getNearestPoint(x2, y2);
                    endPoint = _this.graphSearch.graph.grid[safePoint.x][safePoint.y];
                }
                var path = _this.graphSearch.astar.search(_this.graphSearch.graph, startPoint, endPoint, { closest: false });
                _this.createRoute(path, { color: 0x0072c6 });
                _this.startPoint = null;
                _this.endPoint = null;
                _this.routeCalculating = false;
                var reqBody = {
                    route: JSON.stringify(_this.lighteningRoute(path))
                };
                _this.apiService.setRoute(robot_1._id, reqBody).subscribe(function (res) {
                    if (typeof res.error !== 'undefined') {
                        alert(res.error);
                    }
                    else {
                        _this.selectedRobotName = robot_1.name;
                        _this.robotStart = true;
                        setTimeout(function (that) {
                            var t = that;
                            return function () {
                                t.robotStart = false;
                            };
                        }(_this), 5000);
                    }
                });
            }
        });
    };
    MapViewComponent.prototype.sendSpecificRobot = function (robotId, targetPositionX, targetPositionY) {
        var _this = this;
        this.apiService.getSelectedRobot(robotId).subscribe(function (res) {
            if (typeof res.error !== 'undefined') {
                alert('That robot is busy now. Please try later.');
            }
            else {
                var robot_2 = _this.getRobotById(res._id);
                var x1 = robot_2.position.x, y1 = robot_2.position.y, x2 = targetPositionX, y2 = targetPositionY, startPoint = _this.graphSearch.graph.grid[x1][y1], endPoint = _this.graphSearch.graph.grid[x2][y2];
                if (endPoint.weight === 0) {
                    var safePoint = _this.graphSearch.getNearestPoint(x2, y2);
                    endPoint = _this.graphSearch.graph.grid[safePoint.x][safePoint.y];
                }
                var path = _this.graphSearch.astar.search(_this.graphSearch.graph, startPoint, endPoint, { closest: false });
                _this.createRoute(path, { color: 0x0072c6 });
                _this.startPoint = null;
                _this.endPoint = null;
                _this.routeCalculating = false;
                var reqBody = {
                    route: JSON.stringify(_this.lighteningRoute(path))
                };
                _this.apiService.setRoute(robot_2._id, reqBody).subscribe(function (res) {
                    if (typeof res.error !== 'undefined') {
                        alert(res.error);
                    }
                    else {
                        _this.selectedRobotName = robot_2.name;
                        _this.robotStart = true;
                        setTimeout(function (that) {
                            var t = that;
                            return function () {
                                t.robotStart = false;
                            };
                        }(_this), 5000);
                    }
                });
            }
        });
    };
    MapViewComponent.prototype.sendAnyRobot = function (event) {
        event.preventDefault();
        this.infoShow = false;
        if (this.selectedFoxId) {
            var target = this.foxes[this.selectedFoxId];
            var targetPoint = new __WEBPACK_IMPORTED_MODULE_10__indoor_location_converter__["b" /* CanvasUnit */](target.ding.position.x, target.ding.position.z, this.ILC), targetArray = targetPoint.toArray();
            this.sendIdleHostRobot(targetArray.x, targetArray.y);
            //this.apiService.sendAnyRobot(this.mapId, targetArray.x, targetArray.y).subscribe(res => {});
        }
    };
    MapViewComponent.prototype.sendRobot = function (event, rId) {
        event.preventDefault();
        this.infoShow = false;
        if (this.selectedFoxId) {
            var target = this.foxes[this.selectedFoxId];
            var targetPoint = new __WEBPACK_IMPORTED_MODULE_10__indoor_location_converter__["b" /* CanvasUnit */](target.ding.position.x, target.ding.position.z, this.ILC), targetArray = targetPoint.toArray();
            //console.log(targetArray);
            this.sendSpecificRobot(rId, targetArray.x, targetArray.y);
            //this.apiService.sendRobot(rId, targetArray.x, targetArray.y).subscribe(res => {});
        }
    };
    MapViewComponent.prototype.initMapGraph = function () {
        if (this.graphSearch) {
        }
        else {
            this.graphSearch = new __WEBPACK_IMPORTED_MODULE_11__graph_search__["a" /* GraphSearch */]();
            this.initGraph();
        }
    };
    MapViewComponent.prototype.initGraph = function () {
        if (this.map.fileName.length > 0) {
            var url = 'https://s3.eu-central-1.amazonaws.com/easyinside/maps/' + this.map.fileName;
            var xhr_3 = new XMLHttpRequest();
            if ('withCredentials' in xhr_3) {
                xhr_3.open('GET', url, true);
            }
            //xhr.responseType = 'json';
            var t_3 = this;
            xhr_3.onreadystatechange = function () {
                var status;
                var data;
                if (xhr_3.readyState == 4) {
                    status = xhr_3.status;
                    if (status == 200) {
                        data = JSON.parse(xhr_3.responseText);
                        t_3.afterGridDataLoad(data.d);
                    }
                    else {
                        console.log('Error in reading map-grid data');
                    }
                }
            };
            xhr_3.send();
        }
    };
    MapViewComponent.prototype.afterGridDataLoad = function (data) {
        this.graphSearch.set(data, this.desks, (this.map.width / this.map.voxelSize), (this.map.height / this.map.voxelSize), this.map.usePath, function (that) {
            var t = that;
            return function () {
                t.finishGraphSetting();
            };
        }(this));
    };
    MapViewComponent.prototype.finishGraphSetting = function () {
        this.navigationPreparing = false;
        this.getRobotsStatus();
    };
    MapViewComponent.prototype.exit = function (event, rt) {
        event.preventDefault();
        this.renderingAllowed = false;
        this.router.navigate([rt]);
    };
    MapViewComponent.prototype.closeDetailPanel = function (event) {
        event.preventDefault();
        if (typeof this.selectedFoxId !== 'undefined') {
            this.setBlurOnFox(this.foxes[this.selectedFoxId]);
            this.cameraAction.selectedDesk = void (0);
            this.selectedFoxId = void (0);
        }
        this.infoShow = false;
    };
    return MapViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loadingModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], MapViewComponent.prototype, "loadingModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loadingDeskModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
], MapViewComponent.prototype, "loadingDeskModal", void 0);
MapViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map-view',
        template: __webpack_require__("../../../../../src/app/map-view/map-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map-view/map-view.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _g || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _k || Object])
], MapViewComponent);

var _a, _b, _c, _e, _f, _g, _j, _k;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/map-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav-private/nav-private.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-private/nav-private.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" (click)=\"isCollapsed = !isCollapsed\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\" (click)=\"goHome($event)\">Easy Inside</a>\n    </div>\n    <!-- /.navbar-header -->\n\n    <!-- .navbar-maker -->\n    <ul class=\"nav navbar-top-links navbar-right navbar-maker\">\n        <li class=\"dropdown\" dropdown>\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle>\n                <i class=\"fa fa-user fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n            </a>\n            <ul class=\"dropdown-menu dropdown-user\" *dropdownMenu>\n                <li><a [routerLink]=\"['/maker/account']\"><i class=\"fa fa-user fa-fw\"></i> User Profile</a>\n                </li>\n                <li><a href=\"#\"><i class=\"fa fa-gear fa-fw\"></i> Settings</a>\n                </li>\n                <li *ngIf=\"showAdminMenu\">\n                    <a [routerLink]=\"['/admin/userlist']\"><i class=\"fa fa-wrench fa-fw\"></i> Admin Dashboard</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li><a href=\"/auth/logout\"><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a>\n                </li>\n            </ul>\n            <!-- /.dropdown-user -->\n        </li>\n        <!-- /.dropdown -->\n    </ul>\n    <!-- /.navbar-maker -->\n\n    <!-- .navbar-admin -->\n    <ul class=\"nav navbar-top-links navbar-right navbar-admin\">\n        <li class=\"dropdown\" dropdown>\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" alt=\"File\" dropdownToggle>\n                <i class=\"fa fa-envelope fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n            </a>\n            <ul class=\"dropdown-menu dropdown-messages\" *dropdownMenu>\n                <li>\n                    <a href=\"#\">\n                        <div>\n                            <strong>John Smith</strong>\n                            <span class=\"pull-right text-muted\">\n                                <em>Yesterday</em>\n                            </span>\n                        </div>\n                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"#\">\n                        <div>\n                            <strong>John Smith</strong>\n                            <span class=\"pull-right text-muted\">\n                                <em>Yesterday</em>\n                            </span>\n                        </div>\n                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"#\">\n                        <div>\n                            <strong>John Smith</strong>\n                            <span class=\"pull-right text-muted\">\n                                <em>Yesterday</em>\n                            </span>\n                        </div>\n                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a class=\"text-center\" href=\"#\">\n                        <strong>Read All Messages</strong>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                </li>\n            </ul>\n            <!-- /.dropdown-messages -->\n        </li>\n        <!-- /.dropdown -->\n        <li class=\"dropdown\" dropdown>\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle>\n                <i class=\"fa fa-tasks fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n            </a>\n            <ul class=\"dropdown-menu dropdown-tasks\" *dropdownMenu>\n                <li>\n                    <a href=\"#\">\n                        <div>\n                            <p>\n                                <strong>Task 1</strong>\n                                <span class=\"pull-right text-muted\">40% Complete</span>\n                            </p>\n                            <div class=\"progress progress-striped active\">\n                                <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n                                    <span class=\"sr-only\">40% Complete (success)</span>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"#\">\n                        <div>\n                            <p>\n                                <strong>Task 2</strong>\n                                <span class=\"pull-right text-muted\">20% Complete</span>\n                            </p>\n                            <div class=\"progress progress-striped active\">\n                                <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\n                                    <span class=\"sr-only\">20% Complete</span>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"#\">\n                        <div>\n                            <p>\n                                <strong>Task 3</strong>\n                                <span class=\"pull-right text-muted\">60% Complete</span>\n                            </p>\n                            <div class=\"progress progress-striped active\">\n                                <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n                                    <span class=\"sr-only\">60% Complete (warning)</span>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"#\">\n                        <div>\n                            <p>\n                                <strong>Task 4</strong>\n                                <span class=\"pull-right text-muted\">80% Complete</span>\n                            </p>\n                            <div class=\"progress progress-striped active\">\n                                <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\n                                    <span class=\"sr-only\">80% Complete (danger)</span>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a class=\"text-center\" href=\"#\">\n                        <strong>See All Tasks</strong>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                </li>\n            </ul>\n            <!-- /.dropdown-tasks -->\n        </li>\n        <!-- /.dropdown -->\n        <li class=\"dropdown\" dropdown>\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle>\n                <i class=\"fa fa-bell fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n            </a>\n            <ul class=\"dropdown-menu dropdown-alerts\" *dropdownMenu>\n                <li>\n                    <a href=\"#\">\n                        <div>\n                            <i class=\"fa fa-comment fa-fw\"></i> New Comment\n                            <span class=\"pull-right text-muted small\">4 minutes ago</span>\n                        </div>\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"#\">\n                        <div>\n                            <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n                            <span class=\"pull-right text-muted small\">12 minutes ago</span>\n                        </div>\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"#\">\n                        <div>\n                            <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n                            <span class=\"pull-right text-muted small\">4 minutes ago</span>\n                        </div>\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"#\">\n                        <div>\n                            <i class=\"fa fa-tasks fa-fw\"></i> New Task\n                            <span class=\"pull-right text-muted small\">4 minutes ago</span>\n                        </div>\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"#\">\n                        <div>\n                            <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n                            <span class=\"pull-right text-muted small\">4 minutes ago</span>\n                        </div>\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a class=\"text-center\" href=\"#\">\n                        <strong>See All Alerts</strong>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                </li>\n            </ul>\n            <!-- /.dropdown-alerts -->\n        </li>\n        <!-- /.dropdown -->\n        <li class=\"dropdown\" dropdown>\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle>\n                <i class=\"fa fa-user fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n            </a>\n            <ul class=\"dropdown-menu dropdown-user\" *dropdownMenu>\n                <li><a [routerLink]=\"['/maker/account']\"><i class=\"fa fa-user fa-fw\"></i> User Profile</a>\n                </li>\n                <li><a href=\"#\"><i class=\"fa fa-gear fa-fw\"></i> Settings</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li><a href=\"/auth/logout\"><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a>\n                </li>\n            </ul>\n            <!-- /.dropdown-user -->\n        </li>\n        <!-- /.dropdown -->\n    </ul>\n    <!-- /.navbar-admin -->\n\n    <!-- .navbar-mapeditor -->\n    <ul class=\"nav navbar-top-links navbar-right navbar-mapeditor\">\n        <li class=\"dropdown\" dropdown>\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle>\n                <i class=\"fa fa-save fa-fw\"></i> File <i class=\"fa fa-caret-down\"></i>\n            </a>\n            <ul class=\"dropdown-menu dropdown-file\" *dropdownMenu>\n                <li><a href=\"#\" (click)=\"saveMap($event)\">Save</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#\" (click)=\"saveMapAndExit($event)\">Save &amp; Exit</a></li>\n                <li><a href=\"#\" (click)=\"askExit($event)\">Exit</a></li>\n            </ul>\n            <!-- /.dropdown-messages -->\n        </li>\n        <!-- /.dropdown -->\n        <li class=\"dropdown\" dropdown>\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle>\n                <i class=\"fa fa-user fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n            </a>\n            <ul class=\"dropdown-menu dropdown-user\" *dropdownMenu>\n                <li><a [routerLink]=\"['/maker/account']\"><i class=\"fa fa-user fa-fw\"></i> User Profile</a>\n                </li>\n                <li><a href=\"#\"><i class=\"fa fa-gear fa-fw\"></i> Settings</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li><a href=\"/auth/logout\"><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a>\n                </li>\n            </ul>\n            <!-- /.dropdown-user -->\n        </li>\n        <!-- /.dropdown -->\n    </ul>\n    <!-- /.navbar-mapeditor -->\n\n    <!-- .navbar-mapoptimizer -->\n    <ul class=\"nav navbar-top-links navbar-right navbar-mapoptimizer\">\n        <li class=\"dropdown\" dropdown>\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle>\n                <i class=\"fa fa-user fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n            </a>\n            <ul class=\"dropdown-menu dropdown-user\" *dropdownMenu>\n                <li><a [routerLink]=\"['/maker/account']\"><i class=\"fa fa-user fa-fw\"></i> User Profile</a>\n                </li>\n                <li><a href=\"#\"><i class=\"fa fa-gear fa-fw\"></i> Settings</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li><a href=\"/auth/logout\"><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a>\n                </li>\n            </ul>\n            <!-- /.dropdown-user -->\n        </li>\n        <!-- /.dropdown -->\n    </ul>\n    <!-- /.navbar-mapoptimizer -->\n\n    <!-- .navbar-deskeditor -->\n    <ul class=\"nav navbar-top-links navbar-right navbar-deskeditor\">\n        <li class=\"dropdown\" dropdown>\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle>\n                <i class=\"fa fa-save fa-fw\"></i> File <i class=\"fa fa-caret-down\"></i>\n            </a>\n            <ul class=\"dropdown-menu dropdown-file\" *dropdownMenu>\n                <li><a href=\"#\" (click)=\"saveDeskMap($event)\">Save</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#\" (click)=\"saveDeskAndExit($event)\">Save &amp; Exit</a></li>\n                <li><a href=\"#\" (click)=\"askDeskExit($event)\">Exit</a></li>\n            </ul>\n            <!-- /.dropdown-messages -->\n        </li>\n        <!-- /.dropdown -->\n        <li class=\"dropdown\" dropdown>\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle>\n                <i class=\"fa fa-user fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n            </a>\n            <ul class=\"dropdown-menu dropdown-user\" *dropdownMenu>\n                <li><a [routerLink]=\"['/maker/account']\"><i class=\"fa fa-user fa-fw\"></i> User Profile</a>\n                </li>\n                <li><a href=\"#\"><i class=\"fa fa-gear fa-fw\"></i> Settings</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li><a href=\"/auth/logout\"><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a>\n                </li>\n            </ul>\n            <!-- /.dropdown-user -->\n        </li>\n        <!-- /.dropdown -->\n    </ul>\n    <!-- /.navbar-deskeditor -->\n\n    <!-- .navbar-infoeditor -->\n    <ul class=\"nav navbar-top-links navbar-right navbar-infoeditor\">\n        <li class=\"dropdown\" dropdown>\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle>\n                <i class=\"fa fa-save fa-fw\"></i> File <i class=\"fa fa-caret-down\"></i>\n            </a>\n            <ul class=\"dropdown-menu dropdown-file\" *dropdownMenu>\n                <li><a href=\"#\" (click)=\"saveInfo($event)\">Save</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#\" (click)=\"saveInfoAndExit($event)\">Save &amp; Exit</a></li>\n                <li><a href=\"#\" (click)=\"askInfoExit($event)\">Exit</a></li>\n            </ul>\n            <!-- /.dropdown-messages -->\n        </li>\n        <!-- /.dropdown -->\n        <li class=\"dropdown\" dropdown>\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle>\n                <i class=\"fa fa-user fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n            </a>\n            <ul class=\"dropdown-menu dropdown-user\" *dropdownMenu>\n                <li><a [routerLink]=\"['/maker/account']\"><i class=\"fa fa-user fa-fw\"></i> User Profile</a>\n                </li>\n                <li><a href=\"#\"><i class=\"fa fa-gear fa-fw\"></i> Settings</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li><a href=\"/auth/logout\"><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a>\n                </li>\n            </ul>\n            <!-- /.dropdown-user -->\n        </li>\n        <!-- /.dropdown -->\n    </ul>\n    <!-- /.navbar-infoeditor -->\n    <!-- /.navbar-top-links -->\n\n    <div class=\"navbar-default sidebar\" role=\"navigation\">\n        <div class=\"sidebar-nav navbar-collapse\" (collapsed)=\"collapsed($event)\" (expanded)=\"expanded($event)\" [collapse]=\"isCollapsed\">\n            <!-- /.nav-maker -->\n            <ul class=\"nav nav-maker\" id=\"side-menu\">\n                <!--<li class=\"sidebar-search\">\n                    <div class=\"input-group custom-search-form\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                        <span class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"button\">\n                            <i class=\"fa fa-search\"></i>\n                        </button>\n                    </span>\n                    </div>\n                </li>-->\n                <li>\n                    <a [routerLink]=\"['/maker/dashboard']\"><i class=\"fa fa-dashboard fa-fw\"></i> Dashboard</a>\n                </li>\n                <li>\n                    <a href=\"#\"><i class=\"fa fa-user fa-fw\"></i> Account<span class=\"fa arrow\"></span></a>\n                    <ul class=\"nav nav-second-level\">\n                        <li>\n                            <a [routerLink]=\"['/maker/account']\">User Profile</a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['/maker/acount-history']\">Account History</a>\n                        </li>\n                    </ul>\n                    <!-- /.nav-second-level -->\n                </li>\n                <li>\n                    <a [routerLink]=\"['/maker/spaces']\"><i class=\"fa fa-building fa-fw\"></i> Space & Map</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/maker/textures']\"><i class=\"fa fa-paint-brush fa-fw\"></i> Texture</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/maker/geometries']\"><i class=\"fa fa-cube fa-fw\"></i> Geometrie</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/maker/dings']\"><i class=\"fa fa-cubes fa-fw\"></i> Ding</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/maker/robots']\"><i class=\"fa fa-blind fa-fw\"></i> Robot</a>\n                </li>\n            </ul>\n\n            <!-- /.nav-mapeditor -->\n            <ul class=\"nav nav-mapeditor\" id=\"side-menu\">\n                <li>\n                    <div class=\"panel-heading\" style=\"background-color:#23527c;color:#fff;\">\n                        Grid\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        Grid Layer: \n                        <div class=\"btn-group\">\n                            <label class=\"btn btn-default btn-xs\" [(ngModel)]=\"gridLayer\" btnRadio=\"0\" (click)=\"moveGrid($event)\" uncheckable>0</label>\n                            <label class=\"btn btn-default btn-xs\" [(ngModel)]=\"gridLayer\" btnRadio=\"1\" (click)=\"moveGrid($event)\" uncheckable>1</label>\n                            <label class=\"btn btn-default btn-xs\" [(ngModel)]=\"gridLayer\" btnRadio=\"2\" (click)=\"moveGrid($event)\" uncheckable>2</label>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        Grid BG: {{bgName}}\n                        <div class=\"btn-group\">\n                            <label class=\"btn btn-default btn-xs\" [(ngModel)]=\"gridOn\" btnRadio=\"On\" (click)=\"toggleGrid($event)\" uncheckable>On</label>\n                            <label class=\"btn btn-default btn-xs\" [(ngModel)]=\"gridOn\" btnRadio=\"Off\" (click)=\"toggleGrid($event)\" uncheckable>Off</label>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        <input type=\"file\" style=\"width:75%;display:inline;\" ng2FileSelect [uploader]=\"uploader\" />\n                        <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"uploader.uploadAll()\" [disabled]=\"uploaderAvailable()\">upload</button>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\" style=\"background-color:#23527c;color:#fff;\">\n                        Select a Ding\n                    </div>\n                </li>\n                <li>\n                    <a href=\"#\"><i class=\"fa fa-cubes fa-fw\"></i> Floors<span class=\"fa arrow\"></span></a>\n                    <ul class=\"nav nav-second-level\">\n                        <li *ngFor=\"let f of floors;\">\n                            <a href=\"#\" (click)=\"setVoxel($event, f._id)\"><i class=\"fa fa-cube fa-fw\" [ngStyle]=\"{'color': f.texture.color | arithmeticRGBtoHEX}\"></i> {{f.name}}</a>\n                        </li>\n                    </ul>\n                    <!-- /.nav-second-level -->\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        <button class=\"btn btn-primary btn-xs\" (click)=\"fillFloor($event)\">Fill Floor with Selected Ding</button>\n                    </div>\n                </li>\n                <li>\n                    <a href=\"#\"><i class=\"fa fa-cubes fa-fw\"></i> Walls<span class=\"fa arrow\"></span></a>\n                    <ul class=\"nav nav-second-level\">\n                        <li *ngFor=\"let w of walls;\">\n                            <a href=\"#\" (click)=\"setVoxel($event, w._id)\"><i class=\"fa fa-cube fa-fw\" [ngStyle]=\"{'color': w.texture.color | arithmeticRGBtoHEX}\"></i> {{w.name}}</a>\n                        </li>\n                    </ul>\n                    <!-- /.nav-second-level -->\n                </li>\n                <li>\n                    <a href=\"#\"><i class=\"fa fa-cubes fa-fw\"></i> Path<span class=\"fa arrow\"></span></a>\n                    <ul class=\"nav nav-second-level\">\n                        <li *ngFor=\"let p of paths;\">\n                            <a href=\"#\" (click)=\"setVoxel($event, p._id)\"><i class=\"fa fa-cube fa-fw\" [ngStyle]=\"{'color': p.texture.color | arithmeticRGBtoHEX}\"></i> {{p.name}}</a>\n                        </li>\n                    </ul>\n                    <!-- /.nav-second-level -->\n                </li>\n                <li>\n                    <div class=\"panel-heading\" style=\"background-color:#23527c;color:#fff;\">\n                        Key Maps\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        <button class=\"btn btn-default btn-xs\">Ctrl</button> Put a Ding\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        <button class=\"btn btn-default btn-xs\">Alt</button> Delete a Ding\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        <button class=\"btn btn-default btn-xs\"><i class=\"fa fa-arrow-up\"></i></button> Zoom In\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        <button class=\"btn btn-default btn-xs\"><i class=\"fa fa-arrow-down\"></i></button> Zoom Out\n                    </div>\n                </li>\n            </ul>\n\n            <!-- /.nav-mapoptimizer -->\n            <ul class=\"nav nav-mapoptimizer\" id=\"side-menu\">\n                <li></li>\n            </ul>\n\n            <!-- /.nav-deskeditor -->\n            <ul class=\"nav nav-deskeditor\" id=\"side-menu\">\n                <li>\n                    <div class=\"panel-heading\" style=\"background-color:#23527c;color:#fff;\">\n                        Grid & Path\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        Grid Layer: \n                        <div class=\"btn-group\">\n                            <label class=\"btn btn-default btn-xs\" [(ngModel)]=\"gridLayer\" btnRadio=\"0\" (click)=\"moveGrid($event)\" uncheckable>0</label>\n                            <label class=\"btn btn-default btn-xs\" [(ngModel)]=\"gridLayer\" btnRadio=\"1\" (click)=\"moveGrid($event)\" uncheckable>1</label>\n                            <label class=\"btn btn-default btn-xs\" [(ngModel)]=\"gridLayer\" btnRadio=\"2\" (click)=\"moveGrid($event)\" uncheckable>2</label>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        Grid BG: {{bgName}}\n                        <div class=\"btn-group\">\n                            <label class=\"btn btn-default btn-xs\" [(ngModel)]=\"gridOn\" btnRadio=\"On\" (click)=\"toggleGrid($event)\" uncheckable>On</label>\n                            <label class=\"btn btn-default btn-xs\" [(ngModel)]=\"gridOn\" btnRadio=\"Off\" (click)=\"toggleGrid($event)\" uncheckable>Off</label>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        Path for Robot:\n                        <div class=\"btn-group\">\n                            <label class=\"btn btn-default btn-xs\" [(ngModel)]=\"pathOn\" btnRadio=\"On\" (click)=\"togglePath($event)\" uncheckable>On</label>\n                            <label class=\"btn btn-default btn-xs\" [(ngModel)]=\"pathOn\" btnRadio=\"Off\" (click)=\"togglePath($event)\" uncheckable>Off</label>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        <input type=\"file\" style=\"width:75%;display:inline;\" ng2FileSelect [uploader]=\"uploader\" />\n                        <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"uploader.uploadAll()\" [disabled]=\"uploaderAvailable()\">upload</button>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\" style=\"background-color:#23527c;color:#fff;\">\n                        Select a Ding\n                    </div>\n                </li>\n                <li>\n                    <a href=\"#\"><i class=\"fa fa-cubes fa-fw\"></i> Desks<span class=\"fa arrow\"></span></a>\n                    <ul class=\"nav nav-second-level\">\n                        <li *ngFor=\"let d of desks;\">\n                            <a href=\"#\" (click)=\"setVoxel($event, d._id)\"><i class=\"fa fa-cube fa-fw\" [ngStyle]=\"{'color': d.texture.color | arithmeticRGBtoHEX}\"></i> {{d.name}}</a>\n                        </li>\n                    </ul>\n                    <!-- /.nav-second-level -->\n                </li>\n                <li>\n                    <a href=\"#\"><i class=\"fa fa-cubes fa-fw\"></i> Places<span class=\"fa arrow\"></span></a>\n                    <ul class=\"nav nav-second-level\">\n                        <li *ngFor=\"let p of places;\">\n                            <a href=\"#\" (click)=\"setVoxel($event, p._id)\"><i class=\"fa fa-cube fa-fw\" [ngStyle]=\"{'color': p.texture.color | arithmeticRGBtoHEX}\"></i> {{p.name}}</a>\n                        </li>\n                    </ul>\n                    <!-- /.nav-second-level -->\n                </li>\n                <li>\n                    <a href=\"#\"><i class=\"fa fa-cubes fa-fw\"></i> Objects<span class=\"fa arrow\"></span></a>\n                    <ul class=\"nav nav-second-level\">\n                        <li *ngFor=\"let o of objs;\">\n                            <a href=\"#\" (click)=\"setVoxel($event, o._id)\"><i class=\"fa fa-cube fa-fw\" [ngStyle]=\"{'color': o.texture.color | arithmeticRGBtoHEX}\"></i> {{o.name}}</a>\n                        </li>\n                    </ul>\n                    <!-- /.nav-second-level -->\n                </li>\n                <li>\n                    <div class=\"panel-heading\" style=\"background-color:#23527c;color:#fff;\">\n                        Key Maps\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        <button class=\"btn btn-default btn-xs\">R</button> Rotate a Ding\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        <button class=\"btn btn-default btn-xs\">Ctrl</button> Put a Ding\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        <button class=\"btn btn-default btn-xs\">Alt</button> Delete a Ding\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        <button class=\"btn btn-default btn-xs\"><i class=\"fa fa-arrow-up\"></i></button> Zoom In\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        <button class=\"btn btn-default btn-xs\"><i class=\"fa fa-arrow-down\"></i></button> Zoom Out\n                    </div>\n                </li>\n            </ul>\n\n            <!-- /.nav-infoeditor -->\n            <ul class=\"nav nav-infoeditor\" id=\"side-menu\">\n                <li>\n                    <div class=\"panel-heading\" style=\"background-color:#23527c;color:#fff;\">\n                        Info\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        There are {{infoCount}} Infos\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        <button class=\"btn btn-primary btn-xs\" (click)=\"showInfos($event)\">Manage Infos</button>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\" style=\"background-color:#23527c;color:#fff;\">\n                        Options\n                    </div>\n                </li>\n                <li>\n                    <div class=\"panel-heading\">\n                        Path for Robot:\n                        <div class=\"btn-group\">\n                            <label class=\"btn btn-default btn-xs\" [(ngModel)]=\"pathOn\" btnRadio=\"On\" (click)=\"togglePath($event)\" uncheckable>On</label>\n                            <label class=\"btn btn-default btn-xs\" [(ngModel)]=\"pathOn\" btnRadio=\"Off\" (click)=\"togglePath($event)\" uncheckable>Off</label>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n\n            <!-- /.nav-admin -->\n            <ul class=\"nav nav-admin\" id=\"side-menu\">\n                <li class=\"sidebar-search\">\n                    <div class=\"input-group custom-search-form\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                        <span class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"button\">\n                            <i class=\"fa fa-search\"></i>\n                        </button>\n                    </span>\n                    </div>\n                    <!-- /input-group -->\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin/dashboard']\"><i class=\"fa fa-dashboard fa-fw\"></i> Dashboard {{status}}</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin/userlist']\"><i class=\"fa fa-building fa-fw\"></i> User List</a>\n                </li>\n                <li>\n                    <a href=\"#\"><i class=\"fa fa-bar-chart-o fa-fw\"></i> Charts<span class=\"fa arrow\"></span></a>\n                    <ul class=\"nav nav-second-level\">\n                        <li>\n                            <a href=\"flot.html\">Flot Charts</a>\n                        </li>\n                        <li>\n                            <a href=\"morris.html\">Morris.js Charts</a>\n                        </li>\n                    </ul>\n                    <!-- /.nav-second-level -->\n                </li>\n                <li>\n                    <a href=\"tables.html\"><i class=\"fa fa-table fa-fw\"></i> Tables</a>\n                </li>\n                <li>\n                    <a href=\"#\"><i class=\"fa fa-wrench fa-fw\"></i> UI Elements<span class=\"fa arrow\"></span></a>\n                    <ul class=\"nav nav-second-level\">\n                        <li>\n                            <a href=\"panels-wells.html\">Panels and Wells</a>\n                        </li>\n                        <li>\n                            <a href=\"buttons.html\">Buttons</a>\n                        </li>\n                        <li>\n                            <a href=\"notifications.html\">Notifications</a>\n                        </li>\n                        <li>\n                            <a href=\"typography.html\">Typography</a>\n                        </li>\n                        <li>\n                            <a href=\"icons.html\"> Icons</a>\n                        </li>\n                        <li>\n                            <a href=\"grid.html\">Grid</a>\n                        </li>\n                    </ul>\n                    <!-- /.nav-second-level -->\n                </li>\n            </ul>\n        </div>\n        <!-- /.sidebar-collapse -->\n    </div>\n    <!-- /.navbar-static-side -->\n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav-private/nav-private.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavPrivateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__space_service__ = __webpack_require__("../../../../../src/app/space.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_service__ = __webpack_require__("../../../../../src/app/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavPrivateComponent = (function () {
    function NavPrivateComponent(route, location, elementRef, navigationService, accountService, apiService, spaceService, router) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.elementRef = elementRef;
        this.navigationService = navigationService;
        this.accountService = accountService;
        this.apiService = apiService;
        this.spaceService = spaceService;
        this.router = router;
        this.isCollapsed = false;
        this.account = {};
        this.dings = [];
        this.floors = [];
        this.walls = [];
        this.paths = [];
        this.desks = [];
        this.places = [];
        this.objs = [];
        this.gridLayer = '0';
        this.gridOn = 'Off';
        this.pathOn = 'Off';
        this.bgName = 'No BG';
        this.infoCount = 0;
        this.showAdminMenu = false;
        this.subscriptionStatus = navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
            if (status == 'mapeditor') {
                _this.getDings();
            }
            else if (status == 'deskeditor') {
                _this.getDings();
            }
        });
        this.subscriptionMessage = navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
            if (message.includes('mapid')) {
                var data = _this.message.split('=');
                _this.mapId = data[1];
                //this.uploader = new FileUploader({url:'https://localhost:3000/space/map-bg/' + this.mapId});
                _this.uploader = new __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileUploader"]({ url: '/space/map-bg/' + _this.mapId });
                _this.uploader.onCompleteItem = function (item, response, status, headers) {
                    var responsePath = JSON.parse(response);
                    //console.log(response, responsePath, item, status, headers);// the url will be in the response
                    if (responsePath.result == true) {
                        _this.navigationService.sendNavigationMessage('mapreload');
                    }
                };
            }
            else if (message.includes('bgfile')) {
                var data = _this.message.split('=');
                _this.bgName = (data[1] == 'null') ? 'No BG' : data[1];
            }
            else if (message.includes('infocount')) {
                var data = _this.message.split('=');
                _this.infoCount = parseInt(data[1]);
            }
        });
    }
    NavPrivateComponent.prototype.collapsed = function (event) {
        console.info(event);
    };
    NavPrivateComponent.prototype.expanded = function (event) {
        console.info(event);
    };
    NavPrivateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getAccount().subscribe(function (account) {
            _this.account = account;
            if (_this.account.userGroup == 'administrators') {
                _this.showAdminMenu = true;
            }
        }, function (err) {
            if (err == 'AUTH_NEEDED') {
                document.location.href = '/home';
            }
        });
    };
    NavPrivateComponent.prototype.ngAfterViewInit = function () {
        /*this.accountService.getAccount().subscribe(account => {
          this.account = account;
    
          if (this.account.userGroup == 'administrators') {
            var el = document.createElement('li');
            el.innerHTML = '<a href="/admin/userlist"><i class="fa fa-wrench fa-fw"></i> Admin Dashboard</a>';
            var menuParent = this.elementRef.nativeElement.querySelector('.dropdown-menu.dropdown-user'),
                divideBar = this.elementRef.nativeElement.querySelector('.dropdown-menu.dropdown-user .divider');
            menuParent.insertBefore(el, divideBar);
          }
        }, err => {
          if (err == 'AUTH_NEEDED') {
            document.location.href = '/home';
          }
        });*/
        // change menus by status
        var navbarTop = this.elementRef.nativeElement.querySelector('.navbar-static-top');
        var sidebarContainer = this.elementRef.nativeElement.querySelector('.sidebar-nav');
        switch (this.status) {
            case 'maker':
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-admin'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapeditor'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapoptimizer'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-deskeditor'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-infoeditor'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-admin'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapeditor'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapoptimizer'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-deskeditor'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-infoeditor'));
                break;
            case 'admin':
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-maker'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapeditor'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapoptimizer'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-deskeditor'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-infoeditor'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-maker'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapeditor'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapoptimizer'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-deskeditor'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-infoeditor'));
                break;
            case 'mapeditor':
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-admin'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-maker'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapoptimizer'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-deskeditor'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-infoeditor'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-admin'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-maker'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapoptimizer'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-deskeditor'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-infoeditor'));
                break;
            case 'mapoptimizer':
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-admin'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-maker'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapeditor'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-deskeditor'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-infoeditor'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-admin'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-maker'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapeditor'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-deskeditor'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-infoeditor'));
                break;
            case 'deskeditor':
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-admin'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-maker'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapeditor'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapoptimizer'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-infoeditor'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-admin'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-maker'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapeditor'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapoptimizer'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-infoeditor'));
                break;
            case 'infoeditor':
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-admin'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-maker'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapeditor'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapoptimizer'));
                navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-deskeditor'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-admin'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-maker'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapeditor'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapoptimizer'));
                sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-deskeditor'));
                break;
        }
        var s = document.createElement('script');
        s.src = '/assets/bootstrap/sb-admin2/js/sb-admin-2.js';
        this.elementRef.nativeElement.appendChild(s);
        var s2 = document.createElement('script');
        s2.innerText = '(function(){$(\'body\').css(\'background-color\',\'#f8f8f8\')})();';
        this.elementRef.nativeElement.appendChild(s2);
    };
    NavPrivateComponent.prototype.ngOnDestroy = function () {
        this.subscriptionStatus.unsubscribe();
        this.subscriptionMessage.unsubscribe();
    };
    NavPrivateComponent.prototype.goHome = function (event) {
        event.preventDefault();
        switch (this.status) {
            case 'maker':
                this.router.navigate(['/']);
                break;
            case 'admin':
                this.router.navigate(['/']);
                break;
            case 'mapeditor':
                this.navigationService.sendNavigationMessage('home');
                break;
            case 'mapoptimizer':
                break;
            case 'deskeditor':
                this.navigationService.sendNavigationMessage('home');
                break;
            case 'infoeditor':
                this.navigationService.sendNavigationMessage('home');
                break;
        }
    };
    NavPrivateComponent.prototype.getDings = function () {
        var _this = this;
        this.apiService.getDings().subscribe(function (dings) {
            _this.dings = dings;
            _this.floors = [];
            _this.walls = [];
            _this.paths = [];
            _this.desks = [];
            _this.places = [];
            _this.objs = [];
            for (var _i = 0, _a = _this.dings; _i < _a.length; _i++) {
                var d = _a[_i];
                if (d.type == 'floor') {
                    _this.floors.push(d);
                }
                if (d.type == 'wall') {
                    _this.walls.push(d);
                }
                if (d.type == 'path') {
                    _this.paths.push(d);
                }
                if (d.type == 'desk') {
                    _this.desks.push(d);
                }
                if (d.type == 'place') {
                    _this.places.push(d);
                }
                if (d.type == 'object') {
                    _this.objs.push(d);
                }
                //console.log(this.floors, this.walls);
            }
        });
    };
    NavPrivateComponent.prototype.setVoxel = function (event, vId) {
        event.preventDefault();
        this.navigationService.sendNavigationMessage('dingid=' + vId);
    };
    NavPrivateComponent.prototype.fillFloor = function (event) {
        event.preventDefault();
        this.navigationService.sendNavigationMessage('fillFloor');
    };
    NavPrivateComponent.prototype.moveGrid = function (event) {
        event.preventDefault();
        this.navigationService.sendNavigationMessage('gridlayer=' + this.gridLayer);
    };
    NavPrivateComponent.prototype.toggleGrid = function (event) {
        event.preventDefault();
        this.navigationService.sendNavigationMessage('gridtoggle=' + this.gridOn);
    };
    NavPrivateComponent.prototype.togglePath = function (event) {
        event.preventDefault();
        this.navigationService.sendNavigationMessage('pathtoggle=' + this.pathOn);
    };
    NavPrivateComponent.prototype.uploaderAvailable = function () {
        if (this.status == 'mapeditor') {
            if (this.uploader) {
                return (!this.uploader.getNotUploadedItems().length);
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    };
    NavPrivateComponent.prototype.saveMap = function (event) {
        event.preventDefault();
        this.navigationService.sendNavigationMessage('save');
    };
    NavPrivateComponent.prototype.saveMapAndExit = function (event) {
        event.preventDefault();
        this.navigationService.sendNavigationMessage('safeexit');
    };
    NavPrivateComponent.prototype.askExit = function (event) {
        event.preventDefault();
        this.navigationService.sendNavigationMessage('exit');
    };
    NavPrivateComponent.prototype.saveDeskMap = function (event) {
        event.preventDefault();
        this.navigationService.sendNavigationMessage('save');
    };
    NavPrivateComponent.prototype.saveDeskAndExit = function (event) {
        event.preventDefault();
        this.navigationService.sendNavigationMessage('safeexit');
    };
    NavPrivateComponent.prototype.askDeskExit = function (event) {
        event.preventDefault();
        this.navigationService.sendNavigationMessage('exit');
    };
    NavPrivateComponent.prototype.saveInfo = function (event) {
        event.preventDefault();
        this.navigationService.sendNavigationMessage('save');
    };
    NavPrivateComponent.prototype.saveInfoAndExit = function (event) {
        event.preventDefault();
        this.navigationService.sendNavigationMessage('safeexit');
    };
    NavPrivateComponent.prototype.askInfoExit = function (event) {
        event.preventDefault();
        this.navigationService.sendNavigationMessage('exit');
    };
    NavPrivateComponent.prototype.showInfos = function (event) {
        event.preventDefault();
        this.navigationService.sendNavigationMessage('showinfos');
    };
    return NavPrivateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NavPrivateComponent.prototype, "status", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NavPrivateComponent.prototype, "message", void 0);
NavPrivateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav-private',
        template: __webpack_require__("../../../../../src/app/nav-private/nav-private.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav-private/nav-private.component.css"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__account_service__["a" /* AccountService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__space_service__["a" /* SpaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__space_service__["a" /* SpaceService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _h || Object])
], NavPrivateComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/nav-private.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationService = (function () {
    function NavigationService() {
        this.window = window; // type assertion
        this.navStatusSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.navMessageSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.navStatus$ = this.navStatusSource.asObservable();
        this.navMessage$ = this.navMessageSource.asObservable();
    }
    NavigationService.prototype.setNavigationStatus = function (status) {
        this.navStatusSource.next(status);
    };
    NavigationService.prototype.sendNavigationMessage = function (message) {
        this.navMessageSource.next(message);
    };
    return NavigationService;
}());
NavigationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NavigationService);

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/navigation.service.js.map

/***/ }),

/***/ "../../../../../src/app/plane-navigator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaneNavigator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
 // must 'npm install @types/three'!!!
var PlaneNavigator = (function () {
    function PlaneNavigator() {
        this.bgWidth = 55;
        this.bgHeight = 35;
        this.root = new __WEBPACK_IMPORTED_MODULE_0_three__["w" /* Object3D */]();
        this.background = new __WEBPACK_IMPORTED_MODULE_0_three__["s" /* Mesh */](new __WEBPACK_IMPORTED_MODULE_0_three__["y" /* PlaneGeometry */](this.bgWidth, this.bgHeight), new __WEBPACK_IMPORTED_MODULE_0_three__["t" /* MeshBasicMaterial */]({
            color: 0x000000,
            transparent: true,
            opacity: 0.2
        }));
        this.background.rotateOnAxis(new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](1, 0, 0), -Math.PI / 2);
        this.background.translateZ(-0.1);
        this.root.add(this.background);
        var btnShape = new __WEBPACK_IMPORTED_MODULE_0_three__["C" /* Shape */]();
        btnShape.moveTo(0, 0);
        btnShape.lineTo(-8, -5);
        btnShape.lineTo(8, -5);
        btnShape.lineTo(0, 0);
        var btnGeo = new __WEBPACK_IMPORTED_MODULE_0_three__["D" /* ShapeGeometry */](btnShape);
        this.btnUp = new __WEBPACK_IMPORTED_MODULE_0_three__["s" /* Mesh */](btnGeo, new __WEBPACK_IMPORTED_MODULE_0_three__["t" /* MeshBasicMaterial */]({
            color: 0xffffff,
            side: __WEBPACK_IMPORTED_MODULE_0_three__["f" /* DoubleSide */]
        }));
        this.btnUp.name = 'btnUp';
        this.btnUp.rotateOnAxis(new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](1, 0, 0), -Math.PI / 2);
        this.btnUp.rotateOnAxis(new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](0, 0, 1), -Math.PI / 2);
        this.btnUp.translateY(25);
        this.root.add(this.btnUp);
        this.btnDown = new __WEBPACK_IMPORTED_MODULE_0_three__["s" /* Mesh */](btnGeo, new __WEBPACK_IMPORTED_MODULE_0_three__["t" /* MeshBasicMaterial */]({
            color: 0xffffff,
            side: __WEBPACK_IMPORTED_MODULE_0_three__["f" /* DoubleSide */]
        }));
        this.btnDown.name = 'btnDown';
        this.btnDown.rotateOnAxis(new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](1, 0, 0), -Math.PI / 2);
        this.btnDown.rotateOnAxis(new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](0, 0, 1), Math.PI / 2);
        this.btnDown.translateY(25);
        this.root.add(this.btnDown);
        this.btnLeft = new __WEBPACK_IMPORTED_MODULE_0_three__["s" /* Mesh */](btnGeo, new __WEBPACK_IMPORTED_MODULE_0_three__["t" /* MeshBasicMaterial */]({
            color: 0xffffff,
            side: __WEBPACK_IMPORTED_MODULE_0_three__["f" /* DoubleSide */]
        }));
        this.btnLeft.name = 'btnLeft';
        this.btnLeft.rotateOnAxis(new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](1, 0, 0), -Math.PI / 2);
        //this.btnDown.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2);
        this.btnLeft.translateY(15);
        this.root.add(this.btnLeft);
        this.btnRight = new __WEBPACK_IMPORTED_MODULE_0_three__["s" /* Mesh */](btnGeo, new __WEBPACK_IMPORTED_MODULE_0_three__["t" /* MeshBasicMaterial */]({
            color: 0xffffff,
            side: __WEBPACK_IMPORTED_MODULE_0_three__["f" /* DoubleSide */]
        }));
        this.btnRight.name = 'btnRight';
        this.btnRight.rotateOnAxis(new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](1, 0, 0), Math.PI / 2);
        //this.btnDown.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2);
        this.btnRight.translateY(15);
        this.root.add(this.btnRight);
        var lineGeo1 = new __WEBPACK_IMPORTED_MODULE_0_three__["l" /* Geometry */]();
        lineGeo1.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](-21, 0, 0), new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](21, 0, 0));
        this.lineUpDown = new __WEBPACK_IMPORTED_MODULE_0_three__["n" /* Line */](lineGeo1, new __WEBPACK_IMPORTED_MODULE_0_three__["o" /* LineBasicMaterial */]({
            color: 0xffffff,
            transparent: true,
            opacity: 0.8
        }));
        this.root.add(this.lineUpDown);
        var lineGeo2 = new __WEBPACK_IMPORTED_MODULE_0_three__["l" /* Geometry */]();
        lineGeo2.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](0, 0, 12), new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](0, 0, -12));
        this.lineLeftRight = new __WEBPACK_IMPORTED_MODULE_0_three__["n" /* Line */](lineGeo2, new __WEBPACK_IMPORTED_MODULE_0_three__["o" /* LineBasicMaterial */]({
            color: 0xffffff,
            transparent: true,
            opacity: 0.8
        }));
        this.root.add(this.lineLeftRight);
    }
    PlaneNavigator.prototype.moveAtTheFrontOf = function (objCamera, window) {
        var fov = objCamera.fov;
        var aspect = objCamera.aspect;
        var distanceOfPanel = 500;
        var frustrumHeight = 2.0 * distanceOfPanel * Math.tan(fov * 0.5 * (Math.PI / 180));
        var frustrumWidth = frustrumHeight * aspect;
        var tmpCameraClone = new __WEBPACK_IMPORTED_MODULE_0_three__["w" /* Object3D */]();
        tmpCameraClone.rotation.copy(objCamera.rotation);
        tmpCameraClone.position.set(objCamera.position.x, objCamera.position.y, objCamera.position.z);
        tmpCameraClone.translateZ(-500);
        tmpCameraClone.translateX(Math.floor(frustrumWidth / 2) - Math.floor(this.bgWidth / 1.5));
        tmpCameraClone.translateY(-(Math.floor(frustrumHeight / 2) - Math.floor(this.bgHeight / 1.5)));
        this.root.position.copy(tmpCameraClone.position);
        this.root.updateMatrix();
    };
    PlaneNavigator.prototype.show = function () {
        this.root.visible = true;
    };
    PlaneNavigator.prototype.hide = function () {
        this.root.visible = false;
    };
    return PlaneNavigator;
}());

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/plane-navigator.js.map

/***/ }),

/***/ "../../../../../src/app/robot.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RobotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RobotService = (function () {
    function RobotService(http) {
        this.http = http;
    }
    RobotService.prototype.getRobots = function (limit, page) {
        return this.http.get('/robot/all/' + limit.toString() + '/' + page.toString()).map(function (res) { return res.json(); });
    };
    RobotService.prototype.getRobotsByKeyword = function (limit, page, keyword) {
        return this.http.get('/robot/search/' + limit.toString() + '/' + page.toString() + '/' + keyword).map(function (res) { return res.json(); });
    };
    RobotService.prototype.createRobot = function (robot) {
        return this.http.post('/robot/create', robot)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    RobotService.prototype.getRobotById = function (rId) {
        return this.http.get('/robot/' + rId)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    RobotService.prototype.saveRobot = function (id, robot) {
        return this.http.put('/robot/' + id, robot)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    RobotService.prototype.deleteRobot = function (id) {
        return this.http.delete('/robot/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    return RobotService;
}());
RobotService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], RobotService);

var _a;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/robot.service.js.map

/***/ }),

/***/ "../../../../../src/app/robots/robots.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/robots/robots.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-nav-private [status]=\"status\"></app-nav-private>\n\n    <div style=\"position:fixed;right:10px;top:10px;z-index:1001;\">\n        <alert type=\"success\" dismissible=\"true\" *ngIf=\"editComplete\">\n            <strong>Updated!</strong> You successfully change robot data.\n        </alert>\n        <alert type=\"danger\" dismissible=\"true\" *ngIf=\"alert.visible\" (onClose)=\"onCloseAlert($event)\">\n            <strong>Error!</strong> {{alert.message}}\n        </alert>\n        <alert type=\"warning\" *ngIf=\"deleteProcess\">\n            <strong>Warning!</strong> This robot will be deleted permanently. Are you sure?\n            <button type=\"button\" class=\"btn btn-primary btn-xs\" style=\"margin-left:20px;\" (click)=\"deleteRobot($event)\">Yes</button>\n            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteProcess=false\">No</button>\n        </alert>\n    </div>\n\n    <div id=\"page-wrapper\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"page-header\">Robots</h1>\n            </div>\n            <!-- /.col-lg-12 -->\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        DataTables Advanced Tables\n                        <button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"float:right;margin-top:-5px;\" (click)=\"openCreateModal($event)\">\n                            Create A Robot\n                        </button>\n                    </div>\n                    <!-- /.panel-heading -->\n                    <div class=\"panel-body\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group\">\n                                    <label style=\"display:block;\">Show entries</label>\n                                    <div class=\"btn-group\">\n                                        <label class=\"btn btn-default\" [(ngModel)]=\"limit\" btnRadio=\"5\" (click)=\"onClickLimit($event)\" uncheckable>5</label>\n                                        <label class=\"btn btn-default\" [(ngModel)]=\"limit\" btnRadio=\"10\" (click)=\"onClickLimit($event)\" uncheckable>10</label>\n                                        <label class=\"btn btn-default\" [(ngModel)]=\"limit\" btnRadio=\"50\" (click)=\"onClickLimit($event)\" uncheckable>50</label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\" for=\"inputSearch\">Search</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"inputSearch\" (keypress)=\"onChangeKeyword($event)\">\n                                </div>\n                            </div>\n                        </div>\n                        <table width=\"100%\" class=\"table table-striped table-bordered table-hover\" id=\"geometrylistTable\">\n                            <thead>\n                                <tr>\n                                    <th>_Id</th>\n                                    <th>Name</th>\n                                    <th>Host</th>\n                                    <th>Busy</th>\n                                    <th>Map</th>\n                                    <th>Position</th>\n                                    <th>Direction</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let r of robots; let index=index; let odd=odd; let even=even; let last=last;\" [ngClass]=\"{odd: odd, even: even}\">\n                                    <td class=\"preCell\"><a href=\"#\" (click)=\"openEditModal($event, r._id)\">{{r._id}}</a></td>\n                                    <td>{{r.name}}</td>\n                                    <td style=\"text-align:center;\"><span [ngClass]=\"{'glyphicon':true, 'glyphicon-ok': r.isHost, 'glyphicon-remove': !r.isHost}\"><!--{{r.isHost}}--></span></td>\n                                    <td style=\"text-align:center;\"><span [ngClass]=\"{'glyphicon':true, 'glyphicon-ok': r.isBusy, 'glyphicon-remove': !r.isBusy}\"><!--{{r.isBusy}}--></span></td>\n                                    <td>{{r._map.name}}</td>\n                                    <td>&#123;x:{{r.position.x}}, y:{{r.position.y}}&#125;</td>\n                                    <td>{{r.direction}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <div>Showing {{pageFrom}} to {{pageTo}} of {{total}} entries</div>\n                        <pagination [(ngModel)]=\"page\" [totalItems]=\"total\" [itemsPerPage]=\"limit\" [maxSize]=\"5\" [boundaryLinks]=\"true\" [rotate]=\"false\" (pageChanged)=\"pageChanged($event)\"></pagination>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" bsModal #robotCreationModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">New Robot</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"robotCreationModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form id=\"newrobot\" role=\"form\" [formGroup]=\"newRobotForm\" (ngSubmit)=\"createRobot(newRobotForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!newRobotForm.controls['name'].valid && newRobotForm.controls['name'].touched}\">\n                <label>Name</label>\n                <input class=\"form-control\" placeholder=\"Enter robot name\" [formControl]=\"newRobotForm.controls['name']\">\n                <div *ngIf=\"newRobotForm.controls['name'].hasError('required') && newRobotForm.controls['name'].touched\" class=\"alert alert-danger\">\n                  You must include a robot name.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Is Host</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                          {{ishost}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'isHost', true)\">Yes</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'isHost', false)\">No</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Map</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\n                          {{robot?._map?.name}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li *ngFor=\"let m of maps\" role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeRobotStatus($event, 'map', m._id)\">{{m.name}}</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <label>Position X</label>\n          <div class=\"form-group input-group\" [ngClass]=\"{'has-error':!newRobotForm.controls['positionx'].valid && newRobotForm.controls['positionx'].touched}\">\n              <input class=\"form-control\" placeholder=\"Enter X position\" [formControl]=\"newRobotForm.controls['positionx']\" [ngModel]=\"robot?.position?.x\">\n              <span class=\"input-group-addon\">Integers</span>\n          </div>\n          <div *ngIf=\"newRobotForm.controls['positionx'].hasError('required') && newRobotForm.controls['positionx'].touched\" class=\"alert alert-danger\">\n              You must include X position.\n          </div>\n          <div *ngIf=\"newRobotForm.controls['positionx'].hasError('pattern') && newRobotForm.controls['positionx'].touched\" class=\"alert alert-danger\">\n              X position allows only number.\n          </div>\n          <label>Position Y</label>\n          <div class=\"form-group input-group\" [ngClass]=\"{'has-error':!newRobotForm.controls['positiony'].valid && newRobotForm.controls['positiony'].touched}\">\n              <input class=\"form-control\" placeholder=\"Enter Y position\" [formControl]=\"newRobotForm.controls['positiony']\" [ngModel]=\"robot?.position?.y\">\n              <span class=\"input-group-addon\">Integers</span>\n          </div>\n          <div *ngIf=\"newRobotForm.controls['positiony'].hasError('required') && newRobotForm.controls['positiony'].touched\" class=\"alert alert-danger\">\n              You must include Y position.\n          </div>\n          <div *ngIf=\"newRobotForm.controls['positiony'].hasError('pattern') && newRobotForm.controls['positiony'].touched\" class=\"alert alert-danger\">\n              Y position allows only number.\n          </div>\n          <div class=\"form-group\">\n              <label>Direction</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                          {{robot?.direction}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'direction', 'x+')\">X+</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'direction', 'x-')\">X-</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'direction', 'y+')\">Y+</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'direction', 'y-')\">Y-</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Is Busy</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                          {{isbusy}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'isBusy', true)\">Yes</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'isBusy', false)\">No</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!newRobotForm.valid\">\n                  Create\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #robotEditModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Edit Robot</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"robotEditModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form id=\"editrobot\" role=\"form\" [formGroup]=\"editRobotForm\" (ngSubmit)=\"editRobot(editRobotForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!editRobotForm.controls['name'].valid && editRobotForm.controls['name'].touched}\">\n                <label>Name</label>\n                <input class=\"form-control\" placeholder=\"Enter robot name\" [formControl]=\"editRobotForm.controls['name']\">\n                <div *ngIf=\"editRobotForm.controls['name'].hasError('required') && editRobotForm.controls['name'].touched\" class=\"alert alert-danger\">\n                  You must include a robot name.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Is Host</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                          {{ishost}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'isHost', true)\">Yes</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'isHost', false)\">No</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Map</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\n                          {{robot?._map?.name}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li *ngFor=\"let m of maps\" role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeRobotStatus($event, 'map', m._id)\">{{m.name}}</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <label>Position X</label>\n          <div class=\"form-group input-group\" [ngClass]=\"{'has-error':!editRobotForm.controls['positionx'].valid && editRobotForm.controls['positionx'].touched}\">\n              <input class=\"form-control\" placeholder=\"Enter X position\" [formControl]=\"editRobotForm.controls['positionx']\" [ngModel]=\"robot?.position?.x\">\n              <span class=\"input-group-addon\">Integers</span>\n          </div>\n          <div *ngIf=\"editRobotForm.controls['positionx'].hasError('required') && editRobotForm.controls['positionx'].touched\" class=\"alert alert-danger\">\n              You must include X position.\n          </div>\n          <div *ngIf=\"editRobotForm.controls['positionx'].hasError('pattern') && editRobotForm.controls['positionx'].touched\" class=\"alert alert-danger\">\n              X position allows only number.\n          </div>\n          <label>Position Y</label>\n          <div class=\"form-group input-group\" [ngClass]=\"{'has-error':!editRobotForm.controls['positiony'].valid && editRobotForm.controls['positiony'].touched}\">\n              <input class=\"form-control\" placeholder=\"Enter Y position\" [formControl]=\"editRobotForm.controls['positiony']\" [ngModel]=\"robot?.position?.y\">\n              <span class=\"input-group-addon\">Integers</span>\n          </div>\n          <div *ngIf=\"editRobotForm.controls['positiony'].hasError('required') && editRobotForm.controls['positiony'].touched\" class=\"alert alert-danger\">\n              You must include Y position.\n          </div>\n          <div *ngIf=\"editRobotForm.controls['positiony'].hasError('pattern') && editRobotForm.controls['positiony'].touched\" class=\"alert alert-danger\">\n              Y position allows only number.\n          </div>\n          <div class=\"form-group\">\n              <label>Direction</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                          {{robot?.direction}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'direction', 'x+')\">X+</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'direction', 'x-')\">X-</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'direction', 'y+')\">Y+</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'direction', 'y-')\">Y-</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Is Busy</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                          {{isbusy}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'isBusy', true)\">Yes</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeRobotStatus($event, 'isBusy', false)\">No</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editRobotForm.valid\">\n                  Save\n                </button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"askDelete($event)\">\n                  Delete\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/robots/robots.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RobotsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__robot_service__ = __webpack_require__("../../../../../src/app/robot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__space_service__ = __webpack_require__("../../../../../src/app/space.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RobotsComponent = (function () {
    function RobotsComponent(elementRef, robotService, spaceService, navigationService, fb) {
        var _this = this;
        this.elementRef = elementRef;
        this.robotService = robotService;
        this.spaceService = spaceService;
        this.navigationService = navigationService;
        this.maps = [];
        this.robots = [];
        this.limit = '10';
        this.page = 1;
        this.alert = {
            visible: false,
            message: ''
        };
        this.robot = {};
        this.isbusy = 'no';
        this.ishost = 'no';
        this.editComplete = false;
        this.deleteProcess = false;
        navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
        });
        navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
        });
        this.newRobotForm = fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9A-Za-z ]*')]],
            'positionx': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9\-]*')]],
            'positiony': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9\-]*')]]
        });
        this.editRobotForm = fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9A-Za-z ]*')]],
            'positionx': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9\-]*')]],
            'positiony': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9\-]*')]]
        });
    }
    RobotsComponent.prototype.ngOnInit = function () {
        this.navigationService.setNavigationStatus('maker');
        this.getMaps();
        this.getRobots();
    };
    RobotsComponent.prototype.ngAfterViewInit = function () {
    };
    RobotsComponent.prototype.setPage = function (p) {
        this.page = p;
    };
    RobotsComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.getRobots();
    };
    RobotsComponent.prototype.onClickLimit = function (event) {
        this.getRobots();
    };
    RobotsComponent.prototype.onChangeKeyword = function (event) {
        if (event.keyCode == 13) {
            if (event.srcElement.value != '') {
                this.keyword = event.srcElement.value;
            }
            else {
                this.keyword = '';
            }
            this.page = 1;
            this.getRobots();
        }
    };
    RobotsComponent.prototype.getMaps = function () {
        var _this = this;
        if (this.maps.length == 0) {
            this.spaceService.getAllMaps().subscribe(function (res) {
                _this.maps = res;
            });
        }
    };
    RobotsComponent.prototype.getRobots = function () {
        var _this = this;
        if (!this.keyword) {
            this.robotService.getRobots(parseInt(this.limit), this.page - 1).subscribe(function (res) {
                _this.robots = res.robots;
                _this.total = res.total;
                _this.page = res.page + 1;
                _this.pageFrom = (_this.page - 1) * parseInt(_this.limit) + 1;
                var pt = _this.pageFrom + parseInt(_this.limit) - 1;
                _this.pageTo = (pt > _this.total) ? _this.total : pt;
            });
        }
        else {
            this.robotService.getRobotsByKeyword(parseInt(this.limit), this.page - 1, this.keyword).subscribe(function (res) {
                _this.robots = res.robots;
                _this.keyword = res.keyword;
                _this.total = res.total;
                _this.page = res.page + 1;
                _this.pageFrom = (_this.page - 1) * parseInt(_this.limit) + 1;
                var pt = _this.pageFrom + parseInt(_this.limit) - 1;
                _this.pageTo = (pt > _this.total) ? _this.total : pt;
            });
        }
    };
    RobotsComponent.prototype.changeRobotStatus = function (event, property, value) {
        event.preventDefault();
        switch (property) {
            case 'map':
                for (var _i = 0, _a = this.maps; _i < _a.length; _i++) {
                    var m = _a[_i];
                    if (m._id.toString() == value) {
                        this.robot._map = m;
                    }
                }
                break;
            default:
                this.robot[property] = value;
                break;
        }
        this.isbusy = this.robot.isBusy ? 'yes' : 'no';
        this.ishost = this.robot.isHost ? 'yes' : 'no';
        this.newRobotForm.updateValueAndValidity();
        this.editRobotForm.updateValueAndValidity();
    };
    RobotsComponent.prototype.openCreateModal = function (event) {
        event.preventDefault();
        this.robot = {};
        this.ishost = 'no';
        this.isbusy = 'no';
        this.robot.name = '';
        this.robot.isBusy = false;
        this.robot.isHost = false;
        this.robot._map = this.maps[0];
        this.robot.position = { x: 0, y: 0 };
        this.robot.direction = 'x+';
        this.robotCreationModal.show();
    };
    RobotsComponent.prototype.createRobot = function (value) {
        var _this = this;
        var rb = {
            name: value.name,
            isHost: this.robot.isHost,
            isBusy: this.robot.isBusy,
            map: this.robot._map._id,
            positionX: value.positionx,
            positionY: value.positiony,
            direction: this.robot.direction
        };
        this.robotService.createRobot(rb).subscribe(function (res) {
            _this.getRobots();
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
        this.robotCreationModal.hide();
        this.newRobotForm.reset();
    };
    RobotsComponent.prototype.openEditModal = function (event, rId) {
        var _this = this;
        event.preventDefault();
        this.robotService.getRobotById(rId).subscribe(function (res) {
            _this.robot = res;
            _this.robotId = res._id;
            _this.editRobotForm.controls['name'].setValue(_this.robot.name, { onlySelf: true });
            _this.ishost = _this.robot.isHost ? 'yes' : 'no';
            _this.isbusy = _this.robot.isBusy ? 'yes' : 'no';
            _this.robotEditModal.show();
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    RobotsComponent.prototype.editRobot = function (value) {
        var _this = this;
        var rb = {
            name: value.name,
            isHost: this.robot.isHost,
            isBusy: this.robot.isBusy,
            map: this.robot._map._id,
            positionX: value.positionx,
            positionY: value.positiony,
            direction: this.robot.direction
        };
        this.robotService.saveRobot(this.robotId, rb).subscribe(function (res) {
            _this.getRobots();
            _this.editComplete = true;
            _this.robotEditModal.hide();
            setTimeout(function () {
                _this.editComplete = false;
            }, 3000);
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    RobotsComponent.prototype.askDelete = function (event) {
        event.preventDefault();
        this.robotEditModal.hide();
        this.deleteProcess = true;
    };
    RobotsComponent.prototype.deleteRobot = function (event) {
        var _this = this;
        event.preventDefault();
        this.robotService.deleteRobot(this.robotId).subscribe(function (res) {
            _this.deleteProcess = false;
            _this.getRobots();
            _this.robotEditModal.hide();
        }, function (err) {
            _this.deleteProcess = false;
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    return RobotsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('robotCreationModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], RobotsComponent.prototype, "robotCreationModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('robotEditModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
], RobotsComponent.prototype, "robotEditModal", void 0);
RobotsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-robots',
        template: __webpack_require__("../../../../../src/app/robots/robots.component.html"),
        styles: [__webpack_require__("../../../../../src/app/robots/robots.component.css"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__robot_service__["a" /* RobotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__robot_service__["a" /* RobotService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__space_service__["a" /* SpaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__space_service__["a" /* SpaceService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _g || Object])
], RobotsComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/robots.component.js.map

/***/ }),

/***/ "../../../../../src/app/space-edit/space-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/space-edit/space-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-nav-private [status]=\"status\"></app-nav-private>\n\n    <div style=\"position:fixed;right:10px;top:10px;z-index:1001;\">\n        <alert type=\"success\" dismissible=\"true\" *ngIf=\"editComplete\">\n            <strong>Space Updated!</strong> You successfully change space data.\n        </alert>\n        <alert type=\"warning\" *ngIf=\"deleteProcess\">\n            <strong>Warning!</strong> This space will be deleted permanently. Are you sure?\n            <button type=\"button\" class=\"btn btn-primary btn-xs\" style=\"margin-left:20px;\" (click)=\"deleteSpace($event)\">Yes</button>\n            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteProcess=false\">No</button>\n        </alert>\n    </div>\n\n    <div id=\"page-wrapper\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"page-header\">Space Details</h1>\n            </div>\n            <!-- /.col-lg-12 -->\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        Space Info<a class=\"btn btn-default btn-sm\" style=\"float:right;margin-top:-5px;\" [routerLink]=\"['/maker/spaces']\">Back To List</a>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <form role=\"form\" [formGroup]=\"spaceForm\" (ngSubmit)=\"saveSpace(spaceForm.value)\">\n                                    <div class=\"form-group\">\n                                        <label>Space ID</label>\n                                        <p class=\"form-control-static\">{{space?._id}}</p>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Created Date</label>\n                                        <p class=\"form-control-static\">{{space?.created | convertTimezone:[timeZone, timeFormat]}} (CET)</p>\n                                    </div>\n                                    <div class=\"form-group\" [ngClass]=\"{'has-error':!spaceForm.controls['name'].valid && spaceForm.controls['name'].touched}\">\n                                        <label>Space Name</label>\n                                        <input class=\"form-control\" placeholder=\"Enter space name\" [formControl]=\"spaceForm.controls['name']\">\n                                        <div *ngIf=\"spaceForm.controls['name'].hasError('required') && spaceForm.controls['name'].touched\" class=\"alert alert-danger\">\n                                            You must include a space name.\n                                        </div>\n                                        <div *ngIf=\"spaceForm.controls['name'].hasError('pattern') && spaceForm.controls['name'].touched\" class=\"alert alert-danger\">\n                                            Space name allows only a~z, A~Z, 0~9 and space.\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\" [ngClass]=\"{'has-error':!spaceForm.controls['description'].valid}\">\n                                        <label>Description</label>\n                                        <textarea class=\"form-control\" rows=\"3\" [formControl]=\"spaceForm.controls['description']\"></textarea>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Allow Search</label>\n                                        <div class=\"form-control-static\">\n                                            <div class=\"btn-group\" dropdown>\n                                                <button id=\"single-button1\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                                                    {{searchable}} <span class=\"caret\"></span>\n                                                </button>\n                                                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeSpaceStatus($event, 'searchable', true)\">Yes</a></li>\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeSpaceStatus($event, 'searchable', false)\">No</a></li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Show Public</label>\n                                        <div class=\"form-control-static\">\n                                            <div class=\"btn-group\" dropdown>\n                                                <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                                                    {{published}} <span class=\"caret\"></span>\n                                                </button>\n                                                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeSpaceStatus($event, 'published', true)\">Yes</a></li>\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeSpaceStatus($event, 'published', false)\">No</a></li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!spaceForm.valid\">\n                                          Save\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"askDelete($event)\">\n                                          Delete\n                                        </button>\n                                    </div>\n                                </form>\n                            </div>\n                            <div class=\"col-lg-6\">\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        Maps In This Space\n                    </div>\n                    <div class=\"panel-body\">\n                      <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group\" style=\"text-align: right;\">\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openCreateModal($event)\">\n                                      Create A Map\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-12\">\n                                <table width=\"100%\" class=\"table table-striped table-bordered table-hover\" id=\"maplistTable\">\n                                    <thead>\n                                        <tr>\n                                            <th>_Id</th>\n                                            <th>Name</th>\n                                            <th style=\"text-align:center;\">Allow Search</th>\n                                            <th>Security</th>\n                                            <th>Size</th>\n                                            <th>Last Modified</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let map of maps; let index=index; let odd=odd; let even=even; let last=last;\" [ngClass]=\"{odd: odd, even: even}\">\n                                            <td class=\"preCell\"><a [routerLink]=\"['/maker/map-detail', map._id]\">{{map._id}}</a></td>\n                                            <td>{{map.name}}</td>\n                                            <td style=\"text-align:center;\"><span [ngClass]=\"{'glyphicon':true, 'glyphicon-ok': map.searchable, 'glyphicon-remove': !map.searchable}\"><!--{{map.searchable}}--></span></td>\n                                            <td style=\"text-align:center;\">{{map.security}}</td>\n                                            <td>{{map.fileSize}}</td>\n                                            <td>{{map.modified | convertTimezone:[timeZone, timeFormat]}}</td>\n                                        </tr>\n                                        <tr *ngIf=\"maps?.length == 0\">\n                                            <td colspan=\"6\">\n                                                no map yet. let's start <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openCreateModal($event)\">Create A Map</button>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n\n<div class=\"modal fade\" bsModal #mapCreationModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">New Map</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"mapCreationModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form id=\"newspace\" role=\"form\" [formGroup]=\"newMapForm\" (ngSubmit)=\"createMap(newMapForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!newMapForm.controls['name'].valid && newMapForm.controls['name'].touched}\">\n                <label>Name</label>\n                <input class=\"form-control\" placeholder=\"Enter map name\" [formControl]=\"newMapForm.controls['name']\">\n                <div *ngIf=\"newMapForm.controls['name'].hasError('required') && newMapForm.controls['name'].touched\" class=\"alert alert-danger\">\n                  You must include a space name.\n                </div>\n                <div *ngIf=\"newMapForm.controls['name'].hasError('pattern') && newMapForm.controls['name'].touched\" class=\"alert alert-danger\">\n                  Map name allows only a~z, A~Z, 0~9 and space.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!newMapForm.valid\">\n                  Create\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/space-edit/space-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpaceEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__space_service__ = __webpack_require__("../../../../../src/app/space.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SpaceEditComponent = (function () {
    function SpaceEditComponent(route, location, navigationService, spaceService, fb) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.navigationService = navigationService;
        this.spaceService = spaceService;
        this.space = {};
        this.searchable = 'no';
        this.published = 'no';
        this.editComplete = false;
        this.deleteProcess = false;
        this.timeZone = '+01:00';
        this.timeFormat = 'DD-MM-YYYY HH:mm:ss';
        this.maps = [];
        navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
            console.log("[EasyInside - space edit] navigation message: " + _this.message);
        });
        navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
            console.log("[EasyInside - space edit] navigation status: " + _this.status);
        });
        this.spaceForm = fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9A-Za-z ]*')]],
            'description': ""
        });
        this.newMapForm = fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9A-Za-z ]*')]]
        });
    }
    SpaceEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.spaceService.getSpaceById(params['id']);
        })
            .subscribe(function (res) {
            _this.space = res;
            _this.spaceId = _this.space._id;
            _this.spaceForm.controls['name'].setValue(_this.space.name, { onlySelf: true });
            _this.searchable = _this.space.searchable ? 'yes' : 'no';
            _this.published = _this.space.published ? 'yes' : 'no';
            _this.getMaps();
        });
        this.navigationService.setNavigationStatus('maker');
    };
    SpaceEditComponent.prototype.getMaps = function () {
        var _this = this;
        this.spaceService.getMaps(this.spaceId).subscribe(function (res) {
            _this.maps = res;
        }, function (err) {
            console.log(err);
        });
    };
    SpaceEditComponent.prototype.changeSpaceStatus = function (event, property, value) {
        event.preventDefault();
        this.space[property] = value;
        this.searchable = this.space.searchable ? 'yes' : 'no';
        this.published = this.space.published ? 'yes' : 'no';
        this.spaceForm.updateValueAndValidity();
    };
    SpaceEditComponent.prototype.saveSpace = function (value) {
        var _this = this;
        var sp = {
            name: value.name,
            description: value.description,
            searchable: this.space.searchable,
            published: this.space.published
        };
        this.spaceService.saveSpace(this.spaceId, sp).subscribe(function (res) {
            _this.space = res;
            _this.spaceForm.controls['name'].setValue(_this.space.name, { onlySelf: true });
            _this.searchable = _this.space.searchable ? 'yes' : 'no';
            _this.published = _this.space.published ? 'yes' : 'no';
            _this.editComplete = true;
            setTimeout(function () {
                _this.editComplete = false;
            }, 3000);
        }, function (err) {
            console.log(err);
        });
    };
    SpaceEditComponent.prototype.askDelete = function (event) {
        event.preventDefault();
        this.deleteProcess = true;
    };
    SpaceEditComponent.prototype.deleteSpace = function (event) {
        var _this = this;
        event.preventDefault();
        this.spaceService.deleteSpace(this.spaceId).subscribe(function (res) {
            history.back();
        }, function (err) {
            console.log(err);
            _this.deleteProcess = false;
        });
    };
    SpaceEditComponent.prototype.openCreateModal = function (event) {
        event.preventDefault();
        this.mapCreationModal.show();
    };
    SpaceEditComponent.prototype.createMap = function (value) {
        var _this = this;
        value.spaceId = this.spaceId;
        this.spaceService.createMap(value).subscribe(function (res) {
            _this.getMaps();
        }, function (err) {
            console.log(err);
        });
        this.mapCreationModal.hide();
    };
    return SpaceEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mapCreationModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], SpaceEditComponent.prototype, "mapCreationModal", void 0);
SpaceEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-space-edit',
        template: __webpack_require__("../../../../../src/app/space-edit/space-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/space-edit/space-edit.component.css"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__navigation_service__["a" /* NavigationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__navigation_service__["a" /* NavigationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__space_service__["a" /* SpaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__space_service__["a" /* SpaceService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _f || Object])
], SpaceEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/space-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/space-search/space-search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-default navbar-fixed-top topnav\" role=\"navigation\">\n    <div class=\"container topnav\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand topnav\" [routerLink]=\"['/']\">Easy Inside</a>\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a [routerLink]=\"['/spaces']\">Search</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/document']\">Document</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/contact']\">Contact</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container -->\n</nav>\n\n<div id=\"wrapper\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h2 class=\"page-header\">Search</h2>\n    </div>\n  </div>\n  <div class=\"row search-form\">\n    <div class=\"col-lg-12\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" id=\"inputSearch\" [(ngModel)]=\"keyword\" (keypress)=\"onChangeKeyword($event)\" placeholder=\"Search for...\">\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-default\" type=\"button\" (click)=\"clickSearchButton($event)\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <ul class=\"nav nav-tabs\">\n        <li role=\"presentation\" [ngClass]=\"{'active':tabMode==='space','nav-item':true}\"><a class=\"nav-link\" (click)=\"setTab($event, 'space')\" href=\"#\">Spaces</a></li>\n        <li role=\"presentation\" [ngClass]=\"{'active':tabMode==='map','nav-item':true}\"><a class=\"nav-link\" (click)=\"setTab($event, 'map')\" href=\"#\">Maps</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row search-box\">\n    <div class=\"col-lg-12\">\n      <div class=\"col-lg-6 col-md-6 col-sm-6\">\n        <div class=\"form-group\">\n          <div class=\"btn-group\" dropdown>\n            <button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" dropdownToggle>\n              Show {{limit}} entries per page <span class=\"caret\"></span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"onClickLimit($event, '1')\">Show 1 entries per page</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"onClickLimit($event, '5')\">Show 5 entries per page</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"onClickLimit($event, '10')\">Show 10 entries per page</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"onClickLimit($event, '50')\">Show 50 entries per page</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-6 col-sm-6\">\n          <div class=\"sr-only\" aria-hidden=\"false\">Showing {{pageFrom}} to {{pageTo}} of {{total}} entries</div>\n          <pagination class=\"pagination-sm pagination-slim\" [(ngModel)]=\"page\" [totalItems]=\"total\" [itemsPerPage]=\"limit\" [maxSize]=\"5\" [boundaryLinks]=\"true\" [directionLinks]=\"false\" [rotate]=\"false\" (numPages)=\"numPages=$event\" (pageChanged)=\"pageChanged($event)\"></pagination>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <dl class=\"result map-result\" *ngIf=\"tabMode==='map'\">\n        <ng-template ngFor let-map [ngForOf]=\"maps\" let-index=\"index\" let-even=\"even\" let-odd=\"odd\" let-last=\"last\">\n          <dt [ngClass]=\"{odd: odd, even: even, last: last}\">\n            <a [routerLink]=\"['/map', map._id]\">{{map.name}}</a>\n            <i [ngClass]=\"{'fa':true, 'fa-lock':map.security!=='public', 'fa-unlock':map.security==='public'}\" aria-hidden=\"true\" title=\"{{(map.security==='public')?'This map is opened for everybody':'This map is protected by private rule'}}\"><span class=\"sr-only\">{{(map.security==='public')?'This map is opened for everybody':'This map is protected by private rule'}}</span></i>\n            <i class=\"fa fa-wifi\" *ngIf=\"map.allowRobot===true\" aria-hidden=\"true\" title=\"You can play with robots in ths map\"><span class=\"sr-only\">You can play with robots in ths map</span></i>\n            <i>in {{map._space.name}}</i>\n          </dt>\n          <dd [ngClass]=\"{odd: odd, even: even, last: last}\">\n            {{map._space.description}}\n          </dd>\n        </ng-template>\n      </dl>\n      <dl class=\"result space-result\" *ngIf=\"tabMode==='space'\">\n        <ng-template ngFor let-space [ngForOf]=\"spaces\" let-index=\"index\" let-even=\"even\" let-odd=\"odd\" let-last=\"last\">\n          <dt [ngClass]=\"{odd: odd, even: even, last: last}\">\n            {{space.name}}\n          </dt>\n          <dd [ngClass]=\"{odd: odd, even: even, last: last}\">\n            {{space.description}}\n            <ul>\n              <ng-template ngFor let-m [ngForOf]=\"space.maps\" let-index=\"index\" let-even=\"even\" let-odd=\"odd\" let-last=\"last\">\n                <li *ngIf=\"m.security!='private'\">\n                  <a [routerLink]=\"['/map', m._id]\"><i class=\"fa fa-map\" aria-hidden=\"true\"></i> {{m.name}}</a>\n                  <i [ngClass]=\"{'fa':true, 'fa-lock':m.security!='public', 'fa-unlock':m.security=='public'}\" aria-hidden=\"true\" title=\"{{(m.security=='public')?'This map is opened for everybody':'This map is protected by private rule'}}\"><span class=\"sr-only\">{{(m.security=='public')?'This map is opened for everybody':'This map is protected by private rule'}}</span></i>\n                  <i class=\"fa fa-wifi\" *ngIf=\"m.allowRobot===true\" title=\"You can play with robots in ths map\"><span class=\"sr-only\">You can play with robots in ths map</span></i>\n                </li>\n              </ng-template>\n            </ul>\n          </dd>\n        </ng-template>\n      </dl>\n    </div>\n  </div>\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-lg-6 col-md-6\">\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/space-search/space-search.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper {\n  margin-top: 51px;\n}\n.search-form {\n  margin-bottom: 30px;\n}\n.nav-tabs li a {\n  line-height: 1;\n}\n.search-box {\n  margin-top: 30px;\n}\n.result {\n  /*&.map-result {\n        dt {\n            border-top: 1px solid;\n            border-left: 1px solid;\n            border-right: 1px solid;\n            border-bottom: none;\n            border-top-left-radius: 5px;\n            border-top-right-radius: 5px;\n        }\n    }*/\n}\n.result dt {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 50px;\n  border-top: 1px dotted #aaa;\n  margin-top: 20px;\n  padding: 0 2%;\n  /*&:first-child {\n            border-top: 1px dotted #aaa;\n        }*/\n}\n.result dt i {\n  font-size: 14px;\n}\n.result dd {\n  font-size: 15px;\n  font-weight: 400;\n  padding: 0 2%;\n}\n.result dd:last-child {\n  border-bottom: 1px dotted #aaa;\n}\n.result dd ul {\n  list-style: none;\n  padding: 0;\n  margin-top: 10px;\n}\n.result dd ul li {\n  list-style: none;\n  margin-left: 2%;\n  line-height: 2;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/space-search/space-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpaceSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpaceSearchComponent = (function () {
    function SpaceSearchComponent(apiService) {
        this.apiService = apiService;
        this.spaces = [];
        this.maps = [];
        this.limit = '10';
        this.page = 1;
        this.numPages = 0;
        this.timeZone = '+01:00';
        this.timeFormat = 'DD-MM-YYYY HH:mm:ss';
        this.keyword = '';
    }
    SpaceSearchComponent.prototype.ngOnInit = function () {
        this.tabMode = 'space';
        this.getLists();
    };
    SpaceSearchComponent.prototype.getLists = function () {
        var _this = this;
        if (this.tabMode === 'map') {
            if (!this.keyword) {
                this.apiService.getSharedMaps(parseInt(this.limit), this.page - 1).subscribe(function (res) {
                    _this.maps = res.maps;
                    _this.total = res.total;
                    _this.page = res.page + 1;
                    _this.pageFrom = (_this.page - 1) * parseInt(_this.limit) + 1;
                    var pt = _this.pageFrom + parseInt(_this.limit) - 1;
                    _this.pageTo = (pt > _this.total) ? _this.total : pt;
                });
            }
            else {
                this.apiService.getSharedMapsByKeyword(parseInt(this.limit), this.page - 1, this.keyword).subscribe(function (res) {
                    _this.maps = res.maps;
                    _this.keyword = res.keyword;
                    _this.total = res.total;
                    _this.page = res.page + 1;
                    _this.pageFrom = (_this.page - 1) * parseInt(_this.limit) + 1;
                    var pt = _this.pageFrom + parseInt(_this.limit) - 1;
                    _this.pageTo = (pt > _this.total) ? _this.total : pt;
                });
            }
        }
        else {
            if (!this.keyword) {
                this.apiService.getSharedSpaces(parseInt(this.limit), this.page - 1).subscribe(function (res) {
                    _this.spaces = res.spaces;
                    _this.total = res.total;
                    _this.page = res.page + 1;
                    _this.pageFrom = (_this.page - 1) * parseInt(_this.limit) + 1;
                    var pt = _this.pageFrom + parseInt(_this.limit) - 1;
                    _this.pageTo = (pt > _this.total) ? _this.total : pt;
                });
            }
            else {
                this.apiService.getSharedSpacesByKeyword(parseInt(this.limit), this.page - 1, this.keyword).subscribe(function (res) {
                    _this.spaces = res.spaces;
                    _this.keyword = res.keyword;
                    _this.total = res.total;
                    _this.page = res.page + 1;
                    _this.pageFrom = (_this.page - 1) * parseInt(_this.limit) + 1;
                    var pt = _this.pageFrom + parseInt(_this.limit) - 1;
                    _this.pageTo = (pt > _this.total) ? _this.total : pt;
                });
            }
        }
    };
    SpaceSearchComponent.prototype.setTab = function (event, tab) {
        event.preventDefault();
        this.tabMode = tab;
        this.getLists();
    };
    SpaceSearchComponent.prototype.setPage = function (p) {
        this.page = p;
    };
    SpaceSearchComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.getLists();
    };
    SpaceSearchComponent.prototype.onClickLimit = function (event, lm) {
        event.preventDefault();
        this.limit = lm;
        this.getLists();
    };
    SpaceSearchComponent.prototype.onChangeKeyword = function (event) {
        if (event.keyCode == 13) {
            /*if (event.srcElement.value != '') {
              this.keyword = event.srcElement.value;
            } else {
              this.keyword = '';
            }*/
            if (this.keyword != '') {
                this.page = 1;
                this.getLists();
            }
        }
    };
    SpaceSearchComponent.prototype.clickSearchButton = function (event) {
        event.preventDefault();
        if (this.keyword != '') {
            this.page = 1;
            this.getLists();
        }
    };
    return SpaceSearchComponent;
}());
SpaceSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-space-search',
        template: __webpack_require__("../../../../../src/app/space-search/space-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/space-search/space-search.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], SpaceSearchComponent);

var _a;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/space-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/space.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpaceService = (function () {
    function SpaceService(http) {
        this.http = http;
    }
    SpaceService.prototype.getSpaces = function () {
        return this.http.get('/space/spaces').map(function (res) { return res.json(); });
    };
    SpaceService.prototype.createSpace = function (space) {
        return this.http.post('/space/create', space)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    SpaceService.prototype.saveSpace = function (id, space) {
        return this.http.put('/space/' + id, space)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    SpaceService.prototype.deleteSpace = function (id) {
        return this.http.delete('/space/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    SpaceService.prototype.getSpaceById = function (id) {
        return this.http.get('/space/space/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    /**
     * maps
     */
    SpaceService.prototype.getMaps = function (spaceId) {
        return this.http.get('/space/maps/' + spaceId).map(function (res) { return res.json(); });
    };
    SpaceService.prototype.createMap = function (map) {
        return this.http.post('/space/map', map)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    SpaceService.prototype.saveMap = function (id, map) {
        return this.http.put('/space/map/' + id, map)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    SpaceService.prototype.saveMapFile = function (id, file) {
        return this.http.post('/space/map-file/' + id, file)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    SpaceService.prototype.saveOptFile = function (id, file) {
        return this.http.post('/space/opt-file/' + id, file)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    SpaceService.prototype.saveDeskFile = function (id, file) {
        return this.http.post('/space/desk-file/' + id, file)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    SpaceService.prototype.deleteMap = function (id) {
        return this.http.delete('/space/map/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    SpaceService.prototype.getMapById = function (id) {
        return this.http.get('/space/map/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    SpaceService.prototype.getRecentMaps = function () {
        return this.http.get('/space/recent-maps')
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    SpaceService.prototype.getAllMaps = function () {
        return this.http.get('/space/allmaps')
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    SpaceService.prototype.getAllMapsCount = function () {
        return this.http.get('/space/allmapscount')
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    return SpaceService;
}());
SpaceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SpaceService);

var _a;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/space.service.js.map

/***/ }),

/***/ "../../../../../src/app/spaces/spaces.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#spacelistTable .glyphicon-remove {\n    color: #AE4442;\n}\n\n#spacelistTable .glyphicon-ok {\n    color: #3C763D;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spaces/spaces.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-nav-private [status]=\"status\"></app-nav-private>\n\n    <div style=\"position:fixed;right:10px;top:10px;z-index:1001;\">\n        <alert type=\"danger\" dismissible=\"true\" *ngIf=\"alert.visible\" (onClose)=\"onCloseAlert($event)\">\n            <strong>Cannot create a space!</strong> {{alert.message}}\n        </alert>\n    </div>\n\n    <div id=\"page-wrapper\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"page-header\">Spaces</h1>\n            </div>\n            <!-- /.col-lg-12 -->\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        DataTables Advanced Tables\n                    </div>\n                    <!-- /.panel-heading -->\n                    <div class=\"panel-body\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group\" style=\"text-align: right;\">\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openCreateModal($event)\">\n                                      Create A Space\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-12\">\n                                <table width=\"100%\" class=\"table table-striped table-bordered table-hover\" id=\"spacelistTable\">\n                                    <thead>\n                                        <tr>\n                                            <th>_Id</th>\n                                            <th>Name</th>\n                                            <th style=\"text-align:center;\">Allow Search</th>\n                                            <th style=\"text-align:center;\">Published</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let space of spaces; let index=index; let odd=odd; let even=even; let last=last;\" [ngClass]=\"{odd: odd, even: even}\">\n                                            <td class=\"preCell\"><a [routerLink]=\"['/maker/spacedetails', space._id]\">{{space._id}}</a></td>\n                                            <td>{{space.name}}</td>\n                                            <td style=\"text-align:center;\"><span [ngClass]=\"{'glyphicon':true, 'glyphicon-ok': space.searchable, 'glyphicon-remove': !space.searchable}\"><!--{{space.searchable}}--></span></td>\n                                            <td style=\"text-align:center;\"><span [ngClass]=\"{'glyphicon':true, 'glyphicon-ok': space.published, 'glyphicon-remove': !space.published}\"><!--{{space.published}}--></span></td>\n                                        </tr>\n                                        <tr *ngIf=\"spaces?.length == 0\">\n                                            <td colspan=\"4\">\n                                                no space yet. let's start <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openCreateModal($event)\">Create A Space</button>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" bsModal #spaceCreationModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">New Space</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"spaceCreationModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form id=\"newspace\" role=\"form\" [formGroup]=\"newSpaceForm\" (ngSubmit)=\"createSpace(newSpaceForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!newSpaceForm.controls['name'].valid && newSpaceForm.controls['name'].touched}\">\n                <label>Name</label>\n                <input class=\"form-control\" placeholder=\"Enter space name\" [formControl]=\"newSpaceForm.controls['name']\">\n                <div *ngIf=\"newSpaceForm.controls['name'].hasError('required') && newSpaceForm.controls['name'].touched\" class=\"alert alert-danger\">\n                  You must include a space name.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!newSpaceForm.controls['description'].valid}\">\n                <label>Description</label>\n                <textarea class=\"form-control\" rows=\"3\" [formControl]=\"newSpaceForm.controls['description']\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!newSpaceForm.valid\">\n                  Create\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/spaces/spaces.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpacesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__space_service__ = __webpack_require__("../../../../../src/app/space.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpacesComponent = (function () {
    function SpacesComponent(spaceService, navigationService, fb) {
        var _this = this;
        this.spaceService = spaceService;
        this.navigationService = navigationService;
        this.timeZone = '+01:00';
        this.timeFormat = 'DD-MM-YYYY HH:mm:ss';
        this.spaces = [];
        this.alert = {
            visible: false,
            message: ''
        };
        navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
            console.log("[EasyInside - account] navigation message: " + _this.message);
        });
        navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
            console.log("[EasyInside - account] navigation status: " + _this.status);
        });
        this.newSpaceForm = fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9A-Za-z ]*')]],
            'description': ""
        });
    }
    SpacesComponent.prototype.ngOnInit = function () {
        this.getSpaces();
        this.navigationService.setNavigationStatus('maker');
    };
    SpacesComponent.prototype.getSpaces = function () {
        var _this = this;
        this.spaceService.getSpaces().subscribe(function (spaces) {
            _this.spaces = spaces;
        });
    };
    SpacesComponent.prototype.openCreateModal = function (event) {
        event.preventDefault();
        this.spaceCreationModal.show();
    };
    SpacesComponent.prototype.createSpace = function (value) {
        var _this = this;
        this.spaceService.createSpace(value).subscribe(function (res) {
            _this.getSpaces();
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
        this.spaceCreationModal.hide();
    };
    SpacesComponent.prototype.onCloseAlert = function (event) {
        this.alert.visible = false;
    };
    return SpacesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('spaceCreationModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], SpacesComponent.prototype, "spaceCreationModal", void 0);
SpacesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-spaces',
        template: __webpack_require__("../../../../../src/app/spaces/spaces.component.html"),
        styles: [__webpack_require__("../../../../../src/app/spaces/spaces.component.css"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__space_service__["a" /* SpaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__space_service__["a" /* SpaceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__navigation_service__["a" /* NavigationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object])
], SpacesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/spaces.component.js.map

/***/ }),

/***/ "../../../../../src/app/textures.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TexturesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TexturesService = (function () {
    function TexturesService(http) {
        this.http = http;
    }
    TexturesService.prototype.getTextures = function (limit, page) {
        return this.http.get('/texture/list/' + limit.toString() + '/' + page.toString()).map(function (res) { return res.json(); });
    };
    TexturesService.prototype.getTexturesByKeyword = function (limit, page, keyword) {
        return this.http.get('/texture/search/' + limit.toString() + '/' + page.toString() + '/' + keyword).map(function (res) { return res.json(); });
    };
    TexturesService.prototype.getAvailableTextures = function () {
        return this.http.get('/texture/availables').map(function (res) { return res.json(); });
    };
    TexturesService.prototype.createTexture = function (texture) {
        return this.http.post('/texture/create', texture)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    TexturesService.prototype.saveTexture = function (id, texture) {
        return this.http.put('/texture/' + id, texture)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    TexturesService.prototype.deleteTexture = function (id) {
        return this.http.delete('/texture/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    TexturesService.prototype.getTextureById = function (id) {
        return this.http.get('/texture/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err.json().error || 'Server error'); });
    };
    return TexturesService;
}());
TexturesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TexturesService);

var _a;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/textures.service.js.map

/***/ }),

/***/ "../../../../../src/app/textures/textures.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/textures/textures.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-nav-private [status]=\"status\"></app-nav-private>\n\n    <div style=\"position:fixed;right:10px;top:10px;z-index:1001;\">\n        <alert type=\"success\" dismissible=\"true\" *ngIf=\"editComplete\">\n            <strong>Updated!</strong> You successfully change texture data.\n        </alert>\n        <alert type=\"danger\" dismissible=\"true\" *ngIf=\"alert.visible\" (onClose)=\"onCloseAlert($event)\">\n            <strong>Error!</strong> {{alert.message}}\n        </alert>\n         <alert type=\"warning\" *ngIf=\"deleteProcess\">\n            <strong>Warning!</strong> This texture will be deleted permanently. Are you sure?\n            <button type=\"button\" class=\"btn btn-primary btn-xs\" style=\"margin-left:20px;\" (click)=\"deleteTexture($event)\">Yes</button>\n            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteProcess=false\">No</button>\n        </alert>\n    </div>\n\n    <div id=\"page-wrapper\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"page-header\">Textures</h1>\n            </div>\n            <!-- /.col-lg-12 -->\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        DataTables Advanced Tables\n                    </div>\n                    <!-- /.panel-heading -->\n                    <div class=\"panel-body\">\n                      <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group\" style=\"text-align: right;\">\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openCreateModal($event)\">\n                                      Create A Texture\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group\">\n                                    <label style=\"display:block;\">Show entries</label>\n                                    <div class=\"btn-group\">\n                                        <label class=\"btn btn-default\" [(ngModel)]=\"limit\" btnRadio=\"5\" (click)=\"onClickLimit($event)\" uncheckable>5</label>\n                                        <label class=\"btn btn-default\" [(ngModel)]=\"limit\" btnRadio=\"10\" (click)=\"onClickLimit($event)\"  uncheckable>10</label>\n                                        <label class=\"btn btn-default\" [(ngModel)]=\"limit\" btnRadio=\"50\" (click)=\"onClickLimit($event)\"  uncheckable>50</label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\" for=\"inputSearch\">Search</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"inputSearch\" (keypress)=\"onChangeKeyword($event)\">\n                                </div>\n                            </div>\n                        </div>\n                        <table width=\"100%\" class=\"table table-striped table-bordered table-hover\" id=\"texturelistTable\">\n                            <thead>\n                                <tr>\n                                    <th>_Id</th>\n                                    <th>Name</th>\n                                    <th>Color</th>\n                                    <th>Map</th>\n                                    <th>Shading</th>\n                                    <th>Published</th>\n                                    <th>Last Modified</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let t of textures; let index=index; let odd=odd; let even=even; let last=last;\" [ngClass]=\"{odd: odd, even: even}\">\n                                    <td class=\"preCell\"><a href=\"#\" (click)=\"openEditModal($event, t._id)\">{{t._id}}</a></td>\n                                    <td>{{t.name}}</td>\n                                    <td><i class=\"fa fa-square\" [ngStyle]=\"{'color': t.color | arithmeticRGBtoHEX}\"></i></td>\n                                    <td>{{t.map}}</td>\n                                    <td>{{t.shading}}</td>\n                                    <td style=\"text-align:center;\"><span [ngClass]=\"{'glyphicon':true, 'glyphicon-ok': t.published, 'glyphicon-remove': !t.published}\"><!--{{t.published}}--></span></td>\n                                    <td>{{t.modified | convertTimezone:[timeZone, timeFormat]}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <div>Showing {{pageFrom}} to {{pageTo}} of {{total}} entries</div>\n                        <pagination [(ngModel)]=\"page\" [totalItems]=\"total\" [itemsPerPage]=\"limit\" [maxSize]=\"5\" [boundaryLinks]=\"true\" [rotate]=\"false\" (pageChanged)=\"pageChanged($event)\"></pagination>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"modal fade\" bsModal #textureCreationModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">New Texture</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"textureCreationModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form id=\"newtexture\" role=\"form\" [formGroup]=\"newTextureForm\" (ngSubmit)=\"createTexture(newTextureForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!newTextureForm.controls['name'].valid && newTextureForm.controls['name'].touched}\">\n                <label>Name</label>\n                <input class=\"form-control\" placeholder=\"Enter texture name\" [formControl]=\"newTextureForm.controls['name']\">\n                <div *ngIf=\"newTextureForm.controls['name'].hasError('required') && newTextureForm.controls['name'].touched\" class=\"alert alert-danger\">\n                  You must include a texture name.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!newTextureForm.controls['shading'].valid}\">\n                <label>Shading</label>\n                <input class=\"form-control\" placeholder=\"THREE.FlatShading\" [formControl]=\"newTextureForm.controls['shading']\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!newTextureForm.controls['color'].valid}\">\n                <label>Color</label>\n                <input class=\"form-control\" placeholder=\"0.21, 0.15, 0.09\" [formControl]=\"newTextureForm.controls['color']\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!newTextureForm.controls['map'].valid}\">\n                <label>Map</label>\n                <input class=\"form-control\" placeholder=\"Image file name\" [formControl]=\"newTextureForm.controls['map']\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!newTextureForm.controls['opacity'].valid}\">\n                <label>Opacity</label>\n                <input class=\"form-control\" type=\"number\" step=\"0.1\" min=\"0\" max=\"1\" placeholder=\"1\" [formControl]=\"newTextureForm.controls['opacity']\">\n                <div *ngIf=\"newTextureForm.controls['opacity'].hasError('min') || newTextureForm.controls['opacity'].hasError('max')\" class=\"alert alert-danger\">\n                  Opacity must be within 0 and 1.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!newTextureForm.valid\">\n                  Create\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #textureEditModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Edit Texture</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"textureEditModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form id=\"edittexture\" role=\"form\" [formGroup]=\"editTextureForm\" (ngSubmit)=\"editTexture(editTextureForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                  <label>Texture ID</label>\n                  <p class=\"form-control-static\">{{texture?._id}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!editTextureForm.controls['name'].valid && editTextureForm.controls['name'].touched}\">\n                <label>Name</label>\n                <input class=\"form-control\" placeholder=\"Enter texture name\" [formControl]=\"editTextureForm.controls['name']\">\n                <div *ngIf=\"editTextureForm.controls['name'].hasError('required') && editTextureForm.controls['name'].touched\" class=\"alert alert-danger\">\n                  You must include a texture name.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!editTextureForm.controls['shading'].valid}\">\n                <label>Shading</label>\n                <input class=\"form-control\" placeholder=\"THREE.FlatShading\" [formControl]=\"editTextureForm.controls['shading']\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!editTextureForm.controls['color'].valid}\">\n                <label>Color</label>\n                <input class=\"form-control\" placeholder=\"0.21, 0.15, 0.09\" [formControl]=\"editTextureForm.controls['color']\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!editTextureForm.controls['map'].valid}\">\n                <label>Map</label>\n                <input class=\"form-control\" placeholder=\"Image file name\" [formControl]=\"editTextureForm.controls['map']\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!editTextureForm.controls['opacity'].valid}\">\n                <label>Opacity</label>\n                <input class=\"form-control\" type=\"number\" step=\"0.1\" min=\"0\" max=\"1\" placeholder=\"1\" [formControl]=\"editTextureForm.controls['opacity']\">\n                <div *ngIf=\"editTextureForm.controls['opacity'].hasError('min') || editTextureForm.controls['opacity'].hasError('max')\" class=\"alert alert-danger\">\n                  Opacity must be within 0 and 1.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label>Show Public</label>\n              <div class=\"form-control-static\">\n                  <div class=\"btn-group\" dropdown>\n                      <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"text-transform:capitalize\" dropdownToggle>\n                          {{published}} <span class=\"caret\"></span>\n                      </button>\n                      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeTextureStatus($event, 'published', true)\">Yes</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"text-transform:capitalize\" href=\"#\" (click)=\"changeTextureStatus($event, 'published', false)\">No</a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!editTextureForm.valid\">\n                  Save\n                </button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"askDelete($event)\">\n                  Delete\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/textures/textures.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TexturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textures_service__ = __webpack_require__("../../../../../src/app/textures.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TexturesComponent = (function () {
    function TexturesComponent(elementRef, texturesService, navigationService, fb) {
        var _this = this;
        this.elementRef = elementRef;
        this.texturesService = texturesService;
        this.navigationService = navigationService;
        this.textures = [];
        this.limit = '10';
        this.page = 1;
        this.timeZone = '+01:00';
        this.timeFormat = 'DD-MM-YYYY HH:mm:ss';
        this.alert = {
            visible: false,
            message: ''
        };
        this.texture = {};
        this.published = 'no';
        this.editComplete = false;
        this.deleteProcess = false;
        navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
            console.log("[EasyInside - account] navigation message: " + _this.message);
        });
        navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
            console.log("[EasyInside - account] navigation status: " + _this.status);
        });
        this.newTextureForm = fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern('[0-9A-Za-z ]*')]],
            'shading': ["THREE.FlatShading", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            'color': "0.5,0.5,0.5",
            'map': "",
            'opacity': [1, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(/^\d+(\.\d{1})?$/), __WEBPACK_IMPORTED_MODULE_4_ng2_validation__["CustomValidators"].min(0), __WEBPACK_IMPORTED_MODULE_4_ng2_validation__["CustomValidators"].max(1)]]
        });
        this.editTextureForm = fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern('[0-9A-Za-z ]*')]],
            'shading': ["THREE.FlatShading", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            'color': "0.5,0.5,0.5",
            'map': "",
            'opacity': [1, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(/^\d+(\.\d{1})?$/), __WEBPACK_IMPORTED_MODULE_4_ng2_validation__["CustomValidators"].min(0), __WEBPACK_IMPORTED_MODULE_4_ng2_validation__["CustomValidators"].max(1)]]
        });
    }
    TexturesComponent.prototype.ngOnInit = function () {
        this.navigationService.setNavigationStatus('maker');
        this.getTextures();
    };
    TexturesComponent.prototype.ngAfterViewInit = function () {
    };
    TexturesComponent.prototype.setPage = function (p) {
        this.page = p;
    };
    TexturesComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.getTextures();
    };
    TexturesComponent.prototype.onClickLimit = function (event) {
        this.getTextures();
    };
    TexturesComponent.prototype.onChangeKeyword = function (event) {
        if (event.keyCode == 13) {
            if (event.srcElement.value != '') {
                this.keyword = event.srcElement.value;
            }
            else {
                this.keyword = '';
            }
            this.page = 1;
            this.getTextures();
        }
    };
    TexturesComponent.prototype.getTextures = function () {
        var _this = this;
        if (!this.keyword) {
            this.texturesService.getTextures(parseInt(this.limit), this.page - 1).subscribe(function (res) {
                _this.textures = res.textures;
                _this.total = res.total;
                _this.page = res.page + 1;
                _this.pageFrom = (_this.page - 1) * parseInt(_this.limit) + 1;
                var pt = _this.pageFrom + parseInt(_this.limit) - 1;
                _this.pageTo = (pt > _this.total) ? _this.total : pt;
            });
        }
        else {
            this.texturesService.getTexturesByKeyword(parseInt(this.limit), this.page - 1, this.keyword).subscribe(function (res) {
                _this.textures = res.textures;
                _this.keyword = res.keyword;
                _this.total = res.total;
                _this.page = res.page + 1;
                _this.pageFrom = (_this.page - 1) * parseInt(_this.limit) + 1;
                var pt = _this.pageFrom + parseInt(_this.limit) - 1;
                _this.pageTo = (pt > _this.total) ? _this.total : pt;
            });
        }
    };
    TexturesComponent.prototype.openCreateModal = function (event) {
        event.preventDefault();
        this.textureCreationModal.show();
    };
    TexturesComponent.prototype.createTexture = function (value) {
        var _this = this;
        this.texturesService.createTexture(value).subscribe(function (res) {
            _this.getTextures();
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
        this.textureCreationModal.hide();
        this.newTextureForm.reset();
    };
    TexturesComponent.prototype.openEditModal = function (event, tId) {
        var _this = this;
        event.preventDefault();
        this.texturesService.getTextureById(tId).subscribe(function (res) {
            _this.texture = res;
            _this.textureId = res._id;
            _this.editTextureForm.controls['name'].setValue(_this.texture.name, { onlySelf: true });
            _this.editTextureForm.controls['shading'].setValue(_this.texture.shading, { onlySelf: true });
            _this.editTextureForm.controls['color'].setValue(_this.texture.color, { onlySelf: true });
            _this.editTextureForm.controls['map'].setValue(_this.texture.map, { onlySelf: true });
            _this.editTextureForm.controls['opacity'].setValue(_this.texture.opacity, { onlySelf: true });
            _this.published = _this.texture.published ? 'yes' : 'no';
            _this.textureEditModal.show();
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    TexturesComponent.prototype.changeTextureStatus = function (event, property, value) {
        event.preventDefault();
        this.texture[property] = value;
        this.published = this.texture.published ? 'yes' : 'no';
        this.editTextureForm.updateValueAndValidity();
    };
    TexturesComponent.prototype.editTexture = function (value) {
        var _this = this;
        var tt = {
            name: value.name,
            shading: value.shading,
            color: value.color,
            map: value.map,
            opacity: value.opacity,
            published: this.texture.published
        };
        this.texturesService.saveTexture(this.textureId, tt).subscribe(function (res) {
            _this.getTextures();
            _this.editComplete = true;
            _this.textureEditModal.hide();
            setTimeout(function () {
                _this.editComplete = false;
            }, 3000);
        }, function (err) {
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    TexturesComponent.prototype.askDelete = function (event) {
        event.preventDefault();
        this.textureEditModal.hide();
        this.deleteProcess = true;
    };
    TexturesComponent.prototype.deleteTexture = function (event) {
        var _this = this;
        event.preventDefault();
        this.texturesService.deleteTexture(this.textureId).subscribe(function (res) {
            _this.deleteProcess = false;
            _this.getTextures();
            _this.textureEditModal.hide();
        }, function (err) {
            _this.deleteProcess = false;
            _this.alert.visible = true;
            _this.alert.message = err;
        });
    };
    return TexturesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('textureCreationModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], TexturesComponent.prototype, "textureCreationModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('textureEditModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
], TexturesComponent.prototype, "textureEditModal", void 0);
TexturesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-textures',
        template: __webpack_require__("../../../../../src/app/textures/textures.component.html"),
        styles: [__webpack_require__("../../../../../src/app/textures/textures.component.css"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__navigation_service__["a" /* NavigationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__textures_service__["a" /* TexturesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__textures_service__["a" /* TexturesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__navigation_service__["a" /* NavigationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _f || Object])
], TexturesComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/textures.component.js.map

/***/ }),

/***/ "../../../../../src/app/userlist/userlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preCell {\n    white-space: normal;\n    word-wrap: break-word;\n    word-break: break-all;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userlist/userlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-nav-private [status]=\"status\"></app-nav-private>\n\n    <div id=\"page-wrapper\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"page-header\">User List</h1>\n            </div>\n            <!-- /.col-lg-12 -->\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        DataTables Advanced Tables\n                    </div>\n                    <!-- /.panel-heading -->\n                    <div class=\"panel-body\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group\">\n                                    <label>Show entries</label>\n                                    <div class=\"btn-group\">\n                                        <label class=\"btn btn-default\" [(ngModel)]=\"limit\" btnRadio=\"5\" (click)=\"onClickLimit($event)\" uncheckable>5</label>\n                                        <label class=\"btn btn-default\" [(ngModel)]=\"limit\" btnRadio=\"10\" (click)=\"onClickLimit($event)\"  uncheckable>10</label>\n                                        <label class=\"btn btn-default\" [(ngModel)]=\"limit\" btnRadio=\"50\" (click)=\"onClickLimit($event)\"  uncheckable>50</label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\" for=\"inputSearch\">Search</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"inputSearch\" (keypress)=\"onChangeKeyword($event)\">\n                                </div>\n                            </div>\n                        </div>\n                        <table width=\"100%\" class=\"table table-striped table-bordered table-hover\" id=\"userlistTable\">\n                            <thead>\n                                <tr>\n                                    <th>_Id</th>\n                                    <th>Name</th>\n                                    <th>Provider</th>\n                                    <th>OAuth ID</th>\n                                    <th>Join At(CET)</th>\n                                    <th>User Group</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let account of accounts; let index=index; let odd=odd; let even=even; let last=last;\" [ngClass]=\"{odd: odd, even: even}\">\n                                    <td class=\"preCell\"><a href=\"/admin/userdetails/{{account._id}}\">{{account._id}}</a></td>\n                                    <td>{{account.name}}</td>\n                                    <td>{{account.provider}}</td>\n                                    <td class=\"preCell\">{{account.oauthID}}</td>\n                                    <td>{{account.created | convertTimezone:[timeZone, timeFormat]}}</td>\n                                    <td>{{account.userGroup}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <div>Showing {{pageFrom}} to {{pageTo}} of {{total}} entries</div>\n                        <pagination [(ngModel)]=\"page\" [totalItems]=\"total\" [itemsPerPage]=\"limit\" [maxSize]=\"5\" [boundaryLinks]=\"true\" [rotate]=\"false\" (pageChanged)=\"pageChanged($event)\"></pagination>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/userlist/userlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_service__ = __webpack_require__("../../../../../src/app/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserlistComponent = (function () {
    function UserlistComponent(elementRef, accountService, navigationService) {
        var _this = this;
        this.elementRef = elementRef;
        this.accountService = accountService;
        this.navigationService = navigationService;
        this.accounts = [];
        this.limit = '10';
        this.page = 1;
        this.timeZone = '+01:00';
        this.timeFormat = 'DD-MM-YYYY HH:mm:ss';
        navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
            console.log("[EasyInside - account] navigation message: " + _this.message);
        });
        navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
            console.log("[EasyInside - account] navigation status: " + _this.status);
        });
        /*route.params.subscribe(params => {
          this.page = +params['page'];
          this.limit = +params['limit'];
        });*/
    }
    UserlistComponent.prototype.ngOnInit = function () {
        this.navigationService.setNavigationStatus('admin');
        this.getAccounts();
        /*this.route.params
          .switchMap((params: Params) =>
            this.accountService.getAcconts(+params['limit'],(+params['page']-1))
          )
          .subscribe(req => {
            this.accounts = req.users;
            this.page = parseInt(req.page) + 1;
            this.limit = req.limit;
            this.total = req.total;
          });*/
    };
    UserlistComponent.prototype.ngAfterViewInit = function () {
    };
    UserlistComponent.prototype.setPage = function (p) {
        this.page = p;
    };
    UserlistComponent.prototype.pageChanged = function (event) {
        //this.accountService.getAcconts(this.limit, event.page - 1).subscribe(res => this.accounts = res.users);
        this.page = event.page;
        this.getAccounts();
    };
    UserlistComponent.prototype.onClickLimit = function (event) {
        this.getAccounts();
    };
    UserlistComponent.prototype.onChangeKeyword = function (event) {
        if (event.keyCode == 13) {
            if (event.srcElement.value != '') {
                this.keyword = event.srcElement.value;
            }
            else {
                this.keyword = '';
            }
            this.page = 1;
            this.getAccounts();
        }
    };
    UserlistComponent.prototype.getAccounts = function () {
        var _this = this;
        if (!this.keyword) {
            this.accountService.getAcconts(parseInt(this.limit), this.page - 1).subscribe(function (res) {
                _this.accounts = res.users;
                _this.total = res.total;
                _this.page = res.page + 1;
                _this.pageFrom = (_this.page - 1) * parseInt(_this.limit) + 1;
                var pt = _this.pageFrom + parseInt(_this.limit) - 1;
                _this.pageTo = (pt > _this.total) ? _this.total : pt;
            });
        }
        else {
            this.accountService.getAccountsByKeyword(parseInt(this.limit), this.page - 1, this.keyword).subscribe(function (res) {
                _this.accounts = res.users;
                _this.keyword = res.keyword;
                _this.total = res.total;
                _this.page = res.page + 1;
                _this.pageFrom = (_this.page - 1) * parseInt(_this.limit) + 1;
                var pt = _this.pageFrom + parseInt(_this.limit) - 1;
                _this.pageTo = (pt > _this.total) ? _this.total : pt;
            });
        }
    };
    return UserlistComponent;
}());
UserlistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userlist',
        template: __webpack_require__("../../../../../src/app/userlist/userlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userlist/userlist.component.css"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__navigation_service__["a" /* NavigationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__navigation_service__["a" /* NavigationService */]) === "function" && _c || Object])
], UserlistComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/userlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/userview/userview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userview/userview.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n    <app-nav-private [status]=\"status\"></app-nav-private>\n\n    <div style=\"position:fixed;right:10px;top:10px;z-index:1001;\">\n        <alert type=\"success\" dismissible=\"true\" *ngIf=\"editComplete\">\n            <strong>Data Updated!</strong> You successfully change user's data.\n        </alert>\n    </div>\n\n    <div id=\"page-wrapper\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"page-header\">User Details</h1>\n            </div>\n            <!-- /.col-lg-12 -->\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        Basic Profile<a class=\"btn btn-default btn-sm\" style=\"float:right;margin-top:-5px;\" href=\"javascript:history.back();\">Back To List</a>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <form role=\"form\">\n                                    <div class=\"form-group\">\n                                        <label>Account Provider</label>\n                                        <p class=\"form-control-static\">{{account?.provider}}</p>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>OAuth ID</label>\n                                        <p class=\"form-control-static\">{{account?.oauthID}}</p>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>User Name</label>\n                                        <p class=\"form-control-static\">{{account?.name}}</p>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Join Date</label>\n                                        <p class=\"form-control-static\">{{account?.created | convertTimezone:[timeZone, timeFormat]}} (CET)</p>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Account Type</label>\n                                        <div class=\"form-control-static\">\n                                            <div class=\"btn-group\" dropdown>\n                                                <button id=\"single-button1\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\n                                                    {{account?.grade}} <span class=\"caret\"></span>\n                                                </button>\n                                                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeUserStauts($event, 'grade', 'silent')\">Silent</a></li>\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeUserStauts($event, 'grade', 'rustling')\">Rustling</a></li>\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeUserStauts($event, 'grade', 'stomping')\">Stomping</a></li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>User Group</label>\n                                        <div class=\"form-control-static\">\n                                            <div class=\"btn-group\" dropdown>\n                                                <button id=\"single-button2\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\n                                                    {{account?.userGroup}} <span class=\"caret\"></span>\n                                                </button>\n                                                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeUserStauts($event, 'usergroup', 'administrators')\">Administrators</a></li>\n                                                    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"changeUserStauts($event, 'usergroup', 'users')\">Users</a></li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Actions</label>\n                                        <p class=\"form-control-static\">\n                                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteModal.show()\">Delete This Account</button>\n                                        </p>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Alert</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            This account will be deleted permanently.\n            Are you sure?\n            <button type=\"button\" class=\"btn btn-danger btn-block\" style=\"margin-top:10px;\" (click)=\"deleteAccount($event)\">Yes, Delete This Account</button>\n        </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/userview/userview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_service__ = __webpack_require__("../../../../../src/app/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_service__ = __webpack_require__("../../../../../src/app/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserviewComponent = (function () {
    function UserviewComponent(accountService, route, location, navigationService) {
        var _this = this;
        this.accountService = accountService;
        this.route = route;
        this.location = location;
        this.navigationService = navigationService;
        this.editComplete = false;
        this.timeZone = '+01:00';
        this.timeFormat = 'DD-MM-YYYY HH:mm:ss';
        navigationService.navMessage$.subscribe(function (message) {
            _this.message = message;
            console.log("[EasyInside - account] navigation message: " + _this.message);
        });
        navigationService.navStatus$.subscribe(function (status) {
            _this.status = status;
            console.log("[EasyInside - account] navigation status: " + _this.status);
        });
        /*route.params.subscribe(params => {
          this.userId = params['id'];
          this.accountService.getAccountById(this.userId).subscribe(res => {
            console.log(res);
            this.account = res[0];
          });
        });*/
    }
    UserviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.accountService.getAccountById(params['id']);
        })
            .subscribe(function (res) {
            _this.account = res[0];
            _this.userId = _this.account._id;
        });
        this.navigationService.setNavigationStatus('admin');
    };
    UserviewComponent.prototype.changeUserStauts = function (event, property, value) {
        var _this = this;
        event.preventDefault();
        var objUser = {
            oauthID: this.account.oauthID,
            provider: this.account.provider,
            name: this.account.name,
            created: this.account.created,
            userGroup: this.account.userGroup,
            grade: this.account.grade
        };
        switch (property) {
            case 'usergroup':
                objUser.userGroup = value;
                break;
            case 'grade':
                objUser.grade = value;
                break;
        }
        this.accountService.setAccountById(this.userId, objUser).subscribe(function (res) {
            _this.account = res;
            _this.editComplete = true;
            setTimeout(function () {
                _this.editComplete = false;
            }, 3000);
        });
    };
    UserviewComponent.prototype.deleteAccount = function (event) {
        event.preventDefault();
        this.accountService.deleteAccountById(this.userId).subscribe(function (res) {
            history.back();
        });
    };
    return UserviewComponent;
}());
UserviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userview',
        template: __webpack_require__("../../../../../src/app/userview/userview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userview/userview.component.css"), __webpack_require__("../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__navigation_service__["a" /* NavigationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__navigation_service__["a" /* NavigationService */]) === "function" && _d || Object])
], UserviewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/userview.component.js.map

/***/ }),

/***/ "../../../../../src/app/zatoichi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Zatoichi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
 // must 'npm install @types/three'!!!
var Zatoichi = (function () {
    function Zatoichi(robot) {
        this.root = new __WEBPACK_IMPORTED_MODULE_0_three__["w" /* Object3D */]();
        this.root.name = 'robotroot';
        var robotShape = new __WEBPACK_IMPORTED_MODULE_0_three__["C" /* Shape */]();
        robotShape.moveTo(0, 20);
        robotShape.lineTo(-10, -20);
        robotShape.lineTo(10, -20);
        robotShape.lineTo(0, 20);
        var extrudeSettings = { amount: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
        var robotGeo = new __WEBPACK_IMPORTED_MODULE_0_three__["h" /* ExtrudeGeometry */](robotShape, extrudeSettings);
        robotGeo.rotateX(Math.PI / 2);
        var mesh;
        if (robot.isHost) {
            mesh = new __WEBPACK_IMPORTED_MODULE_0_three__["s" /* Mesh */](robotGeo, new __WEBPACK_IMPORTED_MODULE_0_three__["u" /* MeshLambertMaterial */]({ color: 0x3b7fc4 }));
        }
        else {
            mesh = new __WEBPACK_IMPORTED_MODULE_0_three__["s" /* Mesh */](robotGeo, new __WEBPACK_IMPORTED_MODULE_0_three__["u" /* MeshLambertMaterial */]({ color: 0x9d9d9d }));
        }
        this.ding = mesh;
        this.ding.name = 'zatoichi';
        this.root.ding = this.ding;
        this.namePanel = null;
        var lineMaterial = new __WEBPACK_IMPORTED_MODULE_0_three__["o" /* LineBasicMaterial */]({
            color: 0x777777,
            linewidth: 1,
            opacity: 0.7,
            transparent: true
        });
        var gridGeo = new __WEBPACK_IMPORTED_MODULE_0_three__["l" /* Geometry */]();
        gridGeo.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](0, 0, 0));
        gridGeo.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](0, 105, 0));
        var grid = new __WEBPACK_IMPORTED_MODULE_0_three__["n" /* Line */](gridGeo, lineMaterial);
        this.ding.add(grid);
        //this.ding.overdraw = true;
        this.root.add(this.ding);
    }
    Zatoichi.prototype.update = function () {
        switch (this.ding._d) {
            case 'x+':
                this.ding.rotateY(Math.PI / 2);
                break;
            case 'x-':
                this.ding.rotateY(-Math.PI / 2);
                break;
            case 'y+':
                this.ding.rotateY(0);
                break;
            case 'y-':
                this.ding.rotateY(Math.PI);
                break;
        }
        this.ding.matrixAutoUpdate = false;
        this.ding.updateMatrix();
    };
    Zatoichi.prototype.setPosition = function (x, y, z) {
        this.ding.position.set(x, y, z);
    };
    Zatoichi.prototype.setDirection = function (direction) {
        this.ding._d = direction;
    };
    Zatoichi.prototype.setName = function (rId, rname) {
        this.ding._robotID = rId;
        if (rname) {
            this.setNamePanel(rname);
        }
    };
    Zatoichi.prototype.setNamePanel = function (uname) {
        if (this.namePanel) {
            this.clearNamePanel();
        }
        var canvas = this.buildNameCanvas(uname);
        var texture = new __WEBPACK_IMPORTED_MODULE_0_three__["G" /* Texture */](canvas);
        texture.needsUpdate = true;
        var material = new __WEBPACK_IMPORTED_MODULE_0_three__["F" /* SpriteMaterial */]({ map: texture });
        var sprite = new __WEBPACK_IMPORTED_MODULE_0_three__["E" /* Sprite */](material);
        sprite.position.set(this.ding.position.x, this.ding.position.y + 110, this.ding.position.z);
        sprite.scale.set(150, 150, 150);
        //sprite.position.normalize();
        this.namePanel = sprite;
        this.root.add(this.namePanel);
    };
    Zatoichi.prototype.clearNamePanel = function () {
        if (this.namePanel === null) {
            return;
        }
        this.root.remove(this.namePanel);
        this.namePanel = null;
    };
    Zatoichi.prototype.buildNameCanvas = function (txt) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var fontSize = 20;
        var lineHeight = 25;
        var fontFamily = 'Arial';
        var bgColor = 'rgba(0,255,0,0.4)';
        var fontColor = 'rgba(0,0,0,0.7)';
        var scale = 1.3;
        var fontH = lineHeight;
        var tmpWidth;
        var line = '';
        var words = txt.split(' ');
        var maxWidth = 300;
        var y = 1;
        canvas.width = 300;
        canvas.height = 300;
        context.translate(canvas.width / 2, canvas.height / 2);
        context.font = '600 ' + fontSize + 'px "' + fontFamily + '"';
        context.fillStyle = fontColor;
        //fontW = context.measureText(txt).width;
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var matrix = context.measureText(testLine);
            var testWidth = matrix.width;
            if (testWidth > maxWidth && n > 0) {
                tmpWidth = context.measureText(line).width;
                context.fillText(line, -tmpWidth / 2, lineHeight * (y - 1));
                line = words[n] + ' ';
                y += 1;
            }
            else {
                line = testLine;
            }
        }
        tmpWidth = context.measureText(line).width;
        context.fillText(line, -tmpWidth / 2, lineHeight * (y - 1));
        context.fillStyle = bgColor;
        context.fillRect(-maxWidth * scale / 2, -lineHeight, maxWidth * scale, fontH * y + 10);
        //context.fillRect(-fontW*scale/2,-fontH*scale/1.3,fontW*scale,fontH*scale);
        //context.fillText(txt, -fontW/2, 0);
        return canvas;
    };
    return Zatoichi;
}());

//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/zatoichi.js.map

/***/ }),

/***/ "../../../../../src/assets/bootstrap/landingpage/css/landing-page.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * Start Bootstrap - Landing Page (http://startbootstrap.com/)\n * Copyright 2013-2016 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n */\n\nbody,\nhtml {\n    width: 100%;\n    height: 100%;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-family: \"Lato\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    font-weight: 700;\n}\n\n.topnav {\n    font-size: 14px; \n}\n\n.lead {\n    font-size: 18px;\n    font-weight: 400;\n}\n\n.intro-header {\n    padding-top: 50px; /* If you're making other pages, make sure there is 50px of padding to make sure the navbar doesn't overlap content! */\n    padding-bottom: 50px;\n    text-align: center;\n    color: #f8f8f8;\n    background: url(/assets/bootstrap/landingpage/img/intro-bg.jpg) no-repeat center center;\n    background-size: cover;\n}\n\n.intro-message {\n    position: relative;\n    padding-top: 20%;\n    padding-bottom: 20%;\n}\n\n.intro-message > h1 {\n    margin: 0;\n    text-shadow: 2px 2px 3px rgba(0,0,0,0.6);\n    font-size: 5em;\n}\n\n.intro-divider {\n    width: 400px;\n    border-top: 1px solid #f8f8f8;\n    border-bottom: 1px solid rgba(0,0,0,0.2);\n}\n\n.intro-message > h3 {\n    text-shadow: 2px 2px 3px rgba(0,0,0,0.6);\n}\n\n@media(max-width:767px) {\n    .intro-message {\n        padding-bottom: 15%;\n    }\n\n    .intro-message > h1 {\n        font-size: 3em;\n    }\n\n    ul.intro-social-buttons > li {\n        display: block;\n        margin-bottom: 20px;\n        padding: 0;\n    }\n\n    ul.intro-social-buttons > li:last-child {\n        margin-bottom: 0;\n    }\n\n    .intro-divider {\n        width: 100%;\n    }\n}\n\n.network-name {\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 2px;\n}\n\n.content-section-a {\n    padding: 50px 0;\n    background-color: #f8f8f8;\n}\n\n.content-section-b {\n    padding: 50px 0;\n    border-top: 1px solid #e7e7e7;\n    border-bottom: 1px solid #e7e7e7;\n}\n\n.section-heading {\n    margin-bottom: 30px;\n}\n\n.section-heading-spacer {\n    float: left;\n    width: 200px;\n    border-top: 3px solid #e7e7e7;\n}\n\n.banner {\n    padding: 100px 0;\n    color: #f8f8f8;\n    background: url(" + __webpack_require__("../../../../../src/assets/bootstrap/landingpage/img/banner-bg.jpg") + ") no-repeat center center;\n    background-size: cover;\n}\n\n.banner h2 {\n    margin: 0;\n    text-shadow: 2px 2px 3px rgba(0,0,0,0.6);\n    font-size: 3em;\n}\n\n.banner ul {\n    margin-bottom: 0;\n}\n\n.banner-social-buttons {\n    float: right;\n    margin-top: 0;\n}\n\n@media(max-width:1199px) {\n    ul.banner-social-buttons {\n        float: left;\n        margin-top: 15px;\n    }\n}\n\n@media(max-width:767px) {\n    .banner h2 {\n        margin: 0;\n        text-shadow: 2px 2px 3px rgba(0,0,0,0.6);\n        font-size: 3em;\n    }\n\n    ul.banner-social-buttons > li {\n        display: block;\n        margin-bottom: 20px;\n        padding: 0;\n    }\n\n    ul.banner-social-buttons > li:last-child {\n        margin-bottom: 0;\n    }\n}\n\nfooter {\n    padding: 50px 0;\n    background-color: #f8f8f8;\n}\n\np.copyright {\n    margin: 15px 0 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/bootstrap/landingpage/img/banner-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner-bg.ef05e42f7cf5f63a807d.jpg";

/***/ }),

/***/ "../../../../../src/assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)\n * Copyright 2013-2016 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n */\nbody {\n  background-color: #f8f8f8;\n}\n#wrapper {\n  width: 100%;\n}\n#page-wrapper {\n  padding: 0 15px;\n  min-height: 568px;\n  background-color: white;\n}\n@media (min-width: 768px) {\n  #page-wrapper {\n    position: inherit;\n    margin: 0 0 0 250px;\n    padding: 0 30px;\n    border-left: 1px solid #e7e7e7;\n  }\n}\n.navbar-top-links {\n  margin-right: 0;\n}\n.navbar-top-links li {\n  display: inline-block;\n}\n.navbar-top-links li:last-child {\n  margin-right: 15px;\n}\n.navbar-top-links li a {\n  padding: 15px;\n  min-height: 50px;\n}\n.navbar-top-links .dropdown-menu li {\n  display: block;\n}\n.navbar-top-links .dropdown-menu li:last-child {\n  margin-right: 0;\n}\n.navbar-top-links .dropdown-menu li a {\n  padding: 3px 20px;\n  min-height: 0;\n}\n.navbar-top-links .dropdown-menu li a div {\n  white-space: normal;\n}\n.navbar-top-links .dropdown-messages,\n.navbar-top-links .dropdown-tasks,\n.navbar-top-links .dropdown-alerts {\n  width: 310px;\n  min-width: 0;\n}\n.navbar-top-links .dropdown-messages {\n  margin-left: 5px;\n}\n.navbar-top-links .dropdown-tasks {\n  margin-left: -59px;\n}\n.navbar-top-links .dropdown-alerts {\n  margin-left: -123px;\n}\n.navbar-top-links .dropdown-user {\n  right: 0;\n  left: auto;\n}\n.sidebar .sidebar-nav.navbar-collapse {\n  padding-left: 0;\n  padding-right: 0;\n}\n.sidebar .sidebar-search {\n  padding: 15px;\n}\n.sidebar ul li {\n  border-bottom: 1px solid #e7e7e7;\n}\n.sidebar ul li a.active {\n  background-color: #eeeeee;\n}\n.sidebar .arrow {\n  float: right;\n}\n.sidebar .fa.arrow:before {\n  content: \"\\F104\";\n}\n.sidebar .active > a > .fa.arrow:before {\n  content: \"\\F107\";\n}\n.sidebar .nav-second-level li,\n.sidebar .nav-third-level li {\n  border-bottom: none !important;\n}\n.sidebar .nav-second-level li a {\n  padding-left: 37px;\n}\n.sidebar .nav-third-level li a {\n  padding-left: 52px;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    z-index: 1;\n    position: absolute;\n    width: 250px;\n    margin-top: 51px;\n    height: calc(100vh - 51px);\n    overflow-y: auto;\n  }\n  .navbar-top-links .dropdown-messages,\n  .navbar-top-links .dropdown-tasks,\n  .navbar-top-links .dropdown-alerts {\n    margin-left: auto;\n  }\n}\n.btn-outline {\n  color: inherit;\n  background-color: transparent;\n  transition: all .5s;\n}\n.btn-primary.btn-outline {\n  color: #428bca;\n}\n.btn-success.btn-outline {\n  color: #5cb85c;\n}\n.btn-info.btn-outline {\n  color: #5bc0de;\n}\n.btn-warning.btn-outline {\n  color: #f0ad4e;\n}\n.btn-danger.btn-outline {\n  color: #d9534f;\n}\n.btn-primary.btn-outline:hover,\n.btn-success.btn-outline:hover,\n.btn-info.btn-outline:hover,\n.btn-warning.btn-outline:hover,\n.btn-danger.btn-outline:hover {\n  color: white;\n}\n.chat {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.chat li {\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n  border-bottom: 1px dotted #999999;\n}\n.chat li.left .chat-body {\n  margin-left: 60px;\n}\n.chat li.right .chat-body {\n  margin-right: 60px;\n}\n.chat li .chat-body p {\n  margin: 0;\n}\n.panel .slidedown .glyphicon,\n.chat .glyphicon {\n  margin-right: 5px;\n}\n.chat-panel .panel-body {\n  height: 350px;\n  overflow-y: scroll;\n}\n.login-panel {\n  margin-top: 25%;\n}\n.flot-chart {\n  display: block;\n  height: 400px;\n}\n.flot-chart-content {\n  width: 100%;\n  height: 100%;\n}\ntable.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc,\ntable.dataTable thead .sorting_asc_disabled,\ntable.dataTable thead .sorting_desc_disabled {\n  background: transparent;\n}\ntable.dataTable thead .sorting_asc:after {\n  content: \"\\F0DE\";\n  float: right;\n  font-family: fontawesome;\n}\ntable.dataTable thead .sorting_desc:after {\n  content: \"\\F0DD\";\n  float: right;\n  font-family: fontawesome;\n}\ntable.dataTable thead .sorting:after {\n  content: \"\\F0DC\";\n  float: right;\n  font-family: fontawesome;\n  color: rgba(50, 50, 50, 0.5);\n}\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  padding: 6px 0;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.428571429;\n}\n.btn-circle.btn-lg {\n  width: 50px;\n  height: 50px;\n  padding: 10px 16px;\n  border-radius: 25px;\n  font-size: 18px;\n  line-height: 1.33;\n}\n.btn-circle.btn-xl {\n  width: 70px;\n  height: 70px;\n  padding: 10px 16px;\n  border-radius: 35px;\n  font-size: 24px;\n  line-height: 1.33;\n}\n.show-grid [class^=\"col-\"] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border: 1px solid #ddd;\n  background-color: #eee !important;\n}\n.show-grid {\n  margin: 15px 0;\n}\n.huge {\n  font-size: 40px;\n}\n.panel-green {\n  border-color: #5cb85c;\n}\n.panel-green > .panel-heading {\n  border-color: #5cb85c;\n  color: white;\n  background-color: #5cb85c;\n}\n.panel-green > a {\n  color: #5cb85c;\n}\n.panel-green > a:hover {\n  color: #3d8b3d;\n}\n.panel-red {\n  border-color: #d9534f;\n}\n.panel-red > .panel-heading {\n  border-color: #d9534f;\n  color: white;\n  background-color: #d9534f;\n}\n.panel-red > a {\n  color: #d9534f;\n}\n.panel-red > a:hover {\n  color: #b52b27;\n}\n.panel-yellow {\n  border-color: #f0ad4e;\n}\n.panel-yellow > .panel-heading {\n  border-color: #f0ad4e;\n  color: white;\n  background-color: #f0ad4e;\n}\n.panel-yellow > a {\n  color: #f0ad4e;\n}\n.panel-yellow > a:hover {\n  color: #df8a13;\n}\n.timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none;\n}\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee;\n}\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px;\n}\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n.timeline > li:after {\n  clear: both;\n}\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n.timeline > li:after {\n  clear: both;\n}\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n}\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc;\n}\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff;\n}\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999;\n}\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right;\n}\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0;\n}\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0;\n}\n.timeline-badge.primary {\n  background-color: #2e6da4 !important;\n}\n.timeline-badge.success {\n  background-color: #3f903f !important;\n}\n.timeline-badge.warning {\n  background-color: #f0ad4e !important;\n}\n.timeline-badge.danger {\n  background-color: #d9534f !important;\n}\n.timeline-badge.info {\n  background-color: #5bc0de !important;\n}\n.timeline-title {\n  margin-top: 0;\n  color: inherit;\n}\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0;\n}\n.timeline-body > p + p {\n  margin-top: 5px;\n}\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px;\n  }\n  ul.timeline > li > .timeline-panel {\n    width: calc(10%);\n    width: -webkit-calc(10%);\n  }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0;\n  }\n  ul.timeline > li > .timeline-panel {\n    float: right;\n  }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0;\n  }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/csg/ThreeCSG.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ThreeBSP */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");

var EPSILON = 1e-5, COPLANAR = 0, FRONT = 1, BACK = 2, SPANNING = 3;
var ThreeBSP = (function () {
    function ThreeBSP(geometry) {
        // Convert THREE.Geometry to ThreeBSP
        var i, _length_i, face, vertex, faceVertexUvs, uvs, polygon, polygons = [], tree;
        /*this.Polygon = Polygon;
        this.Vertex = Vertex;
        this.Node = Node;*/
        if (geometry instanceof __WEBPACK_IMPORTED_MODULE_0_three__["l" /* Geometry */]) {
            this.matrix = new __WEBPACK_IMPORTED_MODULE_0_three__["r" /* Matrix4 */]();
        }
        else if (geometry instanceof __WEBPACK_IMPORTED_MODULE_0_three__["s" /* Mesh */]) {
            // #todo: add hierarchy support
            geometry.updateMatrix();
            this.matrix = geometry.matrix.clone();
            geometry = geometry.geometry;
        }
        else if (geometry instanceof Node) {
            this.tree = geometry;
            this.matrix = new __WEBPACK_IMPORTED_MODULE_0_three__["r" /* Matrix4 */]();
            return this;
        }
        else {
            throw 'ThreeBSP: Given geometry is unsupported';
        }
        for (i = 0, _length_i = geometry.faces.length; i < _length_i; i++) {
            face = geometry.faces[i];
            faceVertexUvs = geometry.faceVertexUvs[0][i];
            var polygon_1 = new Polygon(null, null, null);
            if (face instanceof __WEBPACK_IMPORTED_MODULE_0_three__["i" /* Face3 */]) {
                vertex = geometry.vertices[face.a];
                uvs = faceVertexUvs ? new __WEBPACK_IMPORTED_MODULE_0_three__["H" /* Vector2 */](faceVertexUvs[0].x, faceVertexUvs[0].y) : null;
                vertex = new Vertex(vertex.x, vertex.y, vertex.z, face.vertexNormals[0], uvs);
                vertex.applyMatrix4(this.matrix);
                polygon_1.vertices.push(vertex);
                vertex = geometry.vertices[face.b];
                uvs = faceVertexUvs ? new __WEBPACK_IMPORTED_MODULE_0_three__["H" /* Vector2 */](faceVertexUvs[1].x, faceVertexUvs[1].y) : null;
                vertex = new Vertex(vertex.x, vertex.y, vertex.z, face.vertexNormals[1], uvs);
                vertex.applyMatrix4(this.matrix);
                polygon_1.vertices.push(vertex);
                vertex = geometry.vertices[face.c];
                uvs = faceVertexUvs ? new __WEBPACK_IMPORTED_MODULE_0_three__["H" /* Vector2 */](faceVertexUvs[2].x, faceVertexUvs[2].y) : null;
                vertex = new Vertex(vertex.x, vertex.y, vertex.z, face.vertexNormals[2], uvs);
                vertex.applyMatrix4(this.matrix);
                polygon_1.vertices.push(vertex);
            }
            else if (typeof __WEBPACK_IMPORTED_MODULE_0_three__["j" /* Face4 */]) {
                vertex = geometry.vertices[face.a];
                uvs = faceVertexUvs ? new __WEBPACK_IMPORTED_MODULE_0_three__["H" /* Vector2 */](faceVertexUvs[0].x, faceVertexUvs[0].y) : null;
                vertex = new Vertex(vertex.x, vertex.y, vertex.z, face.vertexNormals[0], uvs);
                vertex.applyMatrix4(this.matrix);
                polygon_1.vertices.push(vertex);
                vertex = geometry.vertices[face.b];
                uvs = faceVertexUvs ? new __WEBPACK_IMPORTED_MODULE_0_three__["H" /* Vector2 */](faceVertexUvs[1].x, faceVertexUvs[1].y) : null;
                vertex = new Vertex(vertex.x, vertex.y, vertex.z, face.vertexNormals[1], uvs);
                vertex.applyMatrix4(this.matrix);
                polygon_1.vertices.push(vertex);
                vertex = geometry.vertices[face.c];
                uvs = faceVertexUvs ? new __WEBPACK_IMPORTED_MODULE_0_three__["H" /* Vector2 */](faceVertexUvs[2].x, faceVertexUvs[2].y) : null;
                vertex = new Vertex(vertex.x, vertex.y, vertex.z, face.vertexNormals[2], uvs);
                vertex.applyMatrix4(this.matrix);
                polygon_1.vertices.push(vertex);
                vertex = geometry.vertices[face.d];
                uvs = faceVertexUvs ? new __WEBPACK_IMPORTED_MODULE_0_three__["H" /* Vector2 */](faceVertexUvs[3].x, faceVertexUvs[3].y) : null;
                vertex = new Vertex(vertex.x, vertex.y, vertex.z, face.vertexNormals[3], uvs);
                vertex.applyMatrix4(this.matrix);
                polygon_1.vertices.push(vertex);
            }
            else {
                throw 'Invalid face type at index ' + i;
            }
            polygon_1.calculateProperties();
            polygons.push(polygon_1);
        }
        this.tree = new Node(polygons);
    }
    ThreeBSP.prototype.subtract = function (other_tree) {
        var a = this.tree.clone(), b = other_tree.tree.clone();
        a.invert();
        a.clipTo(b);
        b.clipTo(a);
        b.invert();
        b.clipTo(a);
        b.invert();
        a.build(b.allPolygons());
        a.invert();
        a = new ThreeBSP(a);
        a.matrix = this.matrix;
        return a;
    };
    ThreeBSP.prototype.union = function (other_tree) {
        var a = this.tree.clone(), b = other_tree.tree.clone();
        a.clipTo(b);
        b.clipTo(a);
        b.invert();
        b.clipTo(a);
        b.invert();
        a.build(b.allPolygons());
        a = new ThreeBSP(a);
        a.matrix = this.matrix;
        return a;
    };
    ThreeBSP.prototype.intersect = function (other_tree) {
        var a = this.tree.clone(), b = other_tree.tree.clone();
        a.invert();
        b.clipTo(a);
        b.invert();
        a.clipTo(b);
        b.clipTo(a);
        a.build(b.allPolygons());
        a.invert();
        a = new ThreeBSP(a);
        a.matrix = this.matrix;
        return a;
    };
    ThreeBSP.prototype.toGeometry = function () {
        var i, j, matrix = new __WEBPACK_IMPORTED_MODULE_0_three__["r" /* Matrix4 */]().getInverse(this.matrix), geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["l" /* Geometry */](), polygons = this.tree.allPolygons(), polygon_count = polygons.length, polygon, polygon_vertice_count, vertice_dict = {}, vertex_idx_a, vertex_idx_b, vertex_idx_c, vertex, face, verticeUvs;
        for (i = 0; i < polygon_count; i++) {
            polygon = polygons[i];
            polygon_vertice_count = polygon.vertices.length;
            for (j = 2; j < polygon_vertice_count; j++) {
                verticeUvs = [];
                vertex = polygon.vertices[0];
                verticeUvs.push(new __WEBPACK_IMPORTED_MODULE_0_three__["H" /* Vector2 */](vertex.uv.x, vertex.uv.y));
                vertex = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](vertex.x, vertex.y, vertex.z);
                vertex.applyMatrix4(matrix);
                if (typeof vertice_dict[vertex.x + ',' + vertex.y + ',' + vertex.z] !== 'undefined') {
                    vertex_idx_a = vertice_dict[vertex.x + ',' + vertex.y + ',' + vertex.z];
                }
                else {
                    geometry.vertices.push(vertex);
                    vertex_idx_a = vertice_dict[vertex.x + ',' + vertex.y + ',' + vertex.z] = geometry.vertices.length - 1;
                }
                vertex = polygon.vertices[j - 1];
                verticeUvs.push(new __WEBPACK_IMPORTED_MODULE_0_three__["H" /* Vector2 */](vertex.uv.x, vertex.uv.y));
                vertex = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](vertex.x, vertex.y, vertex.z);
                vertex.applyMatrix4(matrix);
                if (typeof vertice_dict[vertex.x + ',' + vertex.y + ',' + vertex.z] !== 'undefined') {
                    vertex_idx_b = vertice_dict[vertex.x + ',' + vertex.y + ',' + vertex.z];
                }
                else {
                    geometry.vertices.push(vertex);
                    vertex_idx_b = vertice_dict[vertex.x + ',' + vertex.y + ',' + vertex.z] = geometry.vertices.length - 1;
                }
                vertex = polygon.vertices[j];
                verticeUvs.push(new __WEBPACK_IMPORTED_MODULE_0_three__["H" /* Vector2 */](vertex.uv.x, vertex.uv.y));
                vertex = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](vertex.x, vertex.y, vertex.z);
                vertex.applyMatrix4(matrix);
                if (typeof vertice_dict[vertex.x + ',' + vertex.y + ',' + vertex.z] !== 'undefined') {
                    vertex_idx_c = vertice_dict[vertex.x + ',' + vertex.y + ',' + vertex.z];
                }
                else {
                    geometry.vertices.push(vertex);
                    vertex_idx_c = vertice_dict[vertex.x + ',' + vertex.y + ',' + vertex.z] = geometry.vertices.length - 1;
                }
                face = new __WEBPACK_IMPORTED_MODULE_0_three__["i" /* Face3 */](vertex_idx_a, vertex_idx_b, vertex_idx_c, new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */](polygon.normal.x, polygon.normal.y, polygon.normal.z));
                geometry.faces.push(face);
                geometry.faceVertexUvs[0].push(verticeUvs);
            }
        }
        return geometry;
    };
    ThreeBSP.prototype.toMesh = function (material) {
        var geometry = this.toGeometry(), mesh = new __WEBPACK_IMPORTED_MODULE_0_three__["s" /* Mesh */](geometry, material);
        mesh.position.setFromMatrixPosition(this.matrix);
        mesh.rotation.setFromRotationMatrix(this.matrix);
        return mesh;
    };
    return ThreeBSP;
}());
var Polygon = (function () {
    function Polygon(vertices, normal, w) {
        if (!(vertices instanceof Array)) {
            vertices = [];
        }
        this.vertices = vertices;
        if (vertices.length > 0) {
            this.calculateProperties();
        }
        else {
            this.normal = this.w = undefined;
        }
    }
    Polygon.prototype.calculateProperties = function () {
        var a = this.vertices[0], b = this.vertices[1], c = this.vertices[2];
        this.normal = b.clone().subtract(a).cross(c.clone().subtract(a)).normalize();
        this.w = this.normal.clone().dot(a);
        return this;
    };
    Polygon.prototype.clone = function () {
        var i, vertice_count, polygon = new Polygon(null, null, null);
        for (i = 0, vertice_count = this.vertices.length; i < vertice_count; i++) {
            polygon.vertices.push(this.vertices[i].clone());
        }
        polygon.calculateProperties();
        return polygon;
    };
    Polygon.prototype.flip = function () {
        var i, vertices = [];
        this.normal.multiplyScalar(-1);
        this.w *= -1;
        for (i = this.vertices.length - 1; i >= 0; i--) {
            vertices.push(this.vertices[i]);
        }
        this.vertices = vertices;
        return this;
    };
    Polygon.prototype.classifyVertex = function (vertex) {
        var side_value = this.normal.dot(vertex) - this.w;
        if (side_value < -EPSILON) {
            return BACK;
        }
        else if (side_value > EPSILON) {
            return FRONT;
        }
        else {
            return COPLANAR;
        }
    };
    Polygon.prototype.classifySide = function (polygon) {
        var i, vertex, classification, num_positive = 0, num_negative = 0, vertice_count = polygon.vertices.length;
        for (i = 0; i < vertice_count; i++) {
            vertex = polygon.vertices[i];
            classification = this.classifyVertex(vertex);
            if (classification === FRONT) {
                num_positive++;
            }
            else if (classification === BACK) {
                num_negative++;
            }
        }
        if (num_positive > 0 && num_negative === 0) {
            return FRONT;
        }
        else if (num_positive === 0 && num_negative > 0) {
            return BACK;
        }
        else if (num_positive === 0 && num_negative === 0) {
            return COPLANAR;
        }
        else {
            return SPANNING;
        }
    };
    Polygon.prototype.splitPolygon = function (polygon, coplanar_front, coplanar_back, front, back) {
        var classification = this.classifySide(polygon);
        if (classification === COPLANAR) {
            (this.normal.dot(polygon.normal) > 0 ? coplanar_front : coplanar_back).push(polygon);
        }
        else if (classification === FRONT) {
            front.push(polygon);
        }
        else if (classification === BACK) {
            back.push(polygon);
        }
        else {
            var vertice_count, i, j, ti, tj, vi, vj, t, v, f = [], b = [];
            for (i = 0, vertice_count = polygon.vertices.length; i < vertice_count; i++) {
                j = (i + 1) % vertice_count;
                vi = polygon.vertices[i];
                vj = polygon.vertices[j];
                ti = this.classifyVertex(vi);
                tj = this.classifyVertex(vj);
                if (ti != BACK)
                    f.push(vi);
                if (ti != FRONT)
                    b.push(vi);
                if ((ti | tj) === SPANNING) {
                    t = (this.w - this.normal.dot(vi)) / this.normal.dot(vj.clone().subtract(vi));
                    v = vi.interpolate(vj, t);
                    f.push(v);
                    b.push(v);
                }
            }
            if (f.length >= 3)
                front.push(new Polygon(f, null, null).calculateProperties());
            if (b.length >= 3)
                back.push(new Polygon(b, null, null).calculateProperties());
        }
    };
    return Polygon;
}());
var Vertex = (function () {
    function Vertex(x, y, z, normal, uv) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.normal = normal || new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector3 */]();
        this.uv = uv || new __WEBPACK_IMPORTED_MODULE_0_three__["H" /* Vector2 */]();
    }
    Vertex.prototype.clone = function () {
        return new Vertex(this.x, this.y, this.z, this.normal.clone(), this.uv.clone());
    };
    Vertex.prototype.add = function (vertex) {
        this.x += vertex.x;
        this.y += vertex.y;
        this.z += vertex.z;
        return this;
    };
    Vertex.prototype.subtract = function (vertex) {
        this.x -= vertex.x;
        this.y -= vertex.y;
        this.z -= vertex.z;
        return this;
    };
    Vertex.prototype.multiplyScalar = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    };
    Vertex.prototype.cross = function (vertex) {
        var x = this.x, y = this.y, z = this.z;
        this.x = y * vertex.z - z * vertex.y;
        this.y = z * vertex.x - x * vertex.z;
        this.z = x * vertex.y - y * vertex.x;
        return this;
    };
    Vertex.prototype.normalize = function () {
        var length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        this.x /= length;
        this.y /= length;
        this.z /= length;
        return this;
    };
    Vertex.prototype.dot = function (vertex) {
        return this.x * vertex.x + this.y * vertex.y + this.z * vertex.z;
    };
    Vertex.prototype.lerp = function (a, t) {
        this.add(a.clone().subtract(this).multiplyScalar(t));
        this.normal.add(a.normal.clone().sub(this.normal).multiplyScalar(t));
        this.uv.add(a.uv.clone().sub(this.uv).multiplyScalar(t));
        return this;
    };
    Vertex.prototype.interpolate = function (other, t) {
        return this.clone().lerp(other, t);
    };
    Vertex.prototype.applyMatrix4 = function (m) {
        // input: THREE.Matrix4 affine matrix
        var x = this.x, y = this.y, z = this.z;
        var e = m.elements;
        this.x = e[0] * x + e[4] * y + e[8] * z + e[12];
        this.y = e[1] * x + e[5] * y + e[9] * z + e[13];
        this.z = e[2] * x + e[6] * y + e[10] * z + e[14];
        return this;
    };
    return Vertex;
}());
var Node = (function () {
    function Node(polygons) {
        var i, polygon_count, front = [], back = [];
        this.polygons = [];
        this.front = this.back = undefined;
        if (!(polygons instanceof Array) || polygons.length === 0)
            return;
        this.divider = polygons[0].clone();
        for (i = 0, polygon_count = polygons.length; i < polygon_count; i++) {
            this.divider.splitPolygon(polygons[i], this.polygons, this.polygons, front, back);
        }
        if (front.length > 0) {
            this.front = new Node(front);
        }
        if (back.length > 0) {
            this.back = new Node(back);
        }
    }
    Node.prototype.isConvex = function (polygons) {
        var i, j;
        for (i = 0; i < polygons.length; i++) {
            for (j = 0; j < polygons.length; j++) {
                if (i !== j && polygons[i].classifySide(polygons[j]) !== BACK) {
                    return false;
                }
            }
        }
        return true;
    };
    Node.prototype.build = function (polygons) {
        var i, polygon_count, front = [], back = [];
        if (!this.divider) {
            this.divider = polygons[0].clone();
        }
        for (i = 0, polygon_count = polygons.length; i < polygon_count; i++) {
            this.divider.splitPolygon(polygons[i], this.polygons, this.polygons, front, back);
        }
        if (front.length > 0) {
            if (!this.front)
                this.front = new Node(null);
            this.front.build(front);
        }
        if (back.length > 0) {
            if (!this.back)
                this.back = new Node(null);
            this.back.build(back);
        }
    };
    Node.prototype.allPolygons = function () {
        var polygons = this.polygons.slice();
        if (this.front)
            polygons = polygons.concat(this.front.allPolygons());
        if (this.back)
            polygons = polygons.concat(this.back.allPolygons());
        return polygons;
    };
    Node.prototype.clone = function () {
        var node = new Node(null);
        node.divider = this.divider.clone();
        node.polygons = this.polygons.map(function (polygon) {
            return polygon.clone();
        });
        node.front = this.front && this.front.clone();
        node.back = this.back && this.back.clone();
        return node;
    };
    Node.prototype.invert = function () {
        var i, polygon_count, temp;
        for (i = 0, polygon_count = this.polygons.length; i < polygon_count; i++) {
            this.polygons[i].flip();
        }
        this.divider.flip();
        if (this.front)
            this.front.invert();
        if (this.back)
            this.back.invert();
        temp = this.front;
        this.front = this.back;
        this.back = temp;
        return this;
    };
    Node.prototype.clipPolygons = function (polygons) {
        var i, polygon_count, front, back;
        if (!this.divider)
            return polygons.slice();
        front = [];
        back = [];
        for (i = 0, polygon_count = polygons.length; i < polygon_count; i++) {
            this.divider.splitPolygon(polygons[i], front, back, front, back);
        }
        if (this.front)
            front = this.front.clipPolygons(front);
        if (this.back)
            back = this.back.clipPolygons(back);
        else
            back = [];
        return front.concat(back);
    };
    Node.prototype.clipTo = function (node) {
        this.polygons = node.clipPolygons(this.polygons);
        if (this.front)
            this.front.clipTo(node);
        if (this.back)
            this.back.clipTo(node);
    };
    return Node;
}());
//window.ThreeBSP = ThreeBSP;

/* harmony default export */ __webpack_exports__["a"] = (ThreeBSP);
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/ThreeCSG.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/hamdalf/Developer/EasyInside/easyinside/src/polyfills.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map