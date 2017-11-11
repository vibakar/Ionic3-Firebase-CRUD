import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import { ShoppingService } from '../../services/shopping.service';
import { Item } from '../../models/item.model';

@IonicPage()
@Component({
  selector: 'page-list-shopping-item',
  templateUrl: 'list-shopping-item.html',
})
export class ListShoppingItemPage {
  private shoppingList$: Observable<Item[]>;
  name:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public shoppingService: ShoppingService,private afAuth: AngularFireAuth) {
  	this.getShoppingList();
    this.name = this.navParams.get('name');
  }

   getShoppingList(){
   	this.shoppingList$ = this.shoppingService
              .getShoppingList()
              .snapshotChanges()
              .map(changes => {
                return changes.map(c=>({
                  key: c.payload.key,
                  ...c.payload.val()
                }))
              });
  }

  doRefresh(refresher) {
  	this.getShoppingList();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  signOut() {
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot('HomePage');
  }

}
