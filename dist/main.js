/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");;

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");;

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(1);
const app_controller_1 = __webpack_require__(4);
const app_service_1 = __webpack_require__(5);
const mongoose_1 = __webpack_require__(14);
const cat_schema_1 = __webpack_require__(18);
const config_1 = __webpack_require__(19);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot('mongodb://172.20.0.2/nest'),
            mongoose_1.MongooseModule.forFeature([{ name: cat_schema_1.Cat.name, schema: cat_schema_1.CatSchema }])
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(5);
const create_cat_dto_1 = __webpack_require__(16);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    setHello(cat) {
        return this.appService.store(cat);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_cat_dto_1.CreateCatDto !== "undefined" && create_cat_dto_1.CreateCatDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "setHello", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [typeof (_b = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _b : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const newrelic_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(14);
const mongoose_2 = __webpack_require__(15);
const create_cat_dto_1 = __webpack_require__(16);
const cat_schema_1 = __webpack_require__(18);
const newrelic_2 = __webpack_require__(11);
let AppService = class AppService {
    constructor(catModel) {
        this.catModel = catModel;
    }
    getHello() {
        newrelic_2.addCustomSpanAttribute('message', 'estoy en getHello');
        return this.getText();
    }
    async getText() {
        newrelic_2.addCustomSpanAttribute('message', 'estoy en getText');
        "".split('.')[0].s.toString();
        return 'Hello World!';
    }
    store(cat) {
        return this.catModel.create(cat);
    }
};
__decorate([
    newrelic_1.Segment(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppService.prototype, "getHello", null);
__decorate([
    newrelic_1.Segment(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppService.prototype, "getText", null);
__decorate([
    newrelic_1.Segment(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_cat_dto_1.CreateCatDto !== "undefined" && create_cat_dto_1.CreateCatDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], AppService.prototype, "store", null);
AppService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(cat_schema_1.Cat.name)),
    __metadata("design:paramtypes", [typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], AppService);
exports.AppService = AppService;


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(13), exports);


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NewrelicModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewrelicModule = void 0;
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const apm_error_interceptor_1 = __webpack_require__(8);
let NewrelicModule = NewrelicModule_1 = class NewrelicModule {
    static forRoot(options) {
        var _a;
        return {
            global: (_a = options === null || options === void 0 ? void 0 : options.global) !== null && _a !== void 0 ? _a : true,
            module: NewrelicModule_1,
            providers: [
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: apm_error_interceptor_1.ApmErrorInterceptor,
                }
            ],
            exports: [],
        };
    }
};
NewrelicModule = NewrelicModule_1 = __decorate([
    common_1.Module({})
], NewrelicModule);
exports.NewrelicModule = NewrelicModule;


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApmErrorInterceptor = void 0;
const common_1 = __webpack_require__(1);
const rxjs_1 = __webpack_require__(9);
const operators_1 = __webpack_require__(10);
const newrelic_1 = __webpack_require__(11);
let ApmErrorInterceptor = class ApmErrorInterceptor {
    constructor() { }
    intercept(context, next) {
        return next.handle().pipe(operators_1.catchError((err) => {
            newrelic_1.noticeError(err);
            return rxjs_1.throwError(err);
        }));
    }
};
ApmErrorInterceptor = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ApmErrorInterceptor);
exports.ApmErrorInterceptor = ApmErrorInterceptor;


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("rxjs");;

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("rxjs/operators");;

/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("newrelic");;

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewrelicService = void 0;
const common_1 = __webpack_require__(1);
const newrelic_1 = __webpack_require__(11);
let NewrelicService = class NewrelicService {
    getTransaction() {
        return newrelic_1.getTransaction();
    }
    startWebTransaction(url, handle) {
        return newrelic_1.startWebTransaction(url, handle);
    }
    startSegment(name, record, handler, callback) {
        return newrelic_1.startSegment(name, record, handler, callback);
    }
    captureError(error, customAttributes) {
        newrelic_1.noticeError(error, customAttributes);
    }
    setUserContext(id, email, username) {
        if (id) {
            newrelic_1.addCustomAttribute('id', id);
        }
        if (email) {
            newrelic_1.addCustomAttribute('email', email);
        }
        if (username) {
            newrelic_1.addCustomAttribute('username', username);
        }
    }
};
NewrelicService = __decorate([
    common_1.Injectable()
], NewrelicService);
exports.NewrelicService = NewrelicService;


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Segment = void 0;
const newrelic_1 = __webpack_require__(11);
function Segment(options = { record: true }) {
    return function (target, name, descriptor) {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            return newrelic_1.startSegment(options.name || name, options.record, () => method.apply(this, args));
        };
    };
}
exports.Segment = Segment;


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");;

/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCatDto = void 0;
const class_validator_1 = __webpack_require__(17);
class CreateCatDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCatDto.prototype, "name", void 0);
exports.CreateCatDto = CreateCatDto;


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("class-validator");;

/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CatSchema = exports.Cat = void 0;
const mongoose_1 = __webpack_require__(14);
let Cat = class Cat {
};
__decorate([
    mongoose_1.Prop({ unique: true }),
    __metadata("design:type", String)
], Cat.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Cat.prototype, "age", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Cat.prototype, "breed", void 0);
Cat = __decorate([
    mongoose_1.Schema()
], Cat);
exports.Cat = Cat;
exports.CatSchema = mongoose_1.SchemaFactory.createForClass(Cat);


/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = require("@nestjs/config");;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
__webpack_require__(11);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LW5ld3JlbGljL2V4dGVybmFsIFwiQG5lc3Rqcy9jb21tb25cIiIsIndlYnBhY2s6Ly90ZXN0LW5ld3JlbGljL2V4dGVybmFsIFwiQG5lc3Rqcy9jb3JlXCIiLCJ3ZWJwYWNrOi8vdGVzdC1uZXdyZWxpYy8uL3NyYy9hcHAubW9kdWxlLnRzIiwid2VicGFjazovL3Rlc3QtbmV3cmVsaWMvLi9zcmMvYXBwLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vdGVzdC1uZXdyZWxpYy8uL3NyYy9hcHAuc2VydmljZS50cyIsIndlYnBhY2s6Ly90ZXN0LW5ld3JlbGljLy4vbGlicy9uZXdyZWxpYy9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdGVzdC1uZXdyZWxpYy8uL2xpYnMvbmV3cmVsaWMvc3JjL25ld3JlbGljLm1vZHVsZS50cyIsIndlYnBhY2s6Ly90ZXN0LW5ld3JlbGljLy4vbGlicy9uZXdyZWxpYy9zcmMvYXBtLWVycm9yLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovL3Rlc3QtbmV3cmVsaWMvZXh0ZXJuYWwgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vdGVzdC1uZXdyZWxpYy9leHRlcm5hbCBcInJ4anMvb3BlcmF0b3JzXCIiLCJ3ZWJwYWNrOi8vdGVzdC1uZXdyZWxpYy9leHRlcm5hbCBcIm5ld3JlbGljXCIiLCJ3ZWJwYWNrOi8vdGVzdC1uZXdyZWxpYy8uL2xpYnMvbmV3cmVsaWMvc3JjL25ld3JlbGljLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vdGVzdC1uZXdyZWxpYy8uL2xpYnMvbmV3cmVsaWMvc3JjL2RlY29yYXRvcy9zZWdtZW50LmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly90ZXN0LW5ld3JlbGljL2V4dGVybmFsIFwiQG5lc3Rqcy9tb25nb29zZVwiIiwid2VicGFjazovL3Rlc3QtbmV3cmVsaWMvZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovL3Rlc3QtbmV3cmVsaWMvLi9zcmMvY3JlYXRlLWNhdC5kdG8udHMiLCJ3ZWJwYWNrOi8vdGVzdC1uZXdyZWxpYy9leHRlcm5hbCBcImNsYXNzLXZhbGlkYXRvclwiIiwid2VicGFjazovL3Rlc3QtbmV3cmVsaWMvLi9zcmMvc2NoZW1hcy9jYXQuc2NoZW1hLnRzIiwid2VicGFjazovL3Rlc3QtbmV3cmVsaWMvZXh0ZXJuYWwgXCJAbmVzdGpzL2NvbmZpZ1wiIiwid2VicGFjazovL3Rlc3QtbmV3cmVsaWMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVzdC1uZXdyZWxpYy8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw0Qzs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHdDQUF3QztBQUN4QyxnREFBaUQ7QUFDakQsNkNBQTJDO0FBQzNDLDJDQUFrRDtBQUNsRCw2Q0FBc0Q7QUFDdEQseUNBQThDO0FBYTlDLElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7Q0FBSTtBQUFiLFNBQVM7SUFYckIsZUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ1AscUJBQVksQ0FBQyxPQUFPLEVBQUU7WUFDdEIseUJBQWMsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLENBQUM7WUFDbkQseUJBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsc0JBQVMsRUFBRSxDQUFDLENBQUM7U0FDbkU7UUFDRCxXQUFXLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQzVCLFNBQVMsRUFBRTtZQUNULHdCQUFVO1NBQ1g7S0FDRixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ0Qix3Q0FBNkQ7QUFDN0QsNkNBQTJDO0FBQzNDLGlEQUFnRDtBQUdoRCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBQ3hCLFlBQTZCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDO0lBR3hELFFB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M0QsNEM7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7O0FDdEJBLHdDQUFnRDtBQUNoRCxzQ0FBMkM7QUFDM0MsNENBQXlDO0FBQ3pDLHdCQUFrQjtBQUVsQixLQUFLLFVBQVUsU0FBUztJQUN0QixNQUFNLEdBQUcsR0FBRyxNQUFNLGtCQUFXLENBQUMsTUFBTSxDQUFDLHNCQUFTLENBQUMsQ0FBQztJQUNoRCxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksdUJBQWMsRUFBRSxDQUFDLENBQUM7SUFDekMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFDRCxTQUFTLEVBQUUsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb21tb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29yZVwiKTs7IiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gJy4vYXBwLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vYXBwLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9uZ29vc2VNb2R1bGUgfSBmcm9tICdAbmVzdGpzL21vbmdvb3NlJztcbmltcG9ydCB7IENhdCwgQ2F0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWFzL2NhdC5zY2hlbWEnO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgTW9uZ29vc2VNb2R1bGUuZm9yUm9vdCgnbW9uZ29kYjovLzE3Mi4yMC4wLjIvbmVzdCcpLFxuICAgIE1vbmdvb3NlTW9kdWxlLmZvckZlYXR1cmUoW3sgbmFtZTogQ2F0Lm5hbWUsIHNjaGVtYTogQ2F0U2NoZW1hIH1dKVxuICBdLFxuICBjb250cm9sbGVyczogW0FwcENvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFsgICBcbiAgICBBcHBTZXJ2aWNlXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEJvZHksIENvbnRyb2xsZXIsIEdldCwgUG9zdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuL2FwcC5zZXJ2aWNlJztcbmltcG9ydCB7IENyZWF0ZUNhdER0byB9IGZyb20gJy4vY3JlYXRlLWNhdC5kdG8nO1xuXG5AQ29udHJvbGxlcigpXG5leHBvcnQgY2xhc3MgQXBwQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYXBwU2VydmljZTogQXBwU2VydmljZSkgeyB9XG5cbiAgQEdldCgpXG4gIGdldEhlbGxvKCkge1xuICAgIHJldHVybiB0aGlzLmFwcFNlcnZpY2UuZ2V0SGVsbG8oKTtcbiAgfVxuXG4gIEBQb3N0KClcbiAgc2V0SGVsbG8oQEJvZHkoKSBjYXQ6IENyZWF0ZUNhdER0bykge1xuICAgIHJldHVybiB0aGlzLmFwcFNlcnZpY2Uuc3RvcmUoY2F0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2VnbWVudCB9IGZyb20gJ0BhcHAvbmV3cmVsaWMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9tb25nb29zZSc7XG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IENyZWF0ZUNhdER0byB9IGZyb20gJy4vY3JlYXRlLWNhdC5kdG8nO1xuaW1wb3J0IHsgQ2F0LCBDYXREb2N1bWVudCB9IGZyb20gJy4vc2NoZW1hcy9jYXQuc2NoZW1hJztcbmltcG9ydCB7IGFkZEN1c3RvbVNwYW5BdHRyaWJ1dGUgfSBmcm9tICduZXdyZWxpYyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0TW9kZWwoQ2F0Lm5hbWUpIHByaXZhdGUgcmVhZG9ubHkgY2F0TW9kZWw6IE1vZGVsPENhdERvY3VtZW50PlxuICApIHsgfVxuXG4gIEBTZWdtZW50KClcbiAgZ2V0SGVsbG8oKSB7XG4gICAgYWRkQ3VzdG9tU3BhbkF0dHJpYnV0ZSgnbWVzc2FnZScsICdlc3RveSBlbiBnZXRIZWxsbycpO1xuICAgIHJldHVybiB0aGlzLmdldFRleHQoKTtcbiAgfVxuXG4gIEBTZWdtZW50KClcbiAgYXN5bmMgZ2V0VGV4dCgpIHtcbiAgICBhZGRDdXN0b21TcGFuQXR0cmlidXRlKCdtZXNzYWdlJywgJ2VzdG95IGVuIGdldFRleHQnKTtcbiAgICAoXCJcIi5zcGxpdCgnLicpWzBdIGFzIGFueSkucy50b1N0cmluZygpO1xuICAgIHJldHVybiAnSGVsbG8gV29ybGQhJztcbiAgfVxuXG4gIEBTZWdtZW50KClcbiAgc3RvcmUoY2F0OiBDcmVhdGVDYXREdG8pIHtcbiAgICByZXR1cm4gdGhpcy5jYXRNb2RlbC5jcmVhdGUoY2F0KTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9uZXdyZWxpYy5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9uZXdyZWxpYy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZGVjb3JhdG9zL3NlZ21lbnQuZGVjb3JhdG9yJztcbiIsImltcG9ydCB7IER5bmFtaWNNb2R1bGUsIE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEFQUF9JTlRFUkNFUFRPUiB9IGZyb20gJ0BuZXN0anMvY29yZSc7XG5pbXBvcnQgeyBBcG1FcnJvckludGVyY2VwdG9yIH0gZnJvbSAnLi9hcG0tZXJyb3IuaW50ZXJjZXB0b3InO1xuXG5ATW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIE5ld3JlbGljTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoXG4gICAgb3B0aW9ucz86IHsgZ2xvYmFsPzogYm9vbGVhbiB9XG4gICk6IER5bmFtaWNNb2R1bGUge1xuICAgIHJldHVybiB7XG4gICAgICBnbG9iYWw6IG9wdGlvbnM/Lmdsb2JhbCA/PyB0cnVlLFxuICAgICAgbW9kdWxlOiBOZXdyZWxpY01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOVEVSQ0VQVE9SLFxuICAgICAgICAgIHVzZUNsYXNzOiBBcG1FcnJvckludGVyY2VwdG9yLFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgZXhwb3J0czogW10sXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDYWxsSGFuZGxlcixcbiAgICBOZXN0SW50ZXJjZXB0b3IsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uL2ludGVyZmFjZXMvZmVhdHVyZXMvbmVzdC1pbnRlcmNlcHRvci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRXhlY3V0aW9uQ29udGV4dCwgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBub3RpY2VFcnJvciB9IGZyb20gJ25ld3JlbGljJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwbUVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBOZXN0SW50ZXJjZXB0b3Ige1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgcHVibGljIGludGVyY2VwdChcbiAgICAgICAgY29udGV4dDogRXhlY3V0aW9uQ29udGV4dCxcbiAgICAgICAgbmV4dDogQ2FsbEhhbmRsZXI8YW55PixcbiAgICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUoKS5waXBlKFxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgbm90aWNlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvb3BlcmF0b3JzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXdyZWxpY1wiKTs7IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7XG4gICAgc3RhcnRTZWdtZW50LFxuICAgIG5vdGljZUVycm9yLFxuICAgIGdldFRyYW5zYWN0aW9uLFxuICAgIGFkZEN1c3RvbUF0dHJpYnV0ZSxcbiAgICBzdGFydFdlYlRyYW5zYWN0aW9uXG59IGZyb20gJ25ld3JlbGljJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5ld3JlbGljU2VydmljZSB7XG4gICAgZ2V0VHJhbnNhY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBnZXRUcmFuc2FjdGlvbigpO1xuICAgIH1cblxuICAgIHN0YXJ0V2ViVHJhbnNhY3Rpb248VD4oXG4gICAgICAgIHVybDogc3RyaW5nLFxuICAgICAgICBoYW5kbGU6ICguLi5hcmdzOiBhbnlbXSkgPT4gVFxuICAgICk6IFQge1xuICAgICAgICByZXR1cm4gc3RhcnRXZWJUcmFuc2FjdGlvbjxUPih1cmwsIGhhbmRsZSk7XG4gICAgfVxuXG4gICAgc3RhcnRTZWdtZW50PFQsIEMgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueT4oXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgcmVjb3JkOiBib29sZWFuLFxuICAgICAgICBoYW5kbGVyOiAoY2I/OiBDKSA9PiBULFxuICAgICAgICBjYWxsYmFjaz86IEMsXG4gICAgKTogVCB7XG4gICAgICAgIHJldHVybiBzdGFydFNlZ21lbnQobmFtZSwgcmVjb3JkLCBoYW5kbGVyLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgY2FwdHVyZUVycm9yKFxuICAgICAgICBlcnJvcjogRXJyb3IsXG4gICAgICAgIGN1c3RvbUF0dHJpYnV0ZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfVxuICAgICk6IHZvaWQge1xuICAgICAgICBub3RpY2VFcnJvcihlcnJvciwgY3VzdG9tQXR0cmlidXRlcyk7XG4gICAgfVxuXG4gICAgc2V0VXNlckNvbnRleHQoXG4gICAgICAgIGlkPzogc3RyaW5nIHwgbnVtYmVyLFxuICAgICAgICBlbWFpbD86IHN0cmluZyxcbiAgICAgICAgdXNlcm5hbWU/OiBzdHJpbmcsXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgYWRkQ3VzdG9tQXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW1haWwpIHtcbiAgICAgICAgICAgIGFkZEN1c3RvbUF0dHJpYnV0ZSgnZW1haWwnLCBlbWFpbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVzZXJuYW1lKSB7XG4gICAgICAgICAgICBhZGRDdXN0b21BdHRyaWJ1dGUoJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgc3RhcnRTZWdtZW50IH0gZnJvbSAnbmV3cmVsaWMnO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VnbWVudChcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gICAgICAgIHJlY29yZD86IGJvb2xlYW4sXG4gICAgfSA9IHsgcmVjb3JkOiB0cnVlIH1cbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoXG4gICAgICAgIHRhcmdldDogUmVjb3JkPHN0cmluZywgYW55PixcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3JcbiAgICApIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICguLi5hcmdzOiBBcnJheTxhbnk+KSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhcnRTZWdtZW50KFxuICAgICAgICAgICAgICAgIG9wdGlvbnMubmFtZSB8fCBuYW1lLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMucmVjb3JkLFxuICAgICAgICAgICAgICAgICgpID0+IG1ldGhvZC5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL21vbmdvb3NlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTs7IiwiaW1wb3J0IHsgSXNTdHJpbmcgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ2F0RHRvIHtcbiAgICBASXNTdHJpbmcoKVxuICAgIG5hbWU6IHN0cmluZztcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzcy12YWxpZGF0b3JcIik7OyIsImltcG9ydCB7IFByb3AsIFNjaGVtYSwgU2NoZW1hRmFjdG9yeSB9IGZyb20gJ0BuZXN0anMvbW9uZ29vc2UnO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCB0eXBlIENhdERvY3VtZW50ID0gQ2F0ICYgRG9jdW1lbnQ7XG5cbkBTY2hlbWEoKVxuZXhwb3J0IGNsYXNzIENhdCB7XG4gIEBQcm9wKHsgdW5pcXVlOiB0cnVlIH0pXG4gIG5hbWU6IHN0cmluZztcblxuICBAUHJvcCgpXG4gIGFnZTogbnVtYmVyO1xuXG4gIEBQcm9wKClcbiAgYnJlZWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IENhdFNjaGVtYSA9IFNjaGVtYUZhY3RvcnkuY3JlYXRlRm9yQ2xhc3MoQ2F0KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvbmZpZ1wiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IFZhbGlkYXRpb25QaXBlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcbmltcG9ydCAnbmV3cmVsaWMnO1xuXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIGNvbnN0IGFwcCA9IGF3YWl0IE5lc3RGYWN0b3J5LmNyZWF0ZShBcHBNb2R1bGUpO1xuICBhcHAudXNlR2xvYmFsUGlwZXMobmV3IFZhbGlkYXRpb25QaXBlKCkpO1xuICBhd2FpdCBhcHAubGlzdGVuKDMwMDApO1xufVxuYm9vdHN0cmFwKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9