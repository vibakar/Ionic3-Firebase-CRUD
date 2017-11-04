import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item.model';
import { ShoppingService } from '../../services/shopping.service';
import { ToastService } from '../../services/toast.service';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private shoppingService: ShoppingService, public toast: ToastService) {
  }																																														

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(item: Item){
  	this.shoppingService.addShoppingItem(item)
                        .then((ref)=>{
                          this.navCtrl.setRoot('HomePage');
                          this.toast.show(`${item.name} added!!`);
                        });
  	
  }

}
