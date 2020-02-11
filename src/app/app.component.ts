import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

 AppPages = [{
 title: 'Home',
 url: '/home',
 icon: 'home'
 },

 {
  title: 'investigacion',
  url: 'investgacion',
  icon: ''
},

{
  title: 'MyAccount',
  url: 'account',
  icon: 'user'
}]

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.router.navigateByUrl('list');
      this.splashScreen.hide();
    });
  }
}
