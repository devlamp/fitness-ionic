import {App, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {NewPage} from './pages/new/new';
import {FitnessService} from "./services/fitness";
import {ApiClientService} from "./services/index"
import {Facebook} from "./providers/facebook/facebook";
@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [FitnessService, ApiClientService,Facebook]
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      menu.open();
    });
  }
}
