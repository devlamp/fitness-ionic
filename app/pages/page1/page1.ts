import {Page, NavParams, NavController} from 'ionic-angular';
import {MyCoursesPage} from '../mycourses/mycourses';
import {FitnessService} from "../../services/fitness";
import { Inject } from 'angular2/core';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  constructor(private _nav: NavController, params: NavParams, @Inject(FitnessService) fitness: FitnessService) {
      this.fitness = fitness;
      
      
      
    this.Course = params.get("course");
  }
  
  fitness: FitnessService;
  Course: any;
  
  participate() {
    this.fitness.participate(this.Course);
    this._nav.popToRoot().then(()=>{this._nav.push(MyCoursesPage)});
  }
  
  departicipate() {
    this.fitness.departicipate(this.Course);
    this._nav.popToRoot().then(()=>{this._nav.push(MyCoursesPage)});
  }
  
}
