import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook';

import { ToastService } from '../../services/toast.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  displayName:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth: AngularFireAuth, private facebook: Facebook,
    private platform: Platform, private toast: ToastService) {
  	afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;        
        return;
      }
      this.displayName = user.displayName;
      this.navCtrl.setRoot('ListShoppingItemPage');
    });
  }

  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      this.toast.showLoading("Please wait..",30000);
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res =>{ 
          console.log(res)
        });
    }  
  }

}
