import {Page, NavParams, NavController} from 'ionic-angular';
import {Page1} from '../page1/page1';
import {Page2} from '../page2/page2';
import {Page3} from '../page3/page3';
import {FitnessService} from "../../services/fitness";
import { Inject } from 'angular2/core';

@Page({
  templateUrl: 'build/pages/category/category.html'
})
export class CategoryPage {

  constructor(private _nav: NavController, params: NavParams, @Inject(FitnessService) fitness: FitnessService) {

    this.Category = params.get("category");
    this.fitness = fitness;
    
    let query = {"category": this.Category._id};
    fitness.mapRequest("courses?query="+ JSON.stringify(query), "coursecategory");
  }
  
  fitness: FitnessService;
  Category: any;
  
  onNavigate(course: any) {
    this._nav.push(Page1, { course: course});
  }

}
