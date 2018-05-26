webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>About this application</h3>\n<p>\n  This is a simple Application developed using the following <a style=\"cursor:pointer;\" href=\"http://starlord.hackerearth.com/beercraft\">API</a>\n</p>\n<div>Please visit my personal portfolio <a href=\"https://saisreereddy.github.io/SaisreeVennapusa/\">Portfolio</a></div>\n<div>Please visit my  <a href=\"http://vennapusaworks.com/region\">Personal Website</a></div>\n\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".title_style{\r\n    color:black;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n.img1_style{\r\n    height:6rem;\r\n    margin:0 auto;\r\n}\r\n.container-fluid-1{\r\n    margin-top:auto;\r\n    padding-top:4px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <div class=\"container-fluid container-fluid-1\">\n    \n     <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          \n        </div>\n    \n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li><a [routerLink]=\"['/home']\">Home</a></li>\n            <li><a [routerLink]=\"['/about']\">About</a></li>\n           \n            \n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li> <a class=\"btn font-weight\" (click)=\"goBackToPreviousPage()\">Go Back </a></li>\n            </ul>\n        </div><!-- /.navbar-collapse -->\n       \n      </div><!-- /.container-fluid -->\n    </nav>\n    <div class=\"row header\">\n        <div class=\"col-md-12\">\n          <a class=\"title_style\" [routerLink]=\"['/']\"><img src=\"assets\\Images\\beer0.jpg\" style=\"width: 36%;height: 172px;\" class=\"img-responsive img1_style\"></a>\n        </div>\n      </div>\n  </div>\n  \n  <br/>\n <router-outlet></router-outlet>\n \n "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(location) {
        this.location = location;
        this.title = 'Crafted Beers';
    }
    AppComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__got_http_service_service__ = __webpack_require__("./src/app/got-http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__beerview_beerview_component__ = __webpack_require__("./src/app/beerview/beerview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__filter_pipe__ = __webpack_require__("./src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__styleview_styleview_component__ = __webpack_require__("./src/app/styleview/styleview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_12__beerview_beerview_component__["a" /* BeerviewComponent */],
                __WEBPACK_IMPORTED_MODULE_13__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_14__styleview_styleview_component__["a" /* StyleviewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'beerview/:name', component: __WEBPACK_IMPORTED_MODULE_12__beerview_beerview_component__["a" /* BeerviewComponent */] },
                    { path: 'styleview', component: __WEBPACK_IMPORTED_MODULE_14__styleview_styleview_component__["a" /* StyleviewComponent */] },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__not_found_not_found_component__["a" /* NotFoundComponent */] },
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__got_http_service_service__["a" /* GotHttpService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/beerview/beerview.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/beerview/beerview.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"container-fluid\" style=\"text-align:center\">\n\n    \n \n  <div *ngFor=\"let info of nameData\">\n          <div class=\"text-center font-weight font-size-big\"><span style=\"color:crimson;font-family:cursive;font-size:22px;\">{{info.name}}</span></div>\n  \n         \n   \n         \n       \n      \n      <div class=\"col-md-12\">\n        \n        <div id=\"countries\" class=\"col-md-6 col-md-offset-3\" style=\"margin-top:4vh;\">\n        <div *ngIf=\"info\" class=\"card black font-weight\" style=\"font-weight:bold;\">\n            <h4 class=\"card-title\">Basic Details of <span style=\"color:crimson;font-size:22px;\">{{info.name}}</span></h4>\n            <div class=\"card-header\"></div>\n            <div class=\"card-body\"> \n                <div class=\"card-text\">Name : {{info.name}}</div>\n                <div class=\"card-text\">Alchohol Content : {{info.abv}}</div>\n                <div class=\"card-text\">ID : {{info.id}}</div>\n                <div class=\"card-text\">Style : {{info.style}}</div>\n                <div class=\"card-text\">Ounces : {{info.ounces}}</div>\n              \n            </div> \n            <div class=\"card-footer\"></div>\n          </div>\n      \n        </div>\n  \n           \n              </div>\n    \n\n\n      <br/>\n    \n\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/beerview/beerview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__got_http_service_service__ = __webpack_require__("./src/app/got-http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BeerviewComponent = /** @class */ (function () {
    function BeerviewComponent(sanitizer, _route, router, gotHttpService, location) {
        this.sanitizer = sanitizer;
        this._route = _route;
        this.router = router;
        this.gotHttpService = gotHttpService;
        this.location = location;
        this.nameData = [];
        this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url(https://www.thebottlepeople.co.uk/image/cache/catalog/Glass%20Bottles/187ml%20Bordeaux%20bottle%20BP-1050x1200.jpg)');
    }
    BeerviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myName = this._route.snapshot.paramMap.get('name');
        console.log(myName);
        // this.currentBlog = this.blogService.getSingleBlog(myBlogId);
        this.gotHttpService.getBeers().subscribe(function (data) {
            console.log(data);
            _this.allData = data;
            console.log(_this.allData);
            for (var _i = 0, _a = _this.allData; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.name === myName) {
                    _this.nameData.push(i);
                }
            }
            console.log(_this.nameData);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    BeerviewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    BeerviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-beerview',
            template: __webpack_require__("./src/app/beerview/beerview.component.html"),
            styles: [__webpack_require__("./src/app/beerview/beerview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__got_http_service_service__["a" /* GotHttpService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]])
    ], BeerviewComponent);
    return BeerviewComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        console.log(items);
        console.log(searchText);
        return items.filter(function (it) {
            console.log(it);
            if (it.name.toLowerCase().includes(searchText.toLowerCase())) {
                return it;
            }
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/got-http-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GotHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GotHttpService = /** @class */ (function () {
    function GotHttpService(_http) {
        this._http = _http;
        this.baseUrl = 'http://starlord.hackerearth.com/beercraft';
        console.log("BlogHttpService is called");
    }
    GotHttpService.prototype.handleError = function (err) {
        console.log("Handle error Http calls");
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err.message);
    };
    GotHttpService.prototype.getBeers = function () {
        var myResponse = this._http.get(this.baseUrl);
        return myResponse;
    };
    GotHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GotHttpService);
    return GotHttpService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin-left:2vw;\r\n    margin-bottom: 2vh;\r\n    \r\n}\r\n.red{\r\n    border:2px solid indianred;\r\n}\r\n.green{\r\n    border:2px solid chartreuse;\r\n}\r\n.blue{\r\n    border:2px solid lightblue;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"container-fluid\" style=\"text-align:center\">\n  <div class=\"row\" style=\"text-align:center\"></div>\n    <br><br>\n    \n  </div>\n  <div class=\"row\" style=\"text-align:center\">\n    <div>\n      <select class=\"form-control-custom\" [(ngModel)]=\"selected\" (ngModelChange)=\"onSelect(selected)\" placeholder=\"Filter Category By\">\n        <option  [ngValue]=\"undefined\"selected >Get Beer By Style</option>\n    \n          <option *ngFor=\"let item of finalStyle\"> {{item}} </option>\n      \n    </select>\n      <br><br>\n      <div>\n        <input class=\"form-control-custom\" [(ngModel)]=\"searchText\" placeholder=\"Search Beer By Name\">\n      </div>\n      <div *ngFor=\"let beer of allBeers | filter:searchText;let i=index\"> \n        <div *ngIf=\"beer\">\n          <div class=\"container zoom col-md-6\">\n          \n          <img src=\"assets\\Images\\beer1.png\" class=\"img-circle\" alt=\"Card image\" style=\"width:50%;opacity:0.4\">\n       \n        \n            <div class=\"centered\"><a [routerLink]=\"['/beerview',beer.name]\" style=\"text-decoration:none;color:chocolate\">{{beer.name}}</a></div>\n          </div>\n      </div>\n     \n          \n      </div>\n\n\n\n\n\n     <!-- <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">{{blog.title | uppercase}}</div>\n        <div class=\"panel-body\">\n         \n            <p>{{blog.description}}</p>\n        </div>\n        <div class=\"panel-footer\">Posted on {{blog.created | date}}<br/> by {{blog.author}}\n        <br/><br/><a [routerLink]=\"['/blog',blog.blogId]\" class=\"btn btn-primary\">Read</a>\n        \n        </div>\n        \n      </div>-->\n\n      <br/>\n    \n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__ = __webpack_require__("./src/app/got-http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_route, router, gotHttpService, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.gotHttpService = gotHttpService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        this.gotHttpService.getBeers().subscribe(function (data) {
            _this.allBeers = data;
            console.log(_this.allBeers);
            var styleName = [];
            for (var _i = 0, _a = _this.allBeers; _i < _a.length; _i++) {
                var item = _a[_i];
                styleName.push(item.style);
            }
            var uniqueStyleName = styleName.filter(onlyUnique);
            console.log(uniqueStyleName);
            _this.finalStyle = uniqueStyleName;
            _this.finalStyle.sort();
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    HomeComponent.prototype.onSelect = function (val) {
        console.log(val);
        this.someProperty = val;
        // if (this.someProperty === 'books') {
        //  this.toastr.success('Redirecting to books', 'Success!');
        //   this.allData = this.allData.filter(x => x.value === val);
        //  console.log(this.allData);
        this.router.navigate(['/styleview', { styleName: val }]).then(function () {
            // do whatever you need after navigation succeeds
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__["a" /* GotHttpService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/styleview/styleview.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/styleview/styleview.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"container-fluid\" style=\"text-align:center\">\n    <div class=\"row\" style=\"text-align:center\"></div>\n      <br><br>\n      \n    </div>\n    <div class=\"row\" style=\"text-align:center\">\n      <div>\n      \n        <br><br>\n        <div>\n          <input class=\"form-control-custom\" [(ngModel)]=\"searchText\" placeholder=\"Search Beer By Name\">\n        </div>\n        <div *ngFor=\"let beer of finalStyleData | filter:searchText;let i=index\"> \n          <div *ngIf=\"beer\">\n            <div class=\"container zoom col-md-6\">\n            \n            <img src=\"assets\\Images\\beer1.png\" class=\"img-circle\" alt=\"Card image\" style=\"width:50%;opacity:0.4\">\n         \n          \n              <div class=\"centered\"><a [routerLink]=\"['/beerview',beer.name]\" style=\"text-decoration:none;color:chocolate\">{{beer.name}}</a></div>\n            </div>\n        </div>\n       \n            \n        </div>\n  \n  \n  \n  \n  \n       <!-- <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">{{blog.title | uppercase}}</div>\n          <div class=\"panel-body\">\n           \n              <p>{{blog.description}}</p>\n          </div>\n          <div class=\"panel-footer\">Posted on {{blog.created | date}}<br/> by {{blog.author}}\n          <br/><br/><a [routerLink]=\"['/blog',blog.blogId]\" class=\"btn btn-primary\">Read</a>\n          \n          </div>\n          \n        </div>-->\n  \n        <br/>\n      \n  \n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/styleview/styleview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__ = __webpack_require__("./src/app/got-http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StyleviewComponent = /** @class */ (function () {
    function StyleviewComponent(_route, router, gotHttpService, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.gotHttpService = gotHttpService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    StyleviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myName = this._route.snapshot.paramMap.get('styleName');
        console.log(myName);
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        this.gotHttpService.getBeers().subscribe(function (data) {
            _this.allBeers = data;
            console.log(_this.allBeers);
            var finalData = [];
            for (var _i = 0, _a = _this.allBeers; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.style === myName) {
                    finalData.push(item);
                }
            }
            console.log(finalData);
            _this.finalStyleData = finalData;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    StyleviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-styleview',
            template: __webpack_require__("./src/app/styleview/styleview.component.html"),
            styles: [__webpack_require__("./src/app/styleview/styleview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__["a" /* GotHttpService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], StyleviewComponent);
    return StyleviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map