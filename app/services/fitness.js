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
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var FitnessService = (function () {
    function FitnessService(http) {
        var _this = this;
        this.http = http;
        this.userid = "5735b85352fc8b2e6824a075";
        //server: String = "http://192.168.178.21:3000/";
        this.server = "http://ec2-52-91-228-142.compute-1.amazonaws.com:3000/";
        this.mapRequest("options", "options").add(function () {
            _this.mapRequest("categories", "categories");
            _this.refreshUsers();
            _this.refreshCourses();
            _this.refreshUser();
        });
    }
    FitnessService.prototype.refreshCourses = function () {
        return this.mapRequest("courses", "courses");
    };
    FitnessService.prototype.refreshUser = function () {
        var _this = this;
        return this.mapRequest("users?uid=" + this.userid, "user").add(function () {
            _this.mapRequest("users/courses?uid=" + _this.userid, "mycourses");
            _this.mapRequest("users/hosted?uid=" + _this.userid, "hostedcourses");
        });
    };
    FitnessService.prototype.mapRequest = function (query, field) {
        var _this = this;
        return this.http.get(this.server + query).map(function (res) { return res = res.json(); }).subscribe(function (data) { _this[field] = data.json(); }, function (data) { _this[field] = data.json(); });
    };
    FitnessService.prototype.request = function (query) {
        return this.http.get(this.server + query).map(function (res) { return res = res.json(); }).subscribe(function (data) { }, function (data) { });
    };
    FitnessService.prototype.addCourse = function (course) {
        var _this = this;
        return this.request("courses/add?course=" + JSON.stringify(course) + "&uid=" + this.userid).add(function () {
            _this.refreshUser();
            _this.refreshCourses();
        });
    };
    FitnessService.prototype.participate = function (course) {
        var _this = this;
        this.request("courses/participations/add?cid=" + course._id + "&uid=" + this.userid).add(function () {
            _this.refreshUser();
            _this.refreshCourses();
        });
    };
    FitnessService.prototype.departicipate = function (course) {
        var _this = this;
        this.request("courses/participations/remove?cid=" + course._id + "&uid=" + this.userid).add(function () {
            _this.refreshUser();
            _this.refreshCourses();
        });
    };
    FitnessService.prototype.isParticipating = function (courseid) {
        return (this.user.courses.indexOf(courseid) > -1);
    };
    FitnessService.prototype.getIcon = function (category) {
        var output;
        this.options.categories.forEach(function (element) {
            if (element.name === category) {
                output = element.icon;
                return;
            }
        });
        return output;
    };
    FitnessService.prototype.addUser = function (name) {
        var _this = this;
        if (name !== "") {
            this.request("users/add?name=" + name).add(function () {
                _this.refreshUsers();
            });
        }
    };
    FitnessService.prototype.refreshUsers = function () {
        return this.mapRequest("users", "users");
    };
    FitnessService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FitnessService);
    return FitnessService;
}());
exports.FitnessService = FitnessService;
