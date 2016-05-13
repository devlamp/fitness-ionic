import {Page, NavController} from 'ionic-angular';
import {NewPage} from '../new/new';
import {CategoriesPage} from '../categories/categories';
import {MyCoursesPage} from '../mycourses/mycourses';
import {Page3} from "../page3/page3"


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  constructor(private _nav: NavController) {

  }
  // this tells the tabs component which Pages
  // should be each tab's root Page
  new: any = NewPage;
  categories: any = CategoriesPage;
  myCourses: any = MyCoursesPage;
  profile: any = Page3;
}
