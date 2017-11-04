import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item.model';
import { ShoppingService } from '../../services/shopping.service';


@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {
  item: Item = {
  	name: '',
  	quantity: undefined,
  	price: undefined
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private shoppingService: ShoppingService) {
  }																																														

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(item: Item){
  	this.shoppingService.addShoppingItem(item);
  	this.navCtrl.setRoot('HomePage');
  }

}
