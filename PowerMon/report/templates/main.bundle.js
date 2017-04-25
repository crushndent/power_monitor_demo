webpackJsonp([1,5],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports = "<h2> Chart Demo </h2>\n<div style=\"width:80%; height:80%\">\n  <!--This is line graph tag. It reads dataset from app.component.ts - lineChartData and other information... -->\n  <canvas baseChart [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [legend]=\"lineChartLegend\"\n    [chartType]=\"lineChartType\"></canvas>\n</div>"

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(80);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
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
    function AppComponent(http) {
        this.http = http;
        //Is graph responsive or fixed option
        this.lineChartOptions = {
            responsive: true
        };
        //Legend flag
        this.lineChartLegend = true;
        //Chart type.
        this.lineChartType = 'line';
        //Hard coding graph data as server is giving error.
        this.allGraphData = [
            {
                "Irms": "4.070",
                "reported_time": "2017-04-24T00:18:21.348Z",
                "Pa": "964.950",
                "Vrms": "119.930",
                "Irms2": "4.660"
            },
            {
                "Irms": "4.100",
                "reported_time": "2017-04-24T00:18:26.894Z",
                "Pa": "964.300",
                "Vrms": "119.890",
                "Irms2": "4.650"
            },
            {
                "Irms": "4.100",
                "reported_time": "2017-04-24T00:18:32.463Z",
                "Pa": "969.780",
                "Vrms": "119.990",
                "Irms2": "4.680"
            },
            {
                "Irms": "4.020",
                "reported_time": "2017-04-24T00:18:38.004Z",
                "Pa": "957.100",
                "Vrms": "119.880",
                "Irms2": "4.650"
            },
            {
                "Irms": "4.110",
                "reported_time": "2017-04-24T00:18:43.583Z",
                "Pa": "968.200",
                "Vrms": "119.980",
                "Irms2": "4.660"
            },
            {
                "Irms": "4.110",
                "reported_time": "2017-04-24T00:18:49.159Z",
                "Pa": "970.050",
                "Vrms": "119.860",
                "Irms2": "4.690"
            },
            {
                "Irms": "4.060",
                "reported_time": "2017-04-24T00:18:54.679Z",
                "Pa": "962.290",
                "Vrms": "119.950",
                "Irms2": "4.650"
            },
            {
                "Irms": "4.140",
                "reported_time": "2017-04-24T00:19:00.205Z",
                "Pa": "968.270",
                "Vrms": "119.850",
                "Irms2": "4.640"
            },
            {
                "Irms": "4.090",
                "reported_time": "2017-04-24T00:19:05.792Z",
                "Pa": "964.500",
                "Vrms": "119.920",
                "Irms2": "4.640"
            },
            {
                "Irms": "4.180",
                "reported_time": "2017-04-24T00:19:11.326Z",
                "Pa": "973.190",
                "Vrms": "119.850",
                "Irms2": "4.660"
            }
        ];
    }
    //This function is executed before data binding happens between html and .ts file. Similar to Form_Load event in Win forms.
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = "http://grittytech.com:8080/report/report/";
        this.http.get(url).subscribe(function (response) {
            var serverReponse = response.json();
            console.log('server response: ' + serverReponse.results);
            _this.allGraphData = serverReponse.results;
            console.log('allGraphData: ' + _this.allGraphData);
            //Initializing graph data structure.
            _this.lineChartData = new Array();
            _this.lineChartData[0] = [];
            _this.lineChartData[0].data = new Array();
            _this.lineChartData[0].label = "PA";
            _this.lineChartLabels = new Array();
            //allGraphData shall be populated from url http://grittytech.com:8080/report/report/, once its CORS error is fixed.
            // Loop through allGraphData and populate line chart's graph data structure 
            for (var index = 0; index < _this.allGraphData.length; index++) {
                //Get current graph data
                var data = _this.allGraphData[index];
                //Parse reported_time into Date object
                var reportedTime = new Date(data.reported_time.toString());
                //Bind X axis values to reported_time with time string only
                _this.lineChartLabels[index] = reportedTime.toLocaleTimeString();
                // Fill "PA" value into graph's data
                _this.lineChartData[0].data[index] = data.Pa;
            }
        }, function (err) { return console.log('error: ' + err); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // This is component id. In HTML if you put app-root, it's respective .html file content will render in browser
        selector: 'app-root',
        template: __webpack_require__(139),
        styles: [__webpack_require__(134)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
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

/***/ })

},[165]);
//# sourceMappingURL=main.bundle.js.map