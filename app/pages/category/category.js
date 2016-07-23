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
var fitness_1 = require("../../services/fitness");
var core_1 = require('angular2/core');
var CategoryPage = (function () {
    function CategoryPage(_nav, params, fitness) {
        this._nav = _nav;
        this.Category = params.get("category");
        this.fitness = fitness;
        var query = { "category": this.Category._id };
        fitness.mapRequest("courses?query=" + JSON.stringify(query), "coursecategory");
    }
    CategoryPage.prototype.onNavigate = function (course) {
        this._nav.push(page1_1.Page1, { course: course });
    };
    CategoryPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/category/category.html'
        }),
        __param(2, core_1.Inject(fitness_1.FitnessService)), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams, fitness_1.FitnessService])
    ], CategoryPage);
    return CategoryPage;
}());
exports.CategoryPage = CategoryPage;
