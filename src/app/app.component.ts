import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Flashlight } from '@ionic-native/flashlight';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(private screenOrientation: ScreenOrientation, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private flashlight: Flashlight) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.flashlight.switchOn();
      statusBar.hide();
      splashScreen.hide();
    });
  }
}

