(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _codecamps_codecamps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codecamps/codecamps.component */ "./src/app/codecamps/codecamps.component.ts");
/* harmony import */ var _create_codecamp_create_codecamp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-codecamp/create-codecamp.component */ "./src/app/create-codecamp/create-codecamp.component.ts");
/* harmony import */ var _update_codecamp_update_codecamp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-codecamp/update-codecamp.component */ "./src/app/update-codecamp/update-codecamp.component.ts");






var routes = [
    {
        path: 'codecamps', component: _codecamps_codecamps_component__WEBPACK_IMPORTED_MODULE_3__["CodecampsComponent"]
    },
    { path: '',
        redirectTo: '/codecamps',
        pathMatch: 'full'
    },
    {
        path: 'create', component: _create_codecamp_create_codecamp_component__WEBPACK_IMPORTED_MODULE_4__["CreateCodecampComponent"]
    },
    {
        path: 'update/:id', component: _update_codecamp_update_codecamp_component__WEBPACK_IMPORTED_MODULE_5__["UpdateCodecampComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"app-content\" >\n\n   \n    <mat-card>\n      <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n      <mat-menu #menu=\"matMenu\">\n        <a routerLink=\"/codecamps\" mat-menu-item>Codecamps</a>\n        <a routerLink=\"/create\" mat-menu-item>Create Codecamp Event</a>\n      </mat-menu>\n  \n    </mat-card>\n  \n    <router-outlet></router-outlet>\n  \n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'codecamp-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _codecamps_codecamps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./codecamps/codecamps.component */ "./src/app/codecamps/codecamps.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _create_codecamp_create_codecamp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-codecamp/create-codecamp.component */ "./src/app/create-codecamp/create-codecamp.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _update_codecamp_update_codecamp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-codecamp/update-codecamp.component */ "./src/app/update-codecamp/update-codecamp.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _codecamps_codecamps_component__WEBPACK_IMPORTED_MODULE_5__["CodecampsComponent"],
                _create_codecamp_create_codecamp_component__WEBPACK_IMPORTED_MODULE_7__["CreateCodecampComponent"],
                _update_codecamp_update_codecamp_component__WEBPACK_IMPORTED_MODULE_9__["UpdateCodecampComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/codecamps/codecamps.component.css":
/*!***************************************************!*\
  !*** ./src/app/codecamps/codecamps.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .mat-list-item:nth-child(odd){\n    background-color: #efefef;\n} */\n\n.align-right{\n    display: inline-block;\n    width:100%;\n    text-align: right;\n}\n\n.mat-list-item a.spaced{\n    margin: 10px 10px 0 0;\n    border-radius: 3px;\n    padding: 8px;\n    color: white;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.mat-list-item a.spaced:hover{\n    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.4); \n}\n\n.mat-list-item a.danger{\n    background-color: tomato;\n}\n\n.mat-list-item a.no-danger{\n    background-color:yellowgreen;\n}\n\n.mat-list-base{\n    width:100%;\n}\n\ndl {\n    background: #f9f9f9;\n    padding: 10px;\n    margin-bottom: 20px;\n    margin-left: 0;\n    width: 100%;\n  }\n\ndt {\n    font-weight: bold;\n    margin-left: 0;\n  }\n\ndd {\n    margin-left: 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29kZWNhbXBzL2NvZGVjYW1wcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVIO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBVztFQUNiOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29kZWNhbXBzL2NvZGVjYW1wcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm1hdC1saXN0LWl0ZW06bnRoLWNoaWxkKG9kZCl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbn0gKi9cblxuLmFsaWduLXJpZ2h0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDoxMDAlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWF0LWxpc3QtaXRlbSBhLnNwYWNlZHtcbiAgICBtYXJnaW46IDEwcHggMTBweCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYXQtbGlzdC1pdGVtIGEuc3BhY2VkOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweCByZ2JhKDAsMCwwLDAuNCk7IFxufVxuLm1hdC1saXN0LWl0ZW0gYS5kYW5nZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xufVxuLm1hdC1saXN0LWl0ZW0gYS5uby1kYW5nZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp5ZWxsb3dncmVlbjtcbn1cblxuLm1hdC1saXN0LWJhc2V7XG4gICAgd2lkdGg6MTAwJTtcbn1cblxuZGwge1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBkdCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgXG4gIGRkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/codecamps/codecamps.component.html":
/*!****************************************************!*\
  !*** ./src/app/codecamps/codecamps.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <ul>\n  <li *ngFor=\"let codecamp of codecamps\">\n    {{codecamp.name}} - {{codecamp.venue}} | <button [routerLink]=\"['/update', codecamp.campId]\">update</button>\n    | <button (click)=\"deleteCodecamp(codecamp.venue)\">delete</button>\n  </li>\n</ul> -->\n\n\n<mat-accordion>\n\n  <mat-expansion-panel *ngFor=\"let event of codecamps\">\n    <mat-expansion-panel-header>\n      {{event.name}}\n    </mat-expansion-panel-header>\n    <mat-list role=\"list\">\n      <mat-list-item role=\"listitem\">\n        <mat-icon color=\"warn\">location_on</mat-icon> <span class=\"align-right\">{{event.venue}}</span>\n      </mat-list-item>\n      <mat-list-item role=\"listitem\">\n        <mat-icon color=\"warn\">access_time</mat-icon> <span class=\"align-right\">{{event.duration}} hr<span *ngIf=\"event.duration > 1\">s</span></span>\n      </mat-list-item>\n      <mat-list-item role=\"listitem\">\n        <mat-icon color=\"warn\">date_range</mat-icon> <span\n          class=\"align-right\">{{event.eventDate | date:'mediumDate'}}</span>\n      </mat-list-item>\n      <div class=\"talks-div\" *ngIf=\"event.talks!=undefined && event.talks.length>0\">\n          <h3>Talks</h3>\n          <ng-container *ngFor=\"let talk of event.talks\">\n            <mat-list-item role=\"listitem\">\n                <mat-list>\n                  <mat-list-item>\n                    <dl>\n                      <dt>{{talk.title}}</dt>\n                      <dd style=\"font-size: 0.75em;\">{{talk.speaker.firstName}} {{talk.speaker.lastName}}</dd>\n                    </dl> \n                  </mat-list-item>\n                </mat-list>\n            </mat-list-item>\n          </ng-container>\n        </div>\n      <mat-list-item role=\"listitem\">\n        <a class=\"list-group-item list-group-item-action spaced no-danger\" [routerLink]=\"['/update', event.campId]\">Edit Event</a>\n        <a class=\"list-group-item list-group-item-action spaced danger\" (click)=\"deleteCodecamp(event.venue)\">Delete Event</a>\n      </mat-list-item>\n    </mat-list>\n\n  </mat-expansion-panel>\n\n</mat-accordion>"

/***/ }),

/***/ "./src/app/codecamps/codecamps.component.ts":
/*!**************************************************!*\
  !*** ./src/app/codecamps/codecamps.component.ts ***!
  \**************************************************/
/*! exports provided: CodecampsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodecampsComponent", function() { return CodecampsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_codecamp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/codecamp.service */ "./src/app/services/codecamp.service.ts");



var CodecampsComponent = /** @class */ (function () {
    function CodecampsComponent(codecampService) {
        this.codecampService = codecampService;
    }
    CodecampsComponent.prototype.ngOnInit = function () {
        this.getAllCodecamps();
    };
    CodecampsComponent.prototype.getAllCodecamps = function () {
        var _this = this;
        this.codecampService.getAllCodecamps().subscribe(function (events) { _this.codecamps = events; console.log(_this.codecamps); });
    };
    CodecampsComponent.prototype.deleteCodecamp = function (venue) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.codecampService.deleteCodecamp(venue).subscribe(function (events) { _this.getAllCodecamps(); }, function (err) { console.log(err); });
        }
    };
    CodecampsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-codecamps',
            template: __webpack_require__(/*! ./codecamps.component.html */ "./src/app/codecamps/codecamps.component.html"),
            styles: [__webpack_require__(/*! ./codecamps.component.css */ "./src/app/codecamps/codecamps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_codecamp_service__WEBPACK_IMPORTED_MODULE_2__["CodecampService"]])
    ], CodecampsComponent);
    return CodecampsComponent;
}());



/***/ }),

/***/ "./src/app/create-codecamp/create-codecamp.component.css":
/*!***************************************************************!*\
  !*** ./src/app/create-codecamp/create-codecamp.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1jb2RlY2FtcC9jcmVhdGUtY29kZWNhbXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/create-codecamp/create-codecamp.component.html":
/*!****************************************************************!*\
  !*** ./src/app/create-codecamp/create-codecamp.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add New Codecamp</h3>\n<!-- <form class=\"formwidth\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"example-full-width\">\n    <input required  placeholder=\"Title\" id=\"name\" [(ngModel)]=\"codecamp.name\" name=\"name\">\n  </div>\n  <div class=\"example-full-width\">\n    <input required  placeholder=\"Venue\" id=\"venue\" [(ngModel)]=\"codecamp.venue\" name=\"venue\">\n  </div>\n  <div>\n      <input type=\"date\" required placeholder=\"Choose a date\" [(ngModel)]=\"codecamp.eventDate\" name=\"eventDate\" >\n    </div>\n  <div class=\"example-full-width\">\n    <input type=\"number\" required  placeholder=\"Duration\" id=\"duration\" [(ngModel)]=\"codecamp.duration\"\n      name=\"duration\">\n  </div></form> -->\n<form class=\"formwidth\" (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\n  <div>\n    <mat-form-field class=\"example-full-width\">\n      <input required matInput placeholder=\"Title\" id=\"name\" [(ngModel)]=\"codecamp.name\" name=\"name\">\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field class=\"example-full-width\">\n      <input required matInput placeholder=\"Venue\" id=\"venue\" [(ngModel)]=\"codecamp.venue\" name=\"venue\">\n    </mat-form-field>\n  </div>\n  <!-- <mat-form-field class=\"example-full-width\">\n    <input type=\"date\" required matInput placeholder=\"Date\" id=\"ccDate\" [(ngModel)]=\"event.ccDate\" name=\"ccDate\">\n  </mat-form-field> -->\n  <div>\n    <mat-form-field>\n      <input required matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"\n        [(ngModel)]=\"codecamp.eventDate\" name=\"eventDate\" #ccDate>\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field class=\"example-full-width\">\n      <input type=\"number\" required matInput placeholder=\"Duration\" id=\"duration\" [(ngModel)]=\"codecamp.duration\"\n        name=\"duration\">\n    </mat-form-field>\n  </div>\n  <button mat-flat-button color=\"warn\">Create Codecamp</button>\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/create-codecamp/create-codecamp.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/create-codecamp/create-codecamp.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateCodecampComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCodecampComponent", function() { return CreateCodecampComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_codecamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/codecamp */ "./src/app/entities/codecamp.ts");
/* harmony import */ var _services_codecamp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/codecamp.service */ "./src/app/services/codecamp.service.ts");




var CreateCodecampComponent = /** @class */ (function () {
    function CreateCodecampComponent(codecampService) {
        this.codecampService = codecampService;
        this.codecamp = new _entities_codecamp__WEBPACK_IMPORTED_MODULE_2__["CodeCamp"]();
    }
    CreateCodecampComponent.prototype.ngOnInit = function () {
    };
    CreateCodecampComponent.prototype.onSubmit = function () {
        var _this = this;
        this.codecampService.createCodecamp(this.codecamp).subscribe(function (returnedData) {
            console.log(returnedData);
            _this.codecamp = new _entities_codecamp__WEBPACK_IMPORTED_MODULE_2__["CodeCamp"](); // to clear the form
        });
    };
    CreateCodecampComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-codecamp',
            template: __webpack_require__(/*! ./create-codecamp.component.html */ "./src/app/create-codecamp/create-codecamp.component.html"),
            styles: [__webpack_require__(/*! ./create-codecamp.component.css */ "./src/app/create-codecamp/create-codecamp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_codecamp_service__WEBPACK_IMPORTED_MODULE_3__["CodecampService"]])
    ], CreateCodecampComponent);
    return CreateCodecampComponent;
}());



/***/ }),

/***/ "./src/app/entities/codecamp.ts":
/*!**************************************!*\
  !*** ./src/app/entities/codecamp.ts ***!
  \**************************************/
/*! exports provided: CodeCamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeCamp", function() { return CodeCamp; });
var CodeCamp = /** @class */ (function () {
    function CodeCamp(campId, name, venue, eventDate, duration, talks) {
        this.campId = campId;
        this.name = name;
        this.venue = venue;
        this.eventDate = eventDate;
        this.duration = duration;
        this.talks = talks;
    }
    return CodeCamp;
}());



/***/ }),

/***/ "./src/app/entities/speaker.ts":
/*!*************************************!*\
  !*** ./src/app/entities/speaker.ts ***!
  \*************************************/
/*! exports provided: Speaker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Speaker", function() { return Speaker; });
var Speaker = /** @class */ (function () {
    function Speaker(speakerId, firstName, lastName, company, companyUrl) {
        this.speakerId = speakerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.companyUrl = companyUrl;
    }
    return Speaker;
}());



/***/ }),

/***/ "./src/app/entities/talk.ts":
/*!**********************************!*\
  !*** ./src/app/entities/talk.ts ***!
  \**********************************/
/*! exports provided: Talk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Talk", function() { return Talk; });
var Talk = /** @class */ (function () {
    function Talk(talkId, title, speaker) {
        this.talkId = talkId;
        this.title = title;
        this.speaker = speaker;
    }
    return Talk;
}());



/***/ }),

/***/ "./src/app/services/codecamp.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/codecamp.service.ts ***!
  \**********************************************/
/*! exports provided: CodecampService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodecampService", function() { return CodecampService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CodecampService = /** @class */ (function () {
    function CodecampService(http) {
        this.http = http;
        // apiUrl = 'https://backendrepo.azurewebsites.net/api/camps/';
        this.apiUrl = 'https://indicia-webapi.azurewebsites.net/api/camps/';
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8', 'X-Requested-With': 'XMLHttpRequest' })
        };
    }
    CodecampService.prototype.getAllCodecamps = function () {
        return this.http.get(this.apiUrl + '?includeTalks=true');
    };
    CodecampService.prototype.getCodecampById = function (id) {
        return this.http.get(this.apiUrl + id + '?includeTalks=true');
    };
    CodecampService.prototype.createCodecamp = function (codecamp) {
        return this.http.post(this.apiUrl, codecamp, this.headers);
    };
    CodecampService.prototype.deleteCodecamp = function (venue) {
        return this.http.delete(this.apiUrl + venue, this.headers);
    };
    CodecampService.prototype.updateCodecamp = function (codecamp) {
        return this.http.put(this.apiUrl + codecamp.venue, codecamp, this.headers);
    };
    CodecampService.prototype.getSpeakers = function () {
        return this.http.get('https://backendrepo.azurewebsites.net/api/Speakers');
    };
    CodecampService.prototype.addTalk = function (venue, talk) {
        return this.http.post(this.apiUrl + venue + '/talks', talk, this.headers);
    };
    CodecampService.prototype.deleteTalk = function (id, venue) {
        return this.http.delete(this.apiUrl + venue + '/Talks/' + id, this.headers);
    };
    CodecampService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CodecampService);
    return CodecampService;
}());



/***/ }),

/***/ "./src/app/update-codecamp/update-codecamp.component.css":
/*!***************************************************************!*\
  !*** ./src/app/update-codecamp/update-codecamp.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-base .mat-list-item:nth-child(even){\n    background: #f00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLWNvZGVjYW1wL3VwZGF0ZS1jb2RlY2FtcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlLWNvZGVjYW1wL3VwZGF0ZS1jb2RlY2FtcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW06bnRoLWNoaWxkKGV2ZW4pe1xuICAgIGJhY2tncm91bmQ6ICNmMDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/update-codecamp/update-codecamp.component.html":
/*!****************************************************************!*\
  !*** ./src/app/update-codecamp/update-codecamp.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h3>Update Codecamp: {{codecamp.name}}</h3>\n<!-- <form class=\"formwidth\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"example-full-width\">\n    <input required  placeholder=\"Title\" id=\"name\" [(ngModel)]=\"codecamp.name\" name=\"name\">\n  </div>\n  <div class=\"example-full-width\">\n    <input required  placeholder=\"Venue\" id=\"venue\" [(ngModel)]=\"codecamp.venue\" name=\"venue\">\n  </div>\n  <div>\n      <input required placeholder=\"Choose a date\" [(ngModel)]=\"codecamp.eventDate\" name=\"eventDate\" >\n    </div>\n  <div class=\"example-full-width\">\n    <input type=\"number\" required  placeholder=\"Duration\" id=\"duration\" [(ngModel)]=\"codecamp.duration\"\n      name=\"duration\">\n  </div>\n  <button>Update Codecamp</button>\n</form> -->\n\n<form class=\"formwidth\" (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\n  <div>\n    <mat-form-field class=\"example-full-width\">\n\n      <input required matInput placeholder=\"Title\" id=\"name\" [(ngModel)]=\"codecamp.name\" name=\"name\">\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field class=\"example-full-width\">\n\n      <input required matInput placeholder=\"Venue\" id=\"venue\" [(ngModel)]=\"codecamp.venue\" name=\"venue\">\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field>\n      <input required matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"codecamp.eventDate\"\n        name=\"eventDate\" #ccDate>\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field class=\"example-full-width\">\n      <input type=\"number\" required matInput placeholder=\"Duration\" id=\"duration\" [(ngModel)]=\"codecamp.duration\"\n        name=\"duration\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"talks-div\" *ngIf=\"codecamp.talks!=undefined && codecamp.talks.length>0\">\n    <h3>Talks</h3>\n    <ng-container *ngFor=\"let talk of codecamp.talks\">\n      <mat-list-item role=\"listitem\">\n        <mat-list>\n          <mat-list-item>\n            <dl>\n              <dt contenteditable=\"true\" id=\"talkTitle{{talk.talkId}}\">{{talk.title}}</dt>\n              <dd style=\"font-size: 0.75em;\">{{talk.speaker.firstName}} {{talk.speaker.lastName}}\n                <button type=\"button\" mat-flat-button color=\"warn\" style=\"position:absolute;right:0;top:0;\" (click)=\"deleteTalk(talk.talkId)\">Delete Talk</button>\n              </dd>\n            </dl>\n          </mat-list-item>\n        </mat-list>\n      </mat-list-item>\n    </ng-container>\n  </div>\n\n  <h3>Add New Talk to {{codecamp.name}}</h3>\n    <mat-form-field class=\"example-full-width\">\n      <input type=\"text\" matInput placeholder=\"New Talk Title\" id=\"newTalkTitle\" name=\"newTalkTitle\"\n        [(ngModel)]=\"talk.title\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n        <mat-select #speakerSelect  id=\"speakers\" name=\"speakers\" [(ngModel)]=\"speaker.speakerId\">\n          <mat-option value=\"{{speaker.speakerId}}\" *ngFor=\"let speaker of speakers\">{{speaker.firstName}} {{speaker.lastName}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <div>\n      <button type=\"button\" mat-flat-button color=\"accent\" (click)=\"addTalk()\">Add Talk to Codecamp</button>\n    </div>\n    <div style=\"margin-top: 10px;\">\n      <button mat-flat-button color=\"warn\" style=\"margin-bottom: 10px;\">Save Changes</button>\n    </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/update-codecamp/update-codecamp.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/update-codecamp/update-codecamp.component.ts ***!
  \**************************************************************/
/*! exports provided: UpdateCodecampComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCodecampComponent", function() { return UpdateCodecampComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_codecamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/codecamp */ "./src/app/entities/codecamp.ts");
/* harmony import */ var _services_codecamp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/codecamp.service */ "./src/app/services/codecamp.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entities_talk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entities/talk */ "./src/app/entities/talk.ts");
/* harmony import */ var _entities_speaker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entities/speaker */ "./src/app/entities/speaker.ts");







var UpdateCodecampComponent = /** @class */ (function () {
    function UpdateCodecampComponent(codecampService, route) {
        this.codecampService = codecampService;
        this.route = route;
        this.codecamp = new _entities_codecamp__WEBPACK_IMPORTED_MODULE_2__["CodeCamp"]();
        this.talk = new _entities_talk__WEBPACK_IMPORTED_MODULE_5__["Talk"]();
        this.speaker = new _entities_speaker__WEBPACK_IMPORTED_MODULE_6__["Speaker"]();
    }
    UpdateCodecampComponent.prototype.ngOnInit = function () {
        this.getCodecampById();
        this.getSpeakers();
    };
    UpdateCodecampComponent.prototype.getSpeakers = function () {
        var _this = this;
        this.codecampService.getSpeakers().subscribe(function (returnedData) {
            _this.speakers = returnedData;
            console.log(returnedData);
        });
    };
    UpdateCodecampComponent.prototype.getCodecampById = function () {
        var _this = this;
        // get the camp ID from the URL parameters
        this.route.params.subscribe(function (params) {
            _this.campId = params.id;
            console.log(_this.campId);
        });
        this.codecampService.getCodecampById(this.campId).subscribe(function (codecamp) { return _this.codecamp = codecamp; });
    };
    UpdateCodecampComponent.prototype.onSubmit = function () {
        console.log('Submit called');
        console.log(this.codecamp);
        // this.codecamp.talks = [];
        this.codecampService.updateCodecamp(this.codecamp).subscribe(function (returnedData) { return console.log(returnedData); });
    };
    UpdateCodecampComponent.prototype.addTalk = function () {
        var _this = this;
        // get the speaker
        // for (const speaker of this.speakers) {
        //   if (speaker.speakerId === Number(select.value)) {
        //     this.speaker = speaker;
        //   }
        // }
        this.talk.speaker = this.speaker;
        console.log(this.speaker);
        this.codecampService.addTalk(this.codecamp.venue, this.talk).subscribe(function (talk) {
            alert('Talk Added');
            _this.getCodecampById();
            _this.talk = new _entities_talk__WEBPACK_IMPORTED_MODULE_5__["Talk"](); // clear the form
            _this.speaker = new _entities_speaker__WEBPACK_IMPORTED_MODULE_6__["Speaker"]();
        });
    };
    UpdateCodecampComponent.prototype.deleteTalk = function (id) {
        var _this = this;
        this.codecampService.deleteTalk(id, this.codecamp.venue).subscribe(function (returnedData) { return _this.getCodecampById(); });
    };
    UpdateCodecampComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-codecamp',
            template: __webpack_require__(/*! ./update-codecamp.component.html */ "./src/app/update-codecamp/update-codecamp.component.html"),
            styles: [__webpack_require__(/*! ./update-codecamp.component.css */ "./src/app/update-codecamp/update-codecamp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_codecamp_service__WEBPACK_IMPORTED_MODULE_3__["CodecampService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], UpdateCodecampComponent);
    return UpdateCodecampComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/DevOps Course/codecamp-frontend/codecamp-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map