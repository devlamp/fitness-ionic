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
require('rxjs/add/operator/map');
var fitness_1 = require("../../services/fitness");
var core_1 = require('angular2/core');
/// <reference path="./google.maps.d.ts" />
var Page2 = (function () {
    function Page2(_nav, fitness) {
        this._nav = _nav;
        this.defaultLatLng = new google.maps.LatLng(30, 0);
        this.course = { "maxParticipants": 10, "participants": [], location: "" };
        this.fitness = fitness;
    }
    Page2.prototype.ngAfterViewInit = function () {
        var _this = this;
        var mapOptions = {
            zoom: 0,
            center: this.defaultLatLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        this.geo = new google.maps.Geocoder();
        var input = document.getElementById("mapinput");
        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.addListener('place_changed', function () {
            _this.course.location = autocomplete.getPlace().formatted_address;
            _this.map.panTo(autocomplete.getPlace().geometry.location);
            _this.map.setZoom(16);
        });
    };
    Page2.prototype.number = function (value) {
        return parseInt(value.replace(/\D/g, ''));
    };
    Page2.prototype.validate = function (address) {
        this.map.setCenter(this.defaultLatLng);
        this.map.setZoom(0);
        var bla = this;
        this.geo.geocode({ 'address': address }, function (results, status) {
            switch (status) {
                case google.maps.GeocoderStatus.OK:
                    bla.address = results;
                    bla.map.fitBounds(results[0].geometry.viewport);
                    break;
                case google.maps.GeocoderStatus.ZERO_RESULTS:
                    break;
                default:
                    alert("An error occured while validating this address");
            }
        });
    };
    Page2.prototype.plz = function (value) {
        var p = value.replace(/\D/g, '');
        if (p.length > 5) {
            p = p.substring(0, 5);
        }
        return p;
    };
    Page2.prototype.addCourse = function () {
        this.fitness.addCourse(this.course);
        this._nav.popToRoot();
    };
    Page2 = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/page2/page2.html',
        }),
        __param(1, core_1.Inject(fitness_1.FitnessService)), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, fitness_1.FitnessService])
    ], Page2);
    return Page2;
}());
exports.Page2 = Page2;
