import {Page} from 'ionic-angular';
import {FitnessService} from "../../services/fitness";
import { Inject } from 'angular2/core';

@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
  constructor( @Inject(FitnessService) fitness: FitnessService) {
    this.fitness = fitness;
    
    
  }
  
  username:string;
  fitness:FitnessService;
  
  addUser() {
    this.fitness.addUser(this.username);
    this.username = "";
  }
  
  select(user) {
    this.fitness.userid = user._id;
    this.fitness.refreshUser();
  }
  
  selected(user) {
    return (user._id === this.fitness.userid);
  }
}
