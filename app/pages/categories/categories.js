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
var category_1 = require('../category/category');
var fitness_1 = require("../../services/fitness");
var core_1 = require('angular2/core');
var CategoriesPage = (function () {
    function CategoriesPage(_nav, fitness) {
        this._nav = _nav;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = page1_1.Page1;
        this.tab2Root = page2_1.Page2;
        this.tab3Root = page3_1.Page3;
        this.categories = [
            {
                name: "Radsport",
                icon: "bicycle",
                count: 10
            },
            {
                name: "Kampfsport",
                icon: "body",
                count: 11
            },
            {
                name: "Basketball",
                icon: "basketball",
                count: 34
            },
            {
                name: "Tennis",
                icon: "tennisball",
                count: 10
            }
        ];
        this.fitness = fitness;
    }
    CategoriesPage.prototype.onNavigate = function (category) {
        this._nav.push(category_1.CategoryPage, { category: category });
    };
    CategoriesPage.prototype.addCourse = function () {
        this._nav.push(page2_1.Page2);
    };
    CategoriesPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/categories/categories.html',
        }),
        __param(1, core_1.Inject(fitness_1.FitnessService)), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, fitness_1.FitnessService])
    ], CategoriesPage);
    return CategoriesPage;
}());
exports.CategoriesPage = CategoriesPage;
