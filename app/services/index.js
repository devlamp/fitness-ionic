"use strict";
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
/* tslint:disable */
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/Rx');
var ApiClientService = (function () {
    function ApiClientService(http) {
        this.http = http;
        this.domain = 'https://findmyfitness.azurewebsites.net';
    }
    /*
      constructor(public http: Http, options?: any) {
          var domain = (typeof options === 'object') ? options.domain : options;
          this.domain = typeof(domain) === 'string' ? domain : '';
          
          if(this.domain.length === 0) {
              throw new Error('Domain parameter must be specified as a string.');
          }
          
      }
    */
    /**
  *
    * @method
    * @name Account_Register
    * @param {UserModel} userModel -
    *
    */
    ApiClientService.prototype.Account_Register = function (userModel) {
        var payload = {};
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        payload['userModel'] = userModel;
        var uri = "/api/Account/Register";
        alert("teat");
        return this.http
            .post(this.domain + uri, JSON.stringify(userModel), { headers: headers, search: queryParameters })
            .map(function (res) {
            alert("test");
            return res;
        });
    };
    /**
  *
    * @method
    * @name Account_GetExternalLogin
    * @param {string} provider -
    * @param {string} error -
    *
    */
    ApiClientService.prototype.Account_GetExternalLogin = function (provider, error) {
        var payload = {};
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        if (provider !== undefined) {
            queryParameters.set('provider', provider);
        }
        if (error !== undefined) {
            queryParameters.set('error', error);
        }
        var uri = "/api/Account/ExternalLogin";
        return this.http
            .get(this.domain + uri, { headers: headers, search: queryParameters })
            .map(function (res) {
            return res;
        });
    };
    /**
  *
    * @method
    * @name Account_RegisterExternal
    * @param {RegisterExternalBindingModel} model -
    *
    */
    ApiClientService.prototype.Account_RegisterExternal = function (model) {
        var payload = {};
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        payload['model'] = model;
        var uri = "/api/Account/RegisterExternal";
        return this.http
            .post(this.domain + uri, JSON.stringify(model), { headers: headers, search: queryParameters })
            .map(function (res) {
            return res;
        });
    };
    /**
  *
    * @method
    * @name Account_ObtainLocalAccessToken
    * @param {string} provider -
    * @param {string} externalAccessToken -
    *
    */
    ApiClientService.prototype.Account_ObtainLocalAccessToken = function (provider, externalAccessToken) {
        var payload = {};
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        if (provider !== undefined) {
            queryParameters.set('provider', provider);
        }
        if (externalAccessToken !== undefined) {
            queryParameters.set('externalAccessToken', externalAccessToken);
        }
        var uri = "/api/Account/ObtainLocalAccessToken";
        return this.http
            .get(this.domain + uri, { headers: headers, search: queryParameters })
            .map(function (res) {
            return res;
        });
    };
    /**
  *
    * @method
    * @name Categories_GetCategories
    *
    */
    ApiClientService.prototype.Categories_GetCategories = function () {
        var payload = {};
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var uri = "/api/categories";
        return this.http
            .get(this.domain + uri, { headers: headers, search: queryParameters })
            .map(function (res) {
            return res;
        });
    };
    /**
  *
    * @method
    * @name Categories_AddCategory
    * @param {CategoryBuildDTO} category -
    *
    */
    ApiClientService.prototype.Categories_AddCategory = function (category) {
        var payload = {};
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        payload['category'] = category;
        var uri = "/api/categories";
        return this.http
            .post(this.domain + uri, JSON.stringify(category), { headers: headers, search: queryParameters })
            .map(function (res) {
            return res;
        });
    };
    /**
  *
    * @method
    * @name Categories_GetCategory
    * @param {string} name -
    *
    */
    ApiClientService.prototype.Categories_GetCategory = function (name) {
        var payload = {};
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var uri = "/api/categories/" + name;
        return this.http
            .get(this.domain + uri, { headers: headers, search: queryParameters })
            .map(function (res) {
            return res;
        });
    };
    /**
  *
    * @method
    * @name Courses_GetCourses
    * @param {string} q -
    *
    */
    ApiClientService.prototype.Courses_GetCourses = function (q) {
        var payload = {};
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        if (q !== undefined) {
            queryParameters.set('q', q);
        }
        var uri = "/api/courses";
        return this.http
            .get(this.domain + uri, { headers: headers, search: queryParameters })
            .map(function (res) {
            return res;
        });
    };
    /**
  *
    * @method
    * @name Courses_AddCourse
    * @param {CourseBuildDTO} course -
    *
    */
    ApiClientService.prototype.Courses_AddCourse = function (course) {
        var payload = {};
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        payload['course'] = course;
        var uri = "/api/courses";
        return this.http
            .post(this.domain + uri, JSON.stringify(course), { headers: headers, search: queryParameters })
            .map(function (res) {
            return res;
        });
    };
    /**
  *
    * @method
    * @name Courses_GetCourse
    * @param {integer} id -
    *
    */
    ApiClientService.prototype.Courses_GetCourse = function (id) {
        var payload = {};
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var uri = "/api/courses/" + id;
        return this.http
            .get(this.domain + uri, { headers: headers, search: queryParameters })
            .map(function (res) {
            return res;
        });
    };
    /**
  *
    * @method
    * @name Users_GetUsers
    *
    */
    ApiClientService.prototype.Users_GetUsers = function () {
        var payload = {};
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var uri = "/api/users";
        return this.http
            .get(this.domain + uri, { headers: headers, search: queryParameters })
            .map(function (res) {
            return res;
        });
    };
    /**
  *
    * @method
    * @name Users_GetUser
    * @param {integer} id -
    *
    */
    ApiClientService.prototype.Users_GetUser = function (id) {
        var payload = {};
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var uri = "/api/users/" + id;
        return this.http
            .get(this.domain + uri, { headers: headers, search: queryParameters })
            .map(function (res) {
            return res;
        });
    };
    ApiClientService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiClientService);
    return ApiClientService;
}());
exports.ApiClientService = ApiClientService;
