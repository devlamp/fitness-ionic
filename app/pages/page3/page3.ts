import {Page} from 'ionic-angular';
import {FitnessService} from "../../services/fitness";
import { Inject } from 'angular2/core';
import { Facebook} from '../../providers/facebook/facebook'

@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
  constructor( @Inject(FitnessService) fitness: FitnessService, private fb: Facebook) {
    this.fitness = fitness;
    
    
  }
  
  username:string;
  fitness:FitnessService;

  email:any;
  name:any;
  id:any;
  
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

  login() {
        this.fb.login().then(() => {
            this.fb.getCurrentUserProfile().then(
                (profileData) => {
                    var profile:any = profileData;
                    this.email = profile.email;
                    this.name = profile.name;
                    this.id = profile.id;
                }
            );
        });
    }
}
