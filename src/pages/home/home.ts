import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { ShoppingService } from '../../services/shopping.service';
import { Item } from '../../models/item.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private shoppingList$: Observable<Item[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public shoppingService: ShoppingService) {
  	this.shoppingList$ = this.shoppingService
  						.getShoppingList()
						.snapshotChanges()
						.map(changes => {
							return changes.map(c=>({
								key: c.payload.key,
								...c.payload.val()
							}))
						})
  }


}
