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
var ionic_angular_1 = require('ionic-angular');
var page1_1 = require('../page1/page1');
var page2_1 = require('../page2/page2');
var page3_1 = require('../page3/page3');
var fitness_1 = require("../../services/fitness");
var core_1 = require('angular2/core');
var MyCoursesPage = (function () {
    function MyCoursesPage(_nav, fitness) {
        this._nav = _nav;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = page1_1.Page1;
        this.tab2Root = page2_1.Page2;
        this.tab3Root = page3_1.Page3;
        this.fitness = fitness;
    }
    MyCoursesPage.prototype.onNavigate = function (course) {
        this._nav.push(page1_1.Page1, { course: course });
    };
    MyCoursesPage.prototype.isOnWaitList = function (course) {
        return !(course.participants.indexOf(this.fitness.userid) < course.maxParticipants);
    };
    MyCoursesPage.prototype.waitListCount = function (list) {
        var _this = this;
        var counter = 0;
        list.forEach(function (element) {
            if (_this.isOnWaitList(element)) {
                counter++;
            }
        });
        return counter;
    };
    MyCoursesPage.prototype.addCourse = function () {
        this._nav.push(page2_1.Page2);
    };
    MyCoursesPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/mycourses/mycourses.html'
        }),
        __param(1, core_1.Inject(fitness_1.FitnessService)), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, fitness_1.FitnessService])
    ], MyCoursesPage);
    return MyCoursesPage;
}());
exports.MyCoursesPage = MyCoursesPage;
