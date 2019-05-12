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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-tasks></app-tasks>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _tasks_tasks_add_tasks_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/tasks-add/tasks-add.component */ "./src/app/tasks/tasks-add/tasks-add.component.ts");
/* harmony import */ var _tasks_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/tasks-list/tasks-list.component */ "./src/app/tasks/tasks-list/tasks-list.component.ts");
/* harmony import */ var _tasks_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/task.service */ "./src/app/tasks/task.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"],
                _tasks_tasks_add_tasks_add_component__WEBPACK_IMPORTED_MODULE_5__["TasksAddComponent"],
                _tasks_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_6__["TasksListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [_tasks_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/tasks/task.model.ts":
/*!*************************************!*\
  !*** ./src/app/tasks/task.model.ts ***!
  \*************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(name, completed, dueDate) {
        this.name = name;
        this.completed = completed;
        this.dueDate = dueDate;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/tasks/task.service.ts":
/*!***************************************!*\
  !*** ./src/app/tasks/task.service.ts ***!
  \***************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var TaskService = /** @class */ (function () {
    function TaskService(httpClient) {
        this.httpClient = httpClient;
        this.URL = "/api/v1/tasks";
        this.onTaskAded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    TaskService.prototype.getTasks = function () {
        return this.httpClient.get(this.URL);
    };
    TaskService.prototype.saveTask = function (task, checked) {
        task.completed = checked;
        return this.httpClient.post(this.URL + "/save", task);
    };
    TaskService.prototype.addTask = function (task) {
        return this.httpClient.post(this.URL + "/save", task);
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/tasks/tasks-add/tasks-add.component.html":
/*!**********************************************************!*\
  !*** ./src/app/tasks/tasks-add/tasks-add.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <input type=\"text\"\n         class=\"form-control\"\n         placeholder=\"Add New Task\"\n         (keyup.enter)=\"onTaskAdd($event)\"\n         [(ngModel)]=\"value\" />\n</div>\n"

/***/ }),

/***/ "./src/app/tasks/tasks-add/tasks-add.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/tasks/tasks-add/tasks-add.component.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLWFkZC90YXNrcy1hZGQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/tasks/tasks-add/tasks-add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tasks/tasks-add/tasks-add.component.ts ***!
  \********************************************************/
/*! exports provided: TasksAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksAddComponent", function() { return TasksAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/tasks/task.service.ts");
/* harmony import */ var _task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task.model */ "./src/app/tasks/task.model.ts");




var TasksAddComponent = /** @class */ (function () {
    function TasksAddComponent(taskService) {
        this.taskService = taskService;
        this.value = "";
    }
    TasksAddComponent.prototype.ngOnInit = function () {
    };
    TasksAddComponent.prototype.onTaskAdd = function (event) {
        var _this = this;
        var task = new _task_model__WEBPACK_IMPORTED_MODULE_3__["Task"](event.target.value, false, this.getTodayAsString());
        this.taskService.addTask(task).subscribe(function (newTask) {
            _this.value = "";
            _this.taskService.onTaskAded.emit(newTask);
        });
    };
    TasksAddComponent.prototype.getTodayAsString = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10)
            dd = "0" + dd;
        if (mm < 10)
            mm = "0" + mm;
        return mm + "/" + dd + "/" + yyyy;
    };
    TasksAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks-add',
            template: __webpack_require__(/*! ./tasks-add.component.html */ "./src/app/tasks/tasks-add/tasks-add.component.html"),
            styles: [__webpack_require__(/*! ./tasks-add.component.sass */ "./src/app/tasks/tasks-add/tasks-add.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]])
    ], TasksAddComponent);
    return TasksAddComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks-list/tasks-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/tasks/tasks-list/tasks-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li *ngFor=\"let task of tasks\" class=\"list-group-item\">\n    <div class=\"task-checkbox\">\n      <input type=\"checkbox\"\n             class=\"list-child\"\n             (change)=\"onTaskChange($event, task)\"\n             [checked]=\"task.completed\"/>\n      <span> {{ task.name }}</span>\n      <span class=\"label float-lg-right status\"\n            [class.complated]=\"task.completed\"> {{ task.dueDate }} </span>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/tasks/tasks-list/tasks-list.component.sass":
/*!************************************************************!*\
  !*** ./src/app/tasks/tasks-list/tasks-list.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status {\n  background: #c0392b; }\n  .status.complated {\n    background: #2ecc71; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndXJrYW5jYWtpci93b3Jrc3BhY2UvVGFza3Mvc3JjL21haW4vZnJvbnRlbmQvc3JjL2FwcC90YXNrcy90YXNrcy1saXN0L3Rhc2tzLWxpc3QuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUIsRUFBQTtFQURyQjtJQUdJLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFza3MvdGFza3MtbGlzdC90YXNrcy1saXN0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cyB7XG4gIGJhY2tncm91bmQ6ICNjMDM5MmI7XG4gICYuY29tcGxhdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmVjYzcxOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tasks/tasks-list/tasks-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tasks/tasks-list/tasks-list.component.ts ***!
  \**********************************************************/
/*! exports provided: TasksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksListComponent", function() { return TasksListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/tasks/task.service.ts");



var TasksListComponent = /** @class */ (function () {
    function TasksListComponent(taskService) {
        this.taskService = taskService;
    }
    TasksListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
        }, function (error) { return console.log(error); });
        this.taskService.onTaskAded.subscribe(function (newTask) { return _this.tasks.push(newTask); });
    };
    TasksListComponent.prototype.onTaskChange = function (event, task) {
        this.taskService.saveTask(task, event.target.checked).subscribe();
    };
    TasksListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks-list',
            template: __webpack_require__(/*! ./tasks-list.component.html */ "./src/app/tasks/tasks-list/tasks-list.component.html"),
            styles: [__webpack_require__(/*! ./tasks-list.component.sass */ "./src/app/tasks/tasks-list/tasks-list.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]])
    ], TasksListComponent);
    return TasksListComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.html":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-2\">&nbsp;</div>\n  <div class=\"col-md-8\">\n    <div id=\"tasksPanel\" class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">My Tasks</h3>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <app-tasks-add></app-tasks-add>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <app-tasks-list></app-tasks-list>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-2\">&nbsp;</div>\n</div>\n"

/***/ }),

/***/ "./src/app/tasks/tasks.component.sass":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: royalblue; }\n\n#tasksPanel {\n  margin-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndXJrYW5jYWtpci93b3Jrc3BhY2UvVGFza3Mvc3JjL21haW4vZnJvbnRlbmQvc3JjL2FwcC90YXNrcy90YXNrcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFza3MvdGFza3MuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gIGNvbG9yOiByb3lhbGJsdWU7IH1cblxuI3Rhc2tzUGFuZWwge1xuICBtYXJnaW4tdG9wOiA1MHB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.sass */ "./src/app/tasks/tasks.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gurkancakir/workspace/Tasks/src/main/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map