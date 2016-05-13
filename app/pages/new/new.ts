import {Page, NavController} from 'ionic-angular';
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
  }
  
  addCourse() {
    this._nav.push(Page2);
  }
}
