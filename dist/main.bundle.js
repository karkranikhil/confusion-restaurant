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

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\nfxLayout=\"column\"\nfxLayoutGap=\"10px\">\n\n<div fxFlex>\n       <div>\n          <h3>About Us</h3>\n          <hr>\n       </div>\n</div>\n\n <div fxFlex>\n   <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n     <div fxFlex=\"70\">\n         <h2>Our History</h2>\n         <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>\n         <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>\n     </div>\n     <div fxFlex=\"30\">\n         <mat-card>\n           <mat-card-header>\n             <mat-card-title>\n             <h2>Facts At a Glance</h2>\n             </mat-card-title>\n           </mat-card-header>\n           <mat-card-content>\n                   <dl>\n                       <dt>Started</dt>\n                       <dd>3 Feb. 2013</dd>\n                       <dt>Major Stake Holder</dt>\n                       <dd>HK Fine Foods Inc.</dd>\n                       <dt>Last Year's Turnover</dt>\n                       <dd>$1,250,375</dd>\n                       <dt>Employees</dt>\n                       <dd>40</dd>\n                  </dl>\n           </mat-card-content>\n         </mat-card>\n     </div>\n   </div>\n </div>\n \n <div fxFlex>\n           <mat-card>\n               <blockquote>\n                   <h3>You better cut the pizza in four pieces because\n                       I'm not hungry enough to eat six.</h3>\n                   <footer>-- Yogi Berra,\n                     <cite>The Wit and Wisdom of Yogi Berra,\n                       P. Pepe, Diversion Books, 2014</cite>\n                   </footer>\n               </blockquote>\n           </mat-card>\n </div>\n\n\n   <div fxFlex>\n     <h2>Corporate Leadership</h2>\n     <mat-list *ngIf=\"leaders\" [@expand]>\n        <mat-list-item *ngFor=\"let leader of leaders\">\n          <img matListAvatar src=\"{{BaseURL + leader.image}}\" alt=\"{{leader.name}}\">\n          <h3 matLine> {{leader.name}}, {{leader.abbr}}</h3>\n          <p matLine>\n            <span> {{leader.designation}} </span>\n            <span class=\"demo-2\">{{leader.description}} </span>\n          </p>\n        </mat-list-item>\n      </mat-list>\n      <div [hidden]=\"leaders || leaderErrMess\">\n        <mat-spinner></mat-spinner><h4>Loading... Please wait</h4>\n      </div>\n      <div *ngIf=\"leaderErrMess\">\n        <h2>Error</h2>\n        <h4>{{leaderErrMess}}</h4>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_leader_service__ = __webpack_require__("../../../../../src/app/services/leader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_app_animations__ = __webpack_require__("../../../../../src/app/animations/app.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AboutComponent = (function () {
    function AboutComponent(leaderService, BaseURL) {
        this.leaderService = leaderService;
        this.BaseURL = BaseURL;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderService.getLeaders()
            .subscribe(function (leaders) { return _this.leaders = leaders; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        host: {
            '[@flyInOut]': 'true',
            'style': 'display:block;'
        },
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__animations_app_animations__["b" /* flyInOut */])(),
            Object(__WEBPACK_IMPORTED_MODULE_2__animations_app_animations__["a" /* expand */])()
        ]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BaseURL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_leader_service__["a" /* LeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_leader_service__["a" /* LeaderService */]) === "function" && _a || Object, Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/animations/app.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = visibility;
/* harmony export (immutable) */ __webpack_exports__["b"] = flyInOut;
/* harmony export (immutable) */ __webpack_exports__["a"] = expand;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

function visibility() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('visibility', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('shown', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out'))
    ]);
}
function flyInOut() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('flyInOut', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)', opacity: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in')
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(100%)', opacity: 0 }))
        ])
    ]);
}
function expand() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('expand', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(-50%)', opacity: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}
//# sourceMappingURL=app.animations.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("../../../../../src/app/app-routing/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* routes */])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dishdetail_dishdetail_component__ = __webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");





var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_0__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'dishdetail/:id', component: __WEBPACK_IMPORTED_MODULE_1__dishdetail_dishdetail_component__["a" /* DishdetailComponent */] },
    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_restConfig__ = __webpack_require__("../../../../../src/app/shared/restConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dishdetail_dishdetail_component__ = __webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_promotion_service__ = __webpack_require__("../../../../../src/app/services/promotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_leader_service__ = __webpack_require__("../../../../../src/app/services/leader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_feedback_service__ = __webpack_require__("../../../../../src/app/services/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_baseUrl__ = __webpack_require__("../../../../../src/app/shared/baseUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_process_httpmsg_service__ = __webpack_require__("../../../../../src/app/services/process-httpmsg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__directives_highlight_directive__ = __webpack_require__("../../../../../src/app/directives/highlight.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//services








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dishdetail_dishdetail_component__["a" /* DishdetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_23__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_26__directives_highlight_directive__["a" /* HighlightDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_5__app_routing_app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_restangular__["RestangularModule"].forRoot(__WEBPACK_IMPORTED_MODULE_9__shared_restConfig__["a" /* RestangularConfigFactory */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__services_dish_service__["a" /* DishService */],
            __WEBPACK_IMPORTED_MODULE_20__services_promotion_service__["a" /* PromotionService */],
            __WEBPACK_IMPORTED_MODULE_21__services_leader_service__["a" /* LeaderService */],
            __WEBPACK_IMPORTED_MODULE_22__services_feedback_service__["a" /* FeedbackService */],
            { provide: 'BaseURL', useValue: __WEBPACK_IMPORTED_MODULE_24__shared_baseUrl__["a" /* baseURL */] },
            __WEBPACK_IMPORTED_MODULE_25__services_process_httpmsg_service__["a" /* ProcessHttpmsgService */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_23__login_login_component__["a" /* LoginComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\nfxLayout=\"column\"\nfxLayoutGap=\"10px\">\n\n<div fxFlex>\n       <div>\n          <h3>Contact Us</h3>\n          <hr>\n       </div>\n</div>\n\n<div fxFlex>\n <h3>Location Information</h3> \n <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n     <div fxFlex=\"50\" fxFlexOffset=\"20px\">\n           <h4>Our Address</h4>\n           <address>\n             121, Clear Water Bay Road<br>\n             Clear Water Bay, Kowloon<br>\n             HONG KONG<br>\n             <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n             <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n             <i class=\"fa fa-envelope\"></i>: \n                   <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n          </address>\n          <p></p>\n           <div>\n               <a mat-raised-button href=\"tel:+85212345678\"><i class=\"fa fa-phone\"></i> Call</a>\n               <a mat-raised-button><i class=\"fa fa-skype\"></i> Skype</a>\n               <a mat-raised-button href=\"mailto:confusion@food.net\"><i class=\"fa fa-envelope-o\"></i> Email</a>\n           </div>\n       </div>\n     <div fxFlex=\"40\">\n           <h4>Map of our Location</h4>\n     </div>\n   </div>\n </div>\n <div fxFlex fxFlexOffset=\"20px\" class=\"form-size\">\n  <h3>Send us your Feedback</h3>\n  <div [hidden]=\"feedbackList || errMess\" *ngIf=\"hideForm\" [@expand]>\n    <h4>Submitting Form</h4>\n    <mat-spinner></mat-spinner>\n  </div>\n  <div *ngIf=\"errMess\">\n    <h2>Error</h2>\n    <h4>{{errMess}}</h4>\n  </div>\n  <form novalidate [formGroup]=\"feedbackForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"(!hideForm) && (!showFeedbackData)\" [@expand]>\n      <p>\n        <mat-input-container class=\"half-width\"\n         dividerColor=\"{{(formErrors.firstname) ? 'warn' : 'primary'}}\">\n          <input matInput formControlName=\"firstname\" placeholder=\"First Name\" type=\"text\" required>\n          <mat-hint>\n            <span [hidden]=\"!(formErrors.firstname)\">\n              {{formErrors.firstname}}</span>\n          </mat-hint>\n        </mat-input-container>\n        <mat-input-container class=\"half-width\"\n         dividerColor=\"{{(formErrors.lastname) ? 'warn' : 'primary'}}\">\n          <input matInput formControlName=\"lastname\" placeholder=\"Last Name\" type=\"text\" required>\n          <mat-hint>\n            <span [hidden]=\"!(formErrors.lastname)\">\n              {{formErrors.lastname}}</span>\n          </mat-hint>\n        </mat-input-container>\n      </p>\n      <p>\n        <mat-input-container class=\"half-width\"\n         dividerColor=\"{{(formErrors.telnum) ? 'warn' : 'primary'}}\">\n          <input matInput formControlName=\"telnum\" placeholder=\"Tel. Number\" type=\"tel\" pattern=\"[0-9]*\" required>\n          <mat-hint>\n            <span [hidden]=\"!(formErrors.telnum)\">\n              {{formErrors.telnum}}</span>\n          </mat-hint>\n        </mat-input-container>\n        <mat-input-container class=\"half-width\"\n         dividerColor=\"{{(formErrors.email) ? 'warn' : 'primary'}}\">\n          <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"email\" email required>\n          <mat-hint>\n            <span [hidden]=\"!(formErrors.email)\">\n              {{formErrors.email}}</span>\n          </mat-hint>\n        </mat-input-container>\n      </p>\n      <table class=\"form-size\">\n        <td>\n        <mat-slide-toggle formControlName=\"agree\">May we contact you?</mat-slide-toggle>\n        </td>\n        <td>\n        <mat-select placeholder=\"How?\" formControlName=\"contacttype\">\n          <mat-option *ngFor=\"let ctype of contactType\" [value]=\"ctype\">\n            {{ ctype }}\n          </mat-option>\n        </mat-select>\n        </td>\n        </table>\n      <p>\n        <mat-input-container class=\"full-width\">\n          <textarea matInput formControlName=\"message\" placeholder=\"Your Feedback\" rows=12></textarea>\n        </mat-input-container>\n      </p>\n      <button type=\"submit\" mat-button class=\"background-primary text-floral-white\" [disabled]=\"feedbackForm.invalid\">Submit</button>\n    </form>\n    <div *ngIf=\"showFeedbackData\" [@expand]>\n        <h4>Submitting Form</h4>\n        <p>First Name:{{feedbackList.firstname}}</p>\n        <p>Last Name:{{feedbackList.lastname}}</p>\n        <p>Tel Number:{{feedbackList.telnum}}</p>\n        <p>Email:{{feedbackList.email}}</p>\n        <p>Contact You?:{{feedbackList.agree}}</p>\n        <p>How?:{{feedbackList.contacttype}}</p>\n        <p>feedback:{{feedbackList.message}}</p>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  width: 95%; }\n\n.half-width {\n  width: 45%; }\n\n.form-size {\n  width: 75%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_feedback__ = __webpack_require__("../../../../../src/app/shared/feedback.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_app_animations__ = __webpack_require__("../../../../../src/app/animations/app.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_feedback_service__ = __webpack_require__("../../../../../src/app/services/feedback.service.ts");
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
    function ContactComponent(fb, feedbackService) {
        this.fb = fb;
        this.feedbackService = feedbackService;
        this.contactType = __WEBPACK_IMPORTED_MODULE_2__shared_feedback__["a" /* ContactType */];
        this.formErrors = {
            'firstname': '',
            'lastname': '',
            'telnum': '',
            'email': ''
        };
        this.validationMessages = {
            'firstname': {
                'required': 'First Name is required.',
                'minlength': 'First Name must be at least 2 characters long.',
                'maxlength': 'FirstName cannot be more than 25 characters long.'
            },
            'lastname': {
                'required': 'Last Name is required.',
                'minlength': 'Last Name must be at least 2 characters long.',
                'maxlength': 'Last Name cannot be more than 25 characters long.'
            },
            'telnum': {
                'required': 'Tel. number is required.',
                'pattern': 'Tel. number must contain only numbers.'
            },
            'email': {
                'required': 'Email is required.',
                'email': 'Email not in valid format.'
            },
        };
        this.createForm();
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.hideForm = false;
        this.showFeedbackData = false;
    };
    ContactComponent.prototype.createForm = function () {
        var _this = this;
        this.feedbackForm = this.fb.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(25)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(25)]],
            telnum: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]],
            agree: false,
            contacttype: 'None',
            message: ''
        });
        this.feedbackForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset form validation messages
    };
    ContactComponent.prototype.onValueChanged = function (data) {
        if (!this.feedbackForm) {
            return;
        }
        var form = this.feedbackForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this.hideForm = true;
        this.showFeedbackData = false;
        this.feedback = this.feedbackForm.value;
        this.feedbackService.submitFeedback(this.feedback)
            .subscribe(function (feedbackList) {
            console.log(feedbackList);
            _this.hideForm = false;
            _this.showFeedbackData = true;
            setTimeout(function () {
                _this.showFeedbackData = false;
            }, 5000);
            _this.feedbackList = feedbackList;
        }, function (errmess) {
            _this.hideForm = false;
            _this.showFeedbackData = false;
            _this.errMess = errmess;
        });
        this.feedbackForm.reset({
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contacttype: 'None',
            message: ''
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        host: {
            '[@flyInOut]': 'true',
            'style': 'display:block;'
        },
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_3__animations_app_animations__["b" /* flyInOut */])(), ,
            Object(__WEBPACK_IMPORTED_MODULE_3__animations_app_animations__["a" /* expand */])()
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_feedback_service__["a" /* FeedbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_feedback_service__["a" /* FeedbackService */]) === "function" && _b || Object])
], ContactComponent);

var _a, _b;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
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

var HighlightDirective = (function () {
    function HighlightDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    HighlightDirective.prototype.onmouseenter = function () {
        this.renderer.addClass(this.el.nativeElement, 'highlight');
    };
    HighlightDirective.prototype.onmouseleave = function () {
        this.renderer.removeClass(this.el.nativeElement, 'highlight');
    };
    return HighlightDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onmouseenter", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onmouseleave", null);
HighlightDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appHighlight]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
], HighlightDirective);

var _a, _b;
//# sourceMappingURL=highlight.directive.js.map

/***/ }),

/***/ "../../../../../src/app/dishdetail/dishdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\nfxLayout=\"row\"\nfxLayout.sm=\"column\"\nfxLayout.xs=\"column\"\nfxLayoutAlign.gt-mat=\"space-around center\"\nfxLayoutGap=\"10px\" \nfxLayoutGap.xs=\"0\">\n\n<div fxFlex=\"40\" *ngIf=\"dish\" [@visibility]=\"visibility\" [@expand]>\n    <div fxFlex>\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title>\n              <h3>{{dish.name | uppercase}}</h3>\n            </mat-card-title>\n          </mat-card-header>\n          <img mat-card-image src=\"{{BaseURL + dish.image}}\" alt={{dish.name}}>\n          <mat-card-content>\n            <p>{{dish.description}}\n            </p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button [routerLink]=\"['/dishdetail',prev]\"><span class=\"fa fa-chevron-left fa-lg\"></span></button>\n            <button mat-button (click)=\"goBack()\">BACK</button>\n            <button mat-button>LIKE</button>\n            <button mat-button>SHARE</button>\n            <span class=\"flex-spacer\"></span>\n            <button mat-button [routerLink]=\"['/dishdetail',next]\"><span class=\"fa fa-chevron-right fa-lg\"></span></button>\n          </mat-card-actions>\n        </mat-card>\n      </div> \n</div>\n\n<div fxFlex=\"40\" *ngIf=\"dish\" [@visibility]=\"visibility\" [@expand]>\n    <mat-list fxFlex >\n        <h3>Comments</h3>\n        <mat-list-item *ngFor=\"let comment of dish.comments\">\n          <h1 mat-line> {{comment.comment}} </h1>\n          <h1 mat-line> {{comment.rating}} Stars</h1>\n          <p mat-line>\n            <span> -- {{comment.author}} {{comment.date | date}}</span>\n          </p>\n        </mat-list-item>\n        <mat-list-item *ngIf=\"commentsForm.valid\">\n            <h1 mat-line> {{commentsForm.value.comment}} </h1>\n            <h1 mat-line> {{commentsForm.value.rating}} Stars</h1>\n            <p mat-line>\n              <span> -- {{commentsForm.value.author}}</span>\n            </p>\n          </mat-list-item>\n        <form novalidate [formGroup]=\"commentsForm\" (ngSubmit)=\"onSubmit()\" >\n            <p>\n                \n              <mat-input-container style=\"width: 100%\" class=\"example-full-width\"\n               dividerColor=\"{{(formErrors.author) ? 'warn' : 'primary'}}\">\n                <input matInput formControlName=\"author\" placeholder=\"Name\" type=\"text\" required>\n                <mat-hint>\n                  <span [hidden]=\"!(formErrors.author)\">\n                    {{formErrors.author}}</span>\n                </mat-hint>\n              </mat-input-container>\n            </p>\n            <p>\n                <mat-slider\n                class=\"example-margin\"\n                [max]=\"5\"\n                [min]=\"0\"\n                [step]=\"1\"\n                formControlName=\"rating\"\n                [thumb-label]=\"true\"\n                [tick-interval]=\"01\"\n                value=\"5\">\n            </mat-slider>\n            </p>\n            <p>\n              <mat-input-container style=\"width: 100%\" class=\"full-width\">\n                <textarea matInput formControlName=\"comment\" placeholder=\"Your comment\" rows=8 required></textarea>\n                <mat-hint>\n                    <span [hidden]=\"!(formErrors.comment)\">\n                      {{formErrors.comment}}</span>\n                  </mat-hint>\n              </mat-input-container>\n            </p>\n            <button type=\"submit\" mat-button class=\"background-primary text-floral-white\" [disabled]=\"commentsForm.invalid\">Submit</button>\n          </form>\n      </mat-list>\n</div>\n<div [hidden]=\"dish || errMess\">\n  <mat-spinner></mat-spinner><h4>Loading... Please wait</h4>\n</div>\n<div *ngIf=\"errMess\">\n  <h2>Error</h2>\n  <h4>{{errMess}}</h4>\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dishdetail/dishdetail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dishdetail/dishdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_app_animations__ = __webpack_require__("../../../../../src/app/animations/app.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

//import { DatePipe } from '@angular/common';






var DishdetailComponent = (function () {
    function DishdetailComponent(dishservice, route, location, cmt, BaseURL) {
        this.dishservice = dishservice;
        this.route = route;
        this.location = location;
        this.cmt = cmt;
        this.BaseURL = BaseURL;
        this.dishcopy = null;
        this.visibility = 'shown';
        this.validationMessages = {
            'author': {
                'required': 'Author is required.',
                'minlength': 'Author must be at least 2 characters long.'
            },
            'comment': {
                'required': 'comments is required.',
            }
        };
        this.formErrors = {
            'author': '',
            'rating': '',
            'comment': ''
        };
        this.createForm();
    }
    DishdetailComponent.prototype.createForm = function () {
        var _this = this;
        this.commentsForm = this.cmt.group({
            author: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(2)]],
            rating: ['5', []],
            comment: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
        });
        this.commentsForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset form validation messages
    };
    DishdetailComponent.prototype.onValueChanged = function (data) {
        if (!this.commentsForm) {
            return;
        }
        var form = this.commentsForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    DishdetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.comment = this.commentsForm.value;
        this.comment.date = new Date().toISOString();
        this.dishcopy.comments.push(this.comment);
        console.log('this.dishcopy', this.dishcopy);
        this.dishcopy.save().
            subscribe(function (dish) { return _this.dish = dish; });
        this.commentsForm.reset({
            author: '',
            comment: '',
            rating: '5'
        });
    };
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getDishIds().subscribe(function (dishIds) { return _this.dishIds = dishIds; });
        this.route.params.switchMap(function (params) {
            _this.visibility = 'hidden';
            return _this.dishservice.getDish(+params['id']);
        })
            .subscribe(function (dish) {
            console.log(dish);
            _this.dish = dish;
            _this.dishcopy = dish;
            _this.setPrevNext(dish.id);
            _this.visibility = 'shown';
        }, function (errmess) { return _this.errMess = errmess; });
    };
    DishdetailComponent.prototype.setPrevNext = function (dishId) {
        var index = this.dishIds.indexOf(dishId);
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    };
    DishdetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return DishdetailComponent;
}());
DishdetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dishdetail',
        template: __webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        host: {
            '[@flyInOut]': 'true',
            'style': 'display:block;'
        },
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_6__animations_app_animations__["b" /* flyInOut */])(),
            Object(__WEBPACK_IMPORTED_MODULE_6__animations_app_animations__["c" /* visibility */])(),
            Object(__WEBPACK_IMPORTED_MODULE_6__animations_app_animations__["a" /* expand */])()
        ]
    }),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BaseURL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_dish_service__["a" /* DishService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dish_service__["a" /* DishService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _d || Object, Object])
], DishdetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dishdetail.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"start center\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.gt-sm=\"center center\" fxLayoutWrap fxLayoutGap=\"10px\">\n\n<div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n<div fxLayout=\"row\">\n  <div fxFlex=\"40\" fxFlexOffset=\"20px\">\n    <h4>Links</h4>\n    <mat-list>\n      <mat-list-item><a mat-button routerLinkActive=\"active\" routerLink=\"/home\">Home</a></mat-list-item>\n      <mat-list-item><a mat-button routerLink=\"/aboutus\">About</a></mat-list-item>\n      <mat-list-item><a mat-button routerLink=\"/menu\">Menu</a></mat-list-item>\n      <mat-list-item><a mat-button routerLink=\"/contactus\">Contact</a></mat-list-item>\n    </mat-list>\n  </div>\n  <div fxFlex=\"50\">\n    <h4>Our Address</h4>\n    <address style=\"text-size: 80%\">\n      121, Clear Water Bay Road<br> Clear Water Bay, Kowloon<br> HONG KONG<br>\n      <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n      <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n      <i class=\"fa fa-envelope\"></i>:\n      <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n    </address>\n  </div>\n</div>\n</div>\n<div fxFlex=\"100%\" fxFlex.gt-sm=\"45%\">\n<div style=\"text-align:center\">\n  <a mat-icon-button class=\"btn-google-plus\" href=\"http://google.com/+\"><i class=\"fa fa-google-plus fa-lg\"></i></a>\n  <a mat-icon-button class=\"btn-facebook\" href=\"http://www.facebook.com/profile.php?id=\"><i class=\"fa fa-facebook fa-lg\"></i></a>\n  <a mat-icon-button class=\"btn-linkedin\" href=\"http://www.linkedin.com/in/\"><i class=\"fa fa-linkedin fa-lg\"></i></a>\n  <a mat-icon-button class=\"btn-twitter\" href=\"http://twitter.com/\"><i class=\"fa fa-twitter fa-lg\"></i></a>\n  <a mat-icon-button class=\"btn-youtube\" href=\"http://youtube.com/\"><i class=\"fa fa-youtube fa-lg\"></i></a>\n  <a mat-icon-button class=\"btn-mail\" href=\"mailto:\"><i class=\"fa fa-envelope-o fa-lg\"></i></a>\n</div>\n</div>\n<div fxFlex=\"100\" fxFlexAlign=\"center center\">\n<div style=\"text-align:center;\">\n  <p>© Copyright 2015 Ristorante Con Fusion</p>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  background-color: #D1C4E9;\n  margin: 0px auto;\n  padding: 20px 0px; }\n\n.btn-facebook {\n  color: #fff !important;\n  background-color: #3b5998 !important; }\n\n.btn-google-plus {\n  color: #fff !important;\n  background-color: #dd4b39 !important; }\n\n.btn-youtube {\n  color: #fff !important;\n  background-color: #ff4b39 !important; }\n\n.btn-linkedin {\n  color: #fff !important;\n  background-color: #007bb6 !important; }\n\n.btn-twitter {\n  color: #fff !important;\n  background-color: #55acee !important; }\n\n.btn-mail {\n  color: #fff !important;\n  background-color: #512DA8 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span><img src=\"/assets/images/logo.png\" height=30 width=41></span>\n  <a mat-button routerLinkActive=\"active\" routerLink=\"/home\"><span class=\"fa fa-home fa-lg\"></span> Home</a>\n  <a mat-button routerLinkActive=\"active\" routerLink=\"/aboutus\"><span class=\"fa fa-info fa-lg\"></span> About</a>\n  <a mat-button routerLinkActive=\"active\" routerLink=\"/menu\"><span class=\"fa fa-list fa-lg\"></span> Menu</a>\n  <a mat-button  routerLinkActive=\"active\" routerLink=\"/contactus\"><span class=\"fa fa-address-card fa-lg\"></span> Contact</a>\n  <span class=\"flex-spacer\"></span>\n  <a class=\"mat-button\" (click)=\"openLoginForm()\">\n    <span class=\"fa fa-sign-in fa-la\">Login</span>\n  </a>\n</mat-toolbar>\n\n<div class=\"container jumbotron\"\n    fxLayout=\"row\"\n    fxLayout.sm=\"column\" \n    fxLayout.xs=\"column\" \n    fxLayoutAlign.xs=\"start center\"\n    fxLayoutAlign.sm=\"start center\" \n    fxLayoutAlign.gt-sm=\"center center\" \n    fxLayoutGap=\"10px\">\n\n  <div fxFlex fxFlex.gt-sm=\"50%\">\n    <h1>Ristorante Con Fusion</h1>\n    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations\n      will tickle your culinary senses!</p>\n  </div>\n  <div fxFlex fxFlex.gt-sm=\"20%\">\n    <img src=\"/assets/images/logo.png\" alt=\"Logo\">\n  </div>\n  <div fxFlex></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #9575CD;\n  color: floralwhite;\n  min-height: 150px; }\n\n.active {\n  background: #4527A0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(dialog) {
        this.dialog = dialog;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openLoginForm = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], { width: '500px', height: '450px' });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign.gt-mat=\"space-around center\" fxLayoutGap=\"10px\">\n  <mat-card *ngIf=\"dish\" [@expand]>\n    <mat-card-header>\n      <div mat-card-avatar></div>\n      <mat-card-title>\n        <h3>{{dish.name | uppercase}}</h3>\n      </mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"{{BaseURL + dish.image}}\" alt={{dish.name}}>\n    <mat-card-content>\n      <p>{{dish.description}}</p>\n    </mat-card-content>\n  </mat-card>\n  <div [hidden]=\"dish || dishErrMess\">\n    <mat-spinner></mat-spinner><h4>Loading... Please wait</h4>\n  </div>\n  <div *ngIf=\"dishErrMess\">\n    <h2>Error</h2>\n    <h4>{{dishErrMess}}</h4>\n  </div>\n\n  <mat-card *ngIf=\"promotion\" [@expand]>\n    <mat-card-header>\n    <div mat-card-avatar></div>\n      <mat-card-title>\n        <h3>{{promotion.name | uppercase}}</h3>\n      </mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"{{BaseURL + promotion.image}}\" alt={{promotion.name}}>\n    <mat-card-content>\n      <p>{{promotion.description}}</p>\n    </mat-card-content>\n  </mat-card>\n  <div [hidden]=\"promotion || promotionErrMess\">\n    <mat-spinner></mat-spinner><h4>Loading... Please wait</h4>\n  </div>\n  <div *ngIf=\"promotionErrMess\">\n    <h2>Error</h2>\n    <h4>{{promotionErrMess}}</h4>\n  </div>\n\n  <mat-card *ngIf=\"leader\" [@expand]>\n      <mat-card-header>\n      <div mat-card-avatar></div>\n        <mat-card-title>\n          <h3>{{leader.name | uppercase}}</h3>\n        </mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"{{BaseURL + leader.image}}\" alt={{leader.name}}>\n      <mat-card-content>\n        <p>{{leader.description}}</p>\n      </mat-card-content>\n    </mat-card>\n    <div [hidden]=\"leader || leaderErrMess\">\n      <mat-spinner></mat-spinner><h4>Loading... Please wait</h4>\n    </div>\n    <div *ngIf=\"leaderErrMess\">\n      <h2>Error</h2>\n      <h4>{{leaderErrMess}}</h4>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__ = __webpack_require__("../../../../../src/app/services/promotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_leader_service__ = __webpack_require__("../../../../../src/app/services/leader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_app_animations__ = __webpack_require__("../../../../../src/app/animations/app.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





//import { expand } from 'rxjs/operators/expand';
var HomeComponent = (function () {
    function HomeComponent(dishservice, promotionservice, leaderService, BaseURL) {
        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.leaderService = leaderService;
        this.BaseURL = BaseURL;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
        this.promotionservice.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (errmess) { return _this.promotionErrMess = errmess; });
        this.leaderService.getFeaturedLeader()
            .subscribe(function (leader) { return _this.leader = leader; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
        host: {
            '[@flyInOut]': 'true',
            'style': 'display:block;'
        },
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_4__animations_app_animations__["b" /* flyInOut */])(),
            Object(__WEBPACK_IMPORTED_MODULE_4__animations_app_animations__["a" /* expand */])()
        ]
    }),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BaseURL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__["a" /* PromotionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__["a" /* PromotionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_leader_service__["a" /* LeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_leader_service__["a" /* LeaderService */]) === "function" && _c || Object, Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar mat-dialog-title color=\"primary\">\n    Login\n    <span class=\"flex-spacer\"></span>\n    <button mat-button mat-dialog-close>&times;</button>\n  </mat-toolbar>\n  <form novalidate #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n  \n    <mat-dialog-content>\n      <p>\n        <mat-input-container dividerColor=\"{{username.invalid && !username.pristine ? 'warn' : 'primary'}}\">\n          <input matInput placeholder=\"Username\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" #username=\"ngModel\" required>\n          <mat-hint>\n            <span [hidden]=\"username.pristine\">\n              <span [hidden]=\"!username.errors?.required\">Username is required</span>\n            </span>\n          </mat-hint>\n        </mat-input-container>\n        <mat-input-container dividerColor=\"{{password.invalid && !password.pristine ? 'warn' : 'primary'}}\">\n          <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" required>\n          <mat-hint>\n              <span [hidden]=\"password.pristine\">\n                <span [hidden]=\"!password.errors?.required\">Password is required</span>\n              </span>\n            </mat-hint>\n        </mat-input-container>\n        <mat-checkbox [(ngModel)]=\"user.remember\" name=\"remember\">Remember Me</mat-checkbox>\n      </p>\n    </mat-dialog-content>\n    <mat-dialog-actions>\n      <span class=\"flex-spacer\"></span>\n      <button mat-button mat-dialog-close>Cancel</button>\n      <button type=\"submit\" mat-button class=\"background-primary text-floral-white\" [disabled]=\"loginForm.form.invalid\">Login</button>\n    </mat-dialog-actions>\n  </form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.user = { username: '', password: '', remember: false };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log("user:", this.user);
        this.dialogRef.close();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n<!-- <mat-list fxFlex>\n  <mat-list-item *ngFor=\"let dish of dishes\">\n    <img mat-list-avatar src={{dish.image}} alt={{dish.name}}>\n    <h1 mat-line> {{dish.name}} </h1>\n    <p mat-line>\n      <span> {{dish.description}} </span>\n    </p>\n  </mat-list-item>\n</mat-list> -->\n  <div fxFlex>\n    <div>\n      <h3>Menu</h3>\n      <hr>\n    </div>\n  </div>\n  <div fxFlex *ngIf=\"dishes\" [@expand]>\n    <mat-grid-list cols=\"2\" rowHeight=\"200px\">\n        <mat-grid-tile  class=\"cursor\" *ngFor=\"let dish of dishes\" [routerLink]=\"['/dishdetail', dish.id]\" appHighlight>\n          <img height=\"200px\" src=\"{{BaseURL + dish.image}}\" alt={{dish.name}}>\n          <mat-grid-tile-footer>\n              <h1 mat-line> {{dish.name | uppercase}} </h1>\n          </mat-grid-tile-footer>\n        </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n  <div [hidden]=\"dishes || errMess\">\n    <mat-spinner></mat-spinner><h4>Loading... Please wait</h4>\n  </div>\n  <div *ngIf=\"errMess\">\n    <h2>Error</h2>\n    <h4>{{errMess}}</h4>\n  </div>\n  <!-- <div fxFlex *ngIf=\"selectedDish\">\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title>\n            <h3>{{selectedDish.name | uppercase}}</h3>\n          </mat-card-title>\n        </mat-card-header>\n        <img mat-card-image src={{selectedDish.image}} alt={{selectedDish.name}}>\n        <mat-card-content>\n          <p>{{selectedDish.description}}\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button>LIKE</button>\n          <button mat-button>SHARE</button>\n        </mat-card-actions>\n      </mat-card>\n    </div> -->\n    <!-- <app-dishdetail [dish]=\"selectedDish\" fxFlex></app-dishdetail> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cursor {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_app_animations__ = __webpack_require__("../../../../../src/app/animations/app.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MenuComponent = (function () {
    //selectedDish: Dish;
    function MenuComponent(dishService, BaseURL) {
        this.dishService = dishService;
        this.BaseURL = BaseURL;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmess) { return _this.errMess = errmess; });
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        host: {
            '[@flyInOut]': 'true',
            'style': 'display:block;'
        },
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__animations_app_animations__["b" /* flyInOut */])(),
            Object(__WEBPACK_IMPORTED_MODULE_2__animations_app_animations__["a" /* expand */])()
        ]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BaseURL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */]) === "function" && _a || Object, Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/dish.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DishService = (function () {
    function DishService(restangular) {
        this.restangular = restangular;
    }
    DishService.prototype.getDishes = function () {
        return this.restangular.all('dishes').getList();
    };
    DishService.prototype.getDish = function (id) {
        return this.restangular.one('dishes', id).get();
    };
    DishService.prototype.getFeaturedDish = function () {
        return this.restangular.all('dishes').getList({ featured: true })
            .map(function (dishes) { return dishes[0]; });
    };
    DishService.prototype.getDishIds = function () {
        return this.getDishes()
            .map(function (dishes) { return dishes.map(function (dish) { return dish.id; }); })
            .catch(function (error) { return error; });
    };
    return DishService;
}());
DishService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"]) === "function" && _a || Object])
], DishService);

var _a;
//# sourceMappingURL=dish.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/feedback.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_restangular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackService = (function () {
    function FeedbackService(restangular) {
        this.restangular = restangular;
    }
    FeedbackService.prototype.submitFeedback = function (data) {
        return this.restangular.all("feedback").post(data);
    };
    return FeedbackService;
}());
FeedbackService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"]) === "function" && _a || Object])
], FeedbackService);

var _a;
//# sourceMappingURL=feedback.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/leader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import 'rxjs/add/operator/toPromise';





var LeaderService = (function () {
    function LeaderService(restangular) {
        this.restangular = restangular;
    }
    // getLeaders(): Observable<Leader[]> {
    //   return this.http.get(baseURL + 'LEADERS')
    //   .map(res => {return this.processHttpmsgService.extractData(res)})
    //   .catch(error=>{return this.processHttpmsgService.handleError(error)});
    // }
    // getLeader(id: number): Observable<Leader> {
    //   return this.http.get(baseURL + 'LEADERS/'+id)
    //   .map(res => {return this.processHttpmsgService.extractData(res)})
    //   .catch(error=>{return this.processHttpmsgService.handleError(error)});
    // }
    // getFeaturedLeader(): Observable<Leader> {
    //   return this.http.get(baseURL + 'LEADERS?featured=true')
    //   .map(res => {return this.processHttpmsgService.extractData(res)[0]})
    //   .catch(error=>{return this.processHttpmsgService.handleError(error)});
    // }
    LeaderService.prototype.getLeaders = function () {
        return this.restangular.all('LEADERS').getList();
    };
    LeaderService.prototype.getLeader = function (id) {
        return this.restangular.one('LEADERS', id).get();
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        return this.restangular.all('LEADERS').getList({ featured: true })
            .map(function (LEADERS) { return LEADERS[0]; });
    };
    return LeaderService;
}());
LeaderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"]) === "function" && _a || Object])
], LeaderService);

var _a;
//# sourceMappingURL=leader.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/process-httpmsg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHttpmsgService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_Observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProcessHttpmsgService = (function () {
    function ProcessHttpmsgService() {
    }
    ProcessHttpmsgService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProcessHttpmsgService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    return ProcessHttpmsgService;
}());
ProcessHttpmsgService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ProcessHttpmsgService);

//# sourceMappingURL=process-httpmsg.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/promotion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/toPromise';




var PromotionService = (function () {
    function PromotionService(restangular) {
        this.restangular = restangular;
    }
    // getPromotions(): Observable<Promotion[]> {
    //   return this.http.get(baseURL + 'PROMOTIONS')
    //   .map(res => {return this.processHttpmsgService.extractData(res)})
    //   .catch(error=>{return this.processHttpmsgService.handleError(error)});
    // }
    // getPromotion(id: number): Observable<Promotion>{
    //   return this.http.get(baseURL + 'PROMOTIONS/'+id)
    //   .map(res => {return this.processHttpmsgService.extractData(res)})
    //   .catch(error=>{return this.processHttpmsgService.handleError(error)});
    // }
    // getFeaturedPromotion(): Observable<Promotion> {
    //   return this.http.get(baseURL + 'PROMOTIONS?featured=true')
    //   .map(res => {return this.processHttpmsgService.extractData(res)[0]})
    //   .catch(error=>{return this.processHttpmsgService.handleError(error)});
    // }
    PromotionService.prototype.getPromotions = function () {
        return this.restangular.all('PROMOTIONS').getList();
    };
    PromotionService.prototype.getPromotion = function (id) {
        return this.restangular.one('PROMOTIONS', id).get();
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        return this.restangular.all('PROMOTIONS').getList({ featured: true })
            .map(function (PROMOTIONS) { return PROMOTIONS[0]; });
    };
    return PromotionService;
}());
PromotionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"]) === "function" && _a || Object])
], PromotionService);

var _a;
//# sourceMappingURL=promotion.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/baseUrl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
var baseURL = 'http://localhost:3000/';
//# sourceMappingURL=baseUrl.js.map

/***/ }),

/***/ "../../../../../src/app/shared/baseurl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
var baseURL = 'http://localhost:3000/';
//# sourceMappingURL=baseurl.js.map

/***/ }),

/***/ "../../../../../src/app/shared/feedback.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Feedback */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactType; });
var Feedback = (function () {
    function Feedback() {
    }
    return Feedback;
}());

;
var ContactType = ['None', 'Tel', 'Email'];
//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ "../../../../../src/app/shared/restConfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RestangularConfigFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseurl__ = __webpack_require__("../../../../../src/app/shared/baseurl.ts");

// Function for settting the default restangular configuration
function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(__WEBPACK_IMPORTED_MODULE_0__baseurl__["a" /* baseURL */]);
}
//# sourceMappingURL=restConfig.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map