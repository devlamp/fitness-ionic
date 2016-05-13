import {Page, NavController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {FitnessService} from "../../services/fitness";
import { Inject,AfterViewInit } from 'angular2/core';
/// <reference path="./google.maps.d.ts" />

@Page({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2  implements AfterViewInit {
  constructor(private _nav: NavController,  @Inject(FitnessService) fitness: FitnessService) {
    this.fitness = fitness;
    
    
  }
  
  ngAfterViewInit() {
    
    var mapOptions = {
      zoom: 0,
      center: this.defaultLatLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }
  
    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    this.geo = new google.maps.Geocoder();
    var input = (document.getElementById("mapinput") as HTMLInputElement);
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', ()=>{
       this.course.location = autocomplete.getPlace().formatted_address;
       this.map.panTo(autocomplete.getPlace().geometry.location);
       this.map.setZoom(16);
    });
    
  }
  
  defaultLatLng = new google.maps.LatLng(30,0);
  map:google.maps.Map;
  geo:google.maps.Geocoder;
  address:any;
  course: any = { "maxParticipants": 10, "participants": [], location: "" };
  fitness: FitnessService

  number(value) {
    return parseInt(value.replace(/\D/g,''));
  }
  
  validate(address) {
    this.map.setCenter(this.defaultLatLng);
    this.map.setZoom(0);
    
    let bla = this;
    
    this.geo.geocode({'address': address }, function(results, status) {
      switch(status) {
        case google.maps.GeocoderStatus.OK:
         
          bla.address = results;
          
          bla.map.fitBounds(results[0].geometry.viewport);
          break;
        case google.maps.GeocoderStatus.ZERO_RESULTS:
          break;
        default:
          alert("An error occured while validating this address")
      }
    });
  }
  
  plz(value) {
    let p = value.replace(/\D/g,'');
    
    if (p.length > 5) {
      p = p.substring(0,5);
    }
    return p;
  }

  addCourse() {
    this.fitness.addCourse(this.course);
    this._nav.popToRoot();
  }
}
