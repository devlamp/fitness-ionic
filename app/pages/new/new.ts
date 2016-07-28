import {Page, NavController} from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent } from 'ionic-native';
// --variable API_KEY_FOR_ANDROID="AIzaSyBsV9L67Bz9TlD848XiKAmUa4OgJ9qn9qA" --variable API_KEY_FOR_IOS="AIzaSyBeRGZG_iAgGaJTMZfr9SG7eg-gZgMmHvM"
import {Page1} from '../page1/page1';
import {Page2} from '../page2/page2';
import {Page3} from '../page3/page3';

import {FitnessService} from "../../services/fitness";
import { Inject } from 'angular2/core';


@Page({
  templateUrl: 'build/pages/new/new.html'
})
export class NewPage {

  constructor(private _nav: NavController, @Inject(FitnessService) fitness: FitnessService) {
      this.fitness = fitness;
  }
  
  
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Page1;
  tab2Root: any = Page2;
  tab3Root: any = Page3;
  fitness: any;
  
  courses: any[];
  
  onNavigate(course: any) {
    this._nav.push(Page1, { course: course});
    let map = new GoogleMap('gmap');
    map.on(GoogleMapsEvent.MAP_READY).subscribe(() => console.log('Map is ready!'));
  }
  
  addCourse() {
    this._nav.push(Page2);
  }
}
