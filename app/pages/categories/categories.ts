import {Page, NavController} from 'ionic-angular';
import {Page1} from '../page1/page1';
import {Page2} from '../page2/page2';
import {Page3} from '../page3/page3';
import {CategoryPage} from '../category/category';
import {FitnessService} from "../../services/fitness";
import { Inject } from 'angular2/core';

@Page({
  templateUrl: 'build/pages/categories/categories.html',
  
})
export class CategoriesPage {

  constructor(private _nav: NavController, @Inject(FitnessService) fitness: FitnessService) {
 
     
      this.fitness = fitness;
  }
  
  fitness: FitnessService;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Page1;
  tab2Root: any = Page2;
  tab3Root: any = Page3;

  categories: any = [
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
  ]


  onNavigate(category) {
    this._nav.push(CategoryPage, { category: category });
  }

  addCourse() {
    this._nav.push(Page2);
  }
}
