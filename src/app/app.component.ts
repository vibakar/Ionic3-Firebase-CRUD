import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';

// import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = 'HomePage';
  @ViewChild('content') navCtrl: NavController;
  displayName:string;
  profilePicUrl:string;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private afAuth: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;        
        return;
      }
      this.displayName = user.displayName;
      this.profilePicUrl = user.photoURL;
      console.log('got disp name'+ this.displayName)
    });
  }

  signOut(){
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot('HomePage');
  }
}

